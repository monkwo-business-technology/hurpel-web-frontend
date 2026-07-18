"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";
import type { Dictionary } from "@/i18n";

const storyImages = [images.story.one, images.story.two, images.story.three];

export default function StoryCarousel({ dict }: { dict: Dictionary["stories"] }) {
  const [index, setIndex] = useState(0);
  const stories = dict.items.map((s, i) => ({ ...s, image: storyImages[i % storyImages.length] }));
  const story = stories[index];

  return (
    <section aria-labelledby="stories-heading" className="bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 id="stories-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
            {dict.heading}
          </h2>
          <p className="mt-4 text-ink-muted">{dict.subheading}</p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-center max-w-5xl mx-auto">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                key={story.image}
                src={story.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <figure className="card-soft rounded-2xl p-8 sm:p-10 relative">
              <svg
                className="w-10 h-10 text-accent mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.691-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
              </svg>
              <blockquote className="text-lg sm:text-xl text-ink leading-relaxed">
                {story.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-bold text-primary">{story.name}</p>
                <p className="text-sm text-ink-muted">{story.role}</p>
              </figcaption>

              <div className="mt-8 flex items-center gap-2" role="tablist" aria-label={dict.chooseStory}>
                {stories.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    role="tab"
                    aria-selected={index === i}
                    aria-label={`${dict.story} ${i + 1}: ${s.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-3 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      index === i ? "w-8 bg-primary" : "w-3 bg-primary/25 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
