import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import {
  GOETHE_ENTRIES,
  PROJECT_EXTENSION_ENTRIES,
} from "../app/content/a1/goethe-entries.ts";
import { A1_LEARNING_CONTENT_ZH } from "../app/content/a1/learning-content.zh.ts";
import { A2_SOURCE_ENTRIES } from "../app/content/a2/source-entries.ts";
import { A2_LEARNING_CONTENT_ZH } from "../app/content/a2/learning-content.zh.ts";
import { B1_SOURCE_ENTRIES } from "../app/content/b1/source-entries.ts";
import { B1_LEARNING_CONTENT_ZH } from "../app/content/b1/learning-content.zh.ts";
import { containsGermanSurfaceForm } from "../app/content/example-quality.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_CHECKPOINT = "/tmp/gotheword-example-repairs.json";
const PARTS_OF_SPEECH = new Set([
  "noun",
  "verb",
  "adjective",
  "adverb",
  "pronoun",
  "preposition",
  "conjunction",
  "determiner",
  "numeral",
  "particle",
  "phrase",
  "other",
]);
const FORBIDDEN_GERMAN = [
  /^Heute lerne ich\b/u,
  /^Heute sprechen wir über\b/u,
  /^Das Wort .* bedeutet hier\b/u,
  /^Wir möchten heute\b/u,
  /\bsteht am Anfang des Wortes\b/u,
  /\b(?:Präfix|Suffix|Vorsilbe|Nachsilbe)\b/u,
];
const FORBIDDEN_CHINESE = [
  /^今天我学习/u,
  /^今天我们谈论/u,
  /在这里表示/u,
  /(?:前缀|后缀)/u,
];
const CURATED_REVIEW_OVERRIDES = {
  "a1-alpha-0001": {
    partOfSpeech: "preposition",
    senseZh: "从……起",
    targetForm: "ab",
    de: "Ich arbeite ab Montag.",
    zh: "我从星期一开始上班。",
  },
  "a1-alpha-0019": {
    partOfSpeech: "verb",
    senseZh: "开始",
    targetForm: "fängt|an",
    de: "Der Kurs fängt um neun Uhr an.",
    zh: "课程九点开始。",
  },
  "a1-alpha-0021": {
    partOfSpeech: "verb",
    senseZh: "点击",
    targetForm: "Klicken|an",
    de: "Klicken Sie bitte das Bild an.",
    zh: "请点击图片。",
  },
  "a1-alpha-0049": {
    partOfSpeech: "preposition",
    senseZh: "在……上",
    targetForm: "auf",
    de: "Die Tasche liegt auf dem Stuhl.",
    zh: "包放在椅子上。",
  },
  "a1-alpha-0105": {
    partOfSpeech: "adjective",
    senseZh: "最好的",
    targetForm: "bester",
    de: "Paul ist mein bester Freund.",
    zh: "保罗是我最好的朋友。",
  },
  "a1-alpha-0110": {
    partOfSpeech: "noun",
    senseZh: "啤酒",
    targetForm: "Bier",
    de: "Ich trinke ein Bier.",
    zh: "我喝一杯啤酒。",
  },
  "a1-alpha-0115": {
    partOfSpeech: "adverb",
    senseZh: "一点儿",
    targetForm: "bisschen",
    de: "Ich bin ein bisschen müde.",
    zh: "我有点儿累。",
  },
  "a1-alpha-0178": {
    partOfSpeech: "adjective",
    senseZh: "匆忙的",
    targetForm: "eilig",
    de: "Ich habe es heute eilig.",
    zh: "我今天赶时间。",
  },
  "a1-alpha-0264": {
    partOfSpeech: "noun",
    senseZh: "钱",
    targetForm: "Geld",
    de: "Ich habe genug Geld für die Fahrkarte.",
    zh: "我的钱够买车票。",
  },
  "a1-alpha-0266": {
    partOfSpeech: "noun",
    senseZh: "行李",
    targetForm: "Gepäck",
    de: "Das Gepäck steht neben dem Ausgang.",
    zh: "行李放在出口旁边。",
  },
  "a1-alpha-0332": {
    partOfSpeech: "noun",
    senseZh: "饥饿",
    targetForm: "Hunger",
    de: "Ich habe Hunger.",
    zh: "我饿了。",
  },
  "a1-alpha-0338": {
    partOfSpeech: "adjective",
    senseZh: "国际的",
    targetForm: "internationales",
    de: "Die Schule organisiert ein internationales Fest.",
    zh: "学校组织了一场国际文化节。",
  },
  "a1-alpha-0339": {
    partOfSpeech: "noun",
    senseZh: "互联网",
    targetForm: "Internet",
    de: "Ich nutze jeden Tag das Internet.",
    zh: "我每天都使用互联网。",
  },
  "a1-alpha-0333": {
    partOfSpeech: "pronoun",
    senseZh: "我",
    targetForm: "Ich",
    de: "Ich komme heute etwas später.",
    zh: "我今天会晚一点儿来。",
  },
  "a1-alpha-0404": {
    partOfSpeech: "adjective",
    senseZh: "上一个的",
    targetForm: "Letzte",
    de: "Letzte Woche war ich krank.",
    zh: "我上周生病了。",
  },
  "a1-alpha-0407": {
    partOfSpeech: "adjective",
    senseZh: "亲爱的",
    targetForm: "Liebe",
    de: "Liebe Anna, wie geht es dir?",
    zh: "亲爱的安娜，你好吗？",
  },
  "a1-alpha-0410": {
    partOfSpeech: "other",
    senseZh: "最喜欢的",
    targetForm: "Lieblingsbuch",
    de: "Mein Lieblingsbuch liegt auf dem Tisch.",
    zh: "我最喜欢的书放在桌上。",
  },
  "a1-alpha-0431": {
    partOfSpeech: "noun",
    senseZh: "牛奶",
    targetForm: "Milch",
    de: "Ich trinke morgens Milch.",
    zh: "我早上喝牛奶。",
  },
  "a1-alpha-0441": {
    partOfSpeech: "adjective",
    senseZh: "可行的",
    targetForm: "möglich",
    de: "Ein Termin am Montag ist möglich.",
    zh: "可以约在星期一。",
  },
  "a1-alpha-0449": {
    partOfSpeech: "determiner",
    senseZh: "下一个",
    targetForm: "nächste",
    de: "Das ist das nächste Haus.",
    zh: "这是下一栋房子。",
  },
  "a1-alpha-0467": {
    partOfSpeech: "preposition",
    senseZh: "没有；不带",
    targetForm: "ohne",
    de: "Ich esse das Brot ohne Butter.",
    zh: "我吃面包不抹黄油。",
  },
  "a1-alpha-0476": {
    partOfSpeech: "noun",
    senseZh: "伴侣",
    targetForm: "Partnerin",
    de: "Meine Partnerin studiert Medizin.",
    zh: "我的伴侣在学医。",
  },
  "a1-alpha-0526": {
    partOfSpeech: "adjective",
    senseZh: "关闭的",
    targetForm: "geschlossen",
    de: "Der Laden ist am Sonntag geschlossen.",
    zh: "商店星期日不营业。",
  },
  "a1-alpha-0649": {
    partOfSpeech: "adjective",
    senseZh: "遥远的",
    targetForm: "weit",
    de: "Der Bahnhof ist weit entfernt.",
    zh: "火车站很远。",
  },
  "a1-alpha-0651": {
    partOfSpeech: "pronoun",
    senseZh: "哪个",
    targetForm: "Welcher",
    de: "Welcher Stift ist rot?",
    zh: "哪支笔是红色的？",
  },
};
const CURATED_A1_TARGETS = {
  tisch: ["Tisch", "Tisch", "Tisch"],
  stuhl: ["Stuhl", "Stuhl", "Stuhl"],
  fenster: ["Fenster", "Fenster", "Fenster"],
  tuer: ["Tür", "Tür", "Tür"],
  kueche: ["Küche", "Küche", "Küche"],
  brot: ["Brot", "Brot", "Brot"],
  apfel: ["Apfel", "Apfel", "Äpfel"],
  wasser: ["Wasser", "Wasser", "Wasser"],
  kaffee: ["Kaffee", "Kaffee", "Kaffee"],
  familie: ["Familie", "Familie", "Familie"],
  freund: ["Freund", "Freund", "Freunde"],
  schule: ["Schule", "Schule", "Schule"],
  buch: ["Buch", "Buch", "Buch"],
  stadt: ["Stadt", "Stadt", "Stadt"],
  bahnhof: ["Bahnhof", "Bahnhof", "Bahnhof"],
  lernen: ["lerne", "lernen", "lernt"],
  arbeiten: ["arbeite", "arbeitet", "arbeiten"],
  wohnen: ["wohne", "wohnst", "wohnen"],
  essen: ["essen", "isst", "essen"],
  trinken: ["trinke", "Trinkst", "trinken"],
  gehen: ["gehe", "gehen", "Gehst"],
  fahren: ["fahre", "fährt", "fahren"],
  sprechen: ["Sprechen", "sprechen", "sprich"],
  verstehen: ["verstehe", "Verstehst", "versteht"],
};

