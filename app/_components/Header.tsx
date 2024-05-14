
import React from "react";
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
import { auth } from "@clerk/nextjs/server";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import LoginButton from "@/components/ui/auth/login-button";

export default function Header() {

  return (
    <header className="flex w-3/4 mx-auto justify-between">
      <div>
        <span>Konsuiltmartch</span>
      </div>
      <div>
    
      </div>
      <div>
        <LoginButton>
            <button>Logga in</button>
        </LoginButton>
      
      </div>
    </header>
  );
}
