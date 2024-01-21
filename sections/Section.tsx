import React from 'react';

type Props = {
  id: string;
  Icon: React.ElementType;
  name: string;
  children: React.ReactNode;
  shaded?: boolean;
};

export default function Section({ id, Icon, name, shaded, children }: Props) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center px-2 py-5 md:p-5  ${shaded ? 'bg-gray-100' : ''}`}
    >
      <div className="max-w-screen-lg">
        <div className="mb-5 flex flex-col items-center justify-center">
          <Icon className="mr-2 h-12 w-12 text-center text-gray-900" />
          <h1 className="text-center font-mono text-3xl font-bold text-gray-900">
            {name}
          </h1>
        </div>
        {children}
      </div>
    </section>
  );
}
