import { BriefcaseIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, { TimelineItem } from '@/components/Timeline';

export default function ExperienceSection() {
  return (
    <Section id="experience" Icon={BriefcaseIcon} name="Experience" shaded>
      <Timeline>
        <TimelineItem
          title="Certn"
          subtitle="Engineering Co-op | Victoria, BC (Remote) | April 2024 - Present"
        >
          <></>
        </TimelineItem>
        <TimelineItem
          title="Acadia University"
          subtitle="Resident Assistant | Wolfville, NS | August 2023 - April 2024"
        >
          <ul className="mb-5 list-disc pl-4">
            <li>
              Managed over 70 students in on-campus residence, ensuring a safe
              and comfortable environment.
            </li>
            <li>
              Organized social events to facilitate relationships between residents
              and build a sense of community.
            </li>
            <li>
              Manage residence social media pages, interacting with residents in new ways.
            </li>
            <li>
              Provided a safe space for residents to come for support in their
              academic or personal lives.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="Brilliant Labs / Labos Créatifs"
          subtitle="STEAM Mentor | Remote | June 2023 - March 2024"
        >
          <ul className="list-disc pl-4">
            <li>
              Collaborated remotely with my peers to design educational
              activities for youth, focusing on the United Nation’s Sustainable
              Development Goals.
            </li>
            <li>
              Partnered with local communities to offer weekly programming for youth of all ages.
            </li>
            <li>
              Support youth in learning about science, technology, engineering,
              and arts.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="Acadia University"
          subtitle="Teaching Assistant | Wolfville, NS | September 2023 - December 2023"
        >
          <ul className="mb-5 list-disc pl-4">
            <li>Assisted in teaching Computer Programming 1 lab.</li>
            <li>
              Graded over 100 assignments biweekly and provide impactful feedback
              on submissions.
            </li>
            <li>
              Implemented plagiarism detection software into the grading
              workflow, resulting in an 100% increase of reported incidents in plagiarism.
            </li>
          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
