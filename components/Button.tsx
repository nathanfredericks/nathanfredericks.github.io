import React from "react";

import Image, {StaticImageData} from "next/image";

type Props = {
    href: string;
    target?: string;
    icon: StaticImageData | string;
    alt: string;
    children: React.ReactNode;
};

export default function Button({href, target, icon, alt, children}: Props) {
    return (
        <a
            href={href}
            target={target}
            className="mx-2 mt-3 rounded-md border-slate-900 bg-white px-3 py-2 md:px-6 md:py-3 text-center font-mono text-slate-900 shadow-sm transition duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-hidden focus:ring-4 focus:ring-gray-200"
        >
            <div className="inline-flex items-center">
                <span>{children}</span>
                <Image src={icon} alt={alt} className="ml-2 h-5 w-5"/>
            </div>
        </a>
    );
}
