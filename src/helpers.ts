import type { TranslationData, TranslationMessages } from "./tinytranslate";

export function supplant(s: string | undefined, d: TranslationData = {}) {
  if (s === void 0) {
    return s;
  }
  for (var p in d) {
    s = s.replace(new RegExp("{" + p + "}", "g"), String(d[p]));
  }
  return s;
}

export const translateKey = <Key extends string, Object extends object>(
  path: Key,
  obj?: Object
) => {
  const value = String(path)
    .split(".")
    .reduce((acc, part) => {
      if (typeof acc !== "string") {
        return acc?.[part];
      }
      return acc;
    }, obj as string | TranslationMessages | undefined);

  if (typeof value === "object") {
    return void 0;
  }
  return value;
};
