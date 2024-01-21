import {
  CommandLineIcon,
  NewspaperIcon,
  UserIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/sections/Section';

export default function ProjectsSection() {
  return (
    <Section id="projects" Icon={CommandLineIcon} name="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          Icon={UserIcon}
          name="Portfolio Website"
          description="I designed and developed my personal website from scratch using NextJS and Tailwind CSS."
          tags={['NextJS', 'Tailwind CSS']}
          link="https://github.com/nathanfredericks/nathanfredericks.github.io"
        />
        <ProjectCard
          Icon={WrenchIcon}
          name="PocketMine Tools"
          description="I built a website for Minecraft server administrators and plugin developers. The website offers 9 responsive utilities for efficient server administration and plugin development."
          tags={['NextJS', 'Bootstrap']}
          link="https://github.com/nathanfredericks/pocketmine-tools"
        />
        <ProjectCard
          Icon={NewspaperIcon}
          name="HN Now"
          description="Using early betas of SwiftUI, I developed HN Now. A Hacker News reader for iOS and iPadOS."
          tags={['iOS', 'Swift', 'SwiftUI']}
          link="https://github.com/nathanfredericks/HNNow"
        />
      </div>
    </Section>
  );
}
