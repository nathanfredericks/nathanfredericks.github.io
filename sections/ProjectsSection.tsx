import { StarIcon } from '@heroicons/react/24/solid';
import {
  NewspaperIcon, PencilIcon,
  UserIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/sections/Section';

export default function ProjectsSection() {
  return (
    <Section id="projects" Icon={StarIcon} name="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProjectCard
          Icon={UserIcon}
          name="Portfolio Website"
          description="Learn more about me and the unique skills I can bring to your team."
          tags={['NextJS', 'Tailwind CSS']}
          link="https://github.com/nathanfredericks/nathanfredericks.github.io"
        />
        <ProjectCard
          Icon={WrenchIcon}
          name="PocketMine Tools"
          description="Nine responsive utilities for efficient Minecraft server administration and plugin development."
          tags={['NextJS', 'Bootstrap']}
          link="https://github.com/nathanfredericks/pocketmine-tools"
        />
        <ProjectCard
          Icon={NewspaperIcon}
          name="HN Now"
          description="Hacker News reader for iOS and iPadOS, published to the Apple App Store in 2020."
          tags={['Swift', 'SwiftUI']}
          link="https://github.com/nathanfredericks/HNNow"
        />
        <ProjectCard
          Icon={PencilIcon}
          name="Nathan's Stickies"
          description="Sync desktop sticky notes to the cloud and access them from anywhere."
          tags={['Python', 'Django', 'AppleScript']}
          link="https://github.com/nathanfredericks/nathansstickies"
        />
      </div>
    </Section>
  );
}
