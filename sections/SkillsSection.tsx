import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import Section from '@/sections/Section';

export default function SkillsSection() {
  return (
    <Section id="skills" Icon={Cog6ToothIcon} name="Skills">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Primary Programming Languages
          </h2>
          <p>Python, Java, HTML, CSS, JavaScript.</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Secondary Programming Languages
          </h2>
          <p>Swift, SQL, PHP, C.</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Cloud Providers</h2>
          <p>
            Amazon Web Services (Backup, CloudFront, DynamoDB, EC2, Lambda,
            Route 53, S3, SES, SNS), Firebase (Firestore, Realtime Database,
            Cloud Functions, Authentication, Hosting, Cloud Storage).
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Frameworks</h2>
          <p>NextJS, React, Django, Express, SwiftUI.</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Tools</h2>
          <p>
            Docker, Git, Visual Studio Code, InteliJ, Firefox Developer Tools,
            Package Managers (NPM, pip).
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Concepts</h2>
          <p>
            RESTful APIs, Serverless, Object Oriented Programming, LAMP Stack.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Soft Skills</h2>
          <p>
            Leadership, Communication, Teamwork, Team-building, Conflict
            Resolution.
          </p>
        </div>
      </div>
    </Section>
  );
}
