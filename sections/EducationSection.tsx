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
        <TimelineItem
          title="Middleton Regional High School"
          subtitle="High School Diploma | Middleton, NS | September 2018 - June 2022"
        >
          <ul className="list-disc pl-4">
            <li>90% average.</li>
            <li>Achieved Honours with Distinction in my senior year.</li>
            <li>
              Awarded the Harry E. Parker Memorial Award for my excellent
              academic performance and kindness towards others.
            </li>
          </ul>
        </TimelineItem>
      </Timeline>
    </Section>
  );
}
