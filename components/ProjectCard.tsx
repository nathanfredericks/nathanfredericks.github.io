import React from 'react';

type Props = {
  Icon: React.ElementType;
  name: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({Icon, name, description, tags, link}: Props) {
  const card = (
    <>
      <Icon className="h-12 w-12"/><h1 className="my-2 text-xl md:text-2xl font-bold text-gray-900">{name}</h1>
      <p className="font-medium text-gray-800">{description}</p>
      <div className="flex flex-row flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="me-2 mt-2 whitespace-nowrap rounded-full border border-gray-800 bg-white px-2.5 py-1 font-mono text-xs font-bold text-gray-800 md:mt-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  return (
    <article
      className="rounded-md border hover:bg-gray-100 border-gray-900 bg-white p-4 md:p-5 shadow transition duration-300 ease-in-out hover:-translate-y-1">
      {link ? (
        <a href={link} target="_blank">
          {card}
        </a>
      ) : card}
    </article>
  );
}