function option(name, fallback) {
  const prefix = `--${name}=`;
  const match = process.argv.find((argument) => argument.startsWith(prefix));
  return match ? match.slice(prefix.length) : fallback;
}

const phase = option("phase", "draft");
const selectedLevel = option("level", "all");
const batchSize = Number(option("batch-size", "24"));
const maxItems = Number(option("max-items", "0"));
const checkpointPath = option("checkpoint", DEFAULT_CHECKPOINT);
const endpoint = option(
  "endpoint",
  process.env.OLLAMA_ENDPOINT ?? "http://127.0.0.1:11434/api/chat",
);
const model = option(
  "model",
  process.env.OLLAMA_MODEL ?? "gpt-oss:120b-cloud",
);
const forcedEntryIds = new Set(
  option("force-entry-ids", "")
    .split(",")
    .map((entryId) => entryId.trim())
    .filter(Boolean),
);

if (!["draft", "review", "apply", "invalidate-reviewed"].includes(phase)) {
  throw new Error(`Unknown phase: ${phase}`);
}
if (!["all", "A1", "A2", "B1"].includes(selectedLevel)) {
  throw new Error(`Unknown level: ${selectedLevel}`);
}
if (!Number.isInteger(batchSize) || batchSize < 1 || batchSize > 100) {
  throw new Error(`Invalid batch size: ${batchSize}`);
}
if (!Number.isInteger(maxItems) || maxItems < 0) {
  throw new Error(`Invalid max items: ${maxItems}`);
}

