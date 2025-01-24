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

const generateAllChords = (baseChords, roots) => {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const baseIndex = notes.indexOf("C");

  const allChords = [];

  roots.forEach((root) => {
    const steps = notes.indexOf(root) - baseIndex;

    baseChords.forEach((chord) => {
      allChords.push({
        name: chord.name.replace("C", root),
        notes: transposeChord(chord, steps),
        tags: chord.tags,
      });
    });
  });

  return allChords;
};

const ROOTS = ["D", "E", "F", "G", "A", "B"];

export const NOTES_COLLECTION = [
  { preview: "C4", note: "C" },
  { preview: "C#4", note: "C#", alt: "Db", isBlack: true },
  { preview: "D4", note: "D" },
  { preview: "D#4", note: "D#", alt: "Eb", isBlack: true },
  { preview: "E4", note: "E" },
  { preview: "F4", note: "F" },
  { preview: "F#4", note: "F#", alt: "Gb", isBlack: true },
  { preview: "G4", note: "G" },
  { preview: "G#4", note: "G#", alt: "Ab", isBlack: true },
  { preview: "A4", note: "A" },
  { preview: "A#4", note: "A#", alt: "Bb", isBlack: true },
  { preview: "B4", note: "B" }
];

const BASE_CHORD_COLLECTION = [
  { name: "C Major", notes: ["C4", "E4", "G4"], tags: ["happy", "bright", "uplifting"] },
  { name: "C Minor", notes: ["C4", "D#4", "G4"], tags: ["sad", "melancholic", "emotional"] },
  { name: "C Diminished", notes: ["C4", "D#4", "F#4"], tags: ["tense", "dark", "unsettling"] },
  { name: "C Augmented", notes: ["C4", "E4", "G#4"], tags: ["mysterious", "dreamy", "ethereal"] },
  { name: "C Major 7", notes: ["C4", "E4", "G4", "B4"], tags: ["warm", "relaxed", "jazzy"] },
  { name: "C Minor 7", notes: ["C4", "D#4", "G4", "A#4"], tags: ["moody", "emotional", "soulful"] },
  { name: "C Dom 7", notes: ["C4", "E4", "G4", "A#4"], tags: ["bluesy", "strong", "energetic"] },
  { name: "C Half-Diminished 7", notes: ["C4", "D#4", "F#4", "A#4"], tags: ["haunting", "mysterious", "tense"] },
  { name: "C Diminished 7", notes: ["C4", "D#4", "F#4", "A4"], tags: ["dark", "dissonant", "unsettling"] },
  { name: "C Augmented 7", notes: ["C4", "E4", "G#4", "A#4"], tags: ["mystical", "tense", "unique"] },
  { name: "C 6", notes: ["C4", "E4", "G4", "A4"], tags: ["light", "happy", "gentle"] },
  { name: "C Minor 6", notes: ["C4", "D#4", "G4", "A4"], tags: ["bittersweet", "emotional", "complex"] },
  { name: "C 9", notes: ["C4", "E4", "G4", "A#4", "D5"], tags: ["soulful", "bluesy", "expansive"] },
  { name: "C Minor 9", notes: ["C4", "D#4", "G4", "A#4", "D5"], tags: ["emotional", "smooth", "rich"] },
  { name: "C 11", notes: ["C4", "E4", "G4", "A#4", "D5", "F5"], tags: ["majestic", "powerful", "complex"] },
  { name: "C Minor 11", notes: ["C4", "D#4", "G4", "A#4", "D5", "F5"], tags: ["dark", "moody", "layered"] },
  { name: "C 13", notes: ["C4", "E4", "G4", "A#4", "D5", "F5", "A5"], tags: ["grand", "lush", "sophisticated"] },
  { name: "C Minor 13", notes: ["C4", "D#4", "G4", "A#4", "D5", "F5", "A5"], tags: ["emotional", "rich", "textured"] },
  { name: "C Sus2", notes: ["C4", "D4", "G4"], tags: ["open", "airy", "delicate"] },
  { name: "C Sus4", notes: ["C4", "F4", "G4"], tags: ["resolute", "powerful", "suspenseful"] },
  { name: "C Add9", notes: ["C4", "E4", "G4", "D5"], tags: ["bright", "open", "soaring"] },
  { name: "C Minor Add9", notes: ["C4", "D#4", "G4", "D5"], tags: ["melancholic", "expressive", "poignant"] },
  { name: "C Major 7 # 11", notes: ["C4", "E4", "G4", "B4", "F#5"], tags: ["ethereal", "modern", "dreamy"] },
  { name: "C Dominant 7 Flat 9", notes: ["C4", "E4", "G4", "A#4", "C#5"], tags: ["dramatic", "tense", "exotic"] },
  { name: "C Dominant 7 # 9", notes: ["C4", "E4", "G4", "A#4", "D#5"], tags: ["fiery", "energetic", "intense"] },
  { name: "C Altered", notes: ["C4", "C#4", "D#4", "F#4", "G#4", "A#4"], tags: ["dissonant", "modern", "complex"] },
  { name: "C Whole Tone", notes: ["C4", "D4", "E4", "F#4", "G#4", "A#4"], tags: ["dreamy", "floating", "abstract"] },
  { name: "C Phrygian", notes: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "A#4"], tags: ["exotic", "tense", "ancient"] },
  { name: "C Lydian", notes: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4"], tags: ["hopeful", "expansive", "uplifting"] },
];

