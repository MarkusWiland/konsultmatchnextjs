"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";
import { navigationMenuTriggerStyle } from "../navigation-menu";
const menuList = [
  {
    name: "Hem",
    href: "/",
  },
  {
    name: "Uppdrag",
    href: "/uppdrag",
  },
];
export default function DialogMenuList() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuList.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link href={item.href} legacyBehavior  passHref >
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} gap-4`}
              >
                <span>icon</span> {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
