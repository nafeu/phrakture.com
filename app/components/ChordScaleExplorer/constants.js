import { generateAllChords, byUniqueItems } from './helpers'

const REMAINING_ROOTS = ["C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

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
  {
    root: "C",
    name: "Major",
    notes: ["C4", "E4", "G4"],
    tags: ["chord", "major", "happy", "bright", "uplifting"]
  },
  {
    root: "C",
    name: "Minor",
    notes: ["C4", "D#4", "G4"],
    tags: ["chord", "minor", "sad", "melancholic", "emotional"]
  },
  {
    root: "C",
    name: "Diminished",
    notes: ["C4", "D#4", "F#4"],
    tags: ["chord", "diminished", "tense", "dark", "unsettling"]
  },
  {
    root: "C",
    name: "Augmented",
    notes: ["C4", "E4", "G#4"],
    tags: ["chord", "augmented", "mysterious", "dreamy", "ethereal"]
  },
  {
    root: "C",
    name: "Major 7",
    notes: ["C4", "E4", "G4", "B4"],
    tags: ["chord", "major", "seventh", "warm", "relaxed", "jazzy"]
  },
  {
    root: "C",
    name: "Minor 7",
    notes: ["C4", "D#4", "G4", "A#4"],
    tags: ["chord", "minor", "seventh", "moody", "emotional", "soulful"]
  },
  {
    root: "C",
    name: "Dominant 7",
    notes: ["C4", "E4", "G4", "A#4"],
    tags: ["chord", "dominant", "seventh", "bluesy", "strong", "energetic"]
  },
  {
    root: "C",
    name: "Half-Diminished 7",
    notes: ["C4", "D#4", "F#4", "A#4"],
    tags: ["chord", "diminished", "seventh", "haunting", "mysterious", "tense"]
  },
  {
    root: "C",
    name: "Diminished 7",
    notes: ["C4", "D#4", "F#4", "A4"],
    tags: ["chord", "diminished", "seventh", "dark", "dissonant", "unsettling"]
  },
  {
    root: "C",
    name: "Augmented 7",
    notes: ["C4", "E4", "G#4", "A#4"],
    tags: ["chord", "augmented", "seventh", "mystical", "tense", "unique"]
  },
  {
    root: "C",
    name: "6",
    notes: ["C4", "E4", "G4", "A4"],
    tags: ["chord", "sixth", "light", "happy", "gentle"]
  },
  {
    root: "C",
    name: "Minor 6",
    notes: ["C4", "D#4", "G4", "A4"],
    tags: ["chord", "minor", "sixth", "bittersweet", "emotional", "complex"]
  },
  {
    root: "C",
    name: "9",
    notes: ["C4", "E4", "G4", "A#4", "D5"],
    tags: ["chord", "ninth", "soulful", "bluesy", "expansive"]
  },
  {
    root: "C",
    name: "Minor 9",
    notes: ["C4", "D#4", "G4", "A#4", "D5"],
    tags: ["chord", "minor", "ninth", "emotional", "smooth", "rich"]
  },
  {
    root: "C",
    name: "11",
    notes: ["C4", "E4", "G4", "A#4", "D5", "F5"],
    tags: ["chord", "eleven", "majestic", "powerful", "complex"]
  },
  {
    root: "C",
    name: "Minor 11",
    notes: ["C4", "D#4", "G4", "A#4", "D5", "F5"],
    tags: ["chord", "minor", "eleven", "dark", "moody", "layered"]
  },
  {
    root: "C",
    name: "13",
    notes: ["C4", "E4", "G4", "A#4", "D5", "F5", "A5"],
    tags: ["chord", "thirteen", "grand", "lush", "sophisticated"]
  },
  {
    root: "C",
    name: "Minor 13",
    notes: ["C4", "D#4", "G4", "A#4", "D5", "F5", "A5"],
    tags: ["chord", "minor", "thirteen", "emotional", "rich", "textured"]
  },
  {
    root: "C",
    name: "Sus2",
    notes: ["C4", "D4", "G4"],
    tags: ["chord", "suspend", "second", "open", "airy", "delicate"]
  },
  {
    root: "C",
    name: "Sus4",
    notes: ["C4", "F4", "G4"],
    tags: ["chord", "suspend", "fourth", "resolute", "powerful", "suspenseful"]
  },
  {
    root: "C",
    name: "Add9",
    notes: ["C4", "E4", "G4", "D5"],
    tags: ["chord", "bright", "open", "soaring"]
  },
  {
    root: "C",
    name: "Minor Add9",
    notes: ["C4", "D#4", "G4", "D5"],
    tags: ["chord", "minor", "add", "ninth", "melancholic", "expressive", "poignant"]
  },
  {
    root: "C",
    name: "Major 7 # 11",
    notes: ["C4", "E4", "G4", "B4", "F#5"],
    tags: ["chord", "major", "seventh", "sharp", "eleventh", "ethereal", "modern", "dreamy"]
  },
  {
    root: "C",
    name: "Dominant 7 Flat 9",
    notes: ["C4", "E4", "G4", "A#4", "C#5"],
    tags: ["chord", "dominant", "seventh", "flat", "ninth", "dramatic", "tense", "exotic"]
  },
  {
    root: "C",
    name: "Dominant 7 # 9",
    notes: ["C4", "E4", "G4", "A#4", "D#5"],
    tags: ["chord", "dominant", "seventh", "sharp", "ninth", "fiery", "energetic", "intense"]
  },
  {
    root: "C",
    name: "Altered",
    notes: ["C4", "C#4", "D#4", "F#4", "G#4", "A#4"],
    tags: ["chord", "altered", "dissonant", "modern", "complex"]
  },
  {
    root: "C",
    name: "Whole Tone",
    notes: ["C4", "D4", "E4", "F#4", "G#4", "A#4"],
    tags: ["chord", "whole", "dreamy", "floating", "abstract"]
  },
  {
    root: "C",
    name: "Phrygian",
    notes: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "A#4"],
    tags: ["chord", "phrygian", "exotic", "tense", "ancient"]
  },
  {
    root: "C",
    name: "Lydian",
    notes: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4"],
    tags: ["chord", "lydian", "hopeful", "expansive", "uplifting"]
  },
];

