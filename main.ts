// The Internet in One Word — entry: "enshittification"
//
// The internet, distilled to a single word: the slow decay of every
// online platform from user-serving to advertiser-serving to
// shareholder-serving, until only the husk remains. Cory Doctorow
// coined it; every feed, marketplace, and search page since has
// proven it. One word, no hedging — the whole story fits in it.

// Candidate words, ranked: only one survives the cut. "enshittification"
// wins because it names a mechanism (platform decay), not a mood —
// every other candidate ("doomscrolling", "enshittification" aside)
// describes what users do, while this one describes what the
// internet does to itself.
const CANDIDATES = ["enshittification", "doomscrolling", "algorithm"] as const;

type Candidate = (typeof CANDIDATES)[number];

// The selector exists so the choice is a decision, not a literal:
// the top-ranked candidate is the answer, and the ranking above
// documents why the rest were rejected.
function pickWord(candidates: readonly Candidate[]): Candidate {
  return candidates[0];
}

function theInternetInOneWord(): string {
  return pickWord(CANDIDATES);
}

console.log(theInternetInOneWord());
