"use client";

import React from "react";
import { Midi } from "@tonejs/midi";
import * as Tone from "tone";
import { CHORD_COLLECTION, SCALES_COLLECTION, NOTES_COLLECTION } from "./constants";

import styles from './index.module.css'
import { FileArrowDownIcon, VolumeHighIcon } from "../Icons";

let startAudioContext = true;

const noteSynth = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
}).toDestination();

const chordSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: "sine" },
  envelope: { attack: 0.2, decay: 0.3, sustain: 0.5, release: 0.5 },
}).toDestination();

const scaleSynth = new Tone.Synth({
  oscillator: { type: "square" },
  envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
}).toDestination();

noteSynth.volume.value = -16;
chordSynth.volume.value = -16;
scaleSynth.volume.value = -16;

const Piano = ({ selectedNotes, onNotePreview, chartType }) => {
  const selectedNotesWithoutOctave = selectedNotes.map(note => note.replace(/[0-9]/g, ''));

  const selectedClassBychartType = {
    chord: styles.selectedChord,
    scale: styles.selectedScale
  }

  return (
    <div className={styles.piano}>
      {NOTES_COLLECTION.map(({ note, isBlack, preview }) => (
        <div
          key={note}
          onMouseDown={() => onNotePreview(preview)}
          className={[
            styles.key,
            isBlack ? styles.black : '',
            selectedNotesWithoutOctave?.includes(note) ? [selectedClassBychartType[chartType], styles.selected].join(' ') : ''
          ].join(' ')}
        >
          <div className={styles.keyName}>{note}</div>
        </div>
      ))}
    </div>
  )
}

const ChordScaleExplorer = () => {
  const handleNotePreview = async note => {
    if (startAudioContext) {
      await Tone.start();
      startAudioContext = false;
    }
    noteSynth.triggerAttackRelease(note, "8n");
  };

  const handleChordPreview = async notes => {
    if (startAudioContext) {
      await Tone.start();
      startAudioContext = false;
    }
    chordSynth.triggerAttackRelease(notes, "2n");
  };

  const handleScalePreview = async notes => {
    if (startAudioContext) {
      await Tone.start();
      startAudioContext = false;
    }

    let currentTime = Tone.now();
    notes.forEach((note) => {
      scaleSynth.triggerAttackRelease(note, "16n", currentTime);
      currentTime += Tone.Time("16n").toSeconds();
    });
  };

  const handleMidiExport = ({ name, notes, type }) => {
    const midi = new Midi();
    const track = midi.addTrack();

    if (type === "chord") {
      notes.forEach((note) => {
        track.addNote({
          name: note,
          time: 0,
          duration: 1,
        });
      });
    } else if (type === "scale") {
      let currentTime = 0;

      notes.forEach((note) => {
        track.addNote({
          name: note,
          time: currentTime,
          duration: 0.5,
        });
        currentTime += 0.5;
      });
    }

    const midiBlob = new Blob([midi.toArray()], { type: "audio/midi" });
    const url = URL.createObjectURL(midiBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.mid`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.chordScaleExplorer}>
      <h1 className={styles.pageTitle}>Phrakture&apos;s Chord & Scale Explorer 🎹</h1>

      <div className={styles.chordsList}>
        {CHORD_COLLECTION.map(({ name, notes }) => (
          <div key={name} className={styles.chart}>
            <div className={styles.chordChart}>
              <div className={styles.name}>{name}</div>
              <div className={styles.chartButtons}>
                <div onMouseDown={() => handleChordPreview(notes)}>
                  <VolumeHighIcon
                    className={[styles.volumeIcon, styles.chordIcon].join(' ')}
                  />
                </div>
                <div onClick={() => handleMidiExport({ name: `${name} chord`, notes, type: "chord" })}>
                  <FileArrowDownIcon
                    className={[styles.downloadIcon, styles.chordIcon].join(' ')}
                  />
                </div>
              </div>
            </div>
            <Piano selectedNotes={notes} onNotePreview={handleNotePreview} chartType="chord" />
          </div>
        ))}
      </div>

      <div className={styles.scalesList}>
        {SCALES_COLLECTION.map(({ name, notes }) => (
          <div key={name} className={styles.chart}>
            <div className={styles.scaleChart}>
              <div className={styles.name}>{name}</div>
              <div className={styles.chartButtons}>
                <div onMouseDown={() => handleScalePreview(notes)}>
                  <VolumeHighIcon
                    className={[styles.volumeIcon, styles.scaleIcon].join(' ')}
                  />
                </div>
                <div onClick={() => handleMidiExport({ name: `${name} scale`, notes, type: "chord" })}>
                  <FileArrowDownIcon
                    className={[styles.downloadIcon, styles.scaleIcon].join(' ')}
                  />
                </div>
              </div>
            </div>
            <Piano selectedNotes={notes} onNotePreview={handleNotePreview} chartType="scale" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordScaleExplorer;
