{
  /*Icons*/
}
import { ShoppingBag, AlignLeft } from "lucide-react";

{
  /*Compomemts*/
}
import NavigationBar from "../groups/navigation";
import { Button } from "../ui/button";
import { AlertDialog } from "../ui/alert-dialog";

import Link from "next/link";
import { Input } from "../ui/input";
import { Sheet } from "../ui/sheet";

import { SearchDialog } from "./search-dialog";

import { ShoppingCartSheet } from "./shopping-cart";

import { NavbarSheet } from "./mobile-navbar";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between px-[20px] py-[5px] max-w-[1400px] xxs:py-[10px]">
      <div className="flex flex-row">
        <NavbarSheet />

        {/*Icon and Title*/}
        <Link
          href=""
          className="flex flex-row items-center font-thin text-wite  md:text-[18px] xxs:hidden xs:hidden md:flex  mr-12"
        >
          <ShoppingBag height={21} />
          Shop.co
        </Link>

        {/*Navigation Bar*/}
        <NavigationBar />
      </div>

      <div className="flex flex-row gap-x-3">
        <SearchDialog />

        <ShoppingCartSheet />

        <Button>Signin</Button>
      </div>
    </nav>
  );
};

export default Navbar;
