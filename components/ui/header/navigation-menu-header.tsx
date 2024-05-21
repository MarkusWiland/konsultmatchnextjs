"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const menuList = [
  {
    name: "Hem",
    href: "/",
  },
  {
    name: "Uppdrag",
    href: "/uppdrag",
  },
  {
    name: "Konsulter",
    href: "/konsulter",
  },
  {
    name: "Om Oss",
    href: "/om",
  },
  {
    name: "Kontakta Oss",
    href: "/kontakt",
  },
];
export default function NavigationMenuHeader() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {menuList.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
