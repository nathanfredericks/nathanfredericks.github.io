import {Metadata, Viewport} from "next";
import Image from "next/image";

import githubMark from "../public/github-mark.svg";
import linkedinIcon from "../public/linkedin-icon.svg";
import envelope from "../public/envelope.svg";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Nathan Fredericks | Computer Science student",
  description:
      "Hello! My name's Nathan. I'm a Computer Science student at Acadia University who's passionate about building quality software that matters.",
};

export const viewport: Viewport = {
  themeColor: "#0f172b",
};

export default function Page() {
  return (
    <div>
      <header className="header relative flex h-screen flex-col items-center justify-center px-5 py-10 bg-slate-900">
        <div className="relative md:mb-10">
          <Image
              className="h-48 w-48 rounded-full border-4 shadow-sm md:h-64 md:w-64"
              src="/me.webp"
            width={256}
            height={256}
              alt="Headshot of Nathan Fredericks"
          />
          <div className="absolute bottom-0 right-0 text-7xl md:text-8xl">
            👋
          </div>
        </div>
        <h1 className="lg:text-4xl my-5 max-w-(--breakpoint-lg) text-center text-2xl text-white md:mb-10 md:text-3xl">
          <span className="underline">Hello! My name&apos;s Nathan.</span>&nbsp;
          I&apos;m a Computer Science student at Acadia University who&apos;s
          passionate about building quality software that matters.
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          <Button
            href="https://github.com/nathanfredericks"
            target="_blank"
            icon={githubMark}
            alt="GitHub logo"
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/nathanfredericks/"
            target="_blank"
            icon={linkedinIcon}
            alt="Linkedin logo"
          >
            LinkedIn
          </Button>
          <Button
              href="mailto:nathan@fredericks.dev"
              icon={envelope}
              alt="Email icon"
          >
            Email
          </Button>
        </div>
      </header>
    </div>
  );
}