const a1Source = [...GOETHE_ENTRIES, ...PROJECT_EXTENSION_ENTRIES];
const sourceByLevel = {
  A1: new Map(a1Source.map((entry) => [entry.entryId, entry])),
  A2: new Map(A2_SOURCE_ENTRIES.map((entry) => [entry.entryId, entry])),
  B1: new Map(B1_SOURCE_ENTRIES.map((entry) => [entry.entryId, entry])),
};
const learningByLevel = {
  A1: new Map(A1_LEARNING_CONTENT_ZH.map((entry) => [entry.entryId, entry])),
  A2: new Map(A2_LEARNING_CONTENT_ZH.map((entry) => [entry.entryId, entry])),
  B1: new Map(B1_LEARNING_CONTENT_ZH.map((entry) => [entry.entryId, entry])),
};

function isPlaceholderExample(example) {
  return (
    FORBIDDEN_GERMAN.some((pattern) => pattern.test(example.de)) ||
    FORBIDDEN_CHINESE.some((pattern) => pattern.test(example.zh))
  );
}

function entriesToRepair(level) {
  const source = sourceByLevel[level];
  return [...learningByLevel[level].values()]
    .filter(
      (learning) =>
        level !== "A1" ||
        learning.examples.some(isPlaceholderExample) ||
        !Object.hasOwn(CURATED_A1_TARGETS, learning.entryId),
    )
    .map((learning) => {
      const entry = source.get(learning.entryId);
      if (!entry) {
        throw new Error(`${level}:${learning.entryId} has no source entry`);
      }
      const homonyms = [...source.values()]
        .filter(
          (candidate) =>
            candidate.entryId !== entry.entryId &&
            candidate.display.toLocaleLowerCase("de-DE") ===
              entry.display.toLocaleLowerCase("de-DE"),
        )
        .map((candidate) => ({
          entryId: candidate.entryId,
          sourceDisplay: candidate.sourceDisplay,
          article: candidate.article,
        }));
      return {
        entryId: entry.entryId,
        level,
        lemma: entry.lemma,
        display: entry.display,
        sourceDisplay: entry.sourceDisplay ?? entry.display,
        currentPartOfSpeech: entry.partOfSpeech,
        article: entry.article,
        plural: entry.plural,
        forms: entry.forms,
        currentSenseZh: learning.senses[0]?.zh ?? "",
        topicIds: learning.topicIds,
        homonyms,
      };
    });
}

const requestedLevels =
  selectedLevel === "all" ? ["A1", "A2", "B1"] : [selectedLevel];
const requestedItems = requestedLevels.flatMap(entriesToRepair);
const requestedById = new Map(
  requestedItems.map((item) => [item.entryId, item]),
);
for (const entryId of forcedEntryIds) {
  if (!requestedById.has(entryId)) {
    throw new Error(`${entryId}: forced entry is outside ${selectedLevel}`);
  }
}

