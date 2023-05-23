'use client'
import { useState } from "react";
import Dropdown from "./ui/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function DropDownC() {
  let [text, setText] = useState("Select an item");

  return (
    <div className="flex min-h-full items-center justify-center">
        <header className=" p-2">
          <Dropdown>
            <Dropdown.Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                 <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </Dropdown.Button>

            <Dropdown.Menu>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 1")}>
                Item 1
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setText("Clicked Item 2")}>
                Item 2
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => alert(";)")}>
                Item 3
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </header>
       
    </div>
  );
}