import { BriefcaseIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, { TimelineItem } from '@/components/Timeline';

export default function ExperienceSection() {
  return (
    <Section id="experience" Icon={BriefcaseIcon} name="Experience" shaded>
      <Timeline>
        <TimelineItem
          title="Acadia University"
          subtitle="Resident Assistant | Wolfville, NS | August 2023 - Present"
        >
          <ul className="mb-5 list-disc pl-4">
            <li>
              Manage over 70 students in on-campus residence, ensuring a safe
              and comfortable environment.
            </li>
            <li>
              Organize and promote social events to facilitate relationships
              between residents and build a sense of community.
            </li>
            <li>
              Manage residence social media pages, communicating with residents
              in new ways.
            </li>
            <li>
              Provide a safe space for residents to come for support in their
              academic and personal lives.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="Brilliant Labs"
          subtitle="Youth Mentor | Frederickton, NB (Remote) | June 2023 - Present"
        >
          <ul className="list-disc pl-4">
            <li>
              Collaborate remotely with other mentors to design educational
              activities for youth, focusing on the United Nation’s Sustainable
              Development Goals (UN SDGs).
            </li>
            <li>
              Partner with local communities to offer weekly programming for
              youth of all ages.
            </li>
            <li>
              Support youth in learning about STEAM (science, technology, engineering,
              arts, and math).
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="Acadia University"
          subtitle="Teaching Assistant | Wolfville, NS | September 2023 - December 2023"
        >
          <ul className="mb-5 list-disc pl-4">
            <li>Assisted teaching Computer Programming 1 lab.</li>
            <li>
              Graded over 100 assignments biweekly and provide impactful feedback
              on submissions.
            </li>
            <li>
              Implemented plagiarism detection software into the grading
              workflow, resulting in an 100% increase of reported incidents of plagiarism.
            </li>
          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
