import type { A1RuntimeManifest, Word } from "../types.ts";

export const A1_MANIFEST = {
  "schemaVersion": 1,
  "contentVersion": "2026.07.26-por9.1",
  "source": {
    "sourceId": "goethe-a1-start-deutsch-1",
    "url": "https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf",
    "retrievedAt": "2026-07-26",
    "sha256": "45fb648bc0ac02338f7898cae065953e320ab72ed0c14e13e0deffe6f1c5d64e",
    "pages": 29,
    "bytes": 712341
  },
  "rights": {
    "sourceList": "approved",
    "examples": "editorial-only"
  }
} as const satisfies A1RuntimeManifest;

export const A1_WORDS = [
  {
    "id": "tisch",
    "german": "Tisch",
    "translation": "桌子",
    "kind": "noun",
    "article": "der",
    "plural": "die Tische",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "椅子",
      "窗户",
      "门"
    ],
    "distractorIds": [
      "stuhl",
      "fenster",
      "tuer"
    ],
    "examples": [
      {
        "de": "Der Tisch ist aus Holz.",
        "zh": "这张桌子是木制的。"
      },
      {
        "de": "Das Buch liegt auf dem Tisch.",
        "zh": "书放在桌子上。"
      },
      {
        "de": "Wir sitzen am Tisch.",
        "zh": "我们坐在桌边。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "stuhl",
    "german": "Stuhl",
    "translation": "椅子",
    "kind": "noun",
    "article": "der",
    "plural": "die Stühle",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "窗户",
      "门"
    ],
    "distractorIds": [
      "tisch",
      "fenster",
      "tuer"
    ],
    "examples": [
      {
        "de": "Der Stuhl ist bequem.",
        "zh": "这把椅子很舒服。"
      },
      {
        "de": "Bitte nimm einen Stuhl.",
        "zh": "请拿一把椅子。"
      },
      {
        "de": "Die Katze sitzt auf dem Stuhl.",
        "zh": "猫坐在椅子上。"
      }
    ],
    "sourceEntryType": "project-extension"
  },
  {
    "id": "fenster",
    "german": "Fenster",
    "translation": "窗户",
    "kind": "noun",
    "article": "das",
    "plural": "die Fenster",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "门"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "tuer"
    ],
    "examples": [
      {
        "de": "Das Fenster ist offen.",
        "zh": "窗户开着。"
      },
      {
        "de": "Ich sehe durch das Fenster.",
        "zh": "我透过窗户看。"
      },
      {
        "de": "Mach bitte das Fenster zu.",
        "zh": "请把窗户关上。"
      }
    ],
    "sourceEntryType": "project-extension"
  },
  {
    "id": "tuer",
    "german": "Tür",
    "translation": "门",
    "kind": "noun",
    "article": "die",
    "plural": "die Türen",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Die Tür ist geschlossen.",
        "zh": "门关着。"
      },
      {
        "de": "Jemand steht vor der Tür.",
        "zh": "有人站在门前。"
      },
      {
        "de": "Öffne bitte die Tür.",
        "zh": "请把门打开。"
      }
    ],
    "sourceEntryType": "project-extension"
  },
  {
    "id": "kueche",
    "german": "Küche",
    "translation": "厨房",
    "kind": "noun",
    "article": "die",
    "plural": "die Küchen",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "面包",
      "苹果",
      "水"
    ],
    "distractorIds": [
      "brot",
      "apfel",
      "wasser"
    ],
    "examples": [
      {
        "de": "Die Küche ist klein.",
        "zh": "厨房很小。"
      },
      {
        "de": "Wir kochen in der Küche.",
        "zh": "我们在厨房做饭。"
      },
      {
        "de": "In der Küche riecht es gut.",
        "zh": "厨房里闻起来很香。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "brot",
    "german": "Brot",
    "translation": "面包",
    "kind": "noun",
    "article": "das",
    "plural": "die Brote",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "苹果",
      "水"
    ],
    "distractorIds": [
      "kueche",
      "apfel",
      "wasser"
    ],
    "examples": [
      {
        "de": "Das Brot ist frisch.",
        "zh": "面包很新鲜。"
      },
      {
        "de": "Ich esse Brot zum Frühstück.",
        "zh": "我早餐吃面包。"
      },
      {
        "de": "Wir kaufen ein Brot.",
        "zh": "我们买一个面包。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "apfel",
    "german": "Apfel",
    "translation": "苹果",
    "kind": "noun",
    "article": "der",
    "plural": "die Äpfel",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "水"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "wasser"
    ],
    "examples": [
      {
        "de": "Der Apfel ist rot.",
        "zh": "苹果是红色的。"
      },
      {
        "de": "Sie isst einen Apfel.",
        "zh": "她吃一个苹果。"
      },
      {
        "de": "Äpfel sind gesund.",
        "zh": "苹果很健康。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "wasser",
    "german": "Wasser",
    "translation": "水",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Das Wasser ist kalt.",
        "zh": "水是凉的。"
      },
      {
        "de": "Ich trinke viel Wasser.",
        "zh": "我喝很多水。"
      },
      {
        "de": "Ein Glas Wasser, bitte.",
        "zh": "请给我一杯水。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "kaffee",
    "german": "Kaffee",
    "translation": "咖啡",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Der Kaffee ist heiß.",
        "zh": "咖啡很烫。"
      },
      {
        "de": "Möchtest du einen Kaffee?",
        "zh": "你想喝杯咖啡吗？"
      },
      {
        "de": "Ich trinke Kaffee ohne Zucker.",
        "zh": "我喝不加糖的咖啡。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "familie",
    "german": "Familie",
    "translation": "家庭",
    "kind": "noun",
    "article": "die",
    "plural": "die Familien",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "朋友（男）",
      "手臂",
      "男医生"
    ],
    "distractorIds": [
      "freund",
      "a1-alpha-0046",
      "a1-alpha-0047"
    ],
    "examples": [
      {
        "de": "Meine Familie lebt in Berlin.",
        "zh": "我的家人住在柏林。"
      },
      {
        "de": "Die Familie isst zusammen.",
        "zh": "这家人一起吃饭。"
      },
      {
        "de": "Wir besuchen unsere Familie.",
        "zh": "我们去看望家人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "freund",
    "german": "Freund",
    "translation": "朋友（男）",
    "kind": "noun",
    "article": "der",
    "plural": "die Freunde",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "手臂",
      "男医生"
    ],
    "distractorIds": [
      "familie",
      "a1-alpha-0046",
      "a1-alpha-0047"
    ],
    "examples": [
      {
        "de": "Paul ist mein Freund.",
        "zh": "保罗是我的朋友。"
      },
      {
        "de": "Ich treffe einen Freund.",
        "zh": "我要见一位朋友。"
      },
      {
        "de": "Gute Freunde helfen einander.",
        "zh": "好朋友互相帮助。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "schule",
    "german": "Schule",
    "translation": "学校",
    "kind": "noun",
    "article": "die",
    "plural": "die Schulen",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "书",
      "城市",
      "寄件人"
    ],
    "distractorIds": [
      "buch",
      "stadt",
      "a1-alpha-0007"
    ],
    "examples": [
      {
        "de": "Die Schule beginnt um acht.",
        "zh": "学校八点开始上课。"
      },
      {
        "de": "Mein Sohn geht zur Schule.",
        "zh": "我的儿子去上学。"
      },
      {
        "de": "Die Schule ist heute geschlossen.",
        "zh": "学校今天关门。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "buch",
    "german": "Buch",
    "translation": "书",
    "kind": "noun",
    "article": "das",
    "plural": "die Bücher",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "城市",
      "寄件人"
    ],
    "distractorIds": [
      "schule",
      "stadt",
      "a1-alpha-0007"
    ],
    "examples": [
      {
        "de": "Das Buch ist interessant.",
        "zh": "这本书很有趣。"
      },
      {
        "de": "Ich lese ein deutsches Buch.",
        "zh": "我读一本德语书。"
      },
      {
        "de": "Das Buch liegt im Regal.",
        "zh": "书放在书架上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "stadt",
    "german": "Stadt",
    "translation": "城市",
    "kind": "noun",
    "article": "die",
    "plural": "die Städte",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "寄件人"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "a1-alpha-0007"
    ],
    "examples": [
      {
        "de": "Die Stadt ist sehr alt.",
        "zh": "这座城市很古老。"
      },
      {
        "de": "Wir fahren in die Stadt.",
        "zh": "我们开车进城。"
      },
      {
        "de": "In der Stadt gibt es viel zu sehen.",
        "zh": "城里有很多可看的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "bahnhof",
    "german": "Bahnhof",
    "translation": "火车站",
    "kind": "noun",
    "article": "der",
    "plural": "die Bahnhöfe",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "出发，启程",
      "抵达",
      "电梯"
    ],
    "distractorIds": [
      "a1-alpha-0004",
      "a1-alpha-0023",
      "a1-alpha-0054"
    ],
    "examples": [
      {
        "de": "Der Bahnhof ist nicht weit.",
        "zh": "火车站不远。"
      },
      {
        "de": "Wir treffen uns am Bahnhof.",
        "zh": "我们在火车站见面。"
      },
      {
        "de": "Der Zug wartet im Bahnhof.",
        "zh": "火车在车站等候。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "lernen",
    "german": "lernen",
    "translation": "学习",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "居住",
      "走；去",
      "说；交谈"
    ],
    "distractorIds": [
      "wohnen",
      "gehen",
      "sprechen"
    ],
    "examples": [
      {
        "de": "Ich lerne Deutsch.",
        "zh": "我学习德语。"
      },
      {
        "de": "Wir lernen zusammen.",
        "zh": "我们一起学习。"
      },
      {
        "de": "Er lernt jeden Abend.",
        "zh": "他每天晚上学习。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "arbeiten",
    "german": "arbeiten",
    "translation": "工作",
    "kind": "verb",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "挣得，赚得",
      "学习",
      "居住"
    ],
    "distractorIds": [
      "a1-alpha-0621",
      "lernen",
      "wohnen"
    ],
    "examples": [
      {
        "de": "Ich arbeite in Hamburg.",
        "zh": "我在汉堡工作。"
      },
      {
        "de": "Sie arbeitet heute zu Hause.",
        "zh": "她今天在家工作。"
      },
      {
        "de": "Wir arbeiten bis fünf Uhr.",
        "zh": "我们工作到五点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "wohnen",
    "german": "wohnen",
    "translation": "居住",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "走；去",
      "说；交谈"
    ],
    "distractorIds": [
      "lernen",
      "gehen",
      "sprechen"
    ],
    "examples": [
      {
        "de": "Ich wohne in München.",
        "zh": "我住在慕尼黑。"
      },
      {
        "de": "Wo wohnst du?",
        "zh": "你住在哪里？"
      },
      {
        "de": "Meine Eltern wohnen auf dem Land.",
        "zh": "我的父母住在乡下。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "essen",
    "german": "essen",
    "translation": "吃",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "喝",
      "拼写",
      "吃早饭"
    ],
    "distractorIds": [
      "trinken",
      "a1-alpha-0136",
      "a1-alpha-0247"
    ],
    "examples": [
      {
        "de": "Wir essen um sieben Uhr.",
        "zh": "我们七点吃饭。"
      },
      {
        "de": "Er isst gern Gemüse.",
        "zh": "他喜欢吃蔬菜。"
      },
      {
        "de": "Was möchtest du essen?",
        "zh": "你想吃什么？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "trinken",
    "german": "trinken",
    "translation": "喝",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "吃",
      "拼写",
      "吃早饭"
    ],
    "distractorIds": [
      "essen",
      "a1-alpha-0136",
      "a1-alpha-0247"
    ],
    "examples": [
      {
        "de": "Ich trinke Tee.",
        "zh": "我喝茶。"
      },
      {
        "de": "Trinkst du genug Wasser?",
        "zh": "你喝足够的水吗？"
      },
      {
        "de": "Wir trinken zusammen Kaffee.",
        "zh": "我们一起喝咖啡。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "gehen",
    "german": "gehen",
    "translation": "走；去",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "说；交谈"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "sprechen"
    ],
    "examples": [
      {
        "de": "Ich gehe nach Hause.",
        "zh": "我回家。"
      },
      {
        "de": "Wir gehen zu Fuß.",
        "zh": "我们步行去。"
      },
      {
        "de": "Gehst du heute zur Arbeit?",
        "zh": "你今天去上班吗？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "fahren",
    "german": "fahren",
    "translation": "乘车；驾驶",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "出发，启程",
      "骑自行车",
      "旅游"
    ],
    "distractorIds": [
      "a1-alpha-0003",
      "a1-alpha-0493",
      "a1-alpha-0501"
    ],
    "examples": [
      {
        "de": "Ich fahre mit dem Bus.",
        "zh": "我乘公交车。"
      },
      {
        "de": "Sie fährt gern Fahrrad.",
        "zh": "她喜欢骑自行车。"
      },
      {
        "de": "Wir fahren morgen nach Köln.",
        "zh": "我们明天去科隆。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "sprechen",
    "german": "sprechen",
    "translation": "说；交谈",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Sprechen Sie Deutsch?",
        "zh": "您会说德语吗？"
      },
      {
        "de": "Wir sprechen über die Reise.",
        "zh": "我们谈论这次旅行。"
      },
      {
        "de": "Bitte sprich langsam.",
        "zh": "请说慢一点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "verstehen",
    "german": "verstehen",
    "translation": "理解；听懂",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Ich verstehe die Frage.",
        "zh": "我理解这个问题。"
      },
      {
        "de": "Verstehst du mich?",
        "zh": "你听懂我了吗？"
      },
      {
        "de": "Er versteht nur ein bisschen Deutsch.",
        "zh": "他只懂一点德语。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0046",
    "german": "Arm",
    "translation": "手臂",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "男医生"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0047"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Arm.",
        "zh": "今天我们谈论手臂。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0077",
    "german": "Bad",
    "translation": "浴室",
    "kind": "noun",
    "article": "das",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Bad.",
        "zh": "今天我们谈论浴室。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0084",
    "german": "Banane",
    "translation": "香蕉",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Banane.",
        "zh": "今天我们谈论香蕉。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0003",
    "german": "abfahren",
    "translation": "出发，启程",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "乘车；驾驶",
      "骑自行车",
      "旅游"
    ],
    "distractorIds": [
      "fahren",
      "a1-alpha-0493",
      "a1-alpha-0501"
    ],
    "examples": [
      {
        "de": "Wir möchten heute abfahren.",
        "zh": "我们今天想出发，启程。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0001",
    "german": "ab",
    "translation": "从 … 起",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在……旁；向",
      "在……上；到……上",
      "来自从 ... 里出来"
    ],
    "distractorIds": [
      "a1-alpha-0015",
      "a1-alpha-0049",
      "a1-alpha-0056"
    ],
    "examples": [
      {
        "de": "Das Wort „ab“ bedeutet hier „从 … 起“.",
        "zh": "“ab”在这里表示“从 … 起”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0043",
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
      "工作场所",
      "公务员",
      "职业"
    ],
    "distractorIds": [
      "a1-alpha-0045",
      "a1-alpha-0089",
      "a1-alpha-0101"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Arbeit.",
        "zh": "今天我们谈论工作。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0017",
    "german": "Angebot",
    "translation": "特价商品",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "金钱（单数形式）",
      "商店",
      "菜单"
    ],
    "distractorIds": [
      "a1-alpha-0264",
      "a1-alpha-0270",
      "a1-alpha-0350"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Angebot.",
        "zh": "今天我们谈论特价商品。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0009",
    "german": "Adresse",
    "translation": "地址",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "信息；问讯",
      "银行",
      "信件"
    ],
    "distractorIds": [
      "a1-alpha-0060",
      "a1-alpha-0085",
      "a1-alpha-0128"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Adresse.",
        "zh": "今天我们谈论地址。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0088",
    "german": "Baum",
    "translation": "树",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "花朵",
      "摄氏度",
      "海，海洋"
    ],
    "distractorIds": [
      "a1-alpha-0123",
      "a1-alpha-0286",
      "a1-alpha-0424"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Baum.",
        "zh": "今天我们谈论树。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0095",
    "german": "Beispiel",
    "translation": "例子",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "迪斯科舞厅",
      "庆祝；节日相关",
      "照片"
    ],
    "distractorIds": [
      "a1-alpha-0159",
      "a1-alpha-0217",
      "a1-alpha-0237"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Beispiel.",
        "zh": "今天我们谈论例子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0047",
    "german": "Arzt",
    "translation": "男医生",
    "kind": "noun",
    "article": "der",
    "plural": "-Ä, e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Arzt.",
        "zh": "今天我们谈论男医生。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0078",
    "german": "baden",
    "translation": "洗澡",
    "kind": "verb",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "租用",
      "出租",
      "学习"
    ],
    "distractorIds": [
      "a1-alpha-0429",
      "a1-alpha-0626",
      "lernen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute baden.",
        "zh": "我们今天想洗澡。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0110",
    "german": "Bier",
    "translation": "啤酒（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Bier.",
        "zh": "今天我们谈论啤酒（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0004",
    "german": "Abfahrt",
    "translation": "出发，启程",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "抵达",
      "电梯"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0023",
      "a1-alpha-0054"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Abfahrt.",
        "zh": "今天我们谈论出发，启程。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0002",
    "german": "aber",
    "translation": "可是",
    "kind": "conjunction",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "也就是说，可见",
      "究竟因为",
      "或者"
    ],
    "distractorIds": [
      "a1-alpha-0012",
      "a1-alpha-0154",
      "a1-alpha-0463"
    ],
    "examples": [
      {
        "de": "Das Wort „aber“ bedeutet hier „可是“.",
        "zh": "“aber”在这里表示“可是”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0044",
    "german": "arbeitslos",
    "translation": "失业的",
    "kind": "adjective",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "自动的",
      "老的旧的",
      "黑色"
    ],
    "distractorIds": [
      "a1-alpha-0074",
      "a1-alpha-0013",
      "a1-group-colors-119"
    ],
    "examples": [
      {
        "de": "Das Wort „arbeitslos“ bedeutet hier „失业的“.",
        "zh": "“arbeitslos”在这里表示“失业的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0106",
    "german": "bestellen",
    "translation": "点",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "付款",
      "购物，采购",
      "邀请"
    ],
    "distractorIds": [
      "a1-alpha-0109",
      "a1-alpha-0182",
      "a1-alpha-0183"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bestellen.",
        "zh": "我们今天想点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0060",
    "german": "Auskunft",
    "translation": "信息；问讯",
    "kind": "noun",
    "article": "die",
    "plural": "-ü, e",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "银行",
      "信件"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0085",
      "a1-alpha-0128"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Auskunft.",
        "zh": "今天我们谈论信息；问讯。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0123",
    "german": "Blume",
    "translation": "花朵",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "摄氏度",
      "海，海洋"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0286",
      "a1-alpha-0424"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Blume.",
        "zh": "今天我们谈论花朵。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0096",
    "german": "zum Beispiel/z. B.",
    "translation": "例如",
    "kind": "phrase",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „zum Beispiel/z. B.“ bedeutet hier „例如“.",
        "zh": "“zum Beispiel/z. B.”在这里表示“例如”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0055",
    "german": "Auge",
    "translation": "眼睛",
    "kind": "noun",
    "article": "das",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Auge.",
        "zh": "今天我们谈论眼睛。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0083",
    "german": "Balkon",
    "translation": "阳台",
    "kind": "noun",
    "article": "der",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Balkon.",
        "zh": "今天我们谈论阳台。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0113",
    "german": "Birne",
    "translation": "梨子",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Birne.",
        "zh": "今天我们谈论梨子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0023",
    "german": "Ankunft",
    "translation": "抵达",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "电梯"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0054"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Ankunft.",
        "zh": "今天我们谈论抵达。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0005",
    "german": "abgeben",
    "translation": "交出；递交",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute abgeben.",
        "zh": "我们今天想交出；递交。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0045",
    "german": "Arbeitsplatz",
    "translation": "工作场所",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "公务员",
      "职业"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0089",
      "a1-alpha-0101"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Arbeitsplatz.",
        "zh": "今天我们谈论工作场所。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0109",
    "german": "bezahlen",
    "translation": "付款",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点",
      "购物，采购",
      "邀请"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0182",
      "a1-alpha-0183"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bezahlen.",
        "zh": "我们今天想付款。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0085",
    "german": "Bank",
    "translation": "银行",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "信件"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0128"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Bank.",
        "zh": "今天我们谈论银行。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0286",
    "german": "Grad (Celsius)",
    "translation": "摄氏度",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "海，海洋"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0424"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Grad (Celsius).",
        "zh": "今天我们谈论摄氏度。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0159",
    "german": "Disco",
    "translation": "迪斯科舞厅",
    "kind": "noun",
    "article": "die",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "庆祝；节日相关",
      "照片"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0217",
      "a1-alpha-0237"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Disco.",
        "zh": "今天我们谈论迪斯科舞厅。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0094",
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
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Bein.",
        "zh": "今天我们谈论腿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0108",
    "german": "Bett",
    "translation": "床",
    "kind": "noun",
    "article": "das",
    "plural": "-en",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Bett.",
        "zh": "今天我们谈论床。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0136",
    "german": "buchstabieren",
    "translation": "拼写",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "吃",
      "喝",
      "吃早饭"
    ],
    "distractorIds": [
      "essen",
      "trinken",
      "a1-alpha-0247"
    ],
    "examples": [
      {
        "de": "Wir möchten heute buchstabieren.",
        "zh": "我们今天想拼写。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0054",
    "german": "Aufzug",
    "translation": "电梯",
    "kind": "noun",
    "article": "der",
    "plural": "-ü, e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Aufzug.",
        "zh": "今天我们谈论电梯。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0006",
    "german": "abholen",
    "translation": "接（人）",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute abholen.",
        "zh": "我们今天想接（人）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0089",
    "german": "Beamte",
    "translation": "公务员",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "工作场所",
      "职业"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0045",
      "a1-alpha-0101"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Beamte.",
        "zh": "今天我们谈论公务员。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0182",
    "german": "einkaufen",
    "translation": "购物，采购",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点",
      "付款",
      "邀请"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0183"
    ],
    "examples": [
      {
        "de": "Wir möchten heute einkaufen.",
        "zh": "我们今天想购物，采购。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0128",
    "german": "Brief",
    "translation": "信件",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Brief.",
        "zh": "今天我们谈论信件。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0424",
    "german": "Meer",
    "translation": "海，海洋",
    "kind": "noun",
    "article": "das",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Meer.",
        "zh": "今天我们谈论海，海洋。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0217",
    "german": "Feier-",
    "translation": "庆祝；节日相关",
    "kind": "noun",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "照片"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0237"
    ],
    "examples": [
      {
        "de": "Das Wort „Feier-“ bedeutet hier „庆祝；节日相关“.",
        "zh": "“Feier-”在这里表示“庆祝；节日相关”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0133",
    "german": "Bruder",
    "translation": "兄弟",
    "kind": "noun",
    "article": "der",
    "plural": "-ü",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Bruder.",
        "zh": "今天我们谈论兄弟。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0253",
    "german": "Garten",
    "translation": "花园",
    "kind": "noun",
    "article": "der",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Garten.",
        "zh": "今天我们谈论花园。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0138",
    "german": "Butter",
    "translation": "黄油（单数形式）",
    "kind": "noun",
    "article": "die",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Butter.",
        "zh": "今天我们谈论黄油（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0057",
    "german": "Ausflug",
    "translation": "郊游",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Ausflug.",
        "zh": "今天我们谈论郊游。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0007",
    "german": "Absender",
    "translation": "寄件人",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Absender.",
        "zh": "今天我们谈论寄件人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0101",
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
      "工作",
      "工作场所",
      "公务员"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0045",
      "a1-alpha-0089"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Beruf.",
        "zh": "今天我们谈论职业。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0183",
    "german": "einladen",
    "translation": "邀请",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点",
      "付款",
      "购物，采购"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Wir möchten heute einladen.",
        "zh": "我们今天想邀请。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0129",
    "german": "Briefmarke",
    "translation": "邮票",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Briefmarke.",
        "zh": "今天我们谈论邮票。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0499",
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
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Regen.",
        "zh": "今天我们谈论雨。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0218",
    "german": "feiern",
    "translation": "庆祝",
    "kind": "verb",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "看电视",
      "游泳",
      "玩，打，踢上映，放映"
    ],
    "distractorIds": [
      "a1-alpha-0221",
      "a1-alpha-0540",
      "a1-alpha-0566"
    ],
    "examples": [
      {
        "de": "Wir möchten heute feiern.",
        "zh": "我们今天想庆祝。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0175",
    "german": "Ehefrau",
    "translation": "妻子",
    "kind": "noun",
    "article": "die",
    "plural": "-en/",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Ehefrau.",
        "zh": "今天我们谈论妻子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0309",
    "german": "Haus",
    "translation": "房子",
    "kind": "noun",
    "article": "das",
    "plural": "-ä, er",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Haus.",
        "zh": "今天我们谈论房子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0171",
    "german": "Durst",
    "translation": "口渴（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Durst.",
        "zh": "今天我们谈论口渴（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0071",
    "german": "Auto",
    "translation": "汽车",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Auto.",
        "zh": "今天我们谈论汽车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0008",
    "german": "Achtung",
    "translation": "注意",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Achtung.",
        "zh": "今天我们谈论注意。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0141",
    "german": "Chef",
    "translation": "男性老板",
    "kind": "noun",
    "article": "der",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "工作场所",
      "公务员"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0045",
      "a1-alpha-0089"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Chef.",
        "zh": "今天我们谈论男性老板。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0264",
    "german": "Geld",
    "translation": "金钱（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "商店",
      "菜单"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0270",
      "a1-alpha-0350"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Geld.",
        "zh": "今天我们谈论金钱（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0216",
    "german": "Fax",
    "translation": "传真",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Fax.",
        "zh": "今天我们谈论传真。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0542",
    "german": "See",
    "translation": "湖泊",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den See.",
        "zh": "今天我们谈论湖泊。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0221",
    "german": "fernsehen",
    "translation": "看电视",
    "kind": "verb",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "庆祝",
      "游泳",
      "玩，打，踢上映，放映"
    ],
    "distractorIds": [
      "a1-alpha-0218",
      "a1-alpha-0540",
      "a1-alpha-0566"
    ],
    "examples": [
      {
        "de": "Wir möchten heute fernsehen.",
        "zh": "我们今天想看电视。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0176",
    "german": "Ehemann",
    "translation": "丈夫",
    "kind": "noun",
    "article": "der",
    "plural": "ä, er",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Ehemann.",
        "zh": "今天我们谈论丈夫。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0310",
    "german": "Hausaufgabe",
    "translation": "家庭作业",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Hausaufgabe.",
        "zh": "今天我们谈论家庭作业。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0205",
    "german": "Essen",
    "translation": "吃",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Essen.",
        "zh": "今天我们谈论吃。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0072",
    "german": "Autobahn",
    "translation": "高速公路",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Autobahn.",
        "zh": "今天我们谈论高速公路。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0010",
    "german": "all-",
    "translation": "全部的；所有的",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "其它",
      "两个（物，事）",
      "最好的"
    ],
    "distractorIds": [
      "a1-alpha-0018",
      "a1-alpha-0093",
      "a1-alpha-0105"
    ],
    "examples": [
      {
        "de": "Das Wort „all-“ bedeutet hier „全部的；所有的“.",
        "zh": "“all-”在这里表示“全部的；所有的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0368",
    "german": "Kollege",
    "translation": "男同事",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "工作场所",
      "公务员"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0045",
      "a1-alpha-0089"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kollege.",
        "zh": "今天我们谈论男同事。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0270",
    "german": "Geschäft",
    "translation": "商店",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "菜单"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0350"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Geschäft.",
        "zh": "今天我们谈论商店。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0371",
    "german": "Konto",
    "translation": "银行账户",
    "kind": "noun",
    "article": "das",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Konto.",
        "zh": "今天我们谈论银行账户。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0562",
    "german": "Sonne",
    "translation": "太阳，阳光",
    "kind": "noun",
    "article": "die",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Sonne.",
        "zh": "今天我们谈论太阳，阳光。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0237",
    "german": "Foto",
    "translation": "照片",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Foto.",
        "zh": "今天我们谈论照片。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0189",
    "german": "Eltern (pl.)",
    "translation": "父母",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Eltern (pl.).",
        "zh": "今天我们谈论父母。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0311",
    "german": "Hausfrau",
    "translation": "家庭主妇",
    "kind": "noun",
    "article": "die",
    "plural": "-en/",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Hausfrau.",
        "zh": "今天我们谈论家庭主妇。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0230",
    "german": "Fleisch",
    "translation": "肉类（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Fleisch.",
        "zh": "今天我们谈论肉类（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0073",
    "german": "Automat",
    "translation": "自动售货机；自动机器",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Automat.",
        "zh": "今天我们谈论自动售货机；自动机器。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0011",
    "german": "allein",
    "translation": "独自",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "也",
      "很快，即将",
      "酒吧"
    ],
    "distractorIds": [
      "a1-alpha-0048",
      "a1-alpha-0082",
      "a1-alpha-0086"
    ],
    "examples": [
      {
        "de": "Das Wort „allein“ bedeutet hier „独自“.",
        "zh": "“allein”在这里表示“独自”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0486",
    "german": "Praktikum",
    "translation": "实习",
    "kind": "noun",
    "article": "das",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "工作场所",
      "公务员"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0045",
      "a1-alpha-0089"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Praktikum.",
        "zh": "今天我们谈论实习。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0350",
    "german": "Karte",
    "translation": "菜单",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Karte.",
        "zh": "今天我们谈论菜单。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0482",
    "german": "Polizei",
    "translation": "警察",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Polizei.",
        "zh": "今天我们谈论警察。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0656",
    "german": "Wetter",
    "translation": "天气（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Wetter.",
        "zh": "今天我们谈论天气（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0242",
    "german": "Freizeit",
    "translation": "空闲时间，业余时间",
    "kind": "noun",
    "article": "die",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Freizeit.",
        "zh": "今天我们谈论空闲时间，业余时间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0213",
    "german": "Familienname",
    "translation": "姓",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Familienname.",
        "zh": "今天我们谈论姓。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0312",
    "german": "Hausmann",
    "translation": "家庭主夫",
    "kind": "noun",
    "article": "der",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Hausmann.",
        "zh": "今天我们谈论家庭主夫。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0247",
    "german": "frühstücken",
    "translation": "吃早饭",
    "kind": "verb",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "吃",
      "喝",
      "拼写"
    ],
    "distractorIds": [
      "essen",
      "trinken",
      "a1-alpha-0136"
    ],
    "examples": [
      {
        "de": "Wir möchten heute frühstücken.",
        "zh": "我们今天想吃早饭。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0074",
    "german": "automatisch",
    "translation": "自动的",
    "kind": "adjective",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "失业的",
      "老的旧的",
      "黑色"
    ],
    "distractorIds": [
      "a1-alpha-0044",
      "a1-alpha-0013",
      "a1-group-colors-119"
    ],
    "examples": [
      {
        "de": "Das Wort „automatisch“ bedeutet hier „自动的“.",
        "zh": "“automatisch”在这里表示“自动的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0012",
    "german": "also",
    "translation": "也就是说，可见",
    "kind": "conjunction",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "可是",
      "究竟因为",
      "或者"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0154",
      "a1-alpha-0463"
    ],
    "examples": [
      {
        "de": "Das Wort „also“ bedeutet hier „也就是说，可见“.",
        "zh": "“also”在这里表示“也就是说，可见”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0621",
    "german": "verdienen",
    "translation": "挣得，赚得",
    "kind": "verb",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "学习",
      "居住"
    ],
    "distractorIds": [
      "arbeiten",
      "lernen",
      "wohnen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute verdienen.",
        "zh": "我们今天想挣得，赚得。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0351",
    "german": "(Kredit)-Karte",
    "translation": "（信用）卡",
    "kind": "adverb",
    "plural": "-n",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „(Kredit)-Karte“ bedeutet hier „（信用）卡“.",
        "zh": "“(Kredit)-Karte”在这里表示“（信用）卡”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0484",
    "german": "Post",
    "translation": "邮局（单数形式）",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Post.",
        "zh": "今天我们谈论邮局（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0664",
    "german": "Wind",
    "translation": "风",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Wind.",
        "zh": "今天我们谈论风。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0252",
    "german": "Fußball",
    "translation": "足球",
    "kind": "noun",
    "article": "der",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Fußball.",
        "zh": "今天我们谈论足球。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0214",
    "german": "Familienstand",
    "translation": "家庭情况（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Familienstand.",
        "zh": "今天我们谈论家庭情况（单数形式）。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0359",
    "german": "Kindergarten",
    "translation": "幼儿园",
    "kind": "noun",
    "article": "der",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kindergarten.",
        "zh": "今天我们谈论幼儿园。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0248",
    "german": "Frühstück",
    "translation": "早饭（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Frühstück.",
        "zh": "今天我们谈论早饭（单数形式）。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0079",
    "german": "Bahn",
    "translation": "铁路；火车",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Bahn.",
        "zh": "今天我们谈论铁路；火车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0013",
    "german": "alt",
    "translation": "老的旧的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "外国的",
      "出名的",
      "占用的；忙线的"
    ],
    "distractorIds": [
      "a1-alpha-0063",
      "a1-alpha-0097",
      "a1-alpha-0102"
    ],
    "examples": [
      {
        "de": "Das Wort „alt“ bedeutet hier „老的旧的“.",
        "zh": "“alt”在这里表示“老的旧的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0625",
    "german": "Verkäufer",
    "translation": "男售货员",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "工作与职业",
    "topicIds": [
      "work"
    ],
    "distractors": [
      "工作",
      "工作场所",
      "公务员"
    ],
    "distractorIds": [
      "a1-alpha-0043",
      "a1-alpha-0045",
      "a1-alpha-0089"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Verkäufer.",
        "zh": "今天我们谈论男售货员。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0354",
    "german": "kaufen",
    "translation": "购买",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点",
      "付款",
      "购物，采购"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kaufen.",
        "zh": "我们今天想购买。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0485",
    "german": "Postleitzahl",
    "translation": "邮政编码",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Postleitzahl.",
        "zh": "今天我们谈论邮政编码。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-seasons-089",
    "german": "Frühling/das Frühjahr",
    "translation": "春天",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Frühling/das Frühjahr.",
        "zh": "今天我们谈论春天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0360",
    "german": "Kino",
    "translation": "电影院",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Kino.",
        "zh": "今天我们谈论电影院。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0240",
    "german": "Frau",
    "translation": "女人",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Frau.",
        "zh": "今天我们谈论女人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0406",
    "german": "Licht",
    "translation": "灯；光",
    "kind": "noun",
    "article": "das",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Licht.",
        "zh": "今天我们谈论灯；光。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0332",
    "german": "Hunger",
    "translation": "饥饿（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Hunger.",
        "zh": "今天我们谈论饥饿（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0081",
    "german": "Bahnsteig",
    "translation": "站台",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Bahnsteig.",
        "zh": "今天我们谈论站台。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0014",
    "german": "Alter",
    "translation": "年龄",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Alter.",
        "zh": "今天我们谈论年龄。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0364",
    "german": "Kleidung",
    "translation": "衣物",
    "kind": "noun",
    "article": "die",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Kleidung.",
        "zh": "今天我们谈论衣物。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0506",
    "german": "Reparatur",
    "translation": "修理",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Reparatur.",
        "zh": "今天我们谈论修理。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-group-seasons-090",
    "german": "Sommer",
    "translation": "夏天",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Sommer.",
        "zh": "今天我们谈论夏天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0411",
    "german": "Lied",
    "translation": "歌曲",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Lied.",
        "zh": "今天我们谈论歌曲。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0257",
    "german": "Geburtsjahr",
    "translation": "出生年份",
    "kind": "noun",
    "article": "das",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Geburtsjahr.",
        "zh": "今天我们谈论出生年份。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0429",
    "german": "mieten",
    "translation": "租用",
    "kind": "verb",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "洗澡",
      "出租",
      "学习"
    ],
    "distractorIds": [
      "a1-alpha-0078",
      "a1-alpha-0626",
      "lernen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute mieten.",
        "zh": "我们今天想租用。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0431",
    "german": "Milch",
    "translation": "牛奶（单数形式）",
    "kind": "noun",
    "article": "die",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Milch.",
        "zh": "今天我们谈论牛奶（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0137",
    "german": "Bus",
    "translation": "公车",
    "kind": "noun",
    "article": "der",
    "plural": "-se",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Bus.",
        "zh": "今天我们谈论公车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0015",
    "german": "an",
    "translation": "在……旁；向",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……上；到……上",
      "来自从 ... 里出来"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0049",
      "a1-alpha-0056"
    ],
    "examples": [
      {
        "de": "Das Wort „an“ bedeutet hier „在……旁；向“.",
        "zh": "“an”在这里表示“在……旁；向”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0386",
    "german": "Laden",
    "translation": "店铺",
    "kind": "noun",
    "article": "der",
    "plural": "-ä",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Laden.",
        "zh": "今天我们谈论店铺。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0518",
    "german": "Schalter",
    "translation": "柜台；开关",
    "kind": "noun",
    "article": "der",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schalter.",
        "zh": "今天我们谈论柜台；开关。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-seasons-091",
    "german": "Herbst",
    "translation": "秋天",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Herbst.",
        "zh": "今天我们谈论秋天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0477",
    "german": "Party",
    "translation": "派对",
    "kind": "noun",
    "article": "die",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Party.",
        "zh": "今天我们谈论派对。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0258",
    "german": "Geburtsort",
    "translation": "出生地",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Geburtsort.",
        "zh": "今天我们谈论出生地。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0430",
    "german": "Miete",
    "translation": "房租",
    "kind": "noun",
    "article": "die",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Miete.",
        "zh": "今天我们谈论房租。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0462",
    "german": "Obst",
    "translation": "水果（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Obst.",
        "zh": "今天我们谈论水果（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0161",
    "german": "Doppelzimmer",
    "translation": "双人客房",
    "kind": "noun",
    "article": "das",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Doppelzimmer.",
        "zh": "今天我们谈论双人客房。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0016",
    "german": "anbieten",
    "translation": "提供，给予",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute anbieten.",
        "zh": "我们今天想提供，给予。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0535",
    "german": "Schuh",
    "translation": "鞋子",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schuh.",
        "zh": "今天我们谈论鞋子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0587",
    "german": "telefonieren",
    "translation": "打电话",
    "kind": "verb",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "学习",
      "工作",
      "居住"
    ],
    "distractorIds": [
      "lernen",
      "arbeiten",
      "wohnen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute telefonieren.",
        "zh": "我们今天想打电话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-seasons-092",
    "german": "Winter",
    "translation": "冬天",
    "kind": "noun",
    "article": "der",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花朵",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Winter.",
        "zh": "今天我们谈论冬天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0540",
    "german": "schwimmen",
    "translation": "游泳",
    "kind": "verb",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "庆祝",
      "看电视",
      "玩，打，踢上映，放映"
    ],
    "distractorIds": [
      "a1-alpha-0218",
      "a1-alpha-0221",
      "a1-alpha-0566"
    ],
    "examples": [
      {
        "de": "Wir möchten heute schwimmen.",
        "zh": "我们今天想游泳。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0259",
    "german": "Geburtstag",
    "translation": "生日",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Geburtstag.",
        "zh": "今天我们谈论生日。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0438",
    "german": "Möbel (pl.)",
    "translation": "家具",
    "kind": "noun",
    "article": "die",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Möbel (pl.).",
        "zh": "今天我们谈论家具。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0468",
    "german": "Öl",
    "translation": "油",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Öl.",
        "zh": "今天我们谈论油。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0188",
    "german": "Einzelzimmer",
    "translation": "单人客房",
    "kind": "noun",
    "article": "das",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Einzelzimmer.",
        "zh": "今天我们谈论单人客房。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0018",
    "german": "ander-",
    "translation": "其它",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "两个（物，事）",
      "最好的"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0093",
      "a1-alpha-0105"
    ],
    "examples": [
      {
        "de": "Das Wort „ander-“ bedeutet hier „其它“.",
        "zh": "“ander-”在这里表示“其它”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0565",
    "german": "Speisekarte",
    "translation": "菜单",
    "kind": "noun",
    "article": "die",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Speisekarte.",
        "zh": "今天我们谈论菜单。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0588",
    "german": "Telefon",
    "translation": "电话电话",
    "kind": "noun",
    "article": "das",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Telefon.",
        "zh": "今天我们谈论电话电话。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0566",
    "german": "spielen",
    "translation": "玩，打，踢上映，放映",
    "kind": "verb",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "庆祝",
      "看电视",
      "游泳"
    ],
    "distractorIds": [
      "a1-alpha-0218",
      "a1-alpha-0221",
      "a1-alpha-0540"
    ],
    "examples": [
      {
        "de": "Wir möchten heute spielen.",
        "zh": "我们今天想玩，打，踢上映，放映。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0291",
    "german": "Großeltern (pl.)",
    "translation": "祖父母；外祖父母",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Großeltern (pl.).",
        "zh": "今天我们谈论祖父母；外祖父母。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0528",
    "german": "Schlüssel",
    "translation": "钥匙",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schlüssel.",
        "zh": "今天我们谈论钥匙。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0488",
    "german": "Preis",
    "translation": "价格",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Preis.",
        "zh": "今天我们谈论价格。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0208",
    "german": "Fahrer",
    "translation": "司机",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Fahrer.",
        "zh": "今天我们谈论司机。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0019",
    "german": "anfangen",
    "translation": "开始",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute anfangen.",
        "zh": "我们今天想开始。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0583",
    "german": "Tasche",
    "translation": "包",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "金钱（单数形式）",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Tasche.",
        "zh": "今天我们谈论包。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0637",
    "german": "Vorwahl",
    "translation": "电话区号",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Vorwahl.",
        "zh": "今天我们谈论电话区号。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0567",
    "german": "Sport",
    "translation": "体育（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Sport.",
        "zh": "今天我们谈论体育（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0292",
    "german": "Großmutter",
    "translation": "祖母，外祖母",
    "kind": "noun",
    "article": "die",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Großmutter.",
        "zh": "今天我们谈论祖母，外祖母。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0541",
    "german": "Schwimmbad",
    "translation": "游泳池",
    "kind": "noun",
    "article": "das",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Schwimmbad.",
        "zh": "今天我们谈论游泳池。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0500",
    "german": "Reis",
    "translation": "米饭（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Reis.",
        "zh": "今天我们谈论米饭（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0209",
    "german": "Fahrkarte",
    "translation": "车票",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Fahrkarte.",
        "zh": "今天我们谈论车票。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0020",
    "german": "Anfang",
    "translation": "开端，开始",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Anfang.",
        "zh": "今天我们谈论开端，开始。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0624",
    "german": "verkaufen",
    "translation": "出售",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点",
      "付款",
      "购物，采购"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Wir möchten heute verkaufen.",
        "zh": "我们今天想出售。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0681",
    "german": "Zoll",
    "translation": "海关",
    "kind": "noun",
    "article": "der",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息；问讯",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Zoll.",
        "zh": "今天我们谈论海关。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0582",
    "german": "tanzen",
    "translation": "舞蹈，跳舞",
    "kind": "verb",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "庆祝",
      "看电视",
      "游泳"
    ],
    "distractorIds": [
      "a1-alpha-0218",
      "a1-alpha-0221",
      "a1-alpha-0540"
    ],
    "examples": [
      {
        "de": "Wir möchten heute tanzen.",
        "zh": "我们今天想舞蹈，跳舞。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0293",
    "german": "Großvater",
    "translation": "祖父，外祖父",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Großvater.",
        "zh": "今天我们谈论祖父，外祖父。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0558",
    "german": "Sofa",
    "translation": "沙发",
    "kind": "noun",
    "article": "das",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Sofa.",
        "zh": "今天我们谈论沙发。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0507",
    "german": "Restaurant",
    "translation": "饭馆",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Restaurant.",
        "zh": "今天我们谈论饭馆。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0210",
    "german": "Fahrrad",
    "translation": "自行车",
    "kind": "noun",
    "article": "das",
    "plural": "-ä, er",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Fahrrad.",
        "zh": "今天我们谈论自行车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0021",
    "german": "anklicken",
    "translation": "点击",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute anklicken.",
        "zh": "我们今天想点击。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0675",
    "german": "zahlen",
    "translation": "付款，支付",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点",
      "付款",
      "购物，采购"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Wir möchten heute zahlen.",
        "zh": "我们今天想付款，支付。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0622",
    "german": "Verein",
    "translation": "协会；俱乐部",
    "kind": "noun",
    "article": "der",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝；节日相关"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Verein.",
        "zh": "今天我们谈论协会；俱乐部。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0299",
    "german": "Haar",
    "translation": "头发",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Haar.",
        "zh": "今天我们谈论头发。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0601",
    "german": "Treppe",
    "translation": "楼梯",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Treppe.",
        "zh": "今天我们谈论楼梯。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0512",
    "german": "Saft",
    "translation": "果汁",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Saft.",
        "zh": "今天我们谈论果汁。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0233",
    "german": "Abflug",
    "translation": "起飞；出发",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Abflug.",
        "zh": "今天我们谈论起飞；出发。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0022",
    "german": "ankommen",
    "translation": "到达",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute ankommen.",
        "zh": "我们今天想到达。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-currencies-093",
    "german": "1 Euro",
    "translation": "一欧元",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一百欧分",
      "一",
      "二"
    ],
    "distractorIds": [
      "a1-group-currencies-094",
      "a1-group-numbers-001",
      "a1-group-numbers-002"
    ],
    "examples": [
      {
        "de": "Das Wort „1 Euro“ bedeutet hier „一欧元“.",
        "zh": "“1 Euro”在这里表示“一欧元”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0358",
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
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Kind.",
        "zh": "今天我们谈论孩子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0626",
    "german": "vermieten",
    "translation": "出租",
    "kind": "verb",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "洗澡",
      "租用",
      "学习"
    ],
    "distractorIds": [
      "a1-alpha-0078",
      "a1-alpha-0429",
      "lernen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute vermieten.",
        "zh": "我们今天想出租。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0514",
    "german": "Salat",
    "translation": "沙拉",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Salat.",
        "zh": "今天我们谈论沙拉。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0234",
    "german": "Flughafen",
    "translation": "机场",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Flughafen.",
        "zh": "今天我们谈论机场。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0024",
    "german": "ankreuzen",
    "translation": "勾选",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute ankreuzen.",
        "zh": "我们今天想勾选。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-currencies-094",
    "german": "100 Cent",
    "translation": "一百欧分",
    "kind": "numeral",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一欧元",
      "一",
      "二"
    ],
    "distractorIds": [
      "a1-group-currencies-093",
      "a1-group-numbers-001",
      "a1-group-numbers-002"
    ],
    "examples": [
      {
        "de": "Das Wort „100 Cent“ bedeutet hier „一百欧分“.",
        "zh": "“100 Cent”在这里表示“一百欧分”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0372",
    "german": "Kopf",
    "translation": "头",
    "kind": "noun",
    "article": "der",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kopf.",
        "zh": "今天我们谈论头。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0627",
    "german": "Vermieter",
    "translation": "房东",
    "kind": "noun",
    "article": "der",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Vermieter.",
        "zh": "今天我们谈论房东。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0515",
    "german": "Salz",
    "translation": "盐（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Salz.",
        "zh": "今天我们谈论盐（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0235",
    "german": "Flugzeug",
    "translation": "飞机",
    "kind": "noun",
    "article": "das",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Flugzeug.",
        "zh": "今天我们谈论飞机。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0025",
    "german": "anmachen",
    "translation": "打开（电器）",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute anmachen.",
        "zh": "我们今天想打开（电器）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-095",
    "german": "ein Meter = 1 m",
    "translation": "一米",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一厘米",
      "一米十五",
      "二百公里"
    ],
    "distractorIds": [
      "a1-group-measurements-096",
      "a1-group-measurements-097",
      "a1-group-measurements-098"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Meter = 1 m“ bedeutet hier „一米“.",
        "zh": "“ein Meter = 1 m”在这里表示“一米”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0421",
    "german": "Mann",
    "translation": "男人",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, er",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Mann.",
        "zh": "今天我们谈论男人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0671",
    "german": "Wohnung",
    "translation": "公寓，住房",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "居住",
    "topicIds": [
      "housing"
    ],
    "distractors": [
      "桌子",
      "椅子",
      "窗户"
    ],
    "distractorIds": [
      "tisch",
      "stuhl",
      "fenster"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Wohnung.",
        "zh": "今天我们谈论公寓，住房。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0585",
    "german": "Tee",
    "translation": "茶",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Tee.",
        "zh": "今天我们谈论茶。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0266",
    "german": "Gepäck",
    "translation": "行李（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Gepäck.",
        "zh": "今天我们谈论行李（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0026",
    "german": "(sich) anmelden",
    "translation": "报名；登记",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns anmelden.",
        "zh": "我们今天想报名；登记。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-096",
    "german": "ein Zentimeter = 1 cm",
    "translation": "一厘米",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一米十五",
      "二百公里"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-097",
      "a1-group-measurements-098"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Zentimeter = 1 cm“ bedeutet hier „一厘米“.",
        "zh": "“ein Zentimeter = 1 cm”在这里表示“一厘米”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0428",
    "german": "Mensch",
    "translation": "人",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Mensch.",
        "zh": "今天我们谈论人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0598",
    "german": "Tomate",
    "translation": "西红柿",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Tomate.",
        "zh": "今天我们谈论西红柿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0330",
    "german": "Hotel",
    "translation": "酒店",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Hotel.",
        "zh": "今天我们谈论酒店。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0027",
    "german": "Anmeldung",
    "translation": "报名表",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Anmeldung.",
        "zh": "今天我们谈论报名表。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-group-measurements-097",
    "german": "ein Meter fünfzehn = 1",
    "translation": "一米十五",
    "kind": "phrase",
    "plural": "15 m",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "二百公里"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-098"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Meter fünfzehn = 1“ bedeutet hier „一米十五“.",
        "zh": "“ein Meter fünfzehn = 1”在这里表示“一米十五”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0447",
    "german": "Mutter",
    "translation": "母亲",
    "kind": "noun",
    "article": "die",
    "plural": "-ü",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Mutter.",
        "zh": "今天我们谈论母亲。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0648",
    "german": "Wein",
    "translation": "葡萄酒",
    "kind": "noun",
    "article": "der",
    "topic": "饮食",
    "topicIds": [
      "food"
    ],
    "distractors": [
      "厨房",
      "面包",
      "苹果"
    ],
    "distractorIds": [
      "kueche",
      "brot",
      "apfel"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Wein.",
        "zh": "今天我们谈论葡萄酒。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0367",
    "german": "Koffer",
    "translation": "行李箱",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Koffer.",
        "zh": "今天我们谈论行李箱。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0028",
    "german": "Anrede",
    "translation": "称呼，称谓",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Anrede.",
        "zh": "今天我们谈论称呼，称谓。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-098",
    "german": "zweihundert Kilometer = 200 km",
    "translation": "二百公里",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „zweihundert Kilometer = 200 km“ bedeutet hier „二百公里“.",
        "zh": "“zweihundert Kilometer = 200 km”在这里表示“二百公里”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0450",
    "german": "Name",
    "translation": "名字",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Name.",
        "zh": "今天我们谈论名字。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0478",
    "german": "Pass",
    "translation": "护照",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Pass.",
        "zh": "今天我们谈论护照。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0029",
    "german": "anrufen",
    "translation": "给 … 打电话",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute anrufen.",
        "zh": "我们今天想给 … 打电话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-099",
    "german": "ein Quadratmeter = 1 m²",
    "translation": "一平方米",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Quadratmeter = 1 m²“ bedeutet hier „一平方米“.",
        "zh": "“ein Quadratmeter = 1 m²”在这里表示“一平方米”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0475",
    "german": "Partner",
    "translation": "男性合作伙伴",
    "kind": "noun",
    "article": "der",
    "plural": "-/",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Partner.",
        "zh": "今天我们谈论男性合作伙伴。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0493",
    "german": "Rad fahren",
    "translation": "骑自行车",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "乘车；驾驶",
      "出发，启程",
      "旅游"
    ],
    "distractorIds": [
      "fahren",
      "a1-alpha-0003",
      "a1-alpha-0501"
    ],
    "examples": [
      {
        "de": "Wir möchten heute Rad fahren.",
        "zh": "我们今天想骑自行车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0030",
    "german": "Anruf",
    "translation": "电话，通话",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Anruf.",
        "zh": "今天我们谈论电话，通话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-100",
    "german": "ein Grad unter Null = -1°",
    "translation": "零下一度",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Grad unter Null = -1°“ bedeutet hier „零下一度“.",
        "zh": "“ein Grad unter Null = -1°”在这里表示“零下一度”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0476",
    "german": "Partnerin",
    "translation": "女性合作伙伴",
    "kind": "noun",
    "article": "die",
    "plural": "-nen",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Partnerin.",
        "zh": "今天我们谈论女性合作伙伴。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0501",
    "german": "reisen",
    "translation": "旅游",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "乘车；驾驶",
      "出发，启程",
      "骑自行车"
    ],
    "distractorIds": [
      "fahren",
      "a1-alpha-0003",
      "a1-alpha-0493"
    ],
    "examples": [
      {
        "de": "Wir möchten heute reisen.",
        "zh": "我们今天想旅游。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0031",
    "german": "Anrufbeantworter",
    "translation": "电话答录机",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Anrufbeantworter.",
        "zh": "今天我们谈论电话答录机。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-group-measurements-101",
    "german": "vier Grad über Null = +4°",
    "translation": "零上四度",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „vier Grad über Null = +4°“ bedeutet hier „零上四度“.",
        "zh": "“vier Grad über Null = +4°”在这里表示“零上四度”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0539",
    "german": "Schwester",
    "translation": "姐妹",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Schwester.",
        "zh": "今天我们谈论姐妹。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0502",
    "german": "Reise",
    "translation": "旅行",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Reise.",
        "zh": "今天我们谈论旅行。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0032",
    "german": "Ansage",
    "translation": "广播通知",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Ansage.",
        "zh": "今天我们谈论广播通知。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-102",
    "german": "ein Prozent = 1 %",
    "translation": "百分之一",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Prozent = 1 %“ bedeutet hier „百分之一“.",
        "zh": "“ein Prozent = 1 %”在这里表示“百分之一”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0560",
    "german": "Sohn",
    "translation": "儿子",
    "kind": "noun",
    "article": "der",
    "plural": "-ö, e",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Sohn.",
        "zh": "今天我们谈论儿子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0503",
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
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Reisebüro.",
        "zh": "今天我们谈论旅行社。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0033",
    "german": "Anschluss",
    "translation": "连接；换乘衔接",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Anschluss.",
        "zh": "今天我们谈论连接；换乘衔接。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-103",
    "german": "ein Liter = 1 l",
    "translation": "一升",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Liter = 1 l“ bedeutet hier „一升“.",
        "zh": "“ein Liter = 1 l”在这里表示“一升”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0596",
    "german": "Tochter",
    "translation": "女儿",
    "kind": "noun",
    "article": "die",
    "plural": "-ö",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Tochter.",
        "zh": "今天我们谈论女儿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0504",
    "german": "Reiseführer",
    "translation": "旅行指南书",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Reiseführer.",
        "zh": "今天我们谈论旅行指南书。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0034",
    "german": "an sein",
    "translation": "开着",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute an sein.",
        "zh": "我们今天想开着。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-104",
    "german": "ein Gramm = 1 g",
    "translation": "一克",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Gramm = 1 g“ bedeutet hier „一克“.",
        "zh": "“ein Gramm = 1 g”在这里表示“一克”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0619",
    "german": "Vater",
    "translation": "父亲",
    "kind": "noun",
    "article": "der",
    "plural": "-ä",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Vater.",
        "zh": "今天我们谈论父亲。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0517",
    "german": "S-Bahn",
    "translation": "轻轨铁路",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die S-Bahn.",
        "zh": "今天我们谈论轻轨铁路。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0035",
    "german": "antworten",
    "translation": "回答",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute antworten.",
        "zh": "我们今天想回答。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-measurements-105",
    "german": "ein Pfund = 500 g",
    "translation": "一磅（五百克）",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Pfund = 500 g“ bedeutet hier „一磅（五百克）“.",
        "zh": "“ein Pfund = 500 g”在这里表示“一磅（五百克）”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0629",
    "german": "Verwandte",
    "translation": "亲属",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Verwandte.",
        "zh": "今天我们谈论亲属。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0549",
    "german": "weg sein",
    "translation": "不在；离开了",
    "kind": "verb",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "乘车；驾驶",
      "出发，启程",
      "骑自行车"
    ],
    "distractorIds": [
      "fahren",
      "a1-alpha-0003",
      "a1-alpha-0493"
    ],
    "examples": [
      {
        "de": "Wir möchten heute weg sein.",
        "zh": "我们今天想不在；离开了。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0036",
    "german": "Antwort",
    "translation": "答案，回答",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Antwort.",
        "zh": "今天我们谈论答案，回答。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-group-measurements-106",
    "german": "ein Kilo(gramm) = 1 kg",
    "translation": "一千克",
    "kind": "phrase",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "一米",
      "一厘米",
      "一米十五"
    ],
    "distractorIds": [
      "a1-group-measurements-095",
      "a1-group-measurements-096",
      "a1-group-measurements-097"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Kilo(gramm) = 1 kg“ bedeutet hier „一千克“.",
        "zh": "“ein Kilo(gramm) = 1 kg”在这里表示“一千克”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0634",
    "german": "Vorname",
    "translation": "名",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Vorname.",
        "zh": "今天我们谈论名。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0575",
    "german": "Straße",
    "translation": "街道",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Straße.",
        "zh": "今天我们谈论街道。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0037",
    "german": "Anzeige",
    "translation": "告示牌",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Anzeige.",
        "zh": "今天我们谈论告示牌。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-119",
    "german": "schwarz",
    "translation": "黑色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "灰色",
      "蓝色",
      "绿色"
    ],
    "distractorIds": [
      "a1-group-colors-120",
      "a1-group-colors-121",
      "a1-group-colors-122"
    ],
    "examples": [
      {
        "de": "Das Wort „schwarz“ bedeutet hier „黑色“.",
        "zh": "“schwarz”在这里表示“黑色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-107",
    "german": "Deutschland",
    "translation": "德国",
    "kind": "other",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "欧洲",
      "桌子",
      "椅子"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-111",
      "tisch",
      "stuhl"
    ],
    "examples": [
      {
        "de": "Das Wort „Deutschland“ bedeutet hier „德国“.",
        "zh": "“Deutschland”在这里表示“德国”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0576",
    "german": "Straßenbahn",
    "translation": "有轨电车",
    "kind": "noun",
    "article": "die",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Straßenbahn.",
        "zh": "今天我们谈论有轨电车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0038",
    "german": "(sich) anziehen",
    "translation": "穿上",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns anziehen.",
        "zh": "我们今天想穿上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-120",
    "german": "grau",
    "translation": "灰色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "蓝色",
      "绿色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-121",
      "a1-group-colors-122"
    ],
    "examples": [
      {
        "de": "Das Wort „grau“ bedeutet hier „灰色“.",
        "zh": "“grau”在这里表示“灰色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-108",
    "german": "der/die Deutsche",
    "translation": "德国人",
    "kind": "noun",
    "plural": "-n",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Das Wort „der/die Deutsche“ bedeutet hier „德国人“.",
        "zh": "“der/die Deutsche”在这里表示“德国人”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0584",
    "german": "Taxi",
    "translation": "出租车",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Taxi.",
        "zh": "今天我们谈论出租车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0039",
    "german": "Apartment",
    "translation": "公寓套间",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Apartment.",
        "zh": "今天我们谈论公寓套间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-121",
    "german": "blau",
    "translation": "蓝色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "灰色",
      "绿色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-120",
      "a1-group-colors-122"
    ],
    "examples": [
      {
        "de": "Das Wort „blau“ bedeutet hier „蓝色“.",
        "zh": "“blau”在这里表示“蓝色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-109",
    "german": "ein Deutscher",
    "translation": "一个德国男性／女性；德国人",
    "kind": "phrase",
    "plural": "eine Deutsche, Deutsche",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "说明自己的来源地或国籍",
      "国家、居民、国籍",
      "土耳其、土耳其人、土耳其的"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-114",
      "a1-group-countries-nationalities-115",
      "a1-group-countries-nationalities-116"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Deutscher“ bedeutet hier „一个德国男性／女性；德国人“.",
        "zh": "“ein Deutscher”在这里表示“一个德国男性／女性；德国人”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0594",
    "german": "Ticket",
    "translation": "票",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Ticket.",
        "zh": "今天我们谈论票。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0041",
    "german": "Appetit",
    "translation": "胃口，食欲（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Appetit.",
        "zh": "今天我们谈论胃口，食欲（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-122",
    "german": "grün",
    "translation": "绿色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "灰色",
      "蓝色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-120",
      "a1-group-colors-121"
    ],
    "examples": [
      {
        "de": "Das Wort „grün“ bedeutet hier „绿色“.",
        "zh": "“grün”在这里表示“绿色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-110",
    "german": "deutsch",
    "translation": "德国的；德语",
    "kind": "adjective",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "欧洲的",
      "失业的",
      "自动的"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-113",
      "a1-alpha-0044",
      "a1-alpha-0074"
    ],
    "examples": [
      {
        "de": "Das Wort „deutsch“ bedeutet hier „德国的；德语“.",
        "zh": "“deutsch”在这里表示“德国的；德语”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0618",
    "german": "Urlaub",
    "translation": "假日，休假",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Urlaub.",
        "zh": "今天我们谈论假日，休假。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0048",
    "german": "auch",
    "translation": "也",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "很快，即将",
      "酒吧"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0082",
      "a1-alpha-0086"
    ],
    "examples": [
      {
        "de": "Das Wort „auch“ bedeutet hier „也“.",
        "zh": "“auch”在这里表示“也”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-123",
    "german": "weiß",
    "translation": "白色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "灰色",
      "蓝色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-120",
      "a1-group-colors-121"
    ],
    "examples": [
      {
        "de": "Das Wort „weiß“ bedeutet hier „白色“.",
        "zh": "“weiß”在这里表示“白色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-111",
    "german": "Europa",
    "translation": "欧洲",
    "kind": "other",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "德国",
      "桌子",
      "椅子"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-107",
      "tisch",
      "stuhl"
    ],
    "examples": [
      {
        "de": "Das Wort „Europa“ bedeutet hier „欧洲“.",
        "zh": "“Europa”在这里表示“欧洲”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0680",
    "german": "Zimmer",
    "translation": "房间",
    "kind": "noun",
    "article": "das",
    "plural": "–",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Zimmer.",
        "zh": "今天我们谈论房间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0049",
    "german": "auf",
    "translation": "在……上；到……上",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "来自从 ... 里出来"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0056"
    ],
    "examples": [
      {
        "de": "Das Wort „auf“ bedeutet hier „在……上；到……上“.",
        "zh": "“auf”在这里表示“在……上；到……上”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-124",
    "german": "rot",
    "translation": "红色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "灰色",
      "蓝色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-120",
      "a1-group-colors-121"
    ],
    "examples": [
      {
        "de": "Das Wort „rot“ bedeutet hier „红色“.",
        "zh": "“rot”在这里表示“红色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-112",
    "german": "Europäer",
    "translation": "欧洲人",
    "kind": "noun",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "家庭",
      "朋友（男）",
      "手臂"
    ],
    "distractorIds": [
      "familie",
      "freund",
      "a1-alpha-0046"
    ],
    "examples": [
      {
        "de": "Das Wort „Europäer“ bedeutet hier „欧洲人“.",
        "zh": "“Europäer”在这里表示“欧洲人”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0684",
    "german": "Zug",
    "translation": "火车",
    "kind": "noun",
    "article": "der",
    "plural": "-ü, e",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Zug.",
        "zh": "今天我们谈论火车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0050",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Aufgabe.",
        "zh": "今天我们谈论任务。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-125",
    "german": "gelb",
    "translation": "黄色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "灰色",
      "蓝色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-120",
      "a1-group-colors-121"
    ],
    "examples": [
      {
        "de": "Das Wort „gelb“ bedeutet hier „黄色“.",
        "zh": "“gelb”在这里表示“黄色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-113",
    "german": "europäisch",
    "translation": "欧洲的",
    "kind": "adjective",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "德国的；德语",
      "失业的",
      "自动的"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-110",
      "a1-alpha-0044",
      "a1-alpha-0074"
    ],
    "examples": [
      {
        "de": "Das Wort „europäisch“ bedeutet hier „欧洲的“.",
        "zh": "“europäisch”在这里表示“欧洲的”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-directions-127",
    "german": "Norden",
    "translation": "北方",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Norden.",
        "zh": "今天我们谈论北方。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0051",
    "german": "aufhören",
    "translation": "停止",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute aufhören.",
        "zh": "我们今天想停止。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-126",
    "german": "braun",
    "translation": "棕色",
    "kind": "adjective",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "黑色",
      "灰色",
      "蓝色"
    ],
    "distractorIds": [
      "a1-group-colors-119",
      "a1-group-colors-120",
      "a1-group-colors-121"
    ],
    "examples": [
      {
        "de": "Das Wort „braun“ bedeutet hier „棕色“.",
        "zh": "“braun”在这里表示“棕色”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-114",
    "german": "Angabe der eigenen Herkunft oder Nationalität",
    "translation": "说明自己的来源地或国籍",
    "kind": "phrase",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "一个德国男性／女性；德国人",
      "国家、居民、国籍",
      "土耳其、土耳其人、土耳其的"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-109",
      "a1-group-countries-nationalities-115",
      "a1-group-countries-nationalities-116"
    ],
    "examples": [
      {
        "de": "Das Wort „Angabe der eigenen Herkunft oder Nationalität“ bedeutet hier „说明自己的来源地或国籍“.",
        "zh": "“Angabe der eigenen Herkunft oder Nationalität”在这里表示“说明自己的来源地或国籍”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-directions-128",
    "german": "Süden",
    "translation": "南方",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Süden.",
        "zh": "今天我们谈论南方。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0052",
    "german": "auf sein",
    "translation": "开着",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute auf sein.",
        "zh": "我们今天想开着。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-115",
    "german": "Land",
    "translation": "国家、居民、国籍",
    "kind": "phrase",
    "plural": "Bewohner, Nationalität",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "一个德国男性／女性；德国人",
      "说明自己的来源地或国籍",
      "土耳其、土耳其人、土耳其的"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-109",
      "a1-group-countries-nationalities-114",
      "a1-group-countries-nationalities-116"
    ],
    "examples": [
      {
        "de": "Das Wort „Land“ bedeutet hier „国家、居民、国籍“.",
        "zh": "“Land”在这里表示“国家、居民、国籍”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-directions-129",
    "german": "Westen",
    "translation": "西方",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Westen.",
        "zh": "今天我们谈论西方。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0053",
    "german": "aufstehen",
    "translation": "起床",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute aufstehen.",
        "zh": "我们今天想起床。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-116",
    "german": "Türkei",
    "translation": "土耳其、土耳其人、土耳其的",
    "kind": "phrase",
    "plural": "Türke/Türkin, türkisch",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "一个德国男性／女性；德国人",
      "说明自己的来源地或国籍",
      "国家、居民、国籍"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-109",
      "a1-group-countries-nationalities-114",
      "a1-group-countries-nationalities-115"
    ],
    "examples": [
      {
        "de": "Das Wort „Türkei“ bedeutet hier „土耳其、土耳其人、土耳其的“.",
        "zh": "“Türkei”在这里表示“土耳其、土耳其人、土耳其的”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-directions-130",
    "german": "Osten",
    "translation": "东方",
    "kind": "noun",
    "article": "der",
    "topic": "旅行与交通",
    "topicIds": [
      "travel"
    ],
    "distractors": [
      "火车站",
      "出发，启程",
      "抵达"
    ],
    "distractorIds": [
      "bahnhof",
      "a1-alpha-0004",
      "a1-alpha-0023"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Osten.",
        "zh": "今天我们谈论东方。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0056",
    "german": "aus",
    "translation": "来自从 ... 里出来",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „aus“ bedeutet hier „来自从 ... 里出来“.",
        "zh": "“aus”在这里表示“来自从 ... 里出来”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-117",
    "german": "Finnland",
    "translation": "芬兰、芬兰人、芬兰的",
    "kind": "phrase",
    "plural": "Finne/Finnin, finnisch",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "一个德国男性／女性；德国人",
      "说明自己的来源地或国籍",
      "国家、居民、国籍"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-109",
      "a1-group-countries-nationalities-114",
      "a1-group-countries-nationalities-115"
    ],
    "examples": [
      {
        "de": "Das Wort „Finnland“ bedeutet hier „芬兰、芬兰人、芬兰的“.",
        "zh": "“Finnland”在这里表示“芬兰、芬兰人、芬兰的”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0058",
    "german": "ausfüllen",
    "translation": "填写",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute ausfüllen.",
        "zh": "我们今天想填写。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-118",
    "german": "Mexiko",
    "translation": "墨西哥、墨西哥人、墨西哥的",
    "kind": "phrase",
    "plural": "Mexikaner/Mexikanerin, mexikanisch",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "一个德国男性／女性；德国人",
      "说明自己的来源地或国籍",
      "国家、居民、国籍"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-109",
      "a1-group-countries-nationalities-114",
      "a1-group-countries-nationalities-115"
    ],
    "examples": [
      {
        "de": "Das Wort „Mexiko“ bedeutet hier „墨西哥、墨西哥人、墨西哥的“.",
        "zh": "“Mexiko”在这里表示“墨西哥、墨西哥人、墨西哥的”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0059",
    "german": "Ausgang",
    "translation": "出口",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Ausgang.",
        "zh": "今天我们谈论出口。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0061",
    "german": "Ausland",
    "translation": "外国",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Ausland.",
        "zh": "今天我们谈论外国。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0062",
    "german": "Ausländer",
    "translation": "外国人",
    "kind": "noun",
    "article": "der",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Ausländer.",
        "zh": "今天我们谈论外国人。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0063",
    "german": "ausländisch",
    "translation": "外国的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "出名的",
      "占用的；忙线的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0097",
      "a1-alpha-0102"
    ],
    "examples": [
      {
        "de": "Das Wort „ausländisch“ bedeutet hier „外国的“.",
        "zh": "“ausländisch”在这里表示“外国的”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0064",
    "german": "ausmachen",
    "translation": "关掉；约定",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute ausmachen.",
        "zh": "我们今天想关掉；约定。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0065",
    "german": "Aussage",
    "translation": "陈述，说法，观点",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Aussage.",
        "zh": "今天我们谈论陈述，说法，观点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0066",
    "german": "aussehen",
    "translation": "看起来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute aussehen.",
        "zh": "我们今天想看起来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0067",
    "german": "aus sein",
    "translation": "在关机（状态）",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "熟人",
      "大约",
      "她的；给他；他（第四格）"
    ],
    "distractorIds": [
      "a1-alpha-0098",
      "a1-alpha-0142",
      "a1-alpha-0334"
    ],
    "examples": [
      {
        "de": "Das Wort „aus sein“ bedeutet hier „在关机（状态）“.",
        "zh": "“aus sein”在这里表示“在关机（状态）”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0068",
    "german": "aussteigen",
    "translation": "下车，下船",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute aussteigen.",
        "zh": "我们今天想下车，下船。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0069",
    "german": "Ausweis",
    "translation": "证件",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Ausweis.",
        "zh": "今天我们谈论证件。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0070",
    "german": "(sich) ausziehen",
    "translation": "脱下；搬出",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns ausziehen.",
        "zh": "我们今天想脱下；搬出。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0075",
    "german": "Baby",
    "translation": "婴儿",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Baby.",
        "zh": "今天我们谈论婴儿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0076",
    "german": "Bäckerei",
    "translation": "面包店",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Bäckerei.",
        "zh": "今天我们谈论面包店。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0082",
    "german": "bald",
    "translation": "很快，即将",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "酒吧"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0086"
    ],
    "examples": [
      {
        "de": "Das Wort „bald“ bedeutet hier „很快，即将“.",
        "zh": "“bald”在这里表示“很快，即将”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0086",
    "german": "bar",
    "translation": "酒吧",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „bar“ bedeutet hier „酒吧“.",
        "zh": "“bar”在这里表示“酒吧”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0087",
    "german": "Bauch",
    "translation": "腹部",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Bauch.",
        "zh": "今天我们谈论腹部。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0090",
    "german": "bedeuten",
    "translation": "意味着，意思是",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bedeuten.",
        "zh": "我们今天想意味着，意思是。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0091",
    "german": "beginnen",
    "translation": "开始开始",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute beginnen.",
        "zh": "我们今天想开始开始。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0092",
    "german": "bei",
    "translation": "在 … 地点在 … 的时间",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „bei“ bedeutet hier „在 … 地点在 … 的时间“.",
        "zh": "“bei”在这里表示“在 … 地点在 … 的时间”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0093",
    "german": "beide",
    "translation": "两个（物，事）",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "最好的"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0105"
    ],
    "examples": [
      {
        "de": "Das Wort „beide“ bedeutet hier „两个（物，事）“.",
        "zh": "“beide”在这里表示“两个（物，事）”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0097",
    "german": "bekannt",
    "translation": "出名的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "占用的；忙线的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0102"
    ],
    "examples": [
      {
        "de": "Das Wort „bekannt“ bedeutet hier „出名的“.",
        "zh": "“bekannt”在这里表示“出名的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0098",
    "german": "der/die Bekannte",
    "translation": "熟人",
    "kind": "phrase",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "大约",
      "她的；给他；他（第四格）"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0334"
    ],
    "examples": [
      {
        "de": "Das Wort „der/die Bekannte“ bedeutet hier „熟人“.",
        "zh": "“der/die Bekannte”在这里表示“熟人”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0099",
    "german": "bekommen",
    "translation": "得到得了（某种症状或疾病）",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bekommen.",
        "zh": "我们今天想得到得了（某种症状或疾病）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0100",
    "german": "benutzen",
    "translation": "使用",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute benutzen.",
        "zh": "我们今天想使用。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0102",
    "german": "besetzt",
    "translation": "占用的；忙线的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „besetzt“ bedeutet hier „占用的；忙线的“.",
        "zh": "“besetzt”在这里表示“占用的；忙线的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0103",
    "german": "besichtigen",
    "translation": "参观",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute besichtigen.",
        "zh": "我们今天想参观。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0104",
    "german": "besser",
    "translation": "更好",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „besser“ bedeutet hier „更好“.",
        "zh": "“besser”在这里表示“更好”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0105",
    "german": "best-",
    "translation": "最好的",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „best-“ bedeutet hier „最好的“.",
        "zh": "“best-”在这里表示“最好的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0107",
    "german": "besuchen",
    "translation": "参观，拜访",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute besuchen.",
        "zh": "我们今天想参观，拜访。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0111",
    "german": "Bild",
    "translation": "图画",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Bild.",
        "zh": "今天我们谈论图画。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0112",
    "german": "billig",
    "translation": "便宜的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „billig“ bedeutet hier „便宜的“.",
        "zh": "“billig”在这里表示“便宜的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0114",
    "german": "bis",
    "translation": "直到直到 … 为止",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „bis“ bedeutet hier „直到直到 … 为止“.",
        "zh": "“bis”在这里表示“直到直到 … 为止”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0115",
    "german": "bisschen",
    "translation": "一点点",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bisschen.",
        "zh": "我们今天想一点点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0116",
    "german": "bitte",
    "translation": "请",
    "kind": "particle",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "谢谢",
      "是的真的，的确",
      "不是"
    ],
    "distractorIds": [
      "a1-alpha-0149",
      "a1-alpha-0340",
      "a1-alpha-0452"
    ],
    "examples": [
      {
        "de": "Das Wort „bitte“ bedeutet hier „请“.",
        "zh": "“bitte”在这里表示“请”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0117",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Bitte.",
        "zh": "今天我们谈论请。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0118",
    "german": "bitten",
    "translation": "请求，恳求",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bitten.",
        "zh": "我们今天想请求，恳求。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0119",
    "german": "bitter",
    "translation": "苦的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „bitter“ bedeutet hier „苦的“.",
        "zh": "“bitter”在这里表示“苦的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0120",
    "german": "bleiben",
    "translation": "停留，逗留",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bleiben.",
        "zh": "我们今天想停留，逗留。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0121",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Bleistift.",
        "zh": "今天我们谈论铅笔。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0122",
    "german": "Blick",
    "translation": "目光；景色",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Blick.",
        "zh": "今天我们谈论目光；景色。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0124",
    "german": "Bogen",
    "translation": "表格；纸张",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Bogen.",
        "zh": "今天我们谈论表格；纸张。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0125",
    "german": "böse",
    "translation": "生气的；坏的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „böse“ bedeutet hier „生气的；坏的“.",
        "zh": "“böse”在这里表示“生气的；坏的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0126",
    "german": "brauchen",
    "translation": "需要需要",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute brauchen.",
        "zh": "我们今天想需要需要。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0127",
    "german": "breit",
    "translation": "宽阔的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „breit“ bedeutet hier „宽阔的“.",
        "zh": "“breit”在这里表示“宽阔的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0130",
    "german": "bringen",
    "translation": "带来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute bringen.",
        "zh": "我们今天想带来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0132",
    "german": "Brötchen",
    "translation": "小面包",
    "kind": "noun",
    "article": "das",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Brötchen.",
        "zh": "今天我们谈论小面包。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0135",
    "german": "Buchstabe",
    "translation": "字母",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Buchstabe.",
        "zh": "今天我们谈论字母。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0139",
    "german": "Café",
    "translation": "咖啡馆",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Café.",
        "zh": "今天我们谈论咖啡馆。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0140",
    "german": "CD",
    "translation": "CD",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die CD.",
        "zh": "今天我们谈论CD。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0142",
    "german": "circa/ca.",
    "translation": "大约",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "她的；给他；他（第四格）"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0334"
    ],
    "examples": [
      {
        "de": "Das Wort „circa/ca.“ bedeutet hier „大约“.",
        "zh": "“circa/ca.”在这里表示“大约”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0143",
    "german": "Computer",
    "translation": "计算机",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Computer.",
        "zh": "今天我们谈论计算机。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0144",
    "german": "da",
    "translation": "那儿，那里在这种情况下在那时",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „da“ bedeutet hier „那儿，那里在这种情况下在那时“.",
        "zh": "“da”在这里表示“那儿，那里在这种情况下在那时”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0145",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Dame.",
        "zh": "今天我们谈论女士。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0146",
    "german": "daneben",
    "translation": "在旁边",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute daneben.",
        "zh": "我们今天想在旁边。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0147",
    "german": "danken",
    "translation": "感谢",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute danken.",
        "zh": "我们今天想感谢。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0148",
    "german": "Dank",
    "translation": "感谢",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Dank.",
        "zh": "今天我们谈论感谢。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0149",
    "german": "danke",
    "translation": "谢谢",
    "kind": "particle",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "请",
      "是的真的，的确",
      "不是"
    ],
    "distractorIds": [
      "a1-alpha-0116",
      "a1-alpha-0340",
      "a1-alpha-0452"
    ],
    "examples": [
      {
        "de": "Das Wort „danke“ bedeutet hier „谢谢“.",
        "zh": "“danke”在这里表示“谢谢”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0150",
    "german": "dann",
    "translation": "此后、然后",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „dann“ bedeutet hier „此后、然后“.",
        "zh": "“dann”在这里表示“此后、然后”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0151",
    "german": "Datum",
    "translation": "日期",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Datum.",
        "zh": "今天我们谈论日期。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0152",
    "german": "dauern",
    "translation": "持续",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute dauern.",
        "zh": "我们今天想持续。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0153",
    "german": "dein-",
    "translation": "你的",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（第四格）",
      "你（第三格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Das Wort „dein-“ bedeutet hier „你的“.",
        "zh": "“dein-”在这里表示“你的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0154",
    "german": "denn",
    "translation": "究竟因为",
    "kind": "conjunction",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "可是",
      "也就是说，可见",
      "或者"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0012",
      "a1-alpha-0463"
    ],
    "examples": [
      {
        "de": "Das Wort „denn“ bedeutet hier „究竟因为“.",
        "zh": "“denn”在这里表示“究竟因为”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0155",
    "german": "der",
    "translation": "这个（阳性，中性，阴性）",
    "kind": "adverb",
    "plural": "die, das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „der“ bedeutet hier „这个（阳性，中性，阴性）“.",
        "zh": "“der”在这里表示“这个（阳性，中性，阴性）”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0156",
    "german": "dich",
    "translation": "你（第四格）",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第三格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Das Wort „dich“ bedeutet hier „你（第四格）“.",
        "zh": "“dich”在这里表示“你（第四格）”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0157",
    "german": "dies-",
    "translation": "这个",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „dies-“ bedeutet hier „这个“.",
        "zh": "“dies-”在这里表示“这个”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0158",
    "german": "dir",
    "translation": "你（第三格）",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Das Wort „dir“ bedeutet hier „你（第三格）“.",
        "zh": "“dir”在这里表示“你（第三格）”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0160",
    "german": "Doktor",
    "translation": "男博士",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Doktor.",
        "zh": "今天我们谈论男博士。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0162",
    "german": "Dorf",
    "translation": "乡村，村庄",
    "kind": "noun",
    "article": "das",
    "plural": "-ö, er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Dorf.",
        "zh": "今天我们谈论乡村，村庄。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0163",
    "german": "dort",
    "translation": "那里，那儿",
    "kind": "adverb",
    "plural": "-her, -hin",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „dort“ bedeutet hier „那里，那儿“.",
        "zh": "“dort”在这里表示“那里，那儿”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0164",
    "german": "draußen",
    "translation": "在外面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute draußen.",
        "zh": "我们今天想在外面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0165",
    "german": "drucken",
    "translation": "打印",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute drucken.",
        "zh": "我们今天想打印。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0166",
    "german": "Drucker",
    "translation": "打印机",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Drucker.",
        "zh": "今天我们谈论打印机。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0167",
    "german": "drücken",
    "translation": "压，按",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute drücken.",
        "zh": "我们今天想压，按。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0168",
    "german": "durch",
    "translation": "穿过，经过通过",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „durch“ bedeutet hier „穿过，经过通过“.",
        "zh": "“durch”在这里表示“穿过，经过通过”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0169",
    "german": "Durchsage",
    "translation": "广播通知",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Durchsage.",
        "zh": "今天我们谈论广播通知。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0170",
    "german": "dürfen",
    "translation": "允许",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute dürfen.",
        "zh": "我们今天想允许。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0172",
    "german": "(sich) duschen",
    "translation": "淋浴",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns duschen.",
        "zh": "我们今天想淋浴。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0173",
    "german": "Dusche",
    "translation": "淋浴间",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Dusche.",
        "zh": "今天我们谈论淋浴间。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0174",
    "german": "Ecke",
    "translation": "角落；街角",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Ecke.",
        "zh": "今天我们谈论角落；街角。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0177",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Ei.",
        "zh": "今天我们谈论鸡蛋。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0178",
    "german": "eilig",
    "translation": "匆忙的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „eilig“ bedeutet hier „匆忙的“.",
        "zh": "“eilig”在这里表示“匆忙的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0179",
    "german": "ein-",
    "translation": "一个；某个",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „ein-“ bedeutet hier „一个；某个“.",
        "zh": "“ein-”在这里表示“一个；某个”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0180",
    "german": "einfach",
    "translation": "简单的；单程的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „einfach“ bedeutet hier „简单的；单程的“.",
        "zh": "“einfach”在这里表示“简单的；单程的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0181",
    "german": "Eingang",
    "translation": "入口",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Eingang.",
        "zh": "今天我们谈论入口。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0184",
    "german": "Einladung",
    "translation": "邀请信",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Einladung.",
        "zh": "今天我们谈论邀请信。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0185",
    "german": "einmal",
    "translation": "一次",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „einmal“ bedeutet hier „一次“.",
        "zh": "“einmal”在这里表示“一次”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0186",
    "german": "einsteigen",
    "translation": "上车，上船",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute einsteigen.",
        "zh": "我们今天想上车，上船。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0187",
    "german": "Eintritt",
    "translation": "入场",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Eintritt.",
        "zh": "今天我们谈论入场。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0190",
    "german": "E-Mail",
    "translation": "电子邮件",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die E-Mail.",
        "zh": "今天我们谈论电子邮件。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0191",
    "german": "Empfänger",
    "translation": "收件人",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Empfänger.",
        "zh": "今天我们谈论收件人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0192",
    "german": "empfehlen",
    "translation": "推荐",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute empfehlen.",
        "zh": "我们今天想推荐。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0193",
    "german": "enden",
    "translation": "结束",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute enden.",
        "zh": "我们今天想结束。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0194",
    "german": "Ende",
    "translation": "尽头，末尾",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Ende.",
        "zh": "今天我们谈论尽头，末尾。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0195",
    "german": "entschuldigen",
    "translation": "原谅",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute entschuldigen.",
        "zh": "我们今天想原谅。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0196",
    "german": "Entschuldigung",
    "translation": "对不起",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Entschuldigung.",
        "zh": "今天我们谈论对不起。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0197",
    "german": "er",
    "translation": "他",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „er“ bedeutet hier „他“.",
        "zh": "“er”在这里表示“他”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0198",
    "german": "Ergebnis",
    "translation": "结果",
    "kind": "noun",
    "article": "das",
    "plural": "-se",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Ergebnis.",
        "zh": "今天我们谈论结果。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0199",
    "german": "erklären",
    "translation": "解释",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute erklären.",
        "zh": "我们今天想解释。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0200",
    "german": "erlauben",
    "translation": "允许",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute erlauben.",
        "zh": "我们今天想允许。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0201",
    "german": "Erwachsene",
    "translation": "成年人",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Erwachsene.",
        "zh": "今天我们谈论成年人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0202",
    "german": "erzählen",
    "translation": "讲述",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute erzählen.",
        "zh": "我们今天想讲述。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0203",
    "german": "es",
    "translation": "它",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „es“ bedeutet hier „它“.",
        "zh": "“es”在这里表示“它”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0206",
    "german": "euer",
    "translation": "你们的",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „euer“ bedeutet hier „你们的“.",
        "zh": "“euer”在这里表示“你们的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0211",
    "german": "falsch",
    "translation": "错误的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „falsch“ bedeutet hier „错误的“.",
        "zh": "“falsch”在这里表示“错误的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0215",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Farbe.",
        "zh": "今天我们谈论颜色。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0219",
    "german": "fehlen",
    "translation": "缺少",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute fehlen.",
        "zh": "我们今天想缺少。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0220",
    "german": "Fehler",
    "translation": "错误",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Fehler.",
        "zh": "今天我们谈论错误。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0222",
    "german": "fertig",
    "translation": "完工的，完成的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „fertig“ bedeutet hier „完工的，完成的“.",
        "zh": "“fertig”在这里表示“完工的，完成的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0223",
    "german": "Feuer",
    "translation": "火",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Feuer.",
        "zh": "今天我们谈论火。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0224",
    "german": "Fieber",
    "translation": "发烧（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Fieber.",
        "zh": "今天我们谈论发烧（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0225",
    "german": "Film",
    "translation": "电影院",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Film.",
        "zh": "今天我们谈论电影院。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0226",
    "german": "finden",
    "translation": "找到认为",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute finden.",
        "zh": "我们今天想找到认为。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0227",
    "german": "Firma",
    "translation": "公司",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Firma.",
        "zh": "今天我们谈论公司。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0228",
    "german": "Fisch",
    "translation": "鱼",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Fisch.",
        "zh": "今天我们谈论鱼。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0229",
    "german": "Flasche",
    "translation": "瓶子",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Flasche.",
        "zh": "今天我们谈论瓶子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0231",
    "german": "fliegen",
    "translation": "乘飞机",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute fliegen.",
        "zh": "我们今天想乘飞机。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0232",
    "german": "abfliegen",
    "translation": "起飞",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute abfliegen.",
        "zh": "我们今天想起飞。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0236",
    "german": "Formular",
    "translation": "表格",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Formular.",
        "zh": "今天我们谈论表格。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0238",
    "german": "fragen",
    "translation": "问",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute fragen.",
        "zh": "我们今天想问。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0239",
    "german": "Frage",
    "translation": "问题",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Frage.",
        "zh": "今天我们谈论问题。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0241",
    "german": "frei",
    "translation": "空着的，无人占用的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „frei“ bedeutet hier „空着的，无人占用的“.",
        "zh": "“frei”在这里表示“空着的，无人占用的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0243",
    "german": "fremd",
    "translation": "陌生的；外来的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „fremd“ bedeutet hier „陌生的；外来的“.",
        "zh": "“fremd”在这里表示“陌生的；外来的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0244",
    "german": "(sich) freuen",
    "translation": "高兴；期待",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns freuen.",
        "zh": "我们今天想高兴；期待。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0246",
    "german": "früher",
    "translation": "以前；更早",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „früher“ bedeutet hier „以前；更早“.",
        "zh": "“früher”在这里表示“以前；更早”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0249",
    "german": "Führung",
    "translation": "导游",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Führung.",
        "zh": "今天我们谈论导游。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0250",
    "german": "für",
    "translation": "为了为了，由于",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „für“ bedeutet hier „为了为了，由于“.",
        "zh": "“für”在这里表示“为了为了，由于”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0251",
    "german": "Fuß",
    "translation": "足",
    "kind": "noun",
    "article": "der",
    "plural": "-ü, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Fuß.",
        "zh": "今天我们谈论足。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0254",
    "german": "Gast",
    "translation": "客人",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Gast.",
        "zh": "今天我们谈论客人。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0255",
    "german": "geben",
    "translation": "有，存在递给",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute geben.",
        "zh": "我们今天想有，存在递给。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0256",
    "german": "geboren",
    "translation": "出生",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „geboren“ bedeutet hier „出生“.",
        "zh": "“geboren”在这里表示“出生”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0260",
    "german": "gefallen",
    "translation": "喜欢",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute gefallen.",
        "zh": "我们今天想喜欢。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0261",
    "german": "gegen",
    "translation": "防对，对阵",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „gegen“ bedeutet hier „防对，对阵“.",
        "zh": "“gegen”在这里表示“防对，对阵”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0263",
    "german": "gehören",
    "translation": "属于",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute gehören.",
        "zh": "我们今天想属于。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0265",
    "german": "Gemüse",
    "translation": "蔬菜（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Gemüse.",
        "zh": "今天我们谈论蔬菜（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0267",
    "german": "gerade",
    "translation": "恰巧，刚刚正立的，挺直的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „gerade“ bedeutet hier „恰巧，刚刚正立的，挺直的“.",
        "zh": "“gerade”在这里表示“恰巧，刚刚正立的，挺直的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0268",
    "german": "geradeaus",
    "translation": "一直向前的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „geradeaus“ bedeutet hier „一直向前的“.",
        "zh": "“geradeaus”在这里表示“一直向前的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0269",
    "german": "gern(e)",
    "translation": "乐意，喜欢",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „gern(e)“ bedeutet hier „乐意，喜欢“.",
        "zh": "“gern(e)”在这里表示“乐意，喜欢”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0271",
    "german": "Geschenk",
    "translation": "礼物",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Geschenk.",
        "zh": "今天我们谈论礼物。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0272",
    "german": "Geschwister (pl.)",
    "translation": "兄弟姐妹",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Geschwister (pl.).",
        "zh": "今天我们谈论兄弟姐妹。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0273",
    "german": "Gespräch",
    "translation": "谈话",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Gespräch.",
        "zh": "今天我们谈论谈话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0274",
    "german": "gestern",
    "translation": "昨天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute gestern.",
        "zh": "我们今天想昨天。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0275",
    "german": "gestorben",
    "translation": "去世的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „gestorben“ bedeutet hier „去世的“.",
        "zh": "“gestorben”在这里表示“去世的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0276",
    "german": "Getränk",
    "translation": "饮料",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Getränk.",
        "zh": "今天我们谈论饮料。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0277",
    "german": "Gewicht",
    "translation": "重量",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Gewicht.",
        "zh": "今天我们谈论重量。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0278",
    "german": "gewinnen",
    "translation": "中奖",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute gewinnen.",
        "zh": "我们今天想中奖。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0279",
    "german": "Glas",
    "translation": "玻璃杯",
    "kind": "noun",
    "article": "das",
    "plural": "-ä, er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Glas.",
        "zh": "今天我们谈论玻璃杯。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0280",
    "german": "glauben",
    "translation": "相信",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute glauben.",
        "zh": "我们今天想相信。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0281",
    "german": "gleich",
    "translation": "立刻，马上同样，一样",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „gleich“ bedeutet hier „立刻，马上同样，一样“.",
        "zh": "“gleich”在这里表示“立刻，马上同样，一样”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0282",
    "german": "Gleis",
    "translation": "站台",
    "kind": "noun",
    "article": "das",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Gleis.",
        "zh": "今天我们谈论站台。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0283",
    "german": "Glück",
    "translation": "运气，幸福",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Glück.",
        "zh": "今天我们谈论运气，幸福。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0284",
    "german": "glücklich",
    "translation": "幸福的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „glücklich“ bedeutet hier „幸福的“.",
        "zh": "“glücklich”在这里表示“幸福的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0285",
    "german": "Glückwunsch",
    "translation": "祝贺，祝愿",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Glückwunsch.",
        "zh": "今天我们谈论祝贺，祝愿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0287",
    "german": "gratulieren",
    "translation": "祝贺",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute gratulieren.",
        "zh": "我们今天想祝贺。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0288",
    "german": "grillen",
    "translation": "烧烤",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute grillen.",
        "zh": "我们今天想烧烤。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0289",
    "german": "groß",
    "translation": "大的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „groß“ bedeutet hier „大的“.",
        "zh": "“groß”在这里表示“大的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0290",
    "german": "Größe",
    "translation": "尺码",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Größe.",
        "zh": "今天我们谈论尺码。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0294",
    "german": "Gruppe",
    "translation": "团体",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Gruppe.",
        "zh": "今天我们谈论团体。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0295",
    "german": "Gruß",
    "translation": "问候，致意",
    "kind": "noun",
    "article": "der",
    "plural": "-ü, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Gruß.",
        "zh": "今天我们谈论问候，致意。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0296",
    "german": "gültig",
    "translation": "有效的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „gültig“ bedeutet hier „有效的“.",
        "zh": "“gültig”在这里表示“有效的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0297",
    "german": "günstig",
    "translation": "价廉的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „günstig“ bedeutet hier „价廉的“.",
        "zh": "“günstig”在这里表示“价廉的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0298",
    "german": "gut",
    "translation": "好的好的好的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „gut“ bedeutet hier „好的好的好的“.",
        "zh": "“gut”在这里表示“好的好的好的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0300",
    "german": "haben",
    "translation": "有",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute haben.",
        "zh": "我们今天想有。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0301",
    "german": "Hähnchen",
    "translation": "鸡肉",
    "kind": "noun",
    "article": "das",
    "plural": "-",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Hähnchen.",
        "zh": "今天我们谈论鸡肉。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0302",
    "german": "Halbpension",
    "translation": "半膳住宿",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Halbpension.",
        "zh": "今天我们谈论半膳住宿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0303",
    "german": "Halle",
    "translation": "大厅",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Halle.",
        "zh": "今天我们谈论大厅。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0304",
    "german": "hallo",
    "translation": "你好",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „hallo“ bedeutet hier „你好“.",
        "zh": "“hallo”在这里表示“你好”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0305",
    "german": "halten",
    "translation": "保持 ... 状态",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute halten.",
        "zh": "我们今天想保持 ... 状态。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0306",
    "german": "Haltestelle",
    "translation": "公车站，电车站",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Haltestelle.",
        "zh": "今天我们谈论公车站，电车站。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0307",
    "german": "Hand",
    "translation": "手",
    "kind": "noun",
    "article": "die",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Hand.",
        "zh": "今天我们谈论手。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0308",
    "german": "Handy",
    "translation": "手机",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Handy.",
        "zh": "今天我们谈论手机。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0313",
    "german": "Heimat",
    "translation": "家乡",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Heimat.",
        "zh": "今天我们谈论家乡。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0314",
    "german": "heiraten",
    "translation": "结婚",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute heiraten.",
        "zh": "我们今天想结婚。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0315",
    "german": "heißen",
    "translation": "叫，名为称为，意味着",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute heißen.",
        "zh": "我们今天想叫，名为称为，意味着。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0316",
    "german": "helfen",
    "translation": "帮助",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute helfen.",
        "zh": "我们今天想帮助。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0317",
    "german": "hell",
    "translation": "明亮的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „hell“ bedeutet hier „明亮的“.",
        "zh": "“hell”在这里表示“明亮的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0318",
    "german": "Herd",
    "translation": "炉灶",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Herd.",
        "zh": "今天我们谈论炉灶。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0319",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Herr.",
        "zh": "今天我们谈论先生。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0320",
    "german": "herzlich",
    "translation": "衷心的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „herzlich“ bedeutet hier „衷心的“.",
        "zh": "“herzlich”在这里表示“衷心的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0321",
    "german": "heute",
    "translation": "今天",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „heute“ bedeutet hier „今天“.",
        "zh": "“heute”在这里表示“今天”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0322",
    "german": "hier",
    "translation": "这里这里",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „hier“ bedeutet hier „这里这里“.",
        "zh": "“hier”在这里表示“这里这里”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0323",
    "german": "Hilfe",
    "translation": "帮助",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Hilfe.",
        "zh": "今天我们谈论帮助。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0324",
    "german": "hinten",
    "translation": "后面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute hinten.",
        "zh": "我们今天想后面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0325",
    "german": "Hobby",
    "translation": "爱好",
    "kind": "noun",
    "article": "das",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Hobby.",
        "zh": "今天我们谈论爱好。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0326",
    "german": "hoch",
    "translation": "高的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „hoch“ bedeutet hier „高的“.",
        "zh": "“hoch”在这里表示“高的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0327",
    "german": "Hochzeit",
    "translation": "婚礼",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Hochzeit.",
        "zh": "今天我们谈论婚礼。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0328",
    "german": "holen",
    "translation": "取来，拿来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute holen.",
        "zh": "我们今天想取来，拿来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0329",
    "german": "hören",
    "translation": "听听",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute hören.",
        "zh": "我们今天想听听。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0331",
    "german": "Hund",
    "translation": "狗",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Hund.",
        "zh": "今天我们谈论狗。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0333",
    "german": "ich",
    "translation": "我",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „ich“ bedeutet hier „我“.",
        "zh": "“ich”在这里表示“我”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0334",
    "german": "ihr/ihm/ihn",
    "translation": "她的；给他；他（第四格）",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „ihr/ihm/ihn“ bedeutet hier „她的；给他；他（第四格）“.",
        "zh": "“ihr/ihm/ihn”在这里表示“她的；给他；他（第四格）”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0335",
    "german": "immer",
    "translation": "总是",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „immer“ bedeutet hier „总是“.",
        "zh": "“immer”在这里表示“总是”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0336",
    "german": "in",
    "translation": "在……里；进入",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „in“ bedeutet hier „在……里；进入“.",
        "zh": "“in”在这里表示“在……里；进入”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0337",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Information.",
        "zh": "今天我们谈论信息。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0338",
    "german": "international",
    "translation": "国际的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „international“ bedeutet hier „国际的“.",
        "zh": "“international”在这里表示“国际的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0339",
    "german": "Internet",
    "translation": "因特网（单数形式）",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Internet.",
        "zh": "今天我们谈论因特网（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0340",
    "german": "ja",
    "translation": "是的真的，的确",
    "kind": "particle",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "请",
      "谢谢",
      "不是"
    ],
    "distractorIds": [
      "a1-alpha-0116",
      "a1-alpha-0149",
      "a1-alpha-0452"
    ],
    "examples": [
      {
        "de": "Das Wort „ja“ bedeutet hier „是的真的，的确“.",
        "zh": "“ja”在这里表示“是的真的，的确”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0341",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Jacke.",
        "zh": "今天我们谈论夹克。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0342",
    "german": "jed-",
    "translation": "每个",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „jed-“ bedeutet hier „每个“.",
        "zh": "“jed-”在这里表示“每个”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0343",
    "german": "jetzt",
    "translation": "现在",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „jetzt“ bedeutet hier „现在“.",
        "zh": "“jetzt”在这里表示“现在”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0344",
    "german": "Job",
    "translation": "打工",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Job.",
        "zh": "今天我们谈论打工。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0345",
    "german": "Jugendliche",
    "translation": "青少年",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Jugendliche.",
        "zh": "今天我们谈论青少年。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0346",
    "german": "jung",
    "translation": "年轻的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „jung“ bedeutet hier „年轻的“.",
        "zh": "“jung”在这里表示“年轻的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0347",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Junge.",
        "zh": "今天我们谈论男孩。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0349",
    "german": "kaputt",
    "translation": "损坏的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „kaputt“ bedeutet hier „损坏的“.",
        "zh": "“kaputt”在这里表示“损坏的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0352",
    "german": "Kartoffel",
    "translation": "土豆",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Kartoffel.",
        "zh": "今天我们谈论土豆。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0353",
    "german": "Kasse",
    "translation": "收银台",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Kasse.",
        "zh": "今天我们谈论收银台。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0355",
    "german": "kein",
    "translation": "没有一个，没有",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „kein“ bedeutet hier „没有一个，没有“.",
        "zh": "“kein”在这里表示“没有一个，没有”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0356",
    "german": "kennen",
    "translation": "了解",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kennen.",
        "zh": "我们今天想了解。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0357",
    "german": "kennenlernen",
    "translation": "认识",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kennenlernen.",
        "zh": "我们今天想认识。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0361",
    "german": "Kiosk",
    "translation": "书报亭",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kiosk.",
        "zh": "今天我们谈论书报亭。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0362",
    "german": "klar",
    "translation": "当然，显然",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „klar“ bedeutet hier „当然，显然“.",
        "zh": "“klar”在这里表示“当然，显然”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0363",
    "german": "Klasse",
    "translation": "年纪",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Klasse.",
        "zh": "今天我们谈论年纪。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0365",
    "german": "klein",
    "translation": "小的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „klein“ bedeutet hier „小的“.",
        "zh": "“klein”在这里表示“小的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0366",
    "german": "kochen",
    "translation": "烹饪",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kochen.",
        "zh": "我们今天想烹饪。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0369",
    "german": "kommen",
    "translation": "来来，来到",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kommen.",
        "zh": "我们今天想来来，来到。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0370",
    "german": "können",
    "translation": "能够，会能够",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute können.",
        "zh": "我们今天想能够，会能够。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0373",
    "german": "kosten",
    "translation": "价值，价格为",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kosten.",
        "zh": "我们今天想价值，价格为。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0374",
    "german": "krank",
    "translation": "患病的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „krank“ bedeutet hier „患病的“.",
        "zh": "“krank”在这里表示“患病的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0375",
    "german": "kriegen",
    "translation": "得到",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute kriegen.",
        "zh": "我们今天想得到。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0377",
    "german": "Kuchen",
    "translation": "糕点",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kuchen.",
        "zh": "今天我们谈论糕点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0378",
    "german": "Kugelschreiber",
    "translation": "圆珠笔",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kugelschreiber.",
        "zh": "今天我们谈论圆珠笔。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0379",
    "german": "Kühlschrank",
    "translation": "冰箱",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kühlschrank.",
        "zh": "今天我们谈论冰箱。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0380",
    "german": "kulturell",
    "translation": "文化方面的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „kulturell“ bedeutet hier „文化方面的“.",
        "zh": "“kulturell”在这里表示“文化方面的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0381",
    "german": "sich kümmern",
    "translation": "照料；关心",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns kümmern.",
        "zh": "我们今天想照料；关心。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0382",
    "german": "Kunde",
    "translation": "男顾客",
    "kind": "noun",
    "article": "der",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kunde.",
        "zh": "今天我们谈论男顾客。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0383",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Kurs.",
        "zh": "今天我们谈论课程。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0384",
    "german": "kurz",
    "translation": "简短的短的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „kurz“ bedeutet hier „简短的短的“.",
        "zh": "“kurz”在这里表示“简短的短的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0385",
    "german": "lachen",
    "translation": "笑",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute lachen.",
        "zh": "我们今天想笑。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0387",
    "german": "Land",
    "translation": "国家",
    "kind": "noun",
    "article": "das",
    "plural": "-ä, er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Land.",
        "zh": "今天我们谈论国家。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0388",
    "german": "lang",
    "translation": "长的长的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „lang“ bedeutet hier „长的长的“.",
        "zh": "“lang”在这里表示“长的长的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0389",
    "german": "lange",
    "translation": "长时间；很久",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „lange“ bedeutet hier „长时间；很久“.",
        "zh": "“lange”在这里表示“长时间；很久”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0390",
    "german": "langsam",
    "translation": "缓慢的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „langsam“ bedeutet hier „缓慢的“.",
        "zh": "“langsam”在这里表示“缓慢的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0391",
    "german": "laufen",
    "translation": "走路，步行运转，进行",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute laufen.",
        "zh": "我们今天想走路，步行运转，进行。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0392",
    "german": "laut",
    "translation": "喧闹的，响亮的...",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „laut“ bedeutet hier „喧闹的，响亮的...“.",
        "zh": "“laut”在这里表示“喧闹的，响亮的...”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0393",
    "german": "leben",
    "translation": "生活",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute leben.",
        "zh": "我们今天想生活。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0394",
    "german": "Leben",
    "translation": "生活",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Leben.",
        "zh": "今天我们谈论生活。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0395",
    "german": "Lebensmittel (pl.)",
    "translation": "食品",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Lebensmittel (pl.).",
        "zh": "今天我们谈论食品。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0396",
    "german": "ledig",
    "translation": "未婚的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „ledig“ bedeutet hier „未婚的“.",
        "zh": "“ledig”在这里表示“未婚的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0397",
    "german": "legen",
    "translation": "把 ... 平放",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute legen.",
        "zh": "我们今天想把 ... 平放。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0398",
    "german": "Lehrer",
    "translation": "男老师",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Lehrer.",
        "zh": "今天我们谈论男老师。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0399",
    "german": "leicht",
    "translation": "轻微的薄的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „leicht“ bedeutet hier „轻微的薄的“.",
        "zh": "“leicht”在这里表示“轻微的薄的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0400",
    "german": "leider",
    "translation": "可惜",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „leider“ bedeutet hier „可惜“.",
        "zh": "“leider”在这里表示“可惜”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0401",
    "german": "leise",
    "translation": "低声的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „leise“ bedeutet hier „低声的“.",
        "zh": "“leise”在这里表示“低声的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0403",
    "german": "lesen",
    "translation": "读",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute lesen.",
        "zh": "我们今天想读。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0404",
    "german": "letzt-",
    "translation": "最后的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „letzt-“ bedeutet hier „最后的“.",
        "zh": "“letzt-”在这里表示“最后的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0405",
    "german": "Leute (pl.)",
    "translation": "人们",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Leute (pl.).",
        "zh": "今天我们谈论人们。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0407",
    "german": "lieb-",
    "translation": "亲爱的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „lieb-“ bedeutet hier „亲爱的“.",
        "zh": "“lieb-”在这里表示“亲爱的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0408",
    "german": "lieben",
    "translation": "热爱，喜爱",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute lieben.",
        "zh": "我们今天想热爱，喜爱。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0409",
    "german": "lieber",
    "translation": "宁愿，更喜欢",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „lieber“ bedeutet hier „宁愿，更喜欢“.",
        "zh": "“lieber”在这里表示“宁愿，更喜欢”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0410",
    "german": "Lieblings-",
    "translation": "最喜欢的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „Lieblings-“ bedeutet hier „最喜欢的“.",
        "zh": "“Lieblings-”在这里表示“最喜欢的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0412",
    "german": "liegen",
    "translation": "位于躺，卧（指物）平放，横放位于",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute liegen.",
        "zh": "我们今天想位于躺，卧（指物）平放，横放位于。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0413",
    "german": "links",
    "translation": "在左边",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „links“ bedeutet hier „在左边“.",
        "zh": "“links”在这里表示“在左边”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0414",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Lkw.",
        "zh": "今天我们谈论卡车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0415",
    "german": "Lokal",
    "translation": "餐馆；店铺",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Lokal.",
        "zh": "今天我们谈论餐馆；店铺。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0416",
    "german": "Lösung",
    "translation": "答案；解决办法",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Lösung.",
        "zh": "今天我们谈论答案；解决办法。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0417",
    "german": "lustig",
    "translation": "有趣的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „lustig“ bedeutet hier „有趣的“.",
        "zh": "“lustig”在这里表示“有趣的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0418",
    "german": "machen",
    "translation": "做",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute machen.",
        "zh": "我们今天想做。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0419",
    "german": "Mädchen",
    "translation": "女孩",
    "kind": "noun",
    "article": "das",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Mädchen.",
        "zh": "今天我们谈论女孩。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0420",
    "german": "man",
    "translation": "人们",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „man“ bedeutet hier „人们“.",
        "zh": "“man”在这里表示“人们”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0422",
    "german": "männlich",
    "translation": "男性的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „männlich“ bedeutet hier „男性的“.",
        "zh": "“männlich”在这里表示“男性的”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0423",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Maschine.",
        "zh": "今天我们谈论机器。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0425",
    "german": "mehr",
    "translation": "更多",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „mehr“ bedeutet hier „更多“.",
        "zh": "“mehr”在这里表示“更多”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0426",
    "german": "mein",
    "translation": "我的",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „mein“ bedeutet hier „我的“.",
        "zh": "“mein”在这里表示“我的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0427",
    "german": "meist-",
    "translation": "大多数的",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „meist-“ bedeutet hier „大多数的“.",
        "zh": "“meist-”在这里表示“大多数的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0432",
    "german": "mit",
    "translation": "和 … 一起，同在 … 的时候",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „mit“ bedeutet hier „和 … 一起，同在 … 的时候“.",
        "zh": "“mit”在这里表示“和 … 一起，同在 … 的时候”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0433",
    "german": "mitbringen",
    "translation": "带来",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute mitbringen.",
        "zh": "我们今天想带来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0434",
    "german": "mitkommen",
    "translation": "同来，同去",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute mitkommen.",
        "zh": "我们今天想同来，同去。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0435",
    "german": "mitmachen",
    "translation": "参加",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute mitmachen.",
        "zh": "我们今天想参加。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0436",
    "german": "mitnehmen",
    "translation": "一起带走，顺便带走",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute mitnehmen.",
        "zh": "我们今天想一起带走，顺便带走。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0437",
    "german": "Mitte",
    "translation": "中间",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Mitte.",
        "zh": "今天我们谈论中间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0439",
    "german": "möchten",
    "translation": "想要",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute möchten.",
        "zh": "我们今天想想要。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0440",
    "german": "mögen",
    "translation": "喜欢",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute mögen.",
        "zh": "我们今天想喜欢。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0441",
    "german": "möglich",
    "translation": "可行的，可能的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „möglich“ bedeutet hier „可行的，可能的“.",
        "zh": "“möglich”在这里表示“可行的，可能的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0442",
    "german": "Moment",
    "translation": "片刻，瞬间",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Moment.",
        "zh": "今天我们谈论片刻，瞬间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0443",
    "german": "morgen",
    "translation": "明天",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute morgen.",
        "zh": "我们今天想明天。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0444",
    "german": "müde",
    "translation": "疲倦的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „müde“ bedeutet hier „疲倦的“.",
        "zh": "“müde”在这里表示“疲倦的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0445",
    "german": "Mund",
    "translation": "嘴",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Mund.",
        "zh": "今天我们谈论嘴。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0446",
    "german": "müssen",
    "translation": "必须",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute müssen.",
        "zh": "我们今天想必须。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0448",
    "german": "nach",
    "translation": "在 … 之后在 … 之后到 … 去",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „nach“ bedeutet hier „在 … 之后在 … 之后到 … 去“.",
        "zh": "“nach”在这里表示“在 … 之后在 … 之后到 … 去”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0449",
    "german": "nächst-",
    "translation": "下一个",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „nächst-“ bedeutet hier „下一个“.",
        "zh": "“nächst-”在这里表示“下一个”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0451",
    "german": "nehmen",
    "translation": "选择，选购乘，坐服用",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute nehmen.",
        "zh": "我们今天想选择，选购乘，坐服用。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0452",
    "german": "nein",
    "translation": "不是",
    "kind": "particle",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "请",
      "谢谢",
      "是的真的，的确"
    ],
    "distractorIds": [
      "a1-alpha-0116",
      "a1-alpha-0149",
      "a1-alpha-0340"
    ],
    "examples": [
      {
        "de": "Das Wort „nein“ bedeutet hier „不是“.",
        "zh": "“nein”在这里表示“不是”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0453",
    "german": "neu",
    "translation": "新的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „neu“ bedeutet hier „新的“.",
        "zh": "“neu”在这里表示“新的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0454",
    "german": "nicht",
    "translation": "不",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „nicht“ bedeutet hier „不“.",
        "zh": "“nicht”在这里表示“不”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0455",
    "german": "nichts",
    "translation": "什么也没有",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „nichts“ bedeutet hier „什么也没有“.",
        "zh": "“nichts”在这里表示“什么也没有”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0456",
    "german": "nie",
    "translation": "从不，从未",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „nie“ bedeutet hier „从不，从未“.",
        "zh": "“nie”在这里表示“从不，从未”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0457",
    "german": "noch",
    "translation": "还",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „noch“ bedeutet hier „还“.",
        "zh": "“noch”在这里表示“还”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0458",
    "german": "normal",
    "translation": "正常的，普通的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „normal“ bedeutet hier „正常的，普通的“.",
        "zh": "“normal”在这里表示“正常的，普通的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0459",
    "german": "Nummer",
    "translation": "号码",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Nummer.",
        "zh": "今天我们谈论号码。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0460",
    "german": "nur",
    "translation": "只；仅仅",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „nur“ bedeutet hier „只；仅仅“.",
        "zh": "“nur”在这里表示“只；仅仅”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0461",
    "german": "oben",
    "translation": "在上面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute oben.",
        "zh": "我们今天想在上面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0463",
    "german": "oder",
    "translation": "或者",
    "kind": "conjunction",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "可是",
      "也就是说，可见",
      "究竟因为"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0012",
      "a1-alpha-0154"
    ],
    "examples": [
      {
        "de": "Das Wort „oder“ bedeutet hier „或者“.",
        "zh": "“oder”在这里表示“或者”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0464",
    "german": "öffnen",
    "translation": "开门",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute öffnen.",
        "zh": "我们今天想开门。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0465",
    "german": "geöffnet",
    "translation": "开门的，开放的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „geöffnet“ bedeutet hier „开门的，开放的“.",
        "zh": "“geöffnet”在这里表示“开门的，开放的”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0466",
    "german": "oft",
    "translation": "经常",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „oft“ bedeutet hier „经常“.",
        "zh": "“oft”在这里表示“经常”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0467",
    "german": "ohne",
    "translation": "没有，无",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „ohne“ bedeutet hier „没有，无“.",
        "zh": "“ohne”在这里表示“没有，无”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0469",
    "german": "Oma",
    "translation": "祖母，外祖母",
    "kind": "noun",
    "article": "die",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Oma.",
        "zh": "今天我们谈论祖母，外祖母。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0470",
    "german": "Opa",
    "translation": "爷爷，姥爷",
    "kind": "noun",
    "article": "der",
    "plural": "-s",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Opa.",
        "zh": "今天我们谈论爷爷，姥爷。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0471",
    "german": "Ordnung",
    "translation": "秩序；正常状态",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Ordnung.",
        "zh": "今天我们谈论秩序；正常状态。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0472",
    "german": "Ort",
    "translation": "地方，地点",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Ort.",
        "zh": "今天我们谈论地方，地点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0473",
    "german": "Papier",
    "translation": "纸张",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Papier.",
        "zh": "今天我们谈论纸张。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0474",
    "german": "Papiere (pl.)",
    "translation": "证件；文件",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Papiere (pl.).",
        "zh": "今天我们谈论证件；文件。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0479",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Pause.",
        "zh": "今天我们谈论休息。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0480",
    "german": "Plan",
    "translation": "规划，计划计划计划",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Plan.",
        "zh": "今天我们谈论规划，计划计划计划。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0481",
    "german": "Platz",
    "translation": "空间（单数形式）",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Platz.",
        "zh": "今天我们谈论空间（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0483",
    "german": "Pommes frites (pl.)",
    "translation": "炸薯条",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Pommes frites (pl.).",
        "zh": "今天我们谈论炸薯条。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0487",
    "german": "Praxis",
    "translation": "诊所",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Praxis.",
        "zh": "今天我们谈论诊所。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0489",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Problem.",
        "zh": "今天我们谈论问题。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0490",
    "german": "Prospekt",
    "translation": "宣传册，手册",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Prospekt.",
        "zh": "今天我们谈论宣传册，手册。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0491",
    "german": "Prüfung",
    "translation": "考试",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Prüfung.",
        "zh": "今天我们谈论考试。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0492",
    "german": "pünktlich",
    "translation": "准时的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „pünktlich“ bedeutet hier „准时的“.",
        "zh": "“pünktlich”在这里表示“准时的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0494",
    "german": "rauchen",
    "translation": "吸烟",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute rauchen.",
        "zh": "我们今天想吸烟。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0495",
    "german": "Raum",
    "translation": "房间",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Raum.",
        "zh": "今天我们谈论房间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0496",
    "german": "Rechnung",
    "translation": "账单",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Rechnung.",
        "zh": "今天我们谈论账单。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0497",
    "german": "rechts",
    "translation": "在右边",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „rechts“ bedeutet hier „在右边“.",
        "zh": "“rechts”在这里表示“在右边”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0498",
    "german": "regnen",
    "translation": "下雨",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute regnen.",
        "zh": "我们今天想下雨。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0505",
    "german": "reparieren",
    "translation": "修理",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute reparieren.",
        "zh": "我们今天想修理。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0508",
    "german": "Rezeption",
    "translation": "前台",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Rezeption.",
        "zh": "今天我们谈论前台。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0509",
    "german": "richtig",
    "translation": "正确的正确的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „richtig“ bedeutet hier „正确的正确的“.",
        "zh": "“richtig”在这里表示“正确的正确的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0510",
    "german": "riechen",
    "translation": "闻起来，发出气味",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute riechen.",
        "zh": "我们今天想闻起来，发出气味。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0511",
    "german": "ruhig",
    "translation": "安静的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „ruhig“ bedeutet hier „安静的“.",
        "zh": "“ruhig”在这里表示“安静的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0513",
    "german": "sagen",
    "translation": "说",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute sagen.",
        "zh": "我们今天想说。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0516",
    "german": "Satz",
    "translation": "句子",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Satz.",
        "zh": "今天我们谈论句子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0519",
    "german": "scheinen",
    "translation": "照耀",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute scheinen.",
        "zh": "我们今天想照耀。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0520",
    "german": "schicken",
    "translation": "寄",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute schicken.",
        "zh": "我们今天想寄。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0521",
    "german": "Schild",
    "translation": "牌子",
    "kind": "noun",
    "article": "das",
    "plural": "-er",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Schild.",
        "zh": "今天我们谈论牌子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0522",
    "german": "Schinken",
    "translation": "火腿",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schinken.",
        "zh": "今天我们谈论火腿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0523",
    "german": "schlafen",
    "translation": "睡觉",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute schlafen.",
        "zh": "我们今天想睡觉。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0524",
    "german": "schlecht",
    "translation": "差的；不舒服的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „schlecht“ bedeutet hier „差的；不舒服的“.",
        "zh": "“schlecht”在这里表示“差的；不舒服的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0525",
    "german": "schließen",
    "translation": "关门",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute schließen.",
        "zh": "我们今天想关门。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0526",
    "german": "geschlossen",
    "translation": "关门的，关闭的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „geschlossen“ bedeutet hier „关门的，关闭的“.",
        "zh": "“geschlossen”在这里表示“关门的，关闭的”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0527",
    "german": "Schluss",
    "translation": "结束语（单数形式）结束",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schluss.",
        "zh": "今天我们谈论结束语（单数形式）结束。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0529",
    "german": "schmecken",
    "translation": "觉得好吃，合口味",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute schmecken.",
        "zh": "我们今天想觉得好吃，合口味。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0530",
    "german": "schnell",
    "translation": "快的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „schnell“ bedeutet hier „快的“.",
        "zh": "“schnell”在这里表示“快的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0531",
    "german": "schon",
    "translation": "已经",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „schon“ bedeutet hier „已经“.",
        "zh": "“schon”在这里表示“已经”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0532",
    "german": "schön",
    "translation": "美丽的真好很，非常",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „schön“ bedeutet hier „美丽的真好很，非常“.",
        "zh": "“schön”在这里表示“美丽的真好很，非常”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0533",
    "german": "Schrank",
    "translation": "柜子",
    "kind": "noun",
    "article": "der",
    "plural": "-ä, e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schrank.",
        "zh": "今天我们谈论柜子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0534",
    "german": "schreiben",
    "translation": "写",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute schreiben.",
        "zh": "我们今天想写。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0537",
    "german": "Schüler",
    "translation": "男学生",
    "kind": "noun",
    "article": "der",
    "plural": "–",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Schüler.",
        "zh": "今天我们谈论男学生。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0538",
    "german": "schwer",
    "translation": "困难的沉重的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „schwer“ bedeutet hier „困难的沉重的“.",
        "zh": "“schwer”在这里表示“困难的沉重的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0543",
    "german": "sehen",
    "translation": "看，看见",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute sehen.",
        "zh": "我们今天想看，看见。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0544",
    "german": "Sehenswürdigkeit",
    "translation": "景点，名胜古迹",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Sehenswürdigkeit.",
        "zh": "今天我们谈论景点，名胜古迹。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0545",
    "german": "sehr",
    "translation": "很",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „sehr“ bedeutet hier „很“.",
        "zh": "“sehr”在这里表示“很”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0546",
    "german": "sein",
    "translation": "是",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute sein.",
        "zh": "我们今天想是。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0550",
    "german": "zu sein",
    "translation": "关着",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute zu sein.",
        "zh": "我们今天想关着。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0551",
    "german": "seit",
    "translation": "从 … 以来",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „seit“ bedeutet hier „从 … 以来“.",
        "zh": "“seit”在这里表示“从 … 以来”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0552",
    "german": "selbstständig",
    "translation": "独立的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „selbstständig“ bedeutet hier „独立的“.",
        "zh": "“selbstständig”在这里表示“独立的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0553",
    "german": "sich",
    "translation": "自己；自身",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „sich“ bedeutet hier „自己；自身“.",
        "zh": "“sich”在这里表示“自己；自身”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0554",
    "german": "sie",
    "translation": "您，您们",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „sie“ bedeutet hier „您，您们“.",
        "zh": "“sie”在这里表示“您，您们”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0555",
    "german": "Sie",
    "translation": "您，您们",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „Sie“ bedeutet hier „您，您们“.",
        "zh": "“Sie”在这里表示“您，您们”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0556",
    "german": "sitzen",
    "translation": "坐",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute sitzen.",
        "zh": "我们今天想坐。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0557",
    "german": "so",
    "translation": "这么，这样如此",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „so“ bedeutet hier „这么，这样如此“.",
        "zh": "“so”在这里表示“这么，这样如此”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0559",
    "german": "sofort",
    "translation": "立刻，马上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „sofort“ bedeutet hier „立刻，马上“.",
        "zh": "“sofort”在这里表示“立刻，马上”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0561",
    "german": "sollen",
    "translation": "应该",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute sollen.",
        "zh": "我们今天想应该。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0563",
    "german": "spät",
    "translation": "晚的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „spät“ bedeutet hier „晚的“.",
        "zh": "“spät”在这里表示“晚的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0564",
    "german": "später",
    "translation": "以后以后",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „später“ bedeutet hier „以后以后“.",
        "zh": "“später”在这里表示“以后以后”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0568",
    "german": "Sprache",
    "translation": "语音",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Sprache.",
        "zh": "今天我们谈论语音。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0571",
    "german": "stehen",
    "translation": "处于某种情况站立适合（某人）---处于 的情况",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute stehen.",
        "zh": "我们今天想处于某种情况站立适合（某人）---处于 的情况。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0572",
    "german": "Stelle",
    "translation": "职位",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Stelle.",
        "zh": "今天我们谈论职位。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0573",
    "german": "stellen",
    "translation": "放置；站立",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute stellen.",
        "zh": "我们今天想放置；站立。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0574",
    "german": "Stock",
    "translation": "楼层（单数形式）",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Stock.",
        "zh": "今天我们谈论楼层（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0577",
    "german": "studieren",
    "translation": "（在大学）攻读，学习",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute studieren.",
        "zh": "我们今天想（在大学）攻读，学习。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0578",
    "german": "Studium",
    "translation": "大学学习，学业",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Studium.",
        "zh": "今天我们谈论大学学习，学业。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0579",
    "german": "Student",
    "translation": "男大学生",
    "kind": "noun",
    "article": "der",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Student.",
        "zh": "今天我们谈论男大学生。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0580",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Stunde.",
        "zh": "今天我们谈论小时。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0581",
    "german": "suchen",
    "translation": "寻找",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute suchen.",
        "zh": "我们今天想寻找。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0586",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Teil.",
        "zh": "今天我们谈论部分。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0589",
    "german": "Termin",
    "translation": "（约定的）日程，约会",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Termin.",
        "zh": "今天我们谈论（约定的）日程，约会。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0590",
    "german": "Test",
    "translation": "测验",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Test.",
        "zh": "今天我们谈论测验。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0591",
    "german": "teuer",
    "translation": "昂贵的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „teuer“ bedeutet hier „昂贵的“.",
        "zh": "“teuer”在这里表示“昂贵的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0592",
    "german": "Text",
    "translation": "文章",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Text.",
        "zh": "今天我们谈论文章。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0593",
    "german": "Thema",
    "translation": "主题，话题",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Thema.",
        "zh": "今天我们谈论主题，话题。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0597",
    "german": "Toilette",
    "translation": "卫生间",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Toilette.",
        "zh": "今天我们谈论卫生间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0599",
    "german": "tot",
    "translation": "死的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „tot“ bedeutet hier „死的“.",
        "zh": "“tot”在这里表示“死的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0600",
    "german": "(sich) treffen",
    "translation": "会面，会见",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns treffen.",
        "zh": "我们今天想会面，会见。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0603",
    "german": "tschüss",
    "translation": "再见",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „tschüss“ bedeutet hier „再见“.",
        "zh": "“tschüss”在这里表示“再见”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0604",
    "german": "tun",
    "translation": "干，工作",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute tun.",
        "zh": "我们今天想干，工作。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0605",
    "german": "über",
    "translation": "在 … 期间超过对于在 … 上方通过",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „über“ bedeutet hier „在 … 期间超过对于在 … 上方通过“.",
        "zh": "“über”在这里表示“在 … 期间超过对于在 … 上方通过”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0606",
    "german": "übernachten",
    "translation": "过夜",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute übernachten.",
        "zh": "我们今天想过夜。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0607",
    "german": "überweisen",
    "translation": "转账",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute überweisen.",
        "zh": "我们今天想转账。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0608",
    "german": "Uhr",
    "translation": "钟点",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Uhr.",
        "zh": "今天我们谈论钟点。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0609",
    "german": "um",
    "translation": "在 … 时刻",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „um“ bedeutet hier „在 … 时刻“.",
        "zh": "“um”在这里表示“在 … 时刻”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0610",
    "german": "umziehen",
    "translation": "搬家",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute umziehen.",
        "zh": "我们今天想搬家。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0611",
    "german": "und",
    "translation": "和",
    "kind": "conjunction",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "可是",
      "也就是说，可见",
      "究竟因为"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0012",
      "a1-alpha-0154"
    ],
    "examples": [
      {
        "de": "Das Wort „und“ bedeutet hier „和“.",
        "zh": "“und”在这里表示“和”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0612",
    "german": "unser-",
    "translation": "我们的",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „unser-“ bedeutet hier „我们的“.",
        "zh": "“unser-”在这里表示“我们的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0613",
    "german": "unten",
    "translation": "在下面",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute unten.",
        "zh": "我们今天想在下面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0614",
    "german": "unter",
    "translation": "在……下面",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „unter“ bedeutet hier „在……下面“.",
        "zh": "“unter”在这里表示“在……下面”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0615",
    "german": "Unterricht",
    "translation": "课程；课堂",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Unterricht.",
        "zh": "今天我们谈论课程；课堂。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0616",
    "german": "unterschreiben",
    "translation": "签名",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute unterschreiben.",
        "zh": "我们今天想签名。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0617",
    "german": "Unterschrift",
    "translation": "签名",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Unterschrift.",
        "zh": "今天我们谈论签名。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0620",
    "german": "verboten",
    "translation": "禁止的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „verboten“ bedeutet hier „禁止的“.",
        "zh": "“verboten”在这里表示“禁止的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0623",
    "german": "verheiratet",
    "translation": "已婚的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „verheiratet“ bedeutet hier „已婚的“.",
        "zh": "“verheiratet”在这里表示“已婚的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0630",
    "german": "viel",
    "translation": "多",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „viel“ bedeutet hier „多“.",
        "zh": "“viel”在这里表示“多”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0631",
    "german": "vielleicht",
    "translation": "也许",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „vielleicht“ bedeutet hier „也许“.",
        "zh": "“vielleicht”在这里表示“也许”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0632",
    "german": "von",
    "translation": "（属于或来源于） 的关于",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „von“ bedeutet hier „（属于或来源于） 的关于“.",
        "zh": "“von”在这里表示“（属于或来源于） 的关于”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0633",
    "german": "vor",
    "translation": "在 … 之前在 … 前面在 … 之前",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „vor“ bedeutet hier „在 … 之前在 … 前面在 … 之前“.",
        "zh": "“vor”在这里表示“在 … 之前在 … 前面在 … 之前”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0635",
    "german": "Vorsicht",
    "translation": "小心",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Vorsicht.",
        "zh": "今天我们谈论小心。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0636",
    "german": "(sich) vorstellen",
    "translation": "介绍",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns vorstellen.",
        "zh": "我们今天想介绍。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0638",
    "german": "wandern",
    "translation": "徒步走",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute wandern.",
        "zh": "我们今天想徒步走。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0639",
    "german": "wann",
    "translation": "什么时候",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „wann“ bedeutet hier „什么时候“.",
        "zh": "“wann”在这里表示“什么时候”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0640",
    "german": "warten",
    "translation": "等待",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute warten.",
        "zh": "我们今天想等待。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0641",
    "german": "warum",
    "translation": "为什么",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „warum“ bedeutet hier „为什么“.",
        "zh": "“warum”在这里表示“为什么”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0642",
    "german": "was",
    "translation": "什么",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „was“ bedeutet hier „什么“.",
        "zh": "“was”在这里表示“什么”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0643",
    "german": "was für ein",
    "translation": "什么样的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „was für ein“ bedeutet hier „什么样的“.",
        "zh": "“was für ein”在这里表示“什么样的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0644",
    "german": "(sich) waschen",
    "translation": "洗",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute uns waschen.",
        "zh": "我们今天想洗。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0646",
    "german": "weh tun",
    "translation": "使 … 感到疼痛",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „weh tun“ bedeutet hier „使 … 感到疼痛“.",
        "zh": "“weh tun”在这里表示“使 … 感到疼痛”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0647",
    "german": "weiblich",
    "translation": "女性的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „weiblich“ bedeutet hier „女性的“.",
        "zh": "“weiblich”在这里表示“女性的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0649",
    "german": "weit",
    "translation": "遥远的宽松的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „weit“ bedeutet hier „遥远的宽松的“.",
        "zh": "“weit”在这里表示“遥远的宽松的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0650",
    "german": "weiter",
    "translation": "继续；更远",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „weiter“ bedeutet hier „继续；更远“.",
        "zh": "“weiter”在这里表示“继续；更远”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0651",
    "german": "welch-",
    "translation": "哪个",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „welch-“ bedeutet hier „哪个“.",
        "zh": "“welch-”在这里表示“哪个”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0652",
    "german": "Welt",
    "translation": "世界（单数形式）",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Welt.",
        "zh": "今天我们谈论世界（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0653",
    "german": "wenig",
    "translation": "少",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其它",
      "两个（物，事）"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das Wort „wenig“ bedeutet hier „少“.",
        "zh": "“wenig”在这里表示“少”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0654",
    "german": "wer",
    "translation": "谁",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „wer“ bedeutet hier „谁“.",
        "zh": "“wer”在这里表示“谁”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0655",
    "german": "werden",
    "translation": "变成；将要",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute werden.",
        "zh": "我们今天想变成；将要。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0657",
    "german": "wichtig",
    "translation": "重要的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „wichtig“ bedeutet hier „重要的“.",
        "zh": "“wichtig”在这里表示“重要的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0658",
    "german": "wie",
    "translation": "怎样；如何",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „wie“ bedeutet hier „怎样；如何“.",
        "zh": "“wie”在这里表示“怎样；如何”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0659",
    "german": "wiederholen",
    "translation": "重复",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute wiederholen.",
        "zh": "我们今天想重复。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0660",
    "german": "Wiederhören",
    "translation": "再次通话",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Wiederhören.",
        "zh": "今天我们谈论再次通话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0661",
    "german": "Wiedersehen",
    "translation": "再次见面",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Wiedersehen.",
        "zh": "今天我们谈论再次见面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0662",
    "german": "wie viel",
    "translation": "多少",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „wie viel“ bedeutet hier „多少“.",
        "zh": "“wie viel”在这里表示“多少”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0663",
    "german": "willkommen",
    "translation": "欢迎",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „willkommen“ bedeutet hier „欢迎“.",
        "zh": "“willkommen”在这里表示“欢迎”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0665",
    "german": "wir",
    "translation": "我们",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你的",
      "你（第四格）",
      "你（第三格）"
    ],
    "distractorIds": [
      "a1-alpha-0153",
      "a1-alpha-0156",
      "a1-alpha-0158"
    ],
    "examples": [
      {
        "de": "Das Wort „wir“ bedeutet hier „我们“.",
        "zh": "“wir”在这里表示“我们”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0666",
    "german": "wissen",
    "translation": "知道",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute wissen.",
        "zh": "我们今天想知道。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0667",
    "german": "wo",
    "translation": "在哪里",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „wo“ bedeutet hier „在哪里“.",
        "zh": "“wo”在这里表示“在哪里”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0668",
    "german": "woher",
    "translation": "从哪里",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „woher“ bedeutet hier „从哪里“.",
        "zh": "“woher”在这里表示“从哪里”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0669",
    "german": "wohin",
    "translation": "去哪里",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „wohin“ bedeutet hier „去哪里“.",
        "zh": "“wohin”在这里表示“去哪里”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0672",
    "german": "wollen",
    "translation": "要，想，愿意，打算",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute wollen.",
        "zh": "我们今天想要，想，愿意，打算。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0673",
    "german": "Wort",
    "translation": "单词；话语",
    "kind": "noun",
    "article": "das",
    "plural": "-ö, er/-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Wort.",
        "zh": "今天我们谈论单词；话语。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0674",
    "german": "wunderbar",
    "translation": "好极了，了不起的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „wunderbar“ bedeutet hier „好极了，了不起的“.",
        "zh": "“wunderbar”在这里表示“好极了，了不起的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0676",
    "german": "Zeit",
    "translation": "时间（单数形式）",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Zeit.",
        "zh": "今天我们谈论时间（单数形式）。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0677",
    "german": "zurzeit",
    "translation": "目前",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „zurzeit“ bedeutet hier „目前“.",
        "zh": "“zurzeit”在这里表示“目前”。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0678",
    "german": "Zeitung",
    "translation": "报社",
    "kind": "noun",
    "article": "die",
    "plural": "-en",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Zeitung.",
        "zh": "今天我们谈论报社。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0679",
    "german": "Zigarette",
    "translation": "香烟",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Zigarette.",
        "zh": "今天我们谈论香烟。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0682",
    "german": "zu",
    "translation": "太到 … 去，向",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „zu“ bedeutet hier „太到 … 去，向“.",
        "zh": "“zu”在这里表示“太到 … 去，向”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0683",
    "german": "zufrieden",
    "translation": "满意的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "出名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wort „zufrieden“ bedeutet hier „满意的“.",
        "zh": "“zufrieden”在这里表示“满意的”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0685",
    "german": "zurück",
    "translation": "退回",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快，即将"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Das Wort „zurück“ bedeutet hier „退回“.",
        "zh": "“zurück”在这里表示“退回”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0686",
    "german": "zusammen",
    "translation": "一起",
    "kind": "verb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学习",
      "居住",
      "走；去"
    ],
    "distractorIds": [
      "lernen",
      "wohnen",
      "gehen"
    ],
    "examples": [
      {
        "de": "Wir möchten heute zusammen.",
        "zh": "我们今天想一起。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0687",
    "german": "zwischen",
    "translation": "在 … 和 … 之间",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从 … 起",
      "在……旁；向",
      "在……上；到……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Wort „zwischen“ bedeutet hier „在 … 和 … 之间“.",
        "zh": "“zwischen”在这里表示“在 … 和 … 之间”。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-numbers-001",
    "german": "1 = eins",
    "translation": "一",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "二",
      "三",
      "四"
    ],
    "distractorIds": [
      "a1-group-numbers-002",
      "a1-group-numbers-003",
      "a1-group-numbers-004"
    ],
    "examples": [
      {
        "de": "Das Wort „1 = eins“ bedeutet hier „一“.",
        "zh": "“1 = eins”在这里表示“一”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-002",
    "german": "2 = zwei",
    "translation": "二",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "三",
      "四"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-003",
      "a1-group-numbers-004"
    ],
    "examples": [
      {
        "de": "Das Wort „2 = zwei“ bedeutet hier „二“.",
        "zh": "“2 = zwei”在这里表示“二”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-003",
    "german": "3 = drei",
    "translation": "三",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "四"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-004"
    ],
    "examples": [
      {
        "de": "Das Wort „3 = drei“ bedeutet hier „三“.",
        "zh": "“3 = drei”在这里表示“三”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-004",
    "german": "4 = vier",
    "translation": "四",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „4 = vier“ bedeutet hier „四“.",
        "zh": "“4 = vier”在这里表示“四”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-005",
    "german": "5 = fünf",
    "translation": "五",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „5 = fünf“ bedeutet hier „五“.",
        "zh": "“5 = fünf”在这里表示“五”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-006",
    "german": "6 = sechs",
    "translation": "六",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „6 = sechs“ bedeutet hier „六“.",
        "zh": "“6 = sechs”在这里表示“六”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-007",
    "german": "7 = sieben",
    "translation": "七",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „7 = sieben“ bedeutet hier „七“.",
        "zh": "“7 = sieben”在这里表示“七”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-008",
    "german": "8 = acht",
    "translation": "八",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „8 = acht“ bedeutet hier „八“.",
        "zh": "“8 = acht”在这里表示“八”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-009",
    "german": "9 = neun",
    "translation": "九",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „9 = neun“ bedeutet hier „九“.",
        "zh": "“9 = neun”在这里表示“九”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-010",
    "german": "10 = zehn",
    "translation": "十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „10 = zehn“ bedeutet hier „十“.",
        "zh": "“10 = zehn”在这里表示“十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-011",
    "german": "11 = elf",
    "translation": "十一",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „11 = elf“ bedeutet hier „十一“.",
        "zh": "“11 = elf”在这里表示“十一”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-012",
    "german": "12 = zwölf",
    "translation": "十二",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „12 = zwölf“ bedeutet hier „十二“.",
        "zh": "“12 = zwölf”在这里表示“十二”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-013",
    "german": "13 = dreizehn",
    "translation": "十三",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „13 = dreizehn“ bedeutet hier „十三“.",
        "zh": "“13 = dreizehn”在这里表示“十三”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-014",
    "german": "14 = vierzehn",
    "translation": "十四",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „14 = vierzehn“ bedeutet hier „十四“.",
        "zh": "“14 = vierzehn”在这里表示“十四”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-015",
    "german": "15 = fünfzehn",
    "translation": "十五",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „15 = fünfzehn“ bedeutet hier „十五“.",
        "zh": "“15 = fünfzehn”在这里表示“十五”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-016",
    "german": "16 = sechzehn",
    "translation": "十六",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „16 = sechzehn“ bedeutet hier „十六“.",
        "zh": "“16 = sechzehn”在这里表示“十六”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-017",
    "german": "17 = siebzehn",
    "translation": "十七",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „17 = siebzehn“ bedeutet hier „十七“.",
        "zh": "“17 = siebzehn”在这里表示“十七”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-018",
    "german": "18 = achtzehn",
    "translation": "十八",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „18 = achtzehn“ bedeutet hier „十八“.",
        "zh": "“18 = achtzehn”在这里表示“十八”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-019",
    "german": "19 = neunzehn",
    "translation": "十九",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „19 = neunzehn“ bedeutet hier „十九“.",
        "zh": "“19 = neunzehn”在这里表示“十九”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-020",
    "german": "20 = zwanzig",
    "translation": "二十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „20 = zwanzig“ bedeutet hier „二十“.",
        "zh": "“20 = zwanzig”在这里表示“二十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-021",
    "german": "21 = einundzwanzig",
    "translation": "二十一",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „21 = einundzwanzig“ bedeutet hier „二十一“.",
        "zh": "“21 = einundzwanzig”在这里表示“二十一”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-022",
    "german": "30 = dreißig",
    "translation": "三十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „30 = dreißig“ bedeutet hier „三十“.",
        "zh": "“30 = dreißig”在这里表示“三十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-023",
    "german": "40 = vierzig",
    "translation": "四十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „40 = vierzig“ bedeutet hier „四十“.",
        "zh": "“40 = vierzig”在这里表示“四十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-024",
    "german": "50 = fünfzig",
    "translation": "五十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „50 = fünfzig“ bedeutet hier „五十“.",
        "zh": "“50 = fünfzig”在这里表示“五十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-025",
    "german": "60 = sechzig",
    "translation": "六十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „60 = sechzig“ bedeutet hier „六十“.",
        "zh": "“60 = sechzig”在这里表示“六十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-026",
    "german": "70 = siebzig",
    "translation": "七十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „70 = siebzig“ bedeutet hier „七十“.",
        "zh": "“70 = siebzig”在这里表示“七十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-027",
    "german": "80 = achtzig",
    "translation": "八十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „80 = achtzig“ bedeutet hier „八十“.",
        "zh": "“80 = achtzig”在这里表示“八十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-028",
    "german": "90 = neunzig",
    "translation": "九十",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „90 = neunzig“ bedeutet hier „九十“.",
        "zh": "“90 = neunzig”在这里表示“九十”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-029",
    "german": "100 = (ein)hundert",
    "translation": "一百",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „100 = (ein)hundert“ bedeutet hier „一百“.",
        "zh": "“100 = (ein)hundert”在这里表示“一百”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-030",
    "german": "101 = hunderteins",
    "translation": "一百零一",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „101 = hunderteins“ bedeutet hier „一百零一“.",
        "zh": "“101 = hunderteins”在这里表示“一百零一”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-031",
    "german": "200 = zweihundert",
    "translation": "二百",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „200 = zweihundert“ bedeutet hier „二百“.",
        "zh": "“200 = zweihundert”在这里表示“二百”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-032",
    "german": "1.000 = (ein)tausend",
    "translation": "一千",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „1.000 = (ein)tausend“ bedeutet hier „一千“.",
        "zh": "“1.000 = (ein)tausend”在这里表示“一千”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-033",
    "german": "1.000.000 = eine Million",
    "translation": "一百万",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „1.000.000 = eine Million“ bedeutet hier „一百万“.",
        "zh": "“1.000.000 = eine Million”在这里表示“一百万”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-034",
    "german": "1.000.000.000 = eine Milliarde",
    "translation": "十亿",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „1.000.000.000 = eine Milliarde“ bedeutet hier „十亿“.",
        "zh": "“1.000.000.000 = eine Milliarde”在这里表示“十亿”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-035",
    "german": "das/der/die erste",
    "translation": "第一",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „das/der/die erste“ bedeutet hier „第一“.",
        "zh": "“das/der/die erste”在这里表示“第一”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-036",
    "german": "zweite",
    "translation": "第二",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „zweite“ bedeutet hier „第二“.",
        "zh": "“zweite”在这里表示“第二”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-037",
    "german": "dritte",
    "translation": "第三",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „dritte“ bedeutet hier „第三“.",
        "zh": "“dritte”在这里表示“第三”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-038",
    "german": "vierte",
    "translation": "第四",
    "kind": "numeral",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "一",
      "二",
      "三"
    ],
    "distractorIds": [
      "a1-group-numbers-001",
      "a1-group-numbers-002",
      "a1-group-numbers-003"
    ],
    "examples": [
      {
        "de": "Das Wort „vierte“ bedeutet hier „第四“.",
        "zh": "“vierte”在这里表示“第四”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-039",
    "german": "usw.",
    "translation": "等等",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „usw.“ bedeutet hier „等等“.",
        "zh": "“usw.”在这里表示“等等”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-dates-040",
    "german": "1/2 = ein halb; halb ...",
    "translation": "二分之一；半",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „1/2 = ein halb; halb ...“ bedeutet hier „二分之一；半“.",
        "zh": "“1/2 = ein halb; halb ...”在这里表示“二分之一；半”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-041",
    "german": "1/4 = ein Viertel; Viertel ...",
    "translation": "四分之一；一刻钟",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „1/4 = ein Viertel; Viertel ...“ bedeutet hier „四分之一；一刻钟“.",
        "zh": "“1/4 = ein Viertel; Viertel ...”在这里表示“四分之一；一刻钟”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-042",
    "german": "1999 = neunzehnhundertneunundneunzig",
    "translation": "1999 年",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „1999 = neunzehnhundertneunundneunzig“ bedeutet hier „1999 年“.",
        "zh": "“1999 = neunzehnhundertneunundneunzig”在这里表示“1999 年”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-043",
    "german": "2014 = zweitausendvierzehn",
    "translation": "2014 年",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „2014 = zweitausendvierzehn“ bedeutet hier „2014 年“.",
        "zh": "“2014 = zweitausendvierzehn”在这里表示“2014 年”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-044",
    "german": "heute ist der 1. März",
    "translation": "今天是 3 月 1 日",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „heute ist der 1. März“ bedeutet hier „今天是 3 月 1 日“.",
        "zh": "“heute ist der 1. März”在这里表示“今天是 3 月 1 日”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-045",
    "german": "Berlin",
    "translation": "柏林，2002 年 4 月 12 日",
    "kind": "phrase",
    "plural": "12. April 2002",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „Berlin“ bedeutet hier „柏林，2002 年 4 月 12 日“.",
        "zh": "“Berlin”在这里表示“柏林，2002 年 4 月 12 日”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-046",
    "german": "0.03 Uhr = null Uhr drei",
    "translation": "零点零三分",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „0.03 Uhr = null Uhr drei“ bedeutet hier „零点零三分“.",
        "zh": "“0.03 Uhr = null Uhr drei”在这里表示“零点零三分”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-047",
    "german": "7.15 Uhr = sieben Uhr fünfzehn",
    "translation": "七点十五分",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „7.15 Uhr = sieben Uhr fünfzehn“ bedeutet hier „七点十五分“.",
        "zh": "“7.15 Uhr = sieben Uhr fünfzehn”在这里表示“七点十五分”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-048",
    "german": "13.17 Uhr = dreizehn Uhr siebzehn",
    "translation": "十三点十七分",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „13.17 Uhr = dreizehn Uhr siebzehn“ bedeutet hier „十三点十七分“.",
        "zh": "“13.17 Uhr = dreizehn Uhr siebzehn”在这里表示“十三点十七分”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-049",
    "german": "24.00 Uhr = vierundzwanzig Uhr",
    "translation": "二十四点",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „24.00 Uhr = vierundzwanzig Uhr“ bedeutet hier „二十四点“.",
        "zh": "“24.00 Uhr = vierundzwanzig Uhr”在这里表示“二十四点”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-050",
    "german": "ein Uhr",
    "translation": "一点",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „ein Uhr“ bedeutet hier „一点“.",
        "zh": "“ein Uhr”在这里表示“一点”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-051",
    "german": "fünf Minuten vor/nach eins",
    "translation": "一点差五分／一点过五分",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „fünf Minuten vor/nach eins“ bedeutet hier „一点差五分／一点过五分“.",
        "zh": "“fünf Minuten vor/nach eins”在这里表示“一点差五分／一点过五分”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-052",
    "german": "Viertel vor/nach zwei",
    "translation": "两点差一刻／两点一刻",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „Viertel vor/nach zwei“ bedeutet hier „两点差一刻／两点一刻“.",
        "zh": "“Viertel vor/nach zwei”在这里表示“两点差一刻／两点一刻”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-053",
    "german": "halb drei",
    "translation": "两点半",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „halb drei“ bedeutet hier „两点半“.",
        "zh": "“halb drei”在这里表示“两点半”。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-time-measures-054",
    "german": "Sekunde",
    "translation": "秒",
    "kind": "noun",
    "article": "die",
    "plural": "-n",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Sekunde.",
        "zh": "今天我们谈论秒。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-time-measures-055",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Minute.",
        "zh": "今天我们谈论分钟。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-time-measures-057",
    "german": "Tag",
    "translation": "天",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Tag.",
        "zh": "今天我们谈论天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-time-measures-058",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Woche.",
        "zh": "今天我们谈论周。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-time-measures-059",
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
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Jahr.",
        "zh": "今天我们谈论年。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-060",
    "german": "Wochentag",
    "translation": "工作日；星期中的一天",
    "kind": "noun",
    "article": "der",
    "plural": "-e",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Wochentag.",
        "zh": "今天我们谈论工作日；星期中的一天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-061",
    "german": "Sonntag",
    "translation": "星期日",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Sonntag.",
        "zh": "今天我们谈论星期日。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-062",
    "german": "Montag",
    "translation": "星期一",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Montag.",
        "zh": "今天我们谈论星期一。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-063",
    "german": "Dienstag",
    "translation": "星期二",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Dienstag.",
        "zh": "今天我们谈论星期二。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-064",
    "german": "Mittwoch",
    "translation": "星期三",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Mittwoch.",
        "zh": "今天我们谈论星期三。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-065",
    "german": "Donnerstag",
    "translation": "星期四",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Donnerstag.",
        "zh": "今天我们谈论星期四。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-066",
    "german": "Freitag",
    "translation": "星期五",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Freitag.",
        "zh": "今天我们谈论星期五。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-067",
    "german": "Samstag/Sonnabend",
    "translation": "星期六",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Samstag/Sonnabend.",
        "zh": "今天我们谈论星期六。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-068",
    "german": "Wochenende",
    "translation": "周末",
    "kind": "noun",
    "article": "das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über das Wochenende.",
        "zh": "今天我们谈论周末。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-069",
    "german": "am Wochenende",
    "translation": "在周末",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在关机（状态）",
      "熟人",
      "大约"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0098",
      "a1-alpha-0142"
    ],
    "examples": [
      {
        "de": "Das Wort „am Wochenende“ bedeutet hier „在周末“.",
        "zh": "“am Wochenende”在这里表示“在周末”。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-070",
    "german": "Tag",
    "translation": "白天；一天",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Tag.",
        "zh": "今天我们谈论白天；一天。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-071",
    "german": "Morgen",
    "translation": "早晨",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Morgen.",
        "zh": "今天我们谈论早晨。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-072",
    "german": "Vormittag",
    "translation": "上午",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Vormittag.",
        "zh": "今天我们谈论上午。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-073",
    "german": "Mittag",
    "translation": "中午",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Mittag.",
        "zh": "今天我们谈论中午。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-074",
    "german": "Nachmittag",
    "translation": "下午",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Nachmittag.",
        "zh": "今天我们谈论下午。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-075",
    "german": "Abend",
    "translation": "晚上",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Abend.",
        "zh": "今天我们谈论晚上。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-076",
    "german": "Nacht",
    "translation": "夜晚",
    "kind": "noun",
    "article": "die",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über die Nacht.",
        "zh": "今天我们谈论夜晚。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-077",
    "german": "Januar",
    "translation": "一月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Januar.",
        "zh": "今天我们谈论一月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-078",
    "german": "Februar",
    "translation": "二月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Februar.",
        "zh": "今天我们谈论二月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-079",
    "german": "März",
    "translation": "三月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den März.",
        "zh": "今天我们谈论三月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-080",
    "german": "April",
    "translation": "四月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den April.",
        "zh": "今天我们谈论四月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-081",
    "german": "Mai",
    "translation": "五月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Mai.",
        "zh": "今天我们谈论五月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-082",
    "german": "Juni",
    "translation": "六月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Juni.",
        "zh": "今天我们谈论六月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-083",
    "german": "Juli",
    "translation": "七月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Juli.",
        "zh": "今天我们谈论七月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-084",
    "german": "August",
    "translation": "八月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den August.",
        "zh": "今天我们谈论八月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-085",
    "german": "September",
    "translation": "九月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den September.",
        "zh": "今天我们谈论九月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-086",
    "german": "Oktober",
    "translation": "十月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Oktober.",
        "zh": "今天我们谈论十月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-087",
    "german": "November",
    "translation": "十一月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den November.",
        "zh": "今天我们谈论十一月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-months-088",
    "german": "Dezember",
    "translation": "十二月",
    "kind": "noun",
    "article": "der",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "学校",
      "书",
      "城市"
    ],
    "distractorIds": [
      "schule",
      "buch",
      "stadt"
    ],
    "examples": [
      {
        "de": "Heute sprechen wir über den Dezember.",
        "zh": "今天我们谈论十二月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  }
] as const satisfies readonly Word[];

export const A1_BY_ID = new Map<string, Word>(
  A1_WORDS.map((word) => [word.id, word]),
);

export const A1_VALID_IDS = new Set(A1_WORDS.map((word) => word.id));

export const LEGACY_ID_MAP = {
  "tisch": "tisch",
  "stuhl": "stuhl",
  "fenster": "fenster",
  "tuer": "tuer",
  "kueche": "kueche",
  "brot": "brot",
  "apfel": "apfel",
  "wasser": "wasser",
  "kaffee": "kaffee",
  "familie": "familie",
  "freund": "freund",
  "schule": "schule",
  "buch": "buch",
  "stadt": "stadt",
  "bahnhof": "bahnhof",
  "lernen": "lernen",
  "arbeiten": "arbeiten",
  "wohnen": "wohnen",
  "essen": "essen",
  "trinken": "trinken",
  "gehen": "gehen",
  "fahren": "fahren",
  "sprechen": "sprechen",
  "verstehen": "verstehen"
} as const;

export function resolveRuntimeWordId(wordId: string) {
  const resolved = LEGACY_ID_MAP[wordId as keyof typeof LEGACY_ID_MAP] ?? wordId;
  return A1_VALID_IDS.has(resolved) ? resolved : undefined;
}

export function getDisplayWord(word: Word) {
  return word.article ? `${word.article} ${word.german}` : word.german;
}

export const A1_CONTENT = {
  manifest: A1_MANIFEST,
  words: A1_WORDS,
  byId: A1_BY_ID,
} as const;

export const PART_OF_SPEECH_LABELS = {
  "noun": "名词 · 连同冠词记忆",
  "verb": "动词 · 不定式",
  "adjective": "形容词",
  "adverb": "副词",
  "pronoun": "代词",
  "preposition": "介词",
  "conjunction": "连词",
  "determiner": "限定词",
  "numeral": "数词",
  "particle": "语气词",
  "phrase": "表达",
  "other": "A1 词汇"
} as const;

export type { Word } from "../types.ts";
