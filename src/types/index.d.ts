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
    id:    String 
    title: String
    description: String
    imageSrc: String[]
    createdAt: DateTime 
    category:  String
    userId: String 
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