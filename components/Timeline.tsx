import React from 'react';

type TimelineProps = {
  children: React.ReactNode;
};

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="md:mx-24">
      <ul className="relative md:border-s md:border-gray-500">{children}</ul>
    </div>
  );
}

type TimelineItemProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function TimelineItem({ title, subtitle, children }: TimelineItemProps) {
  return (
    <li className="mb-5 ml-8 ms-0 rounded-md border border-gray-500 p-3 md:p-5 md:ms-4">
      <div className="invisible absolute -start-2 mt-1.5 h-4 w-4 rounded-full border border-gray-500 bg-gray-50 md:visible"></div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h1>
      <h2 className="mb-1 text-lg md:text-lg font-normal text-gray-700">{subtitle}</h2>
      {children}
    </li>
  );
}
