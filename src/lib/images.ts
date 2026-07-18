/**
 * Central image registry. Every photo on the site resolves through here so
 * Unsplash placeholders can be swapped for real organization photos in one
 * place (replace the URL — component code never changes).
 */
const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: {
    belong: unsplash("photo-1529156069898-49953e39b3ac", 1920),
    services: unsplash("photo-1582213782179-e0d53f98f2ca", 1920),
    events: unsplash("photo-1476480862126-209bfaa8edc8", 1920),
  },
  banner: {
    about: unsplash("photo-1531206715517-5c0ba140b2b8", 1920),
    services: unsplash("photo-1521737604893-d14cc237f11d", 1920),
    events: unsplash("photo-1533174072545-7a4b6ad7a6c3", 1920),
    getInvolved: unsplash("photo-1559027615-cd4628902d4a", 1920),
    donate: unsplash("photo-1532629345422-7515f3d16bb6", 1920),
    contact: unsplash("photo-1423666639041-f56000c27a9a", 1920),
  },
  service: {
    employment: unsplash("photo-1521737604893-d14cc237f11d", 1200),
    housing: unsplash("photo-1560518883-ce09059eeffa", 1200),
    youth: unsplash("photo-1509062522246-3755977927d7", 1200),
    community: unsplash("photo-1511632765486-a01980e01a18", 1200),
  },
  event: {
    belong: unsplash("photo-1560518883-ce09059eeffa", 1200),
    run: unsplash("photo-1452626038306-9aae5e071dd3", 1200),
    cookie: unsplash("photo-1499636136210-6f4ee915583e", 1200),
  },
  story: {
    one: unsplash("photo-1544027993-37dbfe43562a", 1200),
    two: unsplash("photo-1469571486292-0ba58a3f068b", 1200),
    three: unsplash("photo-1522202176988-66273c2fd55f", 1200),
  },
  involve: {
    volunteer: unsplash("photo-1593113598332-cd288d649433", 1200),
    donate: unsplash("photo-1532629345422-7515f3d16bb6", 1200),
    partner: unsplash("photo-1600880292203-757bb62b4baf", 1200),
  },
  about: {
    mission: unsplash("photo-1491438590914-bc09fcaaf77a", 1200),
    story: unsplash("photo-1544027993-37dbfe43562a", 1200),
  },
  whoWeSupport: {
    banner: unsplash("photo-1517649763962-0c623066013b", 1920),
    bike: unsplash("photo-1541625602330-2277a4c46182", 1200),
    care: unsplash("photo-1544027993-37dbfe43562a", 1200),
  },
  impactOfGiving: {
    banner: unsplash("photo-1532629345422-7515f3d16bb6", 1920),
    partnership: unsplash("photo-1521791136064-7986c2920216", 1200),
    story: unsplash("photo-1469571486292-0ba58a3f068b", 1200),
  },
} as const;
