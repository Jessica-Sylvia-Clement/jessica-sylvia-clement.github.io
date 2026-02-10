import React from "react";
import { careerTimeline } from "../data/careerTimeline";

function CareerTimeline() {
  return (
    <section className="bg-neutral-950 pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
          Professional Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-green-700/40" />

          <div className="space-y-16 pl-8">
            {careerTimeline.map((item) => (
              <div key={item.id} className="flex gap-6 items-start">
                {/* Dot */}
                <div className="relative z-10 mt-7 -translate-x-[31px]">

                  <span
                    className="block h-4 w-4 rounded-full bg-green-500
                    shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                  />
                </div>

                {/* Card */}
                <div className="bg-neutral-900/70 backdrop-blur rounded-xl p-6 shadow-lg w-full">
                  <h3 className="text-xl font-semibold text-green-400">
                    {item.role}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-1">
                    {item.org}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-neutral-400 mt-2">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>

                  <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-200 text-sm">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerTimeline;
