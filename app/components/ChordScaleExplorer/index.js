"use client";

import React, { useState, useEffect } from "react";
import { Midi } from "@tonejs/midi";
import { CHORD_COLLECTION, SCALE_COLLECTION, NOTES_COLLECTION, ALL_ROOTS, ALL_TAGS } from "./constants";

import styles from './index.module.css'
import { FileArrowDownIcon, VolumeHighIcon } from "../Icons";

let startAudioContext = true;

let Tone, noteSynth, chordSynth, scaleSynth;

const initializeAudioContext = async () => {
  await Tone.start();

  noteSynth = new Tone.Synth({
    oscillator: { type: "sawtooth" },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
  }).toDestination();

  chordSynth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: "sine" },
    envelope: { attack: 0.2, decay: 0.3, sustain: 0.5, release: 0.5 },
  }).toDestination();

  scaleSynth = new Tone.Synth({
    oscillator: { type: "square" },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
  }).toDestination();

  noteSynth.volume.value = -16;
  chordSynth.volume.value = -16;
  scaleSynth.volume.value = -16;

  startAudioContext = false;
}

const Piano = ({ selectedNotes, onNotePreview, chartType }) => {
  const selectedNotesWithoutOctave = selectedNotes.map(note => note.replace(/[0-9]/g, ''));
  const rootNote = selectedNotesWithoutOctave[0]

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
            selectedNotesWithoutOctave?.includes(note) ? [selectedClassBychartType[chartType], styles.selected].join(' ') : '',
            rootNote === note ? styles.rootNote : ''
          ].join(' ')}
        >
          <div className={styles.keyName}>{note}</div>
        </div>
      ))}
    </div>
  )
}

const DEFAULT_ROOTS = ["C"];
const DEFAULT_TAGS = [];
const DEFAULT_SELECTOR_DISPLAY = "chords"
const DEFAULT_TAG_FILTER_OPTION = "or"

