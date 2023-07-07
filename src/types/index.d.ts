import { type Icons } from "@/components/icons"
export type SidebarNavItem = NavItemWithChildren
export type SubscriptionPlan = {
  id: "basic" | "standard" | "pro"
  name: string
  description: string
  features: string[]
  stripePriceId: string
  price: number
  isCanceled?: boolean
}
export type UserRole = "user" | "admin" | "superadmin"

export type Option = {
  label: string
  value: string
}
export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
    }
  }

  export type ProductList = {
    id:    string 
    title: string
    description: string
    imageSrc: string[]
    createdAt: DateTime 
    authorId: Int
    category:  string
    userId: string 
    price: Int
    discount: Int
    point: Int
  }

  interface RatingProps {
    className?: string;
    count: number;
    value: number;
    color?: string;
    hoverColor?: string;
    activeColor?: string;
    size?: number;
    edit?: boolean;
    isHalf?: boolean;
    onChange?: (value: number) => void;
    emptyIcon?: React.ReactElement;
    halfIcon?: React.ReactElement;
    fullIcon?: React.ReactElement;
  }

  export type CartItem = {
    productId: number
    quantity: number
    // productSubcategory?: string | null
  }

  export interface CartLineItem
  extends Pick<
    Product,
    | "id"
    | "name"
    | "images"
    | "category"
    | "subcategory"
    | "price"
    | "inventory"
    | "storeId"
  > {
  quantity?: number
  storeName: string | null
}

//some item needed

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}
export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}
export type MainNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren
//some item needed

export type StoredFile = {
  id: string
  name: string
  url: string
}