async function loadCheckpoint() {
  try {
    const parsed = JSON.parse(await fs.readFile(checkpointPath, "utf8"));
    return {
      version: 1,
      draft: parsed.draft ?? {},
      reviewed: parsed.reviewed ?? {},
    };
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return { version: 1, draft: {}, reviewed: {} };
  }
}

async function saveCheckpoint(checkpoint) {
  const temporaryPath = `${checkpointPath}.next`;
  await fs.writeFile(
    temporaryPath,
    `${JSON.stringify(checkpoint, null, 2)}\n`,
    "utf8",
  );
  await fs.rename(temporaryPath, checkpointPath);
}

function normalize(value) {
  return value.normalize("NFC").trim();
}

function validateCandidate(candidate, expectedItem) {
  const issues = [];
  const stringFields = ["entryId", "partOfSpeech", "senseZh", "targetForm", "de", "zh"];
  for (const field of stringFields) {
    if (typeof candidate?.[field] !== "string" || !normalize(candidate[field])) {
      issues.push(`${field} is empty`);
    }
  }
  if (issues.length) return issues;

  if (candidate.entryId !== expectedItem.entryId) {
    issues.push(`entryId must be ${expectedItem.entryId}`);
  }
  if (!PARTS_OF_SPEECH.has(candidate.partOfSpeech)) {
    issues.push(`invalid partOfSpeech ${candidate.partOfSpeech}`);
  }
  const targetParts = normalize(candidate.targetForm)
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
  if (
    !targetParts.length ||
    targetParts.length > 2 ||
    targetParts.some(
      (part) => !containsGermanSurfaceForm(normalize(candidate.de), part),
    )
  ) {
    issues.push(`targetForm ${candidate.targetForm} is not present in de`);
  }
  if (/[=()/…]/u.test(candidate.targetForm)) {
    issues.push("targetForm must select a real surface form, not source notation");
  }
  if (FORBIDDEN_GERMAN.some((pattern) => pattern.test(normalize(candidate.de)))) {
    issues.push("German example uses a forbidden placeholder frame");
  }
  if (FORBIDDEN_CHINESE.some((pattern) => pattern.test(normalize(candidate.zh)))) {
    issues.push("Chinese example uses a forbidden placeholder frame");
  }
  if (/[\u3400-\u9fff]/u.test(candidate.de)) {
    issues.push("German example contains Chinese characters");
  }
  if (!/[\u3400-\u9fff]/u.test(candidate.zh)) {
    issues.push("Chinese translation has no Chinese characters");
  }
  if (!/[.!?]$/u.test(normalize(candidate.de))) {
    issues.push("German example must end with sentence punctuation");
  }
  if (!/[。！？]$/u.test(normalize(candidate.zh))) {
    issues.push("Chinese translation must end with sentence punctuation");
  }
  const germanWords = normalize(candidate.de).split(/\s+/u).length;
  if (germanWords < 2 || germanWords > 18) {
    issues.push(`German example has ${germanWords} words; expected 2..18`);
  }
  if (/[„“"]/.test(candidate.de)) {
    issues.push("German example must use the item in context, not in quotation marks");
  }
  if (candidate.de.includes("=")) {
    issues.push("German example must be a usage context, not an equation");
  }
  if (
    normalize(candidate.senseZh).length > 28 ||
    /(.{2,4})\1/u.test(normalize(candidate.senseZh))
  ) {
    issues.push("senseZh looks duplicated or too long");
  }
  return issues;
}

function extractEntries(content) {
  const cleaned = content
    .trim()
    .replace(/^```(?:json)?\s*/u, "")
    .replace(/\s*```$/u, "");
  const parsed = JSON.parse(cleaned);
  if (!Array.isArray(parsed.entries)) {
    throw new Error("Response does not contain an entries array");
  }
  return parsed.entries;
}

async function callModel(prompt) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        signal: AbortSignal.timeout(120_000),
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: prompt }],
          stream: false,
          think: false,
          format: "json",
          options: { temperature: attempt === 1 ? 0.1 : 0 },
        }),
      });
      const payload = await response.json();
      if (!response.ok || payload.error) {
        throw new Error(payload.error ?? `HTTP ${response.status}`);
      }
      return extractEntries(payload.message?.content ?? "");
    } catch (error) {
      lastError = error;
      console.error(`model attempt ${attempt} failed: ${error.message}`);
      if (
        /usage limit|upgrade for higher limits|unknown model|unauthorized/iu.test(
          error.message,
        )
      ) {
        throw error;
      }
    }
  }
  throw lastError;
}

