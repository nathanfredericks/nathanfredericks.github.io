import { AcademicCapIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';
import Timeline, { TimelineItem } from '@/components/Timeline';

export default function EducationSection() {
  return (
    <Section id="education" Icon={AcademicCapIcon} name="Education" shaded>
      <Timeline>
        <TimelineItem
          title="Acadia University"
          subtitle="Bachelor of Applied Computer Science | Wolfville, NS | September 2022 - Present"
        >
          <ul className="list-disc pl-4">
            <li>3.5 GPA</li>
            <li>
              Recipient of The Joyce Foundation bursary for showing
              exceptionality through a combination of volunteerism, leadership,
              citizenship, and character.
            </li>
            <li>
              Achieved an A+ in Computer Programming (OOP Python and Java), and Software
              Engineering.
            </li>
            <li>
              Relevant Coursework: Data Structures and Algorithms, Computer
              Architecture, Matrix Algebra, Discrete Mathematics.
            </li>
          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
