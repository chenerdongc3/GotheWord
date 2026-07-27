import type { A1TopicId, A1WordGroupId } from "./types.ts";

export const A1_TOPICS = [
  {
    id: "person",
    de: "Person",
    zh: "个人与家庭",
    inventories: [
      "姓名、地址、电话、出生信息与年龄",
      "性别、家庭与婚姻状况",
      "人际关系、国籍、外貌与日常习惯",
    ],
  },
  {
    id: "housing",
    de: "Wohnen",
    zh: "居住",
    inventories: ["住房与房间", "家具与设备", "租赁与搬家"],
  },
  {
    id: "environment",
    de: "Umwelt",
    zh: "环境",
    inventories: ["植物", "动物", "气候与天气"],
  },
  {
    id: "travel",
    de: "Reisen/Verkehr",
    zh: "旅行与交通",
    inventories: ["私人和公共交通", "旅行", "住宿", "行李"],
  },
  {
    id: "food",
    de: "Essen/Trinken",
    zh: "饮食",
    inventories: ["食品", "餐次与菜肴", "饮料", "餐厅与咖啡馆"],
  },
  {
    id: "shopping",
    de: "Einkaufen/Gebrauchsartikel",
    zh: "购物与日用品",
    inventories: ["商店", "价格与支付", "食品", "服装"],
  },
  {
    id: "services",
    de: "Dienstleistungen",
    zh: "公共服务",
    inventories: ["邮政", "通信", "银行", "警察"],
  },
  {
    id: "education",
    de: "Erziehung/Ausbildung/Lernen",
    zh: "教育与学习",
    inventories: ["儿童照护", "学校", "语言学习"],
  },
  {
    id: "work",
    de: "Arbeit/Beruf",
    zh: "工作与职业",
    inventories: ["工作地点", "休假"],
  },
  {
    id: "leisure",
    de: "Freizeit/Unterhaltung",
    zh: "休闲与娱乐",
    inventories: ["兴趣与运动", "广播电视", "互联网", "阅读与新闻"],
  },
] as const satisfies ReadonlyArray<{
  id: A1TopicId;
  de: string;
  zh: string;
  inventories: readonly string[];
}>;

export const A1_WORD_GROUPS = [
  { id: "numbers", de: "Zahlen", zh: "数字", page: 6 },
  { id: "dates", de: "Datum", zh: "日期", page: 6 },
  { id: "clock-time", de: "Uhrzeit", zh: "钟点", page: 7 },
  {
    id: "time-measures",
    de: "Zeitmaße, Zeitangaben",
    zh: "时间单位与时间表达",
    page: 7,
  },
  { id: "weekdays", de: "Woche/Wochentage", zh: "星期", page: 7 },
  { id: "times-of-day", de: "Tag/Tageszeiten", zh: "一天中的时段", page: 7 },
  { id: "months", de: "Monat/Monatsnamen", zh: "月份", page: 7 },
  { id: "seasons", de: "Jahr/Jahreszeiten", zh: "年份与季节", page: 8 },
  { id: "currencies", de: "Währungen", zh: "货币", page: 8 },
  { id: "measurements", de: "Maße und Gewichte", zh: "度量衡", page: 8 },
  {
    id: "countries-nationalities",
    de: "Länder/Ländernamen/Nationalitäten",
    zh: "国家、国名与国籍",
    page: 8,
  },
  { id: "colors", de: "Farben", zh: "颜色", page: 8 },
  { id: "directions", de: "Himmelsrichtungen", zh: "方位", page: 8 },
] as const satisfies ReadonlyArray<{
  id: A1WordGroupId;
  de: string;
  zh: string;
  page: number;
}>;

export const A1_TOPIC_LABELS = Object.fromEntries(
  A1_TOPICS.map((topic) => [topic.id, topic.zh]),
) as Record<A1TopicId, string>;
