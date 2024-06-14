import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 md:px-20 border-b-black border-b">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-x-2">
        <Button variant="link" size="lg" asChild>
          <Link href="login">Login</Link>
        </Button>
        <Button variant="default" size="lg" asChild>
          <Link href="register">Register</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
