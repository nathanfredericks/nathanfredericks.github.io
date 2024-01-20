import {
  ChartBarIcon,
  CommandLineIcon,
  NewspaperIcon,
  PencilIcon,
  UserIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';
import Card from '@/components/Card';
import Section from '@/sections/Section';

export default function ProjectsSection() {
  return (
    <Section Icon={CommandLineIcon} name="Projects">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Card
          Icon={WrenchIcon}
          name="PocketMine Tools"
          description="I built a website for Minecraft server administrators and plugin developers. The website offers 9 responsive utilities for efficient server administration and plugin development."
          tags={['NextJS', 'Bootstrap']}
        />
        <Card
          Icon={UserIcon}
          name="Portfolio Website"
          description="I designed and developed my personal website from scratch using NextJS and Tailwind CSS."
          tags={['NextJS', 'Tailwind CSS']}
        />
        <Card
          Icon={PencilIcon}
          name="Nathan's Stickies"
          description="I developed a web application to sync my desktop sticky notes to the cloud."
          tags={['Python', 'Django', 'AppleScript']}
        />
        <Card
          Icon={NewspaperIcon}
          name="HN Now"
          description="Using early betas of SwiftUI, I developed HN Now. A Hacker News reader for iOS and iPadOS."
          tags={['iOS', 'Swift', 'SwiftUI']}
        />
        <Card
          Icon={ChartBarIcon}
          name="Nathan's Temperature Log"
          description="Utilizing a Raspberry Pi and DHT22 sensor, I developed a website which displays my bedroom's temperature over time."
          tags={['Python', 'Django', 'Raspberry Pi']}
        />
      </div>
    </Section>
  );
}
