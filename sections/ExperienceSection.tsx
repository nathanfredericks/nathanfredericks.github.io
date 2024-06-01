import {BriefcaseIcon} from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, {TimelineItem} from '@/components/Timeline';

export default function ExperienceSection() {
  return (
    <Section id="experience" Icon={BriefcaseIcon} name="Experience" shaded>
      <Timeline>
        <TimelineItem
          title="Engineering Co-op"
          subtitle="Certn | Remote | April 2024 - Present"
        >
          <ul className="mb-5 list-disc pl-4">
            <li>
              Designed and implemented Slack notifications for an internal support tool, leading to improved support
              response time.
            </li>
            <li>
              Employ test frameworks to conduct comprehensive code testing and pinpoint issues.
            </li>
            <li>
              Work collaboratively in an agile setting, joining team sprints and taking part in daily stand-up meetings.
            </li>
            <li>
              Effectively communicate with team members in a remote-first environment.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="Resident Assistant"
          subtitle="Acadia University | Wolfville, NS | August 2023 - April 2024"
        >
          <ul className="mb-5 list-disc pl-4">
            <li>
              Managed a community of over 70 students in on-campus housing, ensuring a safe and welcoming environment.
            </li>
            <li>
              Planned and organized social events to foster connections among residents and build community spirit.
            </li>
            <li>
              Managed the residence social media pages, communicating with residents in new ways.
            </li>
            <li>
              Promptly addressed incidents to ensure the safety and security of my residence and documented them
              quickly.
            </li>
            <li>
              Offered a supportive environment for residents to seek guidance for their academic and personal needs.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="STEAM Mentor"
          subtitle="Brilliant Labs | Remote | June 2023 - March 2024"
        >
          <ul className="list-disc pl-4">
            <li>
              Collaborated remotely with peers to develop educational activities for youth, with a focus on the UN
              Sustainable Development Goals.
            </li>
            <li>
              Partnered with local communities to deliver weekly programming for youth of all ages.
            </li>
            <li>
              Supported youth in learning about STEAM though hands-on activities and interactive learning experiences.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          title="Teaching Assistant"
          subtitle="Acadia University | Wolfville, NS | September 2023 - December 2023"
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
