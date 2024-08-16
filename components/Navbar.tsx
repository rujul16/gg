"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 ">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/icons/logo.png"
          alt="logo"
          height={80}
          width={150}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        <li className="hover:scale-105">
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? "text-[#d69ef7] font-bold"
                : "hover:text-[#d69ef7]"
            }
          >
            Home
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link
            href="/companies"
            className={
              currentRoute === "/companies"
                ? "text-[#d69ef7] font-bold"
                : "hover:text-[#d69ef7]"
            }
          >
            Companies
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link
            href="/events"
            className={
              currentRoute === "/events"
                ? "text-[#d69ef7] font-bold"
                : "hover:text-[#d69ef7]"
            }
          >
            Events
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link
            href="/authority-connect"
            className={
              currentRoute === "/authority-connect"
                ? "text-[#d69ef7] font-bold"
                : "hover:text-[#d69ef7]"
            }
          >
            Authority Connect
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link
            href="/team"
            className={
              currentRoute === "/team"
                ? "text-[#d69ef7] font-bold"
                : "hover:text-[#d69ef7]"
            }
          >
            Team
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link
            href="/contact-us"
            className={
              currentRoute === "/contact-us"
                ? "text-[#d69ef7] font-bold"
                : "hover:text-[#d69ef7]"
            }
          >
            Contact us
          </Link>
        </li>
        <li className="hover:scale-105">
          {/* Profile Handling */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link
              href="/profile"
              className={
                currentRoute === "/profile"
                  ? "text-[#d69ef7] font-bold"
                  : "hover:text-[#d69ef7]"
              }
            >
              Profile
            </Link>
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