function writerPrompt(items) {
  return `You are a senior German DaF lexicographer and native Simplified Chinese translator.
Repair every supplied vocabulary item for a Chinese-speaking CEFR learner.

Return one JSON object only:
{"entries":[{"entryId":"...","partOfSpeech":"...","senseZh":"...","targetForm":"...","de":"...","zh":"..."}]}

For every item:
1. Correct partOfSpeech when the supplied value is wrong. Allowed values: noun, verb, adjective, adverb, pronoun, preposition, conjunction, determiner, numeral, particle, phrase, other.
2. Correct senseZh into one concise, natural dictionary gloss for this exact entry. Never translate through ambiguous English words. Do not concatenate unrelated senses or repeat words.
3. Write exactly one short, natural, self-contained German example at the requested CEFR level and a faithful, natural Simplified Chinese translation of the complete sentence.
4. targetForm records only the exact visible surface form from the vocabulary item in de:
   - Inflected verb: lemma "bestellen", sentence "Ich bestelle eine Suppe." -> "bestelle", never "bestellen".
   - Separated verb: lemma "abfahren", sentence "Der Zug fährt ab." -> "fährt|ab".
   - Inflection stem ending in "-": source "all-", sentence "Alle Kinder spielen." -> "Alle". Use the real inflected word, never discuss the stem as a prefix.
   - Alternative source spellings: choose only the form actually used; never join alternatives with "|".
   Every recorded piece must occur verbatim in de.

Hard requirements:
- Demonstrate the intended meaning in an everyday situation. Do not discuss learning, vocabulary, spelling, or definitions.
- Never use these frames: "Heute lerne ich ...", "Heute sprechen wir über ...", "Das Wort ... bedeutet ...", or "Wir möchten heute <bare item>".
- Use correct article, case, weak-noun declension, conjugation, separable/reflexive placement, word order, and valency.
- For nouns, make gender or the intended singular/plural form visible whenever natural.
- For verbs and phrases, supply required objects, prepositions, and reflexive pronouns.
- Distinguish homonyms by sourceDisplay, article, and context. Do not give homonyms the same example or sense.
- Chinese must translate every meaningful part of the German sentence. Do not add people, places, or actions absent from German.
- Use idiomatic Chinese collocations and classifiers; never translate German word by word when natural Chinese differs. In exam contexts, prefer terms such as "题目、答题卡、广播通知" over generic machine translations.
- Make the situation specific enough to reveal the target meaning. Avoid tautologies and empty frames such as "X is an example", "X is good", or "There is X" when they do not teach usage.
- Follow standard German punctuation, including no comma directly before "usw." in a simple list.
- Prefer 4-12 German words, with a maximum of 18. Keep the grammar at ${items[0].level}.
- Every German and Chinese value must be a complete sentence with final punctuation.
- Return every entryId exactly once, in input order, with no extra entries.

Items:
${JSON.stringify(items)}`;
}

function reviewerPrompt(items) {
  return `You are the final quality reviewer for bilingual German vocabulary teaching content.
Audit every candidate independently. Silently fix every grammatical, lexical, semantic, register, level, or translation problem you find.

Return one JSON object only:
{"entries":[{"entryId":"...","partOfSpeech":"...","senseZh":"...","targetForm":"...","de":"...","zh":"..."}]}

Acceptance rules:
- The German sentence is natural standard German and demonstrates the exact supplied source entry in an everyday context.
- Articles, case, weak-noun endings, verb forms, separable/reflexive placement, word order, and valency are correct.
- Every targetForm piece occurs verbatim in de and is genuinely the supplied vocabulary item, not an accidental substring. A separated verb uses exact surface pieces joined by "|", for example "fährt|ab".
- The concise Chinese sense matches the German source entry directly, without English-ambiguity errors, repeated words, or unrelated sense lists.
- The Chinese sentence is a faithful, natural translation of the whole German sentence: nothing meaningful omitted or invented.
- Chinese collocations and classifiers are idiomatic, not literal German-shaped Chinese. Exam vocabulary uses the correct exam sense.
- Homonyms are distinguished using sourceDisplay/article/homonyms.
- A source stem ending in "-" must be used as a real inflected word in context, for example "all-" -> "Alle"; never describe it as a prefix.
- The situation is specific enough to reveal the meaning; reject tautologies and empty generic frames.
- German punctuation follows standard usage, including abbreviations and lists with "usw.".
- The example is appropriate for the stated CEFR level, normally 4-12 German words.
- Never discuss learning or definitions and never use the old placeholder frames.
- Sentences end with appropriate German and Chinese punctuation.
- Return every entryId exactly once in input order, no comments and no extra entries.

Items and candidates:
${JSON.stringify(items)}`;
}

