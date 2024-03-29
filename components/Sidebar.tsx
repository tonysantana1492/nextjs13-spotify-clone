"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import SidebarItem from "./SidebarItem";
import Box from "./Box";
import Library from "./Library";

interface IProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<IProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName === "/",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );

  return (
    <div
      className={twMerge(
        `
      flex 
      h-full
      `
        // player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <nav
        className="
        hidden 
        md:flex 
        flex-col 
        gap-y-2 
        bg-black 
        h-full 
        w-[300px] 
        p-2
      "
      >
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </nav>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
