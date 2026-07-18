import type { MetadataRoute } from "next";

const BASE = "https://hurpelsupport.com";

const paths = [
  "",
  "/about",
  "/who-we-support",
  "/services",
  "/events",
  "/impact-of-giving",
  "/get-involved",
  "/donate",
  "/donate-now",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${BASE}/en${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    alternates: {
      languages: {
        en: `${BASE}/en${path}`,
        fr: `${BASE}/fr${path}`,
      },
    },
  }));
}