export const CHORD_COLLECTION = [...BASE_CHORD_COLLECTION, ...generateAllChords(BASE_CHORD_COLLECTION, ROOTS)];

const BASE_SCALES_COLLECTION = [
  { name: "C Major", tags: ["happy", "bright", "uplifting", "confident"], notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"] },
  { name: "C Minor", tags: ["sad", "melancholic", "emotional", "dark"], notes: ["C4", "D4", "D#4", "F4", "G4", "G#4", "A#4"] },
  { name: "C Dorian", tags: ["jazzy", "mysterious", "groovy", "smooth"], notes: ["C4", "D4", "D#4", "F4", "G4", "A4", "A#4"] },
  { name: "C Phrygian", tags: ["exotic", "tense", "mystical", "ancient"], notes: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "A#4"] },
  { name: "C Lydian", tags: ["dreamy", "ethereal", "hopeful", "expansive"], notes: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4"] },
  { name: "C Mixolydian", tags: ["bluesy", "funky", "energetic", "lively"], notes: ["C4", "D4", "E4", "F4", "G4", "A4", "A#4"] },
  { name: "C Locrian", tags: ["dissonant", "dark", "unsettling", "chaotic"], notes: ["C4", "C#4", "D#4", "F4", "F#4", "G#4", "A#4"] },
  { name: "C Harmonic Minor", tags: ["dramatic", "intense", "haunting", "tragic"], notes: ["C4", "D4", "D#4", "F4", "G4", "G#4", "B4"] },
  { name: "C Melodic Minor", tags: ["sophisticated", "complex", "subtle", "flowing"], notes: ["C4", "D4", "D#4", "F4", "G4", "A4", "B4"] },
  { name: "C Blues Scale", tags: ["bluesy", "raw", "soulful", "expressive"], notes: ["C4", "D#4", "F4", "F#4", "G4", "A#4"] },
  { name: "C Pentatonic Major", tags: ["simple", "joyful", "uplifting", "open"], notes: ["C4", "D4", "E4", "G4", "A4"] },
  { name: "C Pentatonic Minor", tags: ["bluesy", "melancholic", "introspective", "earthy"], notes: ["C4", "D#4", "F4", "G4", "A#4"] },
  { name: "C Whole Tone", tags: ["abstract", "floating", "ambiguous", "dreamlike"], notes: ["C4", "D4", "E4", "F#4", "G#4", "A#4"] },
  { name: "C Chromatic", tags: ["all-encompassing", "neutral", "versatile", "atonal"], notes: ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"] },
  { name: "C Hungarian Minor", tags: ["dramatic", "exotic", "fiery", "passionate"], notes: ["C4", "D4", "D#4", "F#4", "G4", "G#4", "B4"] },
  { name: "C Neapolitan Major", tags: ["classical", "majestic", "elegant", "graceful"], notes: ["C4", "C#4", "D#4", "F4", "G4", "A4", "B4"] },
  { name: "C Neapolitan Minor", tags: ["classical", "emotional", "rich", "melancholic"], notes: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "B4"] },
  { name: "C Arabian", tags: ["mystical", "ancient", "exotic", "middle-eastern"], notes: ["C4", "D4", "D#4", "F4", "G4", "G#4", "A4"] },
  { name: "C Japanese (In Sen)", tags: ["oriental", "serene", "focused", "minimalistic"], notes: ["C4", "D4", "D#4", "G4", "G#4"] },
  { name: "C Persian", tags: ["exotic", "middle-eastern", "dramatic", "unique"], notes: ["C4", "C#4", "E4", "F4", "G4", "G#4", "B4"] },
  { name: "C Egyptian", tags: ["ancient", "mystical", "open", "hypnotic"], notes: ["C4", "D4", "F4", "G4", "A4"] },
  { name: "C Balinese", tags: ["ethnic", "mystical", "island", "peaceful"], notes: ["C4", "D4", "D#4", "G4", "A#4"] },
  { name: "C Indian Bhairav", tags: ["Indian", "spiritual", "serious", "mystical"], notes: ["C4", "C#4", "E4", "F4", "G4", "G#4", "A#4"] },
  { name: "C Flamenco", tags: ["passionate", "Spanish", "dramatic", "fiery"], notes: ["C4", "C#4", "E4", "F4", "G4", "G#4", "A4"] }
];

export const SCALES_COLLECTION = [...BASE_SCALES_COLLECTION, ...generateAllChords(BASE_SCALES_COLLECTION, ROOTS)];