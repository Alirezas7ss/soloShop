export type SidebarNavItem = NavItemWithChildren
export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
  monthlyPrice?: number | null
}
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