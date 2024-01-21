import {EnvelopeIcon} from '@heroicons/react/24/solid';
import Section from '@/sections/Section';

export default function ContactSection() {
  return (
    <Section id="contact" Icon={EnvelopeIcon} name="Contact">
      <p className="text-center text-xl font-medium text-gray-800">
        Send me an email at{' '}
        <a
          href="mailto:nathan@fredericks.dev"
          className="text-blue-700 underline"
        >
          nathan@fredericks.dev
        </a>{' '}
        and I will get back to you as soon as possible.
      </p>
    </Section>
  );
}
