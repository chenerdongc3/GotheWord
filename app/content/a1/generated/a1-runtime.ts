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
        "de": "Mein Arm tut weh.",
        "zh": "我的手臂疼。"
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
        "de": "Das Bad ist klein.",
        "zh": "浴室很小。"
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
        "de": "Ich esse eine Banane.",
        "zh": "我在吃一根香蕉。"
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
        "de": "Der Zug fährt um acht ab.",
        "zh": "火车八点出发。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0001",
    "german": "ab",
    "translation": "从……起",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "在…旁",
      "在……上",
      "来自"
    ],
    "distractorIds": [
      "a1-alpha-0015",
      "a1-alpha-0049",
      "a1-alpha-0056"
    ],
    "examples": [
      {
        "de": "Ich arbeite ab Montag.",
        "zh": "我从星期一开始上班。"
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
        "de": "Meine Arbeit ist interessant.",
        "zh": "我的工作很有趣。"
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
      "钱",
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
        "de": "Im Supermarkt gibt es ein Angebot.",
        "zh": "超市有特价商品。"
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
      "信息",
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
        "de": "Schick mir deine Adresse.",
        "zh": "把你的地址发给我。"
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
      "花",
      "摄氏度",
      "海洋"
    ],
    "distractorIds": [
      "a1-alpha-0123",
      "a1-alpha-0286",
      "a1-alpha-0424"
    ],
    "examples": [
      {
        "de": "Der Baum ist hoch.",
        "zh": "这棵树很高。"
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
      "庆祝活动",
      "照片"
    ],
    "distractorIds": [
      "a1-alpha-0159",
      "a1-alpha-0217",
      "a1-alpha-0237"
    ],
    "examples": [
      {
        "de": "Gib mir ein Beispiel.",
        "zh": "给我一个例子。"
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
        "de": "Der Arzt hilft den Patienten.",
        "zh": "男医生帮助病人。"
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
        "de": "Ich bade jeden Abend.",
        "zh": "我每天晚上洗澡。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0110",
    "german": "Bier",
    "translation": "啤酒",
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
        "de": "Ich trinke ein Bier.",
        "zh": "我喝一杯啤酒。"
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
        "de": "Die Abfahrt ist um neun Uhr.",
        "zh": "出发时间是九点。"
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
      "因为",
      "或者"
    ],
    "distractorIds": [
      "a1-alpha-0012",
      "a1-alpha-0154",
      "a1-alpha-0463"
    ],
    "examples": [
      {
        "de": "Ich mag Tee, aber ich trinke Kaffee.",
        "zh": "我喜欢茶，可是我喝咖啡。"
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
        "de": "Er ist arbeitslos.",
        "zh": "他失业。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0106",
    "german": "bestellen",
    "translation": "点餐",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "付款",
      "购物",
      "邀请"
    ],
    "distractorIds": [
      "a1-alpha-0109",
      "a1-alpha-0182",
      "a1-alpha-0183"
    ],
    "examples": [
      {
        "de": "Ich bestelle eine Pizza.",
        "zh": "我点一份披萨。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0060",
    "german": "Auskunft",
    "translation": "信息",
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
        "de": "Kann ich eine Auskunft bekommen?",
        "zh": "我可以得到一条信息吗？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0123",
    "german": "Blume",
    "translation": "花",
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
      "海洋"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0286",
      "a1-alpha-0424"
    ],
    "examples": [
      {
        "de": "Ich schenke ihr eine Blume.",
        "zh": "我送她一朵花。"
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
        "de": "Ich mag Obst, zum Beispiel Äpfel.",
        "zh": "我喜欢水果，例如苹果。"
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
        "de": "Mein Auge tut weh.",
        "zh": "我的眼睛疼。"
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
        "de": "Wir sitzen auf dem Balkon.",
        "zh": "我们坐在阳台上。"
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
        "de": "Ich esse eine reife Birne.",
        "zh": "我吃一颗熟梨。"
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
        "de": "Meine Ankunft ist um acht Uhr.",
        "zh": "我八点到达。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0005",
    "german": "abgeben",
    "translation": "交付",
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
        "de": "Ich gebe das Formular ab.",
        "zh": "我递交表格。"
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
        "de": "Mein Arbeitsplatz ist sauber.",
        "zh": "我的工作场所很干净。"
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
      "点餐",
      "购物",
      "邀请"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0182",
      "a1-alpha-0183"
    ],
    "examples": [
      {
        "de": "Ich bezahle die Rechnung.",
        "zh": "我付账单。"
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
      "信息",
      "信件"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0128"
    ],
    "examples": [
      {
        "de": "Wir gehen zur Bank.",
        "zh": "我们去银行。"
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
      "花",
      "海洋"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0424"
    ],
    "examples": [
      {
        "de": "Es sind 20 Grad.",
        "zh": "气温是20摄氏度。"
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
      "庆祝活动",
      "照片"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0217",
      "a1-alpha-0237"
    ],
    "examples": [
      {
        "de": "Wir tanzen in der Disco.",
        "zh": "我们在迪斯科舞厅跳舞。"
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
        "de": "Mein Bein tut weh.",
        "zh": "我的腿疼。"
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
        "de": "Ich lege mich ins Bett.",
        "zh": "我躺在床上。"
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
        "de": "Kannst du das Wort buchstabieren?",
        "zh": "你能拼写这个词吗？"
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
        "de": "Der Aufzug fährt nach oben.",
        "zh": "电梯向上运行。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0006",
    "german": "abholen",
    "translation": "接走（人）",
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
        "de": "Ich hole dich ab.",
        "zh": "我来接你。"
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
        "de": "Die Beamte geben Ausweise.",
        "zh": "公务员发放证件。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0182",
    "german": "einkaufen",
    "translation": "购物",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点餐",
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
        "de": "Ich kaufe Brot ein.",
        "zh": "我买面包。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Ich schreibe einen Brief.",
        "zh": "我写一封信。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0424",
    "german": "Meer",
    "translation": "海洋",
    "kind": "noun",
    "article": "das",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Das Meer ist heute ruhig.",
        "zh": "今天海面很平静。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0217",
    "german": "Feier-",
    "translation": "庆祝活动",
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
        "de": "Wir planen eine Feier.",
        "zh": "我们计划一次庆祝活动。"
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
        "de": "Mein Bruder spielt Fußball.",
        "zh": "我的兄弟踢足球。"
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
        "de": "Der Garten hat viele Blumen.",
        "zh": "花园里有很多花。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0138",
    "german": "Butter",
    "translation": "黄油",
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
        "de": "Ich streiche Butter auf das Brot.",
        "zh": "我把黄油抹在面包上。"
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
        "de": "Wir machen einen Ausflug.",
        "zh": "我们去郊游。"
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
        "de": "Der Absender steht oben.",
        "zh": "寄件人写在上面。"
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
        "de": "Mein Beruf ist Lehrer.",
        "zh": "我的职业是老师。"
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
      "点餐",
      "付款",
      "购物"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Ich lade dich ein.",
        "zh": "我邀请你。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Die Briefmarke kostet einen Euro.",
        "zh": "这枚邮票一欧元。"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Der Regen fällt heute.",
        "zh": "今天下雨。"
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
      "玩"
    ],
    "distractorIds": [
      "a1-alpha-0221",
      "a1-alpha-0540",
      "a1-alpha-0566"
    ],
    "examples": [
      {
        "de": "Wir feiern einen Geburtstag.",
        "zh": "我们庆祝生日。"
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
        "de": "Meine Ehefrau kocht.",
        "zh": "我的妻子做饭。"
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
        "de": "Das Haus ist groß.",
        "zh": "这座房子很大。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0171",
    "german": "Durst",
    "translation": "口渴",
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
        "de": "Ich habe Durst.",
        "zh": "我口渴。"
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
        "de": "Das Auto ist rot.",
        "zh": "这辆汽车是红色的。"
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
        "de": "Achtung, das ist gefährlich!",
        "zh": "注意，这很危险！"
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
        "de": "Der Chef kommt heute.",
        "zh": "老板今天来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0264",
    "german": "Geld",
    "translation": "钱",
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
        "de": "Ich habe genug Geld für die Fahrkarte.",
        "zh": "我的钱够买车票。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Ich schicke ein Fax.",
        "zh": "我发送传真。"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Der See ist tief.",
        "zh": "湖很深。"
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
      "玩"
    ],
    "distractorIds": [
      "a1-alpha-0218",
      "a1-alpha-0540",
      "a1-alpha-0566"
    ],
    "examples": [
      {
        "de": "Wir sehen abends fern.",
        "zh": "我们晚上看电视。"
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
        "de": "Mein Ehemann arbeitet.",
        "zh": "我的丈夫工作。"
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
        "de": "Die Hausaufgabe ist schwer.",
        "zh": "这份家庭作业很难。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0205",
    "german": "Essen",
    "translation": "食物",
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
        "de": "Das Essen ist warm.",
        "zh": "食物是热的。"
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
        "de": "Die Autobahn ist schnell.",
        "zh": "高速公路很快。"
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
      "其他的",
      "两个",
      "你的"
    ],
    "distractorIds": [
      "a1-alpha-0018",
      "a1-alpha-0093",
      "a1-alpha-0153"
    ],
    "examples": [
      {
        "de": "Alle Kinder spielen im Park.",
        "zh": "所有孩子都在公园里玩。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0368",
    "german": "Kollege",
    "translation": "男性同事",
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
        "de": "Mein Kollege hilft mir.",
        "zh": "我的男同事帮助我。"
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
      "钱",
      "菜单"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0350"
    ],
    "examples": [
      {
        "de": "Ich gehe ins Geschäft.",
        "zh": "我去商店。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Ich eröffne ein Konto.",
        "zh": "我开一个银行账户。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0562",
    "german": "Sonne",
    "translation": "太阳",
    "kind": "noun",
    "article": "die",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Die Sonne scheint heute.",
        "zh": "今天太阳照耀。"
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
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Ich zeige das Foto.",
        "zh": "我展示这张照片。"
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
        "de": "Meine Eltern kommen morgen.",
        "zh": "我的父母明天来。"
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
        "de": "Die Hausfrau kocht das Essen.",
        "zh": "这位家庭主妇在做饭。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0230",
    "german": "Fleisch",
    "translation": "肉",
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
        "de": "Ich kaufe frisches Fleisch.",
        "zh": "我买新鲜的肉。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0073",
    "german": "Automat",
    "translation": "自动售货机",
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
        "de": "Der Automat gibt Schokolade.",
        "zh": "自动售货机出巧克力。"
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
      "打开（状态）",
      "很快"
    ],
    "distractorIds": [
      "a1-alpha-0048",
      "a1-alpha-0052",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Ich gehe allein nach Hause.",
        "zh": "我独自回家。"
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
        "de": "Ich mache ein Praktikum.",
        "zh": "我在实习。"
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
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Ich bestelle etwas von der Karte.",
        "zh": "我从菜单点菜。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Die Polizei kontrolliert den Verkehr.",
        "zh": "警察检查交通。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0656",
    "german": "Wetter",
    "translation": "天气",
    "kind": "noun",
    "article": "das",
    "topic": "环境",
    "topicIds": [
      "environment"
    ],
    "distractors": [
      "树",
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Das Wetter ist schön.",
        "zh": "天气很好。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0242",
    "german": "Freizeit",
    "translation": "空闲时间",
    "kind": "noun",
    "article": "die",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "In meiner Freizeit lese ich.",
        "zh": "在我的空闲时间我阅读。"
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
        "de": "Mein Familienname ist Schmidt.",
        "zh": "我的姓氏是 Schmidt。"
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
        "de": "Der Hausmann kocht das Abendessen.",
        "zh": "这位家庭主夫在做晚饭。"
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
        "de": "Ich frühstücke jeden Morgen.",
        "zh": "我每天早上吃早餐。"
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
        "de": "Der Aufzug ist automatisch.",
        "zh": "电梯是自动的。"
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
      "因为",
      "或者"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0154",
      "a1-alpha-0463"
    ],
    "examples": [
      {
        "de": "Ich habe Hunger, also esse ich.",
        "zh": "我饿了，所以我吃东西。"
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
        "de": "Ich verdiene zehn Euro.",
        "zh": "我赚十欧元。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0351",
    "german": "(Kredit)-Karte",
    "translation": "信用卡",
    "kind": "noun",
    "plural": "-n",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "特价商品",
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Ich zahle mit der Kreditkarte.",
        "zh": "我用信用卡付款。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0484",
    "german": "Post",
    "translation": "邮局",
    "kind": "noun",
    "article": "die",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Ich gehe zur Post.",
        "zh": "我去邮局。"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Der Wind weht heute.",
        "zh": "今天风在吹。"
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
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Wir spielen Fußball im Park.",
        "zh": "我们在公园踢足球。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0214",
    "german": "Familienstand",
    "translation": "家庭情况",
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
        "de": "Mein Familienstand ist ledig.",
        "zh": "我的家庭情况是单身。"
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
        "de": "Mein Sohn geht in den Kindergarten.",
        "zh": "我儿子去幼儿园。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0248",
    "german": "Frühstück",
    "translation": "早饭",
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
        "de": "Das Frühstück ist fertig.",
        "zh": "早饭已经做好了。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0079",
    "german": "Bahn",
    "translation": "火车",
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
        "de": "Ich fahre mit der Bahn nach Berlin.",
        "zh": "我坐火车去柏林。"
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
      "著名的",
      "占用的"
    ],
    "distractorIds": [
      "a1-alpha-0063",
      "a1-alpha-0097",
      "a1-alpha-0102"
    ],
    "examples": [
      {
        "de": "Das Haus ist alt.",
        "zh": "这座房子很老。"
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
        "de": "Der Verkäufer hilft mir.",
        "zh": "男售货员帮助我。"
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
      "点餐",
      "付款",
      "购物"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Ich kaufe ein Brot.",
        "zh": "我买了一块面包。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Wie lautet deine Postleitzahl?",
        "zh": "你的邮政编码是多少？"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Im Frühling blühen die Blumen.",
        "zh": "春天，花儿绽放。"
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
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Wir gehen ins Kino.",
        "zh": "我们去电影院。"
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
        "de": "Die Frau liest ein Buch.",
        "zh": "这位女士在读一本书。"
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
        "de": "Das Licht ist hell.",
        "zh": "灯光很亮。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0332",
    "german": "Hunger",
    "translation": "饥饿",
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
        "de": "Ich habe Hunger.",
        "zh": "我饿了。"
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
        "de": "Der Zug steht am Bahnsteig.",
        "zh": "火车停在站台。"
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
        "de": "Mein Alter ist zwanzig.",
        "zh": "我的年龄是二十岁。"
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
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Die Kleidung ist warm.",
        "zh": "这件衣服很暖和。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Die Reparatur dauert lange.",
        "zh": "修理需要很久。"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Im Sommer schwimme ich.",
        "zh": "夏天我去游泳。"
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
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Das Lied ist schön.",
        "zh": "这首歌很好听。"
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
        "de": "Mein Geburtsjahr ist 1990.",
        "zh": "我的出生年份是1990年。"
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
        "de": "Ich miete ein Fahrrad.",
        "zh": "我租了一辆自行车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0431",
    "german": "Milch",
    "translation": "牛奶",
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
        "de": "Ich trinke morgens Milch.",
        "zh": "我早上喝牛奶。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0137",
    "german": "Bus",
    "translation": "公交车",
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
        "de": "Der Bus fährt um acht Uhr.",
        "zh": "公交车在八点发车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0015",
    "german": "an",
    "translation": "在…旁",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在……上",
      "来自"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0049",
      "a1-alpha-0056"
    ],
    "examples": [
      {
        "de": "Das Bild hängt an der Wand.",
        "zh": "画挂在墙上。"
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
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Ich kaufe Brot im Laden.",
        "zh": "我在店里买面包。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0518",
    "german": "Schalter",
    "translation": "柜台",
    "kind": "noun",
    "article": "der",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Ich frage am Schalter nach dem Fahrplan.",
        "zh": "我在柜台询问时刻表。"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Im Herbst fallen die Blätter.",
        "zh": "秋天树叶掉落。"
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
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Wir feiern eine Party am Samstag.",
        "zh": "我们星期六举办派对。"
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
        "de": "Mein Geburtsort ist Berlin.",
        "zh": "我的出生地是柏林。"
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
        "de": "Die Miete ist vierhundert Euro.",
        "zh": "房租是四百欧元。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0462",
    "german": "Obst",
    "translation": "水果",
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
        "de": "Ich esse jeden Tag Obst.",
        "zh": "我每天吃水果。"
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
        "de": "Wir buchen ein Doppelzimmer im Hotel.",
        "zh": "我们在酒店预订双人客房。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0016",
    "german": "anbieten",
    "translation": "提供",
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
        "de": "Der Verkäufer bietet mir Hilfe an.",
        "zh": "店员向我提供帮助。"
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
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Ich probiere den Schuh im Laden.",
        "zh": "我在店里试这只鞋。"
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
        "de": "Ich telefoniere mit meiner Mutter.",
        "zh": "我给妈妈打电话。"
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
      "花",
      "摄氏度"
    ],
    "distractorIds": [
      "a1-alpha-0088",
      "a1-alpha-0123",
      "a1-alpha-0286"
    ],
    "examples": [
      {
        "de": "Im Winter schneit es oft.",
        "zh": "冬天经常下雪。"
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
      "玩"
    ],
    "distractorIds": [
      "a1-alpha-0218",
      "a1-alpha-0221",
      "a1-alpha-0566"
    ],
    "examples": [
      {
        "de": "Wir schwimmen im See.",
        "zh": "我们在湖里游泳。"
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
        "de": "Mein Geburtstag ist im März.",
        "zh": "我的生日在三月。"
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
        "de": "Die Möbel stehen im Wohnzimmer.",
        "zh": "家具摆在客厅里。"
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
        "de": "Das Öl steht im Schrank.",
        "zh": "油放在柜子里。"
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
        "de": "Ich buche ein Einzelzimmer.",
        "zh": "我预订一个单人客房。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0018",
    "german": "ander-",
    "translation": "其他的",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "两个",
      "你的"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0093",
      "a1-alpha-0153"
    ],
    "examples": [
      {
        "de": "Ich nehme das andere Buch.",
        "zh": "我拿那本别的书。"
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
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Die Speisekarte liegt auf dem Tisch.",
        "zh": "菜单放在桌子上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0588",
    "german": "Telefon",
    "translation": "电话",
    "kind": "noun",
    "article": "das",
    "topic": "公共服务",
    "topicIds": [
      "services"
    ],
    "distractors": [
      "地址",
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Das Telefon klingelt laut.",
        "zh": "电话响得很大。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0566",
    "german": "spielen",
    "translation": "玩",
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
        "de": "Wir spielen im Park.",
        "zh": "我们在公园玩。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0291",
    "german": "Großeltern (pl.)",
    "translation": "祖父母",
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
        "de": "Meine Großeltern besuchen uns.",
        "zh": "我的祖父母来拜访我们。"
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
        "de": "Der Schlüssel liegt auf dem Tisch.",
        "zh": "钥匙放在桌子上。"
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
        "de": "Der Preis ist zu hoch.",
        "zh": "价格太高。"
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
        "de": "Der Fahrer öffnet die Tür.",
        "zh": "司机打开门。"
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
        "de": "Der Kurs fängt um neun Uhr an.",
        "zh": "课程九点开始。"
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
      "钱",
      "商店"
    ],
    "distractorIds": [
      "a1-alpha-0017",
      "a1-alpha-0264",
      "a1-alpha-0270"
    ],
    "examples": [
      {
        "de": "Die Tasche ist rot.",
        "zh": "包是红色的。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Die Vorwahl beginnt mit 0.",
        "zh": "区号以0开头。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0567",
    "german": "Sport",
    "translation": "体育",
    "kind": "noun",
    "article": "der",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Sport macht mir Spaß.",
        "zh": "体育让我开心。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0292",
    "german": "Großmutter",
    "translation": "祖母",
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
        "de": "Meine Großmutter kocht Suppe.",
        "zh": "我的祖母做汤。"
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
        "de": "Wir gehen ins Schwimmbad.",
        "zh": "我们去游泳池。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0500",
    "german": "Reis",
    "translation": "米饭",
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
        "de": "Ich esse Reis.",
        "zh": "我吃米饭。"
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
        "de": "Ich kaufe eine Fahrkarte.",
        "zh": "我买一张车票。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0020",
    "german": "Anfang",
    "translation": "开始",
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
        "de": "Der Film hat einen guten Anfang.",
        "zh": "这部电影有一个好的开始。"
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
      "点餐",
      "付款",
      "购物"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0109",
      "a1-alpha-0182"
    ],
    "examples": [
      {
        "de": "Sie verkauft ein Buch.",
        "zh": "她卖一本书。"
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
      "信息",
      "银行"
    ],
    "distractorIds": [
      "a1-alpha-0009",
      "a1-alpha-0060",
      "a1-alpha-0085"
    ],
    "examples": [
      {
        "de": "Der Zoll prüft das Gepäck.",
        "zh": "海关检查行李。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0582",
    "german": "tanzen",
    "translation": "跳舞",
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
        "de": "Wir tanzen im Garten.",
        "zh": "我们在花园里跳舞。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0293",
    "german": "Großvater",
    "translation": "祖父",
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
        "de": "Mein Großvater liest.",
        "zh": "我的祖父在读书。"
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
        "de": "Das Sofa ist blau.",
        "zh": "沙发是蓝色的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0507",
    "german": "Restaurant",
    "translation": "餐馆",
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
        "de": "Wir essen im Restaurant.",
        "zh": "我们在餐馆吃饭。"
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
        "de": "Ich fahre mit dem Fahrrad.",
        "zh": "我骑自行车。"
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
        "de": "Klicken Sie bitte das Bild an.",
        "zh": "请点击图片。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0675",
    "german": "zahlen",
    "translation": "付款",
    "kind": "verb",
    "topic": "购物与日用品",
    "topicIds": [
      "shopping"
    ],
    "distractors": [
      "点餐",
      "购物",
      "邀请"
    ],
    "distractorIds": [
      "a1-alpha-0106",
      "a1-alpha-0182",
      "a1-alpha-0183"
    ],
    "examples": [
      {
        "de": "Wir wollen jetzt zahlen.",
        "zh": "我们现在想付款。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0622",
    "german": "Verein",
    "translation": "俱乐部",
    "kind": "noun",
    "article": "der",
    "topic": "休闲与娱乐",
    "topicIds": [
      "leisure"
    ],
    "distractors": [
      "例子",
      "迪斯科舞厅",
      "庆祝活动"
    ],
    "distractorIds": [
      "a1-alpha-0095",
      "a1-alpha-0159",
      "a1-alpha-0217"
    ],
    "examples": [
      {
        "de": "Der Verein trifft sich.",
        "zh": "俱乐部正在聚会。"
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
        "de": "Ihr Haar ist lang.",
        "zh": "她的头发很长。"
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
        "de": "Die Treppe ist neu.",
        "zh": "楼梯是新的。"
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
        "de": "Ich trinke einen Saft.",
        "zh": "我喝一杯果汁。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0233",
    "german": "Abflug",
    "translation": "起飞",
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
        "de": "Der Abflug ist um acht Uhr.",
        "zh": "起飞时间是八点。"
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
        "de": "Wir kommen um neun an.",
        "zh": "我们九点到达。"
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
        "de": "Das kostet 1 Euro.",
        "zh": "这要一欧元。"
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
        "de": "Das Kind spielt im Garten.",
        "zh": "这个孩子在花园里玩。"
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
        "de": "Wir vermieten die Wohnung.",
        "zh": "我们出租这套公寓。"
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
        "de": "Ich esse einen Salat.",
        "zh": "我吃一份沙拉。"
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
        "de": "Der Flughafen ist groß.",
        "zh": "机场很大。"
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
        "de": "Bitte kreuzen Sie das Kästchen an.",
        "zh": "请在方框里勾选。"
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
        "de": "Das kostet 100 Cent.",
        "zh": "这要一百欧分。"
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
        "de": "Mein Kopf tut weh.",
        "zh": "我的头疼。"
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
        "de": "Der Vermieter ruft an.",
        "zh": "房东打电话来。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0515",
    "german": "Salz",
    "translation": "盐",
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
        "de": "Ich brauche Salz für die Suppe.",
        "zh": "我需要盐来做汤。"
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
        "de": "Das Flugzeug startet bald.",
        "zh": "飞机很快起飞。"
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
        "de": "Er macht das Licht an.",
        "zh": "他打开灯。"
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
        "de": "Ein Meter ist ein gängiges Längenmaß.",
        "zh": "一米是常用的长度单位。"
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
        "de": "Der Mann liest ein Buch.",
        "zh": "那位男人在读一本书。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0671",
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
        "de": "Die Wohnung liegt im Stadtzentrum.",
        "zh": "这间公寓位于市中心。"
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
        "de": "Der Tee duftet nach Kräutern.",
        "zh": "这杯茶散发着草本的香味。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0266",
    "german": "Gepäck",
    "translation": "行李",
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
        "de": "Das Gepäck steht neben dem Ausgang.",
        "zh": "行李放在出口旁边。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0026",
    "german": "(sich) anmelden",
    "translation": "报名",
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
        "de": "Ich melde mich für den Kurs an.",
        "zh": "我报名参加了课程。"
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
        "de": "Ein Zentimeter ist kaum sichtbar.",
        "zh": "一厘米几乎看不见。"
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
        "de": "Der Mensch braucht täglich Wasser.",
        "zh": "人每天需要水。"
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
        "de": "Die Tomate schmeckt frisch.",
        "zh": "番茄尝起来很新鲜。"
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
        "de": "Das Hotel bietet kostenloses WLAN.",
        "zh": "这家酒店提供免费无线网络。"
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
        "de": "Die Anmeldung ist noch offen.",
        "zh": "报名表仍然开放。"
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
        "de": "Ein Meter fünfzehn ist die Breite des Regals.",
        "zh": "一米十五是书架的宽度。"
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
        "de": "Die Mutter liest eine Geschichte vor.",
        "zh": "妈妈在给孩子朗读故事。"
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
        "de": "Der Wein schmeckt fruchtig.",
        "zh": "这杯酒尝起来果香。"
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
        "de": "Der Koffer liegt im Schrank.",
        "zh": "行李箱放在柜子里。"
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
        "de": "Die Anrede im Brief ist förmlich.",
        "zh": "信中的称呼是正式的。"
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
        "de": "Wir fahren zweihundert Kilometer nach Hamburg.",
        "zh": "我们开车去汉堡，路程二百公里。"
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
        "de": "Mein Name ist Anna.",
        "zh": "我的名字是安娜。"
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
        "de": "Ich habe einen Pass.",
        "zh": "我有一本护照。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0029",
    "german": "anrufen",
    "translation": "打电话",
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
        "de": "Ich rufe dich an.",
        "zh": "我给你打电话。"
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
        "de": "Der Teppich ist ein Quadratmeter groß.",
        "zh": "这块地毯有一平方米。"
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
        "de": "Mein Partner arbeitet hier.",
        "zh": "我的男性合作伙伴在这里工作。"
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
        "de": "Ich gehe Rad fahren.",
        "zh": "我去骑自行车。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0030",
    "german": "Anruf",
    "translation": "来电",
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
        "de": "Ich bekomme einen Anruf.",
        "zh": "我收到一个来电。"
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
        "de": "Es ist ein Grad unter Null.",
        "zh": "气温是零下一度。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0476",
    "german": "Partnerin",
    "translation": "伴侣",
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
        "de": "Meine Partnerin studiert Medizin.",
        "zh": "我的伴侣在学医。"
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
        "de": "Wir reisen nach Berlin.",
        "zh": "我们去柏林旅行。"
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
        "de": "Der Anrufbeantworter ist voll.",
        "zh": "电话答录机已满。"
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
        "de": "Heute ist vier Grad über Null.",
        "zh": "今天气温是零上四度。"
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
        "de": "Meine Schwester heißt Lisa.",
        "zh": "我的姐妹叫莉萨。"
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
        "de": "Die Reise dauert drei Tage.",
        "zh": "这次旅行持续三天。"
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
        "de": "Die Ansage ist laut.",
        "zh": "广播通知很响。"
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
        "de": "Das ist ein Prozent Rabatt.",
        "zh": "这是百分之一的折扣。"
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
        "de": "Mein Sohn spielt im Garten.",
        "zh": "我的儿子在花园里玩。"
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
        "de": "Das Reisebüro hat günstige Tickets.",
        "zh": "旅行社有便宜的票。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0033",
    "german": "Anschluss",
    "translation": "换乘",
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
        "de": "Der Anschluss kommt in fünf Minuten.",
        "zh": "换乘将在五分钟后到达。"
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
        "de": "Ein Liter Wasser kostet zwei Euro.",
        "zh": "一升水的价格是两欧元。"
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
        "de": "Meine Tochter liest ein Buch.",
        "zh": "我的女儿在读一本书。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0504",
    "german": "Reiseführer",
    "translation": "旅行指南",
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
        "de": "Der Reiseführer zeigt die Stadtkarte.",
        "zh": "旅行指南展示了城市地图。"
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
        "de": "Bitte das Gerät an sein lassen.",
        "zh": "请把设备保持开启。"
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
        "de": "Ein Gramm Zucker kostet fünf Cent.",
        "zh": "一克糖的价格是五分钱。"
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
        "de": "Mein Vater kocht gern.",
        "zh": "我的父亲喜欢做饭。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0517",
    "german": "S-Bahn",
    "translation": "轻轨",
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
        "de": "Ich fahre mit der S-Bahn.",
        "zh": "我乘坐S-Bahn。"
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
        "de": "Er kann nicht sofort antworten.",
        "zh": "他不能马上回答。"
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
        "de": "Ein Pfund Äpfel kostet drei Euro.",
        "zh": "一磅苹果的价格是三欧元。"
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
        "de": "Meine Verwandte kommen morgen.",
        "zh": "我的亲属明天来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0549",
    "german": "weg sein",
    "translation": "不在",
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
        "de": "Sie will nicht mehr weg sein.",
        "zh": "她不想再离开。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0036",
    "german": "Antwort",
    "translation": "答案",
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
        "de": "Die Antwort ist richtig.",
        "zh": "答案是正确的。"
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
        "de": "Ich kaufe ein Kilo Äpfel.",
        "zh": "我买了一公斤苹果。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-alpha-0634",
    "german": "Vorname",
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
        "de": "Mein Vorname ist Anna.",
        "zh": "我的名字是安娜。"
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
        "de": "Die Straße ist breit.",
        "zh": "这条街道很宽。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0037",
    "german": "Anzeige",
    "translation": "告示",
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
        "de": "Die Anzeige im Fenster ist neu.",
        "zh": "窗户上的告示是新的。"
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
        "de": "Der Mantel ist schwarz.",
        "zh": "这件外套是黑色的。"
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
      "你好",
      "最喜欢的",
      "再见"
    ],
    "distractorIds": [
      "a1-alpha-0304",
      "a1-alpha-0410",
      "a1-alpha-0603"
    ],
    "examples": [
      {
        "de": "Deutschland liegt in Europa.",
        "zh": "德国位于欧洲。"
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
        "de": "Die Straßenbahn fährt heute pünktlich.",
        "zh": "有轨电车今天准时。"
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
        "de": "Ich ziehe mich schnell an.",
        "zh": "我快速穿好衣服。"
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
        "de": "Der Himmel ist grau.",
        "zh": "天空是灰色的。"
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
        "de": "Der Deutsche trinkt Kaffee.",
        "zh": "这位德国人喝咖啡。"
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
        "de": "Das Taxi kommt gleich.",
        "zh": "出租车马上就来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0039",
    "german": "Apartment",
    "translation": "公寓",
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
        "de": "Das Apartment ist klein.",
        "zh": "这间公寓很小。"
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
        "de": "Das T-Shirt ist blau.",
        "zh": "这件T恤是蓝色的。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-109",
    "german": "ein Deutscher",
    "translation": "一个德国人",
    "kind": "phrase",
    "plural": "eine Deutsche, Deutsche",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "说明自己的来源或国籍",
      "例如",
      "一米"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-114",
      "a1-alpha-0096",
      "a1-group-measurements-095"
    ],
    "examples": [
      {
        "de": "Ein Deutscher spricht Englisch.",
        "zh": "一个德国人说英语。"
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
        "de": "Das Ticket kostet fünf Euro.",
        "zh": "这张票要五欧元。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0041",
    "german": "Appetit",
    "translation": "食欲",
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
        "de": "Ich habe keinen Appetit.",
        "zh": "我没有食欲。"
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
        "de": "Der Apfel ist grün.",
        "zh": "这个苹果是绿色的。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-110",
    "german": "deutsch",
    "translation": "德国的；德语的",
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
        "de": "Ich bin deutsch.",
        "zh": "我是德国人。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0618",
    "german": "Urlaub",
    "translation": "假期",
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
        "de": "Wir machen Urlaub.",
        "zh": "我们去度假。"
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
      "打开（状态）",
      "很快"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0052",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Ich habe auch Hunger.",
        "zh": "我也饿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-123",
    "german": "weiß",
    "translation": "白色的",
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
        "de": "Das T-Shirt ist weiß.",
        "zh": "这件T恤是白色的。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-111",
    "german": "Europa",
    "translation": "欧洲",
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
        "de": "Europa liegt im Westen.",
        "zh": "欧洲在西边。"
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
        "de": "Mein Zimmer ist klein.",
        "zh": "我的房间很小。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0049",
    "german": "auf",
    "translation": "在……上",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "来自"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0056"
    ],
    "examples": [
      {
        "de": "Die Tasche liegt auf dem Stuhl.",
        "zh": "包放在椅子上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-124",
    "german": "rot",
    "translation": "红色的",
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
        "de": "Die Rose ist rot.",
        "zh": "玫瑰是红色的。"
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
        "de": "Er ist ein Europäer.",
        "zh": "他是欧洲人。"
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
        "de": "Der Zug kommt pünktlich.",
        "zh": "火车准时到达。"
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
        "de": "Die Aufgabe ist leicht.",
        "zh": "这项任务很容易。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-125",
    "german": "gelb",
    "translation": "黄色的",
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
        "de": "Der Ball ist gelb.",
        "zh": "球是黄色的。"
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
      "德国的；德语的",
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
        "de": "Das Essen ist europäisch.",
        "zh": "这道菜是欧洲风味的。"
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
        "de": "Wir fahren nach Norden.",
        "zh": "我们向北行驶。"
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
        "de": "Hör auf zu reden.",
        "zh": "请停止说话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-colors-126",
    "german": "braun",
    "translation": "棕色的",
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
        "de": "Der Tisch ist braun.",
        "zh": "桌子是棕色的。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-countries-nationalities-114",
    "german": "Angabe der eigenen Herkunft oder Nationalität",
    "translation": "说明自己的来源或国籍",
    "kind": "phrase",
    "topic": "个人与家庭",
    "topicIds": [
      "person"
    ],
    "distractors": [
      "一个德国人",
      "例如",
      "一米"
    ],
    "distractorIds": [
      "a1-group-countries-nationalities-109",
      "a1-alpha-0096",
      "a1-group-measurements-095"
    ],
    "examples": [
      {
        "de": "Die Angabe der eigenen Herkunft oder Nationalität steht im Formular.",
        "zh": "表格里有填写本人来源或国籍的栏目。"
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
        "de": "Im Süden ist es warm.",
        "zh": "南方很暖。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0052",
    "german": "auf sein",
    "translation": "打开（状态）",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "很快"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0082"
    ],
    "examples": [
      {
        "de": "Der Herd ist auf.",
        "zh": "炉子是开的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-115",
    "german": "Land",
    "translation": "国家",
    "kind": "noun",
    "plural": "Bewohner, Nationalität",
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
        "de": "Das Land ist klein.",
        "zh": "这个国家很小。"
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
        "de": "Im Westen ist es kühl.",
        "zh": "西方很凉。"
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
        "de": "Ich stehe um sieben auf.",
        "zh": "我七点起床。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-116",
    "german": "Türkei",
    "translation": "土耳其",
    "kind": "noun",
    "plural": "Türke/Türkin, türkisch",
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
        "de": "Die Türkei liegt in Asien.",
        "zh": "土耳其位于亚洲。"
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
        "de": "Im Osten ist es sonnig.",
        "zh": "东方很阳光。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-alpha-0056",
    "german": "aus",
    "translation": "来自",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Ich komme aus Berlin.",
        "zh": "我来自柏林。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-117",
    "german": "Finnland",
    "translation": "芬兰",
    "kind": "noun",
    "plural": "Finne/Finnin, finnisch",
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
        "de": "Finnland liegt im Norden.",
        "zh": "芬兰位于北部。"
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
        "de": "Bitte das Formular ausfüllen.",
        "zh": "请填写表格。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-group-countries-nationalities-118",
    "german": "Mexiko",
    "translation": "墨西哥",
    "kind": "noun",
    "plural": "Mexikaner/Mexikanerin, mexikanisch",
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
        "de": "Mexiko hat warme Strände.",
        "zh": "墨西哥有温暖的海滩。"
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
        "de": "Der Ausgang ist rechts.",
        "zh": "出口在右边。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0061",
    "german": "Ausland",
    "translation": "国外",
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
        "de": "Ich reise ins Ausland.",
        "zh": "我去国外旅行。"
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
        "de": "Der Ausländer spricht Deutsch.",
        "zh": "这位外国人说德语。"
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
      "著名的",
      "占用的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0097",
      "a1-alpha-0102"
    ],
    "examples": [
      {
        "de": "Das Essen ist ausländisch.",
        "zh": "这食物是外国的。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0064",
    "german": "ausmachen",
    "translation": "关掉",
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
        "de": "Ich mache das Licht aus.",
        "zh": "我把灯关掉。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0065",
    "german": "Aussage",
    "translation": "陈述",
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
        "de": "Seine Aussage war klar.",
        "zh": "他的陈述很清楚。"
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
        "de": "Er sieht müde aus.",
        "zh": "他看起来很累。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0067",
    "german": "aus sein",
    "translation": "关机",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "大约",
      "多少",
      "等等"
    ],
    "distractorIds": [
      "a1-alpha-0142",
      "a1-alpha-0662",
      "a1-group-numbers-039"
    ],
    "examples": [
      {
        "de": "Der Fernseher ist aus.",
        "zh": "电视关机了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0068",
    "german": "aussteigen",
    "translation": "下车",
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
        "de": "Ich steige an der Haltestelle aus.",
        "zh": "我在站台下车。"
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
        "de": "Ich zeige meinen Ausweis.",
        "zh": "我出示我的证件。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0070",
    "german": "(sich) ausziehen",
    "translation": "脱下",
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
        "de": "Ich ziehe mich zu Hause aus.",
        "zh": "我在家里脱衣服。"
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
        "de": "Das Baby schläft friedlich.",
        "zh": "宝宝安静地睡着。"
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
        "de": "Wir gehen in die Bäckerei.",
        "zh": "我们去面包店。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0082",
    "german": "bald",
    "translation": "很快",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir kommen bald zurück.",
        "zh": "我们很快回来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0086",
    "german": "bar",
    "translation": "酒吧",
    "kind": "noun",
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
        "de": "Wir treffen uns in der Bar.",
        "zh": "我们在酒吧见面。"
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
        "de": "Mein Bauch tut weh.",
        "zh": "我的肚子疼。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0090",
    "german": "bedeuten",
    "translation": "意味着",
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
        "de": "Was bedeutet das Wort?",
        "zh": "这个词是什么意思？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0091",
    "german": "beginnen",
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
        "de": "Der Film beginnt um acht.",
        "zh": "电影八点开始。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0092",
    "german": "bei",
    "translation": "在…地点/时间",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Ich warte bei der Schule.",
        "zh": "我在学校等候。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0093",
    "german": "beide",
    "translation": "两个",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "你的"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0153"
    ],
    "examples": [
      {
        "de": "Beide Kinder lachen.",
        "zh": "两个孩子在笑。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0097",
    "german": "bekannt",
    "translation": "著名的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "占用的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0102"
    ],
    "examples": [
      {
        "de": "Der Sänger ist sehr bekannt.",
        "zh": "这位歌手非常有名。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0098",
    "german": "der/die Bekannte",
    "translation": "熟人",
    "kind": "noun",
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
        "de": "Ich treffe meine Bekannte heute.",
        "zh": "我今天见我的熟人。"
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
        "de": "Ich habe eine Erkältung bekommen.",
        "zh": "我得了感冒。"
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
        "de": "Ich benutze das Handy.",
        "zh": "我使用这部手机。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0102",
    "german": "besetzt",
    "translation": "占用的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Büro ist besetzt.",
        "zh": "办公室已被占用。"
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
        "de": "Wir wollen das Museum besichtigen.",
        "zh": "我们想参观博物馆。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Dieses Buch ist besser.",
        "zh": "这本书更好。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0105",
    "german": "best-",
    "translation": "最好的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Paul ist mein bester Freund.",
        "zh": "保罗是我最好的朋友。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0107",
    "german": "besuchen",
    "translation": "拜访",
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
        "de": "Ich möchte meine Tante besuchen.",
        "zh": "我想拜访我的阿姨。"
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
        "de": "Das Bild ist schön.",
        "zh": "这幅画很漂亮。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das T-Shirt ist billig.",
        "zh": "这件 T 恤很便宜。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0114",
    "german": "bis",
    "translation": "直到",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Wir warten bis morgen.",
        "zh": "我们等到明天。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0115",
    "german": "bisschen",
    "translation": "一点儿",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich bin ein bisschen müde.",
        "zh": "我有点儿累。"
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
      "是的，真的，的确",
      "不是"
    ],
    "distractorIds": [
      "a1-alpha-0149",
      "a1-alpha-0340",
      "a1-alpha-0452"
    ],
    "examples": [
      {
        "de": "Bitte, setz dich hin.",
        "zh": "请坐。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0117",
    "german": "Bitte",
    "translation": "请求",
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
        "de": "Ich habe eine Bitte.",
        "zh": "我有一个请求。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0118",
    "german": "bitten",
    "translation": "请求",
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
        "de": "Kann ich dich um Hilfe bitten?",
        "zh": "我可以请你帮忙吗？"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Kaffee ist bitter.",
        "zh": "咖啡是苦的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0120",
    "german": "bleiben",
    "translation": "停留",
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
        "de": "Ich bleibe zu Hause.",
        "zh": "我待在家里。"
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
        "de": "Der Bleistift liegt auf dem Tisch.",
        "zh": "铅笔在桌子上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0122",
    "german": "Blick",
    "translation": "目光",
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
        "de": "Ich habe einen kurzen Blick.",
        "zh": "我扫了一眼。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0124",
    "german": "Bogen",
    "translation": "纸张",
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
        "de": "Der Bogen liegt auf dem Tisch.",
        "zh": "这张纸在桌子上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0125",
    "german": "böse",
    "translation": "生气的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Er ist heute böse.",
        "zh": "他今天生气。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0126",
    "german": "brauchen",
    "translation": "需要",
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
        "de": "Ich brauche ein Buch.",
        "zh": "我需要一本书。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Weg ist breit.",
        "zh": "道路很宽阔。"
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
        "de": "Ich bringe das Buch.",
        "zh": "我把书带来。"
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
        "de": "Das Brötchen ist frisch.",
        "zh": "小面包是新鲜的。"
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
        "de": "Der Buchstabe A ist groß.",
        "zh": "字母A是大写的。"
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
        "de": "Das Café ist offen.",
        "zh": "咖啡馆是开的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0140",
    "german": "CD",
    "translation": "光盘",
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
        "de": "Die CD spielt Musik.",
        "zh": "光盘播放音乐。"
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
      "关机",
      "多少",
      "等等"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0662",
      "a1-group-numbers-039"
    ],
    "examples": [
      {
        "de": "Das Buch kostet ca. 5 Euro.",
        "zh": "这本书大约5欧元。"
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
        "de": "Der Computer ist neu.",
        "zh": "计算机是新的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0144",
    "german": "da",
    "translation": "那里",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich bin jetzt da.",
        "zh": "我现在在那里。"
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
        "de": "Die Dame kauft Brot.",
        "zh": "这位女士买面包。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0146",
    "german": "daneben",
    "translation": "在旁边",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Der Stuhl steht daneben.",
        "zh": "椅子就在旁边。"
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
        "de": "Wir danken euch.",
        "zh": "我们感谢你们。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0148",
    "german": "Dank",
    "translation": "感谢（名词）",
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
        "de": "Vielen Dank für deine Hilfe.",
        "zh": "非常感谢你的帮助。"
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
      "是的，真的，的确",
      "不是"
    ],
    "distractorIds": [
      "a1-alpha-0116",
      "a1-alpha-0340",
      "a1-alpha-0452"
    ],
    "examples": [
      {
        "de": "Danke, das ist nett.",
        "zh": "谢谢，这很好。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0150",
    "german": "dann",
    "translation": "然后",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir gehen dann nach Hause.",
        "zh": "我们随后回家。"
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
        "de": "Welches Datum ist heute?",
        "zh": "今天是哪一天？"
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
        "de": "Der Film wird zwei Stunden dauern.",
        "zh": "电影将持续两个小时。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0153",
    "german": "dein-",
    "translation": "你的",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Ist das dein Buch?",
        "zh": "这是你的书吗？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0154",
    "german": "denn",
    "translation": "因为",
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
        "de": "Ich bleibe zu Hause, denn es regnet.",
        "zh": "我待在家里，因为下雨。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0155",
    "german": "der",
    "translation": "这个（定冠词）",
    "kind": "determiner",
    "plural": "die, das",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Der Mann trägt einen Hut.",
        "zh": "这位男士戴着帽子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0156",
    "german": "dich",
    "translation": "你（宾格）",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（与格）",
      "他",
      "它"
    ],
    "distractorIds": [
      "a1-alpha-0158",
      "a1-alpha-0197",
      "a1-alpha-0203"
    ],
    "examples": [
      {
        "de": "Ich sehe dich.",
        "zh": "我看见你。"
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
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Dies ist mein Stift.",
        "zh": "这是我的笔。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0158",
    "german": "dir",
    "translation": "你（与格）",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（宾格）",
      "他",
      "它"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0197",
      "a1-alpha-0203"
    ],
    "examples": [
      {
        "de": "Ich gebe dir das Buch.",
        "zh": "我把书给你。"
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
        "de": "Der Doktor kommt heute.",
        "zh": "这位男博士今天来。"
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
        "de": "Das Dorf liegt am Fluss.",
        "zh": "这个村庄在河边。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0163",
    "german": "dort",
    "translation": "那里",
    "kind": "adverb",
    "plural": "-her, -hin",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das Buch liegt dort.",
        "zh": "书在那儿。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0164",
    "german": "draußen",
    "translation": "在外面",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir spielen draußen.",
        "zh": "我们在外面玩。"
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
        "de": "Ich drucke das Bild.",
        "zh": "我打印这张图片。"
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
        "de": "Der Drucker ist neu.",
        "zh": "这台打印机是新的。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0167",
    "german": "drücken",
    "translation": "按",
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
        "de": "Bitte drücken Sie hier.",
        "zh": "请在这里按。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0168",
    "german": "durch",
    "translation": "穿过",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Wir gehen durch den Park.",
        "zh": "我们穿过公园。"
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
        "de": "Die Durchsage war laut.",
        "zh": "广播通知很响。"
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
        "de": "Du darfst hier sitzen.",
        "zh": "你可以坐在这里。"
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
        "de": "Ich dusche jeden Morgen.",
        "zh": "我每天早上洗澡。"
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
        "de": "Die Dusche ist klein.",
        "zh": "淋浴间很小。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0174",
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
        "de": "Wir treffen uns in der Ecke.",
        "zh": "我们在角落见面。"
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
        "de": "Das Ei ist frisch.",
        "zh": "鸡蛋是新鲜的。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Ich habe es heute eilig.",
        "zh": "我今天赶时间。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0179",
    "german": "ein-",
    "translation": "一个",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Ein Mann kommt.",
        "zh": "一个男人来了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0180",
    "german": "einfach",
    "translation": "简单的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das ist einfach.",
        "zh": "这很简单。"
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
        "de": "Der Eingang ist offen.",
        "zh": "入口是开的。"
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
        "de": "Ich habe eine Einladung bekommen.",
        "zh": "我收到了一个邀请函。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Komm bitte einmal später.",
        "zh": "请稍后再来一次。"
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
        "de": "Ich steige jetzt ein.",
        "zh": "我现在上车。"
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
        "de": "Der Eintritt kostet fünf Euro.",
        "zh": "入场费是五欧元。"
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
        "de": "Ich schreibe eine E‑Mail.",
        "zh": "我写一封电子邮件。"
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
        "de": "Der Empfänger liest die Nachricht.",
        "zh": "收件人阅读信息。"
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
        "de": "Ich empfehle dir das Buch.",
        "zh": "我向你推荐这本书。"
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
        "de": "Der Film endet um acht.",
        "zh": "电影在八点结束。"
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
        "de": "Das Ende ist sehr traurig.",
        "zh": "结局非常悲伤。"
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
        "de": "Entschuldige bitte das Geräusch.",
        "zh": "请原谅这个噪音。"
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
        "de": "Entschuldigung, ich bin zu spät.",
        "zh": "对不起，我迟到了。"
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
      "你（宾格）",
      "你（与格）",
      "它"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0203"
    ],
    "examples": [
      {
        "de": "Er kommt aus Berlin.",
        "zh": "他来自柏林。"
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
        "de": "Das Ergebnis ist richtig.",
        "zh": "结果是正确的。"
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
        "de": "Kannst du das bitte erklären?",
        "zh": "你能解释一下吗？"
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
        "de": "Erlauben Sie das bitte?",
        "zh": "您允许吗？"
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
        "de": "Erwachsene zahlen mehr.",
        "zh": "成年人付得更多。"
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
        "de": "Ich erzähle dir eine Geschichte.",
        "zh": "我给你讲一个故事。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Es ist kalt heute.",
        "zh": "今天很冷。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Ist das euer Buch?",
        "zh": "这是你们的书吗？"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Die Antwort ist falsch.",
        "zh": "答案是错误的。"
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
        "de": "Welche Farbe hat das Auto?",
        "zh": "这辆车是什么颜色？"
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
        "de": "Mir fehlt das Salz.",
        "zh": "我缺盐。"
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
        "de": "Ich habe einen Fehler gemacht.",
        "zh": "我犯了一个错误。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0222",
    "german": "fertig",
    "translation": "完成的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Kuchen ist fertig.",
        "zh": "蛋糕已经做好了。"
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
        "de": "Das Feuer brennt im Kamin.",
        "zh": "壁炉里的火在燃烧。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0224",
    "german": "Fieber",
    "translation": "发烧",
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
        "de": "Sie hat hohes Fieber.",
        "zh": "她发高烧。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0225",
    "german": "Film",
    "translation": "电影",
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
        "de": "Wir sehen einen Film.",
        "zh": "我们在看一部电影。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0226",
    "german": "finden",
    "translation": "找到",
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
        "de": "Ich finde den Schlüssel.",
        "zh": "我找到了钥匙。"
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
        "de": "Meine Mutter arbeitet in einer Firma.",
        "zh": "我妈妈在一家公司工作。"
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
        "de": "Der Fisch ist frisch.",
        "zh": "这条鱼很新鲜。"
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
        "de": "Die Flasche ist leer.",
        "zh": "瓶子是空的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0231",
    "german": "fliegen",
    "translation": "飞",
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
        "de": "Vögel fliegen im Himmel.",
        "zh": "鸟在天空中飞。"
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
        "de": "Der Flug fliegt um 10 Uhr ab.",
        "zh": "航班在上午10点起飞。"
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
        "de": "Ich fülle das Formular aus.",
        "zh": "我填写这张表格。"
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
        "de": "Ich frage den Lehrer.",
        "zh": "我向老师提问。"
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
        "de": "Hast du eine Frage?",
        "zh": "你有问题吗？"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0241",
    "german": "frei",
    "translation": "空着的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Sitz ist frei.",
        "zh": "座位是空的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0243",
    "german": "fremd",
    "translation": "陌生的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das ist ein fremdes Wort.",
        "zh": "这是一个陌生的词。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0244",
    "german": "(sich) freuen",
    "translation": "高兴",
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
        "de": "Ich freue mich sehr.",
        "zh": "我很高兴。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0246",
    "german": "früher",
    "translation": "以前",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Früher war ich Schüler.",
        "zh": "以前我还是学生。"
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
        "de": "Die Führung beginnt um neun.",
        "zh": "导览在九点开始。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0250",
    "german": "für",
    "translation": "为了",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Geschenk ist für dich.",
        "zh": "这份礼物是给你的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0251",
    "german": "Fuß",
    "translation": "脚",
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
        "de": "Mein Fuß tut weh.",
        "zh": "我的脚疼。"
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
        "de": "Der Gast kommt morgen.",
        "zh": "客人明天来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0255",
    "german": "geben",
    "translation": "给",
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
        "de": "Ich gebe dir einen Stift.",
        "zh": "我把笔给你。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Ich bin 1990 geboren.",
        "zh": "我1990年出生。"
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
        "de": "Der Film gefällt mir.",
        "zh": "这部电影我喜欢。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0261",
    "german": "gegen",
    "translation": "对抗",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Der Ball fliegt gegen die Wand.",
        "zh": "球撞向墙壁。"
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
        "de": "Wem gehören diese Stifte?",
        "zh": "这些笔属于谁？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0265",
    "german": "Gemüse",
    "translation": "蔬菜",
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
        "de": "Ich kaufe frisches Gemüse.",
        "zh": "我买新鲜的蔬菜。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0267",
    "german": "gerade",
    "translation": "恰好",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich komme gerade nach Hause.",
        "zh": "我刚回家。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0268",
    "german": "geradeaus",
    "translation": "直走",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Gehen Sie bitte geradeaus.",
        "zh": "请直走。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0269",
    "german": "gern(e)",
    "translation": "喜欢",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich trinke gern Tee.",
        "zh": "我喜欢喝茶。"
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
        "de": "Das Geschenk ist schön.",
        "zh": "这份礼物很漂亮。"
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
        "de": "Meine Geschwister wohnen in Berlin.",
        "zh": "我的兄弟姐妹住在柏林。"
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
        "de": "Wir führen ein kurzes Gespräch.",
        "zh": "我们进行一次简短的谈话。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0274",
    "german": "gestern",
    "translation": "昨天",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Es regnete gestern stark.",
        "zh": "昨天雨下得很大。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Mein Opa ist gestorben.",
        "zh": "我的爷爷去世了。"
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
        "de": "Ein kaltes Getränk bitte.",
        "zh": "请来一杯冰饮料。"
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
        "de": "Das Gewicht ist fünf Kilo.",
        "zh": "重量是五公斤。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0278",
    "german": "gewinnen",
    "translation": "赢得",
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
        "de": "Wir wollen im Spiel gewinnen.",
        "zh": "我们想在游戏中获胜。"
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
        "de": "Ein Glas Wasser bitte.",
        "zh": "请来一杯水。"
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
        "de": "Ich will dir glauben.",
        "zh": "我想相信你。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0281",
    "german": "gleich",
    "translation": "马上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich komme gleich.",
        "zh": "我马上来。"
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
        "de": "Der Zug steht am Gleis 3.",
        "zh": "火车停在三号站台。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0283",
    "german": "Glück",
    "translation": "运气",
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
        "de": "Ich habe heute Glück.",
        "zh": "我今天运气好。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Ich bin heute glücklich.",
        "zh": "我今天很幸福。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0285",
    "german": "Glückwunsch",
    "translation": "祝贺",
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
        "de": "Herzlichen Glückwunsch zum Geburtstag!",
        "zh": "衷心祝你生日快乐！"
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
        "de": "Wir gratulieren dir zum Erfolg.",
        "zh": "我们祝贺你的成功。"
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
        "de": "Wir grillen am Samstag.",
        "zh": "我们周六烧烤。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Haus ist sehr groß.",
        "zh": "这座房子很大。"
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
        "de": "Welche Größe passt dir?",
        "zh": "哪个尺码适合你？"
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
        "de": "Wir sind eine kleine Gruppe.",
        "zh": "我们是一小组。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0295",
    "german": "Gruß",
    "translation": "问候",
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
        "de": "Ein herzlicher Gruß an dich.",
        "zh": "向你致以诚挚的问候。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Ausweis ist noch gültig.",
        "zh": "这张证件仍然有效。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Angebot ist sehr günstig.",
        "zh": "这个优惠非常便宜。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0298",
    "german": "gut",
    "translation": "好的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Essen schmeckt gut.",
        "zh": "这道菜味道好。"
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
        "de": "Wir haben ein neues Auto.",
        "zh": "我们有一辆新车。"
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
        "de": "Ich kaufe frisches Hähnchen.",
        "zh": "我买新鲜的鸡肉。"
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
        "de": "Wir buchen Halbpension im Hotel.",
        "zh": "我们在酒店预订半膳住宿。"
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
        "de": "Wir treffen uns in der Halle.",
        "zh": "我们在大厅碰面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0304",
    "german": "hallo",
    "translation": "你好",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "最喜欢的",
      "再见",
      "德国"
    ],
    "distractorIds": [
      "a1-alpha-0410",
      "a1-alpha-0603",
      "a1-group-countries-nationalities-107"
    ],
    "examples": [
      {
        "de": "Hallo, ich bin Anna.",
        "zh": "你好，我是安娜。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0305",
    "german": "halten",
    "translation": "保持",
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
        "de": "Bitte halten Sie die Tür offen.",
        "zh": "请把门保持打开。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0306",
    "german": "Haltestelle",
    "translation": "公交站",
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
        "de": "Die Haltestelle ist gleich hier.",
        "zh": "公交站就在这里。"
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
        "de": "Ich habe mir die Hand verletzt.",
        "zh": "我的手受伤了。"
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
        "de": "Mein Handy ist leer.",
        "zh": "我的手机没电了。"
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
        "de": "Meine Heimat ist Berlin.",
        "zh": "我的家乡是柏林。"
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
        "de": "Wir heiraten im Juni.",
        "zh": "我们在六月结婚。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0315",
    "german": "heißen",
    "translation": "叫",
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
        "de": "Wie heißen Sie?",
        "zh": "您叫什么？"
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
        "de": "Kannst du mir helfen?",
        "zh": "你能帮我吗？"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Zimmer ist hell.",
        "zh": "房间很明亮。"
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
        "de": "Der Herd ist neu.",
        "zh": "炉灶是新的。"
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
        "de": "Guten Morgen, Herr Müller.",
        "zh": "早上好，穆勒先生。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0320",
    "german": "herzlich",
    "translation": "衷心",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir danken Ihnen herzlich.",
        "zh": "我们衷心感谢您。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Heute ist es warm.",
        "zh": "今天很暖。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0322",
    "german": "hier",
    "translation": "这里",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Hier ist das Buch.",
        "zh": "书在这里。"
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
        "de": "Kannst du mir bitte Hilfe geben?",
        "zh": "你能给我帮助吗？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0324",
    "german": "hinten",
    "translation": "后面",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Der Ball liegt hinten.",
        "zh": "球在后面。"
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
        "de": "Mein Hobby ist Lesen.",
        "zh": "我的爱好是阅读。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Turm ist hoch.",
        "zh": "这座塔很高。"
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
        "de": "Wir feiern die Hochzeit.",
        "zh": "我们庆祝婚礼。"
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
        "de": "Kannst du das Buch holen?",
        "zh": "你能把书拿来吗？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0329",
    "german": "hören",
    "translation": "听",
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
        "de": "Kannst du mich hören?",
        "zh": "你能听见我吗？"
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
        "de": "Der Hund schläft.",
        "zh": "那只狗在睡觉。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Ich komme heute etwas später.",
        "zh": "我今天会晚一点儿来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0334",
    "german": "ihr/ihm/ihn",
    "translation": "她（属格）/他（与格）/他（宾格）",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Ich gebe ihr das Buch.",
        "zh": "我把书给她。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Er kommt immer pünktlich.",
        "zh": "他总是准时来。"
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
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Buch ist in der Tasche.",
        "zh": "书在口袋里。"
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
        "de": "Die Information ist wichtig.",
        "zh": "这条信息很重要。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Die Schule organisiert ein internationales Fest.",
        "zh": "学校组织了一场国际文化节。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0339",
    "german": "Internet",
    "translation": "互联网",
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
        "de": "Ich nutze jeden Tag das Internet.",
        "zh": "我每天都使用互联网。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0340",
    "german": "ja",
    "translation": "是的，真的，的确",
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
        "de": "Das ist ja richtig.",
        "zh": "是的，没错。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0341",
    "german": "Jacke",
    "translation": "外套",
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
        "de": "Ich trage eine warme Jacke.",
        "zh": "我穿着一件暖和的外套。"
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
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Jeder Schüler hat ein Buch.",
        "zh": "每个学生都有一本书。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich komme jetzt gleich.",
        "zh": "我现在马上来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0344",
    "german": "Job",
    "translation": "工作",
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
        "de": "Mein Vater hat einen neuen Job.",
        "zh": "我父亲有一份新工作。"
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
        "de": "Jugendliche treffen sich im Park.",
        "zh": "青少年在公园里相聚。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Mann ist noch jung.",
        "zh": "这个男人还很年轻。"
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
        "de": "Der Junge liest ein Buch.",
        "zh": "男孩在读一本书。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0349",
    "german": "kaputt",
    "translation": "坏的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Stuhl ist kaputt.",
        "zh": "这把椅子坏了。"
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
        "de": "Die Kartoffel ist frisch.",
        "zh": "这颗土豆是新鲜的。"
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
        "de": "Ich bezahle an der Kasse.",
        "zh": "我在收银台付款。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0355",
    "german": "kein",
    "translation": "没有",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Ich habe kein Geld.",
        "zh": "我没有钱。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0356",
    "german": "kennen",
    "translation": "认识，了解",
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
        "de": "Ich kenne Berlin gut.",
        "zh": "我很了解柏林。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0357",
    "german": "kennenlernen",
    "translation": "认识（初次）",
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
        "de": "Ich möchte dich kennenlernen.",
        "zh": "我想认识你。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0361",
    "german": "Kiosk",
    "translation": "报刊亭",
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
        "de": "Der Kiosk verkauft Zeitungen.",
        "zh": "报刊亭卖报纸。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das ist klar, ich helfe dir.",
        "zh": "当然，我帮你。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0363",
    "german": "Klasse",
    "translation": "班级",
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
        "de": "Meine Klasse ist groß.",
        "zh": "我的班级很大。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Haus ist klein.",
        "zh": "这座房子很小。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0366",
    "german": "kochen",
    "translation": "烹调",
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
        "de": "Ich koche Suppe.",
        "zh": "我在煮汤。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0369",
    "german": "kommen",
    "translation": "来到",
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
        "de": "Er kommt nach Hause.",
        "zh": "他回家。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0370",
    "german": "können",
    "translation": "能够",
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
        "de": "Ich kann schwimmen.",
        "zh": "我会游泳。"
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
        "de": "Das Buch kostet fünf Euro.",
        "zh": "这本书价值五欧元。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0374",
    "german": "krank",
    "translation": "生病的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Er ist krank.",
        "zh": "他生病了。"
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
        "de": "Ich kriege ein Geschenk.",
        "zh": "我得到一份礼物。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0377",
    "german": "Kuchen",
    "translation": "蛋糕",
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
        "de": "Der Kuchen ist süß.",
        "zh": "这块蛋糕很甜。"
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
        "de": "Der Kugelschreiber schreibt gut.",
        "zh": "这支圆珠笔写得好。"
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
        "de": "Der Kühlschrank ist leer.",
        "zh": "冰箱是空的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0380",
    "german": "kulturell",
    "translation": "文化的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Museum ist kulturell interessant.",
        "zh": "这座博物馆在文化上很有趣。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0381",
    "german": "sich kümmern",
    "translation": "照顾",
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
        "de": "Ich will mich um das Kind kümmern.",
        "zh": "我想照顾这个孩子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0382",
    "german": "Kunde",
    "translation": "顾客",
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
        "de": "Der Kunde kauft Brot.",
        "zh": "这位顾客买面包。"
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
        "de": "Der Kurs beginnt um neun.",
        "zh": "课程在九点开始。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0384",
    "german": "kurz",
    "translation": "短的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Film ist kurz.",
        "zh": "这部电影很短。"
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
        "de": "Wir lachen zusammen.",
        "zh": "我们一起笑。"
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
        "de": "Das Land ist schön.",
        "zh": "这个国家很美。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0388",
    "german": "lang",
    "translation": "长的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Flur ist lang.",
        "zh": "走廊很长。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0389",
    "german": "lange",
    "translation": "很久",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich warte lange.",
        "zh": "我等很久。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Zug ist langsam.",
        "zh": "火车很慢。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0391",
    "german": "laufen",
    "translation": "走路",
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
        "de": "Ich laufe jeden Tag.",
        "zh": "我每天走路。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0392",
    "german": "laut",
    "translation": "响亮的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Hund ist laut.",
        "zh": "那只狗很响亮。"
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
        "de": "Ich lebe in Berlin.",
        "zh": "我住在柏林。"
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
        "de": "Das Leben ist kurz.",
        "zh": "生活很短。"
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
        "de": "Die Lebensmittel sind frisch.",
        "zh": "这些食品很新鲜。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Sie ist ledig.",
        "zh": "她未婚。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0397",
    "german": "legen",
    "translation": "平放",
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
        "de": "Ich lege das Buch auf den Tisch.",
        "zh": "我把书放在桌子上。"
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
        "de": "Der Lehrer erklärt das.",
        "zh": "男老师解释这个。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0399",
    "german": "leicht",
    "translation": "轻的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Koffer ist leicht.",
        "zh": "这个箱子很轻。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Leider regnet es.",
        "zh": "可惜下雨了。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Bitte sprich leise.",
        "zh": "请低声说话。"
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
        "de": "Ich lese ein Buch.",
        "zh": "我在读一本书。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0404",
    "german": "letzt-",
    "translation": "上一个的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Letzte Woche war ich krank.",
        "zh": "我上周生病了。"
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
        "de": "Die Leute trinken Kaffee.",
        "zh": "人们喝咖啡。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Liebe Anna, wie geht es dir?",
        "zh": "亲爱的安娜，你好吗？"
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
        "de": "Ich will Deutsch lieben.",
        "zh": "我想热爱德语。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich trinke lieber Tee.",
        "zh": "我宁愿喝茶。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0410",
    "german": "Lieblings-",
    "translation": "最喜欢的",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你好",
      "再见",
      "德国"
    ],
    "distractorIds": [
      "a1-alpha-0304",
      "a1-alpha-0603",
      "a1-group-countries-nationalities-107"
    ],
    "examples": [
      {
        "de": "Mein Lieblingsbuch liegt auf dem Tisch.",
        "zh": "我最喜欢的书放在桌上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0412",
    "german": "liegen",
    "translation": "位于；躺着",
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
        "de": "Das Buch soll hier liegen.",
        "zh": "书应该放在这里。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Der Stuhl steht links.",
        "zh": "椅子在左边。"
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
        "de": "Der Lkw fährt schnell.",
        "zh": "卡车开得很快。"
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
        "de": "Das Lokal hat Pizza.",
        "zh": "这家店有披萨。"
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
        "de": "Die Lösung ist einfach.",
        "zh": "答案很简单。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Film ist lustig.",
        "zh": "这部电影很有趣。"
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
        "de": "Wir machen Hausaufgaben.",
        "zh": "我们做作业。"
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
        "de": "Das Mädchen singt.",
        "zh": "女孩在唱歌。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Man spricht hier Deutsch.",
        "zh": "这里人们说德语。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Lehrer ist männlich.",
        "zh": "老师是男性。"
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
        "de": "Die Maschine ist neu.",
        "zh": "这台机器是新的。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich habe mehr Äpfel.",
        "zh": "我有更多的苹果。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0426",
    "german": "mein",
    "translation": "我的",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das ist mein Buch.",
        "zh": "这是我的书。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0427",
    "german": "meist-",
    "translation": "大多数的",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Er kommt meist pünktlich.",
        "zh": "他通常准时来。"
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
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Ich gehe mit Anna.",
        "zh": "我和安娜一起去。"
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
        "de": "Ich bringe das Buch mit.",
        "zh": "我把书带来。"
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
        "de": "Ich komme mit.",
        "zh": "我一起去。"
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
        "de": "Ich mache mit.",
        "zh": "我参加。"
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
        "de": "Ich nehme den Regenschirm mit.",
        "zh": "我把雨伞带走。"
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
        "de": "Die Bank steht in der Mitte.",
        "zh": "这张长椅在中间。"
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
        "de": "Wir möchten ein Eis.",
        "zh": "我们想要一个冰淇淋。"
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
        "de": "Wir mögen Musik.",
        "zh": "我们喜欢音乐。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0441",
    "german": "möglich",
    "translation": "可行的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Ein Termin am Montag ist möglich.",
        "zh": "可以约在星期一。"
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
        "de": "Einen Moment bitte.",
        "zh": "请稍等。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0443",
    "german": "morgen",
    "translation": "明天",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Morgen fahre ich nach Berlin.",
        "zh": "明天我去柏林。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Ich bin müde.",
        "zh": "我很累。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0445",
    "german": "Mund",
    "translation": "嘴巴",
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
        "de": "Der Mund ist offen.",
        "zh": "嘴巴是张开的。"
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
        "de": "Ich muss heute arbeiten.",
        "zh": "我今天必须工作。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0448",
    "german": "nach",
    "translation": "…之后；去…",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Wir fahren nach Berlin.",
        "zh": "我们开车去柏林。"
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
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das ist das nächste Haus.",
        "zh": "这是下一栋房子。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0451",
    "german": "nehmen",
    "translation": "拿，取，乘，服用",
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
        "de": "Ich nehme den Bus.",
        "zh": "我乘坐公交车。"
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
      "是的，真的，的确"
    ],
    "distractorIds": [
      "a1-alpha-0116",
      "a1-alpha-0149",
      "a1-alpha-0340"
    ],
    "examples": [
      {
        "de": "Nein, ich komme nicht.",
        "zh": "不，我不来。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Auto ist neu.",
        "zh": "这辆车是新的。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich habe nicht genug.",
        "zh": "我没有足够的。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Ich habe nichts.",
        "zh": "我什么都没有。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0456",
    "german": "nie",
    "translation": "从不",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich esse nie Fleisch.",
        "zh": "我从不吃肉。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich habe noch Zeit.",
        "zh": "我还有时间。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das ist normal.",
        "zh": "这很正常。"
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
        "de": "Meine Nummer ist fünf.",
        "zh": "我的号码是五。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich habe nur ein Buch.",
        "zh": "我只有一本书。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0461",
    "german": "oben",
    "translation": "在上面",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das Bild hängt oben.",
        "zh": "画挂在上面。"
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
      "因为"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0012",
      "a1-alpha-0154"
    ],
    "examples": [
      {
        "de": "Möchtest du Tee oder Kaffee?",
        "zh": "你想喝茶还是咖啡？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0464",
    "german": "öffnen",
    "translation": "打开（门、窗等）",
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
        "de": "Ich öffne die Tür.",
        "zh": "我打开门。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0465",
    "german": "geöffnet",
    "translation": "已打开的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Die Tür ist geöffnet.",
        "zh": "门是打开的。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich gehe oft spazieren.",
        "zh": "我经常散步。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0467",
    "german": "ohne",
    "translation": "没有；不带",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Ich esse das Brot ohne Butter.",
        "zh": "我吃面包不抹黄油。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0469",
    "german": "Oma",
    "translation": "祖母",
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
        "de": "Meine Oma kocht Suppe.",
        "zh": "我的奶奶做汤。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0470",
    "german": "Opa",
    "translation": "祖父",
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
        "de": "Mein Opa liest die Zeitung.",
        "zh": "我的爷爷读报纸。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0471",
    "german": "Ordnung",
    "translation": "秩序",
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
        "de": "Bitte halte Ordnung im Zimmer.",
        "zh": "请保持房间整洁。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0472",
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
        "de": "Der Bahnhof ist ein Ort.",
        "zh": "火车站是一个地点。"
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
        "de": "Ich schreibe auf Papier.",
        "zh": "我在纸上写字。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0474",
    "german": "Papiere (pl.)",
    "translation": "文件",
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
        "de": "Ich bringe meine Papiere mit.",
        "zh": "我把我的文件带上。"
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
        "de": "Wir machen eine Pause.",
        "zh": "我们稍作休息。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0480",
    "german": "Plan",
    "translation": "计划",
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
        "de": "Ich habe einen Plan.",
        "zh": "我有一个计划。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0481",
    "german": "Platz",
    "translation": "位置",
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
        "de": "Gib mir einen Platz.",
        "zh": "请给我一个座位。"
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
        "de": "Ich bestelle Pommes frites.",
        "zh": "我点炸薯条。"
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
        "de": "Ich gehe zur Praxis.",
        "zh": "我去诊所。"
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
        "de": "Das ist ein Problem.",
        "zh": "这是一个问题。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0490",
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
        "de": "Ich nehme den Prospekt am Schalter.",
        "zh": "我从柜台拿了宣传册。"
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
        "de": "Morgen habe ich die Prüfung.",
        "zh": "明天我有考试。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Zug kommt pünktlich an.",
        "zh": "火车准时到达。"
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
        "de": "Er darf hier nicht rauchen.",
        "zh": "他不能在这里吸烟。"
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
        "de": "Der Raum ist leer.",
        "zh": "房间是空的。"
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
        "de": "Bitte geben Sie mir die Rechnung.",
        "zh": "请把账单给我。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0497",
    "german": "rechts",
    "translation": "右边",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das Buch liegt rechts.",
        "zh": "书在右边。"
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
        "de": "Es wird heute regnen.",
        "zh": "今天会下雨。"
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
        "de": "Ich will das Fahrrad reparieren.",
        "zh": "我想修理自行车。"
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
        "de": "Ich warte an der Rezeption.",
        "zh": "我在前台等候。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0509",
    "german": "richtig",
    "translation": "正确的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Deine Antwort ist richtig.",
        "zh": "你的答案是正确的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0510",
    "german": "riechen",
    "translation": "闻",
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
        "de": "Ich will das Parfüm riechen.",
        "zh": "我想闻这个香水。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Bitte sei jetzt ruhig.",
        "zh": "请现在保持安静。"
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
        "de": "Kannst du das bitte sagen?",
        "zh": "你能把它说出来吗？"
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
        "de": "Der Satz ist zu lang.",
        "zh": "这句话太长了。"
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
        "de": "Ich hoffe, die Sonne wird scheinen.",
        "zh": "我希望太阳会照耀。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0520",
    "german": "schicken",
    "translation": "寄送",
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
        "de": "Ich schicke dir das Paket.",
        "zh": "我把包裹寄给你。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0521",
    "german": "Schild",
    "translation": "标志牌",
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
        "de": "Das Schild zeigt den Ausgang.",
        "zh": "这个标志牌指示出口。"
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
        "de": "Ich esse Schinken zum Frühstück.",
        "zh": "我早餐吃火腿。"
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
        "de": "Ich schlafe jetzt.",
        "zh": "我现在睡觉。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wetter ist schlecht.",
        "zh": "天气很差。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0525",
    "german": "schließen",
    "translation": "关上",
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
        "de": "Ich schließe die Tür.",
        "zh": "我把门关上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0526",
    "german": "geschlossen",
    "translation": "关闭的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Laden ist am Sonntag geschlossen.",
        "zh": "商店星期日不营业。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0527",
    "german": "Schluss",
    "translation": "结束",
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
        "de": "Der Schluss ist kurz.",
        "zh": "结尾很短。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0529",
    "german": "schmecken",
    "translation": "好吃",
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
        "de": "Der Kuchen schmeckt gut.",
        "zh": "蛋糕很好吃。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Zug ist schnell.",
        "zh": "这列火车很快。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich bin schon zu Hause.",
        "zh": "我已经在家了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0532",
    "german": "schön",
    "translation": "美丽的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Park ist schön.",
        "zh": "公园很美丽。"
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
        "de": "Der Schrank ist voll.",
        "zh": "柜子里装满了东西。"
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
        "de": "Ich schreibe jeden Tag im Tagebuch.",
        "zh": "我每天在日记本里写字。"
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
        "de": "Der Schüler liest ein Buch.",
        "zh": "这位男学生在读一本书。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0538",
    "german": "schwer",
    "translation": "困难的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Die Aufgabe ist schwer.",
        "zh": "这道题很难。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0543",
    "german": "sehen",
    "translation": "看见",
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
        "de": "Ich sehe den Hund.",
        "zh": "我看到那只狗。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0544",
    "german": "Sehenswürdigkeit",
    "translation": "名胜",
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
        "de": "Die Sehenswürdigkeit ist schön.",
        "zh": "这座名胜很漂亮。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0545",
    "german": "sehr",
    "translation": "非常",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das Essen ist sehr gut.",
        "zh": "这道菜非常好。"
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
        "de": "Er ist mein Freund.",
        "zh": "他是我的朋友。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0550",
    "german": "zu sein",
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
        "de": "Es ist schön, hier zu sein.",
        "zh": "在这里很舒服。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0551",
    "german": "seit",
    "translation": "自……以来",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Ich wohne seit 2020 hier.",
        "zh": "我自2020年以来住在这里。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Sie arbeitet selbstständig.",
        "zh": "她独立工作。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0553",
    "german": "sich",
    "translation": "自己",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Er erinnert sich.",
        "zh": "他记得了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0554",
    "german": "sie",
    "translation": "她",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Ich treffe sie morgen.",
        "zh": "我明天会见她。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0555",
    "german": "Sie",
    "translation": "您",
    "kind": "pronoun",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Können Sie mir helfen?",
        "zh": "您能帮我吗？"
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
        "de": "Wir sitzen im Bus.",
        "zh": "我们坐在公交车上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0557",
    "german": "so",
    "translation": "这样",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das ist so.",
        "zh": "就是这样。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0559",
    "german": "sofort",
    "translation": "马上",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Komm sofort hierher!",
        "zh": "马上来这里！"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0561",
    "german": "sollen",
    "translation": "应当",
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
        "de": "Wir sollen lernen.",
        "zh": "我们应该学习。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0563",
    "german": "spät",
    "translation": "迟的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Zug ist spät.",
        "zh": "火车晚点了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0564",
    "german": "später",
    "translation": "以后",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir kommen später.",
        "zh": "我们稍后到。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0568",
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
        "de": "Deutsch ist eine schöne Sprache.",
        "zh": "德语是一门美丽的语言。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0571",
    "german": "stehen",
    "translation": "站立；处于某种状态",
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
        "de": "Der Stuhl steht neben dem Tisch.",
        "zh": "椅子在桌子旁边。"
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
        "de": "Ich habe eine neue Stelle gefunden.",
        "zh": "我找到了一个新职位。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0573",
    "german": "stellen",
    "translation": "放置",
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
        "de": "Bitte stell die Tasse auf den Tisch.",
        "zh": "请把杯子放在桌子上。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0574",
    "german": "Stock",
    "translation": "楼层",
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
        "de": "Wir wohnen im dritten Stock.",
        "zh": "我们住在三楼。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0577",
    "german": "studieren",
    "translation": "在大学学习",
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
        "de": "Anna studiert Biologie an der Uni.",
        "zh": "安娜在大学学习生物。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0578",
    "german": "Studium",
    "translation": "大学学习",
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
        "de": "Mein Studium dauert vier Jahre.",
        "zh": "我的大学学习持续四年。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0579",
    "german": "Student",
    "translation": "大学生（男性）",
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
        "de": "Der Student liest in der Bibliothek.",
        "zh": "这位男大学生在图书馆阅读。"
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
        "de": "Die Stunde beginnt um neun Uhr.",
        "zh": "这节课在九点开始。"
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
        "de": "Ich suche meine Schlüssel.",
        "zh": "我在找我的钥匙。"
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
        "de": "Ein Teil des Kuchens fehlt.",
        "zh": "蛋糕的一块不见了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0589",
    "german": "Termin",
    "translation": "约会；预约时间",
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
        "de": "Wir haben einen Termin um zehn.",
        "zh": "我们十点有一个约会。"
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
        "de": "Der Test ist morgen.",
        "zh": "测验在明天。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Buch ist sehr teuer.",
        "zh": "这本书很贵。"
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
        "de": "Der Text ist leicht zu lesen.",
        "zh": "这篇文章很容易阅读。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0593",
    "german": "Thema",
    "translation": "主题；话题",
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
        "de": "Unser Thema ist Umweltschutz.",
        "zh": "我们的主题是环境保护。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0597",
    "german": "Toilette",
    "translation": "厕所",
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
        "de": "Wo ist die Toilette?",
        "zh": "厕所在哪里？"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Fisch ist tot.",
        "zh": "这条鱼死了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0600",
    "german": "(sich) treffen",
    "translation": "见面",
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
        "de": "Wir treffen uns um acht.",
        "zh": "我们八点见面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0603",
    "german": "tschüss",
    "translation": "再见",
    "kind": "other",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "你好",
      "最喜欢的",
      "德国"
    ],
    "distractorIds": [
      "a1-alpha-0304",
      "a1-alpha-0410",
      "a1-group-countries-nationalities-107"
    ],
    "examples": [
      {
        "de": "Tschüss, bis morgen!",
        "zh": "再见，明天见！"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0604",
    "german": "tun",
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
        "de": "Was willst du tun?",
        "zh": "你想做什么？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0605",
    "german": "über",
    "translation": "关于",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Buch ist über Berlin.",
        "zh": "这本书是关于柏林的。"
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
        "de": "Wir übernachten im Hotel.",
        "zh": "我们在酒店过夜。"
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
        "de": "Ich möchte Geld überweisen.",
        "zh": "我想转账。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0608",
    "german": "Uhr",
    "translation": "钟表",
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
        "de": "Wie spät ist die Uhr?",
        "zh": "现在几点？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0609",
    "german": "um",
    "translation": "在…时",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Wir treffen uns um neun.",
        "zh": "我们九点见面。"
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
        "de": "Wir wollen umziehen.",
        "zh": "我们想搬家。"
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
      "因为"
    ],
    "distractorIds": [
      "a1-alpha-0002",
      "a1-alpha-0012",
      "a1-alpha-0154"
    ],
    "examples": [
      {
        "de": "Anna und Ben kommen.",
        "zh": "安娜和本来了。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Unser Haus ist groß.",
        "zh": "我们的房子很大。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0613",
    "german": "unten",
    "translation": "在下面",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Das Buch liegt unten.",
        "zh": "书在下面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0614",
    "german": "unter",
    "translation": "在…下面",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Der Ball ist unter dem Tisch.",
        "zh": "球在桌子下面。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0615",
    "german": "Unterricht",
    "translation": "课程",
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
        "de": "Der Unterricht beginnt um acht.",
        "zh": "课程在八点开始。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0616",
    "german": "unterschreiben",
    "translation": "签字",
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
        "de": "Ich unterschreibe das Formular.",
        "zh": "我在表格上签字。"
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
        "de": "Bitte geben Sie Ihre Unterschrift.",
        "zh": "请您签名。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Rauchen ist hier verboten.",
        "zh": "这里禁止吸烟。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Sie ist verheiratet.",
        "zh": "她已婚。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0630",
    "german": "viel",
    "translation": "很多",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Ich habe viel zu tun.",
        "zh": "我有很多事要做。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Vielleicht kommt er später.",
        "zh": "也许他稍后会来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0632",
    "german": "von",
    "translation": "属于",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Buch ist von Anna.",
        "zh": "这本书是安娜的。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0633",
    "german": "vor",
    "translation": "在…之前",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Wir treffen uns vor dem Kino.",
        "zh": "我们在电影院前见面。"
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
        "de": "Vorsicht, das Wasser ist heiß!",
        "zh": "小心，水很烫！"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0636",
    "german": "(sich) vorstellen",
    "translation": "自我介绍",
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
        "de": "Ich stelle mich vor.",
        "zh": "我自我介绍。"
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
        "de": "Wir wandern im Wald.",
        "zh": "我们在森林里徒步走。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wann beginnt der Film?",
        "zh": "电影什么时候开始？"
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
        "de": "Wir warten auf den Bus.",
        "zh": "我们在等公交。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Warum bist du müde?",
        "zh": "你为什么累？"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Was kostet das?",
        "zh": "这个多少钱？"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Was für ein Buch hast du?",
        "zh": "你有什么样的书？"
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
        "de": "Ich wasche mich.",
        "zh": "我洗澡。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0646",
    "german": "weh tun",
    "translation": "疼痛",
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
        "de": "Mein Rücken tut weh.",
        "zh": "我的背疼。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Sie ist weiblich.",
        "zh": "她是女性。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0649",
    "german": "weit",
    "translation": "遥远的",
    "kind": "adjective",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "老的旧的",
      "外国的",
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Der Bahnhof ist weit entfernt.",
        "zh": "火车站很远。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0650",
    "german": "weiter",
    "translation": "继续",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir gehen weiter.",
        "zh": "我们继续走。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Welcher Stift ist rot?",
        "zh": "哪支笔是红色的？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0652",
    "german": "Welt",
    "translation": "世界",
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
        "de": "Die Welt ist groß.",
        "zh": "世界很大。"
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
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Ich habe wenig Geld.",
        "zh": "我钱很少。"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Wer kommt?",
        "zh": "谁来？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0655",
    "german": "werden",
    "translation": "变成",
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
        "de": "Ich werde müde.",
        "zh": "我变得很累。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das ist wichtig.",
        "zh": "这很重要。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0658",
    "german": "wie",
    "translation": "怎样",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wie heißt du?",
        "zh": "你叫什么？"
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
        "de": "Ich wiederhole das Wort.",
        "zh": "我重复这个词。"
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
        "de": "Das Wiederhören war gut.",
        "zh": "再次通话很不错。"
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
        "de": "Das Wiedersehen war schön.",
        "zh": "再次见面很美好。"
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
      "关机",
      "大约",
      "等等"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-group-numbers-039"
    ],
    "examples": [
      {
        "de": "Wie viel kostet das?",
        "zh": "这个多少钱？"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Willkommen in Berlin!",
        "zh": "欢迎来柏林！"
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
      "你（宾格）",
      "你（与格）",
      "他"
    ],
    "distractorIds": [
      "a1-alpha-0156",
      "a1-alpha-0158",
      "a1-alpha-0197"
    ],
    "examples": [
      {
        "de": "Wir gehen nach Hause.",
        "zh": "我们回家。"
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
        "de": "Ich weiß die Antwort.",
        "zh": "我知道答案。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wo ist das Buch?",
        "zh": "书在哪里？"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Woher kommst du?",
        "zh": "你从哪里来？"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wohin gehst du?",
        "zh": "你去哪里？"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0672",
    "german": "wollen",
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
        "de": "Ich will ein Eis.",
        "zh": "我想要一个冰淇淋。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0673",
    "german": "Wort",
    "translation": "单词",
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
        "de": "Das Wort ist neu.",
        "zh": "这个词是新的。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Das Wetter ist wunderbar.",
        "zh": "天气好极了。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0676",
    "german": "Zeit",
    "translation": "时间（单数）",
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
        "de": "Die Zeit ist kurz.",
        "zh": "时间很短。"
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
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich lerne zurzeit Deutsch.",
        "zh": "我目前在学德语。"
      }
    ],
    "sourceEntryType": "derived"
  },
  {
    "id": "a1-alpha-0678",
    "german": "Zeitung",
    "translation": "报纸",
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
        "de": "Ich lese die Zeitung.",
        "zh": "我在读报纸。"
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
        "de": "Er raucht eine Zigarette.",
        "zh": "他抽一支香烟。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0682",
    "german": "zu",
    "translation": "向，去",
    "kind": "preposition",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Ich gehe zu dir.",
        "zh": "我去你那里。"
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
      "著名的"
    ],
    "distractorIds": [
      "a1-alpha-0013",
      "a1-alpha-0063",
      "a1-alpha-0097"
    ],
    "examples": [
      {
        "de": "Ich bin zufrieden.",
        "zh": "我很满意。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0685",
    "german": "zurück",
    "translation": "返回",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Ich komme zurück.",
        "zh": "我回来。"
      }
    ],
    "sourceEntryType": "main"
  },
  {
    "id": "a1-alpha-0686",
    "german": "zusammen",
    "translation": "一起",
    "kind": "adverb",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "独自",
      "也",
      "打开（状态）"
    ],
    "distractorIds": [
      "a1-alpha-0011",
      "a1-alpha-0048",
      "a1-alpha-0052"
    ],
    "examples": [
      {
        "de": "Wir arbeiten jeden Tag zusammen.",
        "zh": "我们每天一起工作。"
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
      "从……起",
      "在…旁",
      "在……上"
    ],
    "distractorIds": [
      "a1-alpha-0001",
      "a1-alpha-0015",
      "a1-alpha-0049"
    ],
    "examples": [
      {
        "de": "Das Buch liegt zwischen den Stühlen.",
        "zh": "书在椅子之间。"
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
        "de": "Ich habe eins gekauft.",
        "zh": "我买了一个。"
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
        "de": "Wir sind zwei Personen.",
        "zh": "我们是两个人。"
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
        "de": "Ich sehe drei Vögel.",
        "zh": "我看到三只鸟。"
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
        "de": "Sie hat vier Bücher.",
        "zh": "她有四本书。"
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
        "de": "Er kauft fünf Äpfel.",
        "zh": "他买了五个苹果。"
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
        "de": "Wir treffen uns um sechs Uhr.",
        "zh": "我们六点见面。"
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
        "de": "Der Zug kommt um sieben Uhr.",
        "zh": "火车七点到。"
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
        "de": "Ich habe acht Stühle.",
        "zh": "我有八把椅子。"
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
        "de": "Sie liest neun Seiten.",
        "zh": "她读了九页。"
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
        "de": "Wir zählen bis zehn.",
        "zh": "我们数到十。"
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
        "de": "Er ist elf Jahre alt.",
        "zh": "他十一岁。"
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
        "de": "Der Film dauert zwölf Minuten.",
        "zh": "电影十二分钟。"
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
        "de": "Der Zug fährt um dreizehn Uhr.",
        "zh": "火车在十三点开。"
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
        "de": "Sie hat vierzehn Karten.",
        "zh": "她有十四张卡片。"
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
        "de": "Ich habe fünfzehn Euro.",
        "zh": "我有十五欧元。"
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
        "de": "Ich habe sechzehn Äpfel.",
        "zh": "我有十六个苹果。"
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
        "de": "Wir brauchen siebzehn Stühle.",
        "zh": "我们需要十七把椅子。"
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
        "de": "Sie kauft achtzehn Bananen.",
        "zh": "她买了十八根香蕉。"
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
        "de": "Er hat neunzehn Bücher.",
        "zh": "他有十九本书。"
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
        "de": "Ich sehe zwanzig Vögel.",
        "zh": "我看到二十只鸟。"
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
        "de": "Wir haben einundzwanzig Gäste.",
        "zh": "我们有二十一位客人。"
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
        "de": "Sie zählt dreißig Karten.",
        "zh": "她数了三十张卡片。"
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
        "de": "Er malt vierzig Bilder.",
        "zh": "他画了四十幅画。"
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
        "de": "Ich bringe fünfzig Geschenke.",
        "zh": "我带来五十件礼物。"
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
        "de": "Sie sammelt sechzig Muscheln.",
        "zh": "她收集了六十只贝壳。"
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
        "de": "Wir sehen siebzig Sterne.",
        "zh": "我们看到七十颗星星。"
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
        "de": "Er hat achtzig Punkte.",
        "zh": "他得了八十分。"
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
        "de": "Ich lese neunzig Seiten.",
        "zh": "我读了九十页。"
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
        "de": "Sie hat hundert Euro.",
        "zh": "她有一百欧元。"
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
        "de": "Ich habe hunderteins Fragen.",
        "zh": "我有一百零一个问题。"
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
        "de": "Ich habe zweihundert Euro gespart.",
        "zh": "我已经存了两百欧元。"
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
        "de": "Wir haben tausend Karten verkauft.",
        "zh": "我们卖出了一千张票。"
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
        "de": "Sie hat eine Million Euro gewonnen.",
        "zh": "她赢得了一百万欧元。"
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
        "de": "Die Erde hat eine Milliarde Menschen.",
        "zh": "地球有十亿人。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-035",
    "german": "das/der/die erste",
    "translation": "第一",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Das ist die erste Frage.",
        "zh": "这是第一个问题。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-036",
    "german": "zweite",
    "translation": "第二",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Nimm die zweite Straße.",
        "zh": "请走第二条街。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-037",
    "german": "dritte",
    "translation": "第三",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Er sitzt in der dritten Reihe.",
        "zh": "他坐在第三排。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-numbers-038",
    "german": "vierte",
    "translation": "第四",
    "kind": "determiner",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "全部的；所有的",
      "其他的",
      "两个"
    ],
    "distractorIds": [
      "a1-alpha-0010",
      "a1-alpha-0018",
      "a1-alpha-0093"
    ],
    "examples": [
      {
        "de": "Wir treffen uns in der vierten Woche.",
        "zh": "我们在第四周见面。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Kaufe Äpfel, Birnen, Pflaumen usw.",
        "zh": "买苹果、梨、李子等等。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Ein halb ist mehr als ein Viertel.",
        "zh": "半个比四分之一多。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Ich habe ein Viertel Kuchen gegessen.",
        "zh": "我吃了四分之一块蛋糕。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-042",
    "german": "1999 = neunzehnhundertneunundneunzig",
    "translation": "1999 年",
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
        "de": "Ich wurde neunzehnhundertneunundneunzig geboren.",
        "zh": "我出生于1999年。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-043",
    "german": "2014 = zweitausendvierzehn",
    "translation": "2014 年",
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
        "de": "Das Spiel begann im Jahr zweitausendvierzehn.",
        "zh": "比赛在2014年开始。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Heute ist der 1. März.",
        "zh": "今天是3月1日。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-dates-045",
    "german": "Berlin",
    "translation": "柏林",
    "kind": "noun",
    "plural": "12. April 2002",
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
        "de": "Ich wohne in Berlin.",
        "zh": "我住在柏林。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Zug fährt um null Uhr drei ab.",
        "zh": "火车在零点零三分发车。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Zug fährt um sieben Uhr fünfzehn ab.",
        "zh": "火车在七点十五分发车。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Film beginnt um dreizehn Uhr siebzehn.",
        "zh": "电影在十三点十七分开始。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Supermarkt schließt um vierundzwanzig Uhr.",
        "zh": "超市在二十四点关门。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Kurs beginnt um ein Uhr.",
        "zh": "课程在一点开始。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-051",
    "german": "fünf Minuten vor/nach eins",
    "translation": "一点过五分",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Zug kommt fünf Minuten nach eins.",
        "zh": "火车在一点过五分到达。"
      }
    ],
    "sourceEntryType": "word-group-pattern"
  },
  {
    "id": "a1-group-clock-time-052",
    "german": "Viertel vor/nach zwei",
    "translation": "两点一刻",
    "kind": "phrase",
    "topic": "教育与学习",
    "topicIds": [
      "education"
    ],
    "distractors": [
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Film startet um Viertel nach zwei.",
        "zh": "电影在两点一刻开始。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Der Unterricht endet um halb drei.",
        "zh": "课程在两点半结束。"
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
        "de": "Eine Sekunde ist kurz.",
        "zh": "一秒很短。"
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
        "de": "Eine Minute reicht.",
        "zh": "一分钟足够。"
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
        "de": "Der Tag ist sonnig.",
        "zh": "这天是晴天。"
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
        "de": "Eine Woche hat sieben Tage.",
        "zh": "一周有七天。"
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
        "de": "Ein Jahr hat zwölf Monate.",
        "zh": "一年有十二个月。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-weekdays-060",
    "german": "Wochentag",
    "translation": "工作日",
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
        "de": "Ein Wochentag ist Montag.",
        "zh": "工作日是星期一。"
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
        "de": "Der Sonntag ist frei.",
        "zh": "星期日是休息日。"
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
        "de": "Der Montag ist der erste Tag.",
        "zh": "星期一是一周的第一天。"
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
        "de": "Der Dienstag folgt dem Montag.",
        "zh": "星期二紧跟在星期一之后。"
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
        "de": "Am Mittwoch habe ich Deutschunterricht.",
        "zh": "我在星期三有德语课。"
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
        "de": "Am Donnerstag kommt meine Tante.",
        "zh": "我的姑妈星期四来。"
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
        "de": "Am Freitag essen wir Pizza.",
        "zh": "我们星期五吃披萨。"
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
        "de": "Am Samstag gehen wir ins Kino.",
        "zh": "我们星期六去电影院。"
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
        "de": "Am Wochenende fahre ich nach Berlin.",
        "zh": "我在周末去柏林。"
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
      "关机",
      "大约",
      "多少"
    ],
    "distractorIds": [
      "a1-alpha-0067",
      "a1-alpha-0142",
      "a1-alpha-0662"
    ],
    "examples": [
      {
        "de": "Wir treffen uns am Wochenende.",
        "zh": "我们在周末见面。"
      }
    ],
    "sourceEntryType": "word-group-member"
  },
  {
    "id": "a1-group-times-of-day-070",
    "german": "Tag",
    "translation": "一天",
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
        "de": "Heute ist ein schöner Tag.",
        "zh": "今天是美好的一天。"
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
        "de": "Der Morgen ist kühl.",
        "zh": "早晨很凉爽。"
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
        "de": "Am Vormittag lese ich.",
        "zh": "我在上午阅读。"
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
        "de": "Mittag essen wir zusammen.",
        "zh": "中午我们一起吃饭。"
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
        "de": "Am Nachmittag spiele ich Fußball.",
        "zh": "下午我踢足球。"
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
        "de": "Am Abend sehe ich fern.",
        "zh": "晚上我看电视。"
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
        "de": "In der Nacht schlafe ich gut.",
        "zh": "夜晚我睡得好。"
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
        "de": "Im Januar schneit es.",
        "zh": "一月下雪。"
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
        "de": "Im Februar ist es kalt.",
        "zh": "二月很冷。"
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
        "de": "Im März blühen die Blumen.",
        "zh": "三月花开。"
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
        "de": "Im April blühen die Bäume.",
        "zh": "四月树木开花。"
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
        "de": "Im Mai feiern wir den Muttertag.",
        "zh": "五月我们庆祝母亲节。"
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
        "de": "Im Juni ist das Wetter warm.",
        "zh": "六月天气很暖。"
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
        "de": "Im Juli gehen wir schwimmen.",
        "zh": "七月我们去游泳。"
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
        "de": "Im August gibt es viele Ferien.",
        "zh": "八月有很多假期。"
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
        "de": "Im September fällt das Laub.",
        "zh": "九月树叶落下。"
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
        "de": "Im Oktober wird es kühler.",
        "zh": "十月天气变凉。"
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
        "de": "Im November regnet es oft.",
        "zh": "十一月经常下雨。"
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
        "de": "Im Dezember schneit es.",
        "zh": "十二月下雪。"
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
  "other": "词汇与表达"
} as const;

export type { Word } from "../types.ts";
