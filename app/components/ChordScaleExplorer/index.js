'use client';

import { Midi } from '@tonejs/midi';
import { useSearchParams, useRouter } from 'next/navigation';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import React, { useState, useEffect, useRef } from 'react';

import { FileArrowDownIcon, VolumeHighIcon } from '../Icons';

import {
  CHORD_COLLECTION,
  SCALE_COLLECTION,
  NOTES_COLLECTION,
  ALL_ROOTS,
  ALL_TAGS,
  DEFAULT_TAGS,
  DEFAULT_ROOTS,
  DEFAULT_SELECTOR_DISPLAY,
  DEFAULT_TAG_FILTER_OPTION,
  DEFAULT_MIDI_BPM,
  DEFAULT_MIDI_LENGTH,
  DEFAULT_MIDI_SEQUENCE,
  DEFAULT_ENHARMONIC,
} from './constants';
import { getMidiFileName, formatNote } from './helpers';
import styles from './index.module.css';

let startAudioContext = true;

let Tone, noteSynth, chordSynth, scaleSynth;

const initializeAudioContext = async () => {
  await Tone.start();

  noteSynth = new Tone.Synth({
    oscillator: { type: 'sawtooth' },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
  }).toDestination();

  chordSynth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: 'sine' },
    envelope: { attack: 0.2, decay: 0.3, sustain: 0.5, release: 0.5 },
  }).toDestination();

  scaleSynth = new Tone.Synth({
    oscillator: { type: 'square' },
    envelope: { attack: 0.01, decay: 0.2, sustain: 0.6, release: 0.3 },
  }).toDestination();

  noteSynth.volume.value = -16;
  chordSynth.volume.value = -16;
  scaleSynth.volume.value = -16;

  startAudioContext = false;
};

const CopyToClipboard = ({ text, children, copiedText = 'Copied!' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    });
  };

  return (
    <span
      onClick={handleCopy}
      style={{ cursor: 'pointer', display: 'inline-block' }}
    >
      {isCopied ? copiedText : children}
    </span>
  );
};

