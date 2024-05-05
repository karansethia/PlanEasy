import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import burger from "@/public/assets/icons/menu.svg";
import logo from "@/public/assets/images/logo.svg";
import {Separator} from "../ui/separator";
import NavItems from "./NavItems";

type MobileNavProps = {};

const MobileNav = ({}: MobileNavProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image src={burger} alt="mobile-menu" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src={logo} alt="planeasy" width={128} height={38} />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
