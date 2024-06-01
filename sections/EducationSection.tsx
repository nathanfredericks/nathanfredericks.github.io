import { AcademicCapIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, { TimelineItem } from '@/components/Timeline';

export default function EducationSection() {
  return (
    <Section id="education" Icon={AcademicCapIcon} name="Education" shaded>
      <Timeline>
        <TimelineItem
          title="Bachelor of Applied Computer Science"
          subtitle="Acadia University | Wolfville, NS | September 2022 - May 2026"
        >
          <ul className="list-disc pl-4">
            <li><span className="underline">Activities and societies:</span> Acadia Farm, Acadia Residence Life, Acadia Computer Science Society, Community
              Outreach General Member.
            </li>
            <li><span className="underline">Volunteer experience:</span> Acadia Robotics, FIRST LEGO League.</li>
            <li><span className="underline">Relevant coursework:</span> Computer Programing (Python, Java, C), Software Engineering, Data Structures and Algorithms, Computer Architecture, Matrix Algebra, Discrete Mathematics, Statistics, Full-Stack Cloud Computing.</li>
          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
