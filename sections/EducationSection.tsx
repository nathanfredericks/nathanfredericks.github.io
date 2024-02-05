import { AcademicCapIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, { TimelineItem } from '@/components/Timeline';

export default function EducationSection() {
  return (
    <Section id="education" Icon={AcademicCapIcon} name="Education" shaded>
      <Timeline>
        <TimelineItem
          title="Acadia University"
          subtitle="Bachelor of Applied Computer Science with Co-op | Wolfville, NS | September 2022 - Present"
        >
          <ul className="list-disc pl-4">
            <li><span className="underline">Relevant Coursework:</span> Computer Programing, Software Engineering, Data Structures and Algorithms, Computer Architecture, Matrix Algebra, Discrete Mathematics, Full-Stack Cloud Computing.</li>
            <li><span className="underline">Accolades:</span> The Joyce Foundation Bursary ($20,000)</li>

          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