async function generatePhase(checkpoint, targetKey, promptBuilder) {
  const missing = requestedItems
    .filter(
      (item) =>
        forcedEntryIds.has(item.entryId) ||
        !checkpoint[targetKey][item.entryId],
    )
    .slice(0, maxItems || undefined);
  console.log(
    `${phase}: ${missing.length} missing of ${requestedItems.length} requested entries`,
  );
  for (let offset = 0; offset < missing.length; offset += batchSize) {
    const batch = missing.slice(offset, offset + batchSize);
    let promptItems = batch;
    if (targetKey === "reviewed") {
      promptItems = batch.map((item) => ({
        ...item,
        candidate: checkpoint.draft[item.entryId],
      }));
    }
    let candidates;
    let correctionContext = "";
    for (let attempt = 1; attempt <= 4; attempt += 1) {
      candidates = await callModel(
        `${promptBuilder(promptItems)}${correctionContext}`,
      );
      candidates = candidates.map((candidate) => {
        const expectedItem = requestedById.get(candidate.entryId);
        if (
          expectedItem &&
          typeof candidate.partOfSpeech === "string" &&
          !PARTS_OF_SPEECH.has(candidate.partOfSpeech)
        ) {
          console.warn(
            `${candidate.entryId}: replacing unsupported partOfSpeech ${candidate.partOfSpeech} with ${expectedItem.currentPartOfSpeech}`,
          );
          return {
            ...candidate,
            partOfSpeech: expectedItem.currentPartOfSpeech,
          };
        }
        return candidate;
      });
      const byId = new Map(
        candidates.map((candidate) => [candidate.entryId, candidate]),
      );
      const issues = [];
      const batchIds = new Set(batch.map((item) => item.entryId));
      const existingExampleOwners =
        targetKey === "reviewed"
          ? new Map(
              [
                ...A1_LEARNING_CONTENT_ZH
                  .filter((entry) =>
                    Object.hasOwn(CURATED_A1_TARGETS, entry.entryId),
                  )
                  .flatMap((entry) =>
                    entry.examples.map((example) => ({
                      entryId: entry.entryId,
                      de: example.de,
                    })),
                  ),
                ...Object.values(checkpoint.reviewed).filter(
                  (candidate) => !batchIds.has(candidate.entryId),
                ),
              ].map((candidate) => [
                  normalize(candidate.de).toLocaleLowerCase("de-DE"),
                  candidate.entryId,
                ]),
            )
          : new Map();
      const batchExampleOwners = new Map();
      for (const item of batch) {
        const candidate = byId.get(item.entryId);
        if (!candidate) {
          issues.push(`${item.entryId}: missing from response`);
          continue;
        }
        for (const issue of validateCandidate(candidate, item)) {
          issues.push(`${item.entryId}: ${issue}`);
        }
        if (targetKey === "reviewed") {
          const exampleKey = normalize(candidate.de).toLocaleLowerCase("de-DE");
          const existingOwner = existingExampleOwners.get(exampleKey);
          const batchOwner = batchExampleOwners.get(exampleKey);
          if (existingOwner) {
            issues.push(
              `${item.entryId}: German example duplicates reviewed entry ${existingOwner}`,
            );
          } else if (batchOwner) {
            issues.push(
              `${item.entryId}: German example duplicates batch entry ${batchOwner}`,
            );
          } else {
            batchExampleOwners.set(exampleKey, item.entryId);
          }
        }
      }
      if (
        candidates.length !== batch.length ||
        byId.size !== batch.length
      ) {
        issues.push(
          `expected ${batch.length} unique entries, got ${byId.size}`,
        );
      }
      if (!issues.length) break;
      console.error(`batch validation attempt ${attempt}:\n${issues.join("\n")}`);
      correctionContext = `

Your previous JSON response was invalid:
${JSON.stringify({ entries: candidates })}

Fix every issue below while preserving valid content. In particular, targetForm must copy the exact inflected surface text from de; use "|" only between the two visible pieces of a genuinely separated verb.
Every German example must also be unique across vocabulary entries.
${issues.join("\n")}
Return the complete corrected batch as JSON.`;
      candidates = undefined;
    }
    if (!candidates) {
      throw new Error(`Unable to generate a valid batch at offset ${offset}`);
    }
    for (const candidate of candidates) {
      checkpoint[targetKey][candidate.entryId] = {
        ...candidate,
        senseZh: normalize(candidate.senseZh),
        targetForm: normalize(candidate.targetForm),
        de: normalize(candidate.de),
        zh: normalize(candidate.zh),
      };
    }
    await saveCheckpoint(checkpoint);
    console.log(
      `${phase}: ${Math.min(offset + batch.length, missing.length)}/${missing.length}`,
    );
  }
}

