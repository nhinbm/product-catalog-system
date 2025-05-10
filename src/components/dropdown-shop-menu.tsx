import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ReactNode } from "react";

interface DropdownShopMenu {
  children: ReactNode;
}

const DropdownShopMenu: React.FC<DropdownShopMenu> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/shop/womens" className="w-full">
            Women&apos;s
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/mens" className="w-full">
            Men&apos;s
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/kids" className="w-full">
            Kids&apos;
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/shoes" className="w-full">
            Shoes
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/equipment" className="w-full">
            Equipment
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/by-activity" className="w-full">
            By Activity
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/gift-cards" className="w-full">
            Gift Cards
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/shop/sale" className="w-full">
            Sale
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownShopMenu;
