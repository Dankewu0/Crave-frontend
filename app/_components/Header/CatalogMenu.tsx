import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/app/_components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function CatalogMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2 bg-amber-400 rounded-lg hover:bg-amber-500">
            Каталог
            <ChevronDown className="transition-transform duration-200 data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu1</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu2</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu3</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu4</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu5</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu6</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu7</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu8</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu9</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu10</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu11</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu12</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Submenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 2</DropdownMenuItem>
              <DropdownMenuItem>Submenu Item 3</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
