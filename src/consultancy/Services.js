import React from "react";
import { SparklesIcon, LightBulbIcon, ArrowTrendingUpIcon, ChartPieIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Non-Tech Excellence",
    description:
      "Fine-tune processes for maximum efficiency and cost savings and develop strategies that align with your industry, vision, and long-term goals. ",
    icon: ChartPieIcon,
  },
  {
    name: " Talent Development",
    description: "Boost productivity and satisfaction through effective HR strategies , Stay ahead in a competitive market with continuous skill development.",
    icon: LightBulbIcon,
  },
  {
    name: "Business Transformation",
    description: "Smoothly navigate organizational changes and transformations , Embrace digital transformation for enhanced agility and competitiveness.",
    icon: SparklesIcon,
  },
  {
    name: "Growth Initiatives",
    description:
      " Explore new markets and opportunities to fuel business growth and guiding startups with tailored strategies and mentorship for rapid development.",
    icon: ArrowTrendingUpIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base capitalize font-semibold leading-7 text-indigo-600">Beyond Excellence</h2>
          <p className="mt-2 text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">Services you can find</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Quizaro, we offer a comprehensive suite of services designed to optimize, innovate, and elevate your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
