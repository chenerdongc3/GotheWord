import type { A1LearningEntry } from "./types.ts";

// Chinese senses use the frozen editorial reference in manifest.ts plus the
// reviewed POR-9 supplements. Examples are GotheWord-authored and do not copy
// the Goethe source PDF example sentences.
export const A1_LEARNING_CONTENT_ZH: readonly A1LearningEntry[] = [
  {
    entryId: "tisch",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "桌子"
      }
    ],
    examples: [
      {
        de: "Der Tisch ist aus Holz.",
        zh: "这张桌子是木制的。"
      },
      {
        de: "Das Buch liegt auf dem Tisch.",
        zh: "书放在桌子上。"
      },
      {
        de: "Wir sitzen am Tisch.",
        zh: "我们坐在桌边。"
      }
    ],
    teachingOrder: 1,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "stuhl",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "椅子"
      }
    ],
    examples: [
      {
        de: "Der Stuhl ist bequem.",
        zh: "这把椅子很舒服。"
      },
      {
        de: "Bitte nimm einen Stuhl.",
        zh: "请拿一把椅子。"
      },
      {
        de: "Die Katze sitzt auf dem Stuhl.",
        zh: "猫坐在椅子上。"
      }
    ],
    teachingOrder: 2,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "fenster",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "窗户"
      }
    ],
    examples: [
      {
        de: "Das Fenster ist offen.",
        zh: "窗户开着。"
      },
      {
        de: "Ich sehe durch das Fenster.",
        zh: "我透过窗户看。"
      },
      {
        de: "Mach bitte das Fenster zu.",
        zh: "请把窗户关上。"
      }
    ],
    teachingOrder: 3,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "tuer",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "门"
      }
    ],
    examples: [
      {
        de: "Die Tür ist geschlossen.",
        zh: "门关着。"
      },
      {
        de: "Jemand steht vor der Tür.",
        zh: "有人站在门前。"
      },
      {
        de: "Öffne bitte die Tür.",
        zh: "请把门打开。"
      }
    ],
    teachingOrder: 4,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "kueche",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "厨房"
      }
    ],
    examples: [
      {
        de: "Die Küche ist klein.",
        zh: "厨房很小。"
      },
      {
        de: "Wir kochen in der Küche.",
        zh: "我们在厨房做饭。"
      },
      {
        de: "In der Küche riecht es gut.",
        zh: "厨房里闻起来很香。"
      }
    ],
    teachingOrder: 5,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "brot",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "面包"
      }
    ],
    examples: [
      {
        de: "Das Brot ist frisch.",
        zh: "面包很新鲜。"
      },
      {
        de: "Ich esse Brot zum Frühstück.",
        zh: "我早餐吃面包。"
      },
      {
        de: "Wir kaufen ein Brot.",
        zh: "我们买一个面包。"
      }
    ],
    teachingOrder: 6,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "apfel",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "苹果"
      }
    ],
    examples: [
      {
        de: "Der Apfel ist rot.",
        zh: "苹果是红色的。"
      },
      {
        de: "Sie isst einen Apfel.",
        zh: "她吃一个苹果。"
      },
      {
        de: "Äpfel sind gesund.",
        zh: "苹果很健康。"
      }
    ],
    teachingOrder: 7,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "wasser",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "水"
      }
    ],
    examples: [
      {
        de: "Das Wasser ist kalt.",
        zh: "水是凉的。"
      },
      {
        de: "Ich trinke viel Wasser.",
        zh: "我喝很多水。"
      },
      {
        de: "Ein Glas Wasser, bitte.",
        zh: "请给我一杯水。"
      }
    ],
    teachingOrder: 8,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "kaffee",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "咖啡"
      }
    ],
    examples: [
      {
        de: "Der Kaffee ist heiß.",
        zh: "咖啡很烫。"
      },
      {
        de: "Möchtest du einen Kaffee?",
        zh: "你想喝杯咖啡吗？"
      },
      {
        de: "Ich trinke Kaffee ohne Zucker.",
        zh: "我喝不加糖的咖啡。"
      }
    ],
    teachingOrder: 9,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "familie",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家庭"
      }
    ],
    examples: [
      {
        de: "Meine Familie lebt in Berlin.",
        zh: "我的家人住在柏林。"
      },
      {
        de: "Die Familie isst zusammen.",
        zh: "这家人一起吃饭。"
      },
      {
        de: "Wir besuchen unsere Familie.",
        zh: "我们去看望家人。"
      }
    ],
    teachingOrder: 10,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "freund",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "朋友（男）"
      }
    ],
    examples: [
      {
        de: "Paul ist mein Freund.",
        zh: "保罗是我的朋友。"
      },
      {
        de: "Ich treffe einen Freund.",
        zh: "我要见一位朋友。"
      },
      {
        de: "Gute Freunde helfen einander.",
        zh: "好朋友互相帮助。"
      }
    ],
    teachingOrder: 11,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "schule",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "学校"
      }
    ],
    examples: [
      {
        de: "Die Schule beginnt um acht.",
        zh: "学校八点开始上课。"
      },
      {
        de: "Mein Sohn geht zur Schule.",
        zh: "我的儿子去上学。"
      },
      {
        de: "Die Schule ist heute geschlossen.",
        zh: "学校今天关门。"
      }
    ],
    teachingOrder: 12,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "buch",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "书"
      }
    ],
    examples: [
      {
        de: "Das Buch ist interessant.",
        zh: "这本书很有趣。"
      },
      {
        de: "Ich lese ein deutsches Buch.",
        zh: "我读一本德语书。"
      },
      {
        de: "Das Buch liegt im Regal.",
        zh: "书放在书架上。"
      }
    ],
    teachingOrder: 13,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "stadt",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "城市"
      }
    ],
    examples: [
      {
        de: "Die Stadt ist sehr alt.",
        zh: "这座城市很古老。"
      },
      {
        de: "Wir fahren in die Stadt.",
        zh: "我们开车进城。"
      },
      {
        de: "In der Stadt gibt es viel zu sehen.",
        zh: "城里有很多可看的。"
      }
    ],
    teachingOrder: 14,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "bahnhof",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "火车站"
      }
    ],
    examples: [
      {
        de: "Der Bahnhof ist nicht weit.",
        zh: "火车站不远。"
      },
      {
        de: "Wir treffen uns am Bahnhof.",
        zh: "我们在火车站见面。"
      },
      {
        de: "Der Zug wartet im Bahnhof.",
        zh: "火车在车站等候。"
      }
    ],
    teachingOrder: 15,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "lernen",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "学习"
      }
    ],
    examples: [
      {
        de: "Ich lerne Deutsch.",
        zh: "我学习德语。"
      },
      {
        de: "Wir lernen zusammen.",
        zh: "我们一起学习。"
      },
      {
        de: "Er lernt jeden Abend.",
        zh: "他每天晚上学习。"
      }
    ],
    teachingOrder: 16,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "arbeiten",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "工作"
      }
    ],
    examples: [
      {
        de: "Ich arbeite in Hamburg.",
        zh: "我在汉堡工作。"
      },
      {
        de: "Sie arbeitet heute zu Hause.",
        zh: "她今天在家工作。"
      },
      {
        de: "Wir arbeiten bis fünf Uhr.",
        zh: "我们工作到五点。"
      }
    ],
    teachingOrder: 17,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "wohnen",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "居住"
      }
    ],
    examples: [
      {
        de: "Ich wohne in München.",
        zh: "我住在慕尼黑。"
      },
      {
        de: "Wo wohnst du?",
        zh: "你住在哪里？"
      },
      {
        de: "Meine Eltern wohnen auf dem Land.",
        zh: "我的父母住在乡下。"
      }
    ],
    teachingOrder: 18,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "essen",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "吃"
      }
    ],
    examples: [
      {
        de: "Wir essen um sieben Uhr.",
        zh: "我们七点吃饭。"
      },
      {
        de: "Er isst gern Gemüse.",
        zh: "他喜欢吃蔬菜。"
      },
      {
        de: "Was möchtest du essen?",
        zh: "你想吃什么？"
      }
    ],
    teachingOrder: 19,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "trinken",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "喝"
      }
    ],
    examples: [
      {
        de: "Ich trinke Tee.",
        zh: "我喝茶。"
      },
      {
        de: "Trinkst du genug Wasser?",
        zh: "你喝足够的水吗？"
      },
      {
        de: "Wir trinken zusammen Kaffee.",
        zh: "我们一起喝咖啡。"
      }
    ],
    teachingOrder: 20,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "gehen",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "走；去"
      }
    ],
    examples: [
      {
        de: "Ich gehe nach Hause.",
        zh: "我回家。"
      },
      {
        de: "Wir gehen zu Fuß.",
        zh: "我们步行去。"
      },
      {
        de: "Gehst du heute zur Arbeit?",
        zh: "你今天去上班吗？"
      }
    ],
    teachingOrder: 21,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "fahren",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "乘车；驾驶"
      }
    ],
    examples: [
      {
        de: "Ich fahre mit dem Bus.",
        zh: "我乘公交车。"
      },
      {
        de: "Sie fährt gern Fahrrad.",
        zh: "她喜欢骑自行车。"
      },
      {
        de: "Wir fahren morgen nach Köln.",
        zh: "我们明天去科隆。"
      }
    ],
    teachingOrder: 22,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "sprechen",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "说；交谈"
      }
    ],
    examples: [
      {
        de: "Sprechen Sie Deutsch?",
        zh: "您会说德语吗？"
      },
      {
        de: "Wir sprechen über die Reise.",
        zh: "我们谈论这次旅行。"
      },
      {
        de: "Bitte sprich langsam.",
        zh: "请说慢一点。"
      }
    ],
    teachingOrder: 23,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "verstehen",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "理解；听懂"
      }
    ],
    examples: [
      {
        de: "Ich verstehe die Frage.",
        zh: "我理解这个问题。"
      },
      {
        de: "Verstehst du mich?",
        zh: "你听懂我了吗？"
      },
      {
        de: "Er versteht nur ein bisschen Deutsch.",
        zh: "他只懂一点德语。"
      }
    ],
    teachingOrder: 24,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0046",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "手臂"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Arm.",
        zh: "今天我们谈论手臂。"
      }
    ],
    teachingOrder: 25,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0077",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "浴室"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Bad.",
        zh: "今天我们谈论浴室。"
      }
    ],
    teachingOrder: 26,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0084",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "香蕉"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Banane.",
        zh: "今天我们谈论香蕉。"
      }
    ],
    teachingOrder: 27,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0003",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出发，启程"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute abfahren.",
        zh: "我们今天想出发，启程。"
      }
    ],
    teachingOrder: 28,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0001",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "从 … 起"
      }
    ],
    examples: [
      {
        de: "Das Wort „ab“ bedeutet hier „从 … 起“.",
        zh: "“ab”在这里表示“从 … 起”。"
      }
    ],
    teachingOrder: 29,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0043",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "工作"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Arbeit.",
        zh: "今天我们谈论工作。"
      }
    ],
    teachingOrder: 30,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0017",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "特价商品"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Angebot.",
        zh: "今天我们谈论特价商品。"
      }
    ],
    teachingOrder: 31,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0009",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "地址"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Adresse.",
        zh: "今天我们谈论地址。"
      }
    ],
    teachingOrder: 32,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0088",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "树"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Baum.",
        zh: "今天我们谈论树。"
      }
    ],
    teachingOrder: 33,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0095",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "例子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Beispiel.",
        zh: "今天我们谈论例子。"
      }
    ],
    teachingOrder: 34,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0047",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男医生"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Arzt.",
        zh: "今天我们谈论男医生。"
      }
    ],
    teachingOrder: 35,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0078",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "洗澡"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute baden.",
        zh: "我们今天想洗澡。"
      }
    ],
    teachingOrder: 36,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0110",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "啤酒（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Bier.",
        zh: "今天我们谈论啤酒（单数形式）。"
      }
    ],
    teachingOrder: 37,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0004",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出发，启程"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Abfahrt.",
        zh: "今天我们谈论出发，启程。"
      }
    ],
    teachingOrder: 38,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0002",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "可是"
      }
    ],
    examples: [
      {
        de: "Das Wort „aber“ bedeutet hier „可是“.",
        zh: "“aber”在这里表示“可是”。"
      }
    ],
    teachingOrder: 39,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0044",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "失业的"
      }
    ],
    examples: [
      {
        de: "Das Wort „arbeitslos“ bedeutet hier „失业的“.",
        zh: "“arbeitslos”在这里表示“失业的”。"
      }
    ],
    teachingOrder: 40,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0106",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "点"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bestellen.",
        zh: "我们今天想点。"
      }
    ],
    teachingOrder: 41,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0060",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "信息；问讯"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Auskunft.",
        zh: "今天我们谈论信息；问讯。"
      }
    ],
    teachingOrder: 42,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0123",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "花朵"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Blume.",
        zh: "今天我们谈论花朵。"
      }
    ],
    teachingOrder: 43,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0096",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "例如"
      }
    ],
    examples: [
      {
        de: "Das Wort „zum Beispiel/z. B.“ bedeutet hier „例如“.",
        zh: "“zum Beispiel/z. B.”在这里表示“例如”。"
      }
    ],
    teachingOrder: 44,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0055",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "眼睛"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Auge.",
        zh: "今天我们谈论眼睛。"
      }
    ],
    teachingOrder: 45,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0083",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "阳台"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Balkon.",
        zh: "今天我们谈论阳台。"
      }
    ],
    teachingOrder: 46,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0113",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "梨子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Birne.",
        zh: "今天我们谈论梨子。"
      }
    ],
    teachingOrder: 47,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0023",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "抵达"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Ankunft.",
        zh: "今天我们谈论抵达。"
      }
    ],
    teachingOrder: 48,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0005",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "交出；递交"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute abgeben.",
        zh: "我们今天想交出；递交。"
      }
    ],
    teachingOrder: 49,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0045",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "工作场所"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Arbeitsplatz.",
        zh: "今天我们谈论工作场所。"
      }
    ],
    teachingOrder: 50,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0109",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "付款"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bezahlen.",
        zh: "我们今天想付款。"
      }
    ],
    teachingOrder: 51,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0085",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "银行"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Bank.",
        zh: "今天我们谈论银行。"
      }
    ],
    teachingOrder: 52,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0286",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "摄氏度"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Grad (Celsius).",
        zh: "今天我们谈论摄氏度。"
      }
    ],
    teachingOrder: 53,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0159",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "迪斯科舞厅"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Disco.",
        zh: "今天我们谈论迪斯科舞厅。"
      }
    ],
    teachingOrder: 54,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0094",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "腿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Bein.",
        zh: "今天我们谈论腿。"
      }
    ],
    teachingOrder: 55,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0108",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "床"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Bett.",
        zh: "今天我们谈论床。"
      }
    ],
    teachingOrder: 56,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0136",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "拼写"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute buchstabieren.",
        zh: "我们今天想拼写。"
      }
    ],
    teachingOrder: 57,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0054",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电梯"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Aufzug.",
        zh: "今天我们谈论电梯。"
      }
    ],
    teachingOrder: 58,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0006",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "接（人）"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute abholen.",
        zh: "我们今天想接（人）。"
      }
    ],
    teachingOrder: 59,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0089",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "公务员"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Beamte.",
        zh: "今天我们谈论公务员。"
      }
    ],
    teachingOrder: 60,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0182",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "购物，采购"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute einkaufen.",
        zh: "我们今天想购物，采购。"
      }
    ],
    teachingOrder: 61,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0128",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "信件"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Brief.",
        zh: "今天我们谈论信件。"
      }
    ],
    teachingOrder: 62,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0424",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "海，海洋"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Meer.",
        zh: "今天我们谈论海，海洋。"
      }
    ],
    teachingOrder: 63,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0217",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "庆祝；节日相关"
      }
    ],
    examples: [
      {
        de: "Das Wort „Feier-“ bedeutet hier „庆祝；节日相关“.",
        zh: "“Feier-”在这里表示“庆祝；节日相关”。"
      }
    ],
    teachingOrder: 64,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0133",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "兄弟"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Bruder.",
        zh: "今天我们谈论兄弟。"
      }
    ],
    teachingOrder: 65,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0253",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "花园"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Garten.",
        zh: "今天我们谈论花园。"
      }
    ],
    teachingOrder: 66,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0138",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "黄油（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Butter.",
        zh: "今天我们谈论黄油（单数形式）。"
      }
    ],
    teachingOrder: 67,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0057",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "郊游"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Ausflug.",
        zh: "今天我们谈论郊游。"
      }
    ],
    teachingOrder: 68,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0007",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "寄件人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Absender.",
        zh: "今天我们谈论寄件人。"
      }
    ],
    teachingOrder: 69,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0101",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "职业"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Beruf.",
        zh: "今天我们谈论职业。"
      }
    ],
    teachingOrder: 70,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0183",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "邀请"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute einladen.",
        zh: "我们今天想邀请。"
      }
    ],
    teachingOrder: 71,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0129",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "邮票"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Briefmarke.",
        zh: "今天我们谈论邮票。"
      }
    ],
    teachingOrder: 72,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0499",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "雨"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Regen.",
        zh: "今天我们谈论雨。"
      }
    ],
    teachingOrder: 73,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0218",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "庆祝"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute feiern.",
        zh: "我们今天想庆祝。"
      }
    ],
    teachingOrder: 74,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0175",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "妻子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Ehefrau.",
        zh: "今天我们谈论妻子。"
      }
    ],
    teachingOrder: 75,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0309",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "房子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Haus.",
        zh: "今天我们谈论房子。"
      }
    ],
    teachingOrder: 76,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0171",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "口渴（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Durst.",
        zh: "今天我们谈论口渴（单数形式）。"
      }
    ],
    teachingOrder: 77,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0071",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "汽车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Auto.",
        zh: "今天我们谈论汽车。"
      }
    ],
    teachingOrder: 78,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0008",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "注意"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Achtung.",
        zh: "今天我们谈论注意。"
      }
    ],
    teachingOrder: 79,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0141",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男性老板"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Chef.",
        zh: "今天我们谈论男性老板。"
      }
    ],
    teachingOrder: 80,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0264",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "金钱（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Geld.",
        zh: "今天我们谈论金钱（单数形式）。"
      }
    ],
    teachingOrder: 81,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0216",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "传真"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Fax.",
        zh: "今天我们谈论传真。"
      }
    ],
    teachingOrder: 82,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0542",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "湖泊"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den See.",
        zh: "今天我们谈论湖泊。"
      }
    ],
    teachingOrder: 83,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0221",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "看电视"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute fernsehen.",
        zh: "我们今天想看电视。"
      }
    ],
    teachingOrder: 84,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0176",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "丈夫"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Ehemann.",
        zh: "今天我们谈论丈夫。"
      }
    ],
    teachingOrder: 85,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0310",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家庭作业"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Hausaufgabe.",
        zh: "今天我们谈论家庭作业。"
      }
    ],
    teachingOrder: 86,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0205",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "吃"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Essen.",
        zh: "今天我们谈论吃。"
      }
    ],
    teachingOrder: 87,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0072",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "高速公路"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Autobahn.",
        zh: "今天我们谈论高速公路。"
      }
    ],
    teachingOrder: 88,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0010",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "全部的；所有的"
      }
    ],
    examples: [
      {
        de: "Das Wort „all-“ bedeutet hier „全部的；所有的“.",
        zh: "“all-”在这里表示“全部的；所有的”。"
      }
    ],
    teachingOrder: 89,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0368",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男同事"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kollege.",
        zh: "今天我们谈论男同事。"
      }
    ],
    teachingOrder: 90,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0270",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "商店"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Geschäft.",
        zh: "今天我们谈论商店。"
      }
    ],
    teachingOrder: 91,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0371",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "银行账户"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Konto.",
        zh: "今天我们谈论银行账户。"
      }
    ],
    teachingOrder: 92,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0562",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "太阳，阳光"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Sonne.",
        zh: "今天我们谈论太阳，阳光。"
      }
    ],
    teachingOrder: 93,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0237",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "照片"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Foto.",
        zh: "今天我们谈论照片。"
      }
    ],
    teachingOrder: 94,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0189",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "父母"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Eltern (pl.).",
        zh: "今天我们谈论父母。"
      }
    ],
    teachingOrder: 95,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0311",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家庭主妇"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Hausfrau.",
        zh: "今天我们谈论家庭主妇。"
      }
    ],
    teachingOrder: 96,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0230",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "肉类（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Fleisch.",
        zh: "今天我们谈论肉类（单数形式）。"
      }
    ],
    teachingOrder: 97,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0073",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "自动售货机；自动机器"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Automat.",
        zh: "今天我们谈论自动售货机；自动机器。"
      }
    ],
    teachingOrder: 98,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0011",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "独自"
      }
    ],
    examples: [
      {
        de: "Das Wort „allein“ bedeutet hier „独自“.",
        zh: "“allein”在这里表示“独自”。"
      }
    ],
    teachingOrder: 99,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0486",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "实习"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Praktikum.",
        zh: "今天我们谈论实习。"
      }
    ],
    teachingOrder: 100,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0350",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "菜单"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Karte.",
        zh: "今天我们谈论菜单。"
      }
    ],
    teachingOrder: 101,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0482",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "警察"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Polizei.",
        zh: "今天我们谈论警察。"
      }
    ],
    teachingOrder: 102,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0656",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "天气（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Wetter.",
        zh: "今天我们谈论天气（单数形式）。"
      }
    ],
    teachingOrder: 103,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0242",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "空闲时间，业余时间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Freizeit.",
        zh: "今天我们谈论空闲时间，业余时间。"
      }
    ],
    teachingOrder: 104,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0213",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "姓"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Familienname.",
        zh: "今天我们谈论姓。"
      }
    ],
    teachingOrder: 105,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0312",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家庭主夫"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Hausmann.",
        zh: "今天我们谈论家庭主夫。"
      }
    ],
    teachingOrder: 106,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0247",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "吃早饭"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute frühstücken.",
        zh: "我们今天想吃早饭。"
      }
    ],
    teachingOrder: 107,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0074",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "自动的"
      }
    ],
    examples: [
      {
        de: "Das Wort „automatisch“ bedeutet hier „自动的“.",
        zh: "“automatisch”在这里表示“自动的”。"
      }
    ],
    teachingOrder: 108,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0012",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "也就是说，可见"
      }
    ],
    examples: [
      {
        de: "Das Wort „also“ bedeutet hier „也就是说，可见“.",
        zh: "“also”在这里表示“也就是说，可见”。"
      }
    ],
    teachingOrder: 109,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0621",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "挣得，赚得"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute verdienen.",
        zh: "我们今天想挣得，赚得。"
      }
    ],
    teachingOrder: 110,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0351",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "（信用）卡"
      }
    ],
    examples: [
      {
        de: "Das Wort „(Kredit)-Karte“ bedeutet hier „（信用）卡“.",
        zh: "“(Kredit)-Karte”在这里表示“（信用）卡”。"
      }
    ],
    teachingOrder: 111,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0484",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "邮局（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Post.",
        zh: "今天我们谈论邮局（单数形式）。"
      }
    ],
    teachingOrder: 112,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0664",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "风"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Wind.",
        zh: "今天我们谈论风。"
      }
    ],
    teachingOrder: 113,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0252",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "足球"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Fußball.",
        zh: "今天我们谈论足球。"
      }
    ],
    teachingOrder: 114,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0214",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家庭情况（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Familienstand.",
        zh: "今天我们谈论家庭情况（单数形式）。"
      }
    ],
    teachingOrder: 115,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0359",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "幼儿园"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kindergarten.",
        zh: "今天我们谈论幼儿园。"
      }
    ],
    teachingOrder: 116,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0248",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "早饭（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Frühstück.",
        zh: "今天我们谈论早饭（单数形式）。"
      }
    ],
    teachingOrder: 117,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0079",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "铁路；火车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Bahn.",
        zh: "今天我们谈论铁路；火车。"
      }
    ],
    teachingOrder: 118,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0013",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "老的旧的"
      }
    ],
    examples: [
      {
        de: "Das Wort „alt“ bedeutet hier „老的旧的“.",
        zh: "“alt”在这里表示“老的旧的”。"
      }
    ],
    teachingOrder: 119,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0625",
    topicIds: [
      "work"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男售货员"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Verkäufer.",
        zh: "今天我们谈论男售货员。"
      }
    ],
    teachingOrder: 120,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0354",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "购买"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kaufen.",
        zh: "我们今天想购买。"
      }
    ],
    teachingOrder: 121,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0485",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "邮政编码"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Postleitzahl.",
        zh: "今天我们谈论邮政编码。"
      }
    ],
    teachingOrder: 122,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-seasons-089",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "春天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Frühling/das Frühjahr.",
        zh: "今天我们谈论春天。"
      }
    ],
    teachingOrder: 123,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0360",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电影院"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Kino.",
        zh: "今天我们谈论电影院。"
      }
    ],
    teachingOrder: 124,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0240",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "女人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Frau.",
        zh: "今天我们谈论女人。"
      }
    ],
    teachingOrder: 125,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0406",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "灯；光"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Licht.",
        zh: "今天我们谈论灯；光。"
      }
    ],
    teachingOrder: 126,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0332",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "饥饿（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Hunger.",
        zh: "今天我们谈论饥饿（单数形式）。"
      }
    ],
    teachingOrder: 127,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0081",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "站台"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Bahnsteig.",
        zh: "今天我们谈论站台。"
      }
    ],
    teachingOrder: 128,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0014",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "年龄"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Alter.",
        zh: "今天我们谈论年龄。"
      }
    ],
    teachingOrder: 129,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0364",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "衣物"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Kleidung.",
        zh: "今天我们谈论衣物。"
      }
    ],
    teachingOrder: 130,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0506",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "修理"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Reparatur.",
        zh: "今天我们谈论修理。"
      }
    ],
    teachingOrder: 131,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-seasons-090",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "夏天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Sommer.",
        zh: "今天我们谈论夏天。"
      }
    ],
    teachingOrder: 132,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0411",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "歌曲"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Lied.",
        zh: "今天我们谈论歌曲。"
      }
    ],
    teachingOrder: 133,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0257",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出生年份"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Geburtsjahr.",
        zh: "今天我们谈论出生年份。"
      }
    ],
    teachingOrder: 134,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0429",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "租用"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute mieten.",
        zh: "我们今天想租用。"
      }
    ],
    teachingOrder: 135,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0431",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "牛奶（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Milch.",
        zh: "今天我们谈论牛奶（单数形式）。"
      }
    ],
    teachingOrder: 136,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0137",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "公车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Bus.",
        zh: "今天我们谈论公车。"
      }
    ],
    teachingOrder: 137,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0015",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在……旁；向"
      }
    ],
    examples: [
      {
        de: "Das Wort „an“ bedeutet hier „在……旁；向“.",
        zh: "“an”在这里表示“在……旁；向”。"
      }
    ],
    teachingOrder: 138,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0386",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "店铺"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Laden.",
        zh: "今天我们谈论店铺。"
      }
    ],
    teachingOrder: 139,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0518",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "柜台；开关"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schalter.",
        zh: "今天我们谈论柜台；开关。"
      }
    ],
    teachingOrder: 140,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-seasons-091",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "秋天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Herbst.",
        zh: "今天我们谈论秋天。"
      }
    ],
    teachingOrder: 141,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0477",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "派对"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Party.",
        zh: "今天我们谈论派对。"
      }
    ],
    teachingOrder: 142,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0258",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出生地"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Geburtsort.",
        zh: "今天我们谈论出生地。"
      }
    ],
    teachingOrder: 143,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0430",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "房租"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Miete.",
        zh: "今天我们谈论房租。"
      }
    ],
    teachingOrder: 144,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0462",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "水果（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Obst.",
        zh: "今天我们谈论水果（单数形式）。"
      }
    ],
    teachingOrder: 145,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0161",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "双人客房"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Doppelzimmer.",
        zh: "今天我们谈论双人客房。"
      }
    ],
    teachingOrder: 146,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0016",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "提供，给予"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute anbieten.",
        zh: "我们今天想提供，给予。"
      }
    ],
    teachingOrder: 147,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0535",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "鞋子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schuh.",
        zh: "今天我们谈论鞋子。"
      }
    ],
    teachingOrder: 148,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0587",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "打电话"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute telefonieren.",
        zh: "我们今天想打电话。"
      }
    ],
    teachingOrder: 149,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-seasons-092",
    topicIds: [
      "environment"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "冬天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Winter.",
        zh: "今天我们谈论冬天。"
      }
    ],
    teachingOrder: 150,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0540",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "游泳"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute schwimmen.",
        zh: "我们今天想游泳。"
      }
    ],
    teachingOrder: 151,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0259",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "生日"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Geburtstag.",
        zh: "今天我们谈论生日。"
      }
    ],
    teachingOrder: 152,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0438",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家具"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Möbel (pl.).",
        zh: "今天我们谈论家具。"
      }
    ],
    teachingOrder: 153,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0468",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "油"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Öl.",
        zh: "今天我们谈论油。"
      }
    ],
    teachingOrder: 154,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0188",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "单人客房"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Einzelzimmer.",
        zh: "今天我们谈论单人客房。"
      }
    ],
    teachingOrder: 155,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0018",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "其它"
      }
    ],
    examples: [
      {
        de: "Das Wort „ander-“ bedeutet hier „其它“.",
        zh: "“ander-”在这里表示“其它”。"
      }
    ],
    teachingOrder: 156,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0565",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "菜单"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Speisekarte.",
        zh: "今天我们谈论菜单。"
      }
    ],
    teachingOrder: 157,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0588",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电话电话"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Telefon.",
        zh: "今天我们谈论电话电话。"
      }
    ],
    teachingOrder: 158,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0566",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "玩，打，踢上映，放映"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute spielen.",
        zh: "我们今天想玩，打，踢上映，放映。"
      }
    ],
    teachingOrder: 159,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0291",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "祖父母；外祖父母"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Großeltern (pl.).",
        zh: "今天我们谈论祖父母；外祖父母。"
      }
    ],
    teachingOrder: 160,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0528",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "钥匙"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schlüssel.",
        zh: "今天我们谈论钥匙。"
      }
    ],
    teachingOrder: 161,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0488",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "价格"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Preis.",
        zh: "今天我们谈论价格。"
      }
    ],
    teachingOrder: 162,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0208",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "司机"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Fahrer.",
        zh: "今天我们谈论司机。"
      }
    ],
    teachingOrder: 163,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0019",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开始"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute anfangen.",
        zh: "我们今天想开始。"
      }
    ],
    teachingOrder: 164,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0583",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "包"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Tasche.",
        zh: "今天我们谈论包。"
      }
    ],
    teachingOrder: 165,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0637",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电话区号"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Vorwahl.",
        zh: "今天我们谈论电话区号。"
      }
    ],
    teachingOrder: 166,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0567",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "体育（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Sport.",
        zh: "今天我们谈论体育（单数形式）。"
      }
    ],
    teachingOrder: 167,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0292",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "祖母，外祖母"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Großmutter.",
        zh: "今天我们谈论祖母，外祖母。"
      }
    ],
    teachingOrder: 168,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0541",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "游泳池"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Schwimmbad.",
        zh: "今天我们谈论游泳池。"
      }
    ],
    teachingOrder: 169,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0500",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "米饭（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Reis.",
        zh: "今天我们谈论米饭（单数形式）。"
      }
    ],
    teachingOrder: 170,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0209",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "车票"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Fahrkarte.",
        zh: "今天我们谈论车票。"
      }
    ],
    teachingOrder: 171,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0020",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开端，开始"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Anfang.",
        zh: "今天我们谈论开端，开始。"
      }
    ],
    teachingOrder: 172,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0624",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出售"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute verkaufen.",
        zh: "我们今天想出售。"
      }
    ],
    teachingOrder: 173,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0681",
    topicIds: [
      "services"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "海关"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Zoll.",
        zh: "今天我们谈论海关。"
      }
    ],
    teachingOrder: 174,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0582",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "舞蹈，跳舞"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute tanzen.",
        zh: "我们今天想舞蹈，跳舞。"
      }
    ],
    teachingOrder: 175,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0293",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "祖父，外祖父"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Großvater.",
        zh: "今天我们谈论祖父，外祖父。"
      }
    ],
    teachingOrder: 176,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0558",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "沙发"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Sofa.",
        zh: "今天我们谈论沙发。"
      }
    ],
    teachingOrder: 177,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0507",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "饭馆"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Restaurant.",
        zh: "今天我们谈论饭馆。"
      }
    ],
    teachingOrder: 178,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0210",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "自行车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Fahrrad.",
        zh: "今天我们谈论自行车。"
      }
    ],
    teachingOrder: 179,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0021",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "点击"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute anklicken.",
        zh: "我们今天想点击。"
      }
    ],
    teachingOrder: 180,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0675",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "付款，支付"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute zahlen.",
        zh: "我们今天想付款，支付。"
      }
    ],
    teachingOrder: 181,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0622",
    topicIds: [
      "leisure"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "协会；俱乐部"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Verein.",
        zh: "今天我们谈论协会；俱乐部。"
      }
    ],
    teachingOrder: 182,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0299",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "头发"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Haar.",
        zh: "今天我们谈论头发。"
      }
    ],
    teachingOrder: 183,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0601",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "楼梯"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Treppe.",
        zh: "今天我们谈论楼梯。"
      }
    ],
    teachingOrder: 184,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0512",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "果汁"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Saft.",
        zh: "今天我们谈论果汁。"
      }
    ],
    teachingOrder: 185,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0233",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "起飞；出发"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Abflug.",
        zh: "今天我们谈论起飞；出发。"
      }
    ],
    teachingOrder: 186,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0022",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "到达"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute ankommen.",
        zh: "我们今天想到达。"
      }
    ],
    teachingOrder: 187,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-currencies-093",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一欧元"
      }
    ],
    examples: [
      {
        de: "Das Wort „1 Euro“ bedeutet hier „一欧元“.",
        zh: "“1 Euro”在这里表示“一欧元”。"
      }
    ],
    teachingOrder: 188,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0358",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "孩子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Kind.",
        zh: "今天我们谈论孩子。"
      }
    ],
    teachingOrder: 189,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0626",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出租"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute vermieten.",
        zh: "我们今天想出租。"
      }
    ],
    teachingOrder: 190,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0514",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "沙拉"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Salat.",
        zh: "今天我们谈论沙拉。"
      }
    ],
    teachingOrder: 191,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0234",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "机场"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Flughafen.",
        zh: "今天我们谈论机场。"
      }
    ],
    teachingOrder: 192,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0024",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "勾选"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute ankreuzen.",
        zh: "我们今天想勾选。"
      }
    ],
    teachingOrder: 193,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-currencies-094",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一百欧分"
      }
    ],
    examples: [
      {
        de: "Das Wort „100 Cent“ bedeutet hier „一百欧分“.",
        zh: "“100 Cent”在这里表示“一百欧分”。"
      }
    ],
    teachingOrder: 194,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0372",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "头"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kopf.",
        zh: "今天我们谈论头。"
      }
    ],
    teachingOrder: 195,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0627",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "房东"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Vermieter.",
        zh: "今天我们谈论房东。"
      }
    ],
    teachingOrder: 196,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0515",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "盐（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Salz.",
        zh: "今天我们谈论盐（单数形式）。"
      }
    ],
    teachingOrder: 197,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0235",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "飞机"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Flugzeug.",
        zh: "今天我们谈论飞机。"
      }
    ],
    teachingOrder: 198,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0025",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "打开（电器）"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute anmachen.",
        zh: "我们今天想打开（电器）。"
      }
    ],
    teachingOrder: 199,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-095",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一米"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Meter = 1 m“ bedeutet hier „一米“.",
        zh: "“ein Meter = 1 m”在这里表示“一米”。"
      }
    ],
    teachingOrder: 200,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0421",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Mann.",
        zh: "今天我们谈论男人。"
      }
    ],
    teachingOrder: 201,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0671",
    topicIds: [
      "housing"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "公寓，住房"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Wohnung.",
        zh: "今天我们谈论公寓，住房。"
      }
    ],
    teachingOrder: 202,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0585",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "茶"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Tee.",
        zh: "今天我们谈论茶。"
      }
    ],
    teachingOrder: 203,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0266",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "行李（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Gepäck.",
        zh: "今天我们谈论行李（单数形式）。"
      }
    ],
    teachingOrder: 204,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0026",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "报名；登记"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns anmelden.",
        zh: "我们今天想报名；登记。"
      }
    ],
    teachingOrder: 205,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-096",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一厘米"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Zentimeter = 1 cm“ bedeutet hier „一厘米“.",
        zh: "“ein Zentimeter = 1 cm”在这里表示“一厘米”。"
      }
    ],
    teachingOrder: 206,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0428",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Mensch.",
        zh: "今天我们谈论人。"
      }
    ],
    teachingOrder: 207,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0598",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "西红柿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Tomate.",
        zh: "今天我们谈论西红柿。"
      }
    ],
    teachingOrder: 208,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0330",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "酒店"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Hotel.",
        zh: "今天我们谈论酒店。"
      }
    ],
    teachingOrder: 209,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0027",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "报名表"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Anmeldung.",
        zh: "今天我们谈论报名表。"
      }
    ],
    teachingOrder: 210,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-097",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一米十五"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Meter fünfzehn = 1“ bedeutet hier „一米十五“.",
        zh: "“ein Meter fünfzehn = 1”在这里表示“一米十五”。"
      }
    ],
    teachingOrder: 211,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0447",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "母亲"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Mutter.",
        zh: "今天我们谈论母亲。"
      }
    ],
    teachingOrder: 212,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0648",
    topicIds: [
      "food"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "葡萄酒"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Wein.",
        zh: "今天我们谈论葡萄酒。"
      }
    ],
    teachingOrder: 213,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0367",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "行李箱"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Koffer.",
        zh: "今天我们谈论行李箱。"
      }
    ],
    teachingOrder: 214,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0028",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "称呼，称谓"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Anrede.",
        zh: "今天我们谈论称呼，称谓。"
      }
    ],
    teachingOrder: 215,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-098",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二百公里"
      }
    ],
    examples: [
      {
        de: "Das Wort „zweihundert Kilometer = 200 km“ bedeutet hier „二百公里“.",
        zh: "“zweihundert Kilometer = 200 km”在这里表示“二百公里”。"
      }
    ],
    teachingOrder: 216,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0450",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "名字"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Name.",
        zh: "今天我们谈论名字。"
      }
    ],
    teachingOrder: 217,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0478",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "护照"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Pass.",
        zh: "今天我们谈论护照。"
      }
    ],
    teachingOrder: 218,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0029",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "给 … 打电话"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute anrufen.",
        zh: "我们今天想给 … 打电话。"
      }
    ],
    teachingOrder: 219,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-099",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一平方米"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Quadratmeter = 1 m²“ bedeutet hier „一平方米“.",
        zh: "“ein Quadratmeter = 1 m²”在这里表示“一平方米”。"
      }
    ],
    teachingOrder: 220,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0475",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男性合作伙伴"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Partner.",
        zh: "今天我们谈论男性合作伙伴。"
      }
    ],
    teachingOrder: 221,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0493",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "骑自行车"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute Rad fahren.",
        zh: "我们今天想骑自行车。"
      }
    ],
    teachingOrder: 222,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0030",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电话，通话"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Anruf.",
        zh: "今天我们谈论电话，通话。"
      }
    ],
    teachingOrder: 223,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-100",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "零下一度"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Grad unter Null = -1°“ bedeutet hier „零下一度“.",
        zh: "“ein Grad unter Null = -1°”在这里表示“零下一度”。"
      }
    ],
    teachingOrder: 224,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0476",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "女性合作伙伴"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Partnerin.",
        zh: "今天我们谈论女性合作伙伴。"
      }
    ],
    teachingOrder: 225,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0501",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "旅游"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute reisen.",
        zh: "我们今天想旅游。"
      }
    ],
    teachingOrder: 226,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0031",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电话答录机"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Anrufbeantworter.",
        zh: "今天我们谈论电话答录机。"
      }
    ],
    teachingOrder: 227,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-101",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "零上四度"
      }
    ],
    examples: [
      {
        de: "Das Wort „vier Grad über Null = +4°“ bedeutet hier „零上四度“.",
        zh: "“vier Grad über Null = +4°”在这里表示“零上四度”。"
      }
    ],
    teachingOrder: 228,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0539",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "姐妹"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Schwester.",
        zh: "今天我们谈论姐妹。"
      }
    ],
    teachingOrder: 229,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0502",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "旅行"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Reise.",
        zh: "今天我们谈论旅行。"
      }
    ],
    teachingOrder: 230,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0032",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "广播通知"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Ansage.",
        zh: "今天我们谈论广播通知。"
      }
    ],
    teachingOrder: 231,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-102",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "百分之一"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Prozent = 1 %“ bedeutet hier „百分之一“.",
        zh: "“ein Prozent = 1 %”在这里表示“百分之一”。"
      }
    ],
    teachingOrder: 232,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0560",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "儿子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Sohn.",
        zh: "今天我们谈论儿子。"
      }
    ],
    teachingOrder: 233,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0503",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "旅行社"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Reisebüro.",
        zh: "今天我们谈论旅行社。"
      }
    ],
    teachingOrder: 234,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0033",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "连接；换乘衔接"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Anschluss.",
        zh: "今天我们谈论连接；换乘衔接。"
      }
    ],
    teachingOrder: 235,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-103",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一升"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Liter = 1 l“ bedeutet hier „一升“.",
        zh: "“ein Liter = 1 l”在这里表示“一升”。"
      }
    ],
    teachingOrder: 236,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0596",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "女儿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Tochter.",
        zh: "今天我们谈论女儿。"
      }
    ],
    teachingOrder: 237,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0504",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "旅行指南书"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Reiseführer.",
        zh: "今天我们谈论旅行指南书。"
      }
    ],
    teachingOrder: 238,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0034",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开着"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute an sein.",
        zh: "我们今天想开着。"
      }
    ],
    teachingOrder: 239,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-104",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一克"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Gramm = 1 g“ bedeutet hier „一克“.",
        zh: "“ein Gramm = 1 g”在这里表示“一克”。"
      }
    ],
    teachingOrder: 240,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0619",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "父亲"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Vater.",
        zh: "今天我们谈论父亲。"
      }
    ],
    teachingOrder: 241,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0517",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "轻轨铁路"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die S-Bahn.",
        zh: "今天我们谈论轻轨铁路。"
      }
    ],
    teachingOrder: 242,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0035",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "回答"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute antworten.",
        zh: "我们今天想回答。"
      }
    ],
    teachingOrder: 243,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-105",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一磅（五百克）"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Pfund = 500 g“ bedeutet hier „一磅（五百克）“.",
        zh: "“ein Pfund = 500 g”在这里表示“一磅（五百克）”。"
      }
    ],
    teachingOrder: 244,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0629",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "亲属"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Verwandte.",
        zh: "今天我们谈论亲属。"
      }
    ],
    teachingOrder: 245,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0549",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "不在；离开了"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute weg sein.",
        zh: "我们今天想不在；离开了。"
      }
    ],
    teachingOrder: 246,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0036",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "答案，回答"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Antwort.",
        zh: "今天我们谈论答案，回答。"
      }
    ],
    teachingOrder: 247,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-measurements-106",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一千克"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Kilo(gramm) = 1 kg“ bedeutet hier „一千克“.",
        zh: "“ein Kilo(gramm) = 1 kg”在这里表示“一千克”。"
      }
    ],
    teachingOrder: 248,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0634",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "名"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Vorname.",
        zh: "今天我们谈论名。"
      }
    ],
    teachingOrder: 249,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0575",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "街道"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Straße.",
        zh: "今天我们谈论街道。"
      }
    ],
    teachingOrder: 250,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0037",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "告示牌"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Anzeige.",
        zh: "今天我们谈论告示牌。"
      }
    ],
    teachingOrder: 251,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-119",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "黑色"
      }
    ],
    examples: [
      {
        de: "Das Wort „schwarz“ bedeutet hier „黑色“.",
        zh: "“schwarz”在这里表示“黑色”。"
      }
    ],
    teachingOrder: 252,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-107",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "德国"
      }
    ],
    examples: [
      {
        de: "Das Wort „Deutschland“ bedeutet hier „德国“.",
        zh: "“Deutschland”在这里表示“德国”。"
      }
    ],
    teachingOrder: 253,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0576",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "有轨电车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Straßenbahn.",
        zh: "今天我们谈论有轨电车。"
      }
    ],
    teachingOrder: 254,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0038",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "穿上"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns anziehen.",
        zh: "我们今天想穿上。"
      }
    ],
    teachingOrder: 255,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-120",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "灰色"
      }
    ],
    examples: [
      {
        de: "Das Wort „grau“ bedeutet hier „灰色“.",
        zh: "“grau”在这里表示“灰色”。"
      }
    ],
    teachingOrder: 256,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-108",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "德国人"
      }
    ],
    examples: [
      {
        de: "Das Wort „der/die Deutsche“ bedeutet hier „德国人“.",
        zh: "“der/die Deutsche”在这里表示“德国人”。"
      }
    ],
    teachingOrder: 257,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0584",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出租车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Taxi.",
        zh: "今天我们谈论出租车。"
      }
    ],
    teachingOrder: 258,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0039",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "公寓套间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Apartment.",
        zh: "今天我们谈论公寓套间。"
      }
    ],
    teachingOrder: 259,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-121",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "蓝色"
      }
    ],
    examples: [
      {
        de: "Das Wort „blau“ bedeutet hier „蓝色“.",
        zh: "“blau”在这里表示“蓝色”。"
      }
    ],
    teachingOrder: 260,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-109",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一个德国男性／女性；德国人"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Deutscher“ bedeutet hier „一个德国男性／女性；德国人“.",
        zh: "“ein Deutscher”在这里表示“一个德国男性／女性；德国人”。"
      }
    ],
    teachingOrder: 261,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0594",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "票"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Ticket.",
        zh: "今天我们谈论票。"
      }
    ],
    teachingOrder: 262,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0041",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "胃口，食欲（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Appetit.",
        zh: "今天我们谈论胃口，食欲（单数形式）。"
      }
    ],
    teachingOrder: 263,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-122",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "绿色"
      }
    ],
    examples: [
      {
        de: "Das Wort „grün“ bedeutet hier „绿色“.",
        zh: "“grün”在这里表示“绿色”。"
      }
    ],
    teachingOrder: 264,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-110",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "德国的；德语"
      }
    ],
    examples: [
      {
        de: "Das Wort „deutsch“ bedeutet hier „德国的；德语“.",
        zh: "“deutsch”在这里表示“德国的；德语”。"
      }
    ],
    teachingOrder: 265,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0618",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "假日，休假"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Urlaub.",
        zh: "今天我们谈论假日，休假。"
      }
    ],
    teachingOrder: 266,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0048",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "也"
      }
    ],
    examples: [
      {
        de: "Das Wort „auch“ bedeutet hier „也“.",
        zh: "“auch”在这里表示“也”。"
      }
    ],
    teachingOrder: 267,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-123",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "白色"
      }
    ],
    examples: [
      {
        de: "Das Wort „weiß“ bedeutet hier „白色“.",
        zh: "“weiß”在这里表示“白色”。"
      }
    ],
    teachingOrder: 268,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-111",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "欧洲"
      }
    ],
    examples: [
      {
        de: "Das Wort „Europa“ bedeutet hier „欧洲“.",
        zh: "“Europa”在这里表示“欧洲”。"
      }
    ],
    teachingOrder: 269,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0680",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "房间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Zimmer.",
        zh: "今天我们谈论房间。"
      }
    ],
    teachingOrder: 270,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0049",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在……上；到……上"
      }
    ],
    examples: [
      {
        de: "Das Wort „auf“ bedeutet hier „在……上；到……上“.",
        zh: "“auf”在这里表示“在……上；到……上”。"
      }
    ],
    teachingOrder: 271,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-124",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "红色"
      }
    ],
    examples: [
      {
        de: "Das Wort „rot“ bedeutet hier „红色“.",
        zh: "“rot”在这里表示“红色”。"
      }
    ],
    teachingOrder: 272,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-112",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "欧洲人"
      }
    ],
    examples: [
      {
        de: "Das Wort „Europäer“ bedeutet hier „欧洲人“.",
        zh: "“Europäer”在这里表示“欧洲人”。"
      }
    ],
    teachingOrder: 273,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0684",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "火车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Zug.",
        zh: "今天我们谈论火车。"
      }
    ],
    teachingOrder: 274,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0050",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "任务"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Aufgabe.",
        zh: "今天我们谈论任务。"
      }
    ],
    teachingOrder: 275,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-125",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "黄色"
      }
    ],
    examples: [
      {
        de: "Das Wort „gelb“ bedeutet hier „黄色“.",
        zh: "“gelb”在这里表示“黄色”。"
      }
    ],
    teachingOrder: 276,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-113",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "欧洲的"
      }
    ],
    examples: [
      {
        de: "Das Wort „europäisch“ bedeutet hier „欧洲的“.",
        zh: "“europäisch”在这里表示“欧洲的”。"
      }
    ],
    teachingOrder: 277,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-directions-127",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "北方"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Norden.",
        zh: "今天我们谈论北方。"
      }
    ],
    teachingOrder: 278,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0051",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "停止"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute aufhören.",
        zh: "我们今天想停止。"
      }
    ],
    teachingOrder: 279,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-colors-126",
    topicIds: [
      "shopping"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "棕色"
      }
    ],
    examples: [
      {
        de: "Das Wort „braun“ bedeutet hier „棕色“.",
        zh: "“braun”在这里表示“棕色”。"
      }
    ],
    teachingOrder: 280,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-114",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "说明自己的来源地或国籍"
      }
    ],
    examples: [
      {
        de: "Das Wort „Angabe der eigenen Herkunft oder Nationalität“ bedeutet hier „说明自己的来源地或国籍“.",
        zh: "“Angabe der eigenen Herkunft oder Nationalität”在这里表示“说明自己的来源地或国籍”。"
      }
    ],
    teachingOrder: 281,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-directions-128",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "南方"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Süden.",
        zh: "今天我们谈论南方。"
      }
    ],
    teachingOrder: 282,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0052",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开着"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute auf sein.",
        zh: "我们今天想开着。"
      }
    ],
    teachingOrder: 283,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-115",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "国家、居民、国籍"
      }
    ],
    examples: [
      {
        de: "Das Wort „Land“ bedeutet hier „国家、居民、国籍“.",
        zh: "“Land”在这里表示“国家、居民、国籍”。"
      }
    ],
    teachingOrder: 284,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-directions-129",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "西方"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Westen.",
        zh: "今天我们谈论西方。"
      }
    ],
    teachingOrder: 285,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0053",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "起床"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute aufstehen.",
        zh: "我们今天想起床。"
      }
    ],
    teachingOrder: 286,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-116",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "土耳其、土耳其人、土耳其的"
      }
    ],
    examples: [
      {
        de: "Das Wort „Türkei“ bedeutet hier „土耳其、土耳其人、土耳其的“.",
        zh: "“Türkei”在这里表示“土耳其、土耳其人、土耳其的”。"
      }
    ],
    teachingOrder: 287,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-directions-130",
    topicIds: [
      "travel"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "东方"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Osten.",
        zh: "今天我们谈论东方。"
      }
    ],
    teachingOrder: 288,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0056",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "来自从 ... 里出来"
      }
    ],
    examples: [
      {
        de: "Das Wort „aus“ bedeutet hier „来自从 ... 里出来“.",
        zh: "“aus”在这里表示“来自从 ... 里出来”。"
      }
    ],
    teachingOrder: 289,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-117",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "芬兰、芬兰人、芬兰的"
      }
    ],
    examples: [
      {
        de: "Das Wort „Finnland“ bedeutet hier „芬兰、芬兰人、芬兰的“.",
        zh: "“Finnland”在这里表示“芬兰、芬兰人、芬兰的”。"
      }
    ],
    teachingOrder: 290,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0058",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "填写"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute ausfüllen.",
        zh: "我们今天想填写。"
      }
    ],
    teachingOrder: 291,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-countries-nationalities-118",
    topicIds: [
      "person"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "墨西哥、墨西哥人、墨西哥的"
      }
    ],
    examples: [
      {
        de: "Das Wort „Mexiko“ bedeutet hier „墨西哥、墨西哥人、墨西哥的“.",
        zh: "“Mexiko”在这里表示“墨西哥、墨西哥人、墨西哥的”。"
      }
    ],
    teachingOrder: 292,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0059",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出口"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Ausgang.",
        zh: "今天我们谈论出口。"
      }
    ],
    teachingOrder: 293,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0061",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "外国"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Ausland.",
        zh: "今天我们谈论外国。"
      }
    ],
    teachingOrder: 294,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0062",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "外国人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Ausländer.",
        zh: "今天我们谈论外国人。"
      }
    ],
    teachingOrder: 295,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0063",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "外国的"
      }
    ],
    examples: [
      {
        de: "Das Wort „ausländisch“ bedeutet hier „外国的“.",
        zh: "“ausländisch”在这里表示“外国的”。"
      }
    ],
    teachingOrder: 296,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0064",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "关掉；约定"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute ausmachen.",
        zh: "我们今天想关掉；约定。"
      }
    ],
    teachingOrder: 297,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0065",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "陈述，说法，观点"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Aussage.",
        zh: "今天我们谈论陈述，说法，观点。"
      }
    ],
    teachingOrder: 298,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0066",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "看起来"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute aussehen.",
        zh: "我们今天想看起来。"
      }
    ],
    teachingOrder: 299,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0067",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在关机（状态）"
      }
    ],
    examples: [
      {
        de: "Das Wort „aus sein“ bedeutet hier „在关机（状态）“.",
        zh: "“aus sein”在这里表示“在关机（状态）”。"
      }
    ],
    teachingOrder: 300,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0068",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "下车，下船"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute aussteigen.",
        zh: "我们今天想下车，下船。"
      }
    ],
    teachingOrder: 301,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0069",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "证件"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Ausweis.",
        zh: "今天我们谈论证件。"
      }
    ],
    teachingOrder: 302,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0070",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "脱下；搬出"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns ausziehen.",
        zh: "我们今天想脱下；搬出。"
      }
    ],
    teachingOrder: 303,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0075",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "婴儿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Baby.",
        zh: "今天我们谈论婴儿。"
      }
    ],
    teachingOrder: 304,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0076",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "面包店"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Bäckerei.",
        zh: "今天我们谈论面包店。"
      }
    ],
    teachingOrder: 305,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0082",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "很快，即将"
      }
    ],
    examples: [
      {
        de: "Das Wort „bald“ bedeutet hier „很快，即将“.",
        zh: "“bald”在这里表示“很快，即将”。"
      }
    ],
    teachingOrder: 306,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0086",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "酒吧"
      }
    ],
    examples: [
      {
        de: "Das Wort „bar“ bedeutet hier „酒吧“.",
        zh: "“bar”在这里表示“酒吧”。"
      }
    ],
    teachingOrder: 307,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0087",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "腹部"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Bauch.",
        zh: "今天我们谈论腹部。"
      }
    ],
    teachingOrder: 308,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0090",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "意味着，意思是"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bedeuten.",
        zh: "我们今天想意味着，意思是。"
      }
    ],
    teachingOrder: 309,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0091",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开始开始"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute beginnen.",
        zh: "我们今天想开始开始。"
      }
    ],
    teachingOrder: 310,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0092",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在 … 地点在 … 的时间"
      }
    ],
    examples: [
      {
        de: "Das Wort „bei“ bedeutet hier „在 … 地点在 … 的时间“.",
        zh: "“bei”在这里表示“在 … 地点在 … 的时间”。"
      }
    ],
    teachingOrder: 311,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0093",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "两个（物，事）"
      }
    ],
    examples: [
      {
        de: "Das Wort „beide“ bedeutet hier „两个（物，事）“.",
        zh: "“beide”在这里表示“两个（物，事）”。"
      }
    ],
    teachingOrder: 312,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0097",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出名的"
      }
    ],
    examples: [
      {
        de: "Das Wort „bekannt“ bedeutet hier „出名的“.",
        zh: "“bekannt”在这里表示“出名的”。"
      }
    ],
    teachingOrder: 313,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0098",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "熟人"
      }
    ],
    examples: [
      {
        de: "Das Wort „der/die Bekannte“ bedeutet hier „熟人“.",
        zh: "“der/die Bekannte”在这里表示“熟人”。"
      }
    ],
    teachingOrder: 314,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0099",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "得到得了（某种症状或疾病）"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bekommen.",
        zh: "我们今天想得到得了（某种症状或疾病）。"
      }
    ],
    teachingOrder: 315,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0100",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "使用"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute benutzen.",
        zh: "我们今天想使用。"
      }
    ],
    teachingOrder: 316,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0102",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "占用的；忙线的"
      }
    ],
    examples: [
      {
        de: "Das Wort „besetzt“ bedeutet hier „占用的；忙线的“.",
        zh: "“besetzt”在这里表示“占用的；忙线的”。"
      }
    ],
    teachingOrder: 317,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0103",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "参观"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute besichtigen.",
        zh: "我们今天想参观。"
      }
    ],
    teachingOrder: 318,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0104",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "更好"
      }
    ],
    examples: [
      {
        de: "Das Wort „besser“ bedeutet hier „更好“.",
        zh: "“besser”在这里表示“更好”。"
      }
    ],
    teachingOrder: 319,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0105",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "最好的"
      }
    ],
    examples: [
      {
        de: "Das Wort „best-“ bedeutet hier „最好的“.",
        zh: "“best-”在这里表示“最好的”。"
      }
    ],
    teachingOrder: 320,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0107",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "参观，拜访"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute besuchen.",
        zh: "我们今天想参观，拜访。"
      }
    ],
    teachingOrder: 321,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0111",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "图画"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Bild.",
        zh: "今天我们谈论图画。"
      }
    ],
    teachingOrder: 322,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0112",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "便宜的"
      }
    ],
    examples: [
      {
        de: "Das Wort „billig“ bedeutet hier „便宜的“.",
        zh: "“billig”在这里表示“便宜的”。"
      }
    ],
    teachingOrder: 323,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0114",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "直到直到 … 为止"
      }
    ],
    examples: [
      {
        de: "Das Wort „bis“ bedeutet hier „直到直到 … 为止“.",
        zh: "“bis”在这里表示“直到直到 … 为止”。"
      }
    ],
    teachingOrder: 324,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0115",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一点点"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bisschen.",
        zh: "我们今天想一点点。"
      }
    ],
    teachingOrder: 325,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0116",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "请"
      }
    ],
    examples: [
      {
        de: "Das Wort „bitte“ bedeutet hier „请“.",
        zh: "“bitte”在这里表示“请”。"
      }
    ],
    teachingOrder: 326,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0117",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "请"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Bitte.",
        zh: "今天我们谈论请。"
      }
    ],
    teachingOrder: 327,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0118",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "请求，恳求"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bitten.",
        zh: "我们今天想请求，恳求。"
      }
    ],
    teachingOrder: 328,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0119",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "苦的"
      }
    ],
    examples: [
      {
        de: "Das Wort „bitter“ bedeutet hier „苦的“.",
        zh: "“bitter”在这里表示“苦的”。"
      }
    ],
    teachingOrder: 329,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0120",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "停留，逗留"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bleiben.",
        zh: "我们今天想停留，逗留。"
      }
    ],
    teachingOrder: 330,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0121",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "铅笔"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Bleistift.",
        zh: "今天我们谈论铅笔。"
      }
    ],
    teachingOrder: 331,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0122",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "目光；景色"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Blick.",
        zh: "今天我们谈论目光；景色。"
      }
    ],
    teachingOrder: 332,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0124",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "表格；纸张"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Bogen.",
        zh: "今天我们谈论表格；纸张。"
      }
    ],
    teachingOrder: 333,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0125",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "生气的；坏的"
      }
    ],
    examples: [
      {
        de: "Das Wort „böse“ bedeutet hier „生气的；坏的“.",
        zh: "“böse”在这里表示“生气的；坏的”。"
      }
    ],
    teachingOrder: 334,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0126",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "需要需要"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute brauchen.",
        zh: "我们今天想需要需要。"
      }
    ],
    teachingOrder: 335,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0127",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "宽阔的"
      }
    ],
    examples: [
      {
        de: "Das Wort „breit“ bedeutet hier „宽阔的“.",
        zh: "“breit”在这里表示“宽阔的”。"
      }
    ],
    teachingOrder: 336,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0130",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "带来"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute bringen.",
        zh: "我们今天想带来。"
      }
    ],
    teachingOrder: 337,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0132",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "小面包"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Brötchen.",
        zh: "今天我们谈论小面包。"
      }
    ],
    teachingOrder: 338,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0135",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "字母"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Buchstabe.",
        zh: "今天我们谈论字母。"
      }
    ],
    teachingOrder: 339,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0139",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "咖啡馆"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Café.",
        zh: "今天我们谈论咖啡馆。"
      }
    ],
    teachingOrder: 340,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0140",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "CD"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die CD.",
        zh: "今天我们谈论CD。"
      }
    ],
    teachingOrder: 341,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0142",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "大约"
      }
    ],
    examples: [
      {
        de: "Das Wort „circa/ca.“ bedeutet hier „大约“.",
        zh: "“circa/ca.”在这里表示“大约”。"
      }
    ],
    teachingOrder: 342,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0143",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "计算机"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Computer.",
        zh: "今天我们谈论计算机。"
      }
    ],
    teachingOrder: 343,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0144",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "那儿，那里在这种情况下在那时"
      }
    ],
    examples: [
      {
        de: "Das Wort „da“ bedeutet hier „那儿，那里在这种情况下在那时“.",
        zh: "“da”在这里表示“那儿，那里在这种情况下在那时”。"
      }
    ],
    teachingOrder: 344,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0145",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "女士"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Dame.",
        zh: "今天我们谈论女士。"
      }
    ],
    teachingOrder: 345,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0146",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在旁边"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute daneben.",
        zh: "我们今天想在旁边。"
      }
    ],
    teachingOrder: 346,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0147",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "感谢"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute danken.",
        zh: "我们今天想感谢。"
      }
    ],
    teachingOrder: 347,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0148",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "感谢"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Dank.",
        zh: "今天我们谈论感谢。"
      }
    ],
    teachingOrder: 348,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0149",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "谢谢"
      }
    ],
    examples: [
      {
        de: "Das Wort „danke“ bedeutet hier „谢谢“.",
        zh: "“danke”在这里表示“谢谢”。"
      }
    ],
    teachingOrder: 349,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0150",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "此后、然后"
      }
    ],
    examples: [
      {
        de: "Das Wort „dann“ bedeutet hier „此后、然后“.",
        zh: "“dann”在这里表示“此后、然后”。"
      }
    ],
    teachingOrder: 350,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0151",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "日期"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Datum.",
        zh: "今天我们谈论日期。"
      }
    ],
    teachingOrder: 351,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0152",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "持续"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute dauern.",
        zh: "我们今天想持续。"
      }
    ],
    teachingOrder: 352,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0153",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "你的"
      }
    ],
    examples: [
      {
        de: "Das Wort „dein-“ bedeutet hier „你的“.",
        zh: "“dein-”在这里表示“你的”。"
      }
    ],
    teachingOrder: 353,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0154",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "究竟因为"
      }
    ],
    examples: [
      {
        de: "Das Wort „denn“ bedeutet hier „究竟因为“.",
        zh: "“denn”在这里表示“究竟因为”。"
      }
    ],
    teachingOrder: 354,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0155",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "这个（阳性，中性，阴性）"
      }
    ],
    examples: [
      {
        de: "Das Wort „der“ bedeutet hier „这个（阳性，中性，阴性）“.",
        zh: "“der”在这里表示“这个（阳性，中性，阴性）”。"
      }
    ],
    teachingOrder: 355,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0156",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "你（第四格）"
      }
    ],
    examples: [
      {
        de: "Das Wort „dich“ bedeutet hier „你（第四格）“.",
        zh: "“dich”在这里表示“你（第四格）”。"
      }
    ],
    teachingOrder: 356,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0157",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "这个"
      }
    ],
    examples: [
      {
        de: "Das Wort „dies-“ bedeutet hier „这个“.",
        zh: "“dies-”在这里表示“这个”。"
      }
    ],
    teachingOrder: 357,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0158",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "你（第三格）"
      }
    ],
    examples: [
      {
        de: "Das Wort „dir“ bedeutet hier „你（第三格）“.",
        zh: "“dir”在这里表示“你（第三格）”。"
      }
    ],
    teachingOrder: 358,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0160",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男博士"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Doktor.",
        zh: "今天我们谈论男博士。"
      }
    ],
    teachingOrder: 359,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0162",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "乡村，村庄"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Dorf.",
        zh: "今天我们谈论乡村，村庄。"
      }
    ],
    teachingOrder: 360,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0163",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "那里，那儿"
      }
    ],
    examples: [
      {
        de: "Das Wort „dort“ bedeutet hier „那里，那儿“.",
        zh: "“dort”在这里表示“那里，那儿”。"
      }
    ],
    teachingOrder: 361,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0164",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在外面"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute draußen.",
        zh: "我们今天想在外面。"
      }
    ],
    teachingOrder: 362,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0165",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "打印"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute drucken.",
        zh: "我们今天想打印。"
      }
    ],
    teachingOrder: 363,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0166",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "打印机"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Drucker.",
        zh: "今天我们谈论打印机。"
      }
    ],
    teachingOrder: 364,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0167",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "压，按"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute drücken.",
        zh: "我们今天想压，按。"
      }
    ],
    teachingOrder: 365,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0168",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "穿过，经过通过"
      }
    ],
    examples: [
      {
        de: "Das Wort „durch“ bedeutet hier „穿过，经过通过“.",
        zh: "“durch”在这里表示“穿过，经过通过”。"
      }
    ],
    teachingOrder: 366,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0169",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "广播通知"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Durchsage.",
        zh: "今天我们谈论广播通知。"
      }
    ],
    teachingOrder: 367,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0170",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "允许"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute dürfen.",
        zh: "我们今天想允许。"
      }
    ],
    teachingOrder: 368,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0172",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "淋浴"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns duschen.",
        zh: "我们今天想淋浴。"
      }
    ],
    teachingOrder: 369,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0173",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "淋浴间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Dusche.",
        zh: "今天我们谈论淋浴间。"
      }
    ],
    teachingOrder: 370,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0174",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "角落；街角"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Ecke.",
        zh: "今天我们谈论角落；街角。"
      }
    ],
    teachingOrder: 371,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0177",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "鸡蛋"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Ei.",
        zh: "今天我们谈论鸡蛋。"
      }
    ],
    teachingOrder: 372,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0178",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "匆忙的"
      }
    ],
    examples: [
      {
        de: "Das Wort „eilig“ bedeutet hier „匆忙的“.",
        zh: "“eilig”在这里表示“匆忙的”。"
      }
    ],
    teachingOrder: 373,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0179",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一个；某个"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein-“ bedeutet hier „一个；某个“.",
        zh: "“ein-”在这里表示“一个；某个”。"
      }
    ],
    teachingOrder: 374,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0180",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "简单的；单程的"
      }
    ],
    examples: [
      {
        de: "Das Wort „einfach“ bedeutet hier „简单的；单程的“.",
        zh: "“einfach”在这里表示“简单的；单程的”。"
      }
    ],
    teachingOrder: 375,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0181",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "入口"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Eingang.",
        zh: "今天我们谈论入口。"
      }
    ],
    teachingOrder: 376,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0184",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "邀请信"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Einladung.",
        zh: "今天我们谈论邀请信。"
      }
    ],
    teachingOrder: 377,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0185",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一次"
      }
    ],
    examples: [
      {
        de: "Das Wort „einmal“ bedeutet hier „一次“.",
        zh: "“einmal”在这里表示“一次”。"
      }
    ],
    teachingOrder: 378,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0186",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "上车，上船"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute einsteigen.",
        zh: "我们今天想上车，上船。"
      }
    ],
    teachingOrder: 379,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0187",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "入场"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Eintritt.",
        zh: "今天我们谈论入场。"
      }
    ],
    teachingOrder: 380,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0190",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电子邮件"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die E-Mail.",
        zh: "今天我们谈论电子邮件。"
      }
    ],
    teachingOrder: 381,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0191",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "收件人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Empfänger.",
        zh: "今天我们谈论收件人。"
      }
    ],
    teachingOrder: 382,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0192",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "推荐"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute empfehlen.",
        zh: "我们今天想推荐。"
      }
    ],
    teachingOrder: 383,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0193",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "结束"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute enden.",
        zh: "我们今天想结束。"
      }
    ],
    teachingOrder: 384,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0194",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "尽头，末尾"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Ende.",
        zh: "今天我们谈论尽头，末尾。"
      }
    ],
    teachingOrder: 385,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0195",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "原谅"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute entschuldigen.",
        zh: "我们今天想原谅。"
      }
    ],
    teachingOrder: 386,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0196",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "对不起"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Entschuldigung.",
        zh: "今天我们谈论对不起。"
      }
    ],
    teachingOrder: 387,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0197",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "他"
      }
    ],
    examples: [
      {
        de: "Das Wort „er“ bedeutet hier „他“.",
        zh: "“er”在这里表示“他”。"
      }
    ],
    teachingOrder: 388,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0198",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "结果"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Ergebnis.",
        zh: "今天我们谈论结果。"
      }
    ],
    teachingOrder: 389,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0199",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "解释"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute erklären.",
        zh: "我们今天想解释。"
      }
    ],
    teachingOrder: 390,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0200",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "允许"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute erlauben.",
        zh: "我们今天想允许。"
      }
    ],
    teachingOrder: 391,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0201",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "成年人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Erwachsene.",
        zh: "今天我们谈论成年人。"
      }
    ],
    teachingOrder: 392,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0202",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "讲述"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute erzählen.",
        zh: "我们今天想讲述。"
      }
    ],
    teachingOrder: 393,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0203",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "它"
      }
    ],
    examples: [
      {
        de: "Das Wort „es“ bedeutet hier „它“.",
        zh: "“es”在这里表示“它”。"
      }
    ],
    teachingOrder: 394,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0206",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "你们的"
      }
    ],
    examples: [
      {
        de: "Das Wort „euer“ bedeutet hier „你们的“.",
        zh: "“euer”在这里表示“你们的”。"
      }
    ],
    teachingOrder: 395,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0211",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "错误的"
      }
    ],
    examples: [
      {
        de: "Das Wort „falsch“ bedeutet hier „错误的“.",
        zh: "“falsch”在这里表示“错误的”。"
      }
    ],
    teachingOrder: 396,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0215",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "颜色"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Farbe.",
        zh: "今天我们谈论颜色。"
      }
    ],
    teachingOrder: 397,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0219",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "缺少"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute fehlen.",
        zh: "我们今天想缺少。"
      }
    ],
    teachingOrder: 398,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0220",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "错误"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Fehler.",
        zh: "今天我们谈论错误。"
      }
    ],
    teachingOrder: 399,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0222",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "完工的，完成的"
      }
    ],
    examples: [
      {
        de: "Das Wort „fertig“ bedeutet hier „完工的，完成的“.",
        zh: "“fertig”在这里表示“完工的，完成的”。"
      }
    ],
    teachingOrder: 400,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0223",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "火"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Feuer.",
        zh: "今天我们谈论火。"
      }
    ],
    teachingOrder: 401,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0224",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "发烧（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Fieber.",
        zh: "今天我们谈论发烧（单数形式）。"
      }
    ],
    teachingOrder: 402,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0225",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "电影院"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Film.",
        zh: "今天我们谈论电影院。"
      }
    ],
    teachingOrder: 403,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0226",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "找到认为"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute finden.",
        zh: "我们今天想找到认为。"
      }
    ],
    teachingOrder: 404,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0227",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "公司"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Firma.",
        zh: "今天我们谈论公司。"
      }
    ],
    teachingOrder: 405,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0228",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "鱼"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Fisch.",
        zh: "今天我们谈论鱼。"
      }
    ],
    teachingOrder: 406,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0229",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "瓶子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Flasche.",
        zh: "今天我们谈论瓶子。"
      }
    ],
    teachingOrder: 407,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0231",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "乘飞机"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute fliegen.",
        zh: "我们今天想乘飞机。"
      }
    ],
    teachingOrder: 408,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0232",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "起飞"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute abfliegen.",
        zh: "我们今天想起飞。"
      }
    ],
    teachingOrder: 409,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0236",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "表格"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Formular.",
        zh: "今天我们谈论表格。"
      }
    ],
    teachingOrder: 410,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0238",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "问"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute fragen.",
        zh: "我们今天想问。"
      }
    ],
    teachingOrder: 411,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0239",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "问题"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Frage.",
        zh: "今天我们谈论问题。"
      }
    ],
    teachingOrder: 412,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0241",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "空着的，无人占用的"
      }
    ],
    examples: [
      {
        de: "Das Wort „frei“ bedeutet hier „空着的，无人占用的“.",
        zh: "“frei”在这里表示“空着的，无人占用的”。"
      }
    ],
    teachingOrder: 413,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0243",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "陌生的；外来的"
      }
    ],
    examples: [
      {
        de: "Das Wort „fremd“ bedeutet hier „陌生的；外来的“.",
        zh: "“fremd”在这里表示“陌生的；外来的”。"
      }
    ],
    teachingOrder: 414,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0244",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "高兴；期待"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns freuen.",
        zh: "我们今天想高兴；期待。"
      }
    ],
    teachingOrder: 415,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0246",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "以前；更早"
      }
    ],
    examples: [
      {
        de: "Das Wort „früher“ bedeutet hier „以前；更早“.",
        zh: "“früher”在这里表示“以前；更早”。"
      }
    ],
    teachingOrder: 416,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0249",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "导游"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Führung.",
        zh: "今天我们谈论导游。"
      }
    ],
    teachingOrder: 417,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0250",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "为了为了，由于"
      }
    ],
    examples: [
      {
        de: "Das Wort „für“ bedeutet hier „为了为了，由于“.",
        zh: "“für”在这里表示“为了为了，由于”。"
      }
    ],
    teachingOrder: 418,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0251",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "足"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Fuß.",
        zh: "今天我们谈论足。"
      }
    ],
    teachingOrder: 419,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0254",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "客人"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Gast.",
        zh: "今天我们谈论客人。"
      }
    ],
    teachingOrder: 420,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0255",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "有，存在递给"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute geben.",
        zh: "我们今天想有，存在递给。"
      }
    ],
    teachingOrder: 421,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0256",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "出生"
      }
    ],
    examples: [
      {
        de: "Das Wort „geboren“ bedeutet hier „出生“.",
        zh: "“geboren”在这里表示“出生”。"
      }
    ],
    teachingOrder: 422,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0260",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "喜欢"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute gefallen.",
        zh: "我们今天想喜欢。"
      }
    ],
    teachingOrder: 423,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0261",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "防对，对阵"
      }
    ],
    examples: [
      {
        de: "Das Wort „gegen“ bedeutet hier „防对，对阵“.",
        zh: "“gegen”在这里表示“防对，对阵”。"
      }
    ],
    teachingOrder: 424,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0263",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "属于"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute gehören.",
        zh: "我们今天想属于。"
      }
    ],
    teachingOrder: 425,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0265",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "蔬菜（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Gemüse.",
        zh: "今天我们谈论蔬菜（单数形式）。"
      }
    ],
    teachingOrder: 426,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0267",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "恰巧，刚刚正立的，挺直的"
      }
    ],
    examples: [
      {
        de: "Das Wort „gerade“ bedeutet hier „恰巧，刚刚正立的，挺直的“.",
        zh: "“gerade”在这里表示“恰巧，刚刚正立的，挺直的”。"
      }
    ],
    teachingOrder: 427,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0268",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一直向前的"
      }
    ],
    examples: [
      {
        de: "Das Wort „geradeaus“ bedeutet hier „一直向前的“.",
        zh: "“geradeaus”在这里表示“一直向前的”。"
      }
    ],
    teachingOrder: 428,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0269",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "乐意，喜欢"
      }
    ],
    examples: [
      {
        de: "Das Wort „gern(e)“ bedeutet hier „乐意，喜欢“.",
        zh: "“gern(e)”在这里表示“乐意，喜欢”。"
      }
    ],
    teachingOrder: 429,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0271",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "礼物"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Geschenk.",
        zh: "今天我们谈论礼物。"
      }
    ],
    teachingOrder: 430,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0272",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "兄弟姐妹"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Geschwister (pl.).",
        zh: "今天我们谈论兄弟姐妹。"
      }
    ],
    teachingOrder: 431,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0273",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "谈话"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Gespräch.",
        zh: "今天我们谈论谈话。"
      }
    ],
    teachingOrder: 432,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0274",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "昨天"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute gestern.",
        zh: "我们今天想昨天。"
      }
    ],
    teachingOrder: 433,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0275",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "去世的"
      }
    ],
    examples: [
      {
        de: "Das Wort „gestorben“ bedeutet hier „去世的“.",
        zh: "“gestorben”在这里表示“去世的”。"
      }
    ],
    teachingOrder: 434,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0276",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "饮料"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Getränk.",
        zh: "今天我们谈论饮料。"
      }
    ],
    teachingOrder: 435,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0277",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "重量"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Gewicht.",
        zh: "今天我们谈论重量。"
      }
    ],
    teachingOrder: 436,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0278",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "中奖"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute gewinnen.",
        zh: "我们今天想中奖。"
      }
    ],
    teachingOrder: 437,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0279",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "玻璃杯"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Glas.",
        zh: "今天我们谈论玻璃杯。"
      }
    ],
    teachingOrder: 438,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0280",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "相信"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute glauben.",
        zh: "我们今天想相信。"
      }
    ],
    teachingOrder: 439,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0281",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "立刻，马上同样，一样"
      }
    ],
    examples: [
      {
        de: "Das Wort „gleich“ bedeutet hier „立刻，马上同样，一样“.",
        zh: "“gleich”在这里表示“立刻，马上同样，一样”。"
      }
    ],
    teachingOrder: 440,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0282",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "站台"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Gleis.",
        zh: "今天我们谈论站台。"
      }
    ],
    teachingOrder: 441,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0283",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "运气，幸福"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Glück.",
        zh: "今天我们谈论运气，幸福。"
      }
    ],
    teachingOrder: 442,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0284",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "幸福的"
      }
    ],
    examples: [
      {
        de: "Das Wort „glücklich“ bedeutet hier „幸福的“.",
        zh: "“glücklich”在这里表示“幸福的”。"
      }
    ],
    teachingOrder: 443,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0285",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "祝贺，祝愿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Glückwunsch.",
        zh: "今天我们谈论祝贺，祝愿。"
      }
    ],
    teachingOrder: 444,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0287",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "祝贺"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute gratulieren.",
        zh: "我们今天想祝贺。"
      }
    ],
    teachingOrder: 445,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0288",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "烧烤"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute grillen.",
        zh: "我们今天想烧烤。"
      }
    ],
    teachingOrder: 446,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0289",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "大的"
      }
    ],
    examples: [
      {
        de: "Das Wort „groß“ bedeutet hier „大的“.",
        zh: "“groß”在这里表示“大的”。"
      }
    ],
    teachingOrder: 447,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0290",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "尺码"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Größe.",
        zh: "今天我们谈论尺码。"
      }
    ],
    teachingOrder: 448,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0294",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "团体"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Gruppe.",
        zh: "今天我们谈论团体。"
      }
    ],
    teachingOrder: 449,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0295",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "问候，致意"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Gruß.",
        zh: "今天我们谈论问候，致意。"
      }
    ],
    teachingOrder: 450,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0296",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "有效的"
      }
    ],
    examples: [
      {
        de: "Das Wort „gültig“ bedeutet hier „有效的“.",
        zh: "“gültig”在这里表示“有效的”。"
      }
    ],
    teachingOrder: 451,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0297",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "价廉的"
      }
    ],
    examples: [
      {
        de: "Das Wort „günstig“ bedeutet hier „价廉的“.",
        zh: "“günstig”在这里表示“价廉的”。"
      }
    ],
    teachingOrder: 452,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0298",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "好的好的好的"
      }
    ],
    examples: [
      {
        de: "Das Wort „gut“ bedeutet hier „好的好的好的“.",
        zh: "“gut”在这里表示“好的好的好的”。"
      }
    ],
    teachingOrder: 453,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0300",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "有"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute haben.",
        zh: "我们今天想有。"
      }
    ],
    teachingOrder: 454,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0301",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "鸡肉"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Hähnchen.",
        zh: "今天我们谈论鸡肉。"
      }
    ],
    teachingOrder: 455,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0302",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "半膳住宿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Halbpension.",
        zh: "今天我们谈论半膳住宿。"
      }
    ],
    teachingOrder: 456,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0303",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "大厅"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Halle.",
        zh: "今天我们谈论大厅。"
      }
    ],
    teachingOrder: 457,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0304",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "你好"
      }
    ],
    examples: [
      {
        de: "Das Wort „hallo“ bedeutet hier „你好“.",
        zh: "“hallo”在这里表示“你好”。"
      }
    ],
    teachingOrder: 458,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0305",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "保持 ... 状态"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute halten.",
        zh: "我们今天想保持 ... 状态。"
      }
    ],
    teachingOrder: 459,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0306",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "公车站，电车站"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Haltestelle.",
        zh: "今天我们谈论公车站，电车站。"
      }
    ],
    teachingOrder: 460,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0307",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "手"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Hand.",
        zh: "今天我们谈论手。"
      }
    ],
    teachingOrder: 461,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0308",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "手机"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Handy.",
        zh: "今天我们谈论手机。"
      }
    ],
    teachingOrder: 462,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0313",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "家乡"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Heimat.",
        zh: "今天我们谈论家乡。"
      }
    ],
    teachingOrder: 463,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0314",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "结婚"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute heiraten.",
        zh: "我们今天想结婚。"
      }
    ],
    teachingOrder: 464,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0315",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "叫，名为称为，意味着"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute heißen.",
        zh: "我们今天想叫，名为称为，意味着。"
      }
    ],
    teachingOrder: 465,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0316",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "帮助"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute helfen.",
        zh: "我们今天想帮助。"
      }
    ],
    teachingOrder: 466,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0317",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "明亮的"
      }
    ],
    examples: [
      {
        de: "Das Wort „hell“ bedeutet hier „明亮的“.",
        zh: "“hell”在这里表示“明亮的”。"
      }
    ],
    teachingOrder: 467,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0318",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "炉灶"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Herd.",
        zh: "今天我们谈论炉灶。"
      }
    ],
    teachingOrder: 468,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0319",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "先生"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Herr.",
        zh: "今天我们谈论先生。"
      }
    ],
    teachingOrder: 469,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0320",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "衷心的"
      }
    ],
    examples: [
      {
        de: "Das Wort „herzlich“ bedeutet hier „衷心的“.",
        zh: "“herzlich”在这里表示“衷心的”。"
      }
    ],
    teachingOrder: 470,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0321",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "今天"
      }
    ],
    examples: [
      {
        de: "Das Wort „heute“ bedeutet hier „今天“.",
        zh: "“heute”在这里表示“今天”。"
      }
    ],
    teachingOrder: 471,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0322",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "这里这里"
      }
    ],
    examples: [
      {
        de: "Das Wort „hier“ bedeutet hier „这里这里“.",
        zh: "“hier”在这里表示“这里这里”。"
      }
    ],
    teachingOrder: 472,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0323",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "帮助"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Hilfe.",
        zh: "今天我们谈论帮助。"
      }
    ],
    teachingOrder: 473,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0324",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "后面"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute hinten.",
        zh: "我们今天想后面。"
      }
    ],
    teachingOrder: 474,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0325",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "爱好"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Hobby.",
        zh: "今天我们谈论爱好。"
      }
    ],
    teachingOrder: 475,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0326",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "高的"
      }
    ],
    examples: [
      {
        de: "Das Wort „hoch“ bedeutet hier „高的“.",
        zh: "“hoch”在这里表示“高的”。"
      }
    ],
    teachingOrder: 476,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0327",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "婚礼"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Hochzeit.",
        zh: "今天我们谈论婚礼。"
      }
    ],
    teachingOrder: 477,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0328",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "取来，拿来"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute holen.",
        zh: "我们今天想取来，拿来。"
      }
    ],
    teachingOrder: 478,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0329",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "听听"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute hören.",
        zh: "我们今天想听听。"
      }
    ],
    teachingOrder: 479,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0331",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "狗"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Hund.",
        zh: "今天我们谈论狗。"
      }
    ],
    teachingOrder: 480,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0333",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "我"
      }
    ],
    examples: [
      {
        de: "Das Wort „ich“ bedeutet hier „我“.",
        zh: "“ich”在这里表示“我”。"
      }
    ],
    teachingOrder: 481,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0334",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "她的；给他；他（第四格）"
      }
    ],
    examples: [
      {
        de: "Das Wort „ihr/ihm/ihn“ bedeutet hier „她的；给他；他（第四格）“.",
        zh: "“ihr/ihm/ihn”在这里表示“她的；给他；他（第四格）”。"
      }
    ],
    teachingOrder: 482,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0335",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "总是"
      }
    ],
    examples: [
      {
        de: "Das Wort „immer“ bedeutet hier „总是“.",
        zh: "“immer”在这里表示“总是”。"
      }
    ],
    teachingOrder: 483,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0336",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在……里；进入"
      }
    ],
    examples: [
      {
        de: "Das Wort „in“ bedeutet hier „在……里；进入“.",
        zh: "“in”在这里表示“在……里；进入”。"
      }
    ],
    teachingOrder: 484,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0337",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "信息"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Information.",
        zh: "今天我们谈论信息。"
      }
    ],
    teachingOrder: 485,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0338",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "国际的"
      }
    ],
    examples: [
      {
        de: "Das Wort „international“ bedeutet hier „国际的“.",
        zh: "“international”在这里表示“国际的”。"
      }
    ],
    teachingOrder: 486,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0339",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "因特网（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Internet.",
        zh: "今天我们谈论因特网（单数形式）。"
      }
    ],
    teachingOrder: 487,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0340",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "是的真的，的确"
      }
    ],
    examples: [
      {
        de: "Das Wort „ja“ bedeutet hier „是的真的，的确“.",
        zh: "“ja”在这里表示“是的真的，的确”。"
      }
    ],
    teachingOrder: 488,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0341",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "夹克"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Jacke.",
        zh: "今天我们谈论夹克。"
      }
    ],
    teachingOrder: 489,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0342",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "每个"
      }
    ],
    examples: [
      {
        de: "Das Wort „jed-“ bedeutet hier „每个“.",
        zh: "“jed-”在这里表示“每个”。"
      }
    ],
    teachingOrder: 490,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0343",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "现在"
      }
    ],
    examples: [
      {
        de: "Das Wort „jetzt“ bedeutet hier „现在“.",
        zh: "“jetzt”在这里表示“现在”。"
      }
    ],
    teachingOrder: 491,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0344",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "打工"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Job.",
        zh: "今天我们谈论打工。"
      }
    ],
    teachingOrder: 492,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0345",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "青少年"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Jugendliche.",
        zh: "今天我们谈论青少年。"
      }
    ],
    teachingOrder: 493,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0346",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "年轻的"
      }
    ],
    examples: [
      {
        de: "Das Wort „jung“ bedeutet hier „年轻的“.",
        zh: "“jung”在这里表示“年轻的”。"
      }
    ],
    teachingOrder: 494,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0347",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男孩"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Junge.",
        zh: "今天我们谈论男孩。"
      }
    ],
    teachingOrder: 495,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0349",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "损坏的"
      }
    ],
    examples: [
      {
        de: "Das Wort „kaputt“ bedeutet hier „损坏的“.",
        zh: "“kaputt”在这里表示“损坏的”。"
      }
    ],
    teachingOrder: 496,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0352",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "土豆"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Kartoffel.",
        zh: "今天我们谈论土豆。"
      }
    ],
    teachingOrder: 497,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0353",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "收银台"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Kasse.",
        zh: "今天我们谈论收银台。"
      }
    ],
    teachingOrder: 498,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0355",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "没有一个，没有"
      }
    ],
    examples: [
      {
        de: "Das Wort „kein“ bedeutet hier „没有一个，没有“.",
        zh: "“kein”在这里表示“没有一个，没有”。"
      }
    ],
    teachingOrder: 499,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0356",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "了解"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kennen.",
        zh: "我们今天想了解。"
      }
    ],
    teachingOrder: 500,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0357",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "认识"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kennenlernen.",
        zh: "我们今天想认识。"
      }
    ],
    teachingOrder: 501,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0361",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "书报亭"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kiosk.",
        zh: "今天我们谈论书报亭。"
      }
    ],
    teachingOrder: 502,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0362",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "当然，显然"
      }
    ],
    examples: [
      {
        de: "Das Wort „klar“ bedeutet hier „当然，显然“.",
        zh: "“klar”在这里表示“当然，显然”。"
      }
    ],
    teachingOrder: 503,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0363",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "年纪"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Klasse.",
        zh: "今天我们谈论年纪。"
      }
    ],
    teachingOrder: 504,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0365",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "小的"
      }
    ],
    examples: [
      {
        de: "Das Wort „klein“ bedeutet hier „小的“.",
        zh: "“klein”在这里表示“小的”。"
      }
    ],
    teachingOrder: 505,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0366",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "烹饪"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kochen.",
        zh: "我们今天想烹饪。"
      }
    ],
    teachingOrder: 506,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0369",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "来来，来到"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kommen.",
        zh: "我们今天想来来，来到。"
      }
    ],
    teachingOrder: 507,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0370",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "能够，会能够"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute können.",
        zh: "我们今天想能够，会能够。"
      }
    ],
    teachingOrder: 508,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0373",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "价值，价格为"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kosten.",
        zh: "我们今天想价值，价格为。"
      }
    ],
    teachingOrder: 509,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0374",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "患病的"
      }
    ],
    examples: [
      {
        de: "Das Wort „krank“ bedeutet hier „患病的“.",
        zh: "“krank”在这里表示“患病的”。"
      }
    ],
    teachingOrder: 510,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0375",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "得到"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute kriegen.",
        zh: "我们今天想得到。"
      }
    ],
    teachingOrder: 511,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0377",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "糕点"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kuchen.",
        zh: "今天我们谈论糕点。"
      }
    ],
    teachingOrder: 512,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0378",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "圆珠笔"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kugelschreiber.",
        zh: "今天我们谈论圆珠笔。"
      }
    ],
    teachingOrder: 513,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0379",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "冰箱"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kühlschrank.",
        zh: "今天我们谈论冰箱。"
      }
    ],
    teachingOrder: 514,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0380",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "文化方面的"
      }
    ],
    examples: [
      {
        de: "Das Wort „kulturell“ bedeutet hier „文化方面的“.",
        zh: "“kulturell”在这里表示“文化方面的”。"
      }
    ],
    teachingOrder: 515,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0381",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "照料；关心"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns kümmern.",
        zh: "我们今天想照料；关心。"
      }
    ],
    teachingOrder: 516,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0382",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男顾客"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kunde.",
        zh: "今天我们谈论男顾客。"
      }
    ],
    teachingOrder: 517,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0383",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "课程"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Kurs.",
        zh: "今天我们谈论课程。"
      }
    ],
    teachingOrder: 518,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0384",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "简短的短的"
      }
    ],
    examples: [
      {
        de: "Das Wort „kurz“ bedeutet hier „简短的短的“.",
        zh: "“kurz”在这里表示“简短的短的”。"
      }
    ],
    teachingOrder: 519,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0385",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "笑"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute lachen.",
        zh: "我们今天想笑。"
      }
    ],
    teachingOrder: 520,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0387",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "国家"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Land.",
        zh: "今天我们谈论国家。"
      }
    ],
    teachingOrder: 521,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0388",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "长的长的"
      }
    ],
    examples: [
      {
        de: "Das Wort „lang“ bedeutet hier „长的长的“.",
        zh: "“lang”在这里表示“长的长的”。"
      }
    ],
    teachingOrder: 522,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0389",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "长时间；很久"
      }
    ],
    examples: [
      {
        de: "Das Wort „lange“ bedeutet hier „长时间；很久“.",
        zh: "“lange”在这里表示“长时间；很久”。"
      }
    ],
    teachingOrder: 523,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0390",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "缓慢的"
      }
    ],
    examples: [
      {
        de: "Das Wort „langsam“ bedeutet hier „缓慢的“.",
        zh: "“langsam”在这里表示“缓慢的”。"
      }
    ],
    teachingOrder: 524,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0391",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "走路，步行运转，进行"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute laufen.",
        zh: "我们今天想走路，步行运转，进行。"
      }
    ],
    teachingOrder: 525,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0392",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "喧闹的，响亮的..."
      }
    ],
    examples: [
      {
        de: "Das Wort „laut“ bedeutet hier „喧闹的，响亮的...“.",
        zh: "“laut”在这里表示“喧闹的，响亮的...”。"
      }
    ],
    teachingOrder: 526,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0393",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "生活"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute leben.",
        zh: "我们今天想生活。"
      }
    ],
    teachingOrder: 527,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0394",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "生活"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Leben.",
        zh: "今天我们谈论生活。"
      }
    ],
    teachingOrder: 528,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0395",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "食品"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Lebensmittel (pl.).",
        zh: "今天我们谈论食品。"
      }
    ],
    teachingOrder: 529,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0396",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "未婚的"
      }
    ],
    examples: [
      {
        de: "Das Wort „ledig“ bedeutet hier „未婚的“.",
        zh: "“ledig”在这里表示“未婚的”。"
      }
    ],
    teachingOrder: 530,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0397",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "把 ... 平放"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute legen.",
        zh: "我们今天想把 ... 平放。"
      }
    ],
    teachingOrder: 531,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0398",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男老师"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Lehrer.",
        zh: "今天我们谈论男老师。"
      }
    ],
    teachingOrder: 532,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0399",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "轻微的薄的"
      }
    ],
    examples: [
      {
        de: "Das Wort „leicht“ bedeutet hier „轻微的薄的“.",
        zh: "“leicht”在这里表示“轻微的薄的”。"
      }
    ],
    teachingOrder: 533,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0400",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "可惜"
      }
    ],
    examples: [
      {
        de: "Das Wort „leider“ bedeutet hier „可惜“.",
        zh: "“leider”在这里表示“可惜”。"
      }
    ],
    teachingOrder: 534,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0401",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "低声的"
      }
    ],
    examples: [
      {
        de: "Das Wort „leise“ bedeutet hier „低声的“.",
        zh: "“leise”在这里表示“低声的”。"
      }
    ],
    teachingOrder: 535,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0403",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "读"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute lesen.",
        zh: "我们今天想读。"
      }
    ],
    teachingOrder: 536,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0404",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "最后的"
      }
    ],
    examples: [
      {
        de: "Das Wort „letzt-“ bedeutet hier „最后的“.",
        zh: "“letzt-”在这里表示“最后的”。"
      }
    ],
    teachingOrder: 537,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0405",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "人们"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Leute (pl.).",
        zh: "今天我们谈论人们。"
      }
    ],
    teachingOrder: 538,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0407",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "亲爱的"
      }
    ],
    examples: [
      {
        de: "Das Wort „lieb-“ bedeutet hier „亲爱的“.",
        zh: "“lieb-”在这里表示“亲爱的”。"
      }
    ],
    teachingOrder: 539,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0408",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "热爱，喜爱"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute lieben.",
        zh: "我们今天想热爱，喜爱。"
      }
    ],
    teachingOrder: 540,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0409",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "宁愿，更喜欢"
      }
    ],
    examples: [
      {
        de: "Das Wort „lieber“ bedeutet hier „宁愿，更喜欢“.",
        zh: "“lieber”在这里表示“宁愿，更喜欢”。"
      }
    ],
    teachingOrder: 541,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0410",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "最喜欢的"
      }
    ],
    examples: [
      {
        de: "Das Wort „Lieblings-“ bedeutet hier „最喜欢的“.",
        zh: "“Lieblings-”在这里表示“最喜欢的”。"
      }
    ],
    teachingOrder: 542,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0412",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "位于躺，卧（指物）平放，横放位于"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute liegen.",
        zh: "我们今天想位于躺，卧（指物）平放，横放位于。"
      }
    ],
    teachingOrder: 543,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0413",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在左边"
      }
    ],
    examples: [
      {
        de: "Das Wort „links“ bedeutet hier „在左边“.",
        zh: "“links”在这里表示“在左边”。"
      }
    ],
    teachingOrder: 544,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0414",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "卡车"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Lkw.",
        zh: "今天我们谈论卡车。"
      }
    ],
    teachingOrder: 545,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0415",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "餐馆；店铺"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Lokal.",
        zh: "今天我们谈论餐馆；店铺。"
      }
    ],
    teachingOrder: 546,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0416",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "答案；解决办法"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Lösung.",
        zh: "今天我们谈论答案；解决办法。"
      }
    ],
    teachingOrder: 547,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0417",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "有趣的"
      }
    ],
    examples: [
      {
        de: "Das Wort „lustig“ bedeutet hier „有趣的“.",
        zh: "“lustig”在这里表示“有趣的”。"
      }
    ],
    teachingOrder: 548,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0418",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "做"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute machen.",
        zh: "我们今天想做。"
      }
    ],
    teachingOrder: 549,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0419",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "女孩"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Mädchen.",
        zh: "今天我们谈论女孩。"
      }
    ],
    teachingOrder: 550,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0420",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "人们"
      }
    ],
    examples: [
      {
        de: "Das Wort „man“ bedeutet hier „人们“.",
        zh: "“man”在这里表示“人们”。"
      }
    ],
    teachingOrder: 551,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0422",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男性的"
      }
    ],
    examples: [
      {
        de: "Das Wort „männlich“ bedeutet hier „男性的“.",
        zh: "“männlich”在这里表示“男性的”。"
      }
    ],
    teachingOrder: 552,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0423",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "机器"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Maschine.",
        zh: "今天我们谈论机器。"
      }
    ],
    teachingOrder: 553,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0425",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "更多"
      }
    ],
    examples: [
      {
        de: "Das Wort „mehr“ bedeutet hier „更多“.",
        zh: "“mehr”在这里表示“更多”。"
      }
    ],
    teachingOrder: 554,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0426",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "我的"
      }
    ],
    examples: [
      {
        de: "Das Wort „mein“ bedeutet hier „我的“.",
        zh: "“mein”在这里表示“我的”。"
      }
    ],
    teachingOrder: 555,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0427",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "大多数的"
      }
    ],
    examples: [
      {
        de: "Das Wort „meist-“ bedeutet hier „大多数的“.",
        zh: "“meist-”在这里表示“大多数的”。"
      }
    ],
    teachingOrder: 556,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0432",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "和 … 一起，同在 … 的时候"
      }
    ],
    examples: [
      {
        de: "Das Wort „mit“ bedeutet hier „和 … 一起，同在 … 的时候“.",
        zh: "“mit”在这里表示“和 … 一起，同在 … 的时候”。"
      }
    ],
    teachingOrder: 557,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0433",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "带来"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute mitbringen.",
        zh: "我们今天想带来。"
      }
    ],
    teachingOrder: 558,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0434",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "同来，同去"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute mitkommen.",
        zh: "我们今天想同来，同去。"
      }
    ],
    teachingOrder: 559,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0435",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "参加"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute mitmachen.",
        zh: "我们今天想参加。"
      }
    ],
    teachingOrder: 560,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0436",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一起带走，顺便带走"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute mitnehmen.",
        zh: "我们今天想一起带走，顺便带走。"
      }
    ],
    teachingOrder: 561,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0437",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "中间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Mitte.",
        zh: "今天我们谈论中间。"
      }
    ],
    teachingOrder: 562,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0439",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "想要"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute möchten.",
        zh: "我们今天想想要。"
      }
    ],
    teachingOrder: 563,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0440",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "喜欢"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute mögen.",
        zh: "我们今天想喜欢。"
      }
    ],
    teachingOrder: 564,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0441",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "可行的，可能的"
      }
    ],
    examples: [
      {
        de: "Das Wort „möglich“ bedeutet hier „可行的，可能的“.",
        zh: "“möglich”在这里表示“可行的，可能的”。"
      }
    ],
    teachingOrder: 565,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0442",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "片刻，瞬间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Moment.",
        zh: "今天我们谈论片刻，瞬间。"
      }
    ],
    teachingOrder: 566,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0443",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "明天"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute morgen.",
        zh: "我们今天想明天。"
      }
    ],
    teachingOrder: 567,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0444",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "疲倦的"
      }
    ],
    examples: [
      {
        de: "Das Wort „müde“ bedeutet hier „疲倦的“.",
        zh: "“müde”在这里表示“疲倦的”。"
      }
    ],
    teachingOrder: 568,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0445",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "嘴"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Mund.",
        zh: "今天我们谈论嘴。"
      }
    ],
    teachingOrder: 569,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0446",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "必须"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute müssen.",
        zh: "我们今天想必须。"
      }
    ],
    teachingOrder: 570,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0448",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在 … 之后在 … 之后到 … 去"
      }
    ],
    examples: [
      {
        de: "Das Wort „nach“ bedeutet hier „在 … 之后在 … 之后到 … 去“.",
        zh: "“nach”在这里表示“在 … 之后在 … 之后到 … 去”。"
      }
    ],
    teachingOrder: 571,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0449",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "下一个"
      }
    ],
    examples: [
      {
        de: "Das Wort „nächst-“ bedeutet hier „下一个“.",
        zh: "“nächst-”在这里表示“下一个”。"
      }
    ],
    teachingOrder: 572,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0451",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "选择，选购乘，坐服用"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute nehmen.",
        zh: "我们今天想选择，选购乘，坐服用。"
      }
    ],
    teachingOrder: 573,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0452",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "不是"
      }
    ],
    examples: [
      {
        de: "Das Wort „nein“ bedeutet hier „不是“.",
        zh: "“nein”在这里表示“不是”。"
      }
    ],
    teachingOrder: 574,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0453",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "新的"
      }
    ],
    examples: [
      {
        de: "Das Wort „neu“ bedeutet hier „新的“.",
        zh: "“neu”在这里表示“新的”。"
      }
    ],
    teachingOrder: 575,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0454",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "不"
      }
    ],
    examples: [
      {
        de: "Das Wort „nicht“ bedeutet hier „不“.",
        zh: "“nicht”在这里表示“不”。"
      }
    ],
    teachingOrder: 576,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0455",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "什么也没有"
      }
    ],
    examples: [
      {
        de: "Das Wort „nichts“ bedeutet hier „什么也没有“.",
        zh: "“nichts”在这里表示“什么也没有”。"
      }
    ],
    teachingOrder: 577,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0456",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "从不，从未"
      }
    ],
    examples: [
      {
        de: "Das Wort „nie“ bedeutet hier „从不，从未“.",
        zh: "“nie”在这里表示“从不，从未”。"
      }
    ],
    teachingOrder: 578,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0457",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "还"
      }
    ],
    examples: [
      {
        de: "Das Wort „noch“ bedeutet hier „还“.",
        zh: "“noch”在这里表示“还”。"
      }
    ],
    teachingOrder: 579,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0458",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "正常的，普通的"
      }
    ],
    examples: [
      {
        de: "Das Wort „normal“ bedeutet hier „正常的，普通的“.",
        zh: "“normal”在这里表示“正常的，普通的”。"
      }
    ],
    teachingOrder: 580,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0459",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "号码"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Nummer.",
        zh: "今天我们谈论号码。"
      }
    ],
    teachingOrder: 581,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0460",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "只；仅仅"
      }
    ],
    examples: [
      {
        de: "Das Wort „nur“ bedeutet hier „只；仅仅“.",
        zh: "“nur”在这里表示“只；仅仅”。"
      }
    ],
    teachingOrder: 582,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0461",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在上面"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute oben.",
        zh: "我们今天想在上面。"
      }
    ],
    teachingOrder: 583,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0463",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "或者"
      }
    ],
    examples: [
      {
        de: "Das Wort „oder“ bedeutet hier „或者“.",
        zh: "“oder”在这里表示“或者”。"
      }
    ],
    teachingOrder: 584,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0464",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开门"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute öffnen.",
        zh: "我们今天想开门。"
      }
    ],
    teachingOrder: 585,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0465",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开门的，开放的"
      }
    ],
    examples: [
      {
        de: "Das Wort „geöffnet“ bedeutet hier „开门的，开放的“.",
        zh: "“geöffnet”在这里表示“开门的，开放的”。"
      }
    ],
    teachingOrder: 586,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0466",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "经常"
      }
    ],
    examples: [
      {
        de: "Das Wort „oft“ bedeutet hier „经常“.",
        zh: "“oft”在这里表示“经常”。"
      }
    ],
    teachingOrder: 587,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0467",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "没有，无"
      }
    ],
    examples: [
      {
        de: "Das Wort „ohne“ bedeutet hier „没有，无“.",
        zh: "“ohne”在这里表示“没有，无”。"
      }
    ],
    teachingOrder: 588,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0469",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "祖母，外祖母"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Oma.",
        zh: "今天我们谈论祖母，外祖母。"
      }
    ],
    teachingOrder: 589,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0470",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "爷爷，姥爷"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Opa.",
        zh: "今天我们谈论爷爷，姥爷。"
      }
    ],
    teachingOrder: 590,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0471",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "秩序；正常状态"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Ordnung.",
        zh: "今天我们谈论秩序；正常状态。"
      }
    ],
    teachingOrder: 591,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0472",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "地方，地点"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Ort.",
        zh: "今天我们谈论地方，地点。"
      }
    ],
    teachingOrder: 592,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0473",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "纸张"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Papier.",
        zh: "今天我们谈论纸张。"
      }
    ],
    teachingOrder: 593,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0474",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "证件；文件"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Papiere (pl.).",
        zh: "今天我们谈论证件；文件。"
      }
    ],
    teachingOrder: 594,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0479",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "休息"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Pause.",
        zh: "今天我们谈论休息。"
      }
    ],
    teachingOrder: 595,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0480",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "规划，计划计划计划"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Plan.",
        zh: "今天我们谈论规划，计划计划计划。"
      }
    ],
    teachingOrder: 596,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0481",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "空间（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Platz.",
        zh: "今天我们谈论空间（单数形式）。"
      }
    ],
    teachingOrder: 597,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0483",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "炸薯条"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Pommes frites (pl.).",
        zh: "今天我们谈论炸薯条。"
      }
    ],
    teachingOrder: 598,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0487",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "诊所"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Praxis.",
        zh: "今天我们谈论诊所。"
      }
    ],
    teachingOrder: 599,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0489",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "问题"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Problem.",
        zh: "今天我们谈论问题。"
      }
    ],
    teachingOrder: 600,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0490",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "宣传册，手册"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Prospekt.",
        zh: "今天我们谈论宣传册，手册。"
      }
    ],
    teachingOrder: 601,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0491",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "考试"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Prüfung.",
        zh: "今天我们谈论考试。"
      }
    ],
    teachingOrder: 602,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0492",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "准时的"
      }
    ],
    examples: [
      {
        de: "Das Wort „pünktlich“ bedeutet hier „准时的“.",
        zh: "“pünktlich”在这里表示“准时的”。"
      }
    ],
    teachingOrder: 603,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0494",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "吸烟"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute rauchen.",
        zh: "我们今天想吸烟。"
      }
    ],
    teachingOrder: 604,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0495",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "房间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Raum.",
        zh: "今天我们谈论房间。"
      }
    ],
    teachingOrder: 605,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0496",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "账单"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Rechnung.",
        zh: "今天我们谈论账单。"
      }
    ],
    teachingOrder: 606,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0497",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在右边"
      }
    ],
    examples: [
      {
        de: "Das Wort „rechts“ bedeutet hier „在右边“.",
        zh: "“rechts”在这里表示“在右边”。"
      }
    ],
    teachingOrder: 607,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0498",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "下雨"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute regnen.",
        zh: "我们今天想下雨。"
      }
    ],
    teachingOrder: 608,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0505",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "修理"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute reparieren.",
        zh: "我们今天想修理。"
      }
    ],
    teachingOrder: 609,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0508",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "前台"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Rezeption.",
        zh: "今天我们谈论前台。"
      }
    ],
    teachingOrder: 610,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0509",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "正确的正确的"
      }
    ],
    examples: [
      {
        de: "Das Wort „richtig“ bedeutet hier „正确的正确的“.",
        zh: "“richtig”在这里表示“正确的正确的”。"
      }
    ],
    teachingOrder: 611,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0510",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "闻起来，发出气味"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute riechen.",
        zh: "我们今天想闻起来，发出气味。"
      }
    ],
    teachingOrder: 612,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0511",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "安静的"
      }
    ],
    examples: [
      {
        de: "Das Wort „ruhig“ bedeutet hier „安静的“.",
        zh: "“ruhig”在这里表示“安静的”。"
      }
    ],
    teachingOrder: 613,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0513",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "说"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute sagen.",
        zh: "我们今天想说。"
      }
    ],
    teachingOrder: 614,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0516",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "句子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Satz.",
        zh: "今天我们谈论句子。"
      }
    ],
    teachingOrder: 615,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0519",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "照耀"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute scheinen.",
        zh: "我们今天想照耀。"
      }
    ],
    teachingOrder: 616,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0520",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "寄"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute schicken.",
        zh: "我们今天想寄。"
      }
    ],
    teachingOrder: 617,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0521",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "牌子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Schild.",
        zh: "今天我们谈论牌子。"
      }
    ],
    teachingOrder: 618,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0522",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "火腿"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schinken.",
        zh: "今天我们谈论火腿。"
      }
    ],
    teachingOrder: 619,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0523",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "睡觉"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute schlafen.",
        zh: "我们今天想睡觉。"
      }
    ],
    teachingOrder: 620,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0524",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "差的；不舒服的"
      }
    ],
    examples: [
      {
        de: "Das Wort „schlecht“ bedeutet hier „差的；不舒服的“.",
        zh: "“schlecht”在这里表示“差的；不舒服的”。"
      }
    ],
    teachingOrder: 621,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0525",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "关门"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute schließen.",
        zh: "我们今天想关门。"
      }
    ],
    teachingOrder: 622,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0526",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "关门的，关闭的"
      }
    ],
    examples: [
      {
        de: "Das Wort „geschlossen“ bedeutet hier „关门的，关闭的“.",
        zh: "“geschlossen”在这里表示“关门的，关闭的”。"
      }
    ],
    teachingOrder: 623,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0527",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "结束语（单数形式）结束"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schluss.",
        zh: "今天我们谈论结束语（单数形式）结束。"
      }
    ],
    teachingOrder: 624,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0529",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "觉得好吃，合口味"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute schmecken.",
        zh: "我们今天想觉得好吃，合口味。"
      }
    ],
    teachingOrder: 625,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0530",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "快的"
      }
    ],
    examples: [
      {
        de: "Das Wort „schnell“ bedeutet hier „快的“.",
        zh: "“schnell”在这里表示“快的”。"
      }
    ],
    teachingOrder: 626,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0531",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "已经"
      }
    ],
    examples: [
      {
        de: "Das Wort „schon“ bedeutet hier „已经“.",
        zh: "“schon”在这里表示“已经”。"
      }
    ],
    teachingOrder: 627,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0532",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "美丽的真好很，非常"
      }
    ],
    examples: [
      {
        de: "Das Wort „schön“ bedeutet hier „美丽的真好很，非常“.",
        zh: "“schön”在这里表示“美丽的真好很，非常”。"
      }
    ],
    teachingOrder: 628,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0533",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "柜子"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schrank.",
        zh: "今天我们谈论柜子。"
      }
    ],
    teachingOrder: 629,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0534",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "写"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute schreiben.",
        zh: "我们今天想写。"
      }
    ],
    teachingOrder: 630,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0537",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男学生"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Schüler.",
        zh: "今天我们谈论男学生。"
      }
    ],
    teachingOrder: 631,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0538",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "困难的沉重的"
      }
    ],
    examples: [
      {
        de: "Das Wort „schwer“ bedeutet hier „困难的沉重的“.",
        zh: "“schwer”在这里表示“困难的沉重的”。"
      }
    ],
    teachingOrder: 632,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0543",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "看，看见"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute sehen.",
        zh: "我们今天想看，看见。"
      }
    ],
    teachingOrder: 633,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0544",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "景点，名胜古迹"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Sehenswürdigkeit.",
        zh: "今天我们谈论景点，名胜古迹。"
      }
    ],
    teachingOrder: 634,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0545",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "很"
      }
    ],
    examples: [
      {
        de: "Das Wort „sehr“ bedeutet hier „很“.",
        zh: "“sehr”在这里表示“很”。"
      }
    ],
    teachingOrder: 635,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0546",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "是"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute sein.",
        zh: "我们今天想是。"
      }
    ],
    teachingOrder: 636,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0550",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "关着"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute zu sein.",
        zh: "我们今天想关着。"
      }
    ],
    teachingOrder: 637,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0551",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "从 … 以来"
      }
    ],
    examples: [
      {
        de: "Das Wort „seit“ bedeutet hier „从 … 以来“.",
        zh: "“seit”在这里表示“从 … 以来”。"
      }
    ],
    teachingOrder: 638,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0552",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "独立的"
      }
    ],
    examples: [
      {
        de: "Das Wort „selbstständig“ bedeutet hier „独立的“.",
        zh: "“selbstständig”在这里表示“独立的”。"
      }
    ],
    teachingOrder: 639,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0553",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "自己；自身"
      }
    ],
    examples: [
      {
        de: "Das Wort „sich“ bedeutet hier „自己；自身“.",
        zh: "“sich”在这里表示“自己；自身”。"
      }
    ],
    teachingOrder: 640,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0554",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "您，您们"
      }
    ],
    examples: [
      {
        de: "Das Wort „sie“ bedeutet hier „您，您们“.",
        zh: "“sie”在这里表示“您，您们”。"
      }
    ],
    teachingOrder: 641,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0555",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "您，您们"
      }
    ],
    examples: [
      {
        de: "Das Wort „Sie“ bedeutet hier „您，您们“.",
        zh: "“Sie”在这里表示“您，您们”。"
      }
    ],
    teachingOrder: 642,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0556",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "坐"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute sitzen.",
        zh: "我们今天想坐。"
      }
    ],
    teachingOrder: 643,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0557",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "这么，这样如此"
      }
    ],
    examples: [
      {
        de: "Das Wort „so“ bedeutet hier „这么，这样如此“.",
        zh: "“so”在这里表示“这么，这样如此”。"
      }
    ],
    teachingOrder: 644,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0559",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "立刻，马上"
      }
    ],
    examples: [
      {
        de: "Das Wort „sofort“ bedeutet hier „立刻，马上“.",
        zh: "“sofort”在这里表示“立刻，马上”。"
      }
    ],
    teachingOrder: 645,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0561",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "应该"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute sollen.",
        zh: "我们今天想应该。"
      }
    ],
    teachingOrder: 646,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0563",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "晚的"
      }
    ],
    examples: [
      {
        de: "Das Wort „spät“ bedeutet hier „晚的“.",
        zh: "“spät”在这里表示“晚的”。"
      }
    ],
    teachingOrder: 647,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0564",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "以后以后"
      }
    ],
    examples: [
      {
        de: "Das Wort „später“ bedeutet hier „以后以后“.",
        zh: "“später”在这里表示“以后以后”。"
      }
    ],
    teachingOrder: 648,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0568",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "语音"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Sprache.",
        zh: "今天我们谈论语音。"
      }
    ],
    teachingOrder: 649,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0571",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "处于某种情况站立适合（某人）---处于 的情况"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute stehen.",
        zh: "我们今天想处于某种情况站立适合（某人）---处于 的情况。"
      }
    ],
    teachingOrder: 650,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0572",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "职位"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Stelle.",
        zh: "今天我们谈论职位。"
      }
    ],
    teachingOrder: 651,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0573",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "放置；站立"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute stellen.",
        zh: "我们今天想放置；站立。"
      }
    ],
    teachingOrder: 652,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0574",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "楼层（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Stock.",
        zh: "今天我们谈论楼层（单数形式）。"
      }
    ],
    teachingOrder: 653,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0577",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "（在大学）攻读，学习"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute studieren.",
        zh: "我们今天想（在大学）攻读，学习。"
      }
    ],
    teachingOrder: 654,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0578",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "大学学习，学业"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Studium.",
        zh: "今天我们谈论大学学习，学业。"
      }
    ],
    teachingOrder: 655,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0579",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "男大学生"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Student.",
        zh: "今天我们谈论男大学生。"
      }
    ],
    teachingOrder: 656,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0580",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "小时"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Stunde.",
        zh: "今天我们谈论小时。"
      }
    ],
    teachingOrder: 657,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0581",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "寻找"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute suchen.",
        zh: "我们今天想寻找。"
      }
    ],
    teachingOrder: 658,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0586",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "部分"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Teil.",
        zh: "今天我们谈论部分。"
      }
    ],
    teachingOrder: 659,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0589",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "（约定的）日程，约会"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Termin.",
        zh: "今天我们谈论（约定的）日程，约会。"
      }
    ],
    teachingOrder: 660,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0590",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "测验"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Test.",
        zh: "今天我们谈论测验。"
      }
    ],
    teachingOrder: 661,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0591",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "昂贵的"
      }
    ],
    examples: [
      {
        de: "Das Wort „teuer“ bedeutet hier „昂贵的“.",
        zh: "“teuer”在这里表示“昂贵的”。"
      }
    ],
    teachingOrder: 662,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0592",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "文章"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Text.",
        zh: "今天我们谈论文章。"
      }
    ],
    teachingOrder: 663,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0593",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "主题，话题"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Thema.",
        zh: "今天我们谈论主题，话题。"
      }
    ],
    teachingOrder: 664,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0597",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "卫生间"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Toilette.",
        zh: "今天我们谈论卫生间。"
      }
    ],
    teachingOrder: 665,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0599",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "死的"
      }
    ],
    examples: [
      {
        de: "Das Wort „tot“ bedeutet hier „死的“.",
        zh: "“tot”在这里表示“死的”。"
      }
    ],
    teachingOrder: 666,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0600",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "会面，会见"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns treffen.",
        zh: "我们今天想会面，会见。"
      }
    ],
    teachingOrder: 667,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0603",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "再见"
      }
    ],
    examples: [
      {
        de: "Das Wort „tschüss“ bedeutet hier „再见“.",
        zh: "“tschüss”在这里表示“再见”。"
      }
    ],
    teachingOrder: 668,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0604",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "干，工作"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute tun.",
        zh: "我们今天想干，工作。"
      }
    ],
    teachingOrder: 669,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0605",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在 … 期间超过对于在 … 上方通过"
      }
    ],
    examples: [
      {
        de: "Das Wort „über“ bedeutet hier „在 … 期间超过对于在 … 上方通过“.",
        zh: "“über”在这里表示“在 … 期间超过对于在 … 上方通过”。"
      }
    ],
    teachingOrder: 670,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0606",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "过夜"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute übernachten.",
        zh: "我们今天想过夜。"
      }
    ],
    teachingOrder: 671,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0607",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "转账"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute überweisen.",
        zh: "我们今天想转账。"
      }
    ],
    teachingOrder: 672,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0608",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "钟点"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Uhr.",
        zh: "今天我们谈论钟点。"
      }
    ],
    teachingOrder: 673,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0609",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在 … 时刻"
      }
    ],
    examples: [
      {
        de: "Das Wort „um“ bedeutet hier „在 … 时刻“.",
        zh: "“um”在这里表示“在 … 时刻”。"
      }
    ],
    teachingOrder: 674,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0610",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "搬家"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute umziehen.",
        zh: "我们今天想搬家。"
      }
    ],
    teachingOrder: 675,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0611",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "和"
      }
    ],
    examples: [
      {
        de: "Das Wort „und“ bedeutet hier „和“.",
        zh: "“und”在这里表示“和”。"
      }
    ],
    teachingOrder: 676,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0612",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "我们的"
      }
    ],
    examples: [
      {
        de: "Das Wort „unser-“ bedeutet hier „我们的“.",
        zh: "“unser-”在这里表示“我们的”。"
      }
    ],
    teachingOrder: 677,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0613",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在下面"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute unten.",
        zh: "我们今天想在下面。"
      }
    ],
    teachingOrder: 678,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0614",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在……下面"
      }
    ],
    examples: [
      {
        de: "Das Wort „unter“ bedeutet hier „在……下面“.",
        zh: "“unter”在这里表示“在……下面”。"
      }
    ],
    teachingOrder: 679,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0615",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "课程；课堂"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Unterricht.",
        zh: "今天我们谈论课程；课堂。"
      }
    ],
    teachingOrder: 680,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0616",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "签名"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute unterschreiben.",
        zh: "我们今天想签名。"
      }
    ],
    teachingOrder: 681,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0617",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "签名"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Unterschrift.",
        zh: "今天我们谈论签名。"
      }
    ],
    teachingOrder: 682,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0620",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "禁止的"
      }
    ],
    examples: [
      {
        de: "Das Wort „verboten“ bedeutet hier „禁止的“.",
        zh: "“verboten”在这里表示“禁止的”。"
      }
    ],
    teachingOrder: 683,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0623",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "已婚的"
      }
    ],
    examples: [
      {
        de: "Das Wort „verheiratet“ bedeutet hier „已婚的“.",
        zh: "“verheiratet”在这里表示“已婚的”。"
      }
    ],
    teachingOrder: 684,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0630",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "多"
      }
    ],
    examples: [
      {
        de: "Das Wort „viel“ bedeutet hier „多“.",
        zh: "“viel”在这里表示“多”。"
      }
    ],
    teachingOrder: 685,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0631",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "也许"
      }
    ],
    examples: [
      {
        de: "Das Wort „vielleicht“ bedeutet hier „也许“.",
        zh: "“vielleicht”在这里表示“也许”。"
      }
    ],
    teachingOrder: 686,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0632",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "（属于或来源于） 的关于"
      }
    ],
    examples: [
      {
        de: "Das Wort „von“ bedeutet hier „（属于或来源于） 的关于“.",
        zh: "“von”在这里表示“（属于或来源于） 的关于”。"
      }
    ],
    teachingOrder: 687,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0633",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在 … 之前在 … 前面在 … 之前"
      }
    ],
    examples: [
      {
        de: "Das Wort „vor“ bedeutet hier „在 … 之前在 … 前面在 … 之前“.",
        zh: "“vor”在这里表示“在 … 之前在 … 前面在 … 之前”。"
      }
    ],
    teachingOrder: 688,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0635",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "小心"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Vorsicht.",
        zh: "今天我们谈论小心。"
      }
    ],
    teachingOrder: 689,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0636",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "介绍"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns vorstellen.",
        zh: "我们今天想介绍。"
      }
    ],
    teachingOrder: 690,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0638",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "徒步走"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute wandern.",
        zh: "我们今天想徒步走。"
      }
    ],
    teachingOrder: 691,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0639",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "什么时候"
      }
    ],
    examples: [
      {
        de: "Das Wort „wann“ bedeutet hier „什么时候“.",
        zh: "“wann”在这里表示“什么时候”。"
      }
    ],
    teachingOrder: 692,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0640",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "等待"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute warten.",
        zh: "我们今天想等待。"
      }
    ],
    teachingOrder: 693,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0641",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "为什么"
      }
    ],
    examples: [
      {
        de: "Das Wort „warum“ bedeutet hier „为什么“.",
        zh: "“warum”在这里表示“为什么”。"
      }
    ],
    teachingOrder: 694,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0642",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "什么"
      }
    ],
    examples: [
      {
        de: "Das Wort „was“ bedeutet hier „什么“.",
        zh: "“was”在这里表示“什么”。"
      }
    ],
    teachingOrder: 695,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0643",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "什么样的"
      }
    ],
    examples: [
      {
        de: "Das Wort „was für ein“ bedeutet hier „什么样的“.",
        zh: "“was für ein”在这里表示“什么样的”。"
      }
    ],
    teachingOrder: 696,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0644",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "洗"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute uns waschen.",
        zh: "我们今天想洗。"
      }
    ],
    teachingOrder: 697,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0646",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "使 … 感到疼痛"
      }
    ],
    examples: [
      {
        de: "Das Wort „weh tun“ bedeutet hier „使 … 感到疼痛“.",
        zh: "“weh tun”在这里表示“使 … 感到疼痛”。"
      }
    ],
    teachingOrder: 698,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0647",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "女性的"
      }
    ],
    examples: [
      {
        de: "Das Wort „weiblich“ bedeutet hier „女性的“.",
        zh: "“weiblich”在这里表示“女性的”。"
      }
    ],
    teachingOrder: 699,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0649",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "遥远的宽松的"
      }
    ],
    examples: [
      {
        de: "Das Wort „weit“ bedeutet hier „遥远的宽松的“.",
        zh: "“weit”在这里表示“遥远的宽松的”。"
      }
    ],
    teachingOrder: 700,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0650",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "继续；更远"
      }
    ],
    examples: [
      {
        de: "Das Wort „weiter“ bedeutet hier „继续；更远“.",
        zh: "“weiter”在这里表示“继续；更远”。"
      }
    ],
    teachingOrder: 701,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0651",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "哪个"
      }
    ],
    examples: [
      {
        de: "Das Wort „welch-“ bedeutet hier „哪个“.",
        zh: "“welch-”在这里表示“哪个”。"
      }
    ],
    teachingOrder: 702,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0652",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "世界（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Welt.",
        zh: "今天我们谈论世界（单数形式）。"
      }
    ],
    teachingOrder: 703,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0653",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "少"
      }
    ],
    examples: [
      {
        de: "Das Wort „wenig“ bedeutet hier „少“.",
        zh: "“wenig”在这里表示“少”。"
      }
    ],
    teachingOrder: 704,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0654",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "谁"
      }
    ],
    examples: [
      {
        de: "Das Wort „wer“ bedeutet hier „谁“.",
        zh: "“wer”在这里表示“谁”。"
      }
    ],
    teachingOrder: 705,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0655",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "变成；将要"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute werden.",
        zh: "我们今天想变成；将要。"
      }
    ],
    teachingOrder: 706,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0657",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "重要的"
      }
    ],
    examples: [
      {
        de: "Das Wort „wichtig“ bedeutet hier „重要的“.",
        zh: "“wichtig”在这里表示“重要的”。"
      }
    ],
    teachingOrder: 707,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0658",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "怎样；如何"
      }
    ],
    examples: [
      {
        de: "Das Wort „wie“ bedeutet hier „怎样；如何“.",
        zh: "“wie”在这里表示“怎样；如何”。"
      }
    ],
    teachingOrder: 708,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0659",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "重复"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute wiederholen.",
        zh: "我们今天想重复。"
      }
    ],
    teachingOrder: 709,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0660",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "再次通话"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Wiederhören.",
        zh: "今天我们谈论再次通话。"
      }
    ],
    teachingOrder: 710,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0661",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "再次见面"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Wiedersehen.",
        zh: "今天我们谈论再次见面。"
      }
    ],
    teachingOrder: 711,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0662",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "多少"
      }
    ],
    examples: [
      {
        de: "Das Wort „wie viel“ bedeutet hier „多少“.",
        zh: "“wie viel”在这里表示“多少”。"
      }
    ],
    teachingOrder: 712,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0663",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "欢迎"
      }
    ],
    examples: [
      {
        de: "Das Wort „willkommen“ bedeutet hier „欢迎“.",
        zh: "“willkommen”在这里表示“欢迎”。"
      }
    ],
    teachingOrder: 713,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0665",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "我们"
      }
    ],
    examples: [
      {
        de: "Das Wort „wir“ bedeutet hier „我们“.",
        zh: "“wir”在这里表示“我们”。"
      }
    ],
    teachingOrder: 714,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0666",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "知道"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute wissen.",
        zh: "我们今天想知道。"
      }
    ],
    teachingOrder: 715,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0667",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在哪里"
      }
    ],
    examples: [
      {
        de: "Das Wort „wo“ bedeutet hier „在哪里“.",
        zh: "“wo”在这里表示“在哪里”。"
      }
    ],
    teachingOrder: 716,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0668",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "从哪里"
      }
    ],
    examples: [
      {
        de: "Das Wort „woher“ bedeutet hier „从哪里“.",
        zh: "“woher”在这里表示“从哪里”。"
      }
    ],
    teachingOrder: 717,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0669",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "去哪里"
      }
    ],
    examples: [
      {
        de: "Das Wort „wohin“ bedeutet hier „去哪里“.",
        zh: "“wohin”在这里表示“去哪里”。"
      }
    ],
    teachingOrder: 718,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0672",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "要，想，愿意，打算"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute wollen.",
        zh: "我们今天想要，想，愿意，打算。"
      }
    ],
    teachingOrder: 719,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0673",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "单词；话语"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Wort.",
        zh: "今天我们谈论单词；话语。"
      }
    ],
    teachingOrder: 720,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0674",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "好极了，了不起的"
      }
    ],
    examples: [
      {
        de: "Das Wort „wunderbar“ bedeutet hier „好极了，了不起的“.",
        zh: "“wunderbar”在这里表示“好极了，了不起的”。"
      }
    ],
    teachingOrder: 721,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0676",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "时间（单数形式）"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Zeit.",
        zh: "今天我们谈论时间（单数形式）。"
      }
    ],
    teachingOrder: 722,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0677",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "目前"
      }
    ],
    examples: [
      {
        de: "Das Wort „zurzeit“ bedeutet hier „目前“.",
        zh: "“zurzeit”在这里表示“目前”。"
      }
    ],
    teachingOrder: 723,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0678",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "报社"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Zeitung.",
        zh: "今天我们谈论报社。"
      }
    ],
    teachingOrder: 724,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0679",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "香烟"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Zigarette.",
        zh: "今天我们谈论香烟。"
      }
    ],
    teachingOrder: 725,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0682",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "太到 … 去，向"
      }
    ],
    examples: [
      {
        de: "Das Wort „zu“ bedeutet hier „太到 … 去，向“.",
        zh: "“zu”在这里表示“太到 … 去，向”。"
      }
    ],
    teachingOrder: 726,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0683",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "满意的"
      }
    ],
    examples: [
      {
        de: "Das Wort „zufrieden“ bedeutet hier „满意的“.",
        zh: "“zufrieden”在这里表示“满意的”。"
      }
    ],
    teachingOrder: 727,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0685",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "退回"
      }
    ],
    examples: [
      {
        de: "Das Wort „zurück“ bedeutet hier „退回“.",
        zh: "“zurück”在这里表示“退回”。"
      }
    ],
    teachingOrder: 728,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0686",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一起"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute zusammen.",
        zh: "我们今天想一起。"
      }
    ],
    teachingOrder: 729,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0687",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在 … 和 … 之间"
      }
    ],
    examples: [
      {
        de: "Das Wort „zwischen“ bedeutet hier „在 … 和 … 之间“.",
        zh: "“zwischen”在这里表示“在 … 和 … 之间”。"
      }
    ],
    teachingOrder: 730,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-001",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一"
      }
    ],
    examples: [
      {
        de: "Das Wort „1 = eins“ bedeutet hier „一“.",
        zh: "“1 = eins”在这里表示“一”。"
      }
    ],
    teachingOrder: 731,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-002",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二"
      }
    ],
    examples: [
      {
        de: "Das Wort „2 = zwei“ bedeutet hier „二“.",
        zh: "“2 = zwei”在这里表示“二”。"
      }
    ],
    teachingOrder: 732,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-003",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "三"
      }
    ],
    examples: [
      {
        de: "Das Wort „3 = drei“ bedeutet hier „三“.",
        zh: "“3 = drei”在这里表示“三”。"
      }
    ],
    teachingOrder: 733,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-004",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "四"
      }
    ],
    examples: [
      {
        de: "Das Wort „4 = vier“ bedeutet hier „四“.",
        zh: "“4 = vier”在这里表示“四”。"
      }
    ],
    teachingOrder: 734,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-005",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "五"
      }
    ],
    examples: [
      {
        de: "Das Wort „5 = fünf“ bedeutet hier „五“.",
        zh: "“5 = fünf”在这里表示“五”。"
      }
    ],
    teachingOrder: 735,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-006",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "六"
      }
    ],
    examples: [
      {
        de: "Das Wort „6 = sechs“ bedeutet hier „六“.",
        zh: "“6 = sechs”在这里表示“六”。"
      }
    ],
    teachingOrder: 736,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-007",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "七"
      }
    ],
    examples: [
      {
        de: "Das Wort „7 = sieben“ bedeutet hier „七“.",
        zh: "“7 = sieben”在这里表示“七”。"
      }
    ],
    teachingOrder: 737,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-008",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "八"
      }
    ],
    examples: [
      {
        de: "Das Wort „8 = acht“ bedeutet hier „八“.",
        zh: "“8 = acht”在这里表示“八”。"
      }
    ],
    teachingOrder: 738,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-009",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "九"
      }
    ],
    examples: [
      {
        de: "Das Wort „9 = neun“ bedeutet hier „九“.",
        zh: "“9 = neun”在这里表示“九”。"
      }
    ],
    teachingOrder: 739,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-010",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十"
      }
    ],
    examples: [
      {
        de: "Das Wort „10 = zehn“ bedeutet hier „十“.",
        zh: "“10 = zehn”在这里表示“十”。"
      }
    ],
    teachingOrder: 740,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-011",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十一"
      }
    ],
    examples: [
      {
        de: "Das Wort „11 = elf“ bedeutet hier „十一“.",
        zh: "“11 = elf”在这里表示“十一”。"
      }
    ],
    teachingOrder: 741,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-012",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十二"
      }
    ],
    examples: [
      {
        de: "Das Wort „12 = zwölf“ bedeutet hier „十二“.",
        zh: "“12 = zwölf”在这里表示“十二”。"
      }
    ],
    teachingOrder: 742,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-013",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十三"
      }
    ],
    examples: [
      {
        de: "Das Wort „13 = dreizehn“ bedeutet hier „十三“.",
        zh: "“13 = dreizehn”在这里表示“十三”。"
      }
    ],
    teachingOrder: 743,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-014",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十四"
      }
    ],
    examples: [
      {
        de: "Das Wort „14 = vierzehn“ bedeutet hier „十四“.",
        zh: "“14 = vierzehn”在这里表示“十四”。"
      }
    ],
    teachingOrder: 744,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-015",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十五"
      }
    ],
    examples: [
      {
        de: "Das Wort „15 = fünfzehn“ bedeutet hier „十五“.",
        zh: "“15 = fünfzehn”在这里表示“十五”。"
      }
    ],
    teachingOrder: 745,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-016",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十六"
      }
    ],
    examples: [
      {
        de: "Das Wort „16 = sechzehn“ bedeutet hier „十六“.",
        zh: "“16 = sechzehn”在这里表示“十六”。"
      }
    ],
    teachingOrder: 746,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-017",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十七"
      }
    ],
    examples: [
      {
        de: "Das Wort „17 = siebzehn“ bedeutet hier „十七“.",
        zh: "“17 = siebzehn”在这里表示“十七”。"
      }
    ],
    teachingOrder: 747,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-018",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十八"
      }
    ],
    examples: [
      {
        de: "Das Wort „18 = achtzehn“ bedeutet hier „十八“.",
        zh: "“18 = achtzehn”在这里表示“十八”。"
      }
    ],
    teachingOrder: 748,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-019",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十九"
      }
    ],
    examples: [
      {
        de: "Das Wort „19 = neunzehn“ bedeutet hier „十九“.",
        zh: "“19 = neunzehn”在这里表示“十九”。"
      }
    ],
    teachingOrder: 749,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-020",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二十"
      }
    ],
    examples: [
      {
        de: "Das Wort „20 = zwanzig“ bedeutet hier „二十“.",
        zh: "“20 = zwanzig”在这里表示“二十”。"
      }
    ],
    teachingOrder: 750,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-021",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二十一"
      }
    ],
    examples: [
      {
        de: "Das Wort „21 = einundzwanzig“ bedeutet hier „二十一“.",
        zh: "“21 = einundzwanzig”在这里表示“二十一”。"
      }
    ],
    teachingOrder: 751,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-022",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "三十"
      }
    ],
    examples: [
      {
        de: "Das Wort „30 = dreißig“ bedeutet hier „三十“.",
        zh: "“30 = dreißig”在这里表示“三十”。"
      }
    ],
    teachingOrder: 752,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-023",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "四十"
      }
    ],
    examples: [
      {
        de: "Das Wort „40 = vierzig“ bedeutet hier „四十“.",
        zh: "“40 = vierzig”在这里表示“四十”。"
      }
    ],
    teachingOrder: 753,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-024",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "五十"
      }
    ],
    examples: [
      {
        de: "Das Wort „50 = fünfzig“ bedeutet hier „五十“.",
        zh: "“50 = fünfzig”在这里表示“五十”。"
      }
    ],
    teachingOrder: 754,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-025",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "六十"
      }
    ],
    examples: [
      {
        de: "Das Wort „60 = sechzig“ bedeutet hier „六十“.",
        zh: "“60 = sechzig”在这里表示“六十”。"
      }
    ],
    teachingOrder: 755,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-026",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "七十"
      }
    ],
    examples: [
      {
        de: "Das Wort „70 = siebzig“ bedeutet hier „七十“.",
        zh: "“70 = siebzig”在这里表示“七十”。"
      }
    ],
    teachingOrder: 756,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-027",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "八十"
      }
    ],
    examples: [
      {
        de: "Das Wort „80 = achtzig“ bedeutet hier „八十“.",
        zh: "“80 = achtzig”在这里表示“八十”。"
      }
    ],
    teachingOrder: 757,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-028",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "九十"
      }
    ],
    examples: [
      {
        de: "Das Wort „90 = neunzig“ bedeutet hier „九十“.",
        zh: "“90 = neunzig”在这里表示“九十”。"
      }
    ],
    teachingOrder: 758,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-029",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一百"
      }
    ],
    examples: [
      {
        de: "Das Wort „100 = (ein)hundert“ bedeutet hier „一百“.",
        zh: "“100 = (ein)hundert”在这里表示“一百”。"
      }
    ],
    teachingOrder: 759,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-030",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一百零一"
      }
    ],
    examples: [
      {
        de: "Das Wort „101 = hunderteins“ bedeutet hier „一百零一“.",
        zh: "“101 = hunderteins”在这里表示“一百零一”。"
      }
    ],
    teachingOrder: 760,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-031",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二百"
      }
    ],
    examples: [
      {
        de: "Das Wort „200 = zweihundert“ bedeutet hier „二百“.",
        zh: "“200 = zweihundert”在这里表示“二百”。"
      }
    ],
    teachingOrder: 761,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-032",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一千"
      }
    ],
    examples: [
      {
        de: "Das Wort „1.000 = (ein)tausend“ bedeutet hier „一千“.",
        zh: "“1.000 = (ein)tausend”在这里表示“一千”。"
      }
    ],
    teachingOrder: 762,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-033",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一百万"
      }
    ],
    examples: [
      {
        de: "Das Wort „1.000.000 = eine Million“ bedeutet hier „一百万“.",
        zh: "“1.000.000 = eine Million”在这里表示“一百万”。"
      }
    ],
    teachingOrder: 763,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-034",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十亿"
      }
    ],
    examples: [
      {
        de: "Das Wort „1.000.000.000 = eine Milliarde“ bedeutet hier „十亿“.",
        zh: "“1.000.000.000 = eine Milliarde”在这里表示“十亿”。"
      }
    ],
    teachingOrder: 764,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-035",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "第一"
      }
    ],
    examples: [
      {
        de: "Das Wort „das/der/die erste“ bedeutet hier „第一“.",
        zh: "“das/der/die erste”在这里表示“第一”。"
      }
    ],
    teachingOrder: 765,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-036",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "第二"
      }
    ],
    examples: [
      {
        de: "Das Wort „zweite“ bedeutet hier „第二“.",
        zh: "“zweite”在这里表示“第二”。"
      }
    ],
    teachingOrder: 766,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-037",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "第三"
      }
    ],
    examples: [
      {
        de: "Das Wort „dritte“ bedeutet hier „第三“.",
        zh: "“dritte”在这里表示“第三”。"
      }
    ],
    teachingOrder: 767,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-038",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "第四"
      }
    ],
    examples: [
      {
        de: "Das Wort „vierte“ bedeutet hier „第四“.",
        zh: "“vierte”在这里表示“第四”。"
      }
    ],
    teachingOrder: 768,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-numbers-039",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "等等"
      }
    ],
    examples: [
      {
        de: "Das Wort „usw.“ bedeutet hier „等等“.",
        zh: "“usw.”在这里表示“等等”。"
      }
    ],
    teachingOrder: 769,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-dates-040",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二分之一；半"
      }
    ],
    examples: [
      {
        de: "Das Wort „1/2 = ein halb; halb ...“ bedeutet hier „二分之一；半“.",
        zh: "“1/2 = ein halb; halb ...”在这里表示“二分之一；半”。"
      }
    ],
    teachingOrder: 770,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-dates-041",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "四分之一；一刻钟"
      }
    ],
    examples: [
      {
        de: "Das Wort „1/4 = ein Viertel; Viertel ...“ bedeutet hier „四分之一；一刻钟“.",
        zh: "“1/4 = ein Viertel; Viertel ...”在这里表示“四分之一；一刻钟”。"
      }
    ],
    teachingOrder: 771,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-dates-042",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "1999 年"
      }
    ],
    examples: [
      {
        de: "Das Wort „1999 = neunzehnhundertneunundneunzig“ bedeutet hier „1999 年“.",
        zh: "“1999 = neunzehnhundertneunundneunzig”在这里表示“1999 年”。"
      }
    ],
    teachingOrder: 772,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-dates-043",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "2014 年"
      }
    ],
    examples: [
      {
        de: "Das Wort „2014 = zweitausendvierzehn“ bedeutet hier „2014 年“.",
        zh: "“2014 = zweitausendvierzehn”在这里表示“2014 年”。"
      }
    ],
    teachingOrder: 773,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-dates-044",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "今天是 3 月 1 日"
      }
    ],
    examples: [
      {
        de: "Das Wort „heute ist der 1. März“ bedeutet hier „今天是 3 月 1 日“.",
        zh: "“heute ist der 1. März”在这里表示“今天是 3 月 1 日”。"
      }
    ],
    teachingOrder: 774,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-dates-045",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "柏林，2002 年 4 月 12 日"
      }
    ],
    examples: [
      {
        de: "Das Wort „Berlin“ bedeutet hier „柏林，2002 年 4 月 12 日“.",
        zh: "“Berlin”在这里表示“柏林，2002 年 4 月 12 日”。"
      }
    ],
    teachingOrder: 775,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-046",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "零点零三分"
      }
    ],
    examples: [
      {
        de: "Das Wort „0.03 Uhr = null Uhr drei“ bedeutet hier „零点零三分“.",
        zh: "“0.03 Uhr = null Uhr drei”在这里表示“零点零三分”。"
      }
    ],
    teachingOrder: 776,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-047",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "七点十五分"
      }
    ],
    examples: [
      {
        de: "Das Wort „7.15 Uhr = sieben Uhr fünfzehn“ bedeutet hier „七点十五分“.",
        zh: "“7.15 Uhr = sieben Uhr fünfzehn”在这里表示“七点十五分”。"
      }
    ],
    teachingOrder: 777,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-048",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十三点十七分"
      }
    ],
    examples: [
      {
        de: "Das Wort „13.17 Uhr = dreizehn Uhr siebzehn“ bedeutet hier „十三点十七分“.",
        zh: "“13.17 Uhr = dreizehn Uhr siebzehn”在这里表示“十三点十七分”。"
      }
    ],
    teachingOrder: 778,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-049",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二十四点"
      }
    ],
    examples: [
      {
        de: "Das Wort „24.00 Uhr = vierundzwanzig Uhr“ bedeutet hier „二十四点“.",
        zh: "“24.00 Uhr = vierundzwanzig Uhr”在这里表示“二十四点”。"
      }
    ],
    teachingOrder: 779,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-050",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一点"
      }
    ],
    examples: [
      {
        de: "Das Wort „ein Uhr“ bedeutet hier „一点“.",
        zh: "“ein Uhr”在这里表示“一点”。"
      }
    ],
    teachingOrder: 780,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-051",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一点差五分／一点过五分"
      }
    ],
    examples: [
      {
        de: "Das Wort „fünf Minuten vor/nach eins“ bedeutet hier „一点差五分／一点过五分“.",
        zh: "“fünf Minuten vor/nach eins”在这里表示“一点差五分／一点过五分”。"
      }
    ],
    teachingOrder: 781,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-052",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "两点差一刻／两点一刻"
      }
    ],
    examples: [
      {
        de: "Das Wort „Viertel vor/nach zwei“ bedeutet hier „两点差一刻／两点一刻“.",
        zh: "“Viertel vor/nach zwei”在这里表示“两点差一刻／两点一刻”。"
      }
    ],
    teachingOrder: 782,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-clock-time-053",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "两点半"
      }
    ],
    examples: [
      {
        de: "Das Wort „halb drei“ bedeutet hier „两点半“.",
        zh: "“halb drei”在这里表示“两点半”。"
      }
    ],
    teachingOrder: 783,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-time-measures-054",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "秒"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Sekunde.",
        zh: "今天我们谈论秒。"
      }
    ],
    teachingOrder: 784,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-time-measures-055",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "分钟"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Minute.",
        zh: "今天我们谈论分钟。"
      }
    ],
    teachingOrder: 785,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-time-measures-057",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Tag.",
        zh: "今天我们谈论天。"
      }
    ],
    teachingOrder: 786,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-time-measures-058",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "周"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Woche.",
        zh: "今天我们谈论周。"
      }
    ],
    teachingOrder: 787,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-time-measures-059",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "年"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Jahr.",
        zh: "今天我们谈论年。"
      }
    ],
    teachingOrder: 788,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-060",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "工作日；星期中的一天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Wochentag.",
        zh: "今天我们谈论工作日；星期中的一天。"
      }
    ],
    teachingOrder: 789,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-061",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期日"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Sonntag.",
        zh: "今天我们谈论星期日。"
      }
    ],
    teachingOrder: 790,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-062",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期一"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Montag.",
        zh: "今天我们谈论星期一。"
      }
    ],
    teachingOrder: 791,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-063",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期二"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Dienstag.",
        zh: "今天我们谈论星期二。"
      }
    ],
    teachingOrder: 792,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-064",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期三"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Mittwoch.",
        zh: "今天我们谈论星期三。"
      }
    ],
    teachingOrder: 793,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-065",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期四"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Donnerstag.",
        zh: "今天我们谈论星期四。"
      }
    ],
    teachingOrder: 794,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-066",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期五"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Freitag.",
        zh: "今天我们谈论星期五。"
      }
    ],
    teachingOrder: 795,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-067",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "星期六"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Samstag/Sonnabend.",
        zh: "今天我们谈论星期六。"
      }
    ],
    teachingOrder: 796,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-068",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "周末"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über das Wochenende.",
        zh: "今天我们谈论周末。"
      }
    ],
    teachingOrder: 797,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-weekdays-069",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "在周末"
      }
    ],
    examples: [
      {
        de: "Das Wort „am Wochenende“ bedeutet hier „在周末“.",
        zh: "“am Wochenende”在这里表示“在周末”。"
      }
    ],
    teachingOrder: 798,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-070",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "白天；一天"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Tag.",
        zh: "今天我们谈论白天；一天。"
      }
    ],
    teachingOrder: 799,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-071",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "早晨"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Morgen.",
        zh: "今天我们谈论早晨。"
      }
    ],
    teachingOrder: 800,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-072",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "上午"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Vormittag.",
        zh: "今天我们谈论上午。"
      }
    ],
    teachingOrder: 801,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-073",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "中午"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Mittag.",
        zh: "今天我们谈论中午。"
      }
    ],
    teachingOrder: 802,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-074",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "下午"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Nachmittag.",
        zh: "今天我们谈论下午。"
      }
    ],
    teachingOrder: 803,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-075",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "晚上"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Abend.",
        zh: "今天我们谈论晚上。"
      }
    ],
    teachingOrder: 804,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-times-of-day-076",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "夜晚"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Nacht.",
        zh: "今天我们谈论夜晚。"
      }
    ],
    teachingOrder: 805,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-077",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "一月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Januar.",
        zh: "今天我们谈论一月。"
      }
    ],
    teachingOrder: 806,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-078",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "二月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Februar.",
        zh: "今天我们谈论二月。"
      }
    ],
    teachingOrder: 807,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-079",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "三月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den März.",
        zh: "今天我们谈论三月。"
      }
    ],
    teachingOrder: 808,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-080",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "四月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den April.",
        zh: "今天我们谈论四月。"
      }
    ],
    teachingOrder: 809,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-081",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "五月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Mai.",
        zh: "今天我们谈论五月。"
      }
    ],
    teachingOrder: 810,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-082",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "六月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Juni.",
        zh: "今天我们谈论六月。"
      }
    ],
    teachingOrder: 811,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-083",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "七月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Juli.",
        zh: "今天我们谈论七月。"
      }
    ],
    teachingOrder: 812,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-084",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "八月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den August.",
        zh: "今天我们谈论八月。"
      }
    ],
    teachingOrder: 813,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-085",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "九月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den September.",
        zh: "今天我们谈论九月。"
      }
    ],
    teachingOrder: 814,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-086",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Oktober.",
        zh: "今天我们谈论十月。"
      }
    ],
    teachingOrder: 815,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-087",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十一月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den November.",
        zh: "今天我们谈论十一月。"
      }
    ],
    teachingOrder: 816,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-months-088",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "十二月"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über den Dezember.",
        zh: "今天我们谈论十二月。"
      }
    ],
    teachingOrder: 817,
    active: true,
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0547",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开着"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute an sein.",
        zh: "我们今天想开着。"
      }
    ],
    teachingOrder: 818,
    active: false,
    nonQuizReason: "alias-of-parent",
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-alpha-0548",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "开着"
      }
    ],
    examples: [
      {
        de: "Wir möchten heute auf sein.",
        zh: "我们今天想开着。"
      }
    ],
    teachingOrder: 819,
    active: false,
    nonQuizReason: "alias-of-parent",
    reviewStatus: "reviewed"
  },
  {
    entryId: "a1-group-time-measures-056",
    topicIds: [
      "education"
    ],
    senses: [
      {
        senseId: "zh-1",
        zh: "小时"
      }
    ],
    examples: [
      {
        de: "Heute sprechen wir über die Stunde.",
        zh: "今天我们谈论小时。"
      }
    ],
    teachingOrder: 820,
    active: false,
    nonQuizReason: "alias-of-parent",
    reviewStatus: "reviewed"
  }
];