const ChordScaleExplorer = () => {
  useEffect(() => {
    const initTone = async () => {
      Tone = await import('tone');
    };

    initTone();
  }, []);

  const [selectedTags, setSelectedTags] = useState(DEFAULT_TAGS);
  const [selectedRoots, setSelectedRoots] = useState(DEFAULT_ROOTS);
  const [selectorDisplay, setSelectorDisplay] = useState(DEFAULT_SELECTOR_DISPLAY);
  const [selectedTagFilterOption, setSelectedTagFilterOption] = useState(DEFAULT_TAG_FILTER_OPTION);
  const [tagFilter, setTagFilter] = useState('');

  const handleChangeTagFilter = ({ target: { value } }) => setTagFilter(value);

  const handleClickTagFilterOption = tagFilterOption => setSelectedTagFilterOption(tagFilterOption);

  const handleClickDisplayOption = displayOption => setSelectorDisplay(displayOption);

  const handleClickRootTag = root => {
    let updatedRoots = selectedRoots;

    if (updatedRoots.includes(root)) {
      updatedRoots = updatedRoots.filter(item => item !== root);
    } else {
      updatedRoots = [...updatedRoots, root]
    }

    setSelectedRoots(updatedRoots);
  }

  const handleClickTag = tag => {
    let updatedTags = selectedTags;

    if (updatedTags.includes(tag)) {
      updatedTags = updatedTags.filter(item => item !== tag);
    } else {
      updatedTags = [...updatedTags, tag]
    }

    setSelectedTags(updatedTags);
  }

  const handleNotePreview = async note => {
    if (startAudioContext) {
      await initializeAudioContext();
    }

    noteSynth.triggerAttackRelease(note, "8n");
  };

  const handleChordPreview = async notes => {
    if (startAudioContext) {
      await initializeAudioContext();
    }

    chordSynth.triggerAttackRelease(notes, "2n");
  };

  const handleScalePreview = async notes => {
    if (startAudioContext) {
      await initializeAudioContext();
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

  const filterTagsByOption = tags => {
    if (selectedTags.length === 0) {
      return true;
    }

    if (selectedTagFilterOption === 'and') {
      return selectedTags.every(selectedTag => tags.includes(selectedTag));
    }

    return selectedTags.some(selectedTag => tags.includes(selectedTag));
  }

  const filteredChordCharts = CHORD_COLLECTION
    .filter(({ root }) => (selectedRoots.length === 0 || selectedRoots.includes(root)))
    .filter(({ tags }) => ['chords', 'both'].includes(selectorDisplay) && filterTagsByOption(tags))

  const filteredScaleCharts = SCALE_COLLECTION
    .filter(({ root }) => (selectedRoots.length === 0 || selectedRoots.includes(root)))
    .filter(({ tags }) => ['scales', 'both'].includes(selectorDisplay) && filterTagsByOption(tags))

  const hasChordCharts = filteredChordCharts.length > 0;

  const summary = (() => {
    const hasMoreThanOneRoot = selectedRoots.length > 1;
    const hasMoreThanOneTag = selectedTags.length > 1

    const noRootsSelected = selectedRoots.length === 0;
    const noTagsSelected = selectedTags.length === 0;

    const resultsCount = filteredChordCharts.length + filteredScaleCharts.length;
    const pluralizedResults = resultsCount > 1 ? 's' : ''

    const labelBySelectorDisplay = {
      both: `chord${pluralizedResults} ${resultsCount > 0 ? 'and' : 'or'} scale${pluralizedResults}`,
      chords: `chord${pluralizedResults}`,
      scales: `scale${pluralizedResults}`
    }

    const rootCombo = `root${hasMoreThanOneRoot ? 's' : ''} [${selectedRoots.join(', ').trimEnd()}]`
    const tagCombo = `tag${hasMoreThanOneTag ? 's' : ''} (${selectedTags.join(', ').trimEnd()})`
    const resultsLabel = resultsCount === 0 ? `No ${labelBySelectorDisplay[selectorDisplay]}` : `Showing ${resultsCount} ${labelBySelectorDisplay[selectorDisplay]}`
    const tagFilterType = selectedTagFilterOption === 'and' ? 'exclusive' : 'inclusive';

    const tagInfo = noTagsSelected ? '' : `with ${hasMoreThanOneTag ? tagFilterType : ''} ${tagCombo}`
    const rootInfo = noRootsSelected ? '' : `for ${rootCombo}`

    const infoLabel = noTagsSelected && noRootsSelected ? `Showing all ${labelBySelectorDisplay[selectorDisplay]}.` : `${resultsLabel} ${tagInfo} ${rootInfo}.`;

    return infoLabel
  })();

  return (
    <div className={styles.chordScaleExplorer}>
      <h1 className={styles.pageTitle}>Phrakture&apos;s Chord & Scale Explorer 🎹</h1>
      <div className={styles.widget}>
        <div className={styles.selectorsSection}>
          <div className={styles.displayOptions}>
            <div
              className={[styles.displayOptionChords, selectorDisplay === 'chords' ? styles.selectedDisplayChords : ''].join(' ')}
              onClick={() => handleClickDisplayOption('chords')}
            >
              Show Chords
            </div>
            <div
              className={[styles.displayOptionScales, selectorDisplay === 'scales' ? styles.selectedDisplayScales : ''].join(' ')}
              onClick={() => handleClickDisplayOption('scales')}
            >
              Show Scales
            </div>
            <div
              className={[styles.displayOption, selectorDisplay === 'both' ? styles.selectedDisplay : ''].join(' ')}
              onClick={() => handleClickDisplayOption('both')}
            >
              Show Both
            </div>
          </div>
          <div className={styles.selectorTitle}>Select Roots</div>
          <div className={styles.rootSelector}>
            {ALL_ROOTS.map(root => (
              <div
                key={root}
                onClick={() => handleClickRootTag(root)}
                className={[styles.rootTag, selectedRoots.includes(root) ? styles.tagSelectedRoot : ''].join(' ')}
              >
                {root}
              </div>
            ))}
          </div>
          <div className={styles.selectorTitle}>Select Tags</div>
          <div className={styles.tagFilterOptions}>
            <input onChange={handleChangeTagFilter} className={styles.tagsFilter} type="text" placeholder="filter tags" />
            <div
              onClick={() => handleClickTagFilterOption('and')}
              className={[styles.tagFilterOption, selectedTagFilterOption === 'and' ? styles.selectedTagFilterOption : ''].join(' ')}
            >
              "and"
            </div>
            <div
              onClick={() => handleClickTagFilterOption('or')}
              className={[styles.tagFilterOption, selectedTagFilterOption === 'or' ? styles.selectedTagFilterOption : ''].join(' ')}
            >
              "or"
            </div>
          </div>
          <div className={styles.tagSelector}>
            {ALL_TAGS.filter(tag => tag.includes(tagFilter)).map(tag => (
              <div
                key={tag}
                onClick={() => handleClickTag(tag)}
                className={[styles.tag, selectedTags.includes(tag) ? styles.tagSelected : ''].join(' ')}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.chartsSection}>
          <div className={styles.resultsSummary}>{summary}</div>
          <div className={[styles.chordsList, hasChordCharts ? styles.chartsGap : ''].join(' ')}>
            {filteredChordCharts.map(({ root, name, notes }) => (
              <div key={`${root} ${name}`} className={styles.chart}>
                <div className={styles.chordChart}>
                  <div className={styles.name}><span className={styles.chordRoot}>{root}</span>{' '}{name}</div>
                  <div className={styles.chartButtons}>
                    <div title="Preview Chord" onMouseDown={() => handleChordPreview(notes)}>
                      <VolumeHighIcon
                        className={[styles.volumeIcon, styles.chordIcon].join(' ')}
                      />
                    </div>
                    <div title="Export Midi File" onClick={() => handleMidiExport({ name: `${name} chord`, notes, type: "chord" })}>
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
            {filteredScaleCharts.map(({ root, name, notes }) => (
              <div key={`${root} ${name}`} className={styles.chart}>
                <div className={styles.scaleChart}>
                  <div className={styles.name}><span className={styles.scaleRoot}>{root}</span>{' '}{name}</div>
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
      </div>
    </div>
  );
};

export default ChordScaleExplorer;
