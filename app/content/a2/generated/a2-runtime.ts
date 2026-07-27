import type { A2RuntimeManifest, Word } from "../types.ts";

export const A2_MANIFEST = {
  "schemaVersion": 1,
  "contentVersion": "2026.07.28-a2.1",
  "source": {
    "sourceId": "goethe-zertifikat-a2",
    "url": "https://www.goethe.de/resources/files/pdf329/goethe-zertifikat_a2_wortliste.pdf",
    "retrievedAt": "2026-07-28",
    "sha256": "76cebc5fa7356fb1fb0f0bf964ad204e59a3e79753e7bad8cf3e4f0b38c352b7",
    "pages": 32,
    "bytes": 411290,
    "approximateLexicalUnits": 1300
  },
  "rights": {
    "sourceList": "pending",
    "examples": "editorial-only"
  },
  "editorial": {
    "chineseSenses": "machine-draft",
    "examples": "project-authored-template"
  }
} as const satisfies A2RuntimeManifest;

export const A2_WORDS = [
  {
    "id": "a2-0074",
    "german": "Bruder",
    "translation": "兄弟",
    "kind": "noun",
    "article": "der",
    "plural": "¨-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "表弟",
      "父母",
      "孙子"
    ],
    "distractorIds": [
      "a2-0075",
      "a2-0077",
      "a2-0078"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bruder“.",
        "zh": "今天我学习“兄弟”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0075",
    "german": "Cousin",
    "translation": "表弟",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "父母",
      "孙子"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0077",
      "a2-0078"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Cousin“.",
        "zh": "今天我学习“表弟”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0076",
    "german": "Cousine",
    "translation": "表弟",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "父母",
      "孙子"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0077",
      "a2-0078"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Cousine“.",
        "zh": "今天我学习“表弟”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0077",
    "german": "Eltern",
    "translation": "父母",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "孙子"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0078"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Eltern“.",
        "zh": "今天我学习“父母”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0078",
    "german": "Enkel",
    "translation": "孙子",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Enkel“.",
        "zh": "今天我学习“孙子”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0079",
    "german": "Enkelin",
    "translation": "孙女",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Enkelin“.",
        "zh": "今天我学习“孙女”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0080",
    "german": "Geschwister",
    "translation": "兄弟姐妹",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geschwister“.",
        "zh": "今天我学习“兄弟姐妹”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0081",
    "german": "Großeltern",
    "translation": "祖父母",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Großeltern“.",
        "zh": "今天我学习“祖父母”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0082",
    "german": "Großmutter",
    "translation": "祖母",
    "kind": "noun",
    "article": "die",
    "plural": "¨-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Großmutter“.",
        "zh": "今天我学习“祖母”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0083",
    "german": "Oma",
    "translation": "奶奶",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Oma“.",
        "zh": "今天我学习“奶奶”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0084",
    "german": "Großvater",
    "translation": "祖父",
    "kind": "noun",
    "article": "der",
    "plural": "¨-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Großvater“.",
        "zh": "今天我学习“祖父”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0085",
    "german": "Opa",
    "translation": "爷爷",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Opa“.",
        "zh": "今天我学习“爷爷”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0086",
    "german": "Kind",
    "translation": "孩子",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kind“.",
        "zh": "今天我学习“孩子”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0087",
    "german": "Mutter",
    "translation": "妈妈",
    "kind": "noun",
    "article": "die",
    "plural": "¨-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mutter“.",
        "zh": "今天我学习“妈妈”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0088",
    "german": "Mama",
    "translation": "妈妈",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mama“.",
        "zh": "今天我学习“妈妈”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0089",
    "german": "Onkel",
    "translation": "叔叔",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Onkel“.",
        "zh": "今天我学习“叔叔”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0090",
    "german": "Schwester",
    "translation": "姐姐",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schwester“.",
        "zh": "今天我学习“姐姐”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0091",
    "german": "Sohn",
    "translation": "儿子",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sohn“.",
        "zh": "今天我学习“儿子”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0092",
    "german": "Tante",
    "translation": "阿姨",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tante“.",
        "zh": "今天我学习“阿姨”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0093",
    "german": "Tochter",
    "translation": "女儿",
    "kind": "noun",
    "article": "die",
    "plural": "¨-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tochter“.",
        "zh": "今天我学习“女儿”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0094",
    "german": "Vater",
    "translation": "父亲",
    "kind": "noun",
    "article": "der",
    "plural": "¨-",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Vater“.",
        "zh": "今天我学习“父亲”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0095",
    "german": "Papa",
    "translation": "爸爸",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Papa“.",
        "zh": "今天我学习“爸爸”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0096",
    "german": "Verwandte",
    "translation": "亲戚",
    "kind": "noun",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Verwandte“.",
        "zh": "今天我学习“亲戚”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0336",
    "german": "Bein",
    "translation": "腿",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bein“.",
        "zh": "今天我学习“腿”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0459",
    "german": "Familie",
    "translation": "家庭",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Familie“.",
        "zh": "今天我学习“家庭”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0460",
    "german": "Familien-",
    "translation": "家庭",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Familien-“.",
        "zh": "今天我学习“家庭”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0512",
    "german": "Freund",
    "translation": "朋友",
    "kind": "noun",
    "article": "der",
    "plural": "-e,",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Freund“.",
        "zh": "今天我学习“朋友”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0513",
    "german": "Freundin",
    "translation": "女朋友",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Freundin“.",
        "zh": "今天我学习“女朋友”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0615",
    "german": "Kranken-",
    "translation": "医疗",
    "kind": "noun",
    "article": "das",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kranken-“.",
        "zh": "今天我学习“医疗”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0616",
    "german": "Kranken-",
    "translation": "医疗",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kranken-“.",
        "zh": "今天我学习“医疗”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0617",
    "german": "Krankheit",
    "translation": "疾病",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Krankheit“.",
        "zh": "今天我学习“疾病”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0652",
    "german": "Kopf",
    "translation": "头",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "兄弟",
      "表弟",
      "父母"
    ],
    "distractorIds": [
      "a2-0074",
      "a2-0075",
      "a2-0077"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kopf“.",
        "zh": "今天我学习“头”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0097",
    "german": "ledig",
    "translation": "单身",
    "kind": "adjective",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "已婚",
      "分开",
      "离婚的"
    ],
    "distractorIds": [
      "a2-0098",
      "a2-0099",
      "a2-0100"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ledig“.",
        "zh": "今天我学习“单身”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0098",
    "german": "verheiratet",
    "translation": "已婚",
    "kind": "adjective",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "单身",
      "分开",
      "离婚的"
    ],
    "distractorIds": [
      "a2-0097",
      "a2-0099",
      "a2-0100"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verheiratet“.",
        "zh": "今天我学习“已婚”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0099",
    "german": "getrennt",
    "translation": "分开",
    "kind": "adjective",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "单身",
      "已婚",
      "离婚的"
    ],
    "distractorIds": [
      "a2-0097",
      "a2-0098",
      "a2-0100"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „getrennt“.",
        "zh": "今天我学习“分开”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0100",
    "german": "geschieden",
    "translation": "离婚的",
    "kind": "adjective",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "单身",
      "已婚",
      "分开"
    ],
    "distractorIds": [
      "a2-0097",
      "a2-0098",
      "a2-0099"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „geschieden“.",
        "zh": "今天我学习“离婚的”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0514",
    "german": "freundlich",
    "translation": "友好的",
    "kind": "other",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "生病了",
      "温暖",
      "直播"
    ],
    "distractorIds": [
      "a2-0614",
      "a2-0961",
      "a2-0633"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „freundlich“.",
        "zh": "今天我学习“友好的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0614",
    "german": "krank",
    "translation": "生病了",
    "kind": "other",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "友好的",
      "温暖",
      "直播"
    ],
    "distractorIds": [
      "a2-0514",
      "a2-0961",
      "a2-0633"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „krank“.",
        "zh": "今天我学习“生病了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0961",
    "german": "warm",
    "translation": "温暖",
    "kind": "other",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "友好的",
      "生病了",
      "直播"
    ],
    "distractorIds": [
      "a2-0514",
      "a2-0614",
      "a2-0633"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „warm“.",
        "zh": "今天我学习“温暖”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0400",
    "german": "Doppelzimmer",
    "translation": "双人间",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "窗户",
      "家庭",
      "百货商店"
    ],
    "distractorIds": [
      "a2-0469",
      "a2-0574",
      "a2-0592"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Doppelzimmer“.",
        "zh": "今天我学习“双人间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0469",
    "german": "Fenster",
    "translation": "窗户",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "家庭",
      "百货商店"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0574",
      "a2-0592"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fenster“.",
        "zh": "今天我学习“窗户”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0574",
    "german": "Haushalt",
    "translation": "家庭",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "百货商店"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0592"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Haushalt“.",
        "zh": "今天我学习“家庭”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0592",
    "german": "Kaufhaus",
    "translation": "百货商店",
    "kind": "noun",
    "article": "das",
    "plural": "-¨er",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kaufhaus“.",
        "zh": "今天我学习“百货商店”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0620",
    "german": "Küche",
    "translation": "厨房",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Küche“.",
        "zh": "今天我学习“厨房”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0703",
    "german": "Miete",
    "translation": "租金",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Miete“.",
        "zh": "今天我学习“租金”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0711",
    "german": "Möbel",
    "translation": "家具",
    "kind": "noun",
    "article": "die",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Möbel“.",
        "zh": "今天我学习“家具”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0760",
    "german": "Rathaus",
    "translation": "市政厅",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rathaus“.",
        "zh": "今天我学习“市政厅”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0932",
    "german": "Tür",
    "translation": "门",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tür“.",
        "zh": "今天我学习“门”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0969",
    "german": "Vermieter",
    "translation": "房东",
    "kind": "noun",
    "article": "der",
    "plural": "- /",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Vermieter“.",
        "zh": "今天我学习“房东”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0970",
    "german": "Vermieterin",
    "translation": "女房东",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Vermieterin“.",
        "zh": "今天我学习“女房东”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0997",
    "german": "Wohnung",
    "translation": "公寓",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wohnung“.",
        "zh": "今天我学习“公寓”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0998",
    "german": "Wohnzimmer",
    "translation": "客厅",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wohnzimmer“.",
        "zh": "今天我学习“客厅”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1015",
    "german": "Zimmer",
    "translation": "房间",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "双人间",
      "窗户",
      "家庭"
    ],
    "distractorIds": [
      "a2-0400",
      "a2-0469",
      "a2-0574"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zimmer“.",
        "zh": "今天我学习“房间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0704",
    "german": "mieten",
    "translation": "租金",
    "kind": "verb",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "直播",
      "吃",
      "忘记了"
    ],
    "distractorIds": [
      "a2-0996",
      "a2-0483",
      "a2-0928"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „mieten“.",
        "zh": "今天我学习“租金”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0968",
    "german": "vermieten",
    "translation": "租金",
    "kind": "verb",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "直播",
      "吃",
      "忘记了"
    ],
    "distractorIds": [
      "a2-0996",
      "a2-0483",
      "a2-0928"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vermieten“.",
        "zh": "今天我学习“租金”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0996",
    "german": "wohnen",
    "translation": "直播",
    "kind": "verb",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "租金",
      "吃",
      "忘记了"
    ],
    "distractorIds": [
      "a2-0704",
      "a2-0483",
      "a2-0928"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wohnen“.",
        "zh": "今天我学习“直播”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0633",
    "german": "wohnen",
    "translation": "直播",
    "kind": "other",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "当然",
      "友好的",
      "生病了"
    ],
    "distractorIds": [
      "a2-0697",
      "a2-0514",
      "a2-0614"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wohnen“.",
        "zh": "今天我学习“直播”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0697",
    "german": "natürlich",
    "translation": "当然",
    "kind": "other",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "直播",
      "友好的",
      "生病了"
    ],
    "distractorIds": [
      "a2-0633",
      "a2-0514",
      "a2-0614"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „natürlich“.",
        "zh": "今天我学习“当然”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0367",
    "german": "Brot",
    "translation": "面包",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "食品",
      "肉",
      "咖啡"
    ],
    "distractorIds": [
      "a2-0484",
      "a2-0503",
      "a2-0587"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Brot“.",
        "zh": "今天我学习“面包”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0484",
    "german": "Essen",
    "translation": "食品",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "肉",
      "咖啡"
    ],
    "distractorIds": [
      "a2-0367",
      "a2-0503",
      "a2-0587"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Essen“.",
        "zh": "今天我学习“食品”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0503",
    "german": "Fleisch",
    "translation": "肉",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "食品",
      "咖啡"
    ],
    "distractorIds": [
      "a2-0367",
      "a2-0484",
      "a2-0587"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fleisch“.",
        "zh": "今天我学习“肉”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0587",
    "german": "Kaffee",
    "translation": "咖啡",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "食品",
      "肉"
    ],
    "distractorIds": [
      "a2-0367",
      "a2-0484",
      "a2-0503"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kaffee“.",
        "zh": "今天我学习“咖啡”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0660",
    "german": "Essen",
    "translation": "食品",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "肉",
      "咖啡"
    ],
    "distractorIds": [
      "a2-0367",
      "a2-0503",
      "a2-0587"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Essen“.",
        "zh": "今天我学习“食品”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0709",
    "german": "Mittagessen",
    "translation": "午餐",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "食品",
      "肉"
    ],
    "distractorIds": [
      "a2-0367",
      "a2-0484",
      "a2-0503"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mittagessen“.",
        "zh": "今天我学习“午餐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0811",
    "german": "Restaurant",
    "translation": "餐厅",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "食品",
      "肉"
    ],
    "distractorIds": [
      "a2-0367",
      "a2-0484",
      "a2-0503"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Restaurant“.",
        "zh": "今天我学习“餐厅”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0483",
    "german": "essen",
    "translation": "吃",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "忘记了",
      "喝",
      "租金"
    ],
    "distractorIds": [
      "a2-0928",
      "a2-0930",
      "a2-0704"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „essen“.",
        "zh": "今天我学习“吃”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0928",
    "german": "vergessen",
    "translation": "忘记了",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "吃",
      "喝",
      "租金"
    ],
    "distractorIds": [
      "a2-0483",
      "a2-0930",
      "a2-0704"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vergessen“.",
        "zh": "今天我学习“忘记了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0930",
    "german": "trinken",
    "translation": "喝",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "吃",
      "忘记了",
      "租金"
    ],
    "distractorIds": [
      "a2-0483",
      "a2-0928",
      "a2-0704"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „trinken“.",
        "zh": "今天我学习“喝”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0112",
    "german": "Norden",
    "translation": "北",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "南",
      "东",
      "西"
    ],
    "distractorIds": [
      "a2-0113",
      "a2-0114",
      "a2-0115"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Norden“.",
        "zh": "今天我学习“北”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0113",
    "german": "Süden",
    "translation": "南",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "东",
      "西"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0114",
      "a2-0115"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Süden“.",
        "zh": "今天我学习“南”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0114",
    "german": "Osten",
    "translation": "东",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "西"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0115"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Osten“.",
        "zh": "今天我学习“东”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0115",
    "german": "Westen",
    "translation": "西",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Westen“.",
        "zh": "今天我学习“西”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0116",
    "german": "Deutschland",
    "translation": "德国",
    "kind": "noun",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Deutschland“.",
        "zh": "今天我学习“德国”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0117",
    "german": "Deutsche",
    "translation": "德国人",
    "kind": "noun",
    "plural": "-n",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Deutsche“.",
        "zh": "今天我学习“德国人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0119",
    "german": "Österreich",
    "translation": "奥地利",
    "kind": "noun",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Österreich“.",
        "zh": "今天我学习“奥地利”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0120",
    "german": "Österreicher",
    "translation": "奥地利人",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Österreicher“.",
        "zh": "今天我学习“奥地利人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0121",
    "german": "Österreicherin",
    "translation": "奥地利人",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Österreicherin“.",
        "zh": "今天我学习“奥地利人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0123",
    "german": "Schweiz",
    "translation": "瑞士",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schweiz“.",
        "zh": "今天我学习“瑞士”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0124",
    "german": "Schweizer",
    "translation": "瑞士人",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schweizer“.",
        "zh": "今天我学习“瑞士人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0125",
    "german": "Schweizerin",
    "translation": "瑞士人",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schweizerin“.",
        "zh": "今天我学习“瑞士人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0127",
    "german": "Luxemburg",
    "translation": "卢森堡",
    "kind": "noun",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Luxemburg“.",
        "zh": "今天我学习“卢森堡”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0128",
    "german": "Luxemburger",
    "translation": "卢森堡",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Luxemburger“.",
        "zh": "今天我学习“卢森堡”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0129",
    "german": "Luxemburgerin",
    "translation": "卢森堡",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Luxemburgerin“.",
        "zh": "今天我学习“卢森堡”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0131",
    "german": "Europa",
    "translation": "欧洲",
    "kind": "noun",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Europa“.",
        "zh": "今天我学习“欧洲”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0132",
    "german": "Europäer",
    "translation": "欧洲人",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Europäer“.",
        "zh": "今天我学习“欧洲人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0133",
    "german": "Europäerin",
    "translation": "欧洲女人",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Europäerin“.",
        "zh": "今天我学习“欧洲女人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0302",
    "german": "Ausflug",
    "translation": "游览",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ausflug“.",
        "zh": "今天我学习“游览”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0329",
    "german": "Aufzug",
    "translation": "电梯",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Aufzug“.",
        "zh": "今天我学习“电梯”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0350",
    "german": "Bahn",
    "translation": "火车",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bahn“.",
        "zh": "今天我学习“火车”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0351",
    "german": "Bahnhof",
    "translation": "火车站",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bahnhof“.",
        "zh": "今天我学习“火车站”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0374",
    "german": "Bus",
    "translation": "巴士",
    "kind": "noun",
    "article": "der",
    "plural": "-se",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bus“.",
        "zh": "今天我学习“巴士”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0475",
    "german": "Erfahrung",
    "translation": "经验",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Erfahrung“.",
        "zh": "今天我学习“经验”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0487",
    "german": "Abfahrt",
    "translation": "出发",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Abfahrt“.",
        "zh": "今天我学习“出发”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0488",
    "german": "Fahrplan",
    "translation": "时刻表",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fahrplan“.",
        "zh": "今天我学习“时刻表”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0505",
    "german": "Flug",
    "translation": "飞行",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Flug“.",
        "zh": "今天我学习“飞行”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0506",
    "german": "Flughafen",
    "translation": "机场",
    "kind": "noun",
    "article": "der",
    "plural": "¨",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Flughafen“.",
        "zh": "今天我学习“机场”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0801",
    "german": "Reise",
    "translation": "旅行",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Reise“.",
        "zh": "今天我学习“旅行”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0802",
    "german": "Reisebüro",
    "translation": "旅行社",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Reisebüro“.",
        "zh": "今天我学习“旅行社”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0803",
    "german": "Reiseführer",
    "translation": "旅游指南",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Reiseführer“.",
        "zh": "今天我学习“旅游指南”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0921",
    "german": "Urlaub",
    "translation": "假期",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Urlaub“.",
        "zh": "今天我学习“假期”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0944",
    "german": "Umzug",
    "translation": "搬家",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Umzug“.",
        "zh": "今天我学习“搬家”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0964",
    "german": "Verkehr",
    "translation": "交通",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Verkehr“.",
        "zh": "今天我学习“交通”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1020",
    "german": "Zug",
    "translation": "火车",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "北",
      "南",
      "东"
    ],
    "distractorIds": [
      "a2-0112",
      "a2-0113",
      "a2-0114"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zug“.",
        "zh": "今天我学习“火车”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0804",
    "german": "reisen",
    "translation": "旅行",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "租金",
      "直播",
      "吃"
    ],
    "distractorIds": [
      "a2-0704",
      "a2-0996",
      "a2-0483"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „reisen“.",
        "zh": "今天我学习“旅行”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0972",
    "german": "verreisen",
    "translation": "旅行",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "租金",
      "直播",
      "吃"
    ],
    "distractorIds": [
      "a2-0704",
      "a2-0996",
      "a2-0483"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verreisen“.",
        "zh": "今天我学习“旅行”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0118",
    "german": "deutsch",
    "translation": "德语",
    "kind": "adjective",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "奥地利人",
      "瑞士人",
      "卢森堡语"
    ],
    "distractorIds": [
      "a2-0122",
      "a2-0126",
      "a2-0130"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „deutsch“.",
        "zh": "今天我学习“德语”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0122",
    "german": "österreichisch",
    "translation": "奥地利人",
    "kind": "adjective",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "德语",
      "瑞士人",
      "卢森堡语"
    ],
    "distractorIds": [
      "a2-0118",
      "a2-0126",
      "a2-0130"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „österreichisch“.",
        "zh": "今天我学习“奥地利人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0126",
    "german": "schweizerisch",
    "translation": "瑞士人",
    "kind": "adjective",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "德语",
      "奥地利人",
      "卢森堡语"
    ],
    "distractorIds": [
      "a2-0118",
      "a2-0122",
      "a2-0130"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schweizerisch“.",
        "zh": "今天我学习“瑞士人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0130",
    "german": "luxemburgisch",
    "translation": "卢森堡语",
    "kind": "adjective",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "德语",
      "奥地利人",
      "瑞士人"
    ],
    "distractorIds": [
      "a2-0118",
      "a2-0122",
      "a2-0126"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „luxemburgisch“.",
        "zh": "今天我学习“卢森堡语”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0134",
    "german": "europäisch",
    "translation": "欧洲",
    "kind": "adjective",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "德语",
      "奥地利人",
      "瑞士人"
    ],
    "distractorIds": [
      "a2-0118",
      "a2-0122",
      "a2-0126"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „europäisch“.",
        "zh": "今天我学习“欧洲”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0135",
    "german": "Euro",
    "translation": "欧元",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "美分",
      "弗兰科尼亚",
      "说唱"
    ],
    "distractorIds": [
      "a2-0136",
      "a2-0137",
      "a2-0138"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Euro“.",
        "zh": "今天我学习“欧元”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0136",
    "german": "Cent",
    "translation": "美分",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "弗兰科尼亚",
      "说唱"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0137",
      "a2-0138"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Cent“.",
        "zh": "今天我学习“美分”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0137",
    "german": "Franken",
    "translation": "弗兰科尼亚",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "说唱"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0138"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Franken“.",
        "zh": "今天我学习“弗兰科尼亚”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0138",
    "german": "Rappen",
    "translation": "说唱",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rappen“.",
        "zh": "今天我学习“说唱”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0139",
    "german": "Meter",
    "translation": "米",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Meter“.",
        "zh": "今天我学习“米”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0140",
    "german": "Zentimeter",
    "translation": "厘米",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zentimeter“.",
        "zh": "今天我学习“厘米”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0141",
    "german": "Kilometer",
    "translation": "公里",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kilometer“.",
        "zh": "今天我学习“公里”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0142",
    "german": "Prozent",
    "translation": "百分比",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Prozent“.",
        "zh": "今天我学习“百分比”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0143",
    "german": "Liter",
    "translation": "升",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Liter“.",
        "zh": "今天我学习“升”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0144",
    "german": "Gramm",
    "translation": "克",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gramm“.",
        "zh": "今天我学习“克”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0145",
    "german": "Kilogramm",
    "translation": "公斤",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kilogramm“.",
        "zh": "今天我学习“公斤”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0146",
    "german": "Grad",
    "translation": "学位",
    "kind": "noun",
    "article": "der",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Grad“.",
        "zh": "今天我学习“学位”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0240",
    "german": "Million",
    "translation": "百万",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Million“.",
        "zh": "今天我学习“百万”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0275",
    "german": "Angebot",
    "translation": "优惠",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Angebot“.",
        "zh": "今天我学习“优惠”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0422",
    "german": "Einkaufs-",
    "translation": "购物",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Einkaufs-“.",
        "zh": "今天我学习“购物”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0536",
    "german": "Geld",
    "translation": "钱",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geld“.",
        "zh": "今天我学习“钱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0537",
    "german": "Geldbörse",
    "translation": "钱包",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geldbörse“.",
        "zh": "今天我学习“钱包”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0542",
    "german": "Geschäft",
    "translation": "商业",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geschäft“.",
        "zh": "今天我学习“商业”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0631",
    "german": "Laden",
    "translation": "加载中",
    "kind": "noun",
    "article": "der",
    "plural": "¨-",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Laden“.",
        "zh": "今天我学习“加载中”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0764",
    "german": "Rechnung",
    "translation": "发票",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rechnung“.",
        "zh": "今天我学习“发票”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0779",
    "german": "Preis",
    "translation": "价格",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Preis“.",
        "zh": "今天我学习“价格”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0908",
    "german": "Taschengeld",
    "translation": "零用钱",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Taschengeld“.",
        "zh": "今天我学习“零用钱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1031",
    "german": "Zahl",
    "translation": "数量",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "欧元",
      "美分",
      "弗兰科尼亚"
    ],
    "distractorIds": [
      "a2-0135",
      "a2-0136",
      "a2-0137"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zahl“.",
        "zh": "今天我学习“数量”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0384",
    "german": "bezahlen",
    "translation": "付钱",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "邀请",
      "购物",
      "下载"
    ],
    "distractorIds": [
      "a2-0423",
      "a2-0457",
      "a2-0551"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bezahlen“.",
        "zh": "今天我学习“付钱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0423",
    "german": "einladen",
    "translation": "邀请",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "付钱",
      "购物",
      "下载"
    ],
    "distractorIds": [
      "a2-0384",
      "a2-0457",
      "a2-0551"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einladen“.",
        "zh": "今天我学习“邀请”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0457",
    "german": "einkaufen",
    "translation": "购物",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "付钱",
      "邀请",
      "下载"
    ],
    "distractorIds": [
      "a2-0384",
      "a2-0423",
      "a2-0551"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einkaufen“.",
        "zh": "今天我学习“购物”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0551",
    "german": "herunterladen",
    "translation": "下载",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "付钱",
      "邀请",
      "购物"
    ],
    "distractorIds": [
      "a2-0384",
      "a2-0423",
      "a2-0457"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „herunterladen“.",
        "zh": "今天我学习“下载”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0963",
    "german": "verkaufen",
    "translation": "卖",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "付钱",
      "邀请",
      "购物"
    ],
    "distractorIds": [
      "a2-0384",
      "a2-0423",
      "a2-0457"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verkaufen“.",
        "zh": "今天我学习“卖”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0245",
    "german": "erstens",
    "translation": "首先",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "其次",
      "第三",
      "第四"
    ],
    "distractorIds": [
      "a2-0246",
      "a2-0247",
      "a2-0248"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erstens“.",
        "zh": "今天我学习“首先”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0246",
    "german": "zweitens",
    "translation": "其次",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "第三",
      "第四"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0247",
      "a2-0248"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zweitens“.",
        "zh": "今天我学习“其次”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0247",
    "german": "drittens",
    "translation": "第三",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "其次",
      "第四"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0246",
      "a2-0248"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „drittens“.",
        "zh": "今天我学习“第三”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0248",
    "german": "viertens",
    "translation": "第四",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "其次",
      "第三"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0246",
      "a2-0247"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „viertens“.",
        "zh": "今天我学习“第四”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0249",
    "german": "einmal",
    "translation": "一次",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "其次",
      "第三"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0246",
      "a2-0247"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einmal“.",
        "zh": "今天我学习“一次”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0250",
    "german": "zweimal",
    "translation": "两次",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "其次",
      "第三"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0246",
      "a2-0247"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zweimal“.",
        "zh": "今天我学习“两次”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0251",
    "german": "dreimal",
    "translation": "三次",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "其次",
      "第三"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0246",
      "a2-0247"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dreimal“.",
        "zh": "今天我学习“三次”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0252",
    "german": "viermal",
    "translation": "四次",
    "kind": "adverb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "首先",
      "其次",
      "第三"
    ],
    "distractorIds": [
      "a2-0245",
      "a2-0246",
      "a2-0247"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „viermal“.",
        "zh": "今天我学习“四次”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0207",
    "german": "eins",
    "translation": "一",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "两个",
      "三",
      "四"
    ],
    "distractorIds": [
      "a2-0208",
      "a2-0209",
      "a2-0210"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „eins“.",
        "zh": "今天我学习“一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0208",
    "german": "zwei",
    "translation": "两个",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "三",
      "四"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0209",
      "a2-0210"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zwei“.",
        "zh": "今天我学习“两个”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0209",
    "german": "drei",
    "translation": "三",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "四"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0210"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „drei“.",
        "zh": "今天我学习“三”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0210",
    "german": "vier",
    "translation": "四",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vier“.",
        "zh": "今天我学习“四”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0211",
    "german": "fünf",
    "translation": "五",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fünf“.",
        "zh": "今天我学习“五”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0212",
    "german": "sechs",
    "translation": "六",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sechs“.",
        "zh": "今天我学习“六”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0213",
    "german": "sieben",
    "translation": "七",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sieben“.",
        "zh": "今天我学习“七”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0214",
    "german": "acht",
    "translation": "八",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „acht“.",
        "zh": "今天我学习“八”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0215",
    "german": "neun",
    "translation": "九",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „neun“.",
        "zh": "今天我学习“九”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0216",
    "german": "zehn",
    "translation": "十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zehn“.",
        "zh": "今天我学习“十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0217",
    "german": "elf",
    "translation": "十一",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „elf“.",
        "zh": "今天我学习“十一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0218",
    "german": "zwölf",
    "translation": "十二",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zwölf“.",
        "zh": "今天我学习“十二”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0219",
    "german": "dreizehn",
    "translation": "十三",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dreizehn“.",
        "zh": "今天我学习“十三”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0220",
    "german": "vierzehn",
    "translation": "十四",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vierzehn“.",
        "zh": "今天我学习“十四”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0221",
    "german": "fünfzehn",
    "translation": "十五",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fünfzehn“.",
        "zh": "今天我学习“十五”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0222",
    "german": "sechzehn",
    "translation": "十六",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sechzehn“.",
        "zh": "今天我学习“十六”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0223",
    "german": "siebzehn",
    "translation": "十七",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „siebzehn“.",
        "zh": "今天我学习“十七”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0224",
    "german": "achtzehn",
    "translation": "十八",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „achtzehn“.",
        "zh": "今天我学习“十八”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0225",
    "german": "neunzehn",
    "translation": "十九",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „neunzehn“.",
        "zh": "今天我学习“十九”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0226",
    "german": "zwanzig",
    "translation": "二十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zwanzig“.",
        "zh": "今天我学习“二十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0227",
    "german": "einundzwanzig",
    "translation": "二十一",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einundzwanzig“.",
        "zh": "今天我学习“二十一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0228",
    "german": "dreißig",
    "translation": "三十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dreißig“.",
        "zh": "今天我学习“三十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0229",
    "german": "vierzig",
    "translation": "四十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vierzig“.",
        "zh": "今天我学习“四十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0230",
    "german": "fünfzig",
    "translation": "五十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fünfzig“.",
        "zh": "今天我学习“五十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0231",
    "german": "sechzig",
    "translation": "六十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sechzig“.",
        "zh": "今天我学习“六十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0232",
    "german": "siebzig",
    "translation": "七十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „siebzig“.",
        "zh": "今天我学习“七十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0233",
    "german": "achtzig",
    "translation": "八十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „achtzig“.",
        "zh": "今天我学习“八十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0234",
    "german": "neunzig",
    "translation": "九十",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „neunzig“.",
        "zh": "今天我学习“九十”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0235",
    "german": "hundert",
    "translation": "一百",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hundert“.",
        "zh": "今天我学习“一百”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0236",
    "german": "hunderteins",
    "translation": "一百零一",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hunderteins“.",
        "zh": "今天我学习“一百零一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0237",
    "german": "zweihundert",
    "translation": "两百",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zweihundert“.",
        "zh": "今天我学习“两百”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0238",
    "german": "tausend",
    "translation": "千",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „tausend“.",
        "zh": "今天我学习“千”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0239",
    "german": "zweitausendeins",
    "translation": "两千零一",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zweitausendeins“.",
        "zh": "今天我学习“两千零一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0241",
    "german": "erste",
    "translation": "第一",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erste“.",
        "zh": "今天我学习“第一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0242",
    "german": "zweite",
    "translation": "第二",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zweite“.",
        "zh": "今天我学习“第二”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0243",
    "german": "dritte",
    "translation": "第三",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dritte“.",
        "zh": "今天我学习“第三”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0244",
    "german": "vierte",
    "translation": "第四",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一",
      "两个",
      "三"
    ],
    "distractorIds": [
      "a2-0207",
      "a2-0208",
      "a2-0209"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vierte“.",
        "zh": "今天我学习“第四”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0780",
    "german": "preiswert",
    "translation": "便宜的",
    "kind": "other",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "友好的",
      "生病了",
      "温暖"
    ],
    "distractorIds": [
      "a2-0514",
      "a2-0614",
      "a2-0961"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „preiswert“.",
        "zh": "今天我学习“便宜的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0558",
    "german": "Hobby",
    "translation": "爱好",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "音乐",
      "派对",
      "体育运动"
    ],
    "distractorIds": [
      "a2-0686",
      "a2-0732",
      "a2-0851"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hobby“.",
        "zh": "今天我学习“爱好”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0686",
    "german": "Musik",
    "translation": "音乐",
    "kind": "noun",
    "article": "die",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "爱好",
      "派对",
      "体育运动"
    ],
    "distractorIds": [
      "a2-0558",
      "a2-0732",
      "a2-0851"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Musik“.",
        "zh": "今天我学习“音乐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0732",
    "german": "Party",
    "translation": "派对",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "爱好",
      "音乐",
      "体育运动"
    ],
    "distractorIds": [
      "a2-0558",
      "a2-0686",
      "a2-0851"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Party“.",
        "zh": "今天我学习“派对”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0851",
    "german": "Sport",
    "translation": "体育运动",
    "kind": "noun",
    "article": "der",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "爱好",
      "音乐",
      "派对"
    ],
    "distractorIds": [
      "a2-0558",
      "a2-0686",
      "a2-0732"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sport“.",
        "zh": "今天我学习“体育运动”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0883",
    "german": "Spiel",
    "translation": "游戏",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "爱好",
      "音乐",
      "派对"
    ],
    "distractorIds": [
      "a2-0558",
      "a2-0686",
      "a2-0732"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Spiel“.",
        "zh": "今天我学习“游戏”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0850",
    "german": "spielen",
    "translation": "玩",
    "kind": "verb",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "租金",
      "直播",
      "吃"
    ],
    "distractorIds": [
      "a2-0704",
      "a2-0996",
      "a2-0483"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „spielen“.",
        "zh": "今天我学习“玩”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0004",
    "german": "Lkw",
    "translation": "卡车",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "电脑",
      "短信",
      "厕所"
    ],
    "distractorIds": [
      "a2-0005",
      "a2-0006",
      "a2-0008"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Lkw“.",
        "zh": "今天我学习“卡车”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0005",
    "german": "PC",
    "translation": "电脑",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "短信",
      "厕所"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0006",
      "a2-0008"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „PC“.",
        "zh": "今天我学习“电脑”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0006",
    "german": "SMS",
    "translation": "短信",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "厕所"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0008"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „SMS“.",
        "zh": "今天我学习“短信”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0008",
    "german": "WC",
    "translation": "厕所",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „WC“.",
        "zh": "今天我学习“厕所”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0010",
    "german": "Antwortbogen",
    "translation": "答题纸",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Antwortbogen“.",
        "zh": "今天我学习“答题纸”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0011",
    "german": "Aufgabe",
    "translation": "任务",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Aufgabe“.",
        "zh": "今天我学习“任务”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0012",
    "german": "Beispiel",
    "translation": "示例",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Beispiel“.",
        "zh": "今天我学习“示例”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0013",
    "german": "Durchsage",
    "translation": "公告",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Durchsage“.",
        "zh": "今天我学习“公告”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0014",
    "german": "Lösung",
    "translation": "解决方案",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Lösung“.",
        "zh": "今天我学习“解决方案”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0016",
    "german": "Prüfer",
    "translation": "考官",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Prüfer“.",
        "zh": "今天我学习“考官”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0017",
    "german": "Prüferin",
    "translation": "考官",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Prüferin“.",
        "zh": "今天我学习“考官”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0018",
    "german": "Prüfung",
    "translation": "考试",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Prüfung“.",
        "zh": "今天我学习“考试”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0019",
    "german": "Punkt",
    "translation": "时期",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Punkt“.",
        "zh": "今天我学习“时期”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0020",
    "german": "Teil",
    "translation": "部分",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Teil“.",
        "zh": "今天我学习“部分”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0021",
    "german": "Test",
    "translation": "测试",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Test“.",
        "zh": "今天我学习“测试”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0022",
    "german": "Text",
    "translation": "文字",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Text“.",
        "zh": "今天我学习“文字”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0023",
    "german": "Wörterbuch",
    "translation": "词典",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wörterbuch“.",
        "zh": "今天我学习“词典”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0147",
    "german": "Abitur",
    "translation": "高中文凭",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Abitur“.",
        "zh": "今天我学习“高中文凭”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0148",
    "german": "Direktor",
    "translation": "导演",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Direktor“.",
        "zh": "今天我学习“导演”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0149",
    "german": "Hausaufgabe",
    "translation": "家庭作业",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hausaufgabe“.",
        "zh": "今天我学习“家庭作业”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0150",
    "german": "Klasse",
    "translation": "类",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Klasse“.",
        "zh": "今天我学习“类”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0151",
    "german": "Klassenfahrt",
    "translation": "修学旅行",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Klassenfahrt“.",
        "zh": "今天我学习“修学旅行”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0152",
    "german": "Sekretariat",
    "translation": "秘书处",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sekretariat“.",
        "zh": "今天我学习“秘书处”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0153",
    "german": "Stundenplan",
    "translation": "时刻表",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stundenplan“.",
        "zh": "今天我学习“时刻表”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0154",
    "german": "Biologie",
    "translation": "生物学",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Biologie“.",
        "zh": "今天我学习“生物学”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0155",
    "german": "Chemie",
    "translation": "化学",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Chemie“.",
        "zh": "今天我学习“化学”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0156",
    "german": "Deutsch",
    "translation": "德语",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Deutsch“.",
        "zh": "今天我学习“德语”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0157",
    "german": "Englisch",
    "translation": "英语",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Englisch“.",
        "zh": "今天我学习“英语”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0158",
    "german": "Französisch",
    "translation": "法语",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Französisch“.",
        "zh": "今天我学习“法语”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0159",
    "german": "Geografie",
    "translation": "地理",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geografie“.",
        "zh": "今天我学习“地理”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0160",
    "german": "Geschichte",
    "translation": "故事",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geschichte“.",
        "zh": "今天我学习“故事”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0161",
    "german": "Kunst",
    "translation": "艺术",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kunst“.",
        "zh": "今天我学习“艺术”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0162",
    "german": "Latein",
    "translation": "拉丁语",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Latein“.",
        "zh": "今天我学习“拉丁语”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0163",
    "german": "Mathematik",
    "translation": "数学",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mathematik“.",
        "zh": "今天我学习“数学”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0164",
    "german": "Musik",
    "translation": "音乐",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Musik“.",
        "zh": "今天我学习“音乐”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0165",
    "german": "Physik",
    "translation": "物理学",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Physik“.",
        "zh": "今天我学习“物理学”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0166",
    "german": "Religion",
    "translation": "宗教",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Religion“.",
        "zh": "今天我学习“宗教”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0167",
    "german": "Sozialkunde",
    "translation": "社会研究",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sozialkunde“.",
        "zh": "今天我学习“社会研究”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0168",
    "german": "Sport",
    "translation": "体育运动",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sport“.",
        "zh": "今天我学习“体育运动”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0169",
    "german": "Karneval",
    "translation": "嘉年华",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Karneval“.",
        "zh": "今天我学习“嘉年华”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0170",
    "german": "Ostern",
    "translation": "复活节",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ostern“.",
        "zh": "今天我学习“复活节”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0171",
    "german": "Weihnachten",
    "translation": "圣诞节",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Weihnachten“.",
        "zh": "今天我学习“圣诞节”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0172",
    "german": "Neujahr",
    "translation": "新年",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Neujahr“.",
        "zh": "今天我学习“新年”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0173",
    "german": "Silvester",
    "translation": "除夕夜",
    "kind": "noun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Silvester“.",
        "zh": "今天我学习“除夕夜”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0174",
    "german": "Frühling",
    "translation": "春天",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Frühling“.",
        "zh": "今天我学习“春天”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0175",
    "german": "Frühjahr",
    "translation": "春天",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Frühjahr“.",
        "zh": "今天我学习“春天”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0176",
    "german": "Sommer",
    "translation": "夏季",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sommer“.",
        "zh": "今天我学习“夏季”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0177",
    "german": "Herbst",
    "translation": "秋天",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Herbst“.",
        "zh": "今天我学习“秋天”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0178",
    "german": "Winter",
    "translation": "冬天",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Winter“.",
        "zh": "今天我学习“冬天”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0179",
    "german": "Januar",
    "translation": "一月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Januar“.",
        "zh": "今天我学习“一月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0180",
    "german": "Februar",
    "translation": "二月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Februar“.",
        "zh": "今天我学习“二月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0181",
    "german": "März",
    "translation": "三月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „März“.",
        "zh": "今天我学习“三月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0182",
    "german": "April",
    "translation": "四月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „April“.",
        "zh": "今天我学习“四月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0183",
    "german": "Mai",
    "translation": "五月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mai“.",
        "zh": "今天我学习“五月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0184",
    "german": "Juni",
    "translation": "六月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Juni“.",
        "zh": "今天我学习“六月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0185",
    "german": "Juli",
    "translation": "七月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Juli“.",
        "zh": "今天我学习“七月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0186",
    "german": "August",
    "translation": "八月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „August“.",
        "zh": "今天我学习“八月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0187",
    "german": "September",
    "translation": "九月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „September“.",
        "zh": "今天我学习“九月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0188",
    "german": "Oktober",
    "translation": "十月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Oktober“.",
        "zh": "今天我学习“十月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0189",
    "german": "November",
    "translation": "十一月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „November“.",
        "zh": "今天我学习“十一月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0190",
    "german": "Dezember",
    "translation": "十二月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Dezember“.",
        "zh": "今天我学习“十二月”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0191",
    "german": "Tag",
    "translation": "日",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tag“.",
        "zh": "今天我学习“日”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0192",
    "german": "Morgen",
    "translation": "明天",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Morgen“.",
        "zh": "今天我学习“明天”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0193",
    "german": "Vormittag",
    "translation": "早上",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Vormittag“.",
        "zh": "今天我学习“早上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0194",
    "german": "Mittag",
    "translation": "中午",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mittag“.",
        "zh": "今天我学习“中午”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0195",
    "german": "Nachmittag",
    "translation": "下午",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nachmittag“.",
        "zh": "今天我学习“下午”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0196",
    "german": "Abend",
    "translation": "晚上",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Abend“.",
        "zh": "今天我学习“晚上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0197",
    "german": "Nacht",
    "translation": "晚上",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nacht“.",
        "zh": "今天我学习“晚上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0198",
    "german": "Mitternacht",
    "translation": "午夜",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mitternacht“.",
        "zh": "今天我学习“午夜”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0253",
    "german": "Sekunde",
    "translation": "第二",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sekunde“.",
        "zh": "今天我学习“第二”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0254",
    "german": "Minute",
    "translation": "分钟",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Minute“.",
        "zh": "今天我学习“分钟”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0255",
    "german": "Stunde",
    "translation": "小时",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stunde“.",
        "zh": "今天我学习“小时”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0256",
    "german": "Wochenende",
    "translation": "周末",
    "kind": "noun",
    "article": "das",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wochenende“.",
        "zh": "今天我学习“周末”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0257",
    "german": "Montag",
    "translation": "星期一",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Montag“.",
        "zh": "今天我学习“星期一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0258",
    "german": "Dienstag",
    "translation": "星期二",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Dienstag“.",
        "zh": "今天我学习“星期二”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0259",
    "german": "Mittwoch",
    "translation": "星期三",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mittwoch“.",
        "zh": "今天我学习“星期三”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0260",
    "german": "Donnerstag",
    "translation": "星期四",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Donnerstag“.",
        "zh": "今天我学习“星期四”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0261",
    "german": "Freitag",
    "translation": "周五",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Freitag“.",
        "zh": "今天我学习“周五”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0262",
    "german": "Samstag",
    "translation": "星期六",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Samstag“.",
        "zh": "今天我学习“星期六”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0263",
    "german": "Sonntag",
    "translation": "周日",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sonntag“.",
        "zh": "今天我学习“周日”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0272",
    "german": "Werktag",
    "translation": "工作日",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Werktag“.",
        "zh": "今天我学习“工作日”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0273",
    "german": "Woche",
    "translation": "周",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Woche“.",
        "zh": "今天我学习“周”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0274",
    "german": "Jahr",
    "translation": "年",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Jahr“.",
        "zh": "今天我学习“年”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0279",
    "german": "Anfang",
    "translation": "开始",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Anfang“.",
        "zh": "今天我学习“开始”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0280",
    "german": "Angst",
    "translation": "恐惧",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Angst“.",
        "zh": "今天我学习“恐惧”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0284",
    "german": "Anmeldung",
    "translation": "注册",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Anmeldung“.",
        "zh": "今天我学习“注册”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0286",
    "german": "Anruf",
    "translation": "致电",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Anruf“.",
        "zh": "今天我学习“致电”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0289",
    "german": "Anzeige",
    "translation": "广告",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Anzeige“.",
        "zh": "今天我学习“广告”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0293",
    "german": "Adresse",
    "translation": "地址",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Adresse“.",
        "zh": "今天我学习“地址”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0297",
    "german": "Alter",
    "translation": "伙计",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Alter“.",
        "zh": "今天我学习“伙计”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0304",
    "german": "Ausgang",
    "translation": "退出",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ausgang“.",
        "zh": "今天我学习“退出”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0306",
    "german": "Auskunft",
    "translation": "信息",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Auskunft“.",
        "zh": "今天我学习“信息”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0307",
    "german": "Ausland",
    "translation": "国外",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ausland“.",
        "zh": "今天我学习“国外”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0314",
    "german": "Ausstellung",
    "translation": "展览",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ausstellung“.",
        "zh": "今天我学习“展览”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0315",
    "german": "Ausweis",
    "translation": "身份证",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ausweis“.",
        "zh": "今天我学习“身份证”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0316",
    "german": "Auto",
    "translation": "汽车",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Auto“.",
        "zh": "今天我学习“汽车”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0330",
    "german": "Auge",
    "translation": "眼睛",
    "kind": "noun",
    "article": "das",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Auge“.",
        "zh": "今天我学习“眼睛”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0341",
    "german": "Berg",
    "translation": "山",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Berg“.",
        "zh": "今天我学习“山”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0346",
    "german": "Baby",
    "translation": "宝贝",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Baby“.",
        "zh": "今天我学习“宝贝”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0348",
    "german": "Bäckerei",
    "translation": "面包店",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bäckerei“.",
        "zh": "今天我学习“面包店”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0352",
    "german": "Balkon",
    "translation": "阳台",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Balkon“.",
        "zh": "今天我学习“阳台”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0355",
    "german": "Bauch",
    "translation": "肚子",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bauch“.",
        "zh": "今天我学习“肚子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0357",
    "german": "Baustelle",
    "translation": "施工现场",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Baustelle“.",
        "zh": "今天我学习“施工现场”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0362",
    "german": "Bleistift",
    "translation": "铅笔",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bleistift“.",
        "zh": "今天我学习“铅笔”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0365",
    "german": "Brief",
    "translation": "信",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Brief“.",
        "zh": "今天我学习“信”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0368",
    "german": "Brötchen",
    "translation": "包子",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Brötchen“.",
        "zh": "今天我学习“包子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0369",
    "german": "Buch",
    "translation": "书",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Buch“.",
        "zh": "今天我学习“书”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0371",
    "german": "Buchstabe",
    "translation": "信",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Buchstabe“.",
        "zh": "今天我学习“信”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0379",
    "german": "Besuch",
    "translation": "参观",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Besuch“.",
        "zh": "今天我学习“参观”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0381",
    "german": "Bett",
    "translation": "床",
    "kind": "noun",
    "article": "das",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bett“.",
        "zh": "今天我学习“床”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0383",
    "german": "Wolke",
    "translation": "云",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wolke“.",
        "zh": "今天我学习“云”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0385",
    "german": "Bibliothek",
    "translation": "图书馆",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bibliothek“.",
        "zh": "今天我学习“图书馆”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0386",
    "german": "Birne",
    "translation": "梨",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Birne“.",
        "zh": "今天我学习“梨”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0389",
    "german": "Bitte",
    "translation": "请",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bitte“.",
        "zh": "今天我学习“请”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0390",
    "german": "Datum",
    "translation": "日期",
    "kind": "noun",
    "article": "das",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Datum“.",
        "zh": "今天我学习“日期”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0396",
    "german": "Ding",
    "translation": "东西",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ding“.",
        "zh": "今天我学习“东西”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0398",
    "german": "Disco",
    "translation": "迪斯科",
    "kind": "noun",
    "article": "die",
    "plural": "-s /",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Disco“.",
        "zh": "今天我学习“迪斯科”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0401",
    "german": "Dorf",
    "translation": "村庄",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Dorf“.",
        "zh": "今天我学习“村庄”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0406",
    "german": "Café",
    "translation": "咖啡厅",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Café“.",
        "zh": "今天我学习“咖啡厅”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0407",
    "german": "Cafeteria",
    "translation": "自助餐厅",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Cafeteria“.",
        "zh": "今天我学习“自助餐厅”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0411",
    "german": "Club",
    "translation": "俱乐部",
    "kind": "noun",
    "article": "der",
    "plural": "-s /",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Club“.",
        "zh": "今天我学习“俱乐部”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0412",
    "german": "Computer",
    "translation": "电脑",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "短信",
      "厕所"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0006",
      "a2-0008"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Computer“.",
        "zh": "今天我学习“电脑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0417",
    "german": "Dame",
    "translation": "女士",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Dame“.",
        "zh": "今天我学习“女士”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0419",
    "german": "Dank",
    "translation": "谢谢",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Dank“.",
        "zh": "今天我学习“谢谢”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0421",
    "german": "Datei",
    "translation": "文件",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Datei“.",
        "zh": "今天我学习“文件”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0424",
    "german": "Einladung",
    "translation": "邀请函",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Einladung“.",
        "zh": "今天我学习“邀请函”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0428",
    "german": "Eintritt",
    "translation": "入场",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Eintritt“.",
        "zh": "今天我学习“入场”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0433",
    "german": "Eis",
    "translation": "冰淇淋",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Eis“.",
        "zh": "今天我学习“冰淇淋”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0435",
    "german": "Ende",
    "translation": "结束",
    "kind": "noun",
    "article": "das",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ende“.",
        "zh": "今天我学习“结束”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0441",
    "german": "Entschuldi-",
    "translation": "抱歉-",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Entschuldi-“.",
        "zh": "今天我学习“抱歉-”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0442",
    "german": "Drucker",
    "translation": "打印机",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Drucker“.",
        "zh": "今天我学习“打印机”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0447",
    "german": "Durst",
    "translation": "口渴",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Durst“.",
        "zh": "今天我学习“口渴”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0448",
    "german": "E-Book",
    "translation": "电子书",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „E-Book“.",
        "zh": "今天我学习“电子书”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0450",
    "german": "Ecke",
    "translation": "角落",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ecke“.",
        "zh": "今天我学习“角落”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0452",
    "german": "Ehefrau",
    "translation": "妻子",
    "kind": "noun",
    "article": "die",
    "plural": "-en /",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ehefrau“.",
        "zh": "今天我学习“妻子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0453",
    "german": "Ehemann",
    "translation": "丈夫",
    "kind": "noun",
    "article": "der",
    "plural": "¨-er/",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ehemann“.",
        "zh": "今天我学习“丈夫”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0454",
    "german": "Ei",
    "translation": "鸡蛋",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ei“.",
        "zh": "今天我学习“鸡蛋”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0456",
    "german": "Eingang",
    "translation": "入口处",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Eingang“.",
        "zh": "今天我学习“入口处”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0461",
    "german": "Fan",
    "translation": "风扇",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fan“.",
        "zh": "今天我学习“风扇”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0463",
    "german": "Farbe",
    "translation": "颜色",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Farbe“.",
        "zh": "今天我学习“颜色”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0467",
    "german": "Fehler",
    "translation": "错误",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fehler“.",
        "zh": "今天我学习“错误”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0471",
    "german": "Fernseher",
    "translation": "电视",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fernseher“.",
        "zh": "今天我学习“电视”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0472",
    "german": "Fest",
    "translation": "固体",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fest“.",
        "zh": "今天我学习“固体”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0473",
    "german": "Festival",
    "translation": "节日",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Festival“.",
        "zh": "今天我学习“节日”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0478",
    "german": "Erlaubnis",
    "translation": "许可",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Erlaubnis“.",
        "zh": "今天我学习“许可”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0481",
    "german": "Erwachsene",
    "translation": "成人",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Erwachsene“.",
        "zh": "今天我学习“成人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0486",
    "german": "Fach",
    "translation": "隔间",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fach“.",
        "zh": "今天我学习“隔间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0490",
    "german": "Frühstück",
    "translation": "早餐",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Frühstück“.",
        "zh": "今天我学习“早餐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0492",
    "german": "Führerschein",
    "translation": "驾驶执照",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Führerschein“.",
        "zh": "今天我学习“驾驶执照”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0493",
    "german": "Führung",
    "translation": "领导力",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Führung“.",
        "zh": "今天我学习“领导力”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0496",
    "german": "Fuß",
    "translation": "脚",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fuß“.",
        "zh": "今天我学习“脚”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0497",
    "german": "Fußball",
    "translation": "足球",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fußball“.",
        "zh": "今天我学习“足球”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0498",
    "german": "Gabel",
    "translation": "叉子",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gabel“.",
        "zh": "今天我学习“叉子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0499",
    "german": "Garage",
    "translation": "车库",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Garage“.",
        "zh": "今天我学习“车库”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0504",
    "german": "Flohmarkt",
    "translation": "跳蚤市场",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Flohmarkt“.",
        "zh": "今天我学习“跳蚤市场”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0507",
    "german": "Fluss",
    "translation": "河",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fluss“.",
        "zh": "今天我学习“河”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0508",
    "german": "Foto",
    "translation": "照片",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Foto“.",
        "zh": "今天我学习“照片”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0509",
    "german": "Frau",
    "translation": "女士",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Frau“.",
        "zh": "今天我学习“女士”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0518",
    "german": "Gewitter",
    "translation": "雷暴",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gewitter“.",
        "zh": "今天我学习“雷暴”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0521",
    "german": "Gleis",
    "translation": "轨道",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gleis“.",
        "zh": "今天我学习“轨道”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0523",
    "german": "Glück-",
    "translation": "运气-",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Glück-“.",
        "zh": "今天我学习“运气-”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0526",
    "german": "Grippe",
    "translation": "流感",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Grippe“.",
        "zh": "今天我学习“流感”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0528",
    "german": "Größe",
    "translation": "尺寸",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Größe“.",
        "zh": "今天我学习“尺寸”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0529",
    "german": "Gruß",
    "translation": "问候",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gruß“.",
        "zh": "今天我学习“问候”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0532",
    "german": "Haar",
    "translation": "头发",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Haar“.",
        "zh": "今天我学习“头发”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0533",
    "german": "Hähnchen",
    "translation": "鸡",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hähnchen“.",
        "zh": "今天我学习“鸡”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0534",
    "german": "Gehalt",
    "translation": "薪资",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gehalt“.",
        "zh": "今天我学习“薪资”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0539",
    "german": "Gepäck",
    "translation": "行李",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gepäck“.",
        "zh": "今天我学习“行李”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0543",
    "german": "Geschirr",
    "translation": "菜肴",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Geschirr“.",
        "zh": "今天我学习“菜肴”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0544",
    "german": "Gespräch",
    "translation": "对话",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Gespräch“.",
        "zh": "今天我学习“对话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0546",
    "german": "Getränk",
    "translation": "喝",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Getränk“.",
        "zh": "今天我学习“喝”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0549",
    "german": "Herd",
    "translation": "炉子",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Herd“.",
        "zh": "今天我学习“炉子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0550",
    "german": "Herr",
    "translation": "先生",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Herr“.",
        "zh": "今天我学习“先生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0553",
    "german": "Hilfe",
    "translation": "帮助",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hilfe“.",
        "zh": "今天我学习“帮助”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0554",
    "german": "Himmel",
    "translation": "天堂",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Himmel“.",
        "zh": "今天我学习“天堂”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0559",
    "german": "Hochzeit",
    "translation": "婚礼",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hochzeit“.",
        "zh": "今天我学习“婚礼”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0561",
    "german": "Homepage",
    "translation": "主页",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Homepage“.",
        "zh": "今天我学习“主页”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0563",
    "german": "Hose",
    "translation": "裤子",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hose“.",
        "zh": "今天我学习“裤子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0564",
    "german": "Hunger",
    "translation": "饥饿",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hunger“.",
        "zh": "今天我学习“饥饿”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0566",
    "german": "Hals",
    "translation": "脖子",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hals“.",
        "zh": "今天我学习“脖子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0568",
    "german": "Haltestelle",
    "translation": "停止",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Haltestelle“.",
        "zh": "今天我学习“停止”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0570",
    "german": "Bild",
    "translation": "图片",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bild“.",
        "zh": "今天我学习“图片”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0573",
    "german": "Hauptstadt",
    "translation": "资本",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hauptstadt“.",
        "zh": "今天我学习“资本”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0575",
    "german": "Heft",
    "translation": "小册子",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Heft“.",
        "zh": "今天我学习“小册子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0576",
    "german": "Heimat",
    "translation": "祖国",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Heimat“.",
        "zh": "今天我学习“祖国”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0579",
    "german": "Heizung",
    "translation": "供暖",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Heizung“.",
        "zh": "今天我学习“供暖”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0581",
    "german": "Hemd",
    "translation": "衬衫",
    "kind": "noun",
    "article": "das",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hemd“.",
        "zh": "今天我学习“衬衫”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0586",
    "german": "Junge",
    "translation": "男孩",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Junge“.",
        "zh": "今天我学习“男孩”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0588",
    "german": "Kalender",
    "translation": "日历",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kalender“.",
        "zh": "今天我学习“日历”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0590",
    "german": "Kamera",
    "translation": "相机",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kamera“.",
        "zh": "今天我学习“相机”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0591",
    "german": "Kartoffel",
    "translation": "马铃薯",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kartoffel“.",
        "zh": "今天我学习“马铃薯”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0593",
    "german": "Keller",
    "translation": "地下室",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Keller“.",
        "zh": "今天我学习“地下室”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0596",
    "german": "Kenntnisse",
    "translation": "知识",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kenntnisse“.",
        "zh": "今天我学习“知识”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0597",
    "german": "Kette",
    "translation": "链条",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kette“.",
        "zh": "今天我学习“链条”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0598",
    "german": "Kind",
    "translation": "孩子",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kind“.",
        "zh": "今天我学习“孩子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0600",
    "german": "Information",
    "translation": "信息",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Information“.",
        "zh": "今天我学习“信息”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0602",
    "german": "Insel",
    "translation": "岛",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Insel“.",
        "zh": "今天我学习“岛”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0603",
    "german": "Instrument",
    "translation": "仪器",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Instrument“.",
        "zh": "今天我学习“仪器”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0607",
    "german": "Interview",
    "translation": "面试",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Interview“.",
        "zh": "今天我学习“面试”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0609",
    "german": "Jacke",
    "translation": "夹克",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Jacke“.",
        "zh": "今天我学习“夹克”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0612",
    "german": "Jugend-",
    "translation": "青年",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Jugend-“.",
        "zh": "今天我学习“青年”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0618",
    "german": "Kreuzung",
    "translation": "交叉点",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kreuzung“.",
        "zh": "今天我学习“交叉点”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0619",
    "german": "Krimi",
    "translation": "犯罪",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Krimi“.",
        "zh": "今天我学习“犯罪”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0621",
    "german": "Kuchen",
    "translation": "蛋糕",
    "kind": "noun",
    "article": "der",
    "plural": "- kühl",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kuchen“.",
        "zh": "今天我学习“蛋糕”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0622",
    "german": "Kühl-",
    "translation": "冷却",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kühl-“.",
        "zh": "今天我学习“冷却”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0623",
    "german": "Kultur",
    "translation": "文化",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kultur“.",
        "zh": "今天我学习“文化”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0625",
    "german": "Kunde",
    "translation": "顾客",
    "kind": "noun",
    "article": "der",
    "plural": "-n /",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kunde“.",
        "zh": "今天我学习“顾客”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0626",
    "german": "Kundin",
    "translation": "顾客",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kundin“.",
        "zh": "今天我学习“顾客”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0628",
    "german": "Kunst",
    "translation": "艺术",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kunst“.",
        "zh": "今天我学习“艺术”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0629",
    "german": "Kurs",
    "translation": "课程",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kurs“.",
        "zh": "今天我学习“课程”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0632",
    "german": "Lampe",
    "translation": "灯",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Lampe“.",
        "zh": "今天我学习“灯”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0634",
    "german": "Landschaft",
    "translation": "风景",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Landschaft“.",
        "zh": "今天我学习“风景”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0635",
    "german": "Kirche",
    "translation": "教堂",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kirche“.",
        "zh": "今天我学习“教堂”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0636",
    "german": "Klavier",
    "translation": "钢琴",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Klavier“.",
        "zh": "今天我学习“钢琴”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0637",
    "german": "Kleid",
    "translation": "连衣裙",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kleid“.",
        "zh": "今天我学习“连衣裙”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0642",
    "german": "Koffer",
    "translation": "手提箱",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Koffer“.",
        "zh": "今天我学习“手提箱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0648",
    "german": "Kontakt",
    "translation": "联系方式",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kontakt“.",
        "zh": "今天我学习“联系方式”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0649",
    "german": "Konto",
    "translation": "帐户",
    "kind": "noun",
    "article": "das",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Konto“.",
        "zh": "今天我学习“帐户”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0651",
    "german": "Konzert",
    "translation": "音乐会",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Konzert“.",
        "zh": "今天我学习“音乐会”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0654",
    "german": "Kosmetik",
    "translation": "化妆品",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kosmetik“.",
        "zh": "今天我学习“化妆品”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0656",
    "german": "Link",
    "translation": "链接",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Link“.",
        "zh": "今天我学习“链接”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0657",
    "german": "Lust",
    "translation": "欲望",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Lust“.",
        "zh": "今天我学习“欲望”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0661",
    "german": "Mädchen",
    "translation": "女孩",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mädchen“.",
        "zh": "今天我学习“女孩”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0662",
    "german": "Magen",
    "translation": "胃",
    "kind": "noun",
    "article": "der",
    "plural": "¨-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Magen“.",
        "zh": "今天我学习“胃”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0666",
    "german": "Mann",
    "translation": "男人",
    "kind": "noun",
    "article": "der",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mann“.",
        "zh": "今天我学习“男人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0667",
    "german": "Maschine",
    "translation": "机器",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Maschine“.",
        "zh": "今天我学习“机器”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0669",
    "german": "Meinung",
    "translation": "意见",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Meinung“.",
        "zh": "今天我学习“意见”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0673",
    "german": "Leben",
    "translation": "生活",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Leben“.",
        "zh": "今天我学习“生活”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0678",
    "german": "Leute",
    "translation": "人",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Leute“.",
        "zh": "今天我学习“人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0681",
    "german": "Moment",
    "translation": "等等",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Moment“.",
        "zh": "今天我学习“等等”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0683",
    "german": "Motor",
    "translation": "发动机",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Motor“.",
        "zh": "今天我学习“发动机”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0684",
    "german": "Mund",
    "translation": "嘴",
    "kind": "noun",
    "article": "der",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mund“.",
        "zh": "今天我学习“嘴”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0685",
    "german": "Museum",
    "translation": "博物馆",
    "kind": "noun",
    "article": "das",
    "plural": "-een",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Museum“.",
        "zh": "今天我学习“博物馆”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0689",
    "german": "Mütze",
    "translation": "帽子",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mütze“.",
        "zh": "今天我学习“帽子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0691",
    "german": "Nachbar",
    "translation": "邻居",
    "kind": "noun",
    "article": "der",
    "plural": "-n,",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nachbar“.",
        "zh": "今天我学习“邻居”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0692",
    "german": "Nachricht",
    "translation": "留言",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nachricht“.",
        "zh": "今天我学习“留言”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0693",
    "german": "Nähe",
    "translation": "邻近性",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nähe“.",
        "zh": "今天我学习“邻近性”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0694",
    "german": "Name",
    "translation": "姓名",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Name“.",
        "zh": "今天我学习“姓名”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0699",
    "german": "Mensch",
    "translation": "人类",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mensch“.",
        "zh": "今天我学习“人类”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0701",
    "german": "Messe",
    "translation": "公平",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Messe“.",
        "zh": "今天我学习“公平”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0702",
    "german": "Messer",
    "translation": "刀",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Messer“.",
        "zh": "今天我学习“刀”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0705",
    "german": "Milch",
    "translation": "牛奶",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Milch“.",
        "zh": "今天我学习“牛奶”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0706",
    "german": "Mineral-",
    "translation": "矿物",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mineral-“.",
        "zh": "今天我学习“矿物”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0710",
    "german": "Mittel",
    "translation": "手段",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mittel“.",
        "zh": "今天我学习“手段”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0712",
    "german": "Mobil-",
    "translation": "移动",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mobil-“.",
        "zh": "今天我学习“移动”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0714",
    "german": "Mode",
    "translation": "时尚",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mode“.",
        "zh": "今天我学习“时尚”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0719",
    "german": "Ohr",
    "translation": "耳朵",
    "kind": "noun",
    "article": "das",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ohr“.",
        "zh": "今天我学习“耳朵”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0720",
    "german": "Öl",
    "translation": "油",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Öl“.",
        "zh": "今天我学习“油”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0722",
    "german": "Orange",
    "translation": "橙色",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Orange“.",
        "zh": "今天我学习“橙色”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0723",
    "german": "Ordnung",
    "translation": "好的",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ordnung“.",
        "zh": "今天我学习“好的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0725",
    "german": "Ort",
    "translation": "地点",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ort“.",
        "zh": "今天我学习“地点”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0726",
    "german": "Paar",
    "translation": "情侣",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Paar“.",
        "zh": "今天我学习“情侣”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0729",
    "german": "Paket",
    "translation": "包",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Paket“.",
        "zh": "今天我学习“包”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0730",
    "german": "Partner",
    "translation": "合伙人",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Partner“.",
        "zh": "今天我学习“合伙人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0731",
    "german": "Partnerin",
    "translation": "合伙人",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Partnerin“.",
        "zh": "今天我学习“合伙人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0744",
    "german": "Note",
    "translation": "等级",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Note“.",
        "zh": "今天我学习“等级”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0745",
    "german": "Notiz",
    "translation": "注意事项",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Notiz“.",
        "zh": "今天我学习“注意事项”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0746",
    "german": "Nudel",
    "translation": "面条",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nudel“.",
        "zh": "今天我学习“面条”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0747",
    "german": "Nummer",
    "translation": "数量",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Nummer“.",
        "zh": "今天我学习“数量”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0752",
    "german": "Projekt",
    "translation": "项目",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Projekt“.",
        "zh": "今天我学习“项目”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0753",
    "german": "Prospekt",
    "translation": "宣传册",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Prospekt“.",
        "zh": "今天我学习“宣传册”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0755",
    "german": "Prüfung",
    "translation": "考试",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Prüfung“.",
        "zh": "今天我学习“考试”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0757",
    "german": "Qualität",
    "translation": "品质",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Qualität“.",
        "zh": "今天我学习“品质”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0758",
    "german": "Quiz",
    "translation": "测验",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Quiz“.",
        "zh": "今天我学习“测验”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0759",
    "german": "Radio",
    "translation": "收音机",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Radio“.",
        "zh": "今天我学习“收音机”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0761",
    "german": "Rätsel",
    "translation": "谜题",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rätsel“.",
        "zh": "今天我学习“谜题”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0763",
    "german": "Raum",
    "translation": "空间",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Raum“.",
        "zh": "今天我学习“空间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0766",
    "german": "Reinigung",
    "translation": "清洁",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Reinigung“.",
        "zh": "今天我学习“清洁”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0767",
    "german": "Pause",
    "translation": "休息",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Pause“.",
        "zh": "今天我学习“休息”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0768",
    "german": "Person",
    "translation": "人",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Person“.",
        "zh": "今天我学习“人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0769",
    "german": "Pizza",
    "translation": "披萨",
    "kind": "noun",
    "article": "die",
    "plural": "-s/-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Pizza“.",
        "zh": "今天我学习“披萨”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0770",
    "german": "Plakat",
    "translation": "海报",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Plakat“.",
        "zh": "今天我学习“海报”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0771",
    "german": "Plan",
    "translation": "计划",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Plan“.",
        "zh": "今天我学习“计划”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0772",
    "german": "Platz",
    "translation": "地方",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Platz“.",
        "zh": "今天我学习“地方”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0775",
    "german": "Portion",
    "translation": "部分",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Portion“.",
        "zh": "今天我学习“部分”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0778",
    "german": "Praxis",
    "translation": "练习",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Praxis“.",
        "zh": "今天我学习“练习”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0783",
    "german": "Problem",
    "translation": "问题",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Problem“.",
        "zh": "今天我学习“问题”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0785",
    "german": "Rundgang",
    "translation": "游览",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rundgang“.",
        "zh": "今天我学习“游览”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0786",
    "german": "Sache",
    "translation": "东西",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sache“.",
        "zh": "今天我学习“东西”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0787",
    "german": "Saft",
    "translation": "果汁",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Saft“.",
        "zh": "今天我学习“果汁”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0789",
    "german": "Salat",
    "translation": "沙拉",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Salat“.",
        "zh": "今天我学习“沙拉”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0790",
    "german": "Salz",
    "translation": "盐",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Salz“.",
        "zh": "今天我学习“盐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0792",
    "german": "Satz",
    "translation": "句子",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Satz“.",
        "zh": "今天我学习“句子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0793",
    "german": "Schalter",
    "translation": "开关",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schalter“.",
        "zh": "今天我学习“开关”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0797",
    "german": "Schere",
    "translation": "剪刀",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schere“.",
        "zh": "今天我学习“剪刀”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0799",
    "german": "Schiff",
    "translation": "船",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schiff“.",
        "zh": "今天我学习“船”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0800",
    "german": "Schirm",
    "translation": "屏幕",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schirm“.",
        "zh": "今天我学习“屏幕”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0807",
    "german": "Rentnerin",
    "translation": "养老金领取者",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rentnerin“.",
        "zh": "今天我学习“养老金领取者”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0808",
    "german": "Reparatur",
    "translation": "维修",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Reparatur“.",
        "zh": "今天我学习“维修”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0810",
    "german": "Rest",
    "translation": "休息",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rest“.",
        "zh": "今天我学习“休息”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0812",
    "german": "Rezeption",
    "translation": "接待处",
    "kind": "noun",
    "article": "die",
    "plural": "en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rezeption“.",
        "zh": "今天我学习“接待处”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0815",
    "german": "Rind",
    "translation": "牛肉",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rind“.",
        "zh": "今天我学习“牛肉”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0816",
    "german": "Rose",
    "translation": "玫瑰",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rose“.",
        "zh": "今天我学习“玫瑰”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0817",
    "german": "Rücken",
    "translation": "回来",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rücken“.",
        "zh": "今天我学习“回来”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0819",
    "german": "Ruhe",
    "translation": "冷静",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ruhe“.",
        "zh": "今天我学习“冷静”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0821",
    "german": "Schüler",
    "translation": "学生",
    "kind": "noun",
    "article": "der",
    "plural": "- /",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schüler“.",
        "zh": "今天我学习“学生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0822",
    "german": "Schülerin",
    "translation": "学生",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schülerin“.",
        "zh": "今天我学习“学生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0826",
    "german": "See",
    "translation": "湖",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „See“.",
        "zh": "今天我学习“湖”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0827",
    "german": "See",
    "translation": "湖",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „See“.",
        "zh": "今天我学习“湖”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0829",
    "german": "Sehens-",
    "translation": "视线-",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sehens-“.",
        "zh": "今天我学习“视线-”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0831",
    "german": "Seife",
    "translation": "肥皂",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Seife“.",
        "zh": "今天我学习“肥皂”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0836",
    "german": "Schluss",
    "translation": "结束",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schluss“.",
        "zh": "今天我学习“结束”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0837",
    "german": "Schlüssel",
    "translation": "钥匙",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schlüssel“.",
        "zh": "今天我学习“钥匙”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0839",
    "german": "Schmerz",
    "translation": "疼痛",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schmerz“.",
        "zh": "今天我学习“疼痛”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0844",
    "german": "Schrank",
    "translation": "壁橱",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schrank“.",
        "zh": "今天我学习“壁橱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0848",
    "german": "Schuh",
    "translation": "鞋",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schuh“.",
        "zh": "今天我学习“鞋”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0849",
    "german": "Schule",
    "translation": "学校",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schule“.",
        "zh": "今天我学习“学校”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0852",
    "german": "Sprache",
    "translation": "语言",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sprache“.",
        "zh": "今天我学习“语言”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0854",
    "german": "Sprech-",
    "translation": "说话",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sprech-“.",
        "zh": "今天我学习“说话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0855",
    "german": "Stadt",
    "translation": "城市",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stadt“.",
        "zh": "今天我学习“城市”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0858",
    "german": "Stelle",
    "translation": "位置",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stelle“.",
        "zh": "今天我学习“位置”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0861",
    "german": "Stiefel",
    "translation": "靴子",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stiefel“.",
        "zh": "今天我学习“靴子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0862",
    "german": "Stipen-",
    "translation": "奖学金",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stipen-“.",
        "zh": "今天我学习“奖学金”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0863",
    "german": "Stock",
    "translation": "库存",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e;",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Stock“.",
        "zh": "今天我学习“库存”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0864",
    "german": "Strand",
    "translation": "海滩",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Strand“.",
        "zh": "今天我学习“海滩”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0865",
    "german": "Straße",
    "translation": "街道",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Straße“.",
        "zh": "今天我学习“街道”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0868",
    "german": "Situation",
    "translation": "情况",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Situation“.",
        "zh": "今天我学习“情况”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0870",
    "german": "Ski",
    "translation": "滑雪板",
    "kind": "noun",
    "article": "der",
    "plural": "-, -er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ski“.",
        "zh": "今天我学习“滑雪板”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0872",
    "german": "Sofa",
    "translation": "沙发",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sofa“.",
        "zh": "今天我学习“沙发”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0879",
    "german": "Spaß",
    "translation": "有趣",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Spaß“.",
        "zh": "今天我学习“有趣”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0880",
    "german": "Spazier-",
    "translation": "步行",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Spazier-“.",
        "zh": "今天我学习“步行”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0882",
    "german": "Speisekarte",
    "translation": "菜单",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Speisekarte“.",
        "zh": "今天我学习“菜单”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0886",
    "german": "Teller",
    "translation": "板材",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Teller“.",
        "zh": "今天我学习“板材”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0887",
    "german": "Tennis",
    "translation": "网球",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tennis“.",
        "zh": "今天我学习“网球”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0888",
    "german": "Tipp",
    "translation": "提示",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tipp“.",
        "zh": "今天我学习“提示”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0889",
    "german": "Torte",
    "translation": "馅饼",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Torte“.",
        "zh": "今天我学习“馅饼”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0890",
    "german": "Tourist",
    "translation": "游客",
    "kind": "noun",
    "article": "der",
    "plural": "-en,",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tourist“.",
        "zh": "今天我学习“游客”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0893",
    "german": "Training",
    "translation": "培训",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Training“.",
        "zh": "今天我学习“培训”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0894",
    "german": "Traum",
    "translation": "梦想",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Traum“.",
        "zh": "今天我学习“梦想”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0895",
    "german": "Student",
    "translation": "学生",
    "kind": "noun",
    "article": "der",
    "plural": "-en,",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Student“.",
        "zh": "今天我学习“学生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0897",
    "german": "Studium",
    "translation": "学习",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Studium“.",
        "zh": "今天我学习“学习”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0899",
    "german": "Supermarkt",
    "translation": "超市",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Supermarkt“.",
        "zh": "今天我学习“超市”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0900",
    "german": "Suppe",
    "translation": "汤",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Suppe“.",
        "zh": "今天我学习“汤”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0902",
    "german": "Süßigkeiten",
    "translation": "糖果",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Süßigkeiten“.",
        "zh": "今天我学习“糖果”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0904",
    "german": "Tablet",
    "translation": "平板电脑",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tablet“.",
        "zh": "今天我学习“平板电脑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0905",
    "german": "Tablette",
    "translation": "平板电脑",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tablette“.",
        "zh": "今天我学习“平板电脑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0907",
    "german": "Tasche",
    "translation": "包",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tasche“.",
        "zh": "今天我学习“包”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0909",
    "german": "Tasse",
    "translation": "杯子",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tasse“.",
        "zh": "今天我学习“杯子”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0910",
    "german": "Taxi",
    "translation": "出租车",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Taxi“.",
        "zh": "今天我学习“出租车”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0911",
    "german": "Tee",
    "translation": "茶",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Tee“.",
        "zh": "今天我学习“茶”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0914",
    "german": "Unfall",
    "translation": "意外事故",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Unfall“.",
        "zh": "今天我学习“意外事故”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0915",
    "german": "Universität",
    "translation": "大学",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Universität“.",
        "zh": "今天我学习“大学”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0916",
    "german": "Unterkunft",
    "translation": "住宿",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Unterkunft“.",
        "zh": "今天我学习“住宿”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0918",
    "german": "Unterricht",
    "translation": "教训",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Unterricht“.",
        "zh": "今天我学习“教训”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0920",
    "german": "Unterschrift",
    "translation": "签名",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Unterschrift“.",
        "zh": "今天我学习“签名”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0922",
    "german": "Veranstal-",
    "translation": "事件",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Veranstal-“.",
        "zh": "今天我学习“事件”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0926",
    "german": "Verein",
    "translation": "俱乐部",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Verein“.",
        "zh": "今天我学习“俱乐部”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0929",
    "german": "Treppe",
    "translation": "楼梯",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Treppe“.",
        "zh": "今天我学习“楼梯”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0938",
    "german": "Über-",
    "translation": "过-",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Über-“.",
        "zh": "今天我学习“过-”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0940",
    "german": "Uhr",
    "translation": "时钟",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Uhr“.",
        "zh": "今天我学习“时钟”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0945",
    "german": "Volleyball",
    "translation": "排球",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Volleyball“.",
        "zh": "今天我学习“排球”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0955",
    "german": "Wagen",
    "translation": "汽车",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wagen“.",
        "zh": "今天我学习“汽车”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0958",
    "german": "Wald",
    "translation": "森林",
    "kind": "noun",
    "article": "der",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wald“.",
        "zh": "今天我学习“森林”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0975",
    "german": "Verspätung",
    "translation": "延迟",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Verspätung“.",
        "zh": "今天我学习“延迟”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0977",
    "german": "Vertrag",
    "translation": "合同",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Vertrag“.",
        "zh": "今天我学习“合同”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0979",
    "german": "Vogel",
    "translation": "鸟",
    "kind": "noun",
    "article": "der",
    "plural": "¨-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Vogel“.",
        "zh": "今天我学习“鸟”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0983",
    "german": "Werkstatt",
    "translation": "车间",
    "kind": "noun",
    "article": "die",
    "plural": "¨-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Werkstatt“.",
        "zh": "今天我学习“车间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0984",
    "german": "Wettbewerb",
    "translation": "竞争",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wettbewerb“.",
        "zh": "今天我学习“竞争”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0988",
    "german": "Wiederhören",
    "translation": "再听一遍",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wiederhören“.",
        "zh": "今天我学习“再听一遍”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0989",
    "german": "Wiedersehen",
    "translation": "再见",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wiedersehen“.",
        "zh": "今天我学习“再见”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0992",
    "german": "Witz",
    "translation": "笑话",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Witz“.",
        "zh": "今天我学习“笑话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0999",
    "german": "Wäsche",
    "translation": "洗衣",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wäsche“.",
        "zh": "今天我学习“洗衣”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1001",
    "german": "Wasser",
    "translation": "水",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wasser“.",
        "zh": "今天我学习“水”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1002",
    "german": "Webseite",
    "translation": "网站",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Webseite“.",
        "zh": "今天我学习“网站”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1005",
    "german": "Weg",
    "translation": "方式",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Weg“.",
        "zh": "今天我学习“方式”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1009",
    "german": "Wein",
    "translation": "酒",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wein“.",
        "zh": "今天我学习“酒”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1013",
    "german": "Welt",
    "translation": "世界",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Welt“.",
        "zh": "今天我学习“世界”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1016",
    "german": "Zirkus",
    "translation": "马戏团",
    "kind": "noun",
    "article": "der",
    "plural": "-se",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zirkus“.",
        "zh": "今天我学习“马戏团”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1017",
    "german": "Zoo",
    "translation": "动物园",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zoo“.",
        "zh": "今天我学习“动物园”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1018",
    "german": "Zucker",
    "translation": "糖",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zucker“.",
        "zh": "今天我学习“糖”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1026",
    "german": "Workshop",
    "translation": "车间",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Workshop“.",
        "zh": "今天我学习“车间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1027",
    "german": "Wort",
    "translation": "词",
    "kind": "noun",
    "article": "das",
    "plural": "¨-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wort“.",
        "zh": "今天我学习“词”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1029",
    "german": "Wunsch",
    "translation": "欲望",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Wunsch“.",
        "zh": "今天我学习“欲望”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1032",
    "german": "Zahn",
    "translation": "牙齿",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zahn“.",
        "zh": "今天我学习“牙齿”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1034",
    "german": "Zeit",
    "translation": "时间",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zeit“.",
        "zh": "今天我学习“时间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1035",
    "german": "Zelt",
    "translation": "帐篷",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zelt“.",
        "zh": "今天我学习“帐篷”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1036",
    "german": "Zettel",
    "translation": "注释",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zettel“.",
        "zh": "今天我学习“注释”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1037",
    "german": "Zeugnis",
    "translation": "见证",
    "kind": "noun",
    "article": "das",
    "plural": "-se",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Zeugnis“.",
        "zh": "今天我学习“见证”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1038",
    "german": "Ziel",
    "translation": "目标",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "卡车",
      "电脑",
      "短信"
    ],
    "distractorIds": [
      "a2-0004",
      "a2-0005",
      "a2-0006"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ziel“.",
        "zh": "今天我学习“目标”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0015",
    "german": "markieren",
    "translation": "标记",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "改变",
      "开始",
      "到达"
    ],
    "distractorIds": [
      "a2-0276",
      "a2-0278",
      "a2-0281"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „markieren“.",
        "zh": "今天我学习“标记”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0276",
    "german": "ändern",
    "translation": "改变",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "开始",
      "到达"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0278",
      "a2-0281"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ändern“.",
        "zh": "今天我学习“改变”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0278",
    "german": "anfangen",
    "translation": "开始",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "到达"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0281"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „anfangen“.",
        "zh": "今天我学习“开始”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0281",
    "german": "ankommen",
    "translation": "到达",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ankommen“.",
        "zh": "今天我学习“到达”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0282",
    "german": "anmachen",
    "translation": "打开",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „anmachen“.",
        "zh": "今天我学习“打开”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0283",
    "german": "anmelden",
    "translation": "登录",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „anmelden“.",
        "zh": "今天我学习“登录”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0285",
    "german": "anrufen",
    "translation": "打电话",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „anrufen“.",
        "zh": "今天我学习“打电话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0287",
    "german": "ansehen",
    "translation": "查看",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ansehen“.",
        "zh": "今天我学习“查看”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0288",
    "german": "antworten",
    "translation": "回答",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „antworten“.",
        "zh": "今天我学习“回答”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0290",
    "german": "abgeben",
    "translation": "放弃",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „abgeben“.",
        "zh": "今天我学习“放弃”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0291",
    "german": "abholen",
    "translation": "拿起",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „abholen“.",
        "zh": "今天我学习“拿起”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0292",
    "german": "abschließen",
    "translation": "完成",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „abschließen“.",
        "zh": "今天我学习“完成”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0299",
    "german": "anbieten",
    "translation": "报价",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „anbieten“.",
        "zh": "今天我学习“报价”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0303",
    "german": "ausfüllen",
    "translation": "填写",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ausfüllen“.",
        "zh": "今天我学习“填写”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0305",
    "german": "ausgehen",
    "translation": "出去",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ausgehen“.",
        "zh": "今天我学习“出去”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0308",
    "german": "auspacken",
    "translation": "打开包装",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „auspacken“.",
        "zh": "今天我学习“打开包装”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0309",
    "german": "ausruhen",
    "translation": "休息",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ausruhen“.",
        "zh": "今天我学习“休息”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0310",
    "german": "aussehen",
    "translation": "看看",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aussehen“.",
        "zh": "今天我学习“看看”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0312",
    "german": "aussprechen",
    "translation": "发音",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aussprechen“.",
        "zh": "今天我学习“发音”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0313",
    "german": "aussteigen",
    "translation": "出去",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aussteigen“.",
        "zh": "今天我学习“出去”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0319",
    "german": "ärgern",
    "translation": "惹恼",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ärgern“.",
        "zh": "今天我学习“惹恼”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0323",
    "german": "aufhören",
    "translation": "停止",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aufhören“.",
        "zh": "今天我学习“停止”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0324",
    "german": "aufmachen",
    "translation": "开放",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aufmachen“.",
        "zh": "今天我学习“开放”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0325",
    "german": "aufpassen",
    "translation": "小心点",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aufpassen“.",
        "zh": "今天我学习“小心点”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0326",
    "german": "aufräumen",
    "translation": "清理",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aufräumen“.",
        "zh": "今天我学习“清理”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0328",
    "german": "aufstehen",
    "translation": "起床",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aufstehen“.",
        "zh": "今天我学习“起床”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0331",
    "german": "beenden",
    "translation": "完成",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beenden“.",
        "zh": "今天我学习“完成”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0332",
    "german": "beginnen",
    "translation": "开始",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "到达"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0281"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beginnen“.",
        "zh": "今天我学习“开始”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0333",
    "german": "begründen",
    "translation": "证明合理",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „begründen“.",
        "zh": "今天我学习“证明合理”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0338",
    "german": "bekommen",
    "translation": "得到",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bekommen“.",
        "zh": "今天我学习“得到”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0340",
    "german": "beraten",
    "translation": "建议",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beraten“.",
        "zh": "今天我学习“建议”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0342",
    "german": "berichten",
    "translation": "报告",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „berichten“.",
        "zh": "今天我学习“报告”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0344",
    "german": "beschreiben",
    "translation": "描述",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beschreiben“.",
        "zh": "今天我学习“描述”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0345",
    "german": "beschweren",
    "translation": "抱怨",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beschweren“.",
        "zh": "今天我学习“抱怨”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0347",
    "german": "backen",
    "translation": "烘烤",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „backen“.",
        "zh": "今天我学习“烘烤”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0349",
    "german": "baden",
    "translation": "洗澡",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „baden“.",
        "zh": "今天我学习“洗澡”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0358",
    "german": "bedanken",
    "translation": "谢谢你",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bedanken“.",
        "zh": "今天我学习“谢谢你”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0359",
    "german": "bedeuten",
    "translation": "意思是",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bedeuten“.",
        "zh": "今天我学习“意思是”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0360",
    "german": "beeilen",
    "translation": "快点",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beeilen“.",
        "zh": "今天我学习“快点”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0361",
    "german": "bleiben",
    "translation": "留下来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bleiben“.",
        "zh": "今天我学习“留下来”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0363",
    "german": "braten",
    "translation": "炒",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „braten“.",
        "zh": "今天我学习“炒”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0364",
    "german": "brauchen",
    "translation": "需要",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „brauchen“.",
        "zh": "今天我学习“需要”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0366",
    "german": "bringen",
    "translation": "带",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bringen“.",
        "zh": "今天我学习“带”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0370",
    "german": "buchen",
    "translation": "书",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „buchen“.",
        "zh": "今天我学习“书”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0376",
    "german": "bestätigen",
    "translation": "确认",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bestätigen“.",
        "zh": "今天我学习“确认”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0377",
    "german": "bestehen",
    "translation": "存在",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bestehen“.",
        "zh": "今天我学习“存在”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0378",
    "german": "bestellen",
    "translation": "订单",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bestellen“.",
        "zh": "今天我学习“订单”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0380",
    "german": "besuchen",
    "translation": "访问",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „besuchen“.",
        "zh": "今天我学习“访问”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0387",
    "german": "bisschen",
    "translation": "一点",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bisschen“.",
        "zh": "今天我学习“一点”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0391",
    "german": "dauern",
    "translation": "最后",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dauern“.",
        "zh": "今天我学习“最后”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0392",
    "german": "denken",
    "translation": "认为",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „denken“.",
        "zh": "今天我学习“认为”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0402",
    "german": "draußen",
    "translation": "外面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „draußen“.",
        "zh": "今天我学习“外面”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0404",
    "german": "drinnen",
    "translation": "里面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „drinnen“.",
        "zh": "今天我学习“里面”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0405",
    "german": "drüben",
    "translation": "在那儿",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „drüben“.",
        "zh": "今天我学习“在那儿”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0408",
    "german": "chatten",
    "translation": "聊天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „chatten“.",
        "zh": "今天我学习“聊天”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0414",
    "german": "dafür",
    "translation": "为此",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dafür“.",
        "zh": "今天我学习“为此”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0415",
    "german": "dagegen",
    "translation": "反对它",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dagegen“.",
        "zh": "今天我学习“反对它”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0418",
    "german": "daneben",
    "translation": "在它旁边",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „daneben“.",
        "zh": "今天我学习“在它旁边”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0420",
    "german": "danken",
    "translation": "谢谢你",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „danken“.",
        "zh": "今天我学习“谢谢你”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0425",
    "german": "einpacken",
    "translation": "收拾行李",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einpacken“.",
        "zh": "今天我学习“收拾行李”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0426",
    "german": "einsteigen",
    "translation": "进去",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einsteigen“.",
        "zh": "今天我学习“进去”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0427",
    "german": "eintragen",
    "translation": "输入",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „eintragen“.",
        "zh": "今天我学习“输入”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0429",
    "german": "einverstanden",
    "translation": "同意",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einverstanden“.",
        "zh": "今天我学习“同意”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0430",
    "german": "sein",
    "translation": "是",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sein“.",
        "zh": "今天我学习“是”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0432",
    "german": "einziehen",
    "translation": "搬进来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einziehen“.",
        "zh": "今天我学习“搬进来”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0434",
    "german": "empfehlen",
    "translation": "推荐",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „empfehlen“.",
        "zh": "今天我学习“推荐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0436",
    "german": "enden",
    "translation": "结束",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „enden“.",
        "zh": "今天我学习“结束”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0439",
    "german": "entschuldigen",
    "translation": "道歉",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „entschuldigen“.",
        "zh": "今天我学习“道歉”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0440",
    "german": "Ich",
    "translation": "我",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ich“.",
        "zh": "今天我学习“我”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0446",
    "german": "dürfen",
    "translation": "允许",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dürfen“.",
        "zh": "今天我学习“允许”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0466",
    "german": "fehlen",
    "translation": "失踪",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fehlen“.",
        "zh": "今天我学习“失踪”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0468",
    "german": "feiern",
    "translation": "庆祝",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „feiern“.",
        "zh": "今天我学习“庆祝”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0470",
    "german": "fernsehen",
    "translation": "看电视",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fernsehen“.",
        "zh": "今天我学习“看电视”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0476",
    "german": "erklären",
    "translation": "解释一下",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erklären“.",
        "zh": "今天我学习“解释一下”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0477",
    "german": "erlauben",
    "translation": "允许",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erlauben“.",
        "zh": "今天我学习“允许”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0479",
    "german": "erreichen",
    "translation": "达到",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erreichen“.",
        "zh": "今天我学习“达到”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0482",
    "german": "erzählen",
    "translation": "告诉",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erzählen“.",
        "zh": "今天我学习“告诉”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0491",
    "german": "fühlen",
    "translation": "感觉",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fühlen“.",
        "zh": "今天我学习“感觉”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0500",
    "german": "geboren",
    "translation": "出生",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „geboren“.",
        "zh": "今天我学习“出生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0501",
    "german": "gefallen",
    "translation": "喜欢",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gefallen“.",
        "zh": "今天我学习“喜欢”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0502",
    "german": "gegen",
    "translation": "反对",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gegen“.",
        "zh": "今天我学习“反对”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0511",
    "german": "freuen",
    "translation": "期待",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „freuen“.",
        "zh": "今天我学习“期待”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0517",
    "german": "gewinnen",
    "translation": "赢",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gewinnen“.",
        "zh": "今天我学习“赢”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0519",
    "german": "glauben",
    "translation": "相信",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „glauben“.",
        "zh": "今天我学习“相信”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0524",
    "german": "gratulieren",
    "translation": "祝贺",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gratulieren“.",
        "zh": "今天我学习“祝贺”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0525",
    "german": "grillen",
    "translation": "烧烤",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „grillen“.",
        "zh": "今天我学习“烧烤”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0535",
    "german": "gehören",
    "translation": "属于",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gehören“.",
        "zh": "今天我学习“属于”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0545",
    "german": "gestern",
    "translation": "昨天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gestern“.",
        "zh": "今天我学习“昨天”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0556",
    "german": "hinten",
    "translation": "后面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hinten“.",
        "zh": "今天我学习“后面”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0560",
    "german": "hoffen",
    "translation": "希望",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hoffen“.",
        "zh": "今天我学习“希望”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0562",
    "german": "hören",
    "translation": "听到",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hören“.",
        "zh": "今天我学习“听到”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0567",
    "german": "halten",
    "translation": "保持",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „halten“.",
        "zh": "今天我学习“保持”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0569",
    "german": "hängen",
    "translation": "挂",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hängen“.",
        "zh": "今天我学习“挂”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0577",
    "german": "heiraten",
    "translation": "结婚",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „heiraten“.",
        "zh": "今天我学习“结婚”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0578",
    "german": "heißen",
    "translation": "被称为",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „heißen“.",
        "zh": "今天我学习“被称为”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0594",
    "german": "kennen",
    "translation": "知道",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kennen“.",
        "zh": "今天我学习“知道”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0595",
    "german": "kennenlernen",
    "translation": "去了解",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kennenlernen“.",
        "zh": "今天我学习“去了解”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0601",
    "german": "informieren",
    "translation": "通知",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „informieren“.",
        "zh": "今天我学习“通知”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0604",
    "german": "interessieren",
    "translation": "有兴趣",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „interessieren“.",
        "zh": "今天我学习“有兴趣”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0611",
    "german": "joggen",
    "translation": "慢跑",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „joggen“.",
        "zh": "今天我学习“慢跑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0624",
    "german": "kümmern",
    "translation": "照顾",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kümmern“.",
        "zh": "今天我学习“照顾”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0627",
    "german": "kündigen",
    "translation": "取消",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kündigen“.",
        "zh": "今天我学习“取消”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0630",
    "german": "lachen",
    "translation": "笑",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „lachen“.",
        "zh": "今天我学习“笑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0641",
    "german": "kochen",
    "translation": "厨师",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kochen“.",
        "zh": "今天我学习“厨师”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0646",
    "german": "kommen",
    "translation": "来吧",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kommen“.",
        "zh": "今天我学习“来吧”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0647",
    "german": "können",
    "translation": "可以",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „können“.",
        "zh": "今天我学习“可以”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0650",
    "german": "kontrollieren",
    "translation": "控制",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kontrollieren“.",
        "zh": "今天我学习“控制”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0653",
    "german": "tun",
    "translation": "做",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „tun“.",
        "zh": "今天我学习“做”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0659",
    "german": "machen",
    "translation": "做",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „machen“.",
        "zh": "今天我学习“做”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0663",
    "german": "malen",
    "translation": "油漆",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „malen“.",
        "zh": "今天我学习“油漆”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0668",
    "german": "meinen",
    "translation": "意思是",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „meinen“.",
        "zh": "今天我学习“意思是”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0672",
    "german": "laufen",
    "translation": "跑",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „laufen“.",
        "zh": "今天我学习“跑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0675",
    "german": "leihen",
    "translation": "借",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „leihen“.",
        "zh": "今天我学习“借”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0676",
    "german": "lesen",
    "translation": "读",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „lesen“.",
        "zh": "今天我学习“读”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0679",
    "german": "lieben",
    "translation": "爱",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „lieben“.",
        "zh": "今天我学习“爱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0680",
    "german": "liegen",
    "translation": "谎言",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „liegen“.",
        "zh": "今天我学习“谎言”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0682",
    "german": "morgen",
    "translation": "明天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „morgen“.",
        "zh": "今天我学习“明天”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0687",
    "german": "müssen",
    "translation": "必须",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „müssen“.",
        "zh": "今天我学习“必须”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0698",
    "german": "neben",
    "translation": "旁边",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „neben“.",
        "zh": "今天我学习“旁边”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0700",
    "german": "merken",
    "translation": "记住",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „merken“.",
        "zh": "今天我学习“记住”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0713",
    "german": "möchten",
    "translation": "想要",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „möchten“.",
        "zh": "今天我学习“想要”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0716",
    "german": "offen",
    "translation": "打开",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „offen“.",
        "zh": "今天我学习“打开”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0717",
    "german": "öffnen",
    "translation": "打开",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „öffnen“.",
        "zh": "今天我学习“打开”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0724",
    "german": "organisieren",
    "translation": "组织",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „organisieren“.",
        "zh": "今天我学习“组织”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0728",
    "german": "packen",
    "translation": "包",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „packen“.",
        "zh": "今天我学习“包”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0733",
    "german": "passieren",
    "translation": "发生",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „passieren“.",
        "zh": "今天我学习“发生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0734",
    "german": "nennen",
    "translation": "打电话",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nennen“.",
        "zh": "今天我学习“打电话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0750",
    "german": "oben",
    "translation": "上面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „oben“.",
        "zh": "今天我学习“上面”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0754",
    "german": "prüfen",
    "translation": "检查",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „prüfen“.",
        "zh": "今天我学习“检查”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0756",
    "german": "putzen",
    "translation": "干净",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „putzen“.",
        "zh": "今天我学习“干净”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0762",
    "german": "rauchen",
    "translation": "抽烟",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „rauchen“.",
        "zh": "今天我学习“抽烟”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0782",
    "german": "probieren",
    "translation": "尝试",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „probieren“.",
        "zh": "今天我学习“尝试”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0788",
    "german": "sagen",
    "translation": "说",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sagen“.",
        "zh": "今天我学习“说”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0791",
    "german": "sammeln",
    "translation": "收集",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sammeln“.",
        "zh": "今天我学习“收集”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0795",
    "german": "scheinen",
    "translation": "似乎",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „scheinen“.",
        "zh": "今天我学习“似乎”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0796",
    "german": "schenken",
    "translation": "给予",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schenken“.",
        "zh": "今天我学习“给予”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0798",
    "german": "schicken",
    "translation": "发送",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schicken“.",
        "zh": "今天我学习“发送”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0805",
    "german": "reiten",
    "translation": "骑",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „reiten“.",
        "zh": "今天我学习“骑”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0806",
    "german": "renovieren",
    "translation": "翻新",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „renovieren“.",
        "zh": "今天我学习“翻新”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0809",
    "german": "reservieren",
    "translation": "储备",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „reservieren“.",
        "zh": "今天我学习“储备”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0814",
    "german": "riechen",
    "translation": "气味",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „riechen“.",
        "zh": "今天我学习“气味”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0818",
    "german": "rufen",
    "translation": "打电话",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „rufen“.",
        "zh": "今天我学习“打电话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0825",
    "german": "schwimmen",
    "translation": "游泳",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schwimmen“.",
        "zh": "今天我学习“游泳”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0828",
    "german": "sehen",
    "translation": "看到",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sehen“.",
        "zh": "今天我学习“看到”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0833",
    "german": "setzen",
    "translation": "把",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „setzen“.",
        "zh": "今天我学习“把”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0835",
    "german": "schließen",
    "translation": "关闭",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schließen“.",
        "zh": "今天我学习“关闭”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0838",
    "german": "schmecken",
    "translation": "味道",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schmecken“.",
        "zh": "今天我学习“味道”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0840",
    "german": "schneien",
    "translation": "雪",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schneien“.",
        "zh": "今天我学习“雪”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0846",
    "german": "schreiben",
    "translation": "写",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schreiben“.",
        "zh": "今天我学习“写”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0853",
    "german": "sprechen",
    "translation": "说话",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sprechen“.",
        "zh": "今天我学习“说话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0856",
    "german": "stattfinden",
    "translation": "发生",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „stattfinden“.",
        "zh": "今天我学习“发生”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0857",
    "german": "stehen",
    "translation": "站",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „stehen“.",
        "zh": "今天我学习“站”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0859",
    "german": "stellen",
    "translation": "把",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „stellen“.",
        "zh": "今天我学习“把”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0860",
    "german": "sterben",
    "translation": "死",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sterben“.",
        "zh": "今天我学习“死”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0866",
    "german": "streiten",
    "translation": "争论",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „streiten“.",
        "zh": "今天我学习“争论”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0867",
    "german": "singen",
    "translation": "唱歌",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „singen“.",
        "zh": "今天我学习“唱歌”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0869",
    "german": "sitzen",
    "translation": "坐",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sitzen“.",
        "zh": "今天我学习“坐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0875",
    "german": "sollen",
    "translation": "应该",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sollen“.",
        "zh": "今天我学习“应该”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0878",
    "german": "sparen",
    "translation": "保存",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sparen“.",
        "zh": "今天我学习“保存”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0881",
    "german": "speichern",
    "translation": "保存",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „speichern“.",
        "zh": "今天我学习“保存”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0884",
    "german": "teilnehmen",
    "translation": "参与",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „teilnehmen“.",
        "zh": "今天我学习“参与”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0891",
    "german": "tragen",
    "translation": "磨损",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „tragen“.",
        "zh": "今天我学习“磨损”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0892",
    "german": "trainieren",
    "translation": "火车",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „trainieren“.",
        "zh": "今天我学习“火车”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0896",
    "german": "studieren",
    "translation": "学习",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „studieren“.",
        "zh": "今天我学习“学习”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0906",
    "german": "tanzen",
    "translation": "跳舞",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „tanzen“.",
        "zh": "今天我学习“跳舞”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0917",
    "german": "unternehmen",
    "translation": "公司",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „unternehmen“.",
        "zh": "今天我学习“公司”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0919",
    "german": "unterschreiben",
    "translation": "标志",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „unterschreiben“.",
        "zh": "今天我学习“标志”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0923",
    "german": "verbieten",
    "translation": "禁令",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verbieten“.",
        "zh": "今天我学习“禁令”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0924",
    "german": "verboten",
    "translation": "禁止的",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verboten“.",
        "zh": "今天我学习“禁止的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0925",
    "german": "verdienen",
    "translation": "赚",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verdienen“.",
        "zh": "今天我学习“赚”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0927",
    "german": "vereinbaren",
    "translation": "同意",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vereinbaren“.",
        "zh": "今天我学习“同意”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0931",
    "german": "trocken",
    "translation": "干",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „trocken“.",
        "zh": "今天我学习“干”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0933",
    "german": "üben",
    "translation": "练习",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „üben“.",
        "zh": "今天我学习“练习”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0935",
    "german": "übermorgen",
    "translation": "后天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „übermorgen“.",
        "zh": "今天我学习“后天”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0936",
    "german": "übernachten",
    "translation": "过夜",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „übernachten“.",
        "zh": "今天我学习“过夜”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0937",
    "german": "übersetzen",
    "translation": "翻译",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „übersetzen“.",
        "zh": "今天我学习“翻译”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0939",
    "german": "überweisen",
    "translation": "转移",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „überweisen“.",
        "zh": "今天我学习“转移”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0942",
    "german": "umsteigen",
    "translation": "开关",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „umsteigen“.",
        "zh": "今天我学习“开关”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0943",
    "german": "umziehen",
    "translation": "移动",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „umziehen“.",
        "zh": "今天我学习“移动”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0949",
    "german": "vorbereiten",
    "translation": "准备",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vorbereiten“.",
        "zh": "今天我学习“准备”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0950",
    "german": "vorgestern",
    "translation": "前天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vorgestern“.",
        "zh": "今天我学习“前天”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0952",
    "german": "vorstellen",
    "translation": "想象",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vorstellen“.",
        "zh": "今天我学习“想象”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0956",
    "german": "wählen",
    "translation": "选择",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wählen“.",
        "zh": "今天我学习“选择”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0959",
    "german": "wandern",
    "translation": "远足",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wandern“.",
        "zh": "今天我学习“远足”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0962",
    "german": "warten",
    "translation": "等待",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „warten“.",
        "zh": "今天我学习“等待”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0965",
    "german": "verletzen",
    "translation": "受伤",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verletzen“.",
        "zh": "今天我学习“受伤”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0966",
    "german": "verlieben",
    "translation": "坠入爱河",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verlieben“.",
        "zh": "今天我学习“坠入爱河”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0967",
    "german": "verlieren",
    "translation": "失去",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verlieren“.",
        "zh": "今天我学习“失去”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0971",
    "german": "verpassen",
    "translation": "想念",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verpassen“.",
        "zh": "今天我学习“想念”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0973",
    "german": "verschieben",
    "translation": "移动",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verschieben“.",
        "zh": "今天我学习“移动”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0974",
    "german": "verschieden",
    "translation": "不同的",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „verschieden“.",
        "zh": "今天我学习“不同的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0976",
    "german": "versuchen",
    "translation": "尝试",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „versuchen“.",
        "zh": "今天我学习“尝试”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0981",
    "german": "werden",
    "translation": "成为",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „werden“.",
        "zh": "今天我学习“成为”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0987",
    "german": "wiederholen",
    "translation": "重复",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wiederholen“.",
        "zh": "今天我学习“重复”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0991",
    "german": "wissen",
    "translation": "知道",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wissen“.",
        "zh": "今天我学习“知道”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1000",
    "german": "waschen",
    "translation": "洗",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „waschen“.",
        "zh": "今天我学习“洗”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1003",
    "german": "wecken",
    "translation": "醒来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wecken“.",
        "zh": "今天我学习“醒来”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1006",
    "german": "wegen",
    "translation": "因为",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wegen“.",
        "zh": "今天我学习“因为”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1010",
    "german": "weinen",
    "translation": "哭",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weinen“.",
        "zh": "今天我学习“哭”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1019",
    "german": "zufrieden",
    "translation": "满意",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zufrieden“.",
        "zh": "今天我学习“满意”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1022",
    "german": "zumachen",
    "translation": "关闭",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zumachen“.",
        "zh": "今天我学习“关闭”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1023",
    "german": "zusammen",
    "translation": "在一起",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zusammen“.",
        "zh": "今天我学习“在一起”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1024",
    "german": "zwischen",
    "translation": "之间",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zwischen“.",
        "zh": "今天我学习“之间”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1025",
    "german": "wollen",
    "translation": "想要",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wollen“.",
        "zh": "今天我学习“想要”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1030",
    "german": "wünschen",
    "translation": "愿望",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wünschen“.",
        "zh": "今天我学习“愿望”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1033",
    "german": "zeigen",
    "translation": "显示",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "标记",
      "改变",
      "开始"
    ],
    "distractorIds": [
      "a2-0015",
      "a2-0276",
      "a2-0278"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zeigen“.",
        "zh": "今天我学习“显示”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0101",
    "german": "blau",
    "translation": "蓝色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "棕色",
      "黄色",
      "灰色"
    ],
    "distractorIds": [
      "a2-0102",
      "a2-0103",
      "a2-0104"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „blau“.",
        "zh": "今天我学习“蓝色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0102",
    "german": "braun",
    "translation": "棕色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "黄色",
      "灰色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0103",
      "a2-0104"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „braun“.",
        "zh": "今天我学习“棕色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0103",
    "german": "gelb",
    "translation": "黄色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "灰色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0104"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gelb“.",
        "zh": "今天我学习“黄色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0104",
    "german": "grau",
    "translation": "灰色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „grau“.",
        "zh": "今天我学习“灰色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0105",
    "german": "grün",
    "translation": "绿色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „grün“.",
        "zh": "今天我学习“绿色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0106",
    "german": "lila",
    "translation": "紫色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „lila“.",
        "zh": "今天我学习“紫色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0107",
    "german": "orange",
    "translation": "橙色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „orange“.",
        "zh": "今天我学习“橙色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0108",
    "german": "rosa",
    "translation": "粉红色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „rosa“.",
        "zh": "今天我学习“粉红色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0109",
    "german": "rot",
    "translation": "红色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „rot“.",
        "zh": "今天我学习“红色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0110",
    "german": "schwarz",
    "translation": "黑色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schwarz“.",
        "zh": "今天我学习“黑色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0111",
    "german": "weiß",
    "translation": "白色",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "蓝色",
      "棕色",
      "黄色"
    ],
    "distractorIds": [
      "a2-0101",
      "a2-0102",
      "a2-0103"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weiß“.",
        "zh": "今天我学习“白色”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0199",
    "german": "täglich",
    "translation": "每日",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "白天",
      "早上",
      "中午"
    ],
    "distractorIds": [
      "a2-0200",
      "a2-0201",
      "a2-0203"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „täglich“.",
        "zh": "今天我学习“每日”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0200",
    "german": "tagsüber",
    "translation": "白天",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "早上",
      "中午"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0201",
      "a2-0203"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „tagsüber“.",
        "zh": "今天我学习“白天”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0201",
    "german": "morgens",
    "translation": "早上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "中午"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0203"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „morgens“.",
        "zh": "今天我学习“早上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0202",
    "german": "vormittags",
    "translation": "早上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "中午"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0203"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vormittags“.",
        "zh": "今天我学习“早上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0203",
    "german": "mittags",
    "translation": "中午",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „mittags“.",
        "zh": "今天我学习“中午”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0204",
    "german": "nachmittags",
    "translation": "下午",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nachmittags“.",
        "zh": "今天我学习“下午”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0205",
    "german": "abends",
    "translation": "晚上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „abends“.",
        "zh": "今天我学习“晚上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0206",
    "german": "nachts",
    "translation": "晚上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nachts“.",
        "zh": "今天我学习“晚上”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0264",
    "german": "montags",
    "translation": "周一",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „montags“.",
        "zh": "今天我学习“周一”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0265",
    "german": "dienstags",
    "translation": "周二",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dienstags“.",
        "zh": "今天我学习“周二”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0266",
    "german": "mittwochs",
    "translation": "星期三",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „mittwochs“.",
        "zh": "今天我学习“星期三”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0267",
    "german": "donnerstags",
    "translation": "星期四",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „donnerstags“.",
        "zh": "今天我学习“星期四”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0268",
    "german": "freitags",
    "translation": "星期五",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „freitags“.",
        "zh": "今天我学习“星期五”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0269",
    "german": "samstags",
    "translation": "星期六",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „samstags“.",
        "zh": "今天我学习“星期六”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0270",
    "german": "sonntags",
    "translation": "周日",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "每日",
      "白天",
      "早上"
    ],
    "distractorIds": [
      "a2-0199",
      "a2-0200",
      "a2-0201"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sonntags“.",
        "zh": "今天我学习“周日”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0001",
    "german": "ca.",
    "translation": "约",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "即",
      "ICE",
      "等等"
    ],
    "distractorIds": [
      "a2-0002",
      "a2-0003",
      "a2-0007"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ca.“.",
        "zh": "今天我学习“约”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0002",
    "german": "d.h.",
    "translation": "即",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "ICE",
      "等等"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0003",
      "a2-0007"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „d.h.“.",
        "zh": "今天我学习“即”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0003",
    "german": "ICE",
    "translation": "ICE",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "等等"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0007"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ICE“.",
        "zh": "今天我学习“ICE”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0007",
    "german": "usw.",
    "translation": "等等",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „usw.“.",
        "zh": "今天我学习“等等”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0009",
    "german": "z.B.",
    "translation": "例如",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „z.B.“.",
        "zh": "今天我学习“例如”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0277",
    "german": "anders",
    "translation": "不同的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „anders“.",
        "zh": "今天我学习“不同的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0294",
    "german": "aktiv",
    "translation": "活跃的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aktiv“.",
        "zh": "今天我学习“活跃的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0295",
    "german": "als",
    "translation": "作为",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „als“.",
        "zh": "今天我学习“作为”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0296",
    "german": "alt",
    "translation": "老",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „alt“.",
        "zh": "今天我学习“老”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0298",
    "german": "an",
    "translation": "上",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „an“.",
        "zh": "今天我学习“上”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0300",
    "german": "aus",
    "translation": "出",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aus“.",
        "zh": "今天我学习“出”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0311",
    "german": "außer",
    "translation": "除了",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „außer“.",
        "zh": "今天我学习“除了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0320",
    "german": "auch",
    "translation": "还有",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „auch“.",
        "zh": "今天我学习“还有”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0321",
    "german": "auf",
    "translation": "上",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „auf“.",
        "zh": "今天我学习“上”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0322",
    "german": "auf",
    "translation": "上",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „auf“.",
        "zh": "今天我学习“上”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0334",
    "german": "bei",
    "translation": "在",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bei“.",
        "zh": "今天我学习“在”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0335",
    "german": "beide",
    "translation": "两者",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „beide“.",
        "zh": "今天我学习“两者”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0337",
    "german": "bekannt",
    "translation": "已知的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bekannt“.",
        "zh": "今天我学习“已知的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0339",
    "german": "bequem",
    "translation": "舒适",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bequem“.",
        "zh": "今天我学习“舒适”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0372",
    "german": "bunt",
    "translation": "色彩缤纷",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bunt“.",
        "zh": "今天我学习“色彩缤纷”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0375",
    "german": "besonders",
    "translation": "尤其是",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „besonders“.",
        "zh": "今天我学习“尤其是”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0382",
    "german": "bewölkt",
    "translation": "多云",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bewölkt“.",
        "zh": "今天我学习“多云”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0388",
    "german": "bitte",
    "translation": "请",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „bitte“.",
        "zh": "今天我学习“请”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0393",
    "german": "deshalb",
    "translation": "因此",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „deshalb“.",
        "zh": "今天我学习“因此”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0394",
    "german": "deutlich",
    "translation": "清楚地",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „deutlich“.",
        "zh": "今天我学习“清楚地”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0395",
    "german": "dick",
    "translation": "厚",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dick“.",
        "zh": "今天我学习“厚”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0397",
    "german": "direkt",
    "translation": "直接",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „direkt“.",
        "zh": "今天我学习“直接”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0403",
    "german": "dringend",
    "translation": "紧急的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dringend“.",
        "zh": "今天我学习“紧急的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0413",
    "german": "da",
    "translation": "那里",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „da“.",
        "zh": "今天我学习“那里”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0416",
    "german": "damals",
    "translation": "那时",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „damals“.",
        "zh": "今天我学习“那时”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0431",
    "german": "einzel-",
    "translation": "单身",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „einzel-“.",
        "zh": "今天我学习“单身”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0437",
    "german": "endlich",
    "translation": "最后",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „endlich“.",
        "zh": "今天我学习“最后”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0438",
    "german": "eng",
    "translation": "紧",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „eng“.",
        "zh": "今天我学习“紧”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0443",
    "german": "dunkel",
    "translation": "黑暗",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dunkel“.",
        "zh": "今天我学习“黑暗”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0444",
    "german": "dünn",
    "translation": "薄",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „dünn“.",
        "zh": "今天我学习“薄”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0445",
    "german": "durch",
    "translation": "通过",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „durch“.",
        "zh": "今天我学习“通过”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0449",
    "german": "echt",
    "translation": "真实的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „echt“.",
        "zh": "今天我学习“真实的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0451",
    "german": "egal",
    "translation": "无论如何",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „egal“.",
        "zh": "今天我学习“无论如何”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0455",
    "german": "eilig",
    "translation": "匆忙地",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „eilig“.",
        "zh": "今天我学习“匆忙地”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0458",
    "german": "falsch",
    "translation": "错误的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „falsch“.",
        "zh": "今天我学习“错误的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0462",
    "german": "fantastisch",
    "translation": "太棒了",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fantastisch“.",
        "zh": "今天我学习“太棒了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0464",
    "german": "fast",
    "translation": "几乎",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „fast“.",
        "zh": "今天我学习“几乎”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0465",
    "german": "faul",
    "translation": "懒惰",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „faul“.",
        "zh": "今天我学习“懒惰”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0480",
    "german": "erst",
    "translation": "第一",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „erst“.",
        "zh": "今天我学习“第一”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0485",
    "german": "etwas",
    "translation": "某事",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „etwas“.",
        "zh": "今天我学习“某事”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0489",
    "german": "früher",
    "translation": "早些时候",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „früher“.",
        "zh": "今天我学习“早些时候”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0494",
    "german": "für",
    "translation": "为了",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „für“.",
        "zh": "今天我学习“为了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0495",
    "german": "furchtbar",
    "translation": "可怕的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „furchtbar“.",
        "zh": "今天我学习“可怕的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0510",
    "german": "freiwillig",
    "translation": "自愿的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „freiwillig“.",
        "zh": "今天我学习“自愿的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0515",
    "german": "frisch",
    "translation": "新鲜的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „frisch“.",
        "zh": "今天我学习“新鲜的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0516",
    "german": "früh",
    "translation": "早",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „früh“.",
        "zh": "今天我学习“早”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0520",
    "german": "gleich",
    "translation": "一样",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gleich“.",
        "zh": "今天我学习“一样”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0522",
    "german": "glücklich",
    "translation": "快乐",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „glücklich“.",
        "zh": "今天我学习“快乐”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0527",
    "german": "groß",
    "translation": "大",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „groß“.",
        "zh": "今天我学习“大”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0530",
    "german": "günstig",
    "translation": "便宜",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „günstig“.",
        "zh": "今天我学习“便宜”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0531",
    "german": "am",
    "translation": "上",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „am“.",
        "zh": "今天我学习“上”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0538",
    "german": "genug",
    "translation": "够了",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „genug“.",
        "zh": "今天我学习“够了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0540",
    "german": "gerade",
    "translation": "直",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „gerade“.",
        "zh": "今天我学习“直”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0541",
    "german": "am",
    "translation": "上",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „am“.",
        "zh": "今天我学习“上”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0547",
    "german": "herein",
    "translation": "在",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „herein“.",
        "zh": "今天我学习“在”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0548",
    "german": "rein",
    "translation": "纯粹的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „rein“.",
        "zh": "今天我学习“纯粹的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0552",
    "german": "herzlich",
    "translation": "热烈地",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „herzlich“.",
        "zh": "今天我学习“热烈地”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0555",
    "german": "hin / hin- / -hin",
    "translation": "到/到/-向",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hin / hin- / -hin“.",
        "zh": "今天我学习“到/到/-向”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0557",
    "german": "hinter",
    "translation": "后面",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hinter“.",
        "zh": "今天我学习“后面”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0565",
    "german": "hallo",
    "translation": "你好",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hallo“.",
        "zh": "今天我学习“你好”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0571",
    "german": "hart",
    "translation": "硬",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hart“.",
        "zh": "今天我学习“硬”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0572",
    "german": "hässlich",
    "translation": "丑陋",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hässlich“.",
        "zh": "今天我学习“丑陋”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0580",
    "german": "hell",
    "translation": "明亮",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „hell“.",
        "zh": "今天我学习“明亮”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0582",
    "german": "her / her- / -her",
    "translation": "这里/她-/-她",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „her / her- / -her“.",
        "zh": "今天我学习“这里/她-/-她”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0583",
    "german": "heraus",
    "translation": "出",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „heraus“.",
        "zh": "今天我学习“出”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0584",
    "german": "raus",
    "translation": "出",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „raus“.",
        "zh": "今天我学习“出”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0585",
    "german": "jung",
    "translation": "年轻的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „jung“.",
        "zh": "今天我学习“年轻的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0589",
    "german": "kalt",
    "translation": "冷",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kalt“.",
        "zh": "今天我学习“冷”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0599",
    "german": "immer",
    "translation": "总是",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „immer“.",
        "zh": "今天我学习“总是”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0605",
    "german": "international",
    "translation": "国际",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „international“.",
        "zh": "今天我学习“国际”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0608",
    "german": "ja",
    "translation": "是的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ja“.",
        "zh": "今天我学习“是的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0610",
    "german": "jemand",
    "translation": "某人",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „jemand“.",
        "zh": "今天我学习“某人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0613",
    "german": "kostenlos",
    "translation": "免费",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „kostenlos“.",
        "zh": "今天我学习“免费”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0638",
    "german": "und",
    "translation": "和",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „und“.",
        "zh": "今天我学习“和”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0639",
    "german": "klein",
    "translation": "小",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „klein“.",
        "zh": "今天我学习“小”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0640",
    "german": "klug",
    "translation": "聪明",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „klug“.",
        "zh": "今天我学习“聪明”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0644",
    "german": "komisch",
    "translation": "有趣的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „komisch“.",
        "zh": "今天我学习“有趣的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0645",
    "german": "komisch",
    "translation": "有趣的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „komisch“.",
        "zh": "今天我学习“有趣的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0655",
    "german": "interessant",
    "translation": "有趣的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „interessant“.",
        "zh": "今天我学习“有趣的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0658",
    "german": "lustig",
    "translation": "有趣的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „lustig“.",
        "zh": "今天我学习“有趣的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0664",
    "german": "man",
    "translation": "男人",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „man“.",
        "zh": "今天我学习“男人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0665",
    "german": "manch-",
    "translation": "一些——",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „manch-“.",
        "zh": "今天我学习“一些——”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0670",
    "german": "meist-",
    "translation": "主要是——",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „meist-“.",
        "zh": "今天我学习“主要是——”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0671",
    "german": "lange",
    "translation": "长",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „lange“.",
        "zh": "今天我学习“长”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0674",
    "german": "mittel",
    "translation": "中等",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „mittel“.",
        "zh": "今天我学习“中等”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0677",
    "german": "letzt-",
    "translation": "最后-",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „letzt-“.",
        "zh": "今天我学习“最后-”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0688",
    "german": "musste",
    "translation": "不得不",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „musste“.",
        "zh": "今天我学习“不得不”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0690",
    "german": "nach",
    "translation": "之后",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nach“.",
        "zh": "今天我学习“之后”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0695",
    "german": "nass",
    "translation": "湿的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nass“.",
        "zh": "今天我学习“湿的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0707",
    "german": "mit",
    "translation": "与",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „mit“.",
        "zh": "今天我学习“与”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0715",
    "german": "möglich",
    "translation": "可能",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „möglich“.",
        "zh": "今天我学习“可能”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0718",
    "german": "oft",
    "translation": "经常",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „oft“.",
        "zh": "今天我学习“经常”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0721",
    "german": "online",
    "translation": "在线",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „online“.",
        "zh": "今天我学习“在线”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0727",
    "german": "ein",
    "translation": "一个",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ein“.",
        "zh": "今天我学习“一个”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0735",
    "german": "nervös",
    "translation": "紧张",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nervös“.",
        "zh": "今天我学习“紧张”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0736",
    "german": "neu",
    "translation": "新的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „neu“.",
        "zh": "今天我学习“新的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0737",
    "german": "nicht",
    "translation": "不",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nicht“.",
        "zh": "今天我学习“不”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0738",
    "german": "nichts",
    "translation": "什么都没有",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nichts“.",
        "zh": "今天我学习“什么都没有”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0739",
    "german": "nie",
    "translation": "从不",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nie“.",
        "zh": "今天我学习“从不”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0740",
    "german": "niemand",
    "translation": "没有人",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „niemand“.",
        "zh": "今天我学习“没有人”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0741",
    "german": "nirgends",
    "translation": "无处可去",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nirgends“.",
        "zh": "今天我学习“无处可去”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0742",
    "german": "noch",
    "translation": "还",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „noch“.",
        "zh": "今天我学习“还”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0743",
    "german": "normal",
    "translation": "正常",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „normal“.",
        "zh": "今天我学习“正常”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0748",
    "german": "nur",
    "translation": "只是",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nur“.",
        "zh": "今天我学习“只是”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0749",
    "german": "nützlich",
    "translation": "有用的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „nützlich“.",
        "zh": "今天我学习“有用的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0751",
    "german": "oder",
    "translation": "或",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „oder“.",
        "zh": "今天我学习“或”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0773",
    "german": "plötzlich",
    "translation": "突然",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „plötzlich“.",
        "zh": "今天我学习“突然”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0781",
    "german": "pro",
    "translation": "每",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „pro“.",
        "zh": "今天我学习“每”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0784",
    "german": "rund",
    "translation": "圆形",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „rund“.",
        "zh": "今天我学习“圆形”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0794",
    "german": "scharf",
    "translation": "锋利的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „scharf“.",
        "zh": "今天我学习“锋利的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0813",
    "german": "richtig",
    "translation": "正确",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „richtig“.",
        "zh": "今天我学习“正确”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0820",
    "german": "ruhig",
    "translation": "冷静",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „ruhig“.",
        "zh": "今天我学习“冷静”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0823",
    "german": "schwach",
    "translation": "弱",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schwach“.",
        "zh": "今天我学习“弱”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0824",
    "german": "schwierig",
    "translation": "困难",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schwierig“.",
        "zh": "今天我学习“困难”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0830",
    "german": "sehr",
    "translation": "非常",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sehr“.",
        "zh": "今天我学习“非常”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0834",
    "german": "schlecht",
    "translation": "坏",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schlecht“.",
        "zh": "今天我学习“坏”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0841",
    "german": "schnell",
    "translation": "快点",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schnell“.",
        "zh": "今天我学习“快点”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0842",
    "german": "schon",
    "translation": "已经",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schon“.",
        "zh": "今天我学习“已经”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0843",
    "german": "schön",
    "translation": "美丽的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schön“.",
        "zh": "今天我学习“美丽的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0845",
    "german": "schrecklich",
    "translation": "可怕的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schrecklich“.",
        "zh": "今天我学习“可怕的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0847",
    "german": "schriftlich",
    "translation": "以书面形式",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „schriftlich“.",
        "zh": "今天我学习“以书面形式”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0871",
    "german": "so",
    "translation": "像这样",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „so“.",
        "zh": "今天我学习“像这样”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0873",
    "german": "sofort",
    "translation": "立即",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sofort“.",
        "zh": "今天我学习“立即”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0874",
    "german": "sogar",
    "translation": "甚至",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sogar“.",
        "zh": "今天我学习“甚至”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0877",
    "german": "spannend",
    "translation": "令人兴奋的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „spannend“.",
        "zh": "今天我学习“令人兴奋的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0898",
    "german": "super",
    "translation": "太棒了",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „super“.",
        "zh": "今天我学习“太棒了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0901",
    "german": "süß",
    "translation": "甜甜的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „süß“.",
        "zh": "今天我学习“甜甜的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0903",
    "german": "sympathisch",
    "translation": "富有同情心的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sympathisch“.",
        "zh": "今天我学习“富有同情心的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0912",
    "german": "unbedingt",
    "translation": "绝对",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „unbedingt“.",
        "zh": "今天我学习“绝对”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0913",
    "german": "und",
    "translation": "和",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „und“.",
        "zh": "今天我学习“和”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0934",
    "german": "über",
    "translation": "关于",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „über“.",
        "zh": "今天我学习“关于”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0941",
    "german": "um",
    "translation": "周围",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „um“.",
        "zh": "今天我学习“周围”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0946",
    "german": "von",
    "translation": "来自",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „von“.",
        "zh": "今天我学习“来自”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0947",
    "german": "vor",
    "translation": "之前",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vor“.",
        "zh": "今天我学习“之前”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0948",
    "german": "vorbei",
    "translation": "结束",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vorbei“.",
        "zh": "今天我学习“结束”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0951",
    "german": "vorsichtig",
    "translation": "仔细地",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vorsichtig“.",
        "zh": "今天我学习“仔细地”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0953",
    "german": "vorwärts",
    "translation": "前进",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vorwärts“.",
        "zh": "今天我学习“前进”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0954",
    "german": "wach",
    "translation": "醒着",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wach“.",
        "zh": "今天我学习“醒着”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0957",
    "german": "wahr",
    "translation": "真实",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wahr“.",
        "zh": "今天我学习“真实”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0960",
    "german": "wann",
    "translation": "当",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wann“.",
        "zh": "今天我学习“当”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0978",
    "german": "vielleicht",
    "translation": "也许",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „vielleicht“.",
        "zh": "今天我学习“也许”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0980",
    "german": "voll",
    "translation": "满",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „voll“.",
        "zh": "今天我学习“满”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0982",
    "german": "sie",
    "translation": "她",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „sie“.",
        "zh": "今天我学习“她”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0985",
    "german": "wie",
    "translation": "喜欢",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wie“.",
        "zh": "今天我学习“喜欢”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0986",
    "german": "wieder",
    "translation": "再次",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wieder“.",
        "zh": "今天我学习“再次”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0990",
    "german": "wirklich",
    "translation": "真的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wirklich“.",
        "zh": "今天我学习“真的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0993",
    "german": "wo",
    "translation": "哪里",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wo“.",
        "zh": "今天我学习“哪里”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0994",
    "german": "woher",
    "translation": "从哪里来",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „woher“.",
        "zh": "今天我学习“从哪里来”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0995",
    "german": "wohin",
    "translation": "哪里",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wohin“.",
        "zh": "今天我学习“哪里”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1004",
    "german": "weg/weg-",
    "translation": "离开/离开-",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weg/weg-“.",
        "zh": "今天我学习“离开/离开-”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1007",
    "german": "weiblich",
    "translation": "女",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weiblich“.",
        "zh": "今天我学习“女”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1008",
    "german": "weich",
    "translation": "软的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weich“.",
        "zh": "今天我学习“软的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1011",
    "german": "weit",
    "translation": "远",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weit“.",
        "zh": "今天我学习“远”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1012",
    "german": "weiter",
    "translation": "进一步",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „weiter“.",
        "zh": "今天我学习“进一步”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1014",
    "german": "wenigstens",
    "translation": "至少",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wenigstens“.",
        "zh": "今天我学习“至少”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1021",
    "german": "zuletzt",
    "translation": "最后",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „zuletzt“.",
        "zh": "今天我学习“最后”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-1028",
    "german": "wunderbar",
    "translation": "太棒了",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "约",
      "即",
      "ICE"
    ],
    "distractorIds": [
      "a2-0001",
      "a2-0002",
      "a2-0003"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „wunderbar“.",
        "zh": "今天我学习“太棒了”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0024",
    "german": "Angestellte",
    "translation": "员工",
    "kind": "noun",
    "plural": "-n",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "医生",
      "实习生",
      "作者"
    ],
    "distractorIds": [
      "a2-0025",
      "a2-0027",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Angestellte“.",
        "zh": "今天我学习“员工”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0025",
    "german": "Arzt",
    "translation": "医生",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "实习生",
      "作者"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0027",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Arzt“.",
        "zh": "今天我学习“医生”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0026",
    "german": "Ärztin",
    "translation": "医生",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "实习生",
      "作者"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0027",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ärztin“.",
        "zh": "今天我学习“医生”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0027",
    "german": "Auszubildende",
    "translation": "实习生",
    "kind": "noun",
    "plural": "-n",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "作者"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Auszubildende“.",
        "zh": "今天我学习“实习生”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0028",
    "german": "Autor",
    "translation": "作者",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Autor“.",
        "zh": "今天我学习“作者”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0029",
    "german": "Autorin",
    "translation": "作者",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Autorin“.",
        "zh": "今天我学习“作者”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0030",
    "german": "Babysitter",
    "translation": "保姆",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Babysitter“.",
        "zh": "今天我学习“保姆”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0031",
    "german": "Bäcker",
    "translation": "贝克",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bäcker“.",
        "zh": "今天我学习“贝克”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0032",
    "german": "Bäckerin",
    "translation": "贝克",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bäckerin“.",
        "zh": "今天我学习“贝克”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0033",
    "german": "Doktor",
    "translation": "医生",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "实习生",
      "作者"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0027",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Doktor“.",
        "zh": "今天我学习“医生”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0034",
    "german": "Doktorin",
    "translation": "医生",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "实习生",
      "作者"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0027",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Doktorin“.",
        "zh": "今天我学习“医生”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0035",
    "german": "Fahrer",
    "translation": "司机",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fahrer“.",
        "zh": "今天我学习“司机”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0036",
    "german": "Fahrerin",
    "translation": "司机",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Fahrerin“.",
        "zh": "今天我学习“司机”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0037",
    "german": "Friseur",
    "translation": "美发师",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Friseur“.",
        "zh": "今天我学习“美发师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0038",
    "german": "Friseurin",
    "translation": "美发师",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Friseurin“.",
        "zh": "今天我学习“美发师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0039",
    "german": "Handwerker",
    "translation": "工匠",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Handwerker“.",
        "zh": "今天我学习“工匠”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0040",
    "german": "Handwerkerin",
    "translation": "女工匠",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Handwerkerin“.",
        "zh": "今天我学习“女工匠”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0041",
    "german": "Hausmann",
    "translation": "豪斯曼",
    "kind": "noun",
    "article": "der",
    "plural": "¨-er",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hausmann“.",
        "zh": "今天我学习“豪斯曼”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0042",
    "german": "Hausfrau",
    "translation": "家庭主妇",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Hausfrau“.",
        "zh": "今天我学习“家庭主妇”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0043",
    "german": "Journalist",
    "translation": "记者",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Journalist“.",
        "zh": "今天我学习“记者”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0044",
    "german": "Journalistin",
    "translation": "记者",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Journalistin“.",
        "zh": "今天我学习“记者”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0045",
    "german": "Kaufmann",
    "translation": "商人",
    "kind": "noun",
    "article": "der",
    "plural": "Kaufleute",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kaufmann“.",
        "zh": "今天我学习“商人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0046",
    "german": "Kauffrau",
    "translation": "商人",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kauffrau“.",
        "zh": "今天我学习“商人”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0047",
    "german": "Kellner",
    "translation": "服务员",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kellner“.",
        "zh": "今天我学习“服务员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0048",
    "german": "Kellnerin",
    "translation": "女服务员",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kellnerin“.",
        "zh": "今天我学习“女服务员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0049",
    "german": "Koch",
    "translation": "库克",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Koch“.",
        "zh": "今天我学习“库克”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0050",
    "german": "Köchin",
    "translation": "厨师",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Köchin“.",
        "zh": "今天我学习“厨师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0051",
    "german": "Krankenpfleger",
    "translation": "护士",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Krankenpfleger“.",
        "zh": "今天我学习“护士”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0052",
    "german": "Krankenschwester",
    "translation": "护士",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Krankenschwester“.",
        "zh": "今天我学习“护士”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0053",
    "german": "Künstler",
    "translation": "艺术家",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Künstler“.",
        "zh": "今天我学习“艺术家”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0054",
    "german": "Künstlerin",
    "translation": "艺术家",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Künstlerin“.",
        "zh": "今天我学习“艺术家”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0055",
    "german": "Lehrer",
    "translation": "老师",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Lehrer“.",
        "zh": "今天我学习“老师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0056",
    "german": "Lehrerin",
    "translation": "老师",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Lehrerin“.",
        "zh": "今天我学习“老师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0057",
    "german": "Mechaniker",
    "translation": "机械师",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mechaniker“.",
        "zh": "今天我学习“机械师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0058",
    "german": "Mechanikerin",
    "translation": "机械师",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mechanikerin“.",
        "zh": "今天我学习“机械师”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0059",
    "german": "Model",
    "translation": "型号",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Model“.",
        "zh": "今天我学习“型号”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0060",
    "german": "Musiker",
    "translation": "音乐家",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Musiker“.",
        "zh": "今天我学习“音乐家”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0061",
    "german": "Musikerin",
    "translation": "音乐家",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Musikerin“.",
        "zh": "今天我学习“音乐家”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0062",
    "german": "Polizist",
    "translation": "警察",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Polizist“.",
        "zh": "今天我学习“警察”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0063",
    "german": "Polizistin",
    "translation": "女警察",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Polizistin“.",
        "zh": "今天我学习“女警察”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0064",
    "german": "Rentner",
    "translation": "养老金领取者",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rentner“.",
        "zh": "今天我学习“养老金领取者”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0065",
    "german": "Rentnerin",
    "translation": "养老金领取者",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Rentnerin“.",
        "zh": "今天我学习“养老金领取者”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0066",
    "german": "Sänger",
    "translation": "歌手",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sänger“.",
        "zh": "今天我学习“歌手”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0067",
    "german": "Sängerin",
    "translation": "歌手",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sängerin“.",
        "zh": "今天我学习“歌手”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0068",
    "german": "Schauspieler",
    "translation": "演员",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schauspieler“.",
        "zh": "今天我学习“演员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0069",
    "german": "Schauspielerin",
    "translation": "女演员",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Schauspielerin“.",
        "zh": "今天我学习“女演员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0070",
    "german": "Techniker",
    "translation": "技术员",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Techniker“.",
        "zh": "今天我学习“技术员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0071",
    "german": "Technikerin",
    "translation": "技术员",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Technikerin“.",
        "zh": "今天我学习“技术员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0072",
    "german": "Verkäufer",
    "translation": "卖家",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Verkäufer“.",
        "zh": "今天我学习“卖家”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0073",
    "german": "Verkäuferin",
    "translation": "女售货员",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Verkäuferin“.",
        "zh": "今天我学习“女售货员”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0271",
    "german": "Arbeitstag",
    "translation": "工作日",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Arbeitstag“.",
        "zh": "今天我学习“工作日”这个词。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a2-0301",
    "german": "Ausbildung",
    "translation": "培训",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Ausbildung“.",
        "zh": "今天我学习“培训”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0318",
    "german": "Arbeit",
    "translation": "工作",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Arbeit“.",
        "zh": "今天我学习“工作”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0343",
    "german": "Beruf",
    "translation": "职业",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Beruf“.",
        "zh": "今天我学习“职业”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0373",
    "german": "Büro",
    "translation": "办公室",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Büro“.",
        "zh": "今天我学习“办公室”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0409",
    "german": "Chef",
    "translation": "老板",
    "kind": "noun",
    "article": "der",
    "plural": "-s /",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Chef“.",
        "zh": "今天我学习“老板”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0410",
    "german": "Chefin",
    "translation": "老板",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Chefin“.",
        "zh": "今天我学习“老板”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0474",
    "german": "Firma",
    "translation": "公司",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Firma“.",
        "zh": "今天我学习“公司”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0643",
    "german": "Kollegin",
    "translation": "同事",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Kollegin“.",
        "zh": "今天我学习“同事”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0708",
    "german": "Mitarbeiter",
    "translation": "员工",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "医生",
      "实习生",
      "作者"
    ],
    "distractorIds": [
      "a2-0025",
      "a2-0027",
      "a2-0028"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Mitarbeiter“.",
        "zh": "今天我学习“员工”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0777",
    "german": "Praktikum",
    "translation": "实习",
    "kind": "noun",
    "article": "das",
    "plural": "-a",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "员工",
      "医生",
      "实习生"
    ],
    "distractorIds": [
      "a2-0024",
      "a2-0025",
      "a2-0027"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Praktikum“.",
        "zh": "今天我学习“实习”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0317",
    "german": "arbeiten",
    "translation": "工作",
    "kind": "verb",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "租金",
      "直播",
      "吃"
    ],
    "distractorIds": [
      "a2-0704",
      "a2-0996",
      "a2-0483"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „arbeiten“.",
        "zh": "今天我学习“工作”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0353",
    "german": "Bank",
    "translation": "长凳",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "互联网",
      "警察",
      "海报"
    ],
    "distractorIds": [
      "a2-0606",
      "a2-0774",
      "a2-0776"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bank“.",
        "zh": "今天我学习“长凳”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0354",
    "german": "Bank",
    "translation": "长凳",
    "kind": "noun",
    "article": "die",
    "plural": "¨-e",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "互联网",
      "警察",
      "海报"
    ],
    "distractorIds": [
      "a2-0606",
      "a2-0774",
      "a2-0776"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Bank“.",
        "zh": "今天我学习“长凳”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0606",
    "german": "Internet",
    "translation": "互联网",
    "kind": "noun",
    "article": "das",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "长凳",
      "警察",
      "海报"
    ],
    "distractorIds": [
      "a2-0353",
      "a2-0774",
      "a2-0776"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Internet“.",
        "zh": "今天我学习“互联网”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0774",
    "german": "Polizei",
    "translation": "警察",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "长凳",
      "互联网",
      "海报"
    ],
    "distractorIds": [
      "a2-0353",
      "a2-0606",
      "a2-0776"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Polizei“.",
        "zh": "今天我学习“警察”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0776",
    "german": "Poster",
    "translation": "海报",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "长凳",
      "互联网",
      "警察"
    ],
    "distractorIds": [
      "a2-0353",
      "a2-0606",
      "a2-0774"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Poster“.",
        "zh": "今天我学习“海报”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0832",
    "german": "Service",
    "translation": "服务",
    "kind": "noun",
    "article": "der",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "长凳",
      "互联网",
      "警察"
    ],
    "distractorIds": [
      "a2-0353",
      "a2-0606",
      "a2-0774"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Service“.",
        "zh": "今天我学习“服务”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0885",
    "german": "Telefon",
    "translation": "电话",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "长凳",
      "互联网",
      "警察"
    ],
    "distractorIds": [
      "a2-0353",
      "a2-0606",
      "a2-0774"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Telefon“.",
        "zh": "今天我学习“电话”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0356",
    "german": "Baum",
    "translation": "树",
    "kind": "noun",
    "article": "der",
    "plural": "¨-e",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "自然",
      "雨",
      "太阳"
    ],
    "distractorIds": [
      "a2-0696",
      "a2-0765",
      "a2-0876"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Baum“.",
        "zh": "今天我学习“树”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0696",
    "german": "Natur",
    "translation": "自然",
    "kind": "noun",
    "article": "die",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "雨",
      "太阳"
    ],
    "distractorIds": [
      "a2-0356",
      "a2-0765",
      "a2-0876"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Natur“.",
        "zh": "今天我学习“自然”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0765",
    "german": "Regen",
    "translation": "雨",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "自然",
      "太阳"
    ],
    "distractorIds": [
      "a2-0356",
      "a2-0696",
      "a2-0876"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Regen“.",
        "zh": "今天我学习“雨”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0876",
    "german": "Sonne",
    "translation": "太阳",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "自然",
      "雨"
    ],
    "distractorIds": [
      "a2-0356",
      "a2-0696",
      "a2-0765"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „Sonne“.",
        "zh": "今天我学习“太阳”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0399",
    "german": "diskutieren",
    "translation": "讨论",
    "kind": "verb",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "租金",
      "直播",
      "吃"
    ],
    "distractorIds": [
      "a2-0704",
      "a2-0996",
      "a2-0483"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „diskutieren“.",
        "zh": "今天我学习“讨论”这个词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a2-0327",
    "german": "aufregend",
    "translation": "令人兴奋的",
    "kind": "other",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "友好的",
      "生病了",
      "温暖"
    ],
    "distractorIds": [
      "a2-0514",
      "a2-0614",
      "a2-0961"
    ],
    "examples": [
      {
        "de": "Heute lerne ich „aufregend“.",
        "zh": "今天我学习“令人兴奋的”这个词。"
      }
    ],
    "sourceEntryType": "main"
  }
] as const satisfies readonly Word[];

export const A2_BY_ID = new Map<string, Word>(
  A2_WORDS.map((word) => [word.id, word]),
);

export const A2_VALID_IDS = new Set<string>(A2_WORDS.map((word) => word.id));

export function getDisplayWord(word: Word) {
  return word.article ? `${word.article} ${word.german}` : word.german;
}

export const A2_CONTENT = {
  manifest: A2_MANIFEST,
  words: A2_WORDS,
  byId: A2_BY_ID,
} as const;

export type { Word } from "../types.ts";
