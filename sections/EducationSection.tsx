import { AcademicCapIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, { TimelineItem } from '@/components/Timeline';

export default function EducationSection() {
  return (
    <Section id="education" Icon={AcademicCapIcon} name="Education" shaded>
      <Timeline>
        <TimelineItem
          title="Acadia University"
          subtitle="Bachelor of Applied Science - BASc, Computer Science | Wolfville, NS | September 2022 - May 2027"
        >
          <ul className="list-disc pl-4">
            <li><span className="underline">Activities and societies:</span> Acadia Running Club President, Community
              Outreach General Member
            </li>
            <li><span className="underline">Volunteer experience:</span> Acadia Robotics, FIRST LEGO League</li>
            <li><span className="underline">Relevant coursework:</span> Computer Programing (Python, Java, C), Software Engineering, Data Structures and Algorithms, Computer Architecture, Matrix Algebra, Discrete Mathematics, Statistics, Full-Stack Cloud Computing.</li>
          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