const Piano = ({
  selectedNotes,
  onNotePreview,
  chartType,
  enharmonic,
  isPlaying,
}) => {
  const selectedNotesWithoutOctave = selectedNotes.map((note) =>
    note.replace(/[0-9]/g, ''),
  );
  const rootNote = selectedNotesWithoutOctave[0];

  const selectedClassBychartType = {
    chord: styles.selectedChord,
    scale: styles.selectedScale,
  };

  return (
    <div className={styles.piano}>
      {NOTES_COLLECTION.map(({ note, isBlack, preview }) => {
        const isChartedNote = selectedNotesWithoutOctave?.includes(note);

        return (
          <div
            key={note}
            onMouseDown={() => onNotePreview(preview)}
            className={[
              styles.key,
              isBlack ? styles.black : '',
              isChartedNote
                ? [selectedClassBychartType[chartType], styles.selected].join(
                    ' ',
                  )
                : '',
              rootNote === note ? styles.rootNote : '',
              isChartedNote && isPlaying ? styles.isPlaying : '',
            ].join(' ')}
          >
            <div className={styles.keyName}>
              {formatNote({ note, enharmonic })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ChordScaleExplorer = () => {
  useEffect(() => {
    const initTone = async () => {
      Tone = await import('tone');
    };

    initTone();
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTags, setSelectedTags] = useState(
    searchParams.get('selectedTags')?.split(',') || DEFAULT_TAGS,
  );
  const [selectedRoots, setSelectedRoots] = useState(
    searchParams.get('selectedRoots')?.split(',') || DEFAULT_ROOTS,
  );
  const [selectorDisplay, setSelectorDisplay] = useState(
    searchParams.get('selectorDisplay') || DEFAULT_SELECTOR_DISPLAY,
  );
  const [selectedTagFilterOption, setSelectedTagFilterOption] = useState(
    searchParams.get('selectedTagFilterOption') || DEFAULT_TAG_FILTER_OPTION,
  );
  const [tagFilter, setTagFilter] = useState(
    searchParams.get('tagFilter') || '',
  );
  const [midiBpm, setMidiBpm] = useState(
    parseInt(searchParams.get('midiBpm')) || DEFAULT_MIDI_BPM,
  );
  const [midiLength, setMidiLength] = useState(
    parseInt(searchParams.get('midiLength')) || DEFAULT_MIDI_LENGTH,
  );
  const [midiSequence, setMidiSequence] = useState(
    searchParams.get('midiSequence') || DEFAULT_MIDI_SEQUENCE,
  );
  const [enharmonic, setEnharmonic] = useState(
    searchParams.get('enharmonic') || DEFAULT_ENHARMONIC,
  );

  const [chartPlayingIds, setChartPlayingIds] = useState(null);
  const timeoutRef = useRef(null);

  const indicateChartPlaying = (id) => {
    setChartPlayingIds((currentIds) => [...(currentIds || []), id]);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setChartPlayingIds(null);
      timeoutRef.current = null;
    }, 1000);
  };

  const updateURL = () => {
    const params = new URLSearchParams();

    if (selectedTags.join(',') !== DEFAULT_TAGS.join(',')) {
      params.set('selectedTags', selectedTags.join(','));
    }
    if (selectedRoots.join(',') !== DEFAULT_ROOTS.join(',')) {
      params.set('selectedRoots', selectedRoots.join(','));
    }
    if (selectorDisplay !== DEFAULT_SELECTOR_DISPLAY) {
      params.set('selectorDisplay', selectorDisplay);
    }
    if (selectedTagFilterOption !== DEFAULT_TAG_FILTER_OPTION) {
      params.set('selectedTagFilterOption', selectedTagFilterOption);
    }
    if (tagFilter !== '') {
      params.set('tagFilter', tagFilter);
    }
    if (midiBpm !== DEFAULT_MIDI_BPM) {
      params.set('midiBpm', midiBpm.toString());
    }
    if (midiLength !== DEFAULT_MIDI_LENGTH) {
      params.set('midiLength', midiLength.toString());
    }
    if (midiSequence !== DEFAULT_MIDI_SEQUENCE) {
      params.set('midiSequence', midiSequence);
    }
    if (enharmonic !== DEFAULT_ENHARMONIC) {
      params.set('enharmonic', enharmonic);
    }

    const newQueryString = params.toString();
    router.push(`chord-scale-explorer?${newQueryString}`, { shallow: true });
  };

  useEffect(updateURL, [
    selectedTags,
    selectedRoots,
    selectorDisplay,
    selectedTagFilterOption,
    tagFilter,
    midiBpm,
    midiLength,
    midiSequence,
    updateURL,
  ]);

  const handleClickResetAll = () => {
    setSelectedTags(DEFAULT_TAGS);
    setSelectedRoots(DEFAULT_ROOTS);
    setSelectorDisplay(DEFAULT_SELECTOR_DISPLAY);
    setSelectedTagFilterOption(DEFAULT_TAG_FILTER_OPTION);
    setTagFilter('');
    setMidiBpm(DEFAULT_MIDI_BPM);
    setMidiLength(DEFAULT_MIDI_LENGTH);
    setMidiSequence(DEFAULT_MIDI_SEQUENCE);
    setEnharmonic(DEFAULT_ENHARMONIC);
  };

  const handleClickClearRoots = () => setSelectedRoots([]);

  const handleClickClearTags = () => setSelectedTags([]);

  const handleClickEnharmonic = (updatedEnharmonic) =>
    setEnharmonic(updatedEnharmonic);

  const handleChangeMidiBpm = ({ target: { value } }) =>
    setMidiBpm(Math.max(1, value));

  const handleChangeMidiLength = ({ target: { value } }) =>
    setMidiLength(Math.max(1, value));

  const handleClickMidiSequence = (sequence) => setMidiSequence(sequence);

  const handleChangeTagFilter = ({ target: { value } }) => setTagFilter(value);

  const handleClickTagFilterOption = (tagFilterOption) =>
    setSelectedTagFilterOption(tagFilterOption);

  const handleClickDisplayOption = (displayOption) =>
    setSelectorDisplay(displayOption);

  const handleClickRootTag = (root) => {
    let updatedRoots = selectedRoots;

    if (updatedRoots.includes(root)) {
      updatedRoots = updatedRoots.filter((item) => item !== root);
    } else {
      updatedRoots = [...updatedRoots, root];
    }

    setSelectedRoots(updatedRoots);
  };

  const handleClickTag = (tag) => {
    let updatedTags = selectedTags;

    if (updatedTags.includes(tag)) {
      updatedTags = updatedTags.filter((item) => item !== tag);
    } else {
      updatedTags = [...updatedTags, tag];
    }

    setSelectedTags(updatedTags);
  };

  const handleNotePreview = async (note) => {
    if (startAudioContext) {
      await initializeAudioContext();
    }

    noteSynth.triggerAttackRelease(note, '8n');
  };

  const handleChordPreview = async ({ notes, id }) => {
    indicateChartPlaying(id);

    if (startAudioContext) {
      await initializeAudioContext();
    }

    chordSynth.triggerAttackRelease(notes, '2n');
  };

  const handleScalePreview = async ({ notes, id }) => {
    indicateChartPlaying(id);

    if (startAudioContext) {
      await initializeAudioContext();
    }

    let currentTime = Tone.now();
    notes.forEach((note) => {
      scaleSynth.triggerAttackRelease(note, '16n', currentTime);
      currentTime += Tone.Time('16n').toSeconds();
    });
  };

  const handleMidiExport = ({ name, notes }) => {
    const midi = new Midi();
    const track = midi.addTrack();

    midi.header.setTempo(midiBpm);

    const secondsPerBeat = 60 / midiBpm;
    const totalDuration = midiLength * 4 * secondsPerBeat;

    if (midiSequence === 'chord') {
      notes.forEach((note) => {
        track.addNote({
          name: note,
          time: 0,
          duration: totalDuration,
        });
      });
    } else if (midiSequence === 'steps') {
      let currentTime = 0;
      const noteDuration = secondsPerBeat / 4;

      notes.forEach((note) => {
        track.addNote({
          name: note,
          time: currentTime,
          duration: noteDuration,
        });
        currentTime += noteDuration;
      });
    }

    const midiBlob = new Blob([midi.toArray()], { type: 'audio/midi' });
    const url = URL.createObjectURL(midiBlob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.mid`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filterTagsByOption = (tags) => {
    if (selectedTags.length === 0) {
      return true;
    }

    if (selectedTagFilterOption === 'and') {
      return selectedTags.every((selectedTag) => tags.includes(selectedTag));
    }

    return selectedTags.some((selectedTag) => tags.includes(selectedTag));
  };

  const filteredChordCharts = CHORD_COLLECTION.filter(
    ({ root }) => selectedRoots.length === 0 || selectedRoots.includes(root),
  ).filter(
    ({ tags }) =>
      ['chords', 'both'].includes(selectorDisplay) && filterTagsByOption(tags),
  );

  const filteredScaleCharts = SCALE_COLLECTION.filter(
    ({ root }) => selectedRoots.length === 0 || selectedRoots.includes(root),
  ).filter(
    ({ tags }) =>
      ['scales', 'both'].includes(selectorDisplay) && filterTagsByOption(tags),
  );

  const hasChordCharts = filteredChordCharts.length > 0;

  const summary = (() => {
    const hasMoreThanOneRoot = selectedRoots.length > 1;
    const hasMoreThanOneTag = selectedTags.length > 1;

    const noRootsSelected = selectedRoots.length === 0;
    const noTagsSelected = selectedTags.length === 0;

    const resultsCount =
      filteredChordCharts.length + filteredScaleCharts.length;
    const pluralizedResults = resultsCount > 1 ? 's' : '';

    const labelBySelectorDisplay = {
      both: `chord${pluralizedResults} ${resultsCount > 0 ? 'and' : 'or'} scale${pluralizedResults}`,
      chords: `chord${pluralizedResults}`,
      scales: `scale${pluralizedResults}`,
    };

    const rootCombo = `root${hasMoreThanOneRoot ? 's' : ''} [${selectedRoots.join(', ').trimEnd()}]`;
    const tagCombo = `tag${hasMoreThanOneTag ? 's' : ''} (${selectedTags.join(', ').trimEnd()})`;
    const resultsLabel =
      resultsCount === 0
        ? `No ${labelBySelectorDisplay[selectorDisplay]}`
        : `Showing ${resultsCount} ${labelBySelectorDisplay[selectorDisplay]}`;
    const tagFilterType =
      selectedTagFilterOption === 'and' ? 'exclusive' : 'inclusive';

    const tagInfo = noTagsSelected
      ? ''
      : `with ${hasMoreThanOneTag ? tagFilterType : ''} ${tagCombo}`;
    const rootInfo = noRootsSelected ? '' : `for ${rootCombo}`;

    const infoLabel =
      noTagsSelected && noRootsSelected
        ? `Showing all ${labelBySelectorDisplay[selectorDisplay]}.`
        : `${resultsLabel} ${tagInfo} ${rootInfo}.`;

    return infoLabel;
  })();

  return (
    <div className={styles.chordScaleExplorer}>
      <h1 className={styles.pageTitle}>
        Phrakture&apos;s <span className={styles.titleChord}>Chord</span> &{' '}
        <span className={styles.titleScale}>Scale</span> Explorer 🎹
      </h1>
      <div className={styles.widget}>
        <div className={styles.selectorsSection}>
          <div className={styles.displayOptions}>
            <div
              className={[
                styles.displayOptionChords,
                selectorDisplay === 'chords'
                  ? styles.selectedDisplayChords
                  : '',
              ].join(' ')}
              onClick={() => handleClickDisplayOption('chords')}
            >
              Show Chords
            </div>
            <div
              className={[
                styles.displayOptionScales,
                selectorDisplay === 'scales'
                  ? styles.selectedDisplayScales
                  : '',
              ].join(' ')}
              onClick={() => handleClickDisplayOption('scales')}
            >
              Show Scales
            </div>
            <div
              className={[
                styles.displayOption,
                selectorDisplay === 'both' ? styles.selectedDisplay : '',
              ].join(' ')}
              onClick={() => handleClickDisplayOption('both')}
            >
              Show Both
            </div>
            <div
              className={[styles.displayOption, styles.resetAllButton].join(
                ' ',
              )}
              onClick={handleClickResetAll}
            >
              Reset All
            </div>
          </div>
          <div className={styles.selectorTitle}>Select Roots</div>
          <div className={styles.rootSelector}>
            {ALL_ROOTS.map((root) => (
              <div
                key={root}
                onClick={() => handleClickRootTag(root)}
                className={[
                  styles.rootTag,
                  selectedRoots.includes(root) ? styles.tagSelectedRoot : '',
                ].join(' ')}
              >
                {formatNote({ note: root, enharmonic })}
              </div>
            ))}
            <div
              className={[
                styles.enharmonicOption,
                enharmonic === 'sharp' ? styles.selectedEnharmonic : '',
              ].join(' ')}
              onClick={() => handleClickEnharmonic('sharp')}
            >
              &ldquo;sharp&rdquo;
            </div>
            <div
              className={[
                styles.enharmonicOption,
                enharmonic === 'flat' ? styles.selectedEnharmonic : '',
              ].join(' ')}
              onClick={() => handleClickEnharmonic('flat')}
            >
              &ldquo;flat&rdquo;
            </div>
            <div
              className={styles.rootClearOption}
              onClick={handleClickClearRoots}
            >
              Clear Roots
            </div>
          </div>
          <div className={styles.selectorTitle}>Select Tags</div>
          <div className={styles.tagFilterOptions}>
            <input
              onChange={handleChangeTagFilter}
              className={styles.tagsFilter}
              type="text"
              placeholder="filter tags"
            />
            <div
              onClick={() => handleClickTagFilterOption('and')}
              className={[
                styles.tagFilterOption,
                selectedTagFilterOption === 'and'
                  ? styles.selectedTagFilterOption
                  : '',
              ].join(' ')}
            >
              &ldquo;and&rdquo;
            </div>
            <div
              onClick={() => handleClickTagFilterOption('or')}
              className={[
                styles.tagFilterOption,
                selectedTagFilterOption === 'or'
                  ? styles.selectedTagFilterOption
                  : '',
              ].join(' ')}
            >
              &ldquo;or&rdquo;
            </div>
            <div
              className={styles.tagFilterOption}
              onClick={handleClickClearTags}
            >
              Clear Tags
            </div>
          </div>
          <div className={styles.tagSelector}>
            {ALL_TAGS.filter((tag) => tag.includes(tagFilter)).map((tag) => (
              <div
                key={tag}
                onClick={() => handleClickTag(tag)}
                className={[
                  styles.tag,
                  selectedTags.includes(tag) ? styles.tagSelected : '',
                ].join(' ')}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className={styles.midiExportOptions}>
            <div className={styles.midiExportOptionTitle}>MIDI Options</div>
            <div className={styles.midiExportOptionLength}>
              <div className={styles.midiExportOptionLabel}>Length</div>
              <input
                type="number"
                value={midiLength}
                min={1}
                onChange={handleChangeMidiLength}
              />
              <div className={styles.midiExportMeasurementLabel}>Bars</div>
            </div>
            <div className={styles.midiExportOptionTempo}>
              <div className={styles.midiExportOptionLabel}>Tempo</div>
              <input
                type="number"
                value={midiBpm}
                min={1}
                onChange={handleChangeMidiBpm}
              />
              <div className={styles.midiExportMeasurementLabel}>BPM</div>
            </div>
            <div className={styles.midiExportOptionSequence}>
              <div className={styles.midiExportOptionLabel}>Sequence As</div>
              <div
                className={[
                  styles.midiExportSequenceOption,
                  midiSequence === 'chord'
                    ? styles.midiExportSequenceSelected
                    : '',
                ].join(' ')}
                onClick={() => handleClickMidiSequence('chord')}
              >
                Chord
              </div>
              <div
                className={[
                  styles.midiExportSequenceOption,
                  midiSequence === 'steps'
                    ? styles.midiExportSequenceSelected
                    : '',
                ].join(' ')}
                onClick={() => handleClickMidiSequence('steps')}
              >
                Steps
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chartsSection}>
          <div className={styles.resultsSummary}>
            <div className={styles.summaryText}>
              {summary}{' '}
              <CopyToClipboard
                text={typeof window !== 'undefined' ? window.location.href : ''}
              >
                <span className={styles.shareLink}>Share This List</span>
              </CopyToClipboard>
            </div>
            <div className={styles.supportLinks}>
              <a
                className={styles.supportLink}
                href="https://www.patreon.com/phrakture"
              >
                ❤️ Support on Patreon
              </a>
              <a
                className={styles.supportLink}
                href="https://buymeacoffee.com/nafeunasir"
              >
                ☕️ Buy Me A Coffee
              </a>
            </div>
          </div>
          <div
            className={[
              styles.chordsList,
              hasChordCharts ? styles.chartsGap : '',
            ].join(' ')}
          >
            {filteredChordCharts.map(({ root, name, notes, id }) => (
              <div key={`${root} ${name}`} className={styles.chart}>
                <div className={styles.chordChart}>
                  <div className={styles.name}>
                    <span className={styles.chordRoot}>
                      {formatNote({ note: root, enharmonic })}
                    </span>{' '}
                    {name}
                  </div>
                  <div className={styles.chartButtons}>
                    <div
                      title="Preview Chord"
                      onMouseDown={() => handleChordPreview({ notes, id })}
                    >
                      <VolumeHighIcon
                        className={[styles.volumeIcon, styles.chordIcon].join(
                          ' ',
                        )}
                      />
                    </div>
                    <div
                      title="Export Midi File"
                      onClick={() =>
                        handleMidiExport({
                          name: getMidiFileName({
                            root: formatNote({ note: root, enharmonic }),
                            name,
                            type: 'chord',
                          }),
                          notes,
                        })
                      }
                    >
                      <FileArrowDownIcon
                        className={[styles.downloadIcon, styles.chordIcon].join(
                          ' ',
                        )}
                      />
                    </div>
                  </div>
                </div>
                <Piano
                  selectedNotes={notes}
                  onNotePreview={handleNotePreview}
                  chartType="chord"
                  enharmonic={enharmonic}
                  isPlaying={chartPlayingIds?.includes(id)}
                />
              </div>
            ))}
          </div>
          <div className={styles.scalesList}>
            {filteredScaleCharts.map(({ root, name, notes, id }) => (
              <div key={`${root} ${name}`} className={styles.chart}>
                <div className={styles.scaleChart}>
                  <div className={styles.name}>
                    <span className={styles.scaleRoot}>
                      {formatNote({ note: root, enharmonic })}
                    </span>{' '}
                    {name}
                  </div>
                  <div className={styles.chartButtons}>
                    <div onMouseDown={() => handleScalePreview({ notes, id })}>
                      <VolumeHighIcon
                        className={[styles.volumeIcon, styles.scaleIcon].join(
                          ' ',
                        )}
                      />
                    </div>
                    <div
                      onClick={() =>
                        handleMidiExport({
                          name: getMidiFileName({
                            root: formatNote({ note: root, enharmonic }),
                            name,
                            type: 'scale',
                          }),
                          notes,
                        })
                      }
                    >
                      <FileArrowDownIcon
                        className={[styles.downloadIcon, styles.scaleIcon].join(
                          ' ',
                        )}
                      />
                    </div>
                  </div>
                </div>
                <Piano
                  selectedNotes={notes}
                  onNotePreview={handleNotePreview}
                  chartType="scale"
                  enharmonic={enharmonic}
                  isPlaying={chartPlayingIds?.includes(id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <GoogleAnalytics trackPageViews />
    </div>
  );
};

export default ChordScaleExplorer;
