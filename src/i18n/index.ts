import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

export const locales = ["en", "fr"] as const;
export type Lang = (typeof locales)[number];
export const defaultLocale: Lang = "en";

export type Dictionary = typeof en;

const dictionaries: Record<Lang, Dictionary> = { en, fr };

export function hasLocale(lang: string): lang is Lang {
  return (locales as readonly string[]).includes(lang);
}

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
