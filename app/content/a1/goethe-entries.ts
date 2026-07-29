import type { A1ExtensionEntry, A1SourceEntry } from "./types.ts";

// Frozen from the adult Goethe Start Deutsch 1 PDF recorded in manifest.ts.
// Source example sentences are intentionally excluded from this author layer.
export const GOETHE_ALPHABETICAL_ENTRIES: readonly A1SourceEntry[] = [
  {
    entryId: "a1-alpha-0001",
    lemma: "ab",
    display: "ab",
    sourceDisplay: "ab",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 1,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0002",
    lemma: "aber",
    display: "aber",
    sourceDisplay: "aber",
    partOfSpeech: "conjunction",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 2,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0003",
    lemma: "abfahren",
    display: "abfahren",
    sourceDisplay: "abfahren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 3,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0004",
    lemma: "Abfahrt",
    display: "Abfahrt",
    sourceDisplay: "die Abfahrt",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0003",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 4,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0005",
    lemma: "abgeben",
    display: "abgeben",
    sourceDisplay: "abgeben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 5,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0006",
    lemma: "abholen",
    display: "abholen",
    sourceDisplay: "abholen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 6,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0007",
    lemma: "Absender",
    display: "Absender",
    sourceDisplay: "der Absender",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 7,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0008",
    lemma: "Achtung",
    display: "Achtung",
    sourceDisplay: "Achtung",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 8,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0009",
    lemma: "Adresse",
    display: "Adresse",
    sourceDisplay: "die Adresse,-en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 9,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0010",
    lemma: "all-",
    display: "all-",
    sourceDisplay: "all-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 10,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0011",
    lemma: "allein",
    display: "allein",
    sourceDisplay: "allein",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 11,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0012",
    lemma: "also",
    display: "also",
    sourceDisplay: "also",
    partOfSpeech: "conjunction",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 12,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0013",
    lemma: "alt",
    display: "alt",
    sourceDisplay: "alt",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 13,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0014",
    lemma: "Alter",
    display: "Alter",
    sourceDisplay: "das Alter",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 14,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0015",
    lemma: "an",
    display: "an",
    sourceDisplay: "an",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 15,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0016",
    lemma: "anbieten",
    display: "anbieten",
    sourceDisplay: "anbieten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 16,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0017",
    lemma: "Angebot",
    display: "Angebot",
    sourceDisplay: "das Angebot, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    parentId: "a1-alpha-0016",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 17,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0018",
    lemma: "ander-",
    display: "ander-",
    sourceDisplay: "ander-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 18,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0019",
    lemma: "anfangen",
    display: "anfangen",
    sourceDisplay: "anfangen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 19,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0020",
    lemma: "Anfang",
    display: "Anfang",
    sourceDisplay: "der Anfang",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0019",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 20,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0021",
    lemma: "anklicken",
    display: "anklicken",
    sourceDisplay: "anklicken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 21,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0022",
    lemma: "ankommen",
    display: "ankommen",
    sourceDisplay: "ankommen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 22,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0023",
    lemma: "Ankunft",
    display: "Ankunft",
    sourceDisplay: "die Ankunft",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 23,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0024",
    lemma: "ankreuzen",
    display: "ankreuzen",
    sourceDisplay: "ankreuzen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 24,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0025",
    lemma: "anmachen",
    display: "anmachen",
    sourceDisplay: "anmachen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 25,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0026",
    lemma: "anmelden",
    display: "(sich) anmelden",
    sourceDisplay: "(sich) anmelden",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 26,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0027",
    lemma: "Anmeldung",
    display: "Anmeldung",
    sourceDisplay: "die Anmeldung",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0026",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 27,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0028",
    lemma: "Anrede",
    display: "Anrede",
    sourceDisplay: "die Anrede",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 28,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0029",
    lemma: "anrufen",
    display: "anrufen",
    sourceDisplay: "anrufen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 29,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0030",
    lemma: "Anruf",
    display: "Anruf",
    sourceDisplay: "der Anruf, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 30,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0031",
    lemma: "Anrufbeantworter",
    display: "Anrufbeantworter",
    sourceDisplay: "der Anrufbeantworter",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0030",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 9,
      order: 31,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0032",
    lemma: "Ansage",
    display: "Ansage",
    sourceDisplay: "die Ansage, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 32,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0033",
    lemma: "Anschluss",
    display: "Anschluss",
    sourceDisplay: "der Anschluss",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 33,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0034",
    lemma: "an sein",
    display: "an sein",
    sourceDisplay: "an sein",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 34,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0035",
    lemma: "antworten",
    display: "antworten",
    sourceDisplay: "antworten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 35,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0036",
    lemma: "Antwort",
    display: "Antwort",
    sourceDisplay: "die Antwort, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    parentId: "a1-alpha-0035",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 36,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0037",
    lemma: "Anzeige",
    display: "Anzeige",
    sourceDisplay: "die Anzeige, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 37,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0038",
    lemma: "anziehen",
    display: "(sich) anziehen",
    sourceDisplay: "(sich) anziehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 38,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0039",
    lemma: "Apartment",
    display: "Apartment",
    sourceDisplay: "das Apartment, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 39,
      rowKind: "main"
    }
  },
  {
    entryId: "apfel",
    lemma: "Apfel",
    display: "Apfel",
    sourceDisplay: "der Apfel, -Ä",
    partOfSpeech: "noun",
    article: "der",
    plural: "die Äpfel",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 40,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0041",
    lemma: "Appetit",
    display: "Appetit",
    sourceDisplay: "der Appetit",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 41,
      rowKind: "main"
    }
  },
  {
    entryId: "arbeiten",
    lemma: "arbeiten",
    display: "arbeiten",
    sourceDisplay: "arbeiten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 42,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0043",
    lemma: "Arbeit",
    display: "Arbeit",
    sourceDisplay: "die Arbeit, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    parentId: "arbeiten",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 43,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0044",
    lemma: "arbeitslos",
    display: "arbeitslos",
    sourceDisplay: "arbeitslos",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 44,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0045",
    lemma: "Arbeitsplatz",
    display: "Arbeitsplatz",
    sourceDisplay: "der Arbeitsplatz, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 45,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0046",
    lemma: "Arm",
    display: "Arm",
    sourceDisplay: "der Arm, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 46,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0047",
    lemma: "Arzt",
    display: "Arzt",
    sourceDisplay: "der Arzt, -Ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-Ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 47,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0048",
    lemma: "auch",
    display: "auch",
    sourceDisplay: "auch",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 48,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0049",
    lemma: "auf",
    display: "auf",
    sourceDisplay: "auf",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 49,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0050",
    lemma: "Aufgabe",
    display: "Aufgabe",
    sourceDisplay: "die Aufgabe, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 50,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0051",
    lemma: "aufhören",
    display: "aufhören",
    sourceDisplay: "aufhören",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 51,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0052",
    lemma: "auf sein",
    display: "auf sein",
    sourceDisplay: "auf sein",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 52,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0053",
    lemma: "aufstehen",
    display: "aufstehen",
    sourceDisplay: "aufstehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 53,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0054",
    lemma: "Aufzug",
    display: "Aufzug",
    sourceDisplay: "der Aufzug, -ü, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ü, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 54,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0055",
    lemma: "Auge",
    display: "Auge",
    sourceDisplay: "das Auge, -n",
    partOfSpeech: "noun",
    article: "das",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 55,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0056",
    lemma: "aus",
    display: "aus",
    sourceDisplay: "aus",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 56,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0057",
    lemma: "Ausflug",
    display: "Ausflug",
    sourceDisplay: "der Ausflug",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 57,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0058",
    lemma: "ausfüllen",
    display: "ausfüllen",
    sourceDisplay: "ausfüllen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 58,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0059",
    lemma: "Ausgang",
    display: "Ausgang",
    sourceDisplay: "der Ausgang",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 59,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0060",
    lemma: "Auskunft",
    display: "Auskunft",
    sourceDisplay: "die Auskunft, -ü, e",
    partOfSpeech: "noun",
    article: "die",
    plural: "-ü, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 60,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0061",
    lemma: "Ausland",
    display: "Ausland",
    sourceDisplay: "das Ausland",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 61,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0062",
    lemma: "Ausländer",
    display: "Ausländer",
    sourceDisplay: "der Ausländer, -",
    partOfSpeech: "noun",
    article: "der",
    plural: "-",
    parentId: "a1-alpha-0061",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 62,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0063",
    lemma: "ausländisch",
    display: "ausländisch",
    sourceDisplay: "ausländisch",
    partOfSpeech: "adjective",
    parentId: "a1-alpha-0061",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 63,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0064",
    lemma: "ausmachen",
    display: "ausmachen",
    sourceDisplay: "ausmachen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 64,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0065",
    lemma: "Aussage",
    display: "Aussage",
    sourceDisplay: "die Aussage, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 65,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0066",
    lemma: "aussehen",
    display: "aussehen",
    sourceDisplay: "aussehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 66,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0067",
    lemma: "aus sein",
    display: "aus sein",
    sourceDisplay: "aus sein",
    partOfSpeech: "phrase",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 67,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0068",
    lemma: "aussteigen",
    display: "aussteigen",
    sourceDisplay: "aussteigen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 68,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0069",
    lemma: "Ausweis",
    display: "Ausweis",
    sourceDisplay: "der Ausweis",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 69,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0070",
    lemma: "ausziehen",
    display: "(sich) ausziehen",
    sourceDisplay: "(sich) ausziehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 70,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0071",
    lemma: "Auto",
    display: "Auto",
    sourceDisplay: "das Auto, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 71,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0072",
    lemma: "Autobahn",
    display: "Autobahn",
    sourceDisplay: "die Autobahn, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 72,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0073",
    lemma: "Automat",
    display: "Automat",
    sourceDisplay: "der Automat",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 73,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0074",
    lemma: "automatisch",
    display: "automatisch",
    sourceDisplay: "automatisch",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 10,
      order: 74,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0075",
    lemma: "Baby",
    display: "Baby",
    sourceDisplay: "das Baby, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 75,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0076",
    lemma: "Bäckerei",
    display: "Bäckerei",
    sourceDisplay: "die Bäckerei",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 76,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0077",
    lemma: "Bad",
    display: "Bad",
    sourceDisplay: "das Bad",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 77,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0078",
    lemma: "baden",
    display: "baden",
    sourceDisplay: "baden",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 78,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0079",
    lemma: "Bahn",
    display: "Bahn",
    sourceDisplay: "die Bahn",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 79,
      rowKind: "main"
    }
  },
  {
    entryId: "bahnhof",
    lemma: "Bahnhof",
    display: "Bahnhof",
    sourceDisplay: "der Bahnhof",
    partOfSpeech: "noun",
    article: "der",
    plural: "die Bahnhöfe",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 80,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0081",
    lemma: "Bahnsteig",
    display: "Bahnsteig",
    sourceDisplay: "der Bahnsteig",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 81,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0082",
    lemma: "bald",
    display: "bald",
    sourceDisplay: "bald",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 82,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0083",
    lemma: "Balkon",
    display: "Balkon",
    sourceDisplay: "der Balkon",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 83,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0084",
    lemma: "Banane",
    display: "Banane",
    sourceDisplay: "die Banane, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 84,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0085",
    lemma: "Bank",
    display: "Bank",
    sourceDisplay: "die Bank",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 85,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0086",
    lemma: "bar",
    display: "bar",
    sourceDisplay: "bar",
    partOfSpeech: "noun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 86,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0087",
    lemma: "Bauch",
    display: "Bauch",
    sourceDisplay: "der Bauch",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 87,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0088",
    lemma: "Baum",
    display: "Baum",
    sourceDisplay: "der Baum, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 88,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0089",
    lemma: "Beamte",
    display: "Beamte",
    sourceDisplay: "der Beamte, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 89,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0090",
    lemma: "bedeuten",
    display: "bedeuten",
    sourceDisplay: "bedeuten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 90,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0091",
    lemma: "beginnen",
    display: "beginnen",
    sourceDisplay: "beginnen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 91,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0092",
    lemma: "bei",
    display: "bei",
    sourceDisplay: "bei",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 92,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0093",
    lemma: "beide",
    display: "beide",
    sourceDisplay: "beide",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 93,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0094",
    lemma: "Bein",
    display: "Bein",
    sourceDisplay: "das Bein, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 94,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0095",
    lemma: "Beispiel",
    display: "Beispiel",
    sourceDisplay: "das Beispiel, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 95,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0096",
    lemma: "zum Beispiel/z. B.",
    display: "zum Beispiel/z. B.",
    sourceDisplay: "zum Beispiel/z. B.",
    partOfSpeech: "phrase",
    parentId: "a1-alpha-0095",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 96,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0097",
    lemma: "bekannt",
    display: "bekannt",
    sourceDisplay: "bekannt",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 97,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0098",
    lemma: "der/die Bekannte",
    display: "der/die Bekannte",
    sourceDisplay: "der/die Bekannte, -n",
    partOfSpeech: "noun",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 98,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0099",
    lemma: "bekommen",
    display: "bekommen",
    sourceDisplay: "bekommen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 99,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0100",
    lemma: "benutzen",
    display: "benutzen",
    sourceDisplay: "benutzen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 100,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0101",
    lemma: "Beruf",
    display: "Beruf",
    sourceDisplay: "der Beruf, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 101,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0102",
    lemma: "besetzt",
    display: "besetzt",
    sourceDisplay: "besetzt",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 102,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0103",
    lemma: "besichtigen",
    display: "besichtigen",
    sourceDisplay: "besichtigen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 103,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0104",
    lemma: "besser",
    display: "besser",
    sourceDisplay: "besser",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 104,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0105",
    lemma: "best-",
    display: "best-",
    sourceDisplay: "best-",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 105,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0106",
    lemma: "bestellen",
    display: "bestellen",
    sourceDisplay: "bestellen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 106,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0107",
    lemma: "besuchen",
    display: "besuchen",
    sourceDisplay: "besuchen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 107,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0108",
    lemma: "Bett",
    display: "Bett",
    sourceDisplay: "das Bett, -en",
    partOfSpeech: "noun",
    article: "das",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 108,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0109",
    lemma: "bezahlen",
    display: "bezahlen",
    sourceDisplay: "bezahlen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 109,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0110",
    lemma: "Bier",
    display: "Bier",
    sourceDisplay: "das Bier",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 110,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0111",
    lemma: "Bild",
    display: "Bild",
    sourceDisplay: "das Bild, -er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 111,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0112",
    lemma: "billig",
    display: "billig",
    sourceDisplay: "billig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 11,
      order: 112,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0113",
    lemma: "Birne",
    display: "Birne",
    sourceDisplay: "die Birne, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 113,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0114",
    lemma: "bis",
    display: "bis",
    sourceDisplay: "bis",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 114,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0115",
    lemma: "bisschen",
    display: "bisschen",
    sourceDisplay: "bisschen",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 115,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0116",
    lemma: "bitte",
    display: "bitte",
    sourceDisplay: "bitte",
    partOfSpeech: "particle",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 116,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0117",
    lemma: "Bitte",
    display: "Bitte",
    sourceDisplay: "die Bitte, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    parentId: "a1-alpha-0116",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 117,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0118",
    lemma: "bitten",
    display: "bitten",
    sourceDisplay: "bitten",
    partOfSpeech: "verb",
    parentId: "a1-alpha-0116",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 118,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0119",
    lemma: "bitter",
    display: "bitter",
    sourceDisplay: "bitter",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 119,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0120",
    lemma: "bleiben",
    display: "bleiben",
    sourceDisplay: "bleiben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 120,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0121",
    lemma: "Bleistift",
    display: "Bleistift",
    sourceDisplay: "der Bleistift, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 121,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0122",
    lemma: "Blick",
    display: "Blick",
    sourceDisplay: "der Blick",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 122,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0123",
    lemma: "Blume",
    display: "Blume",
    sourceDisplay: "die Blume, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 123,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0124",
    lemma: "Bogen",
    display: "Bogen",
    sourceDisplay: "der Bogen",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 124,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0125",
    lemma: "böse",
    display: "böse",
    sourceDisplay: "böse",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 125,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0126",
    lemma: "brauchen",
    display: "brauchen",
    sourceDisplay: "brauchen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 126,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0127",
    lemma: "breit",
    display: "breit",
    sourceDisplay: "breit",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 127,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0128",
    lemma: "Brief",
    display: "Brief",
    sourceDisplay: "der Brief, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 128,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0129",
    lemma: "Briefmarke",
    display: "Briefmarke",
    sourceDisplay: "die Briefmarke, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 129,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0130",
    lemma: "bringen",
    display: "bringen",
    sourceDisplay: "bringen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 130,
      rowKind: "main"
    }
  },
  {
    entryId: "brot",
    lemma: "Brot",
    display: "Brot",
    sourceDisplay: "das Brot, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "die Brote",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 131,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0132",
    lemma: "Brötchen",
    display: "Brötchen",
    sourceDisplay: "das Brötchen, –",
    partOfSpeech: "noun",
    article: "das",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 132,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0133",
    lemma: "Bruder",
    display: "Bruder",
    sourceDisplay: "der Bruder, -ü",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ü",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 133,
      rowKind: "main"
    }
  },
  {
    entryId: "buch",
    lemma: "Buch",
    display: "Buch",
    sourceDisplay: "das Buch, -ü, er",
    partOfSpeech: "noun",
    article: "das",
    plural: "die Bücher",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 134,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0135",
    lemma: "Buchstabe",
    display: "Buchstabe",
    sourceDisplay: "der Buchstabe, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 135,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0136",
    lemma: "buchstabieren",
    display: "buchstabieren",
    sourceDisplay: "buchstabieren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 136,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0137",
    lemma: "Bus",
    display: "Bus",
    sourceDisplay: "der Bus, -se",
    partOfSpeech: "noun",
    article: "der",
    plural: "-se",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 137,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0138",
    lemma: "Butter",
    display: "Butter",
    sourceDisplay: "die Butter",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 138,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0139",
    lemma: "Café",
    display: "Café",
    sourceDisplay: "das Café, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 139,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0140",
    lemma: "CD",
    display: "CD",
    sourceDisplay: "die CD, -s",
    partOfSpeech: "noun",
    article: "die",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 140,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0141",
    lemma: "Chef",
    display: "Chef",
    sourceDisplay: "der Chef",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 141,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0142",
    lemma: "circa/ca.",
    display: "circa/ca.",
    sourceDisplay: "circa/ca.",
    partOfSpeech: "phrase",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 142,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0143",
    lemma: "Computer",
    display: "Computer",
    sourceDisplay: "der Computer, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 143,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0144",
    lemma: "da",
    display: "da",
    sourceDisplay: "da",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 144,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0145",
    lemma: "Dame",
    display: "Dame",
    sourceDisplay: "die Dame, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 12,
      order: 145,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0146",
    lemma: "daneben",
    display: "daneben",
    sourceDisplay: "daneben",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 146,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0147",
    lemma: "danken",
    display: "danken",
    sourceDisplay: "danken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 147,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0148",
    lemma: "Dank",
    display: "Dank",
    sourceDisplay: "der Dank",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0147",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 148,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0149",
    lemma: "danke",
    display: "danke",
    sourceDisplay: "danke",
    partOfSpeech: "particle",
    parentId: "a1-alpha-0147",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 149,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0150",
    lemma: "dann",
    display: "dann",
    sourceDisplay: "dann",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 150,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0151",
    lemma: "Datum",
    display: "Datum",
    sourceDisplay: "das Datum",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 151,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0152",
    lemma: "dauern",
    display: "dauern",
    sourceDisplay: "dauern",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 152,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0153",
    lemma: "dein-",
    display: "dein-",
    sourceDisplay: "dein-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 153,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0154",
    lemma: "denn",
    display: "denn",
    sourceDisplay: "denn",
    partOfSpeech: "conjunction",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 154,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0155",
    lemma: "der",
    display: "der",
    sourceDisplay: "der, die, das",
    partOfSpeech: "determiner",
    plural: "die, das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 155,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0156",
    lemma: "dich",
    display: "dich",
    sourceDisplay: "dich",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 156,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0157",
    lemma: "dies-",
    display: "dies-",
    sourceDisplay: "dies-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 157,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0158",
    lemma: "dir",
    display: "dir",
    sourceDisplay: "dir",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 158,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0159",
    lemma: "Disco",
    display: "Disco",
    sourceDisplay: "die Disco",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 159,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0160",
    lemma: "Doktor",
    display: "Doktor",
    sourceDisplay: "der Doktor",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 160,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0161",
    lemma: "Doppelzimmer",
    display: "Doppelzimmer",
    sourceDisplay: "das Doppelzimmer",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 161,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0162",
    lemma: "Dorf",
    display: "Dorf",
    sourceDisplay: "das Dorf, -ö, er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-ö, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 162,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0163",
    lemma: "dort",
    display: "dort",
    sourceDisplay: "dort, -her, -hin",
    partOfSpeech: "adverb",
    plural: "-her, -hin",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 163,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0164",
    lemma: "draußen",
    display: "draußen",
    sourceDisplay: "draußen",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 164,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0165",
    lemma: "drucken",
    display: "drucken",
    sourceDisplay: "drucken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 165,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0166",
    lemma: "Drucker",
    display: "Drucker",
    sourceDisplay: "der Drucker, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    parentId: "a1-alpha-0165",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 166,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0167",
    lemma: "drücken",
    display: "drücken",
    sourceDisplay: "drücken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 167,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0168",
    lemma: "durch",
    display: "durch",
    sourceDisplay: "durch",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 168,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0169",
    lemma: "Durchsage",
    display: "Durchsage",
    sourceDisplay: "die Durchsage, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 169,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0170",
    lemma: "dürfen",
    display: "dürfen",
    sourceDisplay: "dürfen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 170,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0171",
    lemma: "Durst",
    display: "Durst",
    sourceDisplay: "der Durst",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 171,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0172",
    lemma: "duschen",
    display: "(sich) duschen",
    sourceDisplay: "(sich) duschen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 172,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0173",
    lemma: "Dusche",
    display: "Dusche",
    sourceDisplay: "die Dusche",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0172",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 173,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0174",
    lemma: "Ecke",
    display: "Ecke",
    sourceDisplay: "die Ecke, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 174,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0175",
    lemma: "Ehefrau",
    display: "Ehefrau",
    sourceDisplay: "die Ehefrau, -en/",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en/",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 175,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0176",
    lemma: "Ehemann",
    display: "Ehemann",
    sourceDisplay: "der Ehemann, ä, er",
    partOfSpeech: "noun",
    article: "der",
    plural: "ä, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 176,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0177",
    lemma: "Ei",
    display: "Ei",
    sourceDisplay: "das Ei, -er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 177,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0178",
    lemma: "eilig",
    display: "eilig",
    sourceDisplay: "eilig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 178,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0179",
    lemma: "ein-",
    display: "ein-",
    sourceDisplay: "ein-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 179,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0180",
    lemma: "einfach",
    display: "einfach",
    sourceDisplay: "einfach",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 180,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0181",
    lemma: "Eingang",
    display: "Eingang",
    sourceDisplay: "der Eingang",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 181,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0182",
    lemma: "einkaufen",
    display: "einkaufen",
    sourceDisplay: "einkaufen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 182,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0183",
    lemma: "einladen",
    display: "einladen",
    sourceDisplay: "einladen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 183,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0184",
    lemma: "Einladung",
    display: "Einladung",
    sourceDisplay: "die Einladung",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0183",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 13,
      order: 184,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0185",
    lemma: "einmal",
    display: "einmal",
    sourceDisplay: "einmal",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 185,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0186",
    lemma: "einsteigen",
    display: "einsteigen",
    sourceDisplay: "einsteigen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 186,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0187",
    lemma: "Eintritt",
    display: "Eintritt",
    sourceDisplay: "der Eintritt",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 187,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0188",
    lemma: "Einzelzimmer",
    display: "Einzelzimmer",
    sourceDisplay: "das Einzelzimmer",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 188,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0189",
    lemma: "Eltern (pl.)",
    display: "Eltern (pl.)",
    sourceDisplay: "die Eltern (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 189,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0190",
    lemma: "E-Mail",
    display: "E-Mail",
    sourceDisplay: "die E-Mail, -s",
    partOfSpeech: "noun",
    article: "die",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 190,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0191",
    lemma: "Empfänger",
    display: "Empfänger",
    sourceDisplay: "der Empfänger, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 191,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0192",
    lemma: "empfehlen",
    display: "empfehlen",
    sourceDisplay: "empfehlen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 192,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0193",
    lemma: "enden",
    display: "enden",
    sourceDisplay: "enden",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 193,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0194",
    lemma: "Ende",
    display: "Ende",
    sourceDisplay: "das Ende",
    partOfSpeech: "noun",
    article: "das",
    parentId: "a1-alpha-0193",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 194,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0195",
    lemma: "entschuldigen",
    display: "entschuldigen",
    sourceDisplay: "entschuldigen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 195,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0196",
    lemma: "Entschuldigung",
    display: "Entschuldigung",
    sourceDisplay: "die Entschuldigung",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0195",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 196,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0197",
    lemma: "er",
    display: "er",
    sourceDisplay: "er",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 197,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0198",
    lemma: "Ergebnis",
    display: "Ergebnis",
    sourceDisplay: "das Ergebnis, -se",
    partOfSpeech: "noun",
    article: "das",
    plural: "-se",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 198,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0199",
    lemma: "erklären",
    display: "erklären",
    sourceDisplay: "erklären",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 199,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0200",
    lemma: "erlauben",
    display: "erlauben",
    sourceDisplay: "erlauben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 200,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0201",
    lemma: "Erwachsene",
    display: "Erwachsene",
    sourceDisplay: "der Erwachsene, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 201,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0202",
    lemma: "erzählen",
    display: "erzählen",
    sourceDisplay: "erzählen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 202,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0203",
    lemma: "es",
    display: "es",
    sourceDisplay: "es",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 203,
      rowKind: "main"
    }
  },
  {
    entryId: "essen",
    lemma: "essen",
    display: "essen",
    sourceDisplay: "essen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 204,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0205",
    lemma: "Essen",
    display: "Essen",
    sourceDisplay: "das Essen",
    partOfSpeech: "noun",
    article: "das",
    parentId: "essen",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 205,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0206",
    lemma: "euer",
    display: "euer",
    sourceDisplay: "euer",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 206,
      rowKind: "main"
    }
  },
  {
    entryId: "fahren",
    lemma: "fahren",
    display: "fahren",
    sourceDisplay: "fahren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 207,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0208",
    lemma: "Fahrer",
    display: "Fahrer",
    sourceDisplay: "der Fahrer",
    partOfSpeech: "noun",
    article: "der",
    parentId: "fahren",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 208,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0209",
    lemma: "Fahrkarte",
    display: "Fahrkarte",
    sourceDisplay: "die Fahrkarte, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 209,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0210",
    lemma: "Fahrrad",
    display: "Fahrrad",
    sourceDisplay: "das Fahrrad, -ä, er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-ä, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 210,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0211",
    lemma: "falsch",
    display: "falsch",
    sourceDisplay: "falsch",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 211,
      rowKind: "main"
    }
  },
  {
    entryId: "familie",
    lemma: "Familie",
    display: "Familie",
    sourceDisplay: "die Familie, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "die Familien",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 212,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0213",
    lemma: "Familienname",
    display: "Familienname",
    sourceDisplay: "der Familienname",
    partOfSpeech: "noun",
    article: "der",
    parentId: "familie",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 213,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0214",
    lemma: "Familienstand",
    display: "Familienstand",
    sourceDisplay: "der Familienstand",
    partOfSpeech: "noun",
    article: "der",
    parentId: "familie",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 214,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0215",
    lemma: "Farbe",
    display: "Farbe",
    sourceDisplay: "die Farbe, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 215,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0216",
    lemma: "Fax",
    display: "Fax",
    sourceDisplay: "das Fax, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 216,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0217",
    lemma: "Feier-",
    display: "Feier-",
    sourceDisplay: "Feier-",
    partOfSpeech: "noun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 217,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0218",
    lemma: "feiern",
    display: "feiern",
    sourceDisplay: "feiern",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 218,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0219",
    lemma: "fehlen",
    display: "fehlen",
    sourceDisplay: "fehlen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 219,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0220",
    lemma: "Fehler",
    display: "Fehler",
    sourceDisplay: "der Fehler, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 220,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0221",
    lemma: "fernsehen",
    display: "fernsehen",
    sourceDisplay: "fernsehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 221,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0222",
    lemma: "fertig",
    display: "fertig",
    sourceDisplay: "fertig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 222,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0223",
    lemma: "Feuer",
    display: "Feuer",
    sourceDisplay: "das Feuer",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 223,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0224",
    lemma: "Fieber",
    display: "Fieber",
    sourceDisplay: "das Fieber",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 224,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0225",
    lemma: "Film",
    display: "Film",
    sourceDisplay: "der Film, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 225,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0226",
    lemma: "finden",
    display: "finden",
    sourceDisplay: "finden",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 226,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0227",
    lemma: "Firma",
    display: "Firma",
    sourceDisplay: "die Firma",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 227,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0228",
    lemma: "Fisch",
    display: "Fisch",
    sourceDisplay: "der Fisch, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 14,
      order: 228,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0229",
    lemma: "Flasche",
    display: "Flasche",
    sourceDisplay: "die Flasche, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 229,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0230",
    lemma: "Fleisch",
    display: "Fleisch",
    sourceDisplay: "das Fleisch",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 230,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0231",
    lemma: "fliegen",
    display: "fliegen",
    sourceDisplay: "fliegen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 231,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0232",
    lemma: "abfliegen",
    display: "abfliegen",
    sourceDisplay: "abfliegen",
    partOfSpeech: "verb",
    parentId: "a1-alpha-0231",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 232,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0233",
    lemma: "Abflug",
    display: "Abflug",
    sourceDisplay: "der Abflug",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0231",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 233,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0234",
    lemma: "Flughafen",
    display: "Flughafen",
    sourceDisplay: "der Flughafen",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 234,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0235",
    lemma: "Flugzeug",
    display: "Flugzeug",
    sourceDisplay: "das Flugzeug",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 235,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0236",
    lemma: "Formular",
    display: "Formular",
    sourceDisplay: "das Formular, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 236,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0237",
    lemma: "Foto",
    display: "Foto",
    sourceDisplay: "das Foto, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 237,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0238",
    lemma: "fragen",
    display: "fragen",
    sourceDisplay: "fragen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 238,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0239",
    lemma: "Frage",
    display: "Frage",
    sourceDisplay: "die Frage, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    parentId: "a1-alpha-0238",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 239,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0240",
    lemma: "Frau",
    display: "Frau",
    sourceDisplay: "die Frau, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 240,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0241",
    lemma: "frei",
    display: "frei",
    sourceDisplay: "frei",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 241,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0242",
    lemma: "Freizeit",
    display: "Freizeit",
    sourceDisplay: "die Freizeit",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 242,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0243",
    lemma: "fremd",
    display: "fremd",
    sourceDisplay: "fremd",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 243,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0244",
    lemma: "freuen",
    display: "(sich) freuen",
    sourceDisplay: "(sich) freuen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 244,
      rowKind: "main"
    }
  },
  {
    entryId: "freund",
    lemma: "Freund",
    display: "Freund",
    sourceDisplay: "der Freund, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "die Freunde",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 245,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0246",
    lemma: "früher",
    display: "früher",
    sourceDisplay: "früher",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 246,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0247",
    lemma: "frühstücken",
    display: "frühstücken",
    sourceDisplay: "frühstücken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 247,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0248",
    lemma: "Frühstück",
    display: "Frühstück",
    sourceDisplay: "das Frühstück",
    partOfSpeech: "noun",
    article: "das",
    parentId: "a1-alpha-0247",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 248,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0249",
    lemma: "Führung",
    display: "Führung",
    sourceDisplay: "die Führung",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 249,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0250",
    lemma: "für",
    display: "für",
    sourceDisplay: "für",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 250,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0251",
    lemma: "Fuß",
    display: "Fuß",
    sourceDisplay: "der Fuß, -ü, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ü, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 251,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0252",
    lemma: "Fußball",
    display: "Fußball",
    sourceDisplay: "der Fußball",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 252,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0253",
    lemma: "Garten",
    display: "Garten",
    sourceDisplay: "der Garten",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 253,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0254",
    lemma: "Gast",
    display: "Gast",
    sourceDisplay: "der Gast, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 254,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0255",
    lemma: "geben",
    display: "geben",
    sourceDisplay: "geben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 255,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0256",
    lemma: "geboren",
    display: "geboren",
    sourceDisplay: "geboren",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 256,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0257",
    lemma: "Geburtsjahr",
    display: "Geburtsjahr",
    sourceDisplay: "das Geburtsjahr",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 257,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0258",
    lemma: "Geburtsort",
    display: "Geburtsort",
    sourceDisplay: "der Geburtsort",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 258,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0259",
    lemma: "Geburtstag",
    display: "Geburtstag",
    sourceDisplay: "der Geburtstag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 259,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0260",
    lemma: "gefallen",
    display: "gefallen",
    sourceDisplay: "gefallen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 260,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0261",
    lemma: "gegen",
    display: "gegen",
    sourceDisplay: "gegen",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 261,
      rowKind: "main"
    }
  },
  {
    entryId: "gehen",
    lemma: "gehen",
    display: "gehen",
    sourceDisplay: "gehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 262,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0263",
    lemma: "gehören",
    display: "gehören",
    sourceDisplay: "gehören",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 263,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0264",
    lemma: "Geld",
    display: "Geld",
    sourceDisplay: "das Geld",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 264,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0265",
    lemma: "Gemüse",
    display: "Gemüse",
    sourceDisplay: "das Gemüse",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 15,
      order: 265,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0266",
    lemma: "Gepäck",
    display: "Gepäck",
    sourceDisplay: "das Gepäck",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 266,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0267",
    lemma: "gerade",
    display: "gerade",
    sourceDisplay: "gerade",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 267,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0268",
    lemma: "geradeaus",
    display: "geradeaus",
    sourceDisplay: "geradeaus",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 268,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0269",
    lemma: "gern(e)",
    display: "gern(e)",
    sourceDisplay: "gern(e)",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 269,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0270",
    lemma: "Geschäft",
    display: "Geschäft",
    sourceDisplay: "das Geschäft, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 270,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0271",
    lemma: "Geschenk",
    display: "Geschenk",
    sourceDisplay: "das Geschenk, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 271,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0272",
    lemma: "Geschwister (pl.)",
    display: "Geschwister (pl.)",
    sourceDisplay: "die Geschwister (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 272,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0273",
    lemma: "Gespräch",
    display: "Gespräch",
    sourceDisplay: "das Gespräch, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 273,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0274",
    lemma: "gestern",
    display: "gestern",
    sourceDisplay: "gestern",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 274,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0275",
    lemma: "gestorben",
    display: "gestorben",
    sourceDisplay: "gestorben",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 275,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0276",
    lemma: "Getränk",
    display: "Getränk",
    sourceDisplay: "das Getränk, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 276,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0277",
    lemma: "Gewicht",
    display: "Gewicht",
    sourceDisplay: "das Gewicht",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 277,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0278",
    lemma: "gewinnen",
    display: "gewinnen",
    sourceDisplay: "gewinnen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 278,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0279",
    lemma: "Glas",
    display: "Glas",
    sourceDisplay: "das Glas, -ä, er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-ä, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 279,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0280",
    lemma: "glauben",
    display: "glauben",
    sourceDisplay: "glauben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 280,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0281",
    lemma: "gleich",
    display: "gleich",
    sourceDisplay: "gleich",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 281,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0282",
    lemma: "Gleis",
    display: "Gleis",
    sourceDisplay: "das Gleis, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 282,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0283",
    lemma: "Glück",
    display: "Glück",
    sourceDisplay: "das Glück",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 283,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0284",
    lemma: "glücklich",
    display: "glücklich",
    sourceDisplay: "glücklich",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 284,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0285",
    lemma: "Glückwunsch",
    display: "Glückwunsch",
    sourceDisplay: "der Glückwunsch",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 285,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0286",
    lemma: "Grad (Celsius)",
    display: "Grad (Celsius)",
    sourceDisplay: "Grad (Celsius)",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 286,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0287",
    lemma: "gratulieren",
    display: "gratulieren",
    sourceDisplay: "gratulieren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 287,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0288",
    lemma: "grillen",
    display: "grillen",
    sourceDisplay: "grillen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 288,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0289",
    lemma: "groß",
    display: "groß",
    sourceDisplay: "groß",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 289,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0290",
    lemma: "Größe",
    display: "Größe",
    sourceDisplay: "die Größe",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0289",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 290,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0291",
    lemma: "Großeltern (pl.)",
    display: "Großeltern (pl.)",
    sourceDisplay: "die Großeltern (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 291,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0292",
    lemma: "Großmutter",
    display: "Großmutter",
    sourceDisplay: "die Großmutter",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0291",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 292,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0293",
    lemma: "Großvater",
    display: "Großvater",
    sourceDisplay: "der Großvater",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0291",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 293,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0294",
    lemma: "Gruppe",
    display: "Gruppe",
    sourceDisplay: "die Gruppe, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 294,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0295",
    lemma: "Gruß",
    display: "Gruß",
    sourceDisplay: "der Gruß, -ü, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ü, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 295,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0296",
    lemma: "gültig",
    display: "gültig",
    sourceDisplay: "gültig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 296,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0297",
    lemma: "günstig",
    display: "günstig",
    sourceDisplay: "günstig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 297,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0298",
    lemma: "gut",
    display: "gut",
    sourceDisplay: "gut",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 298,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0299",
    lemma: "Haar",
    display: "Haar",
    sourceDisplay: "das Haar, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 299,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0300",
    lemma: "haben",
    display: "haben",
    sourceDisplay: "haben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 300,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0301",
    lemma: "Hähnchen",
    display: "Hähnchen",
    sourceDisplay: "das Hähnchen, -",
    partOfSpeech: "noun",
    article: "das",
    plural: "-",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 301,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0302",
    lemma: "Halbpension",
    display: "Halbpension",
    sourceDisplay: "die Halbpension",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 302,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0303",
    lemma: "Halle",
    display: "Halle",
    sourceDisplay: "die Halle",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 303,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0304",
    lemma: "hallo",
    display: "hallo",
    sourceDisplay: "hallo",
    partOfSpeech: "other",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 16,
      order: 304,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0305",
    lemma: "halten",
    display: "halten",
    sourceDisplay: "halten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 305,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0306",
    lemma: "Haltestelle",
    display: "Haltestelle",
    sourceDisplay: "die Haltestelle",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 306,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0307",
    lemma: "Hand",
    display: "Hand",
    sourceDisplay: "die Hand, -ä, e",
    partOfSpeech: "noun",
    article: "die",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 307,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0308",
    lemma: "Handy",
    display: "Handy",
    sourceDisplay: "das Handy, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 308,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0309",
    lemma: "Haus",
    display: "Haus",
    sourceDisplay: "das Haus, -ä, er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-ä, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 309,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0310",
    lemma: "Hausaufgabe",
    display: "Hausaufgabe",
    sourceDisplay: "die Hausaufgabe,-n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 310,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0311",
    lemma: "Hausfrau",
    display: "Hausfrau",
    sourceDisplay: "die Hausfrau, -en/",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en/",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 311,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0312",
    lemma: "Hausmann",
    display: "Hausmann",
    sourceDisplay: "der Hausmann",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0311",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 312,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0313",
    lemma: "Heimat",
    display: "Heimat",
    sourceDisplay: "die Heimat",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 313,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0314",
    lemma: "heiraten",
    display: "heiraten",
    sourceDisplay: "heiraten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 314,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0315",
    lemma: "heißen",
    display: "heißen",
    sourceDisplay: "heißen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 315,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0316",
    lemma: "helfen",
    display: "helfen",
    sourceDisplay: "helfen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 316,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0317",
    lemma: "hell",
    display: "hell",
    sourceDisplay: "hell",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 317,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0318",
    lemma: "Herd",
    display: "Herd",
    sourceDisplay: "der Herd",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 318,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0319",
    lemma: "Herr",
    display: "Herr",
    sourceDisplay: "der Herr, -en",
    partOfSpeech: "noun",
    article: "der",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 319,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0320",
    lemma: "herzlich",
    display: "herzlich",
    sourceDisplay: "herzlich",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 320,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0321",
    lemma: "heute",
    display: "heute",
    sourceDisplay: "heute",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 321,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0322",
    lemma: "hier",
    display: "hier",
    sourceDisplay: "hier",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 322,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0323",
    lemma: "Hilfe",
    display: "Hilfe",
    sourceDisplay: "die Hilfe",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 323,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0324",
    lemma: "hinten",
    display: "hinten",
    sourceDisplay: "hinten",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 324,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0325",
    lemma: "Hobby",
    display: "Hobby",
    sourceDisplay: "das Hobby, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 325,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0326",
    lemma: "hoch",
    display: "hoch",
    sourceDisplay: "hoch",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 326,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0327",
    lemma: "Hochzeit",
    display: "Hochzeit",
    sourceDisplay: "die Hochzeit",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 327,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0328",
    lemma: "holen",
    display: "holen",
    sourceDisplay: "holen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 328,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0329",
    lemma: "hören",
    display: "hören",
    sourceDisplay: "hören",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 329,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0330",
    lemma: "Hotel",
    display: "Hotel",
    sourceDisplay: "das Hotel, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 330,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0331",
    lemma: "Hund",
    display: "Hund",
    sourceDisplay: "der Hund, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 331,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0332",
    lemma: "Hunger",
    display: "Hunger",
    sourceDisplay: "der Hunger",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 332,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0333",
    lemma: "ich",
    display: "ich",
    sourceDisplay: "ich",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 333,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0334",
    lemma: "ihr/ihm/ihn",
    display: "ihr/ihm/ihn",
    sourceDisplay: "ihr/ihm/ihn",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 334,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0335",
    lemma: "immer",
    display: "immer",
    sourceDisplay: "immer",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 335,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0336",
    lemma: "in",
    display: "in",
    sourceDisplay: "in",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 336,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0337",
    lemma: "Information",
    display: "Information",
    sourceDisplay: "die Information, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 337,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0338",
    lemma: "international",
    display: "international",
    sourceDisplay: "international",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 338,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0339",
    lemma: "Internet",
    display: "Internet",
    sourceDisplay: "das Internet",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 17,
      order: 339,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0340",
    lemma: "ja",
    display: "ja",
    sourceDisplay: "ja",
    partOfSpeech: "particle",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 340,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0341",
    lemma: "Jacke",
    display: "Jacke",
    sourceDisplay: "die Jacke, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 341,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0342",
    lemma: "jed-",
    display: "jed-",
    sourceDisplay: "jed-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 342,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0343",
    lemma: "jetzt",
    display: "jetzt",
    sourceDisplay: "jetzt",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 343,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0344",
    lemma: "Job",
    display: "Job",
    sourceDisplay: "der Job, -s",
    partOfSpeech: "noun",
    article: "der",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 344,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0345",
    lemma: "Jugendliche",
    display: "Jugendliche",
    sourceDisplay: "der Jugendliche, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 345,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0346",
    lemma: "jung",
    display: "jung",
    sourceDisplay: "jung",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 346,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0347",
    lemma: "Junge",
    display: "Junge",
    sourceDisplay: "der Junge, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 347,
      rowKind: "main"
    }
  },
  {
    entryId: "kaffee",
    lemma: "Kaffee",
    display: "Kaffee",
    sourceDisplay: "der Kaffee",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 348,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0349",
    lemma: "kaputt",
    display: "kaputt",
    sourceDisplay: "kaputt",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 349,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0350",
    lemma: "Karte",
    display: "Karte",
    sourceDisplay: "die Karte, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 350,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0351",
    lemma: "(Kredit)-Karte",
    display: "(Kredit)-Karte",
    sourceDisplay: "(Kredit)-Karte, -n",
    partOfSpeech: "noun",
    plural: "-n",
    parentId: "a1-alpha-0350",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 351,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0352",
    lemma: "Kartoffel",
    display: "Kartoffel",
    sourceDisplay: "die Kartoffel, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 352,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0353",
    lemma: "Kasse",
    display: "Kasse",
    sourceDisplay: "die Kasse",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 353,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0354",
    lemma: "kaufen",
    display: "kaufen",
    sourceDisplay: "kaufen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 354,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0355",
    lemma: "kein",
    display: "kein",
    sourceDisplay: "kein",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 355,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0356",
    lemma: "kennen",
    display: "kennen",
    sourceDisplay: "kennen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 356,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0357",
    lemma: "kennenlernen",
    display: "kennenlernen",
    sourceDisplay: "kennenlernen",
    partOfSpeech: "verb",
    parentId: "a1-alpha-0356",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 357,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0358",
    lemma: "Kind",
    display: "Kind",
    sourceDisplay: "das Kind, -er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 358,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0359",
    lemma: "Kindergarten",
    display: "Kindergarten",
    sourceDisplay: "der Kindergarten",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 359,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0360",
    lemma: "Kino",
    display: "Kino",
    sourceDisplay: "das Kino, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 360,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0361",
    lemma: "Kiosk",
    display: "Kiosk",
    sourceDisplay: "der Kiosk",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 361,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0362",
    lemma: "klar",
    display: "klar",
    sourceDisplay: "klar",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 362,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0363",
    lemma: "Klasse",
    display: "Klasse",
    sourceDisplay: "die Klasse",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 363,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0364",
    lemma: "Kleidung",
    display: "Kleidung",
    sourceDisplay: "die Kleidung",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 364,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0365",
    lemma: "klein",
    display: "klein",
    sourceDisplay: "klein",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 365,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0366",
    lemma: "kochen",
    display: "kochen",
    sourceDisplay: "kochen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 366,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0367",
    lemma: "Koffer",
    display: "Koffer",
    sourceDisplay: "der Koffer, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 367,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0368",
    lemma: "Kollege",
    display: "Kollege",
    sourceDisplay: "der Kollege, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 368,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0369",
    lemma: "kommen",
    display: "kommen",
    sourceDisplay: "kommen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 369,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0370",
    lemma: "können",
    display: "können",
    sourceDisplay: "können",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 370,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0371",
    lemma: "Konto",
    display: "Konto",
    sourceDisplay: "das Konto",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 371,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0372",
    lemma: "Kopf",
    display: "Kopf",
    sourceDisplay: "der Kopf",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 372,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0373",
    lemma: "kosten",
    display: "kosten",
    sourceDisplay: "kosten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 373,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0374",
    lemma: "krank",
    display: "krank",
    sourceDisplay: "krank",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 374,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0375",
    lemma: "kriegen",
    display: "kriegen",
    sourceDisplay: "kriegen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 375,
      rowKind: "main"
    }
  },
  {
    entryId: "kueche",
    lemma: "Küche",
    display: "Küche",
    sourceDisplay: "die Küche",
    partOfSpeech: "noun",
    article: "die",
    plural: "die Küchen",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 376,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0377",
    lemma: "Kuchen",
    display: "Kuchen",
    sourceDisplay: "der Kuchen",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 18,
      order: 377,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0378",
    lemma: "Kugelschreiber",
    display: "Kugelschreiber",
    sourceDisplay: "der Kugelschreiber",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 378,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0379",
    lemma: "Kühlschrank",
    display: "Kühlschrank",
    sourceDisplay: "der Kühlschrank",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 379,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0380",
    lemma: "kulturell",
    display: "kulturell",
    sourceDisplay: "kulturell",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 380,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0381",
    lemma: "sich kümmern",
    display: "sich kümmern",
    sourceDisplay: "sich kümmern",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 381,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0382",
    lemma: "Kunde",
    display: "Kunde",
    sourceDisplay: "der Kunde, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 382,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0383",
    lemma: "Kurs",
    display: "Kurs",
    sourceDisplay: "der Kurs, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 383,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0384",
    lemma: "kurz",
    display: "kurz",
    sourceDisplay: "kurz",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 384,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0385",
    lemma: "lachen",
    display: "lachen",
    sourceDisplay: "lachen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 385,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0386",
    lemma: "Laden",
    display: "Laden",
    sourceDisplay: "der Laden, -ä",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 386,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0387",
    lemma: "Land",
    display: "Land",
    sourceDisplay: "das Land, -ä, er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-ä, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 387,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0388",
    lemma: "lang",
    display: "lang",
    sourceDisplay: "lang",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 388,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0389",
    lemma: "lange",
    display: "lange",
    sourceDisplay: "lange",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 389,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0390",
    lemma: "langsam",
    display: "langsam",
    sourceDisplay: "langsam",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 390,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0391",
    lemma: "laufen",
    display: "laufen",
    sourceDisplay: "laufen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 391,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0392",
    lemma: "laut",
    display: "laut",
    sourceDisplay: "laut",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 392,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0393",
    lemma: "leben",
    display: "leben",
    sourceDisplay: "leben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 393,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0394",
    lemma: "Leben",
    display: "Leben",
    sourceDisplay: "das Leben",
    partOfSpeech: "noun",
    article: "das",
    parentId: "a1-alpha-0393",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 394,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0395",
    lemma: "Lebensmittel (pl.)",
    display: "Lebensmittel (pl.)",
    sourceDisplay: "die Lebensmittel (pl.)",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0393",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 395,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0396",
    lemma: "ledig",
    display: "ledig",
    sourceDisplay: "ledig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 396,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0397",
    lemma: "legen",
    display: "legen",
    sourceDisplay: "legen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 397,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0398",
    lemma: "Lehrer",
    display: "Lehrer",
    sourceDisplay: "der Lehrer, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 398,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0399",
    lemma: "leicht",
    display: "leicht",
    sourceDisplay: "leicht",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 399,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0400",
    lemma: "leider",
    display: "leider",
    sourceDisplay: "leider",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 400,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0401",
    lemma: "leise",
    display: "leise",
    sourceDisplay: "leise",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 401,
      rowKind: "main"
    }
  },
  {
    entryId: "lernen",
    lemma: "lernen",
    display: "lernen",
    sourceDisplay: "lernen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 402,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0403",
    lemma: "lesen",
    display: "lesen",
    sourceDisplay: "lesen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 403,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0404",
    lemma: "letzt-",
    display: "letzt-",
    sourceDisplay: "letzt-",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 404,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0405",
    lemma: "Leute (pl.)",
    display: "Leute (pl.)",
    sourceDisplay: "die Leute (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 405,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0406",
    lemma: "Licht",
    display: "Licht",
    sourceDisplay: "das Licht",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 406,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0407",
    lemma: "lieb-",
    display: "lieb-",
    sourceDisplay: "lieb-",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 407,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0408",
    lemma: "lieben",
    display: "lieben",
    sourceDisplay: "lieben",
    partOfSpeech: "verb",
    parentId: "a1-alpha-0407",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 408,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0409",
    lemma: "lieber",
    display: "lieber",
    sourceDisplay: "lieber",
    partOfSpeech: "adverb",
    parentId: "a1-alpha-0407",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 409,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0410",
    lemma: "Lieblings-",
    display: "Lieblings-",
    sourceDisplay: "Lieblings-",
    partOfSpeech: "other",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 410,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0411",
    lemma: "Lied",
    display: "Lied",
    sourceDisplay: "das Lied, -er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 411,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0412",
    lemma: "liegen",
    display: "liegen",
    sourceDisplay: "liegen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 412,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0413",
    lemma: "links",
    display: "links",
    sourceDisplay: "links",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 413,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0414",
    lemma: "Lkw",
    display: "Lkw",
    sourceDisplay: "der Lkw, -s",
    partOfSpeech: "noun",
    article: "der",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 414,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0415",
    lemma: "Lokal",
    display: "Lokal",
    sourceDisplay: "das Lokal",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 415,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0416",
    lemma: "Lösung",
    display: "Lösung",
    sourceDisplay: "die Lösung, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 416,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0417",
    lemma: "lustig",
    display: "lustig",
    sourceDisplay: "lustig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 417,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0418",
    lemma: "machen",
    display: "machen",
    sourceDisplay: "machen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 19,
      order: 418,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0419",
    lemma: "Mädchen",
    display: "Mädchen",
    sourceDisplay: "das Mädchen, –",
    partOfSpeech: "noun",
    article: "das",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 419,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0420",
    lemma: "man",
    display: "man",
    sourceDisplay: "man",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 420,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0421",
    lemma: "Mann",
    display: "Mann",
    sourceDisplay: "der Mann, -ä, er",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 421,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0422",
    lemma: "männlich",
    display: "männlich",
    sourceDisplay: "männlich",
    partOfSpeech: "adjective",
    parentId: "a1-alpha-0421",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 422,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0423",
    lemma: "Maschine",
    display: "Maschine",
    sourceDisplay: "die Maschine, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 423,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0424",
    lemma: "Meer",
    display: "Meer",
    sourceDisplay: "das Meer",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 424,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0425",
    lemma: "mehr",
    display: "mehr",
    sourceDisplay: "mehr",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 425,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0426",
    lemma: "mein",
    display: "mein",
    sourceDisplay: "mein",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 426,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0427",
    lemma: "meist-",
    display: "meist-",
    sourceDisplay: "meist-",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 427,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0428",
    lemma: "Mensch",
    display: "Mensch",
    sourceDisplay: "der Mensch, -en",
    partOfSpeech: "noun",
    article: "der",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 428,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0429",
    lemma: "mieten",
    display: "mieten",
    sourceDisplay: "mieten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 429,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0430",
    lemma: "Miete",
    display: "Miete",
    sourceDisplay: "die Miete",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0429",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 430,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0431",
    lemma: "Milch",
    display: "Milch",
    sourceDisplay: "die Milch",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 431,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0432",
    lemma: "mit",
    display: "mit",
    sourceDisplay: "mit",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 432,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0433",
    lemma: "mitbringen",
    display: "mitbringen",
    sourceDisplay: "mitbringen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 433,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0434",
    lemma: "mitkommen",
    display: "mitkommen",
    sourceDisplay: "mitkommen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 434,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0435",
    lemma: "mitmachen",
    display: "mitmachen",
    sourceDisplay: "mitmachen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 435,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0436",
    lemma: "mitnehmen",
    display: "mitnehmen",
    sourceDisplay: "mitnehmen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 436,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0437",
    lemma: "Mitte",
    display: "Mitte",
    sourceDisplay: "die Mitte",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 437,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0438",
    lemma: "Möbel (pl.)",
    display: "Möbel (pl.)",
    sourceDisplay: "die Möbel (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 438,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0439",
    lemma: "möchten",
    display: "möchten",
    sourceDisplay: "möchten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 439,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0440",
    lemma: "mögen",
    display: "mögen",
    sourceDisplay: "mögen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 440,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0441",
    lemma: "möglich",
    display: "möglich",
    sourceDisplay: "möglich",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 441,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0442",
    lemma: "Moment",
    display: "Moment",
    sourceDisplay: "der Moment",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 442,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0443",
    lemma: "morgen",
    display: "morgen",
    sourceDisplay: "morgen",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 443,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0444",
    lemma: "müde",
    display: "müde",
    sourceDisplay: "müde",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 444,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0445",
    lemma: "Mund",
    display: "Mund",
    sourceDisplay: "der Mund",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 445,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0446",
    lemma: "müssen",
    display: "müssen",
    sourceDisplay: "müssen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 446,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0447",
    lemma: "Mutter",
    display: "Mutter",
    sourceDisplay: "die Mutter, -ü",
    partOfSpeech: "noun",
    article: "die",
    plural: "-ü",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 447,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0448",
    lemma: "nach",
    display: "nach",
    sourceDisplay: "nach",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 448,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0449",
    lemma: "nächst-",
    display: "nächst-",
    sourceDisplay: "nächst-",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 449,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0450",
    lemma: "Name",
    display: "Name",
    sourceDisplay: "der Name, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 450,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0451",
    lemma: "nehmen",
    display: "nehmen",
    sourceDisplay: "nehmen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 451,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0452",
    lemma: "nein",
    display: "nein",
    sourceDisplay: "nein",
    partOfSpeech: "particle",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 452,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0453",
    lemma: "neu",
    display: "neu",
    sourceDisplay: "neu",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 453,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0454",
    lemma: "nicht",
    display: "nicht",
    sourceDisplay: "nicht",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 454,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0455",
    lemma: "nichts",
    display: "nichts",
    sourceDisplay: "nichts",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 455,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0456",
    lemma: "nie",
    display: "nie",
    sourceDisplay: "nie",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 20,
      order: 456,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0457",
    lemma: "noch",
    display: "noch",
    sourceDisplay: "noch",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 457,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0458",
    lemma: "normal",
    display: "normal",
    sourceDisplay: "normal",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 458,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0459",
    lemma: "Nummer",
    display: "Nummer",
    sourceDisplay: "die Nummer, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 459,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0460",
    lemma: "nur",
    display: "nur",
    sourceDisplay: "nur",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 460,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0461",
    lemma: "oben",
    display: "oben",
    sourceDisplay: "oben",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 461,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0462",
    lemma: "Obst",
    display: "Obst",
    sourceDisplay: "das Obst",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 462,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0463",
    lemma: "oder",
    display: "oder",
    sourceDisplay: "oder",
    partOfSpeech: "conjunction",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 463,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0464",
    lemma: "öffnen",
    display: "öffnen",
    sourceDisplay: "öffnen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 464,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0465",
    lemma: "geöffnet",
    display: "geöffnet",
    sourceDisplay: "geöffnet",
    partOfSpeech: "adjective",
    parentId: "a1-alpha-0464",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 465,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0466",
    lemma: "oft",
    display: "oft",
    sourceDisplay: "oft",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 466,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0467",
    lemma: "ohne",
    display: "ohne",
    sourceDisplay: "ohne",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 467,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0468",
    lemma: "Öl",
    display: "Öl",
    sourceDisplay: "das Öl",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 468,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0469",
    lemma: "Oma",
    display: "Oma",
    sourceDisplay: "die Oma, -s",
    partOfSpeech: "noun",
    article: "die",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 469,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0470",
    lemma: "Opa",
    display: "Opa",
    sourceDisplay: "der Opa, -s",
    partOfSpeech: "noun",
    article: "der",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 470,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0471",
    lemma: "Ordnung",
    display: "Ordnung",
    sourceDisplay: "die Ordnung",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 471,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0472",
    lemma: "Ort",
    display: "Ort",
    sourceDisplay: "der Ort, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 472,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0473",
    lemma: "Papier",
    display: "Papier",
    sourceDisplay: "das Papier",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 473,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0474",
    lemma: "Papiere (pl.)",
    display: "Papiere (pl.)",
    sourceDisplay: "die Papiere (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 474,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0475",
    lemma: "Partner",
    display: "Partner",
    sourceDisplay: "der Partner, -/",
    partOfSpeech: "noun",
    article: "der",
    plural: "-/",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 475,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0476",
    lemma: "Partnerin",
    display: "Partnerin",
    sourceDisplay: "die Partnerin, -nen",
    partOfSpeech: "noun",
    article: "die",
    plural: "-nen",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 476,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0477",
    lemma: "Party",
    display: "Party",
    sourceDisplay: "die Party",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 477,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0478",
    lemma: "Pass",
    display: "Pass",
    sourceDisplay: "der Pass, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 478,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0479",
    lemma: "Pause",
    display: "Pause",
    sourceDisplay: "die Pause, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 479,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0480",
    lemma: "Plan",
    display: "Plan",
    sourceDisplay: "der Plan, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 480,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0481",
    lemma: "Platz",
    display: "Platz",
    sourceDisplay: "der Platz, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 481,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0482",
    lemma: "Polizei",
    display: "Polizei",
    sourceDisplay: "die Polizei",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 482,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0483",
    lemma: "Pommes frites (pl.)",
    display: "Pommes frites (pl.)",
    sourceDisplay: "die Pommes frites (pl.)",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 483,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0484",
    lemma: "Post",
    display: "Post",
    sourceDisplay: "die Post",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 484,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0485",
    lemma: "Postleitzahl",
    display: "Postleitzahl",
    sourceDisplay: "die Postleitzahl",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 485,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0486",
    lemma: "Praktikum",
    display: "Praktikum",
    sourceDisplay: "das Praktikum",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 486,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0487",
    lemma: "Praxis",
    display: "Praxis",
    sourceDisplay: "die Praxis",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 487,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0488",
    lemma: "Preis",
    display: "Preis",
    sourceDisplay: "der Preis, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 488,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0489",
    lemma: "Problem",
    display: "Problem",
    sourceDisplay: "das Problem, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 489,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0490",
    lemma: "Prospekt",
    display: "Prospekt",
    sourceDisplay: "der Prospekt, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 490,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0491",
    lemma: "Prüfung",
    display: "Prüfung",
    sourceDisplay: "die Prüfung",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 491,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0492",
    lemma: "pünktlich",
    display: "pünktlich",
    sourceDisplay: "pünktlich",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 21,
      order: 492,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0493",
    lemma: "Rad fahren",
    display: "Rad fahren",
    sourceDisplay: "Rad fahren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 493,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0494",
    lemma: "rauchen",
    display: "rauchen",
    sourceDisplay: "rauchen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 494,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0495",
    lemma: "Raum",
    display: "Raum",
    sourceDisplay: "der Raum, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 495,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0496",
    lemma: "Rechnung",
    display: "Rechnung",
    sourceDisplay: "die Rechnung, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 496,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0497",
    lemma: "rechts",
    display: "rechts",
    sourceDisplay: "rechts",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 497,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0498",
    lemma: "regnen",
    display: "regnen",
    sourceDisplay: "regnen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 498,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0499",
    lemma: "Regen",
    display: "Regen",
    sourceDisplay: "der Regen",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0498",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 499,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0500",
    lemma: "Reis",
    display: "Reis",
    sourceDisplay: "der Reis",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 500,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0501",
    lemma: "reisen",
    display: "reisen",
    sourceDisplay: "reisen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 501,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0502",
    lemma: "Reise",
    display: "Reise",
    sourceDisplay: "die Reise",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0501",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 502,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0503",
    lemma: "Reisebüro",
    display: "Reisebüro",
    sourceDisplay: "das Reisebüro, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    parentId: "a1-alpha-0501",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 503,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0504",
    lemma: "Reiseführer",
    display: "Reiseführer",
    sourceDisplay: "der Reiseführer",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0501",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 504,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0505",
    lemma: "reparieren",
    display: "reparieren",
    sourceDisplay: "reparieren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 505,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0506",
    lemma: "Reparatur",
    display: "Reparatur",
    sourceDisplay: "die Reparatur",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0505",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 506,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0507",
    lemma: "Restaurant",
    display: "Restaurant",
    sourceDisplay: "das Restaurant, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 507,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0508",
    lemma: "Rezeption",
    display: "Rezeption",
    sourceDisplay: "die Rezeption",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 508,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0509",
    lemma: "richtig",
    display: "richtig",
    sourceDisplay: "richtig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 509,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0510",
    lemma: "riechen",
    display: "riechen",
    sourceDisplay: "riechen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 510,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0511",
    lemma: "ruhig",
    display: "ruhig",
    sourceDisplay: "ruhig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 511,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0512",
    lemma: "Saft",
    display: "Saft",
    sourceDisplay: "der Saft",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 512,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0513",
    lemma: "sagen",
    display: "sagen",
    sourceDisplay: "sagen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 513,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0514",
    lemma: "Salat",
    display: "Salat",
    sourceDisplay: "der Salat",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 514,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0515",
    lemma: "Salz",
    display: "Salz",
    sourceDisplay: "das Salz",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 515,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0516",
    lemma: "Satz",
    display: "Satz",
    sourceDisplay: "Satz, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 516,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0517",
    lemma: "S-Bahn",
    display: "S-Bahn",
    sourceDisplay: "die S-Bahn",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 517,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0518",
    lemma: "Schalter",
    display: "Schalter",
    sourceDisplay: "der Schalter",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 518,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0519",
    lemma: "scheinen",
    display: "scheinen",
    sourceDisplay: "scheinen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 519,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0520",
    lemma: "schicken",
    display: "schicken",
    sourceDisplay: "schicken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 520,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0521",
    lemma: "Schild",
    display: "Schild",
    sourceDisplay: "das Schild, -er",
    partOfSpeech: "noun",
    article: "das",
    plural: "-er",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 521,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0522",
    lemma: "Schinken",
    display: "Schinken",
    sourceDisplay: "der Schinken, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 522,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0523",
    lemma: "schlafen",
    display: "schlafen",
    sourceDisplay: "schlafen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 523,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0524",
    lemma: "schlecht",
    display: "schlecht",
    sourceDisplay: "schlecht",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 524,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0525",
    lemma: "schließen",
    display: "schließen",
    sourceDisplay: "schließen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 525,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0526",
    lemma: "geschlossen",
    display: "geschlossen",
    sourceDisplay: "geschlossen",
    partOfSpeech: "adjective",
    parentId: "a1-alpha-0525",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 526,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0527",
    lemma: "Schluss",
    display: "Schluss",
    sourceDisplay: "der Schluss",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 527,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0528",
    lemma: "Schlüssel",
    display: "Schlüssel",
    sourceDisplay: "der Schlüssel, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 528,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0529",
    lemma: "schmecken",
    display: "schmecken",
    sourceDisplay: "schmecken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 529,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0530",
    lemma: "schnell",
    display: "schnell",
    sourceDisplay: "schnell",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 530,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0531",
    lemma: "schon",
    display: "schon",
    sourceDisplay: "schon",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 531,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0532",
    lemma: "schön",
    display: "schön",
    sourceDisplay: "schön",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 532,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0533",
    lemma: "Schrank",
    display: "Schrank",
    sourceDisplay: "der Schrank, -ä, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 533,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0534",
    lemma: "schreiben",
    display: "schreiben",
    sourceDisplay: "schreiben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 22,
      order: 534,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0535",
    lemma: "Schuh",
    display: "Schuh",
    sourceDisplay: "der Schuh, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 535,
      rowKind: "main"
    }
  },
  {
    entryId: "schule",
    lemma: "Schule",
    display: "Schule",
    sourceDisplay: "die Schule",
    partOfSpeech: "noun",
    article: "die",
    plural: "die Schulen",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 536,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0537",
    lemma: "Schüler",
    display: "Schüler",
    sourceDisplay: "der Schüler, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    parentId: "schule",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 537,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0538",
    lemma: "schwer",
    display: "schwer",
    sourceDisplay: "schwer",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 538,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0539",
    lemma: "Schwester",
    display: "Schwester",
    sourceDisplay: "die Schwester, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 539,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0540",
    lemma: "schwimmen",
    display: "schwimmen",
    sourceDisplay: "schwimmen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 540,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0541",
    lemma: "Schwimmbad",
    display: "Schwimmbad",
    sourceDisplay: "das Schwimmbad",
    partOfSpeech: "noun",
    article: "das",
    parentId: "a1-alpha-0540",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 541,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0542",
    lemma: "See",
    display: "See",
    sourceDisplay: "der See",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 542,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0543",
    lemma: "sehen",
    display: "sehen",
    sourceDisplay: "sehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 543,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0544",
    lemma: "Sehenswürdigkeit",
    display: "Sehenswürdigkeit",
    sourceDisplay: "die Sehenswürdigkeit, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 544,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0545",
    lemma: "sehr",
    display: "sehr",
    sourceDisplay: "sehr",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 545,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0546",
    lemma: "sein",
    display: "sein",
    sourceDisplay: "sein",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 546,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0547",
    lemma: "an sein",
    display: "an sein",
    sourceDisplay: "an sein",
    partOfSpeech: "phrase",
    parentId: "a1-alpha-0546",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 547,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0548",
    lemma: "auf sein",
    display: "auf sein",
    sourceDisplay: "auf sein",
    partOfSpeech: "phrase",
    parentId: "a1-alpha-0546",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 548,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0549",
    lemma: "weg sein",
    display: "weg sein",
    sourceDisplay: "weg sein",
    partOfSpeech: "verb",
    parentId: "a1-alpha-0546",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 549,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0550",
    lemma: "zu sein",
    display: "zu sein",
    sourceDisplay: "zu sein",
    partOfSpeech: "verb",
    parentId: "a1-alpha-0546",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 550,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0551",
    lemma: "seit",
    display: "seit",
    sourceDisplay: "seit",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 551,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0552",
    lemma: "selbstständig",
    display: "selbstständig",
    sourceDisplay: "selbstständig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 552,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0553",
    lemma: "sich",
    display: "sich",
    sourceDisplay: "sich",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 553,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0554",
    lemma: "sie",
    display: "sie",
    sourceDisplay: "sie",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 554,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0555",
    lemma: "Sie",
    display: "Sie",
    sourceDisplay: "Sie",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 555,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0556",
    lemma: "sitzen",
    display: "sitzen",
    sourceDisplay: "sitzen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 556,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0557",
    lemma: "so",
    display: "so",
    sourceDisplay: "so",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 557,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0558",
    lemma: "Sofa",
    display: "Sofa",
    sourceDisplay: "das Sofa",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 558,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0559",
    lemma: "sofort",
    display: "sofort",
    sourceDisplay: "sofort",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 559,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0560",
    lemma: "Sohn",
    display: "Sohn",
    sourceDisplay: "der Sohn, -ö, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ö, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 560,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0561",
    lemma: "sollen",
    display: "sollen",
    sourceDisplay: "sollen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 561,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0562",
    lemma: "Sonne",
    display: "Sonne",
    sourceDisplay: "die Sonne",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 562,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0563",
    lemma: "spät",
    display: "spät",
    sourceDisplay: "spät",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 563,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0564",
    lemma: "später",
    display: "später",
    sourceDisplay: "später",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 564,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0565",
    lemma: "Speisekarte",
    display: "Speisekarte",
    sourceDisplay: "die Speisekarte",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 565,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0566",
    lemma: "spielen",
    display: "spielen",
    sourceDisplay: "spielen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 566,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0567",
    lemma: "Sport",
    display: "Sport",
    sourceDisplay: "der Sport",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 567,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0568",
    lemma: "Sprache",
    display: "Sprache",
    sourceDisplay: "die Sprache, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 568,
      rowKind: "main"
    }
  },
  {
    entryId: "sprechen",
    lemma: "sprechen",
    display: "sprechen",
    sourceDisplay: "sprechen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 569,
      rowKind: "main"
    }
  },
  {
    entryId: "stadt",
    lemma: "Stadt",
    display: "Stadt",
    sourceDisplay: "die Stadt, -ä, e",
    partOfSpeech: "noun",
    article: "die",
    plural: "die Städte",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 570,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0571",
    lemma: "stehen",
    display: "stehen",
    sourceDisplay: "stehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 571,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0572",
    lemma: "Stelle",
    display: "Stelle",
    sourceDisplay: "die Stelle, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 23,
      order: 572,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0573",
    lemma: "stellen",
    display: "stellen",
    sourceDisplay: "stellen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 573,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0574",
    lemma: "Stock",
    display: "Stock",
    sourceDisplay: "der Stock",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 574,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0575",
    lemma: "Straße",
    display: "Straße",
    sourceDisplay: "die Straße, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 575,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0576",
    lemma: "Straßenbahn",
    display: "Straßenbahn",
    sourceDisplay: "die Straßenbahn",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 576,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0577",
    lemma: "studieren",
    display: "studieren",
    sourceDisplay: "studieren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 577,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0578",
    lemma: "Studium",
    display: "Studium",
    sourceDisplay: "das Studium",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 578,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0579",
    lemma: "Student",
    display: "Student",
    sourceDisplay: "der Student, -en",
    partOfSpeech: "noun",
    article: "der",
    plural: "-en",
    parentId: "a1-alpha-0578",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 579,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0580",
    lemma: "Stunde",
    display: "Stunde",
    sourceDisplay: "die Stunde, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 580,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0581",
    lemma: "suchen",
    display: "suchen",
    sourceDisplay: "suchen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 581,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0582",
    lemma: "tanzen",
    display: "tanzen",
    sourceDisplay: "tanzen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 582,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0583",
    lemma: "Tasche",
    display: "Tasche",
    sourceDisplay: "die Tasche, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 583,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0584",
    lemma: "Taxi",
    display: "Taxi",
    sourceDisplay: "das Taxi, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 584,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0585",
    lemma: "Tee",
    display: "Tee",
    sourceDisplay: "der Tee",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 585,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0586",
    lemma: "Teil",
    display: "Teil",
    sourceDisplay: "der Teil, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 586,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0587",
    lemma: "telefonieren",
    display: "telefonieren",
    sourceDisplay: "telefonieren",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 587,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0588",
    lemma: "Telefon",
    display: "Telefon",
    sourceDisplay: "das Telefon",
    partOfSpeech: "noun",
    article: "das",
    parentId: "a1-alpha-0587",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 588,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0589",
    lemma: "Termin",
    display: "Termin",
    sourceDisplay: "der Termin, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 589,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0590",
    lemma: "Test",
    display: "Test",
    sourceDisplay: "der Test",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 590,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0591",
    lemma: "teuer",
    display: "teuer",
    sourceDisplay: "teuer",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 591,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0592",
    lemma: "Text",
    display: "Text",
    sourceDisplay: "der Text, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 592,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0593",
    lemma: "Thema",
    display: "Thema",
    sourceDisplay: "das Thema",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 593,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0594",
    lemma: "Ticket",
    display: "Ticket",
    sourceDisplay: "das Ticket, -s",
    partOfSpeech: "noun",
    article: "das",
    plural: "-s",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 594,
      rowKind: "main"
    }
  },
  {
    entryId: "tisch",
    lemma: "Tisch",
    display: "Tisch",
    sourceDisplay: "der Tisch, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "die Tische",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 595,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0596",
    lemma: "Tochter",
    display: "Tochter",
    sourceDisplay: "die Tochter, -ö",
    partOfSpeech: "noun",
    article: "die",
    plural: "-ö",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 596,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0597",
    lemma: "Toilette",
    display: "Toilette",
    sourceDisplay: "die Toilette, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 597,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0598",
    lemma: "Tomate",
    display: "Tomate",
    sourceDisplay: "die Tomate, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 598,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0599",
    lemma: "tot",
    display: "tot",
    sourceDisplay: "tot",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 599,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0600",
    lemma: "treffen",
    display: "(sich) treffen",
    sourceDisplay: "(sich) treffen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 600,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0601",
    lemma: "Treppe",
    display: "Treppe",
    sourceDisplay: "die Treppe, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 601,
      rowKind: "main"
    }
  },
  {
    entryId: "trinken",
    lemma: "trinken",
    display: "trinken",
    sourceDisplay: "trinken",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 602,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0603",
    lemma: "tschüss",
    display: "tschüss",
    sourceDisplay: "tschüss",
    partOfSpeech: "other",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 603,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0604",
    lemma: "tun",
    display: "tun",
    sourceDisplay: "tun",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 604,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0605",
    lemma: "über",
    display: "über",
    sourceDisplay: "über",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 605,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0606",
    lemma: "übernachten",
    display: "übernachten",
    sourceDisplay: "übernachten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 606,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0607",
    lemma: "überweisen",
    display: "überweisen",
    sourceDisplay: "überweisen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 607,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0608",
    lemma: "Uhr",
    display: "Uhr",
    sourceDisplay: "die Uhr",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 608,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0609",
    lemma: "um",
    display: "um",
    sourceDisplay: "um",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 609,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0610",
    lemma: "umziehen",
    display: "umziehen",
    sourceDisplay: "umziehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 610,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0611",
    lemma: "und",
    display: "und",
    sourceDisplay: "und",
    partOfSpeech: "conjunction",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 24,
      order: 611,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0612",
    lemma: "unser-",
    display: "unser-",
    sourceDisplay: "unser-",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 612,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0613",
    lemma: "unten",
    display: "unten",
    sourceDisplay: "unten",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 613,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0614",
    lemma: "unter",
    display: "unter",
    sourceDisplay: "unter",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 614,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0615",
    lemma: "Unterricht",
    display: "Unterricht",
    sourceDisplay: "der Unterricht",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 615,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0616",
    lemma: "unterschreiben",
    display: "unterschreiben",
    sourceDisplay: "unterschreiben",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 616,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0617",
    lemma: "Unterschrift",
    display: "Unterschrift",
    sourceDisplay: "die Unterschrift",
    partOfSpeech: "noun",
    article: "die",
    parentId: "a1-alpha-0616",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 617,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0618",
    lemma: "Urlaub",
    display: "Urlaub",
    sourceDisplay: "der Urlaub",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 618,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0619",
    lemma: "Vater",
    display: "Vater",
    sourceDisplay: "der Vater, -ä",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ä",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 619,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0620",
    lemma: "verboten",
    display: "verboten",
    sourceDisplay: "verboten",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 620,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0621",
    lemma: "verdienen",
    display: "verdienen",
    sourceDisplay: "verdienen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 621,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0622",
    lemma: "Verein",
    display: "Verein",
    sourceDisplay: "der Verein",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 622,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0623",
    lemma: "verheiratet",
    display: "verheiratet",
    sourceDisplay: "verheiratet",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 623,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0624",
    lemma: "verkaufen",
    display: "verkaufen",
    sourceDisplay: "verkaufen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 624,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0625",
    lemma: "Verkäufer",
    display: "Verkäufer",
    sourceDisplay: "der Verkäufer, –",
    partOfSpeech: "noun",
    article: "der",
    plural: "–",
    parentId: "a1-alpha-0624",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 625,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0626",
    lemma: "vermieten",
    display: "vermieten",
    sourceDisplay: "vermieten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 626,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0627",
    lemma: "Vermieter",
    display: "Vermieter",
    sourceDisplay: "der Vermieter",
    partOfSpeech: "noun",
    article: "der",
    parentId: "a1-alpha-0626",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 627,
      rowKind: "indented"
    }
  },
  {
    entryId: "verstehen",
    lemma: "verstehen",
    display: "verstehen",
    sourceDisplay: "verstehen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 628,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0629",
    lemma: "Verwandte",
    display: "Verwandte",
    sourceDisplay: "der Verwandte, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 629,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0630",
    lemma: "viel",
    display: "viel",
    sourceDisplay: "viel",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 630,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0631",
    lemma: "vielleicht",
    display: "vielleicht",
    sourceDisplay: "vielleicht",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 631,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0632",
    lemma: "von",
    display: "von",
    sourceDisplay: "von",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 632,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0633",
    lemma: "vor",
    display: "vor",
    sourceDisplay: "vor",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 633,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0634",
    lemma: "Vorname",
    display: "Vorname",
    sourceDisplay: "der Vorname, -n",
    partOfSpeech: "noun",
    article: "der",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 634,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0635",
    lemma: "Vorsicht",
    display: "Vorsicht",
    sourceDisplay: "die Vorsicht",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 635,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0636",
    lemma: "vorstellen",
    display: "(sich) vorstellen",
    sourceDisplay: "(sich) vorstellen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 636,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0637",
    lemma: "Vorwahl",
    display: "Vorwahl",
    sourceDisplay: "die Vorwahl",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 637,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0638",
    lemma: "wandern",
    display: "wandern",
    sourceDisplay: "wandern",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 638,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0639",
    lemma: "wann",
    display: "wann",
    sourceDisplay: "wann",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 639,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0640",
    lemma: "warten",
    display: "warten",
    sourceDisplay: "warten",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 640,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0641",
    lemma: "warum",
    display: "warum",
    sourceDisplay: "warum",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 641,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0642",
    lemma: "was",
    display: "was",
    sourceDisplay: "was",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 642,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0643",
    lemma: "was für ein",
    display: "was für ein",
    sourceDisplay: "was für ein",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 643,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0644",
    lemma: "waschen",
    display: "(sich) waschen",
    sourceDisplay: "(sich) waschen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 644,
      rowKind: "main"
    }
  },
  {
    entryId: "wasser",
    lemma: "Wasser",
    display: "Wasser",
    sourceDisplay: "das Wasser",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 645,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0646",
    lemma: "weh tun",
    display: "weh tun",
    sourceDisplay: "weh tun",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 646,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0647",
    lemma: "weiblich",
    display: "weiblich",
    sourceDisplay: "weiblich",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 647,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0648",
    lemma: "Wein",
    display: "Wein",
    sourceDisplay: "der Wein",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 648,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0649",
    lemma: "weit",
    display: "weit",
    sourceDisplay: "weit",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 25,
      order: 649,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0650",
    lemma: "weiter",
    display: "weiter",
    sourceDisplay: "weiter",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 650,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0651",
    lemma: "welch-",
    display: "welch-",
    sourceDisplay: "welch-",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 651,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0652",
    lemma: "Welt",
    display: "Welt",
    sourceDisplay: "die Welt",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 652,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0653",
    lemma: "wenig",
    display: "wenig",
    sourceDisplay: "wenig",
    partOfSpeech: "determiner",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 653,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0654",
    lemma: "wer",
    display: "wer",
    sourceDisplay: "wer",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 654,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0655",
    lemma: "werden",
    display: "werden",
    sourceDisplay: "werden",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 655,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0656",
    lemma: "Wetter",
    display: "Wetter",
    sourceDisplay: "das Wetter",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 656,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0657",
    lemma: "wichtig",
    display: "wichtig",
    sourceDisplay: "wichtig",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 657,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0658",
    lemma: "wie",
    display: "wie",
    sourceDisplay: "wie",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 658,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0659",
    lemma: "wiederholen",
    display: "wiederholen",
    sourceDisplay: "wiederholen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 659,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0660",
    lemma: "Wiederhören",
    display: "Wiederhören",
    sourceDisplay: "das Wiederhören",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 660,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0661",
    lemma: "Wiedersehen",
    display: "Wiedersehen",
    sourceDisplay: "das Wiedersehen",
    partOfSpeech: "noun",
    article: "das",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 661,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0662",
    lemma: "wie viel",
    display: "wie viel",
    sourceDisplay: "wie viel",
    partOfSpeech: "phrase",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 662,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0663",
    lemma: "willkommen",
    display: "willkommen",
    sourceDisplay: "willkommen",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 663,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0664",
    lemma: "Wind",
    display: "Wind",
    sourceDisplay: "der Wind",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 664,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0665",
    lemma: "wir",
    display: "wir",
    sourceDisplay: "wir",
    partOfSpeech: "pronoun",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 665,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0666",
    lemma: "wissen",
    display: "wissen",
    sourceDisplay: "wissen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 666,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0667",
    lemma: "wo",
    display: "wo",
    sourceDisplay: "wo",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 667,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0668",
    lemma: "woher",
    display: "woher",
    sourceDisplay: "woher",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 668,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0669",
    lemma: "wohin",
    display: "wohin",
    sourceDisplay: "wohin",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 669,
      rowKind: "main"
    }
  },
  {
    entryId: "wohnen",
    lemma: "wohnen",
    display: "wohnen",
    sourceDisplay: "wohnen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 670,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0671",
    lemma: "Wohnung",
    display: "Wohnung",
    sourceDisplay: "die Wohnung, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    parentId: "wohnen",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 671,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0672",
    lemma: "wollen",
    display: "wollen",
    sourceDisplay: "wollen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 672,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0673",
    lemma: "Wort",
    display: "Wort",
    sourceDisplay: "das Wort, -ö, er/-e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-ö, er/-e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 673,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0674",
    lemma: "wunderbar",
    display: "wunderbar",
    sourceDisplay: "wunderbar",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 674,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0675",
    lemma: "zahlen",
    display: "zahlen",
    sourceDisplay: "zahlen",
    partOfSpeech: "verb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 675,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0676",
    lemma: "Zeit",
    display: "Zeit",
    sourceDisplay: "die Zeit",
    partOfSpeech: "noun",
    article: "die",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 676,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0677",
    lemma: "zurzeit",
    display: "zurzeit",
    sourceDisplay: "zurzeit",
    partOfSpeech: "adverb",
    parentId: "a1-alpha-0676",
    entryType: "derived",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 677,
      rowKind: "indented"
    }
  },
  {
    entryId: "a1-alpha-0678",
    lemma: "Zeitung",
    display: "Zeitung",
    sourceDisplay: "die Zeitung, -en",
    partOfSpeech: "noun",
    article: "die",
    plural: "-en",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 678,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0679",
    lemma: "Zigarette",
    display: "Zigarette",
    sourceDisplay: "die Zigarette, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 679,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0680",
    lemma: "Zimmer",
    display: "Zimmer",
    sourceDisplay: "das Zimmer, –",
    partOfSpeech: "noun",
    article: "das",
    plural: "–",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 680,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0681",
    lemma: "Zoll",
    display: "Zoll",
    sourceDisplay: "der Zoll",
    partOfSpeech: "noun",
    article: "der",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 681,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0682",
    lemma: "zu",
    display: "zu",
    sourceDisplay: "zu",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 26,
      order: 682,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0683",
    lemma: "zufrieden",
    display: "zufrieden",
    sourceDisplay: "zufrieden",
    partOfSpeech: "adjective",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 27,
      order: 683,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0684",
    lemma: "Zug",
    display: "Zug",
    sourceDisplay: "der Zug, -ü, e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-ü, e",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 27,
      order: 684,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0685",
    lemma: "zurück",
    display: "zurück",
    sourceDisplay: "zurück",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 27,
      order: 685,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0686",
    lemma: "zusammen",
    display: "zusammen",
    sourceDisplay: "zusammen",
    partOfSpeech: "adverb",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 27,
      order: 686,
      rowKind: "main"
    }
  },
  {
    entryId: "a1-alpha-0687",
    lemma: "zwischen",
    display: "zwischen",
    sourceDisplay: "zwischen",
    partOfSpeech: "preposition",
    entryType: "main",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 27,
      order: 687,
      rowKind: "main"
    }
  }
];