export const CHORD_COLLECTION = [...BASE_CHORD_COLLECTION, ...generateAllChords(BASE_CHORD_COLLECTION, REMAINING_ROOTS)];

const BASE_SCALE_COLLECTION = [
  { root: "C", name: "Major", tags: ["scale", "major", "happy", "bright", "uplifting", "confident"], notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"] },
  { root: "C", name: "Minor", tags: ["scale", "minor", "sad", "melancholic", "emotional", "dark"], notes: ["C4", "D4", "D#4", "F4", "G4", "G#4", "A#4"] },
  { root: "C", name: "Dorian", tags: ["scale", "jazzy", "mysterious", "groovy", "smooth"], notes: ["C4", "D4", "D#4", "F4", "G4", "A4", "A#4"] },
  { root: "C", name: "Phrygian", tags: ["scale", "exotic", "tense", "mystical", "ancient"], notes: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "A#4"] },
  { root: "C", name: "Lydian", tags: ["scale", "dreamy", "ethereal", "hopeful", "expansive"], notes: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4"] },
  { root: "C", name: "Mixolydian", tags: ["scale", "bluesy", "funky", "energetic", "lively"], notes: ["C4", "D4", "E4", "F4", "G4", "A4", "A#4"] },
  { root: "C", name: "Locrian", tags: ["scale", "dissonant", "dark", "unsettling", "chaotic"], notes: ["C4", "C#4", "D#4", "F4", "F#4", "G#4", "A#4"] },
  { root: "C", name: "Harmonic Minor", tags: ["scale", "minor", "dramatic", "intense", "haunting", "tragic"], notes: ["C4", "D4", "D#4", "F4", "G4", "G#4", "B4"] },
  { root: "C", name: "Melodic Minor", tags: ["scale", "minor", "sophisticated", "complex", "subtle", "flowing"], notes: ["C4", "D4", "D#4", "F4", "G4", "A4", "B4"] },
  { root: "C", name: "Blues Scale", tags: ["scale", "bluesy", "raw", "soulful", "expressive"], notes: ["C4", "D#4", "F4", "F#4", "G4", "A#4"] },
  { root: "C", name: "Pentatonic Major", tags: ["scale", "pentatonic", "major", "simple", "joyful", "uplifting", "open"], notes: ["C4", "D4", "E4", "G4", "A4"] },
  { root: "C", name: "Pentatonic Minor", tags: ["scale", "pentatonic", "minor", "bluesy", "melancholic", "introspective", "earthy"], notes: ["C4", "D#4", "F4", "G4", "A#4"] },
  { root: "C", name: "Whole Tone", tags: ["scale", "abstract", "floating", "ambiguous", "dreamlike"], notes: ["C4", "D4", "E4", "F#4", "G#4", "A#4"] },
  { root: "C", name: "Chromatic", tags: ["scale", "all-encompassing", "neutral", "versatile", "atonal"], notes: ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"] },
  { root: "C", name: "Hungarian Minor", tags: ["scale", "minor", "dramatic", "exotic", "fiery", "passionate"], notes: ["C4", "D4", "D#4", "F#4", "G4", "G#4", "B4"] },
  { root: "C", name: "Neapolitan Major", tags: ["scale", "neapolitan", "major", "classical", "majestic", "elegant", "graceful"], notes: ["C4", "C#4", "D#4", "F4", "G4", "A4", "B4"] },
  { root: "C", name: "Neapolitan Minor", tags: ["scale", "neapolitan", "minor", "classical", "emotional", "rich", "melancholic"], notes: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "B4"] },
  { root: "C", name: "Arabian", tags: ["scale", "mystical", "ancient", "exotic", "middle-eastern"], notes: ["C4", "D4", "D#4", "F4", "G4", "G#4", "A4"] },
  { root: "C", name: "Japanese (In Sen)", tags: ["scale", "oriental", "serene", "focused", "minimalistic"], notes: ["C4", "D4", "D#4", "G4", "G#4"] },
  { root: "C", name: "Persian", tags: ["scale", "exotic", "middle-eastern", "dramatic", "unique"], notes: ["C4", "C#4", "E4", "F4", "G4", "G#4", "B4"] },
  { root: "C", name: "Egyptian", tags: ["scale", "ancient", "mystical", "open", "hypnotic"], notes: ["C4", "D4", "F4", "G4", "A4"] },
  { root: "C", name: "Balinese", tags: ["scale", "ethnic", "mystical", "island", "peaceful"], notes: ["C4", "D4", "D#4", "G4", "A#4"] },
  { root: "C", name: "Indian Bhairav", tags: ["scale", "indian", "spiritual", "serious", "mystical"], notes: ["C4", "C#4", "E4", "F4", "G4", "G#4", "A#4"] },
  { root: "C", name: "Flamenco", tags: ["scale", "passionate", "Spanish", "dramatic", "fiery"], notes: ["C4", "C#4", "E4", "F4", "G4", "G#4", "A4"] }
];

export const SCALE_COLLECTION = [...BASE_SCALE_COLLECTION, ...generateAllChords(BASE_SCALE_COLLECTION, REMAINING_ROOTS)];

export const ALL_TAGS = (() => {
  let output = [];

  BASE_CHORD_COLLECTION.forEach(({ tags }) => {
    tags.forEach(tag => {
      output.push(tag);
    })
  });

  BASE_SCALE_COLLECTION.forEach(({ tags }) => {
    tags.forEach(tag => {
      output.push(tag);
    })
  });

  output = output.filter(byUniqueItems);

  return output;
})();

export const ALL_ROOTS = ["C", ...REMAINING_ROOTS];
