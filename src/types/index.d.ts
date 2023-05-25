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