import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className="flexBetween max-container 
    padding-container relative z-30 py-5 "
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((nav) => (
          <Link
            href={nav.href}
            key={nav.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer 
            pb-1.5 transition-all hover:font-bold"
          >
            {nav.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log In"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
