'use client'
import { useState } from "react";
import Dropdown from "./ui/Dropdown";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes"
export default function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <div className=" z-50 flex min-h-full items-center justify-center">
        <header className=" p-2">
          <Dropdown>
            <Dropdown.Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
            </Dropdown.Button>

            <Dropdown.Menu >
              <Dropdown.MenuItem   onSelect={() => setTheme("light")}>
              <div className="flex ">
                  <Icons.sun className="mr-2 h-4 w-4" />
                            <span>Light</span>
              </div>
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setTheme("dark")}>

              <div className="flex">
                  <Icons.moon className="mr-2 h-4 w-4" />
                            <span>Dark</span>
              </div>
              </Dropdown.MenuItem>
              <Dropdown.MenuItem onSelect={() => setTheme("system")}>
              <div className="flex">
                  <Icons.laptop className="mr-2 h-4 w-4" />
                            <span>System</span>
              </div>
              </Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
        </header>
       
    </div>
  );
}