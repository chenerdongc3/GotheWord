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
        zh: "这张桌子是木制的。",
        target: "Tisch"
      },
      {
        de: "Das Buch liegt auf dem Tisch.",
        zh: "书放在桌子上。",
        target: "Tisch"
      },
      {
        de: "Wir sitzen am Tisch.",
        zh: "我们坐在桌边。",
        target: "Tisch"
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
        zh: "这把椅子很舒服。",
        target: "Stuhl"
      },
      {
        de: "Bitte nimm einen Stuhl.",
        zh: "请拿一把椅子。",
        target: "Stuhl"
      },
      {
        de: "Die Katze sitzt auf dem Stuhl.",
        zh: "猫坐在椅子上。",
        target: "Stuhl"
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
        zh: "窗户开着。",
        target: "Fenster"
      },
      {
        de: "Ich sehe durch das Fenster.",
        zh: "我透过窗户看。",
        target: "Fenster"
      },
      {
        de: "Mach bitte das Fenster zu.",
        zh: "请把窗户关上。",
        target: "Fenster"
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
        zh: "门关着。",
        target: "Tür"
      },
      {
        de: "Jemand steht vor der Tür.",
        zh: "有人站在门前。",
        target: "Tür"
      },
      {
        de: "Öffne bitte die Tür.",
        zh: "请把门打开。",
        target: "Tür"
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
        zh: "厨房很小。",
        target: "Küche"
      },
      {
        de: "Wir kochen in der Küche.",
        zh: "我们在厨房做饭。",
        target: "Küche"
      },
      {
        de: "In der Küche riecht es gut.",
        zh: "厨房里闻起来很香。",
        target: "Küche"
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
        zh: "面包很新鲜。",
        target: "Brot"
      },
      {
        de: "Ich esse Brot zum Frühstück.",
        zh: "我早餐吃面包。",
        target: "Brot"
      },
      {
        de: "Wir kaufen ein Brot.",
        zh: "我们买一个面包。",
        target: "Brot"
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
        zh: "苹果是红色的。",
        target: "Apfel"
      },
      {
        de: "Sie isst einen Apfel.",
        zh: "她吃一个苹果。",
        target: "Apfel"
      },
      {
        de: "Äpfel sind gesund.",
        zh: "苹果很健康。",
        target: "Äpfel"
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
        zh: "水是凉的。",
        target: "Wasser"
      },
      {
        de: "Ich trinke viel Wasser.",
        zh: "我喝很多水。",
        target: "Wasser"
      },
      {
        de: "Ein Glas Wasser, bitte.",
        zh: "请给我一杯水。",
        target: "Wasser"
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
        zh: "咖啡很烫。",
        target: "Kaffee"
      },
      {
        de: "Möchtest du einen Kaffee?",
        zh: "你想喝杯咖啡吗？",
        target: "Kaffee"
      },
      {
        de: "Ich trinke Kaffee ohne Zucker.",
        zh: "我喝不加糖的咖啡。",
        target: "Kaffee"
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
        zh: "我的家人住在柏林。",
        target: "Familie"
      },
      {
        de: "Die Familie isst zusammen.",
        zh: "这家人一起吃饭。",
        target: "Familie"
      },
      {
        de: "Wir besuchen unsere Familie.",
        zh: "我们去看望家人。",
        target: "Familie"
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
        zh: "保罗是我的朋友。",
        target: "Freund"
      },
      {
        de: "Ich treffe einen Freund.",
        zh: "我要见一位朋友。",
        target: "Freund"
      },
      {
        de: "Gute Freunde helfen einander.",
        zh: "好朋友互相帮助。",
        target: "Freunde"
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
        zh: "学校八点开始上课。",
        target: "Schule"
      },
      {
        de: "Mein Sohn geht zur Schule.",
        zh: "我的儿子去上学。",
        target: "Schule"
      },
      {
        de: "Die Schule ist heute geschlossen.",
        zh: "学校今天关门。",
        target: "Schule"
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
        zh: "这本书很有趣。",
        target: "Buch"
      },
      {
        de: "Ich lese ein deutsches Buch.",
        zh: "我读一本德语书。",
        target: "Buch"
      },
      {
        de: "Das Buch liegt im Regal.",
        zh: "书放在书架上。",
        target: "Buch"
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
        zh: "这座城市很古老。",
        target: "Stadt"
      },
      {
        de: "Wir fahren in die Stadt.",
        zh: "我们开车进城。",
        target: "Stadt"
      },
      {
        de: "In der Stadt gibt es viel zu sehen.",
        zh: "城里有很多可看的。",
        target: "Stadt"
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
        zh: "火车站不远。",
        target: "Bahnhof"
      },
      {
        de: "Wir treffen uns am Bahnhof.",
        zh: "我们在火车站见面。",
        target: "Bahnhof"
      },
      {
        de: "Der Zug wartet im Bahnhof.",
        zh: "火车在车站等候。",
        target: "Bahnhof"
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
        zh: "我学习德语。",
        target: "lerne"
      },
      {
        de: "Wir lernen zusammen.",
        zh: "我们一起学习。",
        target: "lernen"
      },
      {
        de: "Er lernt jeden Abend.",
        zh: "他每天晚上学习。",
        target: "lernt"
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
        zh: "我在汉堡工作。",
        target: "arbeite"
      },
      {
        de: "Sie arbeitet heute zu Hause.",
        zh: "她今天在家工作。",
        target: "arbeitet"
      },
      {
        de: "Wir arbeiten bis fünf Uhr.",
        zh: "我们工作到五点。",
        target: "arbeiten"
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
        zh: "我住在慕尼黑。",
        target: "wohne"
      },
      {
        de: "Wo wohnst du?",
        zh: "你住在哪里？",
        target: "wohnst"
      },
      {
        de: "Meine Eltern wohnen auf dem Land.",
        zh: "我的父母住在乡下。",
        target: "wohnen"
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
        zh: "我们七点吃饭。",
        target: "essen"
      },
      {
        de: "Er isst gern Gemüse.",
        zh: "他喜欢吃蔬菜。",
        target: "isst"
      },
      {
        de: "Was möchtest du essen?",
        zh: "你想吃什么？",
        target: "essen"
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
        zh: "我喝茶。",
        target: "trinke"
      },
      {
        de: "Trinkst du genug Wasser?",
        zh: "你喝足够的水吗？",
        target: "Trinkst"
      },
      {
        de: "Wir trinken zusammen Kaffee.",
        zh: "我们一起喝咖啡。",
        target: "trinken"
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
        zh: "我回家。",
        target: "gehe"
      },
      {
        de: "Wir gehen zu Fuß.",
        zh: "我们步行去。",
        target: "gehen"
      },
      {
        de: "Gehst du heute zur Arbeit?",
        zh: "你今天去上班吗？",
        target: "Gehst"
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
        zh: "我乘公交车。",
        target: "fahre"
      },
      {
        de: "Sie fährt gern Fahrrad.",
        zh: "她喜欢骑自行车。",
        target: "fährt"
      },
      {
        de: "Wir fahren morgen nach Köln.",
        zh: "我们明天去科隆。",
        target: "fahren"
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
        zh: "您会说德语吗？",
        target: "Sprechen"
      },
      {
        de: "Wir sprechen über die Reise.",
        zh: "我们谈论这次旅行。",
        target: "sprechen"
      },
      {
        de: "Bitte sprich langsam.",
        zh: "请说慢一点。",
        target: "sprich"
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
        zh: "我理解这个问题。",
        target: "verstehe"
      },
      {
        de: "Verstehst du mich?",
        zh: "你听懂我了吗？",
        target: "Verstehst"
      },
      {
        de: "Er versteht nur ein bisschen Deutsch.",
        zh: "他只懂一点德语。",
        target: "versteht"
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
        de: "Mein Arm tut weh.",
        zh: "我的手臂疼。",
        target: "Arm"
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
        de: "Das Bad ist klein.",
        zh: "浴室很小。",
        target: "Bad"
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
        de: "Ich esse eine Banane.",
        zh: "我在吃一根香蕉。",
        target: "Banane"
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
        de: "Der Zug fährt um acht ab.",
        zh: "火车八点出发。",
        target: "fährt|ab"
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
        zh: "从……起"
      }
    ],
    examples: [
      {
        de: "Ich arbeite ab Montag.",
        zh: "我从星期一开始上班。",
        target: "ab"
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
        de: "Meine Arbeit ist interessant.",
        zh: "我的工作很有趣。",
        target: "Arbeit"
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
        de: "Im Supermarkt gibt es ein Angebot.",
        zh: "超市有特价商品。",
        target: "Angebot"
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
        de: "Schick mir deine Adresse.",
        zh: "把你的地址发给我。",
        target: "Adresse"
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
        de: "Der Baum ist hoch.",
        zh: "这棵树很高。",
        target: "Baum"
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
        de: "Gib mir ein Beispiel.",
        zh: "给我一个例子。",
        target: "Beispiel"
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
        de: "Der Arzt hilft den Patienten.",
        zh: "男医生帮助病人。",
        target: "Arzt"
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
        de: "Ich bade jeden Abend.",
        zh: "我每天晚上洗澡。",
        target: "bade"
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
        zh: "啤酒"
      }
    ],
    examples: [
      {
        de: "Ich trinke ein Bier.",
        zh: "我喝一杯啤酒。",
        target: "Bier"
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
        de: "Die Abfahrt ist um neun Uhr.",
        zh: "出发时间是九点。",
        target: "Abfahrt"
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
        de: "Ich mag Tee, aber ich trinke Kaffee.",
        zh: "我喜欢茶，可是我喝咖啡。",
        target: "aber"
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
        de: "Er ist arbeitslos.",
        zh: "他失业。",
        target: "arbeitslos"
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
        zh: "点餐"
      }
    ],
    examples: [
      {
        de: "Ich bestelle eine Pizza.",
        zh: "我点一份披萨。",
        target: "bestelle"
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
        zh: "信息"
      }
    ],
    examples: [
      {
        de: "Kann ich eine Auskunft bekommen?",
        zh: "我可以得到一条信息吗？",
        target: "Auskunft"
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
        zh: "花"
      }
    ],
    examples: [
      {
        de: "Ich schenke ihr eine Blume.",
        zh: "我送她一朵花。",
        target: "Blume"
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
        de: "Ich mag Obst, zum Beispiel Äpfel.",
        zh: "我喜欢水果，例如苹果。",
        target: "zum Beispiel"
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
        de: "Mein Auge tut weh.",
        zh: "我的眼睛疼。",
        target: "Auge"
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
        de: "Wir sitzen auf dem Balkon.",
        zh: "我们坐在阳台上。",
        target: "Balkon"
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
        de: "Ich esse eine reife Birne.",
        zh: "我吃一颗熟梨。",
        target: "Birne"
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
        de: "Meine Ankunft ist um acht Uhr.",
        zh: "我八点到达。",
        target: "Ankunft"
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
        zh: "交付"
      }
    ],
    examples: [
      {
        de: "Ich gebe das Formular ab.",
        zh: "我递交表格。",
        target: "gebe|ab"
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
        de: "Mein Arbeitsplatz ist sauber.",
        zh: "我的工作场所很干净。",
        target: "Arbeitsplatz"
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
        de: "Ich bezahle die Rechnung.",
        zh: "我付账单。",
        target: "bezahle"
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
        de: "Wir gehen zur Bank.",
        zh: "我们去银行。",
        target: "Bank"
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
        de: "Es sind 20 Grad.",
        zh: "气温是20摄氏度。",
        target: "Grad"
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
        de: "Wir tanzen in der Disco.",
        zh: "我们在迪斯科舞厅跳舞。",
        target: "Disco"
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
        de: "Mein Bein tut weh.",
        zh: "我的腿疼。",
        target: "Bein"
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
        de: "Ich lege mich ins Bett.",
        zh: "我躺在床上。",
        target: "Bett"
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
        de: "Kannst du das Wort buchstabieren?",
        zh: "你能拼写这个词吗？",
        target: "buchstabieren"
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
        de: "Der Aufzug fährt nach oben.",
        zh: "电梯向上运行。",
        target: "Aufzug"
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
        zh: "接走（人）"
      }
    ],
    examples: [
      {
        de: "Ich hole dich ab.",
        zh: "我来接你。",
        target: "hole|ab"
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
        de: "Die Beamte geben Ausweise.",
        zh: "公务员发放证件。",
        target: "Beamte"
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
        zh: "购物"
      }
    ],
    examples: [
      {
        de: "Ich kaufe Brot ein.",
        zh: "我买面包。",
        target: "kaufe|ein"
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
        de: "Ich schreibe einen Brief.",
        zh: "我写一封信。",
        target: "Brief"
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
        zh: "海洋"
      }
    ],
    examples: [
      {
        de: "Das Meer ist heute ruhig.",
        zh: "今天海面很平静。",
        target: "Meer"
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
        zh: "庆祝活动"
      }
    ],
    examples: [
      {
        de: "Wir planen eine Feier.",
        zh: "我们计划一次庆祝活动。",
        target: "Feier"
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
        de: "Mein Bruder spielt Fußball.",
        zh: "我的兄弟踢足球。",
        target: "Bruder"
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
        de: "Der Garten hat viele Blumen.",
        zh: "花园里有很多花。",
        target: "Garten"
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
        zh: "黄油"
      }
    ],
    examples: [
      {
        de: "Ich streiche Butter auf das Brot.",
        zh: "我把黄油抹在面包上。",
        target: "Butter"
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
        de: "Wir machen einen Ausflug.",
        zh: "我们去郊游。",
        target: "Ausflug"
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
        de: "Der Absender steht oben.",
        zh: "寄件人写在上面。",
        target: "Absender"
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
        de: "Mein Beruf ist Lehrer.",
        zh: "我的职业是老师。",
        target: "Beruf"
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
        de: "Ich lade dich ein.",
        zh: "我邀请你。",
        target: "lade|ein"
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
        de: "Die Briefmarke kostet einen Euro.",
        zh: "这枚邮票一欧元。",
        target: "Briefmarke"
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
        de: "Der Regen fällt heute.",
        zh: "今天下雨。",
        target: "Regen"
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
        de: "Wir feiern einen Geburtstag.",
        zh: "我们庆祝生日。",
        target: "feiern"
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
        de: "Meine Ehefrau kocht.",
        zh: "我的妻子做饭。",
        target: "Ehefrau"
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
        de: "Das Haus ist groß.",
        zh: "这座房子很大。",
        target: "Haus"
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
        zh: "口渴"
      }
    ],
    examples: [
      {
        de: "Ich habe Durst.",
        zh: "我口渴。",
        target: "Durst"
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
        de: "Das Auto ist rot.",
        zh: "这辆汽车是红色的。",
        target: "Auto"
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
        de: "Achtung, das ist gefährlich!",
        zh: "注意，这很危险！",
        target: "Achtung"
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
        de: "Der Chef kommt heute.",
        zh: "老板今天来。",
        target: "Chef"
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
        zh: "钱"
      }
    ],
    examples: [
      {
        de: "Ich habe genug Geld für die Fahrkarte.",
        zh: "我的钱够买车票。",
        target: "Geld"
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
        de: "Ich schicke ein Fax.",
        zh: "我发送传真。",
        target: "Fax"
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
        de: "Der See ist tief.",
        zh: "湖很深。",
        target: "See"
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
        de: "Wir sehen abends fern.",
        zh: "我们晚上看电视。",
        target: "sehen|fern"
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
        de: "Mein Ehemann arbeitet.",
        zh: "我的丈夫工作。",
        target: "Ehemann"
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
        de: "Die Hausaufgabe ist schwer.",
        zh: "这份家庭作业很难。",
        target: "Hausaufgabe"
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
        zh: "食物"
      }
    ],
    examples: [
      {
        de: "Das Essen ist warm.",
        zh: "食物是热的。",
        target: "Essen"
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
        de: "Die Autobahn ist schnell.",
        zh: "高速公路很快。",
        target: "Autobahn"
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
        de: "Alle Kinder spielen im Park.",
        zh: "所有孩子都在公园里玩。",
        target: "Alle"
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
        zh: "男性同事"
      }
    ],
    examples: [
      {
        de: "Mein Kollege hilft mir.",
        zh: "我的男同事帮助我。",
        target: "Kollege"
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
        de: "Ich gehe ins Geschäft.",
        zh: "我去商店。",
        target: "Geschäft"
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
        de: "Ich eröffne ein Konto.",
        zh: "我开一个银行账户。",
        target: "Konto"
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
        zh: "太阳"
      }
    ],
    examples: [
      {
        de: "Die Sonne scheint heute.",
        zh: "今天太阳照耀。",
        target: "Sonne"
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
        de: "Ich zeige das Foto.",
        zh: "我展示这张照片。",
        target: "Foto"
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
        de: "Meine Eltern kommen morgen.",
        zh: "我的父母明天来。",
        target: "Eltern"
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
        de: "Die Hausfrau kocht das Essen.",
        zh: "这位家庭主妇在做饭。",
        target: "Hausfrau"
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
        zh: "肉"
      }
    ],
    examples: [
      {
        de: "Ich kaufe frisches Fleisch.",
        zh: "我买新鲜的肉。",
        target: "Fleisch"
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
        zh: "自动售货机"
      }
    ],
    examples: [
      {
        de: "Der Automat gibt Schokolade.",
        zh: "自动售货机出巧克力。",
        target: "Automat"
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
        de: "Ich gehe allein nach Hause.",
        zh: "我独自回家。",
        target: "allein"
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
        de: "Ich mache ein Praktikum.",
        zh: "我在实习。",
        target: "Praktikum"
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
        de: "Ich bestelle etwas von der Karte.",
        zh: "我从菜单点菜。",
        target: "Karte"
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
        de: "Die Polizei kontrolliert den Verkehr.",
        zh: "警察检查交通。",
        target: "Polizei"
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
        zh: "天气"
      }
    ],
    examples: [
      {
        de: "Das Wetter ist schön.",
        zh: "天气很好。",
        target: "Wetter"
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
        zh: "空闲时间"
      }
    ],
    examples: [
      {
        de: "In meiner Freizeit lese ich.",
        zh: "在我的空闲时间我阅读。",
        target: "Freizeit"
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
        de: "Mein Familienname ist Schmidt.",
        zh: "我的姓氏是 Schmidt。",
        target: "Familienname"
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
        de: "Der Hausmann kocht das Abendessen.",
        zh: "这位家庭主夫在做晚饭。",
        target: "Hausmann"
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
        de: "Ich frühstücke jeden Morgen.",
        zh: "我每天早上吃早餐。",
        target: "frühstücke"
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
        de: "Der Aufzug ist automatisch.",
        zh: "电梯是自动的。",
        target: "automatisch"
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
        de: "Ich habe Hunger, also esse ich.",
        zh: "我饿了，所以我吃东西。",
        target: "also"
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
        de: "Ich verdiene zehn Euro.",
        zh: "我赚十欧元。",
        target: "verdiene"
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
        zh: "信用卡"
      }
    ],
    examples: [
      {
        de: "Ich zahle mit der Kreditkarte.",
        zh: "我用信用卡付款。",
        target: "Kreditkarte"
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
        zh: "邮局"
      }
    ],
    examples: [
      {
        de: "Ich gehe zur Post.",
        zh: "我去邮局。",
        target: "Post"
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
        de: "Der Wind weht heute.",
        zh: "今天风在吹。",
        target: "Wind"
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
        de: "Wir spielen Fußball im Park.",
        zh: "我们在公园踢足球。",
        target: "Fußball"
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
        zh: "家庭情况"
      }
    ],
    examples: [
      {
        de: "Mein Familienstand ist ledig.",
        zh: "我的家庭情况是单身。",
        target: "Familienstand"
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
        de: "Mein Sohn geht in den Kindergarten.",
        zh: "我儿子去幼儿园。",
        target: "Kindergarten"
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
        zh: "早饭"
      }
    ],
    examples: [
      {
        de: "Das Frühstück ist fertig.",
        zh: "早饭已经做好了。",
        target: "Frühstück"
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
        zh: "火车"
      }
    ],
    examples: [
      {
        de: "Ich fahre mit der Bahn nach Berlin.",
        zh: "我坐火车去柏林。",
        target: "Bahn"
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
        de: "Das Haus ist alt.",
        zh: "这座房子很老。",
        target: "alt"
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
        de: "Der Verkäufer hilft mir.",
        zh: "男售货员帮助我。",
        target: "Verkäufer"
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
        de: "Ich kaufe ein Brot.",
        zh: "我买了一块面包。",
        target: "kaufe"
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
        de: "Wie lautet deine Postleitzahl?",
        zh: "你的邮政编码是多少？",
        target: "Postleitzahl"
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
        de: "Im Frühling blühen die Blumen.",
        zh: "春天，花儿绽放。",
        target: "Frühling"
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
        de: "Wir gehen ins Kino.",
        zh: "我们去电影院。",
        target: "Kino"
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
        de: "Die Frau liest ein Buch.",
        zh: "这位女士在读一本书。",
        target: "Frau"
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
        de: "Das Licht ist hell.",
        zh: "灯光很亮。",
        target: "Licht"
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
        zh: "饥饿"
      }
    ],
    examples: [
      {
        de: "Ich habe Hunger.",
        zh: "我饿了。",
        target: "Hunger"
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
        de: "Der Zug steht am Bahnsteig.",
        zh: "火车停在站台。",
        target: "Bahnsteig"
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
        de: "Mein Alter ist zwanzig.",
        zh: "我的年龄是二十岁。",
        target: "Alter"
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
        de: "Die Kleidung ist warm.",
        zh: "这件衣服很暖和。",
        target: "Kleidung"
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
        de: "Die Reparatur dauert lange.",
        zh: "修理需要很久。",
        target: "Reparatur"
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
        de: "Im Sommer schwimme ich.",
        zh: "夏天我去游泳。",
        target: "Sommer"
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
        de: "Das Lied ist schön.",
        zh: "这首歌很好听。",
        target: "Lied"
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
        de: "Mein Geburtsjahr ist 1990.",
        zh: "我的出生年份是1990年。",
        target: "Geburtsjahr"
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
        de: "Ich miete ein Fahrrad.",
        zh: "我租了一辆自行车。",
        target: "miete"
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
        zh: "牛奶"
      }
    ],
    examples: [
      {
        de: "Ich trinke morgens Milch.",
        zh: "我早上喝牛奶。",
        target: "Milch"
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
        zh: "公交车"
      }
    ],
    examples: [
      {
        de: "Der Bus fährt um acht Uhr.",
        zh: "公交车在八点发车。",
        target: "Bus"
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
        zh: "在…旁"
      }
    ],
    examples: [
      {
        de: "Das Bild hängt an der Wand.",
        zh: "画挂在墙上。",
        target: "an"
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
        de: "Ich kaufe Brot im Laden.",
        zh: "我在店里买面包。",
        target: "Laden"
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
        zh: "柜台"
      }
    ],
    examples: [
      {
        de: "Ich frage am Schalter nach dem Fahrplan.",
        zh: "我在柜台询问时刻表。",
        target: "Schalter"
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
        de: "Im Herbst fallen die Blätter.",
        zh: "秋天树叶掉落。",
        target: "Herbst"
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
        de: "Wir feiern eine Party am Samstag.",
        zh: "我们星期六举办派对。",
        target: "Party"
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
        de: "Mein Geburtsort ist Berlin.",
        zh: "我的出生地是柏林。",
        target: "Geburtsort"
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
        de: "Die Miete ist vierhundert Euro.",
        zh: "房租是四百欧元。",
        target: "Miete"
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
        zh: "水果"
      }
    ],
    examples: [
      {
        de: "Ich esse jeden Tag Obst.",
        zh: "我每天吃水果。",
        target: "Obst"
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
        de: "Wir buchen ein Doppelzimmer im Hotel.",
        zh: "我们在酒店预订双人客房。",
        target: "Doppelzimmer"
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
        zh: "提供"
      }
    ],
    examples: [
      {
        de: "Der Verkäufer bietet mir Hilfe an.",
        zh: "店员向我提供帮助。",
        target: "bietet|an"
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
        de: "Ich probiere den Schuh im Laden.",
        zh: "我在店里试这只鞋。",
        target: "Schuh"
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
        de: "Ich telefoniere mit meiner Mutter.",
        zh: "我给妈妈打电话。",
        target: "telefoniere"
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
        de: "Im Winter schneit es oft.",
        zh: "冬天经常下雪。",
        target: "Winter"
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
        de: "Wir schwimmen im See.",
        zh: "我们在湖里游泳。",
        target: "schwimmen"
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
        de: "Mein Geburtstag ist im März.",
        zh: "我的生日在三月。",
        target: "Geburtstag"
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
        de: "Die Möbel stehen im Wohnzimmer.",
        zh: "家具摆在客厅里。",
        target: "Möbel"
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
        de: "Das Öl steht im Schrank.",
        zh: "油放在柜子里。",
        target: "Öl"
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
        de: "Ich buche ein Einzelzimmer.",
        zh: "我预订一个单人客房。",
        target: "Einzelzimmer"
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
        zh: "其他的"
      }
    ],
    examples: [
      {
        de: "Ich nehme das andere Buch.",
        zh: "我拿那本别的书。",
        target: "andere"
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
        de: "Die Speisekarte liegt auf dem Tisch.",
        zh: "菜单放在桌子上。",
        target: "Speisekarte"
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
        zh: "电话"
      }
    ],
    examples: [
      {
        de: "Das Telefon klingelt laut.",
        zh: "电话响得很大。",
        target: "Telefon"
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
        zh: "玩"
      }
    ],
    examples: [
      {
        de: "Wir spielen im Park.",
        zh: "我们在公园玩。",
        target: "spielen"
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
        zh: "祖父母"
      }
    ],
    examples: [
      {
        de: "Meine Großeltern besuchen uns.",
        zh: "我的祖父母来拜访我们。",
        target: "Großeltern"
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
        de: "Der Schlüssel liegt auf dem Tisch.",
        zh: "钥匙放在桌子上。",
        target: "Schlüssel"
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
        de: "Der Preis ist zu hoch.",
        zh: "价格太高。",
        target: "Preis"
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
        de: "Der Fahrer öffnet die Tür.",
        zh: "司机打开门。",
        target: "Fahrer"
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
        de: "Der Kurs fängt um neun Uhr an.",
        zh: "课程九点开始。",
        target: "fängt|an"
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
        de: "Die Tasche ist rot.",
        zh: "包是红色的。",
        target: "Tasche"
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
        de: "Die Vorwahl beginnt mit 0.",
        zh: "区号以0开头。",
        target: "Vorwahl"
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
        zh: "体育"
      }
    ],
    examples: [
      {
        de: "Sport macht mir Spaß.",
        zh: "体育让我开心。",
        target: "Sport"
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
        zh: "祖母"
      }
    ],
    examples: [
      {
        de: "Meine Großmutter kocht Suppe.",
        zh: "我的祖母做汤。",
        target: "Großmutter"
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
        de: "Wir gehen ins Schwimmbad.",
        zh: "我们去游泳池。",
        target: "Schwimmbad"
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
        zh: "米饭"
      }
    ],
    examples: [
      {
        de: "Ich esse Reis.",
        zh: "我吃米饭。",
        target: "Reis"
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
        de: "Ich kaufe eine Fahrkarte.",
        zh: "我买一张车票。",
        target: "Fahrkarte"
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
        zh: "开始"
      }
    ],
    examples: [
      {
        de: "Der Film hat einen guten Anfang.",
        zh: "这部电影有一个好的开始。",
        target: "Anfang"
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
        de: "Sie verkauft ein Buch.",
        zh: "她卖一本书。",
        target: "verkauft"
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
        de: "Der Zoll prüft das Gepäck.",
        zh: "海关检查行李。",
        target: "Zoll"
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
        zh: "跳舞"
      }
    ],
    examples: [
      {
        de: "Wir tanzen im Garten.",
        zh: "我们在花园里跳舞。",
        target: "tanzen"
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
        zh: "祖父"
      }
    ],
    examples: [
      {
        de: "Mein Großvater liest.",
        zh: "我的祖父在读书。",
        target: "Großvater"
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
        de: "Das Sofa ist blau.",
        zh: "沙发是蓝色的。",
        target: "Sofa"
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
        zh: "餐馆"
      }
    ],
    examples: [
      {
        de: "Wir essen im Restaurant.",
        zh: "我们在餐馆吃饭。",
        target: "Restaurant"
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
        de: "Ich fahre mit dem Fahrrad.",
        zh: "我骑自行车。",
        target: "Fahrrad"
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
        de: "Klicken Sie bitte das Bild an.",
        zh: "请点击图片。",
        target: "Klicken|an"
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
        zh: "付款"
      }
    ],
    examples: [
      {
        de: "Wir wollen jetzt zahlen.",
        zh: "我们现在想付款。",
        target: "zahlen"
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
        zh: "俱乐部"
      }
    ],
    examples: [
      {
        de: "Der Verein trifft sich.",
        zh: "俱乐部正在聚会。",
        target: "Verein"
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
        de: "Ihr Haar ist lang.",
        zh: "她的头发很长。",
        target: "Haar"
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
        de: "Die Treppe ist neu.",
        zh: "楼梯是新的。",
        target: "Treppe"
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
        de: "Ich trinke einen Saft.",
        zh: "我喝一杯果汁。",
        target: "Saft"
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
        zh: "起飞"
      }
    ],
    examples: [
      {
        de: "Der Abflug ist um acht Uhr.",
        zh: "起飞时间是八点。",
        target: "Abflug"
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
        de: "Wir kommen um neun an.",
        zh: "我们九点到达。",
        target: "kommen|an"
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
        de: "Das kostet 1 Euro.",
        zh: "这要一欧元。",
        target: "1 Euro"
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
        de: "Das Kind spielt im Garten.",
        zh: "这个孩子在花园里玩。",
        target: "Kind"
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
        de: "Wir vermieten die Wohnung.",
        zh: "我们出租这套公寓。",
        target: "vermieten"
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
        de: "Ich esse einen Salat.",
        zh: "我吃一份沙拉。",
        target: "Salat"
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
        de: "Der Flughafen ist groß.",
        zh: "机场很大。",
        target: "Flughafen"
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
        de: "Bitte kreuzen Sie das Kästchen an.",
        zh: "请在方框里勾选。",
        target: "kreuzen|an"
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
        de: "Das kostet 100 Cent.",
        zh: "这要一百欧分。",
        target: "100 Cent"
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
        de: "Mein Kopf tut weh.",
        zh: "我的头疼。",
        target: "Kopf"
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
        de: "Der Vermieter ruft an.",
        zh: "房东打电话来。",
        target: "Vermieter"
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
        zh: "盐"
      }
    ],
    examples: [
      {
        de: "Ich brauche Salz für die Suppe.",
        zh: "我需要盐来做汤。",
        target: "Salz"
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
        de: "Das Flugzeug startet bald.",
        zh: "飞机很快起飞。",
        target: "Flugzeug"
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
        de: "Er macht das Licht an.",
        zh: "他打开灯。",
        target: "macht|an"
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
        de: "Ein Meter ist ein gängiges Längenmaß.",
        zh: "一米是常用的长度单位。",
        target: "Ein Meter"
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
        de: "Der Mann liest ein Buch.",
        zh: "那位男人在读一本书。",
        target: "Mann"
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
        zh: "公寓"
      }
    ],
    examples: [
      {
        de: "Die Wohnung liegt im Stadtzentrum.",
        zh: "这间公寓位于市中心。",
        target: "Wohnung"
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
        de: "Der Tee duftet nach Kräutern.",
        zh: "这杯茶散发着草本的香味。",
        target: "Tee"
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
        zh: "行李"
      }
    ],
    examples: [
      {
        de: "Das Gepäck steht neben dem Ausgang.",
        zh: "行李放在出口旁边。",
        target: "Gepäck"
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
        zh: "报名"
      }
    ],
    examples: [
      {
        de: "Ich melde mich für den Kurs an.",
        zh: "我报名参加了课程。",
        target: "melde|an"
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
        de: "Ein Zentimeter ist kaum sichtbar.",
        zh: "一厘米几乎看不见。",
        target: "Ein Zentimeter"
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
        de: "Der Mensch braucht täglich Wasser.",
        zh: "人每天需要水。",
        target: "Mensch"
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
        de: "Die Tomate schmeckt frisch.",
        zh: "番茄尝起来很新鲜。",
        target: "Tomate"
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
        de: "Das Hotel bietet kostenloses WLAN.",
        zh: "这家酒店提供免费无线网络。",
        target: "Hotel"
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
        de: "Die Anmeldung ist noch offen.",
        zh: "报名表仍然开放。",
        target: "Anmeldung"
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
        de: "Ein Meter fünfzehn ist die Breite des Regals.",
        zh: "一米十五是书架的宽度。",
        target: "Ein Meter fünfzehn"
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
        de: "Die Mutter liest eine Geschichte vor.",
        zh: "妈妈在给孩子朗读故事。",
        target: "Mutter"
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
        de: "Der Wein schmeckt fruchtig.",
        zh: "这杯酒尝起来果香。",
        target: "Wein"
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
        de: "Der Koffer liegt im Schrank.",
        zh: "行李箱放在柜子里。",
        target: "Koffer"
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
        de: "Die Anrede im Brief ist förmlich.",
        zh: "信中的称呼是正式的。",
        target: "Anrede"
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
        de: "Wir fahren zweihundert Kilometer nach Hamburg.",
        zh: "我们开车去汉堡，路程二百公里。",
        target: "zweihundert Kilometer"
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
        de: "Mein Name ist Anna.",
        zh: "我的名字是安娜。",
        target: "Name"
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
        de: "Ich habe einen Pass.",
        zh: "我有一本护照。",
        target: "Pass"
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
        zh: "打电话"
      }
    ],
    examples: [
      {
        de: "Ich rufe dich an.",
        zh: "我给你打电话。",
        target: "rufe|an"
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
        de: "Der Teppich ist ein Quadratmeter groß.",
        zh: "这块地毯有一平方米。",
        target: "ein Quadratmeter"
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
        de: "Mein Partner arbeitet hier.",
        zh: "我的男性合作伙伴在这里工作。",
        target: "Partner"
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
        de: "Ich gehe Rad fahren.",
        zh: "我去骑自行车。",
        target: "Rad fahren"
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
        zh: "来电"
      }
    ],
    examples: [
      {
        de: "Ich bekomme einen Anruf.",
        zh: "我收到一个来电。",
        target: "Anruf"
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
        de: "Es ist ein Grad unter Null.",
        zh: "气温是零下一度。",
        target: "ein Grad unter Null"
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
        zh: "伴侣"
      }
    ],
    examples: [
      {
        de: "Meine Partnerin studiert Medizin.",
        zh: "我的伴侣在学医。",
        target: "Partnerin"
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
        de: "Wir reisen nach Berlin.",
        zh: "我们去柏林旅行。",
        target: "reisen"
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
        de: "Der Anrufbeantworter ist voll.",
        zh: "电话答录机已满。",
        target: "Anrufbeantworter"
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
        de: "Heute ist vier Grad über Null.",
        zh: "今天气温是零上四度。",
        target: "vier Grad über Null"
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
        de: "Meine Schwester heißt Lisa.",
        zh: "我的姐妹叫莉萨。",
        target: "Schwester"
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
        de: "Die Reise dauert drei Tage.",
        zh: "这次旅行持续三天。",
        target: "Reise"
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
        de: "Die Ansage ist laut.",
        zh: "广播通知很响。",
        target: "Ansage"
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
        de: "Das ist ein Prozent Rabatt.",
        zh: "这是百分之一的折扣。",
        target: "ein Prozent"
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
        de: "Mein Sohn spielt im Garten.",
        zh: "我的儿子在花园里玩。",
        target: "Sohn"
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
        de: "Das Reisebüro hat günstige Tickets.",
        zh: "旅行社有便宜的票。",
        target: "Reisebüro"
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
        zh: "换乘"
      }
    ],
    examples: [
      {
        de: "Der Anschluss kommt in fünf Minuten.",
        zh: "换乘将在五分钟后到达。",
        target: "Anschluss"
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
        de: "Ein Liter Wasser kostet zwei Euro.",
        zh: "一升水的价格是两欧元。",
        target: "Ein Liter"
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
        de: "Meine Tochter liest ein Buch.",
        zh: "我的女儿在读一本书。",
        target: "Tochter"
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
        zh: "旅行指南"
      }
    ],
    examples: [
      {
        de: "Der Reiseführer zeigt die Stadtkarte.",
        zh: "旅行指南展示了城市地图。",
        target: "Reiseführer"
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
        de: "Bitte das Gerät an sein lassen.",
        zh: "请把设备保持开启。",
        target: "an sein"
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
        de: "Ein Gramm Zucker kostet fünf Cent.",
        zh: "一克糖的价格是五分钱。",
        target: "Ein Gramm"
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
        de: "Mein Vater kocht gern.",
        zh: "我的父亲喜欢做饭。",
        target: "Vater"
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
        zh: "轻轨"
      }
    ],
    examples: [
      {
        de: "Ich fahre mit der S-Bahn.",
        zh: "我乘坐S-Bahn。",
        target: "S-Bahn"
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
        de: "Er kann nicht sofort antworten.",
        zh: "他不能马上回答。",
        target: "antworten"
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
        de: "Ein Pfund Äpfel kostet drei Euro.",
        zh: "一磅苹果的价格是三欧元。",
        target: "Ein Pfund"
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
        de: "Meine Verwandte kommen morgen.",
        zh: "我的亲属明天来。",
        target: "Verwandte"
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
        zh: "不在"
      }
    ],
    examples: [
      {
        de: "Sie will nicht mehr weg sein.",
        zh: "她不想再离开。",
        target: "weg sein"
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
        zh: "答案"
      }
    ],
    examples: [
      {
        de: "Die Antwort ist richtig.",
        zh: "答案是正确的。",
        target: "Antwort"
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
        de: "Ich kaufe ein Kilo Äpfel.",
        zh: "我买了一公斤苹果。",
        target: "ein Kilo"
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
        zh: "名字"
      }
    ],
    examples: [
      {
        de: "Mein Vorname ist Anna.",
        zh: "我的名字是安娜。",
        target: "Vorname"
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
        de: "Die Straße ist breit.",
        zh: "这条街道很宽。",
        target: "Straße"
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
        zh: "告示"
      }
    ],
    examples: [
      {
        de: "Die Anzeige im Fenster ist neu.",
        zh: "窗户上的告示是新的。",
        target: "Anzeige"
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
        de: "Der Mantel ist schwarz.",
        zh: "这件外套是黑色的。",
        target: "schwarz"
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
        de: "Deutschland liegt in Europa.",
        zh: "德国位于欧洲。",
        target: "Deutschland"
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
        de: "Die Straßenbahn fährt heute pünktlich.",
        zh: "有轨电车今天准时。",
        target: "Straßenbahn"
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
        de: "Ich ziehe mich schnell an.",
        zh: "我快速穿好衣服。",
        target: "ziehe|an"
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
        de: "Der Himmel ist grau.",
        zh: "天空是灰色的。",
        target: "grau"
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
        de: "Der Deutsche trinkt Kaffee.",
        zh: "这位德国人喝咖啡。",
        target: "Deutsche"
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
        de: "Das Taxi kommt gleich.",
        zh: "出租车马上就来。",
        target: "Taxi"
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
        zh: "公寓"
      }
    ],
    examples: [
      {
        de: "Das Apartment ist klein.",
        zh: "这间公寓很小。",
        target: "Apartment"
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
        de: "Das T-Shirt ist blau.",
        zh: "这件T恤是蓝色的。",
        target: "blau"
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
        zh: "一个德国人"
      }
    ],
    examples: [
      {
        de: "Ein Deutscher spricht Englisch.",
        zh: "一个德国人说英语。",
        target: "Ein Deutscher"
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
        de: "Das Ticket kostet fünf Euro.",
        zh: "这张票要五欧元。",
        target: "Ticket"
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
        zh: "食欲"
      }
    ],
    examples: [
      {
        de: "Ich habe keinen Appetit.",
        zh: "我没有食欲。",
        target: "Appetit"
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
        de: "Der Apfel ist grün.",
        zh: "这个苹果是绿色的。",
        target: "grün"
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
        zh: "德国的；德语的"
      }
    ],
    examples: [
      {
        de: "Ich bin deutsch.",
        zh: "我是德国人。",
        target: "deutsch"
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
        zh: "假期"
      }
    ],
    examples: [
      {
        de: "Wir machen Urlaub.",
        zh: "我们去度假。",
        target: "Urlaub"
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
        de: "Ich habe auch Hunger.",
        zh: "我也饿。",
        target: "auch"
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
        zh: "白色的"
      }
    ],
    examples: [
      {
        de: "Das T-Shirt ist weiß.",
        zh: "这件T恤是白色的。",
        target: "weiß"
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
        de: "Europa liegt im Westen.",
        zh: "欧洲在西边。",
        target: "Europa"
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
        de: "Mein Zimmer ist klein.",
        zh: "我的房间很小。",
        target: "Zimmer"
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
        zh: "在……上"
      }
    ],
    examples: [
      {
        de: "Die Tasche liegt auf dem Stuhl.",
        zh: "包放在椅子上。",
        target: "auf"
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
        zh: "红色的"
      }
    ],
    examples: [
      {
        de: "Die Rose ist rot.",
        zh: "玫瑰是红色的。",
        target: "rot"
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
        de: "Er ist ein Europäer.",
        zh: "他是欧洲人。",
        target: "Europäer"
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
        de: "Der Zug kommt pünktlich.",
        zh: "火车准时到达。",
        target: "Zug"
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
        de: "Die Aufgabe ist leicht.",
        zh: "这项任务很容易。",
        target: "Aufgabe"
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
        zh: "黄色的"
      }
    ],
    examples: [
      {
        de: "Der Ball ist gelb.",
        zh: "球是黄色的。",
        target: "gelb"
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
        de: "Das Essen ist europäisch.",
        zh: "这道菜是欧洲风味的。",
        target: "europäisch"
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
        de: "Wir fahren nach Norden.",
        zh: "我们向北行驶。",
        target: "Norden"
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
        de: "Hör auf zu reden.",
        zh: "请停止说话。",
        target: "Hör|auf"
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
        zh: "棕色的"
      }
    ],
    examples: [
      {
        de: "Der Tisch ist braun.",
        zh: "桌子是棕色的。",
        target: "braun"
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
        zh: "说明自己的来源或国籍"
      }
    ],
    examples: [
      {
        de: "Die Angabe der eigenen Herkunft oder Nationalität steht im Formular.",
        zh: "表格里有填写本人来源或国籍的栏目。",
        target: "Angabe der eigenen Herkunft oder Nationalität"
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
        de: "Im Süden ist es warm.",
        zh: "南方很暖。",
        target: "Süden"
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
        zh: "打开（状态）"
      }
    ],
    examples: [
      {
        de: "Der Herd ist auf.",
        zh: "炉子是开的。",
        target: "auf"
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
        zh: "国家"
      }
    ],
    examples: [
      {
        de: "Das Land ist klein.",
        zh: "这个国家很小。",
        target: "Land"
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
        de: "Im Westen ist es kühl.",
        zh: "西方很凉。",
        target: "Westen"
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
        de: "Ich stehe um sieben auf.",
        zh: "我七点起床。",
        target: "stehe|auf"
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
        zh: "土耳其"
      }
    ],
    examples: [
      {
        de: "Die Türkei liegt in Asien.",
        zh: "土耳其位于亚洲。",
        target: "Türkei"
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
        de: "Im Osten ist es sonnig.",
        zh: "东方很阳光。",
        target: "Osten"
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
        zh: "来自"
      }
    ],
    examples: [
      {
        de: "Ich komme aus Berlin.",
        zh: "我来自柏林。",
        target: "aus"
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
        zh: "芬兰"
      }
    ],
    examples: [
      {
        de: "Finnland liegt im Norden.",
        zh: "芬兰位于北部。",
        target: "Finnland"
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
        de: "Bitte das Formular ausfüllen.",
        zh: "请填写表格。",
        target: "ausfüllen"
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
        zh: "墨西哥"
      }
    ],
    examples: [
      {
        de: "Mexiko hat warme Strände.",
        zh: "墨西哥有温暖的海滩。",
        target: "Mexiko"
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
        de: "Der Ausgang ist rechts.",
        zh: "出口在右边。",
        target: "Ausgang"
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
        zh: "国外"
      }
    ],
    examples: [
      {
        de: "Ich reise ins Ausland.",
        zh: "我去国外旅行。",
        target: "Ausland"
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
        de: "Der Ausländer spricht Deutsch.",
        zh: "这位外国人说德语。",
        target: "Ausländer"
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
        de: "Das Essen ist ausländisch.",
        zh: "这食物是外国的。",
        target: "ausländisch"
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
        zh: "关掉"
      }
    ],
    examples: [
      {
        de: "Ich mache das Licht aus.",
        zh: "我把灯关掉。",
        target: "mache|aus"
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
        zh: "陈述"
      }
    ],
    examples: [
      {
        de: "Seine Aussage war klar.",
        zh: "他的陈述很清楚。",
        target: "Aussage"
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
        de: "Er sieht müde aus.",
        zh: "他看起来很累。",
        target: "sieht|aus"
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
        zh: "关机"
      }
    ],
    examples: [
      {
        de: "Der Fernseher ist aus.",
        zh: "电视关机了。",
        target: "ist|aus"
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
        zh: "下车"
      }
    ],
    examples: [
      {
        de: "Ich steige an der Haltestelle aus.",
        zh: "我在站台下车。",
        target: "steige|aus"
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
        de: "Ich zeige meinen Ausweis.",
        zh: "我出示我的证件。",
        target: "Ausweis"
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
        zh: "脱下"
      }
    ],
    examples: [
      {
        de: "Ich ziehe mich zu Hause aus.",
        zh: "我在家里脱衣服。",
        target: "ziehe|aus"
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
        de: "Das Baby schläft friedlich.",
        zh: "宝宝安静地睡着。",
        target: "Baby"
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
        de: "Wir gehen in die Bäckerei.",
        zh: "我们去面包店。",
        target: "Bäckerei"
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
        zh: "很快"
      }
    ],
    examples: [
      {
        de: "Wir kommen bald zurück.",
        zh: "我们很快回来。",
        target: "bald"
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
        de: "Wir treffen uns in der Bar.",
        zh: "我们在酒吧见面。",
        target: "Bar"
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
        de: "Mein Bauch tut weh.",
        zh: "我的肚子疼。",
        target: "Bauch"
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
        zh: "意味着"
      }
    ],
    examples: [
      {
        de: "Was bedeutet das Wort?",
        zh: "这个词是什么意思？",
        target: "bedeutet"
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
        zh: "开始"
      }
    ],
    examples: [
      {
        de: "Der Film beginnt um acht.",
        zh: "电影八点开始。",
        target: "beginnt"
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
        zh: "在…地点/时间"
      }
    ],
    examples: [
      {
        de: "Ich warte bei der Schule.",
        zh: "我在学校等候。",
        target: "bei"
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
        zh: "两个"
      }
    ],
    examples: [
      {
        de: "Beide Kinder lachen.",
        zh: "两个孩子在笑。",
        target: "beide"
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
        zh: "著名的"
      }
    ],
    examples: [
      {
        de: "Der Sänger ist sehr bekannt.",
        zh: "这位歌手非常有名。",
        target: "bekannt"
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
        de: "Ich treffe meine Bekannte heute.",
        zh: "我今天见我的熟人。",
        target: "Bekannte"
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
        de: "Ich habe eine Erkältung bekommen.",
        zh: "我得了感冒。",
        target: "bekommen"
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
        de: "Ich benutze das Handy.",
        zh: "我使用这部手机。",
        target: "benutze"
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
        zh: "占用的"
      }
    ],
    examples: [
      {
        de: "Das Büro ist besetzt.",
        zh: "办公室已被占用。",
        target: "besetzt"
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
        de: "Wir wollen das Museum besichtigen.",
        zh: "我们想参观博物馆。",
        target: "besichtigen"
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
        de: "Dieses Buch ist besser.",
        zh: "这本书更好。",
        target: "besser"
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
        de: "Paul ist mein bester Freund.",
        zh: "保罗是我最好的朋友。",
        target: "bester"
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
        zh: "拜访"
      }
    ],
    examples: [
      {
        de: "Ich möchte meine Tante besuchen.",
        zh: "我想拜访我的阿姨。",
        target: "besuchen"
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
        de: "Das Bild ist schön.",
        zh: "这幅画很漂亮。",
        target: "Bild"
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
        de: "Das T-Shirt ist billig.",
        zh: "这件 T 恤很便宜。",
        target: "billig"
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
        zh: "直到"
      }
    ],
    examples: [
      {
        de: "Wir warten bis morgen.",
        zh: "我们等到明天。",
        target: "bis"
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
        zh: "一点儿"
      }
    ],
    examples: [
      {
        de: "Ich bin ein bisschen müde.",
        zh: "我有点儿累。",
        target: "bisschen"
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
        de: "Bitte, setz dich hin.",
        zh: "请坐。",
        target: "Bitte"
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
        zh: "请求"
      }
    ],
    examples: [
      {
        de: "Ich habe eine Bitte.",
        zh: "我有一个请求。",
        target: "Bitte"
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
        zh: "请求"
      }
    ],
    examples: [
      {
        de: "Kann ich dich um Hilfe bitten?",
        zh: "我可以请你帮忙吗？",
        target: "bitten"
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
        de: "Der Kaffee ist bitter.",
        zh: "咖啡是苦的。",
        target: "bitter"
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
        zh: "停留"
      }
    ],
    examples: [
      {
        de: "Ich bleibe zu Hause.",
        zh: "我待在家里。",
        target: "bleibe"
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
        de: "Der Bleistift liegt auf dem Tisch.",
        zh: "铅笔在桌子上。",
        target: "Bleistift"
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
        zh: "目光"
      }
    ],
    examples: [
      {
        de: "Ich habe einen kurzen Blick.",
        zh: "我扫了一眼。",
        target: "Blick"
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
        zh: "纸张"
      }
    ],
    examples: [
      {
        de: "Der Bogen liegt auf dem Tisch.",
        zh: "这张纸在桌子上。",
        target: "Bogen"
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
        zh: "生气的"
      }
    ],
    examples: [
      {
        de: "Er ist heute böse.",
        zh: "他今天生气。",
        target: "böse"
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
        zh: "需要"
      }
    ],
    examples: [
      {
        de: "Ich brauche ein Buch.",
        zh: "我需要一本书。",
        target: "brauche"
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
        de: "Der Weg ist breit.",
        zh: "道路很宽阔。",
        target: "breit"
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
        de: "Ich bringe das Buch.",
        zh: "我把书带来。",
        target: "bringe"
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
        de: "Das Brötchen ist frisch.",
        zh: "小面包是新鲜的。",
        target: "Brötchen"
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
        de: "Der Buchstabe A ist groß.",
        zh: "字母A是大写的。",
        target: "Buchstabe"
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
        de: "Das Café ist offen.",
        zh: "咖啡馆是开的。",
        target: "Café"
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
        zh: "光盘"
      }
    ],
    examples: [
      {
        de: "Die CD spielt Musik.",
        zh: "光盘播放音乐。",
        target: "CD"
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
        de: "Das Buch kostet ca. 5 Euro.",
        zh: "这本书大约5欧元。",
        target: "ca."
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
        de: "Der Computer ist neu.",
        zh: "计算机是新的。",
        target: "Computer"
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
        zh: "那里"
      }
    ],
    examples: [
      {
        de: "Ich bin jetzt da.",
        zh: "我现在在那里。",
        target: "da"
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
        de: "Die Dame kauft Brot.",
        zh: "这位女士买面包。",
        target: "Dame"
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
        de: "Der Stuhl steht daneben.",
        zh: "椅子就在旁边。",
        target: "daneben"
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
        de: "Wir danken euch.",
        zh: "我们感谢你们。",
        target: "danken"
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
        zh: "感谢（名词）"
      }
    ],
    examples: [
      {
        de: "Vielen Dank für deine Hilfe.",
        zh: "非常感谢你的帮助。",
        target: "Dank"
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
        de: "Danke, das ist nett.",
        zh: "谢谢，这很好。",
        target: "danke"
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
        zh: "然后"
      }
    ],
    examples: [
      {
        de: "Wir gehen dann nach Hause.",
        zh: "我们随后回家。",
        target: "dann"
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
        de: "Welches Datum ist heute?",
        zh: "今天是哪一天？",
        target: "Datum"
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
        de: "Der Film wird zwei Stunden dauern.",
        zh: "电影将持续两个小时。",
        target: "dauern"
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
        de: "Ist das dein Buch?",
        zh: "这是你的书吗？",
        target: "dein"
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
        zh: "因为"
      }
    ],
    examples: [
      {
        de: "Ich bleibe zu Hause, denn es regnet.",
        zh: "我待在家里，因为下雨。",
        target: "denn"
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
        zh: "这个（定冠词）"
      }
    ],
    examples: [
      {
        de: "Der Mann trägt einen Hut.",
        zh: "这位男士戴着帽子。",
        target: "der"
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
        zh: "你（宾格）"
      }
    ],
    examples: [
      {
        de: "Ich sehe dich.",
        zh: "我看见你。",
        target: "dich"
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
        de: "Dies ist mein Stift.",
        zh: "这是我的笔。",
        target: "Dies"
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
        zh: "你（与格）"
      }
    ],
    examples: [
      {
        de: "Ich gebe dir das Buch.",
        zh: "我把书给你。",
        target: "dir"
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
        de: "Der Doktor kommt heute.",
        zh: "这位男博士今天来。",
        target: "Doktor"
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
        de: "Das Dorf liegt am Fluss.",
        zh: "这个村庄在河边。",
        target: "Dorf"
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
        zh: "那里"
      }
    ],
    examples: [
      {
        de: "Das Buch liegt dort.",
        zh: "书在那儿。",
        target: "dort"
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
        de: "Wir spielen draußen.",
        zh: "我们在外面玩。",
        target: "draußen"
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
        de: "Ich drucke das Bild.",
        zh: "我打印这张图片。",
        target: "drucke"
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
        de: "Der Drucker ist neu.",
        zh: "这台打印机是新的。",
        target: "Drucker"
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
        zh: "按"
      }
    ],
    examples: [
      {
        de: "Bitte drücken Sie hier.",
        zh: "请在这里按。",
        target: "drücken"
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
        zh: "穿过"
      }
    ],
    examples: [
      {
        de: "Wir gehen durch den Park.",
        zh: "我们穿过公园。",
        target: "durch"
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
        de: "Die Durchsage war laut.",
        zh: "广播通知很响。",
        target: "Durchsage"
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
        de: "Du darfst hier sitzen.",
        zh: "你可以坐在这里。",
        target: "darfst"
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
        de: "Ich dusche jeden Morgen.",
        zh: "我每天早上洗澡。",
        target: "dusche"
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
        de: "Die Dusche ist klein.",
        zh: "淋浴间很小。",
        target: "Dusche"
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
        zh: "角落"
      }
    ],
    examples: [
      {
        de: "Wir treffen uns in der Ecke.",
        zh: "我们在角落见面。",
        target: "Ecke"
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
        de: "Das Ei ist frisch.",
        zh: "鸡蛋是新鲜的。",
        target: "Ei"
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
        de: "Ich habe es heute eilig.",
        zh: "我今天赶时间。",
        target: "eilig"
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
        zh: "一个"
      }
    ],
    examples: [
      {
        de: "Ein Mann kommt.",
        zh: "一个男人来了。",
        target: "Ein"
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
        zh: "简单的"
      }
    ],
    examples: [
      {
        de: "Das ist einfach.",
        zh: "这很简单。",
        target: "einfach"
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
        de: "Der Eingang ist offen.",
        zh: "入口是开的。",
        target: "Eingang"
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
        de: "Ich habe eine Einladung bekommen.",
        zh: "我收到了一个邀请函。",
        target: "Einladung"
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
        de: "Komm bitte einmal später.",
        zh: "请稍后再来一次。",
        target: "einmal"
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
        de: "Ich steige jetzt ein.",
        zh: "我现在上车。",
        target: "steige"
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
        de: "Der Eintritt kostet fünf Euro.",
        zh: "入场费是五欧元。",
        target: "Eintritt"
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
        de: "Ich schreibe eine E‑Mail.",
        zh: "我写一封电子邮件。",
        target: "E‑Mail"
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
        de: "Der Empfänger liest die Nachricht.",
        zh: "收件人阅读信息。",
        target: "Empfänger"
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
        de: "Ich empfehle dir das Buch.",
        zh: "我向你推荐这本书。",
        target: "empfehle"
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
        de: "Der Film endet um acht.",
        zh: "电影在八点结束。",
        target: "endet"
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
        de: "Das Ende ist sehr traurig.",
        zh: "结局非常悲伤。",
        target: "Ende"
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
        de: "Entschuldige bitte das Geräusch.",
        zh: "请原谅这个噪音。",
        target: "Entschuldige"
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
        de: "Entschuldigung, ich bin zu spät.",
        zh: "对不起，我迟到了。",
        target: "Entschuldigung"
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
        de: "Er kommt aus Berlin.",
        zh: "他来自柏林。",
        target: "er"
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
        de: "Das Ergebnis ist richtig.",
        zh: "结果是正确的。",
        target: "Ergebnis"
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
        de: "Kannst du das bitte erklären?",
        zh: "你能解释一下吗？",
        target: "erklären"
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
        de: "Erlauben Sie das bitte?",
        zh: "您允许吗？",
        target: "Erlauben"
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
        de: "Erwachsene zahlen mehr.",
        zh: "成年人付得更多。",
        target: "Erwachsene"
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
        de: "Ich erzähle dir eine Geschichte.",
        zh: "我给你讲一个故事。",
        target: "erzähle"
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
        de: "Es ist kalt heute.",
        zh: "今天很冷。",
        target: "es"
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
        de: "Ist das euer Buch?",
        zh: "这是你们的书吗？",
        target: "euer"
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
        de: "Die Antwort ist falsch.",
        zh: "答案是错误的。",
        target: "falsch"
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
        de: "Welche Farbe hat das Auto?",
        zh: "这辆车是什么颜色？",
        target: "Farbe"
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
        de: "Mir fehlt das Salz.",
        zh: "我缺盐。",
        target: "fehlt"
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
        de: "Ich habe einen Fehler gemacht.",
        zh: "我犯了一个错误。",
        target: "Fehler"
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
        zh: "完成的"
      }
    ],
    examples: [
      {
        de: "Der Kuchen ist fertig.",
        zh: "蛋糕已经做好了。",
        target: "fertig"
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
        de: "Das Feuer brennt im Kamin.",
        zh: "壁炉里的火在燃烧。",
        target: "Feuer"
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
        zh: "发烧"
      }
    ],
    examples: [
      {
        de: "Sie hat hohes Fieber.",
        zh: "她发高烧。",
        target: "Fieber"
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
        zh: "电影"
      }
    ],
    examples: [
      {
        de: "Wir sehen einen Film.",
        zh: "我们在看一部电影。",
        target: "Film"
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
        zh: "找到"
      }
    ],
    examples: [
      {
        de: "Ich finde den Schlüssel.",
        zh: "我找到了钥匙。",
        target: "finde"
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
        de: "Meine Mutter arbeitet in einer Firma.",
        zh: "我妈妈在一家公司工作。",
        target: "Firma"
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
        de: "Der Fisch ist frisch.",
        zh: "这条鱼很新鲜。",
        target: "Fisch"
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
        de: "Die Flasche ist leer.",
        zh: "瓶子是空的。",
        target: "Flasche"
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
        zh: "飞"
      }
    ],
    examples: [
      {
        de: "Vögel fliegen im Himmel.",
        zh: "鸟在天空中飞。",
        target: "fliegen"
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
        de: "Der Flug fliegt um 10 Uhr ab.",
        zh: "航班在上午10点起飞。",
        target: "fliegt|ab"
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
        de: "Ich fülle das Formular aus.",
        zh: "我填写这张表格。",
        target: "Formular"
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
        de: "Ich frage den Lehrer.",
        zh: "我向老师提问。",
        target: "frage"
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
        de: "Hast du eine Frage?",
        zh: "你有问题吗？",
        target: "Frage"
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
        zh: "空着的"
      }
    ],
    examples: [
      {
        de: "Der Sitz ist frei.",
        zh: "座位是空的。",
        target: "frei"
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
        zh: "陌生的"
      }
    ],
    examples: [
      {
        de: "Das ist ein fremdes Wort.",
        zh: "这是一个陌生的词。",
        target: "fremdes"
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
        zh: "高兴"
      }
    ],
    examples: [
      {
        de: "Ich freue mich sehr.",
        zh: "我很高兴。",
        target: "freue"
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
        zh: "以前"
      }
    ],
    examples: [
      {
        de: "Früher war ich Schüler.",
        zh: "以前我还是学生。",
        target: "Früher"
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
        de: "Die Führung beginnt um neun.",
        zh: "导览在九点开始。",
        target: "Führung"
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
        zh: "为了"
      }
    ],
    examples: [
      {
        de: "Das Geschenk ist für dich.",
        zh: "这份礼物是给你的。",
        target: "für"
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
        zh: "脚"
      }
    ],
    examples: [
      {
        de: "Mein Fuß tut weh.",
        zh: "我的脚疼。",
        target: "Fuß"
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
        de: "Der Gast kommt morgen.",
        zh: "客人明天来。",
        target: "Gast"
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
        zh: "给"
      }
    ],
    examples: [
      {
        de: "Ich gebe dir einen Stift.",
        zh: "我把笔给你。",
        target: "gebe"
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
        de: "Ich bin 1990 geboren.",
        zh: "我1990年出生。",
        target: "geboren"
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
        de: "Der Film gefällt mir.",
        zh: "这部电影我喜欢。",
        target: "gefällt"
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
        zh: "对抗"
      }
    ],
    examples: [
      {
        de: "Der Ball fliegt gegen die Wand.",
        zh: "球撞向墙壁。",
        target: "gegen"
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
        de: "Wem gehören diese Stifte?",
        zh: "这些笔属于谁？",
        target: "gehören"
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
        zh: "蔬菜"
      }
    ],
    examples: [
      {
        de: "Ich kaufe frisches Gemüse.",
        zh: "我买新鲜的蔬菜。",
        target: "Gemüse"
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
        zh: "恰好"
      }
    ],
    examples: [
      {
        de: "Ich komme gerade nach Hause.",
        zh: "我刚回家。",
        target: "gerade"
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
        zh: "直走"
      }
    ],
    examples: [
      {
        de: "Gehen Sie bitte geradeaus.",
        zh: "请直走。",
        target: "geradeaus"
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
        zh: "喜欢"
      }
    ],
    examples: [
      {
        de: "Ich trinke gern Tee.",
        zh: "我喜欢喝茶。",
        target: "gern"
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
        de: "Das Geschenk ist schön.",
        zh: "这份礼物很漂亮。",
        target: "Geschenk"
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
        de: "Meine Geschwister wohnen in Berlin.",
        zh: "我的兄弟姐妹住在柏林。",
        target: "Geschwister"
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
        de: "Wir führen ein kurzes Gespräch.",
        zh: "我们进行一次简短的谈话。",
        target: "Gespräch"
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
        de: "Es regnete gestern stark.",
        zh: "昨天雨下得很大。",
        target: "gestern"
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
        de: "Mein Opa ist gestorben.",
        zh: "我的爷爷去世了。",
        target: "gestorben"
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
        de: "Ein kaltes Getränk bitte.",
        zh: "请来一杯冰饮料。",
        target: "Getränk"
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
        de: "Das Gewicht ist fünf Kilo.",
        zh: "重量是五公斤。",
        target: "Gewicht"
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
        zh: "赢得"
      }
    ],
    examples: [
      {
        de: "Wir wollen im Spiel gewinnen.",
        zh: "我们想在游戏中获胜。",
        target: "gewinnen"
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
        de: "Ein Glas Wasser bitte.",
        zh: "请来一杯水。",
        target: "Glas"
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
        de: "Ich will dir glauben.",
        zh: "我想相信你。",
        target: "glauben"
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
        zh: "马上"
      }
    ],
    examples: [
      {
        de: "Ich komme gleich.",
        zh: "我马上来。",
        target: "gleich"
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
        de: "Der Zug steht am Gleis 3.",
        zh: "火车停在三号站台。",
        target: "Gleis"
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
        zh: "运气"
      }
    ],
    examples: [
      {
        de: "Ich habe heute Glück.",
        zh: "我今天运气好。",
        target: "Glück"
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
        de: "Ich bin heute glücklich.",
        zh: "我今天很幸福。",
        target: "glücklich"
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
        zh: "祝贺"
      }
    ],
    examples: [
      {
        de: "Herzlichen Glückwunsch zum Geburtstag!",
        zh: "衷心祝你生日快乐！",
        target: "Glückwunsch"
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
        de: "Wir gratulieren dir zum Erfolg.",
        zh: "我们祝贺你的成功。",
        target: "gratulieren"
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
        de: "Wir grillen am Samstag.",
        zh: "我们周六烧烤。",
        target: "grillen"
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
        de: "Das Haus ist sehr groß.",
        zh: "这座房子很大。",
        target: "groß"
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
        de: "Welche Größe passt dir?",
        zh: "哪个尺码适合你？",
        target: "Größe"
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
        de: "Wir sind eine kleine Gruppe.",
        zh: "我们是一小组。",
        target: "Gruppe"
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
        zh: "问候"
      }
    ],
    examples: [
      {
        de: "Ein herzlicher Gruß an dich.",
        zh: "向你致以诚挚的问候。",
        target: "Gruß"
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
        de: "Der Ausweis ist noch gültig.",
        zh: "这张证件仍然有效。",
        target: "gültig"
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
        de: "Das Angebot ist sehr günstig.",
        zh: "这个优惠非常便宜。",
        target: "günstig"
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
        zh: "好的"
      }
    ],
    examples: [
      {
        de: "Das Essen schmeckt gut.",
        zh: "这道菜味道好。",
        target: "gut"
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
        de: "Wir haben ein neues Auto.",
        zh: "我们有一辆新车。",
        target: "haben"
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
        de: "Ich kaufe frisches Hähnchen.",
        zh: "我买新鲜的鸡肉。",
        target: "Hähnchen"
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
        de: "Wir buchen Halbpension im Hotel.",
        zh: "我们在酒店预订半膳住宿。",
        target: "Halbpension"
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
        de: "Wir treffen uns in der Halle.",
        zh: "我们在大厅碰面。",
        target: "Halle"
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
        de: "Hallo, ich bin Anna.",
        zh: "你好，我是安娜。",
        target: "Hallo"
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
        zh: "保持"
      }
    ],
    examples: [
      {
        de: "Bitte halten Sie die Tür offen.",
        zh: "请把门保持打开。",
        target: "halten"
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
        zh: "公交站"
      }
    ],
    examples: [
      {
        de: "Die Haltestelle ist gleich hier.",
        zh: "公交站就在这里。",
        target: "Haltestelle"
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
        de: "Ich habe mir die Hand verletzt.",
        zh: "我的手受伤了。",
        target: "Hand"
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
        de: "Mein Handy ist leer.",
        zh: "我的手机没电了。",
        target: "Handy"
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
        de: "Meine Heimat ist Berlin.",
        zh: "我的家乡是柏林。",
        target: "Heimat"
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
        de: "Wir heiraten im Juni.",
        zh: "我们在六月结婚。",
        target: "heiraten"
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
        zh: "叫"
      }
    ],
    examples: [
      {
        de: "Wie heißen Sie?",
        zh: "您叫什么？",
        target: "heißen"
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
        de: "Kannst du mir helfen?",
        zh: "你能帮我吗？",
        target: "helfen"
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
        de: "Das Zimmer ist hell.",
        zh: "房间很明亮。",
        target: "hell"
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
        de: "Der Herd ist neu.",
        zh: "炉灶是新的。",
        target: "Herd"
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
        de: "Guten Morgen, Herr Müller.",
        zh: "早上好，穆勒先生。",
        target: "Herr"
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
        zh: "衷心"
      }
    ],
    examples: [
      {
        de: "Wir danken Ihnen herzlich.",
        zh: "我们衷心感谢您。",
        target: "herzlich"
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
        de: "Heute ist es warm.",
        zh: "今天很暖。",
        target: "heute"
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
        zh: "这里"
      }
    ],
    examples: [
      {
        de: "Hier ist das Buch.",
        zh: "书在这里。",
        target: "hier"
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
        de: "Kannst du mir bitte Hilfe geben?",
        zh: "你能给我帮助吗？",
        target: "Hilfe"
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
        de: "Der Ball liegt hinten.",
        zh: "球在后面。",
        target: "hinten"
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
        de: "Mein Hobby ist Lesen.",
        zh: "我的爱好是阅读。",
        target: "Hobby"
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
        de: "Der Turm ist hoch.",
        zh: "这座塔很高。",
        target: "hoch"
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
        de: "Wir feiern die Hochzeit.",
        zh: "我们庆祝婚礼。",
        target: "Hochzeit"
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
        de: "Kannst du das Buch holen?",
        zh: "你能把书拿来吗？",
        target: "holen"
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
        zh: "听"
      }
    ],
    examples: [
      {
        de: "Kannst du mich hören?",
        zh: "你能听见我吗？",
        target: "hören"
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
        de: "Der Hund schläft.",
        zh: "那只狗在睡觉。",
        target: "Hund"
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
        de: "Ich komme heute etwas später.",
        zh: "我今天会晚一点儿来。",
        target: "Ich"
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
        zh: "她（属格）/他（与格）/他（宾格）"
      }
    ],
    examples: [
      {
        de: "Ich gebe ihr das Buch.",
        zh: "我把书给她。",
        target: "ihr"
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
        de: "Er kommt immer pünktlich.",
        zh: "他总是准时来。",
        target: "immer"
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
        de: "Das Buch ist in der Tasche.",
        zh: "书在口袋里。",
        target: "in"
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
        de: "Die Information ist wichtig.",
        zh: "这条信息很重要。",
        target: "Information"
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
        de: "Die Schule organisiert ein internationales Fest.",
        zh: "学校组织了一场国际文化节。",
        target: "internationales"
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
        zh: "互联网"
      }
    ],
    examples: [
      {
        de: "Ich nutze jeden Tag das Internet.",
        zh: "我每天都使用互联网。",
        target: "Internet"
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
        zh: "是的，真的，的确"
      }
    ],
    examples: [
      {
        de: "Das ist ja richtig.",
        zh: "是的，没错。",
        target: "ja"
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
        zh: "外套"
      }
    ],
    examples: [
      {
        de: "Ich trage eine warme Jacke.",
        zh: "我穿着一件暖和的外套。",
        target: "Jacke"
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
        de: "Jeder Schüler hat ein Buch.",
        zh: "每个学生都有一本书。",
        target: "Jeder"
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
        de: "Ich komme jetzt gleich.",
        zh: "我现在马上来。",
        target: "jetzt"
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
        zh: "工作"
      }
    ],
    examples: [
      {
        de: "Mein Vater hat einen neuen Job.",
        zh: "我父亲有一份新工作。",
        target: "Job"
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
        de: "Jugendliche treffen sich im Park.",
        zh: "青少年在公园里相聚。",
        target: "Jugendliche"
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
        de: "Der Mann ist noch jung.",
        zh: "这个男人还很年轻。",
        target: "jung"
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
        de: "Der Junge liest ein Buch.",
        zh: "男孩在读一本书。",
        target: "Junge"
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
        zh: "坏的"
      }
    ],
    examples: [
      {
        de: "Der Stuhl ist kaputt.",
        zh: "这把椅子坏了。",
        target: "kaputt"
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
        de: "Die Kartoffel ist frisch.",
        zh: "这颗土豆是新鲜的。",
        target: "Kartoffel"
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
        de: "Ich bezahle an der Kasse.",
        zh: "我在收银台付款。",
        target: "Kasse"
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
        zh: "没有"
      }
    ],
    examples: [
      {
        de: "Ich habe kein Geld.",
        zh: "我没有钱。",
        target: "kein"
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
        zh: "认识，了解"
      }
    ],
    examples: [
      {
        de: "Ich kenne Berlin gut.",
        zh: "我很了解柏林。",
        target: "kenne"
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
        zh: "认识（初次）"
      }
    ],
    examples: [
      {
        de: "Ich möchte dich kennenlernen.",
        zh: "我想认识你。",
        target: "kennenlernen"
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
        zh: "报刊亭"
      }
    ],
    examples: [
      {
        de: "Der Kiosk verkauft Zeitungen.",
        zh: "报刊亭卖报纸。",
        target: "Kiosk"
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
        de: "Das ist klar, ich helfe dir.",
        zh: "当然，我帮你。",
        target: "klar"
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
        zh: "班级"
      }
    ],
    examples: [
      {
        de: "Meine Klasse ist groß.",
        zh: "我的班级很大。",
        target: "Klasse"
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
        de: "Das Haus ist klein.",
        zh: "这座房子很小。",
        target: "klein"
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
        zh: "烹调"
      }
    ],
    examples: [
      {
        de: "Ich koche Suppe.",
        zh: "我在煮汤。",
        target: "koche"
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
        zh: "来到"
      }
    ],
    examples: [
      {
        de: "Er kommt nach Hause.",
        zh: "他回家。",
        target: "kommt"
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
        zh: "能够"
      }
    ],
    examples: [
      {
        de: "Ich kann schwimmen.",
        zh: "我会游泳。",
        target: "kann"
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
        de: "Das Buch kostet fünf Euro.",
        zh: "这本书价值五欧元。",
        target: "kostet"
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
        zh: "生病的"
      }
    ],
    examples: [
      {
        de: "Er ist krank.",
        zh: "他生病了。",
        target: "krank"
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
        de: "Ich kriege ein Geschenk.",
        zh: "我得到一份礼物。",
        target: "kriege"
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
        zh: "蛋糕"
      }
    ],
    examples: [
      {
        de: "Der Kuchen ist süß.",
        zh: "这块蛋糕很甜。",
        target: "Kuchen"
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
        de: "Der Kugelschreiber schreibt gut.",
        zh: "这支圆珠笔写得好。",
        target: "Kugelschreiber"
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
        de: "Der Kühlschrank ist leer.",
        zh: "冰箱是空的。",
        target: "Kühlschrank"
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
        zh: "文化的"
      }
    ],
    examples: [
      {
        de: "Das Museum ist kulturell interessant.",
        zh: "这座博物馆在文化上很有趣。",
        target: "kulturell"
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
        zh: "照顾"
      }
    ],
    examples: [
      {
        de: "Ich will mich um das Kind kümmern.",
        zh: "我想照顾这个孩子。",
        target: "kümmern"
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
        zh: "顾客"
      }
    ],
    examples: [
      {
        de: "Der Kunde kauft Brot.",
        zh: "这位顾客买面包。",
        target: "Kunde"
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
        de: "Der Kurs beginnt um neun.",
        zh: "课程在九点开始。",
        target: "Kurs"
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
        zh: "短的"
      }
    ],
    examples: [
      {
        de: "Der Film ist kurz.",
        zh: "这部电影很短。",
        target: "kurz"
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
        de: "Wir lachen zusammen.",
        zh: "我们一起笑。",
        target: "lachen"
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
        de: "Das Land ist schön.",
        zh: "这个国家很美。",
        target: "Land"
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
        zh: "长的"
      }
    ],
    examples: [
      {
        de: "Der Flur ist lang.",
        zh: "走廊很长。",
        target: "lang"
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
        zh: "很久"
      }
    ],
    examples: [
      {
        de: "Ich warte lange.",
        zh: "我等很久。",
        target: "lange"
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
        de: "Der Zug ist langsam.",
        zh: "火车很慢。",
        target: "langsam"
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
        zh: "走路"
      }
    ],
    examples: [
      {
        de: "Ich laufe jeden Tag.",
        zh: "我每天走路。",
        target: "laufe"
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
        zh: "响亮的"
      }
    ],
    examples: [
      {
        de: "Der Hund ist laut.",
        zh: "那只狗很响亮。",
        target: "laut"
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
        de: "Ich lebe in Berlin.",
        zh: "我住在柏林。",
        target: "lebe"
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
        de: "Das Leben ist kurz.",
        zh: "生活很短。",
        target: "Leben"
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
        de: "Die Lebensmittel sind frisch.",
        zh: "这些食品很新鲜。",
        target: "Lebensmittel"
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
        de: "Sie ist ledig.",
        zh: "她未婚。",
        target: "ledig"
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
        zh: "平放"
      }
    ],
    examples: [
      {
        de: "Ich lege das Buch auf den Tisch.",
        zh: "我把书放在桌子上。",
        target: "lege"
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
        de: "Der Lehrer erklärt das.",
        zh: "男老师解释这个。",
        target: "Lehrer"
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
        zh: "轻的"
      }
    ],
    examples: [
      {
        de: "Der Koffer ist leicht.",
        zh: "这个箱子很轻。",
        target: "leicht"
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
        de: "Leider regnet es.",
        zh: "可惜下雨了。",
        target: "leider"
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
        de: "Bitte sprich leise.",
        zh: "请低声说话。",
        target: "leise"
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
        de: "Ich lese ein Buch.",
        zh: "我在读一本书。",
        target: "lese"
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
        zh: "上一个的"
      }
    ],
    examples: [
      {
        de: "Letzte Woche war ich krank.",
        zh: "我上周生病了。",
        target: "Letzte"
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
        de: "Die Leute trinken Kaffee.",
        zh: "人们喝咖啡。",
        target: "Leute"
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
        de: "Liebe Anna, wie geht es dir?",
        zh: "亲爱的安娜，你好吗？",
        target: "Liebe"
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
        de: "Ich will Deutsch lieben.",
        zh: "我想热爱德语。",
        target: "lieben"
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
        de: "Ich trinke lieber Tee.",
        zh: "我宁愿喝茶。",
        target: "lieber"
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
        de: "Mein Lieblingsbuch liegt auf dem Tisch.",
        zh: "我最喜欢的书放在桌上。",
        target: "Lieblingsbuch"
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
        zh: "位于；躺着"
      }
    ],
    examples: [
      {
        de: "Das Buch soll hier liegen.",
        zh: "书应该放在这里。",
        target: "liegen"
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
        de: "Der Stuhl steht links.",
        zh: "椅子在左边。",
        target: "links"
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
        de: "Der Lkw fährt schnell.",
        zh: "卡车开得很快。",
        target: "Lkw"
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
        de: "Das Lokal hat Pizza.",
        zh: "这家店有披萨。",
        target: "Lokal"
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
        de: "Die Lösung ist einfach.",
        zh: "答案很简单。",
        target: "Lösung"
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
        de: "Der Film ist lustig.",
        zh: "这部电影很有趣。",
        target: "lustig"
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
        de: "Wir machen Hausaufgaben.",
        zh: "我们做作业。",
        target: "machen"
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
        de: "Das Mädchen singt.",
        zh: "女孩在唱歌。",
        target: "Mädchen"
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
        de: "Man spricht hier Deutsch.",
        zh: "这里人们说德语。",
        target: "Man"
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
        de: "Der Lehrer ist männlich.",
        zh: "老师是男性。",
        target: "männlich"
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
        de: "Die Maschine ist neu.",
        zh: "这台机器是新的。",
        target: "Maschine"
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
        de: "Ich habe mehr Äpfel.",
        zh: "我有更多的苹果。",
        target: "mehr"
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
        de: "Das ist mein Buch.",
        zh: "这是我的书。",
        target: "mein"
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
        de: "Er kommt meist pünktlich.",
        zh: "他通常准时来。",
        target: "meist"
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
        de: "Ich gehe mit Anna.",
        zh: "我和安娜一起去。",
        target: "mit"
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
        de: "Ich bringe das Buch mit.",
        zh: "我把书带来。",
        target: "bringe|mit"
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
        de: "Ich komme mit.",
        zh: "我一起去。",
        target: "komme|mit"
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
        de: "Ich mache mit.",
        zh: "我参加。",
        target: "mache|mit"
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
        de: "Ich nehme den Regenschirm mit.",
        zh: "我把雨伞带走。",
        target: "nehme|mit"
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
        de: "Die Bank steht in der Mitte.",
        zh: "这张长椅在中间。",
        target: "Mitte"
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
        de: "Wir möchten ein Eis.",
        zh: "我们想要一个冰淇淋。",
        target: "möchten"
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
        de: "Wir mögen Musik.",
        zh: "我们喜欢音乐。",
        target: "mögen"
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
        zh: "可行的"
      }
    ],
    examples: [
      {
        de: "Ein Termin am Montag ist möglich.",
        zh: "可以约在星期一。",
        target: "möglich"
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
        de: "Einen Moment bitte.",
        zh: "请稍等。",
        target: "Moment"
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
        de: "Morgen fahre ich nach Berlin.",
        zh: "明天我去柏林。",
        target: "morgen"
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
        de: "Ich bin müde.",
        zh: "我很累。",
        target: "müde"
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
        zh: "嘴巴"
      }
    ],
    examples: [
      {
        de: "Der Mund ist offen.",
        zh: "嘴巴是张开的。",
        target: "Mund"
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
        de: "Ich muss heute arbeiten.",
        zh: "我今天必须工作。",
        target: "muss"
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
        zh: "…之后；去…"
      }
    ],
    examples: [
      {
        de: "Wir fahren nach Berlin.",
        zh: "我们开车去柏林。",
        target: "nach"
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
        de: "Das ist das nächste Haus.",
        zh: "这是下一栋房子。",
        target: "nächste"
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
        zh: "拿，取，乘，服用"
      }
    ],
    examples: [
      {
        de: "Ich nehme den Bus.",
        zh: "我乘坐公交车。",
        target: "nehme"
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
        de: "Nein, ich komme nicht.",
        zh: "不，我不来。",
        target: "Nein"
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
        de: "Das Auto ist neu.",
        zh: "这辆车是新的。",
        target: "neu"
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
        de: "Ich habe nicht genug.",
        zh: "我没有足够的。",
        target: "nicht"
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
        de: "Ich habe nichts.",
        zh: "我什么都没有。",
        target: "nichts"
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
        zh: "从不"
      }
    ],
    examples: [
      {
        de: "Ich esse nie Fleisch.",
        zh: "我从不吃肉。",
        target: "nie"
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
        de: "Ich habe noch Zeit.",
        zh: "我还有时间。",
        target: "noch"
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
        de: "Das ist normal.",
        zh: "这很正常。",
        target: "normal"
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
        de: "Meine Nummer ist fünf.",
        zh: "我的号码是五。",
        target: "Nummer"
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
        de: "Ich habe nur ein Buch.",
        zh: "我只有一本书。",
        target: "nur"
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
        de: "Das Bild hängt oben.",
        zh: "画挂在上面。",
        target: "oben"
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
        de: "Möchtest du Tee oder Kaffee?",
        zh: "你想喝茶还是咖啡？",
        target: "oder"
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
        zh: "打开（门、窗等）"
      }
    ],
    examples: [
      {
        de: "Ich öffne die Tür.",
        zh: "我打开门。",
        target: "öffne"
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
        zh: "已打开的"
      }
    ],
    examples: [
      {
        de: "Die Tür ist geöffnet.",
        zh: "门是打开的。",
        target: "geöffnet"
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
        de: "Ich gehe oft spazieren.",
        zh: "我经常散步。",
        target: "oft"
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
        zh: "没有；不带"
      }
    ],
    examples: [
      {
        de: "Ich esse das Brot ohne Butter.",
        zh: "我吃面包不抹黄油。",
        target: "ohne"
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
        zh: "祖母"
      }
    ],
    examples: [
      {
        de: "Meine Oma kocht Suppe.",
        zh: "我的奶奶做汤。",
        target: "Oma"
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
        zh: "祖父"
      }
    ],
    examples: [
      {
        de: "Mein Opa liest die Zeitung.",
        zh: "我的爷爷读报纸。",
        target: "Opa"
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
        zh: "秩序"
      }
    ],
    examples: [
      {
        de: "Bitte halte Ordnung im Zimmer.",
        zh: "请保持房间整洁。",
        target: "Ordnung"
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
        zh: "地点"
      }
    ],
    examples: [
      {
        de: "Der Bahnhof ist ein Ort.",
        zh: "火车站是一个地点。",
        target: "Ort"
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
        de: "Ich schreibe auf Papier.",
        zh: "我在纸上写字。",
        target: "Papier"
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
        zh: "文件"
      }
    ],
    examples: [
      {
        de: "Ich bringe meine Papiere mit.",
        zh: "我把我的文件带上。",
        target: "Papiere"
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
        de: "Wir machen eine Pause.",
        zh: "我们稍作休息。",
        target: "Pause"
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
        zh: "计划"
      }
    ],
    examples: [
      {
        de: "Ich habe einen Plan.",
        zh: "我有一个计划。",
        target: "Plan"
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
        zh: "位置"
      }
    ],
    examples: [
      {
        de: "Gib mir einen Platz.",
        zh: "请给我一个座位。",
        target: "Platz"
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
        de: "Ich bestelle Pommes frites.",
        zh: "我点炸薯条。",
        target: "Pommes frites"
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
        de: "Ich gehe zur Praxis.",
        zh: "我去诊所。",
        target: "Praxis"
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
        de: "Das ist ein Problem.",
        zh: "这是一个问题。",
        target: "Problem"
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
        zh: "宣传册"
      }
    ],
    examples: [
      {
        de: "Ich nehme den Prospekt am Schalter.",
        zh: "我从柜台拿了宣传册。",
        target: "Prospekt"
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
        de: "Morgen habe ich die Prüfung.",
        zh: "明天我有考试。",
        target: "Prüfung"
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
        de: "Der Zug kommt pünktlich an.",
        zh: "火车准时到达。",
        target: "pünktlich"
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
        de: "Er darf hier nicht rauchen.",
        zh: "他不能在这里吸烟。",
        target: "rauchen"
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
        de: "Der Raum ist leer.",
        zh: "房间是空的。",
        target: "Raum"
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
        de: "Bitte geben Sie mir die Rechnung.",
        zh: "请把账单给我。",
        target: "Rechnung"
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
        zh: "右边"
      }
    ],
    examples: [
      {
        de: "Das Buch liegt rechts.",
        zh: "书在右边。",
        target: "rechts"
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
        de: "Es wird heute regnen.",
        zh: "今天会下雨。",
        target: "regnen"
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
        de: "Ich will das Fahrrad reparieren.",
        zh: "我想修理自行车。",
        target: "reparieren"
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
        de: "Ich warte an der Rezeption.",
        zh: "我在前台等候。",
        target: "Rezeption"
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
        zh: "正确的"
      }
    ],
    examples: [
      {
        de: "Deine Antwort ist richtig.",
        zh: "你的答案是正确的。",
        target: "richtig"
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
        zh: "闻"
      }
    ],
    examples: [
      {
        de: "Ich will das Parfüm riechen.",
        zh: "我想闻这个香水。",
        target: "riechen"
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
        de: "Bitte sei jetzt ruhig.",
        zh: "请现在保持安静。",
        target: "ruhig"
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
        de: "Kannst du das bitte sagen?",
        zh: "你能把它说出来吗？",
        target: "sagen"
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
        de: "Der Satz ist zu lang.",
        zh: "这句话太长了。",
        target: "Satz"
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
        de: "Ich hoffe, die Sonne wird scheinen.",
        zh: "我希望太阳会照耀。",
        target: "scheinen"
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
        zh: "寄送"
      }
    ],
    examples: [
      {
        de: "Ich schicke dir das Paket.",
        zh: "我把包裹寄给你。",
        target: "schicke"
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
        zh: "标志牌"
      }
    ],
    examples: [
      {
        de: "Das Schild zeigt den Ausgang.",
        zh: "这个标志牌指示出口。",
        target: "Schild"
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
        de: "Ich esse Schinken zum Frühstück.",
        zh: "我早餐吃火腿。",
        target: "Schinken"
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
        de: "Ich schlafe jetzt.",
        zh: "我现在睡觉。",
        target: "schlafe"
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
        de: "Das Wetter ist schlecht.",
        zh: "天气很差。",
        target: "schlecht"
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
        zh: "关上"
      }
    ],
    examples: [
      {
        de: "Ich schließe die Tür.",
        zh: "我把门关上。",
        target: "schließe"
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
        zh: "关闭的"
      }
    ],
    examples: [
      {
        de: "Der Laden ist am Sonntag geschlossen.",
        zh: "商店星期日不营业。",
        target: "geschlossen"
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
        zh: "结束"
      }
    ],
    examples: [
      {
        de: "Der Schluss ist kurz.",
        zh: "结尾很短。",
        target: "Schluss"
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
        zh: "好吃"
      }
    ],
    examples: [
      {
        de: "Der Kuchen schmeckt gut.",
        zh: "蛋糕很好吃。",
        target: "schmeckt"
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
        de: "Der Zug ist schnell.",
        zh: "这列火车很快。",
        target: "schnell"
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
        de: "Ich bin schon zu Hause.",
        zh: "我已经在家了。",
        target: "schon"
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
        zh: "美丽的"
      }
    ],
    examples: [
      {
        de: "Der Park ist schön.",
        zh: "公园很美丽。",
        target: "schön"
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
        de: "Der Schrank ist voll.",
        zh: "柜子里装满了东西。",
        target: "Schrank"
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
        de: "Ich schreibe jeden Tag im Tagebuch.",
        zh: "我每天在日记本里写字。",
        target: "schreibe"
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
        de: "Der Schüler liest ein Buch.",
        zh: "这位男学生在读一本书。",
        target: "Schüler"
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
        zh: "困难的"
      }
    ],
    examples: [
      {
        de: "Die Aufgabe ist schwer.",
        zh: "这道题很难。",
        target: "schwer"
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
        zh: "看见"
      }
    ],
    examples: [
      {
        de: "Ich sehe den Hund.",
        zh: "我看到那只狗。",
        target: "sehe"
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
        zh: "名胜"
      }
    ],
    examples: [
      {
        de: "Die Sehenswürdigkeit ist schön.",
        zh: "这座名胜很漂亮。",
        target: "Sehenswürdigkeit"
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
        zh: "非常"
      }
    ],
    examples: [
      {
        de: "Das Essen ist sehr gut.",
        zh: "这道菜非常好。",
        target: "sehr"
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
        de: "Er ist mein Freund.",
        zh: "他是我的朋友。",
        target: "ist"
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
        zh: "是"
      }
    ],
    examples: [
      {
        de: "Es ist schön, hier zu sein.",
        zh: "在这里很舒服。",
        target: "zu sein"
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
        zh: "自……以来"
      }
    ],
    examples: [
      {
        de: "Ich wohne seit 2020 hier.",
        zh: "我自2020年以来住在这里。",
        target: "seit"
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
        de: "Sie arbeitet selbstständig.",
        zh: "她独立工作。",
        target: "selbstständig"
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
        zh: "自己"
      }
    ],
    examples: [
      {
        de: "Er erinnert sich.",
        zh: "他记得了。",
        target: "sich"
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
        zh: "她"
      }
    ],
    examples: [
      {
        de: "Ich treffe sie morgen.",
        zh: "我明天会见她。",
        target: "sie"
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
        zh: "您"
      }
    ],
    examples: [
      {
        de: "Können Sie mir helfen?",
        zh: "您能帮我吗？",
        target: "Sie"
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
        de: "Wir sitzen im Bus.",
        zh: "我们坐在公交车上。",
        target: "sitzen"
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
        zh: "这样"
      }
    ],
    examples: [
      {
        de: "Das ist so.",
        zh: "就是这样。",
        target: "so"
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
        zh: "马上"
      }
    ],
    examples: [
      {
        de: "Komm sofort hierher!",
        zh: "马上来这里！",
        target: "sofort"
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
        zh: "应当"
      }
    ],
    examples: [
      {
        de: "Wir sollen lernen.",
        zh: "我们应该学习。",
        target: "sollen"
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
        zh: "迟的"
      }
    ],
    examples: [
      {
        de: "Der Zug ist spät.",
        zh: "火车晚点了。",
        target: "spät"
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
        zh: "以后"
      }
    ],
    examples: [
      {
        de: "Wir kommen später.",
        zh: "我们稍后到。",
        target: "später"
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
        zh: "语言"
      }
    ],
    examples: [
      {
        de: "Deutsch ist eine schöne Sprache.",
        zh: "德语是一门美丽的语言。",
        target: "Sprache"
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
        zh: "站立；处于某种状态"
      }
    ],
    examples: [
      {
        de: "Der Stuhl steht neben dem Tisch.",
        zh: "椅子在桌子旁边。",
        target: "steht"
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
        de: "Ich habe eine neue Stelle gefunden.",
        zh: "我找到了一个新职位。",
        target: "Stelle"
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
        zh: "放置"
      }
    ],
    examples: [
      {
        de: "Bitte stell die Tasse auf den Tisch.",
        zh: "请把杯子放在桌子上。",
        target: "stell"
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
        zh: "楼层"
      }
    ],
    examples: [
      {
        de: "Wir wohnen im dritten Stock.",
        zh: "我们住在三楼。",
        target: "Stock"
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
        zh: "在大学学习"
      }
    ],
    examples: [
      {
        de: "Anna studiert Biologie an der Uni.",
        zh: "安娜在大学学习生物。",
        target: "studiert"
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
        zh: "大学学习"
      }
    ],
    examples: [
      {
        de: "Mein Studium dauert vier Jahre.",
        zh: "我的大学学习持续四年。",
        target: "Studium"
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
        zh: "大学生（男性）"
      }
    ],
    examples: [
      {
        de: "Der Student liest in der Bibliothek.",
        zh: "这位男大学生在图书馆阅读。",
        target: "Student"
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
        de: "Die Stunde beginnt um neun Uhr.",
        zh: "这节课在九点开始。",
        target: "Stunde"
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
        de: "Ich suche meine Schlüssel.",
        zh: "我在找我的钥匙。",
        target: "suche"
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
        de: "Ein Teil des Kuchens fehlt.",
        zh: "蛋糕的一块不见了。",
        target: "Teil"
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
        zh: "约会；预约时间"
      }
    ],
    examples: [
      {
        de: "Wir haben einen Termin um zehn.",
        zh: "我们十点有一个约会。",
        target: "Termin"
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
        de: "Der Test ist morgen.",
        zh: "测验在明天。",
        target: "Test"
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
        de: "Das Buch ist sehr teuer.",
        zh: "这本书很贵。",
        target: "teuer"
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
        de: "Der Text ist leicht zu lesen.",
        zh: "这篇文章很容易阅读。",
        target: "Text"
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
        zh: "主题；话题"
      }
    ],
    examples: [
      {
        de: "Unser Thema ist Umweltschutz.",
        zh: "我们的主题是环境保护。",
        target: "Thema"
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
        zh: "厕所"
      }
    ],
    examples: [
      {
        de: "Wo ist die Toilette?",
        zh: "厕所在哪里？",
        target: "Toilette"
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
        de: "Der Fisch ist tot.",
        zh: "这条鱼死了。",
        target: "tot"
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
        zh: "见面"
      }
    ],
    examples: [
      {
        de: "Wir treffen uns um acht.",
        zh: "我们八点见面。",
        target: "treffen"
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
        de: "Tschüss, bis morgen!",
        zh: "再见，明天见！",
        target: "tschüss"
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
        zh: "做"
      }
    ],
    examples: [
      {
        de: "Was willst du tun?",
        zh: "你想做什么？",
        target: "tun"
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
        zh: "关于"
      }
    ],
    examples: [
      {
        de: "Das Buch ist über Berlin.",
        zh: "这本书是关于柏林的。",
        target: "über"
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
        de: "Wir übernachten im Hotel.",
        zh: "我们在酒店过夜。",
        target: "übernachten"
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
        de: "Ich möchte Geld überweisen.",
        zh: "我想转账。",
        target: "überweisen"
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
        zh: "钟表"
      }
    ],
    examples: [
      {
        de: "Wie spät ist die Uhr?",
        zh: "现在几点？",
        target: "Uhr"
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
        zh: "在…时"
      }
    ],
    examples: [
      {
        de: "Wir treffen uns um neun.",
        zh: "我们九点见面。",
        target: "um"
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
        de: "Wir wollen umziehen.",
        zh: "我们想搬家。",
        target: "umziehen"
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
        de: "Anna und Ben kommen.",
        zh: "安娜和本来了。",
        target: "und"
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
        de: "Unser Haus ist groß.",
        zh: "我们的房子很大。",
        target: "Unser"
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
        de: "Das Buch liegt unten.",
        zh: "书在下面。",
        target: "unten"
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
        zh: "在…下面"
      }
    ],
    examples: [
      {
        de: "Der Ball ist unter dem Tisch.",
        zh: "球在桌子下面。",
        target: "unter"
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
        zh: "课程"
      }
    ],
    examples: [
      {
        de: "Der Unterricht beginnt um acht.",
        zh: "课程在八点开始。",
        target: "Unterricht"
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
        zh: "签字"
      }
    ],
    examples: [
      {
        de: "Ich unterschreibe das Formular.",
        zh: "我在表格上签字。",
        target: "unterschreibe"
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
        de: "Bitte geben Sie Ihre Unterschrift.",
        zh: "请您签名。",
        target: "Unterschrift"
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
        de: "Rauchen ist hier verboten.",
        zh: "这里禁止吸烟。",
        target: "verboten"
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
        de: "Sie ist verheiratet.",
        zh: "她已婚。",
        target: "verheiratet"
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
        zh: "很多"
      }
    ],
    examples: [
      {
        de: "Ich habe viel zu tun.",
        zh: "我有很多事要做。",
        target: "viel"
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
        de: "Vielleicht kommt er später.",
        zh: "也许他稍后会来。",
        target: "vielleicht"
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
        zh: "属于"
      }
    ],
    examples: [
      {
        de: "Das Buch ist von Anna.",
        zh: "这本书是安娜的。",
        target: "von"
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
        zh: "在…之前"
      }
    ],
    examples: [
      {
        de: "Wir treffen uns vor dem Kino.",
        zh: "我们在电影院前见面。",
        target: "vor"
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
        de: "Vorsicht, das Wasser ist heiß!",
        zh: "小心，水很烫！",
        target: "Vorsicht"
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
        zh: "自我介绍"
      }
    ],
    examples: [
      {
        de: "Ich stelle mich vor.",
        zh: "我自我介绍。",
        target: "stelle"
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
        de: "Wir wandern im Wald.",
        zh: "我们在森林里徒步走。",
        target: "wandern"
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
        de: "Wann beginnt der Film?",
        zh: "电影什么时候开始？",
        target: "wann"
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
        de: "Wir warten auf den Bus.",
        zh: "我们在等公交。",
        target: "warten"
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
        de: "Warum bist du müde?",
        zh: "你为什么累？",
        target: "warum"
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
        de: "Was kostet das?",
        zh: "这个多少钱？",
        target: "was"
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
        de: "Was für ein Buch hast du?",
        zh: "你有什么样的书？",
        target: "Was für ein"
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
        de: "Ich wasche mich.",
        zh: "我洗澡。",
        target: "wasche"
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
        zh: "疼痛"
      }
    ],
    examples: [
      {
        de: "Mein Rücken tut weh.",
        zh: "我的背疼。",
        target: "tut"
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
        de: "Sie ist weiblich.",
        zh: "她是女性。",
        target: "weiblich"
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
        zh: "遥远的"
      }
    ],
    examples: [
      {
        de: "Der Bahnhof ist weit entfernt.",
        zh: "火车站很远。",
        target: "weit"
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
        zh: "继续"
      }
    ],
    examples: [
      {
        de: "Wir gehen weiter.",
        zh: "我们继续走。",
        target: "weiter"
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
        de: "Welcher Stift ist rot?",
        zh: "哪支笔是红色的？",
        target: "Welcher"
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
        zh: "世界"
      }
    ],
    examples: [
      {
        de: "Die Welt ist groß.",
        zh: "世界很大。",
        target: "Welt"
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
        de: "Ich habe wenig Geld.",
        zh: "我钱很少。",
        target: "wenig"
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
        de: "Wer kommt?",
        zh: "谁来？",
        target: "Wer"
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
        zh: "变成"
      }
    ],
    examples: [
      {
        de: "Ich werde müde.",
        zh: "我变得很累。",
        target: "werde"
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
        de: "Das ist wichtig.",
        zh: "这很重要。",
        target: "wichtig"
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
        zh: "怎样"
      }
    ],
    examples: [
      {
        de: "Wie heißt du?",
        zh: "你叫什么？",
        target: "wie"
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
        de: "Ich wiederhole das Wort.",
        zh: "我重复这个词。",
        target: "wiederhole"
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
        de: "Das Wiederhören war gut.",
        zh: "再次通话很不错。",
        target: "Wiederhören"
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
        de: "Das Wiedersehen war schön.",
        zh: "再次见面很美好。",
        target: "Wiedersehen"
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
        de: "Wie viel kostet das?",
        zh: "这个多少钱？",
        target: "wie viel"
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
        de: "Willkommen in Berlin!",
        zh: "欢迎来柏林！",
        target: "Willkommen"
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
        de: "Wir gehen nach Hause.",
        zh: "我们回家。",
        target: "wir"
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
        de: "Ich weiß die Antwort.",
        zh: "我知道答案。",
        target: "weiß"
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
        de: "Wo ist das Buch?",
        zh: "书在哪里？",
        target: "Wo"
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
        de: "Woher kommst du?",
        zh: "你从哪里来？",
        target: "Woher"
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
        de: "Wohin gehst du?",
        zh: "你去哪里？",
        target: "Wohin"
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
        zh: "想要"
      }
    ],
    examples: [
      {
        de: "Ich will ein Eis.",
        zh: "我想要一个冰淇淋。",
        target: "will"
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
        zh: "单词"
      }
    ],
    examples: [
      {
        de: "Das Wort ist neu.",
        zh: "这个词是新的。",
        target: "Wort"
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
        de: "Das Wetter ist wunderbar.",
        zh: "天气好极了。",
        target: "wunderbar"
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
        zh: "时间（单数）"
      }
    ],
    examples: [
      {
        de: "Die Zeit ist kurz.",
        zh: "时间很短。",
        target: "Zeit"
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
        de: "Ich lerne zurzeit Deutsch.",
        zh: "我目前在学德语。",
        target: "zurzeit"
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
        zh: "报纸"
      }
    ],
    examples: [
      {
        de: "Ich lese die Zeitung.",
        zh: "我在读报纸。",
        target: "Zeitung"
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
        de: "Er raucht eine Zigarette.",
        zh: "他抽一支香烟。",
        target: "Zigarette"
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
        zh: "向，去"
      }
    ],
    examples: [
      {
        de: "Ich gehe zu dir.",
        zh: "我去你那里。",
        target: "zu"
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
        de: "Ich bin zufrieden.",
        zh: "我很满意。",
        target: "zufrieden"
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
        zh: "返回"
      }
    ],
    examples: [
      {
        de: "Ich komme zurück.",
        zh: "我回来。",
        target: "zurück"
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
        de: "Wir arbeiten jeden Tag zusammen.",
        zh: "我们每天一起工作。",
        target: "zusammen"
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
        de: "Das Buch liegt zwischen den Stühlen.",
        zh: "书在椅子之间。",
        target: "zwischen"
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
        de: "Ich habe eins gekauft.",
        zh: "我买了一个。",
        target: "eins"
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
        de: "Wir sind zwei Personen.",
        zh: "我们是两个人。",
        target: "zwei"
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
        de: "Ich sehe drei Vögel.",
        zh: "我看到三只鸟。",
        target: "drei"
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
        de: "Sie hat vier Bücher.",
        zh: "她有四本书。",
        target: "vier"
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
        de: "Er kauft fünf Äpfel.",
        zh: "他买了五个苹果。",
        target: "fünf"
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
        de: "Wir treffen uns um sechs Uhr.",
        zh: "我们六点见面。",
        target: "sechs"
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
        de: "Der Zug kommt um sieben Uhr.",
        zh: "火车七点到。",
        target: "sieben"
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
        de: "Ich habe acht Stühle.",
        zh: "我有八把椅子。",
        target: "acht"
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
        de: "Sie liest neun Seiten.",
        zh: "她读了九页。",
        target: "neun"
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
        de: "Wir zählen bis zehn.",
        zh: "我们数到十。",
        target: "zehn"
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
        de: "Er ist elf Jahre alt.",
        zh: "他十一岁。",
        target: "elf"
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
        de: "Der Film dauert zwölf Minuten.",
        zh: "电影十二分钟。",
        target: "zwölf"
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
        de: "Der Zug fährt um dreizehn Uhr.",
        zh: "火车在十三点开。",
        target: "dreizehn"
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
        de: "Sie hat vierzehn Karten.",
        zh: "她有十四张卡片。",
        target: "vierzehn"
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
        de: "Ich habe fünfzehn Euro.",
        zh: "我有十五欧元。",
        target: "fünfzehn"
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
        de: "Ich habe sechzehn Äpfel.",
        zh: "我有十六个苹果。",
        target: "sechzehn"
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
        de: "Wir brauchen siebzehn Stühle.",
        zh: "我们需要十七把椅子。",
        target: "siebzehn"
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
        de: "Sie kauft achtzehn Bananen.",
        zh: "她买了十八根香蕉。",
        target: "achtzehn"
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
        de: "Er hat neunzehn Bücher.",
        zh: "他有十九本书。",
        target: "neunzehn"
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
        de: "Ich sehe zwanzig Vögel.",
        zh: "我看到二十只鸟。",
        target: "zwanzig"
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
        de: "Wir haben einundzwanzig Gäste.",
        zh: "我们有二十一位客人。",
        target: "einundzwanzig"
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
        de: "Sie zählt dreißig Karten.",
        zh: "她数了三十张卡片。",
        target: "dreißig"
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
        de: "Er malt vierzig Bilder.",
        zh: "他画了四十幅画。",
        target: "vierzig"
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
        de: "Ich bringe fünfzig Geschenke.",
        zh: "我带来五十件礼物。",
        target: "fünfzig"
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
        de: "Sie sammelt sechzig Muscheln.",
        zh: "她收集了六十只贝壳。",
        target: "sechzig"
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
        de: "Wir sehen siebzig Sterne.",
        zh: "我们看到七十颗星星。",
        target: "siebzig"
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
        de: "Er hat achtzig Punkte.",
        zh: "他得了八十分。",
        target: "achtzig"
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
        de: "Ich lese neunzig Seiten.",
        zh: "我读了九十页。",
        target: "neunzig"
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
        de: "Sie hat hundert Euro.",
        zh: "她有一百欧元。",
        target: "hundert"
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
        de: "Ich habe hunderteins Fragen.",
        zh: "我有一百零一个问题。",
        target: "hunderteins"
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
        de: "Ich habe zweihundert Euro gespart.",
        zh: "我已经存了两百欧元。",
        target: "zweihundert"
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
        de: "Wir haben tausend Karten verkauft.",
        zh: "我们卖出了一千张票。",
        target: "tausend"
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
        de: "Sie hat eine Million Euro gewonnen.",
        zh: "她赢得了一百万欧元。",
        target: "eine Million"
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
        de: "Die Erde hat eine Milliarde Menschen.",
        zh: "地球有十亿人。",
        target: "eine Milliarde"
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
        de: "Das ist die erste Frage.",
        zh: "这是第一个问题。",
        target: "erste"
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
        de: "Nimm die zweite Straße.",
        zh: "请走第二条街。",
        target: "zweite"
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
        de: "Er sitzt in der dritten Reihe.",
        zh: "他坐在第三排。",
        target: "dritten"
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
        de: "Wir treffen uns in der vierten Woche.",
        zh: "我们在第四周见面。",
        target: "vierten"
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
        de: "Kaufe Äpfel, Birnen, Pflaumen usw.",
        zh: "买苹果、梨、李子等等。",
        target: "usw."
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
        de: "Ein halb ist mehr als ein Viertel.",
        zh: "半个比四分之一多。",
        target: "ein halb"
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
        de: "Ich habe ein Viertel Kuchen gegessen.",
        zh: "我吃了四分之一块蛋糕。",
        target: "ein Viertel"
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
        de: "Ich wurde neunzehnhundertneunundneunzig geboren.",
        zh: "我出生于1999年。",
        target: "neunzehnhundertneunundneunzig"
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
        de: "Das Spiel begann im Jahr zweitausendvierzehn.",
        zh: "比赛在2014年开始。",
        target: "zweitausendvierzehn"
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
        de: "Heute ist der 1. März.",
        zh: "今天是3月1日。",
        target: "heute ist der 1. März"
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
        zh: "柏林"
      }
    ],
    examples: [
      {
        de: "Ich wohne in Berlin.",
        zh: "我住在柏林。",
        target: "Berlin"
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
        de: "Der Zug fährt um null Uhr drei ab.",
        zh: "火车在零点零三分发车。",
        target: "null Uhr drei"
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
        de: "Der Zug fährt um sieben Uhr fünfzehn ab.",
        zh: "火车在七点十五分发车。",
        target: "sieben Uhr fünfzehn"
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
        de: "Der Film beginnt um dreizehn Uhr siebzehn.",
        zh: "电影在十三点十七分开始。",
        target: "dreizehn Uhr siebzehn"
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
        de: "Der Supermarkt schließt um vierundzwanzig Uhr.",
        zh: "超市在二十四点关门。",
        target: "vierundzwanzig Uhr"
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
        de: "Der Kurs beginnt um ein Uhr.",
        zh: "课程在一点开始。",
        target: "ein Uhr"
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
        zh: "一点过五分"
      }
    ],
    examples: [
      {
        de: "Der Zug kommt fünf Minuten nach eins.",
        zh: "火车在一点过五分到达。",
        target: "fünf Minuten nach eins"
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
        zh: "两点一刻"
      }
    ],
    examples: [
      {
        de: "Der Film startet um Viertel nach zwei.",
        zh: "电影在两点一刻开始。",
        target: "Viertel nach zwei"
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
        de: "Der Unterricht endet um halb drei.",
        zh: "课程在两点半结束。",
        target: "halb drei"
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
        de: "Eine Sekunde ist kurz.",
        zh: "一秒很短。",
        target: "Sekunde"
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
        de: "Eine Minute reicht.",
        zh: "一分钟足够。",
        target: "Minute"
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
        de: "Der Tag ist sonnig.",
        zh: "这天是晴天。",
        target: "Tag"
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
        de: "Eine Woche hat sieben Tage.",
        zh: "一周有七天。",
        target: "Woche"
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
        de: "Ein Jahr hat zwölf Monate.",
        zh: "一年有十二个月。",
        target: "Jahr"
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
        zh: "工作日"
      }
    ],
    examples: [
      {
        de: "Ein Wochentag ist Montag.",
        zh: "工作日是星期一。",
        target: "Wochentag"
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
        de: "Der Sonntag ist frei.",
        zh: "星期日是休息日。",
        target: "Sonntag"
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
        de: "Der Montag ist der erste Tag.",
        zh: "星期一是一周的第一天。",
        target: "Montag"
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
        de: "Der Dienstag folgt dem Montag.",
        zh: "星期二紧跟在星期一之后。",
        target: "Dienstag"
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
        de: "Am Mittwoch habe ich Deutschunterricht.",
        zh: "我在星期三有德语课。",
        target: "Mittwoch"
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
        de: "Am Donnerstag kommt meine Tante.",
        zh: "我的姑妈星期四来。",
        target: "Donnerstag"
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
        de: "Am Freitag essen wir Pizza.",
        zh: "我们星期五吃披萨。",
        target: "Freitag"
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
        de: "Am Samstag gehen wir ins Kino.",
        zh: "我们星期六去电影院。",
        target: "Samstag"
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
        de: "Am Wochenende fahre ich nach Berlin.",
        zh: "我在周末去柏林。",
        target: "Wochenende"
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
        de: "Wir treffen uns am Wochenende.",
        zh: "我们在周末见面。",
        target: "am Wochenende"
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
        zh: "一天"
      }
    ],
    examples: [
      {
        de: "Heute ist ein schöner Tag.",
        zh: "今天是美好的一天。",
        target: "Tag"
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
        de: "Der Morgen ist kühl.",
        zh: "早晨很凉爽。",
        target: "Morgen"
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
        de: "Am Vormittag lese ich.",
        zh: "我在上午阅读。",
        target: "Vormittag"
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
        de: "Mittag essen wir zusammen.",
        zh: "中午我们一起吃饭。",
        target: "Mittag"
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
        de: "Am Nachmittag spiele ich Fußball.",
        zh: "下午我踢足球。",
        target: "Nachmittag"
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
        de: "Am Abend sehe ich fern.",
        zh: "晚上我看电视。",
        target: "Abend"
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
        de: "In der Nacht schlafe ich gut.",
        zh: "夜晚我睡得好。",
        target: "Nacht"
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
        de: "Im Januar schneit es.",
        zh: "一月下雪。",
        target: "Januar"
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
        de: "Im Februar ist es kalt.",
        zh: "二月很冷。",
        target: "Februar"
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
        de: "Im März blühen die Blumen.",
        zh: "三月花开。",
        target: "März"
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
        de: "Im April blühen die Bäume.",
        zh: "四月树木开花。",
        target: "April"
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
        de: "Im Mai feiern wir den Muttertag.",
        zh: "五月我们庆祝母亲节。",
        target: "Mai"
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
        de: "Im Juni ist das Wetter warm.",
        zh: "六月天气很暖。",
        target: "Juni"
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
        de: "Im Juli gehen wir schwimmen.",
        zh: "七月我们去游泳。",
        target: "Juli"
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
        de: "Im August gibt es viele Ferien.",
        zh: "八月有很多假期。",
        target: "August"
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
        de: "Im September fällt das Laub.",
        zh: "九月树叶落下。",
        target: "September"
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
        de: "Im Oktober wird es kühler.",
        zh: "十月天气变凉。",
        target: "Oktober"
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
        de: "Im November regnet es oft.",
        zh: "十一月经常下雨。",
        target: "November"
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
        de: "Im Dezember schneit es.",
        zh: "十二月下雪。",
        target: "Dezember"
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
        de: "Ich frage, ob das Licht an sein kann.",
        zh: "我在问灯能否开着。",
        target: "an sein"
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
        de: "Ich frage, ob der Herd auf sein kann.",
        zh: "我在问炉子能否开着。",
        target: "auf sein"
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
        de: "Ich lerne eine Stunde Deutsch.",
        zh: "我学一小时德语。",
        target: "Stunde"
      }
    ],
    teachingOrder: 820,
    active: false,
    nonQuizReason: "alias-of-parent",
    reviewStatus: "reviewed"
  }
];
