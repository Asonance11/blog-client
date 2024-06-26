"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useUserStore } from "@/stores/user-store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, logout } = useUserStore();

  const onClick = () => {
    logout();
    router.push("/");
    toast.success("Loggged out successfully");
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 md:px-20 border-b-black border-b">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-x-2">
        {isLoggedIn ? (
          <>
            <Button variant="link" size="lg" asChild>
              <Link href="/posts/new">Create post</Link>
            </Button>
            <Button variant="default" onClick={onClick}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="link" size="lg" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="default" size="lg" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
