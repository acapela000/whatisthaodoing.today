"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { RegisterLanguages } from "@/lib/RegisterLanguages";
import { Logo } from "./Logo";
import { Social, SiteMap } from "@/lib/ConfigType";

const config: { [key: string]: any } = require("../../my.config.js");

export function Header() {
  const appName = config.TITLE || "";
  const socialConfig: Social[] = config.SOCIALS ?? [];
  const socials = socialConfig.map((social: Social) => (
    <Navbar.Link
      key={social.url}
      href={social.url}
      active={true}
      rel="noopener noreferrer"
      className="!text-[#5F6F52] !bg-[#B99470]"
    >
      {social.name}
    </Navbar.Link>
  ));

  const siteMapConfig: SiteMap[] = config.SITE_MAP ?? [];
  const siteMap = siteMapConfig.map((endpoint: SiteMap) => (
    <Navbar.Link
      key={endpoint.name}
      href={endpoint.url}
      active={true}
      className="!text-[#5F6F52] font-bold !bg-[#B99470]"
    >
      {endpoint.name}
    </Navbar.Link>
  ));
  const year = new Date().getFullYear();

  useEffect(() => {
    RegisterLanguages();
  }, []);

  return (
    <header className="text-black fixed top-0 z-10 shadow bg-[#B99470] max-w-full container mx-auto p-4 items-center text-md">
      <Navbar
        fluid={true}
        rounded={true}
        className="!bg-[#B99470] !text-[#5F6F52] !flex !justify-center text-lg"
      >
        <Navbar.Brand href="/" className="mr-10">
          <div
            dangerouslySetInnerHTML={{ __html: appName }}
            style={{ fontWeight: "bold" }}
          ></div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {socials} {siteMap}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
