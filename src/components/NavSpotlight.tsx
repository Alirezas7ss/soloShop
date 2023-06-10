"use client"
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { ProductList } from "@/types"
import Image from "next/image"
import replaceSpacesWithHyphens from "@/script/script"
interface Props {
  product: ProductList | null
}
export default function NavSpotlight({product}: Props) {
  return (
    <header>
      <div className="mx-auto hidden max-w-7xl items-center justify-between p-3 lg:flex md:px-8" aria-label="Global">
        <div className="group relative flex items-center">
          <a href="#" className="-m-1.5 mr-4 p-1.5">
            <span className="sr-only">Company</span>
            {/* <Image className="relative h-4 w-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority /> */}
          </a>
          <Nav product={product} />
        </div>
        
      </div>
    </header>
  );
}

export function Nav({product}: Props) {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/",
      description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/",
      description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <div  style={{ "--mouse-x": mouseX, "--mouse-y": mouseY } as React.CSSProperties} className="text-white" onMouseMove={onMouseMove}>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>کراوات و پاپیون</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid gap-3  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex text-right h-full w-full select-none flex-col justify-end items-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={`/products/${product?.id}/${replaceSpacesWithHyphens(product?.title)}`}
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <Image src={`${product?.imageSrc[0]}`} width={100} height={100} alt={`${product?.title || ''} `} className="rounded-md  "  />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {product?.title}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {product?.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>کت های پارچه ای</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              تمام محصولات
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block text-right select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";