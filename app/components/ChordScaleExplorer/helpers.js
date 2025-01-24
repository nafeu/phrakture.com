const transposeNote = (note, steps) => {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const octave = parseInt(note.slice(-1));
  const noteBase = note.slice(0, -1);
  const noteIndex = notes.indexOf(noteBase);
  if (noteIndex === -1) throw new Error(`Invalid note: ${note}`);

  let newIndex = noteIndex + steps;
  let newOctave = octave;

  if (newIndex >= notes.length) {
    newIndex -= notes.length;
    newOctave++;
  } else if (newIndex < 0) {
    newIndex += notes.length;
    newOctave--;
  }

  return notes[newIndex] + newOctave;
};

const transposeChord = (chord, steps) => {
  return chord.notes.map((note) => transposeNote(note, steps));
};

export const generateAllChords = (baseChords, roots) => {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const baseIndex = notes.indexOf("C");

  const allChords = [];

  roots.forEach((root) => {
    const steps = notes.indexOf(root) - baseIndex;

    baseChords.forEach((chord) => {
      allChords.push({
        ...chord,
        root,
        notes: transposeChord(chord, steps),
      });
    });
  });

  return allChords;
};

export const byUniqueItems = (value, index, array) => array.indexOf(value) === index;