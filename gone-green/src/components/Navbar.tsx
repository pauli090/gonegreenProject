import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./Carticon";

const Navbar = () => {

    const user = false;
  return (
    <div className="h-12 text-green-700 font-bold p-4 flex items-center justify-between border-b-2 border-b-green-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-2xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>GoneGreen</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
          <div className="hidden md:flex gap-4 items-center justify-end flex-1">
              <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-green-300 px-1 rounded-md">
                  <Image src="/phone.png" alt="" width={20} height={20} />
                  <span>08061295250</span>
              </div>
        {!user ? ( 
            <Link href="/login">Login</Link>
        ) : (
            <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
