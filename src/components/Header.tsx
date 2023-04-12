'use client';
import { useEffect } from 'react';
import Link from 'next/link'

import { RegisterLanguages } from '@/lib/RegisterLanguages';
import { Logo } from './Logo';
import { Social, SiteMap } from '@/lib/ConfigType';

const config: { [key: string]: any } = require('../../my.config.js');


export function Header() {
    const appName = config.TITLE || '';
    const socialConfig: Social[] = config.SOCIALS ?? [];
    const socials = socialConfig.map((social: Social) => (
        <li key={social.name}>
            <a target="_blank" href={social.url} rel="noopener noreferrer" className="text-grey-darkest">
                {social.name}
            </a>
        </li>
    ));

    const siteMapConfig: SiteMap[] = config.SITE_MAP ?? [];
    const siteMap = siteMapConfig.map((endpoint: SiteMap) => (
        <li key={endpoint.name} className="text-grey-darkest font-bold">
            <Link href={endpoint.url}>
                {endpoint.name}
            </Link>
        </li>
    ));
    const year = new Date().getFullYear();

    useEffect(() => {
        RegisterLanguages();
    }, []);

    return (
        <header className="text-white fixed top-0 z-10 shadow bg-black max-w-full container mx-auto p-4 items-center text-md">
            <nav className="">
                <ul className="ml-10 flex justify-center tracking-wide space-x-4">
                    <li>
                    <Logo url="/" appName={appName} />

                    </li>
                    {socials}
                    {siteMap}
                </ul>
            </nav>
        </header>
    )
}
