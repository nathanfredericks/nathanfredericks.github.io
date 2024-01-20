import { EnvelopeIcon } from '@heroicons/react/24/solid';
import githubMark from '../public/github-mark.svg';
import linkedinIcon from '../public/linkedin-icon.svg';
import Image from 'next/image';
import Section from '@/sections/Section';
import ProjectsSection from '@/sections/ProjectsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import SkillsSection from '@/sections/SkillsSection';
import EducationSection from '@/sections/EducationSection';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description"
          content="Hello! My name's Nathan.  I'm a Computer Science student at Acadia University. I'm passionate about building quality software that can make an impact." />
        <title>Nathan Fredericks | Computer Science student</title>
      </Head>
      {/* Header */}
      <header className="header-bg relative flex min-h-[95vh] flex-col items-center justify-center px-5 py-10 shadow-lg">
        <div className="relative md:mb-10">
          <Image
            className="h-48 w-48 rounded-full border-4 shadow md:h-64 md:w-64"
            src="/profile.jpeg"
            width={256}
            height={256}
            alt="nathan fredericks"
          />
          <div className="invisible absolute bottom-0 right-0 text-8xl md:visible">
            👋
          </div>
        </div>
        <h1 className="lg:text-4x my-5 max-w-screen-lg text-center text-xl text-white md:mb-10 md:text-3xl">
          <span className="underline">Hello! My name&apos;s Nathan.</span>&nbsp;
          I&apos;m a Computer Science student at Acadia University. I&apos;m
          passionate about building quality software that can make an impact.
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          <a
            href="https://github.com/nathanfredericks"
            className="mx-2.5 mt-3 rounded-md border border-gray-900 bg-white px-5 py-2.5 text-center font-mono text-gray-900 shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            <div className="inline-flex items-center">
              <span>GitHub</span>
              <Image src={githubMark} alt="github" className="ml-2 h-5 w-5" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/nathanfredericks/"
            className="mx-2.5 mt-3 rounded-md border border-gray-900 bg-white px-5 py-2.5 text-center font-mono text-gray-900 shadow transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            <div className="inline-flex items-center">
              LinkedIn
              <Image
                src={linkedinIcon}
                alt="linkedin"
                className="ml-2 h-5 w-5"
              />
            </div>
          </a>
        </div>
      </header>

      {/* Sections */}
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Section Icon={EnvelopeIcon} name="Contact">
        <p className="text-center text-xl font-medium text-gray-800">
          Send me an email at{' '}
          <a
            href="mailto:nathan@fredericks.dev"
            className="text-blue-700 underline"
          >
            nathan@fredericks.dev
          </a>{' '}
          and I will get back to you as soon as possible.
        </p>
      </Section>

      {/* Footer */}
      <footer className="p-5 text-center">
        <div>&copy; 2024 Nathan Fredericks.</div>
      </footer>
    </div>
  );
}