export const GOETHE_WORD_GROUP_ENTRIES: readonly A1SourceEntry[] = [
  {
    entryId: "a1-group-numbers-001",
    lemma: "1 = eins",
    display: "1 = eins",
    sourceDisplay: "1 = eins",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 1,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-002",
    lemma: "2 = zwei",
    display: "2 = zwei",
    sourceDisplay: "2 = zwei",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 2,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-003",
    lemma: "3 = drei",
    display: "3 = drei",
    sourceDisplay: "3 = drei",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 3,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-004",
    lemma: "4 = vier",
    display: "4 = vier",
    sourceDisplay: "4 = vier",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 4,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-005",
    lemma: "5 = fünf",
    display: "5 = fünf",
    sourceDisplay: "5 = fünf",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 5,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-006",
    lemma: "6 = sechs",
    display: "6 = sechs",
    sourceDisplay: "6 = sechs",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 6,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-007",
    lemma: "7 = sieben",
    display: "7 = sieben",
    sourceDisplay: "7 = sieben",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 7,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-008",
    lemma: "8 = acht",
    display: "8 = acht",
    sourceDisplay: "8 = acht",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 8,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-009",
    lemma: "9 = neun",
    display: "9 = neun",
    sourceDisplay: "9 = neun",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 9,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-010",
    lemma: "10 = zehn",
    display: "10 = zehn",
    sourceDisplay: "10 = zehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 10,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-011",
    lemma: "11 = elf",
    display: "11 = elf",
    sourceDisplay: "11 = elf",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 11,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-012",
    lemma: "12 = zwölf",
    display: "12 = zwölf",
    sourceDisplay: "12 = zwölf",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 12,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-013",
    lemma: "13 = dreizehn",
    display: "13 = dreizehn",
    sourceDisplay: "13 = dreizehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 13,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-014",
    lemma: "14 = vierzehn",
    display: "14 = vierzehn",
    sourceDisplay: "14 = vierzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 14,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-015",
    lemma: "15 = fünfzehn",
    display: "15 = fünfzehn",
    sourceDisplay: "15 = fünfzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 15,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-016",
    lemma: "16 = sechzehn",
    display: "16 = sechzehn",
    sourceDisplay: "16 = sechzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 16,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-017",
    lemma: "17 = siebzehn",
    display: "17 = siebzehn",
    sourceDisplay: "17 = siebzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 17,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-018",
    lemma: "18 = achtzehn",
    display: "18 = achtzehn",
    sourceDisplay: "18 = achtzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 18,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-019",
    lemma: "19 = neunzehn",
    display: "19 = neunzehn",
    sourceDisplay: "19 = neunzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 19,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-020",
    lemma: "20 = zwanzig",
    display: "20 = zwanzig",
    sourceDisplay: "20 = zwanzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 20,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-021",
    lemma: "21 = einundzwanzig",
    display: "21 = einundzwanzig",
    sourceDisplay: "21 = einundzwanzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 21,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-022",
    lemma: "30 = dreißig",
    display: "30 = dreißig",
    sourceDisplay: "30 = dreißig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 22,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-023",
    lemma: "40 = vierzig",
    display: "40 = vierzig",
    sourceDisplay: "40 = vierzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 23,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-024",
    lemma: "50 = fünfzig",
    display: "50 = fünfzig",
    sourceDisplay: "50 = fünfzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 24,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-025",
    lemma: "60 = sechzig",
    display: "60 = sechzig",
    sourceDisplay: "60 = sechzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 25,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-026",
    lemma: "70 = siebzig",
    display: "70 = siebzig",
    sourceDisplay: "70 = siebzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 26,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-027",
    lemma: "80 = achtzig",
    display: "80 = achtzig",
    sourceDisplay: "80 = achtzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 27,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-028",
    lemma: "90 = neunzig",
    display: "90 = neunzig",
    sourceDisplay: "90 = neunzig",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 28,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-029",
    lemma: "100 = (ein)hundert",
    display: "100 = (ein)hundert",
    sourceDisplay: "100 = (ein)hundert",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 29,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-030",
    lemma: "101 = hunderteins",
    display: "101 = hunderteins",
    sourceDisplay: "101 = hunderteins",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 30,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-031",
    lemma: "200 = zweihundert",
    display: "200 = zweihundert",
    sourceDisplay: "200 = zweihundert",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 31,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-032",
    lemma: "1.000 = (ein)tausend",
    display: "1.000 = (ein)tausend",
    sourceDisplay: "1.000 = (ein)tausend",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 32,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-033",
    lemma: "1.000.000 = eine Million",
    display: "1.000.000 = eine Million",
    sourceDisplay: "1.000.000 = eine Million",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 33,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-034",
    lemma: "1.000.000.000 = eine Milliarde",
    display: "1.000.000.000 = eine Milliarde",
    sourceDisplay: "1.000.000.000 = eine Milliarde",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 34,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-035",
    lemma: "das/der/die erste",
    display: "das/der/die erste",
    sourceDisplay: "das/der/die erste",
    partOfSpeech: "determiner",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 35,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-036",
    lemma: "zweite",
    display: "zweite",
    sourceDisplay: "zweite",
    partOfSpeech: "determiner",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 36,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-037",
    lemma: "dritte",
    display: "dritte",
    sourceDisplay: "dritte",
    partOfSpeech: "determiner",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 37,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-038",
    lemma: "vierte",
    display: "vierte",
    sourceDisplay: "vierte",
    partOfSpeech: "determiner",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 38,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-numbers-039",
    lemma: "usw.",
    display: "usw.",
    sourceDisplay: "usw.",
    partOfSpeech: "phrase",
    entryType: "word-group-member",
    wordGroupId: "numbers",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 39,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-dates-040",
    lemma: "1/2 = ein halb; halb ...",
    display: "1/2 = ein halb; halb ...",
    sourceDisplay: "1/2 = ein halb; halb ...",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "dates",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 40,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-dates-041",
    lemma: "1/4 = ein Viertel; Viertel ...",
    display: "1/4 = ein Viertel; Viertel ...",
    sourceDisplay: "1/4 = ein Viertel; Viertel ...",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "dates",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 41,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-dates-042",
    lemma: "1999 = neunzehnhundertneunundneunzig",
    display: "1999 = neunzehnhundertneunundneunzig",
    sourceDisplay: "1999 = neunzehnhundertneunundneunzig",
    partOfSpeech: "numeral",
    entryType: "word-group-pattern",
    wordGroupId: "dates",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 42,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-dates-043",
    lemma: "2014 = zweitausendvierzehn",
    display: "2014 = zweitausendvierzehn",
    sourceDisplay: "2014 = zweitausendvierzehn",
    partOfSpeech: "numeral",
    entryType: "word-group-pattern",
    wordGroupId: "dates",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 43,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-dates-044",
    lemma: "heute ist der 1. März",
    display: "heute ist der 1. März",
    sourceDisplay: "heute ist der 1. März",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "dates",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 44,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-dates-045",
    lemma: "Berlin",
    display: "Berlin",
    sourceDisplay: "Berlin, 12. April 2002",
    partOfSpeech: "noun",
    plural: "12. April 2002",
    entryType: "word-group-pattern",
    wordGroupId: "dates",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 6,
      order: 45,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-046",
    lemma: "0.03 Uhr = null Uhr drei",
    display: "0.03 Uhr = null Uhr drei",
    sourceDisplay: "0.03 Uhr = null Uhr drei",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 46,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-047",
    lemma: "7.15 Uhr = sieben Uhr fünfzehn",
    display: "7.15 Uhr = sieben Uhr fünfzehn",
    sourceDisplay: "7.15 Uhr = sieben Uhr fünfzehn",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 47,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-048",
    lemma: "13.17 Uhr = dreizehn Uhr siebzehn",
    display: "13.17 Uhr = dreizehn Uhr siebzehn",
    sourceDisplay: "13.17 Uhr = dreizehn Uhr siebzehn",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 48,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-049",
    lemma: "24.00 Uhr = vierundzwanzig Uhr",
    display: "24.00 Uhr = vierundzwanzig Uhr",
    sourceDisplay: "24.00 Uhr = vierundzwanzig Uhr",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 49,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-050",
    lemma: "ein Uhr",
    display: "ein Uhr",
    sourceDisplay: "ein Uhr",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 50,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-051",
    lemma: "fünf Minuten vor/nach eins",
    display: "fünf Minuten vor/nach eins",
    sourceDisplay: "fünf Minuten vor/nach eins",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 51,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-052",
    lemma: "Viertel vor/nach zwei",
    display: "Viertel vor/nach zwei",
    sourceDisplay: "Viertel vor/nach zwei",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 52,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-clock-time-053",
    lemma: "halb drei",
    display: "halb drei",
    sourceDisplay: "halb drei",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "clock-time",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 53,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-time-measures-054",
    lemma: "Sekunde",
    display: "Sekunde",
    sourceDisplay: "die Sekunde, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "word-group-member",
    wordGroupId: "time-measures",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 54,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-time-measures-055",
    lemma: "Minute",
    display: "Minute",
    sourceDisplay: "die Minute, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "word-group-member",
    wordGroupId: "time-measures",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 55,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-time-measures-056",
    lemma: "Stunde",
    display: "Stunde",
    sourceDisplay: "die Stunde, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    parentId: "a1-alpha-0580",
    entryType: "word-group-member",
    wordGroupId: "time-measures",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 56,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-time-measures-057",
    lemma: "Tag",
    display: "Tag",
    sourceDisplay: "der Tag, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "word-group-member",
    wordGroupId: "time-measures",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 57,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-time-measures-058",
    lemma: "Woche",
    display: "Woche",
    sourceDisplay: "die Woche, -n",
    partOfSpeech: "noun",
    article: "die",
    plural: "-n",
    entryType: "word-group-member",
    wordGroupId: "time-measures",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 58,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-time-measures-059",
    lemma: "Jahr",
    display: "Jahr",
    sourceDisplay: "das Jahr, -e",
    partOfSpeech: "noun",
    article: "das",
    plural: "-e",
    entryType: "word-group-member",
    wordGroupId: "time-measures",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 59,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-060",
    lemma: "Wochentag",
    display: "Wochentag",
    sourceDisplay: "der Wochentag, -e",
    partOfSpeech: "noun",
    article: "der",
    plural: "-e",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 60,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-061",
    lemma: "Sonntag",
    display: "Sonntag",
    sourceDisplay: "der Sonntag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 61,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-062",
    lemma: "Montag",
    display: "Montag",
    sourceDisplay: "der Montag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 62,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-063",
    lemma: "Dienstag",
    display: "Dienstag",
    sourceDisplay: "der Dienstag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 63,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-064",
    lemma: "Mittwoch",
    display: "Mittwoch",
    sourceDisplay: "der Mittwoch",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 64,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-065",
    lemma: "Donnerstag",
    display: "Donnerstag",
    sourceDisplay: "der Donnerstag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 65,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-066",
    lemma: "Freitag",
    display: "Freitag",
    sourceDisplay: "der Freitag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 66,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-067",
    lemma: "Samstag/Sonnabend",
    display: "Samstag/Sonnabend",
    sourceDisplay: "der Samstag/Sonnabend",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 67,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-068",
    lemma: "Wochenende",
    display: "Wochenende",
    sourceDisplay: "das Wochenende",
    partOfSpeech: "noun",
    article: "das",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 68,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-weekdays-069",
    lemma: "am Wochenende",
    display: "am Wochenende",
    sourceDisplay: "am Wochenende",
    partOfSpeech: "phrase",
    entryType: "word-group-member",
    wordGroupId: "weekdays",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 69,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-070",
    lemma: "Tag",
    display: "Tag",
    sourceDisplay: "der Tag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 70,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-071",
    lemma: "Morgen",
    display: "Morgen",
    sourceDisplay: "der Morgen",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 71,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-072",
    lemma: "Vormittag",
    display: "Vormittag",
    sourceDisplay: "der Vormittag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 72,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-073",
    lemma: "Mittag",
    display: "Mittag",
    sourceDisplay: "der Mittag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 73,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-074",
    lemma: "Nachmittag",
    display: "Nachmittag",
    sourceDisplay: "der Nachmittag",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 74,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-075",
    lemma: "Abend",
    display: "Abend",
    sourceDisplay: "der Abend",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 75,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-times-of-day-076",
    lemma: "Nacht",
    display: "Nacht",
    sourceDisplay: "die Nacht",
    partOfSpeech: "noun",
    article: "die",
    entryType: "word-group-member",
    wordGroupId: "times-of-day",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 76,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-077",
    lemma: "Januar",
    display: "Januar",
    sourceDisplay: "der Januar",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 77,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-078",
    lemma: "Februar",
    display: "Februar",
    sourceDisplay: "der Februar",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 78,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-079",
    lemma: "März",
    display: "März",
    sourceDisplay: "der März",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 79,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-080",
    lemma: "April",
    display: "April",
    sourceDisplay: "der April",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 80,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-081",
    lemma: "Mai",
    display: "Mai",
    sourceDisplay: "der Mai",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 81,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-082",
    lemma: "Juni",
    display: "Juni",
    sourceDisplay: "der Juni",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 82,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-083",
    lemma: "Juli",
    display: "Juli",
    sourceDisplay: "der Juli",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 83,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-084",
    lemma: "August",
    display: "August",
    sourceDisplay: "der August",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 84,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-085",
    lemma: "September",
    display: "September",
    sourceDisplay: "der September",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 85,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-086",
    lemma: "Oktober",
    display: "Oktober",
    sourceDisplay: "der Oktober",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 86,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-087",
    lemma: "November",
    display: "November",
    sourceDisplay: "der November",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 87,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-months-088",
    lemma: "Dezember",
    display: "Dezember",
    sourceDisplay: "der Dezember",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "months",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 7,
      order: 88,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-seasons-089",
    lemma: "Frühling/das Frühjahr",
    display: "Frühling/das Frühjahr",
    sourceDisplay: "der Frühling/das Frühjahr",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "seasons",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 89,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-seasons-090",
    lemma: "Sommer",
    display: "Sommer",
    sourceDisplay: "der Sommer",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "seasons",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 90,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-seasons-091",
    lemma: "Herbst",
    display: "Herbst",
    sourceDisplay: "der Herbst",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "seasons",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 91,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-seasons-092",
    lemma: "Winter",
    display: "Winter",
    sourceDisplay: "der Winter",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "seasons",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 92,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-currencies-093",
    lemma: "1 Euro",
    display: "1 Euro",
    sourceDisplay: "1 Euro",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "currencies",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 93,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-currencies-094",
    lemma: "100 Cent",
    display: "100 Cent",
    sourceDisplay: "100 Cent",
    partOfSpeech: "numeral",
    entryType: "word-group-member",
    wordGroupId: "currencies",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 94,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-measurements-095",
    lemma: "ein Meter = 1 m",
    display: "ein Meter = 1 m",
    sourceDisplay: "ein Meter = 1 m",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 95,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-096",
    lemma: "ein Zentimeter = 1 cm",
    display: "ein Zentimeter = 1 cm",
    sourceDisplay: "ein Zentimeter = 1 cm",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 96,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-097",
    lemma: "ein Meter fünfzehn = 1",
    display: "ein Meter fünfzehn = 1",
    sourceDisplay: "ein Meter fünfzehn = 1,15 m",
    partOfSpeech: "phrase",
    plural: "15 m",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 97,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-098",
    lemma: "zweihundert Kilometer = 200 km",
    display: "zweihundert Kilometer = 200 km",
    sourceDisplay: "zweihundert Kilometer = 200 km",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 98,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-099",
    lemma: "ein Quadratmeter = 1 m²",
    display: "ein Quadratmeter = 1 m²",
    sourceDisplay: "ein Quadratmeter = 1 m²",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 99,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-100",
    lemma: "ein Grad unter Null = -1°",
    display: "ein Grad unter Null = -1°",
    sourceDisplay: "ein Grad unter Null = -1°",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 100,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-101",
    lemma: "vier Grad über Null = +4°",
    display: "vier Grad über Null = +4°",
    sourceDisplay: "vier Grad über Null = +4°",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 101,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-102",
    lemma: "ein Prozent = 1 %",
    display: "ein Prozent = 1 %",
    sourceDisplay: "ein Prozent = 1 %",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 102,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-103",
    lemma: "ein Liter = 1 l",
    display: "ein Liter = 1 l",
    sourceDisplay: "ein Liter = 1 l",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 103,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-104",
    lemma: "ein Gramm = 1 g",
    display: "ein Gramm = 1 g",
    sourceDisplay: "ein Gramm = 1 g",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 104,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-105",
    lemma: "ein Pfund = 500 g",
    display: "ein Pfund = 500 g",
    sourceDisplay: "ein Pfund = 500 g",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 105,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-measurements-106",
    lemma: "ein Kilo(gramm) = 1 kg",
    display: "ein Kilo(gramm) = 1 kg",
    sourceDisplay: "ein Kilo(gramm) = 1 kg",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "measurements",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 106,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-107",
    lemma: "Deutschland",
    display: "Deutschland",
    sourceDisplay: "Deutschland",
    partOfSpeech: "other",
    entryType: "word-group-member",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 107,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-108",
    lemma: "der/die Deutsche",
    display: "der/die Deutsche",
    sourceDisplay: "der/die Deutsche, -n",
    partOfSpeech: "noun",
    plural: "-n",
    entryType: "word-group-member",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 108,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-109",
    lemma: "ein Deutscher",
    display: "ein Deutscher",
    sourceDisplay: "ein Deutscher, eine Deutsche, Deutsche",
    partOfSpeech: "phrase",
    plural: "eine Deutsche, Deutsche",
    entryType: "word-group-pattern",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 109,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-110",
    lemma: "deutsch",
    display: "deutsch",
    sourceDisplay: "deutsch",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 110,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-111",
    lemma: "Europa",
    display: "Europa",
    sourceDisplay: "Europa",
    partOfSpeech: "noun",
    entryType: "word-group-member",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 111,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-112",
    lemma: "Europäer",
    display: "Europäer",
    sourceDisplay: "Europäer",
    partOfSpeech: "noun",
    entryType: "word-group-member",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 112,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-113",
    lemma: "europäisch",
    display: "europäisch",
    sourceDisplay: "europäisch",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 113,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-114",
    lemma: "Angabe der eigenen Herkunft oder Nationalität",
    display: "Angabe der eigenen Herkunft oder Nationalität",
    sourceDisplay: "Angabe der eigenen Herkunft oder Nationalität",
    partOfSpeech: "phrase",
    entryType: "word-group-pattern",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 114,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-115",
    lemma: "Land",
    display: "Land",
    sourceDisplay: "Land, Bewohner, Nationalität",
    partOfSpeech: "noun",
    plural: "Bewohner, Nationalität",
    entryType: "word-group-pattern",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 115,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-116",
    lemma: "Türkei",
    display: "Türkei",
    sourceDisplay: "Türkei, Türke/Türkin, türkisch",
    partOfSpeech: "noun",
    plural: "Türke/Türkin, türkisch",
    entryType: "word-group-pattern",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 116,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-117",
    lemma: "Finnland",
    display: "Finnland",
    sourceDisplay: "Finnland, Finne/Finnin, finnisch",
    partOfSpeech: "noun",
    plural: "Finne/Finnin, finnisch",
    entryType: "word-group-pattern",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 117,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-countries-nationalities-118",
    lemma: "Mexiko",
    display: "Mexiko",
    sourceDisplay: "Mexiko, Mexikaner/Mexikanerin, mexikanisch",
    partOfSpeech: "noun",
    plural: "Mexikaner/Mexikanerin, mexikanisch",
    entryType: "word-group-pattern",
    wordGroupId: "countries-nationalities",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 118,
      rowKind: "group-pattern"
    }
  },
  {
    entryId: "a1-group-colors-119",
    lemma: "schwarz",
    display: "schwarz",
    sourceDisplay: "schwarz",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 119,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-120",
    lemma: "grau",
    display: "grau",
    sourceDisplay: "grau",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 120,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-121",
    lemma: "blau",
    display: "blau",
    sourceDisplay: "blau",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 121,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-122",
    lemma: "grün",
    display: "grün",
    sourceDisplay: "grün",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 122,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-123",
    lemma: "weiß",
    display: "weiß",
    sourceDisplay: "weiß",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 123,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-124",
    lemma: "rot",
    display: "rot",
    sourceDisplay: "rot",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 124,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-125",
    lemma: "gelb",
    display: "gelb",
    sourceDisplay: "gelb",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 125,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-colors-126",
    lemma: "braun",
    display: "braun",
    sourceDisplay: "braun",
    partOfSpeech: "adjective",
    entryType: "word-group-member",
    wordGroupId: "colors",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 126,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-directions-127",
    lemma: "Norden",
    display: "Norden",
    sourceDisplay: "der Norden",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "directions",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 127,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-directions-128",
    lemma: "Süden",
    display: "Süden",
    sourceDisplay: "der Süden",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "directions",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 128,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-directions-129",
    lemma: "Westen",
    display: "Westen",
    sourceDisplay: "der Westen",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "directions",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 129,
      rowKind: "group-member"
    }
  },
  {
    entryId: "a1-group-directions-130",
    lemma: "Osten",
    display: "Osten",
    sourceDisplay: "der Osten",
    partOfSpeech: "noun",
    article: "der",
    entryType: "word-group-member",
    wordGroupId: "directions",
    cefr: "A1",
    source: {
      sourceId: "goethe-a1-start-deutsch-1",
      page: 8,
      order: 130,
      rowKind: "group-member"
    }
  }
];

export const GOETHE_ENTRIES: readonly A1SourceEntry[] = [
  ...GOETHE_ALPHABETICAL_ENTRIES,
  ...GOETHE_WORD_GROUP_ENTRIES,
] as const;

export const PROJECT_EXTENSION_ENTRIES: readonly A1ExtensionEntry[] = [
  {
    entryId: "stuhl",
    lemma: "Stuhl",
    display: "Stuhl",
    partOfSpeech: "noun",
    article: "der",
    plural: "die Stühle",
    cefr: "A1",
    reason: "legacy-content"
  },
  {
    entryId: "fenster",
    lemma: "Fenster",
    display: "Fenster",
    partOfSpeech: "noun",
    article: "das",
    plural: "die Fenster",
    cefr: "A1",
    reason: "legacy-content"
  },
  {
    entryId: "tuer",
    lemma: "Tür",
    display: "Tür",
    partOfSpeech: "noun",
    article: "die",
    plural: "die Türen",
    cefr: "A1",
    reason: "legacy-content"
  }
];