function matchingBracket(text, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = openIndex; index < text.length; index += 1) {
    const character = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }
    if (character === "[") depth += 1;
    if (character === "]") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  throw new Error(`Unmatched bracket at ${openIndex}`);
}

function entryBlockRange(text, entryId, jsonKeys) {
  const marker = jsonKeys
    ? `"entryId": ${JSON.stringify(entryId)}`
    : `entryId: ${JSON.stringify(entryId)}`;
  const markerIndex = text.indexOf(marker);
  if (markerIndex < 0) throw new Error(`Cannot find ${entryId}`);
  const start = text.lastIndexOf("{", markerIndex);
  if (start < 0) throw new Error(`Cannot find object start for ${entryId}`);

  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const character = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }
    if (character === "{") depth += 1;
    if (character === "}") {
      depth -= 1;
      if (depth === 0) return { start, end: index + 1 };
    }
  }
  throw new Error(`Cannot find object end for ${entryId}`);
}

function replaceLearningEntry(text, candidate, jsonKeys) {
  const range = entryBlockRange(text, candidate.entryId, jsonKeys);
  let block = text.slice(range.start, range.end);
  const sensesKey = jsonKeys ? '"senses"' : "senses";
  const examplesKey = jsonKeys ? '"examples"' : "examples";
  const sensesIndex = block.indexOf(`${sensesKey}:`);
  const examplesIndex = block.indexOf(`${examplesKey}:`);
  if (sensesIndex < 0 || examplesIndex < 0) {
    throw new Error(`${candidate.entryId}: missing senses/examples`);
  }
  const beforeExamples = block.slice(0, examplesIndex);
  const zhPattern = jsonKeys
    ? /"zh":\s*"(?:\\.|[^"\\])*"/u
    : /zh:\s*"(?:\\.|[^"\\])*"/u;
  const senseRegion = beforeExamples.slice(sensesIndex);
  const zhMatch = senseRegion.match(zhPattern);
  if (!zhMatch) throw new Error(`${candidate.entryId}: missing sense zh`);
  const zhStart = sensesIndex + zhMatch.index;
  const zhReplacement = jsonKeys
    ? `"zh": ${JSON.stringify(candidate.senseZh)}`
    : `zh: ${JSON.stringify(candidate.senseZh)}`;
  block =
    block.slice(0, zhStart) +
    zhReplacement +
    block.slice(zhStart + zhMatch[0].length);

  const updatedExamplesIndex = block.indexOf(`${examplesKey}:`);
  const openIndex = block.indexOf("[", updatedExamplesIndex);
  const closeIndex = matchingBracket(block, openIndex);
  const replacement = jsonKeys
    ? `[
      {
        "de": ${JSON.stringify(candidate.de)},
        "zh": ${JSON.stringify(candidate.zh)},
        "target": ${JSON.stringify(candidate.targetForm)}
      }
    ]`
    : `[
      {
        de: ${JSON.stringify(candidate.de)},
        zh: ${JSON.stringify(candidate.zh)},
        target: ${JSON.stringify(candidate.targetForm)}
      }
    ]`;
  block =
    block.slice(0, openIndex) +
    replacement +
    block.slice(closeIndex + 1);
  return text.slice(0, range.start) + block + text.slice(range.end);
}

function annotateCuratedA1Targets(text) {
  for (const [entryId, targets] of Object.entries(CURATED_A1_TARGETS)) {
    const range = entryBlockRange(text, entryId, false);
    let block = text.slice(range.start, range.end);
    const examplesIndex = block.indexOf("examples:");
    const openIndex = block.indexOf("[", examplesIndex);
    const closeIndex = matchingBracket(block, openIndex);
    const learning = learningByLevel.A1.get(entryId);
    if (!learning || learning.examples.length !== targets.length) {
      throw new Error(`${entryId}: curated target count drift`);
    }
    const replacement = `[
${learning.examples
  .map(
    (example, index) => `      {
        de: ${JSON.stringify(example.de)},
        zh: ${JSON.stringify(example.zh)},
        target: ${JSON.stringify(targets[index])}
      }`,
  )
  .join(",\n")}
    ]`;
    block =
      block.slice(0, openIndex) +
      replacement +
      block.slice(closeIndex + 1);
    text = text.slice(0, range.start) + block + text.slice(range.end);
  }
  return text;
}

