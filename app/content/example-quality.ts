export type BilingualTeachingExample = {
  de: string;
  zh: string;
  target?: string;
};

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

export function containsGermanSurfaceForm(german: string, target: string) {
  const escapedTarget = target.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  return new RegExp(
    `(^|[^\\p{L}\\p{N}])${escapedTarget}(?=$|[^\\p{L}\\p{N}])`,
    "iu",
  ).test(german);
}

export function validateBilingualTeachingExample(
  entryId: string,
  example: BilingualTeachingExample,
): string[] {
  const issues: string[] = [];
  const german = example.de.normalize("NFC").trim();
  const chinese = example.zh.normalize("NFC").trim();
  const target = example.target?.normalize("NFC").trim() ?? "";

  if (!german || !chinese || !target) {
    issues.push(`${entryId}: example text and target must be non-empty`);
    return issues;
  }
  const targetParts = target
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
  if (
    !targetParts.length ||
    targetParts.length > 2 ||
    targetParts.some((part) => !containsGermanSurfaceForm(german, part))
  ) {
    issues.push(`${entryId}: example does not contain target form ${target}`);
  }
  if (FORBIDDEN_GERMAN.some((pattern) => pattern.test(german))) {
    issues.push(`${entryId}: placeholder German example is forbidden`);
  }
  if (FORBIDDEN_CHINESE.some((pattern) => pattern.test(chinese))) {
    issues.push(`${entryId}: placeholder Chinese example is forbidden`);
  }
  if (/[\u3400-\u9fff]/u.test(german)) {
    issues.push(`${entryId}: German example contains Chinese characters`);
  }
  if (!/[\u3400-\u9fff]/u.test(chinese)) {
    issues.push(`${entryId}: Chinese translation has no Chinese characters`);
  }
  if (!/[.!?]$/u.test(german)) {
    issues.push(`${entryId}: German example needs final punctuation`);
  }
  if (!/[。！？]$/u.test(chinese)) {
    issues.push(`${entryId}: Chinese translation needs final punctuation`);
  }
  if (/[„“"]/.test(german)) {
    issues.push(`${entryId}: target must be used, not quoted as vocabulary`);
  }
  if (german.includes("=")) {
    issues.push(`${entryId}: example must be a usage context, not an equation`);
  }
  if (/[=()/…]/u.test(target)) {
    issues.push(
      `${entryId}: target must select a real surface form, not source notation`,
    );
  }
  const germanWordCount = german.split(/\s+/u).length;
  if (germanWordCount < 2 || germanWordCount > 18) {
    issues.push(
      `${entryId}: German example must contain 2..18 words, got ${germanWordCount}`,
    );
  }

  return issues;
}

export function findDuplicateGermanExamples(
  entries: readonly {
    entryId: string;
    examples: readonly BilingualTeachingExample[];
  }[],
): string[] {
  const owners = new Map<
    string,
    { example: string; entryIds: string[] }
  >();
  for (const entry of entries) {
    for (const example of entry.examples) {
      const normalizedExample = example.de.normalize("NFC").trim();
      const key = normalizedExample.toLocaleLowerCase("de-DE");
      const existing = owners.get(key);
      owners.set(key, {
        example: existing?.example ?? normalizedExample,
        entryIds: [...(existing?.entryIds ?? []), entry.entryId],
      });
    }
  }
  return [...owners.values()]
    .filter(({ entryIds }) => new Set(entryIds).size > 1)
    .map(
      ({ example, entryIds }) =>
        `duplicate German example "${example}": ${entryIds.join(", ")}`,
    );
}
