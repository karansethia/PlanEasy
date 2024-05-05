import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.svg";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Button} from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b md:px-4">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} alt="Planeeasy" width={128} height={38} />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-md" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
