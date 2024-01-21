import {
  CommandLineIcon,
  NewspaperIcon, PencilIcon,
  UserIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/sections/Section';

export default function ProjectsSection() {
  return (
    <Section id="projects" Icon={CommandLineIcon} name="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProjectCard
          Icon={UserIcon}
          name="Portfolio Website"
          description="I designed and developed my personal website from scratch using NextJS and Tailwind CSS. The website was designed with readability and page speed in mind."
          tags={['NextJS', 'Tailwind CSS']}
          link="https://github.com/nathanfredericks/nathanfredericks.github.io"
        />
        <ProjectCard
          Icon={WrenchIcon}
          name="PocketMine Tools"
          description="I built a website for Minecraft server administrators and plugin developers. The website offers 9 responsive utilities for efficient server administration and plugin development. The project has been in active development since 2019."
          tags={['NextJS', 'Bootstrap']}
          link="https://github.com/nathanfredericks/pocketmine-tools"
        />
        <ProjectCard
          Icon={NewspaperIcon}
          name="HN Now"
          description="Using early betas of SwiftUI, I developed HN Now. A Hacker News reader for iOS and iPadOS. HN Now was published to the Apple App Store in 2020."
          tags={['Swift', 'SwiftUI']}
          link="https://github.com/nathanfredericks/HNNow"
        />
        <ProjectCard
          Icon={PencilIcon}
          name="Nathan's Stickies"
          description="I built a script and website to sync my desktop sticky notes to the cloud. I used this project to improve my knowlege of AppleScript and Django, and solve a problem."
          tags={['Python', 'Django', 'AppleScript']}
          link="https://github.com/nathanfredericks/HNNow"
        />
      </div>
    </Section>
  );
}
