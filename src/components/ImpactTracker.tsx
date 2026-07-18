import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const stats = [
  {
    end: 1000,
    suffix: "+",
    label: "People Supported Annually",
    icon: "M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z",
  },
  {
    end: 500,
    suffix: "+",
    label: "Dedicated Staff Members",
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  },
  {
    end: 32,
    suffix: "",
    label: "Safe Group Homes & 3 Respite Locations",
    icon: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
  },
  {
    end: 200,
    suffix: "+",
    label: "Active Volunteers & 250 Member Families",
    icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  },
];

export default function ImpactTracker() {
  return (
    <section aria-labelledby="impact-heading" className="bg-primary-solid text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 id="impact-heading" className="sr-only">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.icon} />
                </svg>
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-200">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            Proudly FOCUS Accredited for maximum accountability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
