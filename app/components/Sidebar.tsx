// @/components/Layout/Sidebar.js
'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { SlHome } from "react-icons/sl";
import { FaTshirt, FaRedhat } from "react-icons/fa";

export default function Sidebar({}) {
  const router = useRouter();
  const pathname = usePathname();

  // Define our base class
  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";


  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
    pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  return (
    <>
      <div className={`${className}`}>
        <div className="p-2 flex">
          <Link href="/">
            {/*eslint-disable-next-line*/}
            <img src={""} alt="Company Logo" width={300} height={300} />
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem name="SEW" route="/" icon={<SlHome />} />
          <MenuItem name="Tata power" route="/" icon={<FaTshirt />} />
        </div>
      </div>
    </>
  );
}