function replaceSourcePartOfSpeech(text, candidate, jsonKeys) {
  const range = entryBlockRange(text, candidate.entryId, jsonKeys);
  let block = text.slice(range.start, range.end);
  const pattern = jsonKeys
    ? /"partOfSpeech":\s*"(?:\\.|[^"\\])*"/u
    : /partOfSpeech:\s*"(?:\\.|[^"\\])*"/u;
  const replacement = jsonKeys
    ? `"partOfSpeech": ${JSON.stringify(candidate.partOfSpeech)}`
    : `partOfSpeech: ${JSON.stringify(candidate.partOfSpeech)}`;
  if (!pattern.test(block)) {
    throw new Error(`${candidate.entryId}: missing partOfSpeech`);
  }
  block = block.replace(pattern, replacement);
  return text.slice(0, range.start) + block + text.slice(range.end);
}

async function applyRepairs(checkpoint) {
  const candidates = requestedItems.map((item) => {
    const generatedCandidate = checkpoint.reviewed[item.entryId];
    const candidate = CURATED_REVIEW_OVERRIDES[item.entryId]
      ? {
          entryId: item.entryId,
          ...CURATED_REVIEW_OVERRIDES[item.entryId],
        }
      : generatedCandidate;
    if (!candidate) throw new Error(`${item.entryId}: missing reviewed repair`);
    const issues = validateCandidate(candidate, item);
    if (issues.length) {
      throw new Error(`${item.entryId}: ${issues.join(", ")}`);
    }
    return candidate;
  });
  const duplicateExamples = [
    ...Map.groupBy(
      candidates,
      (item) => normalize(item.de).toLocaleLowerCase("de-DE"),
    ),
  ]
    .filter(([, values]) => values.length > 1)
    .map(([example, values]) => `${example}: ${values.map((value) => value.entryId).join(", ")}`);
  if (duplicateExamples.length) {
    throw new Error(`Duplicate reviewed examples:\n${duplicateExamples.join("\n")}`);
  }

  const files = {
    A1: {
      learning: path.join(ROOT, "app/content/a1/learning-content.zh.ts"),
      source: path.join(ROOT, "app/content/a1/goethe-entries.ts"),
      jsonKeys: false,
    },
    A2: {
      learning: path.join(ROOT, "app/content/a2/learning-content.zh.ts"),
      source: path.join(ROOT, "app/content/a2/source-entries.ts"),
      jsonKeys: true,
    },
    B1: {
      learning: path.join(ROOT, "app/content/b1/learning-content.zh.ts"),
      source: path.join(ROOT, "app/content/b1/source-entries.ts"),
      jsonKeys: true,
    },
  };

  for (const level of requestedLevels) {
    const config = files[level];
    let learningText = await fs.readFile(config.learning, "utf8");
    let sourceText = await fs.readFile(config.source, "utf8");
    if (level === "A1") {
      learningText = annotateCuratedA1Targets(learningText);
    }
    for (const candidate of candidates.filter(
      (value) => requestedById.get(value.entryId)?.level === level,
    )) {
      learningText = replaceLearningEntry(
        learningText,
        candidate,
        config.jsonKeys,
      );
      sourceText = replaceSourcePartOfSpeech(
        sourceText,
        candidate,
        config.jsonKeys,
      );
    }
    await fs.writeFile(config.learning, learningText, "utf8");
    await fs.writeFile(config.source, sourceText, "utf8");
    console.log(`applied ${level} repairs`);
  }
}

const checkpoint = await loadCheckpoint();
if (phase === "draft") {
  await generatePhase(checkpoint, "draft", writerPrompt);
} else if (phase === "review") {
  const missingDrafts = requestedItems.filter(
    (item) => !checkpoint.draft[item.entryId],
  );
  if (missingDrafts.length) {
    throw new Error(
      `Cannot review: ${missingDrafts.length} draft entries are missing`,
    );
  }
  await generatePhase(checkpoint, "reviewed", reviewerPrompt);
} else if (phase === "apply") {
  await applyRepairs(checkpoint);
} else {
  if (!forcedEntryIds.size) {
    throw new Error("invalidate-reviewed requires --force-entry-ids");
  }
  for (const entryId of forcedEntryIds) {
    delete checkpoint.reviewed[entryId];
  }
  await saveCheckpoint(checkpoint);
  console.log(`invalidated ${forcedEntryIds.size} reviewed entries`);
}
