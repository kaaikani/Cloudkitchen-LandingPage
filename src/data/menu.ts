export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Starters' | 'Main Course' | 'Desserts' | 'Beverages' | 'Pickles';
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Masala Vada",
    description: "Crispy fried lentil fritters served with coconut chutney",
    price: 60,
    image:"assets/generated/menu-starters-masala-vada.dim_1200x900.png",
    category: "Starters"
  },
  {
    id: "2",
    name: "Onion Pakoda",
    description: "Golden onion fritters with mild spice and crunchy texture",
    price: 70,
    image: "assets/generated/menu-starters-pakoda.dim_1200x900.png",
    category: "Starters"
  },
  {
    id: "13",
    name: "Medu Vada",
    description: "Soft-centered urad dal vada served with sambar and chutney",
    price: 75,
    image: "assets/generated/tn-vada.dim_1600x900.png",
    category: "Starters"
  },
  {
    id: "14",
    name: "Mini Bajji Platter",
    description: "Crispy mixed vegetable bajjis with house-made masala",
    price: 85,
    image: "assets/generated/menu-starters-pakoda.dim_1200x900.png",
    category: "Starters"
  },
  {
    id: "3",
    name: "Ghee Dosa",
    description: "Classic dosa roasted in ghee and served with sambar",
    price: 90,
    image: "assets/generated/tn-dosa.dim_1600x900.png",
    category: "Main Course"
  },
  {
    id: "4",
    name: "Soft Idli Plate",
    description: "Steamed idlis served with chutney and hot sambar",
    price: 75,
    image: "assets/generated/tn-idli.dim_1600x900.png",
    category: "Main Course"
  },
  {
    id: "5",
    name: "Ven Pongal",
    description: "Creamy rice and moong dal pongal with tempered spices",
    price: 95,
    image: "assets/generated/tn-pongal.dim_1600x900.png",
    category: "Main Course"
  },
  {
    id: "6",
    name: "Sambar Rice",
    description: "Comforting rice mixed with aromatic sambar and ghee",
    price: 110,
    image: "assets/generated/tn-sambar-rice.dim_1600x900.png",
    category: "Main Course"
  },
  {
    id: "15",
    name: "Curd Rice",
    description: "Creamy yogurt rice tempered with mustard and green chili",
    price: 95,
    image: "assets/generated/tn-sambar-rice.dim_1600x900.png",
    category: "Main Course"
  },
  {
    id: "16",
    name: "Kara Kuzhambu Meal",
    description: "Spicy tamarind curry served with steamed rice and poriyal",
    price: 140,
    image: "assets/generated/tn-chicken-curry.dim_1600x900.png",
    category: "Main Course"
  },
  {
    id: "7",
    name: "Rava Kesari",
    description: "Classic semolina sweet flavored with cardamom and ghee",
    price: 65,
    image: "assets/generated/menu-dessert-mysore-pak.dim_1200x900.png",
    category: "Desserts"
  },
  {
    id: "9",
    name: "Mini Jangiri",
    description: "Juicy saffron-infused jangiri pieces made fresh daily",
    price: 80,
    image: "assets/generated/menu-dessert-mysore-pak.dim_1200x900.png",
    category: "Desserts"
  },
  {
    id: "17",
    name: "Elaneer Payasam",
    description: "Tender coconut payasam with a light cardamom finish",
    price: 90,
    image: "assets/generated/tn-murukku.dim_1600x900.png",
    category: "Desserts"
  },
  {
    id: "10",
    name: "Filter Coffee",
    description: "Traditional South Indian filter kaapi with rich aroma",
    price: 45,
    image: "assets/generated/tn-idli.dim_1600x900.png",
    category: "Beverages"
  },
  {
    id: "11",
    name: "Masala Buttermilk",
    description: "Chilled spiced buttermilk with curry leaves and ginger",
    price: 40,
    image: "assets/generated/tn-pongal.dim_1600x900.png",
    category: "Beverages"
  },
  {
    id: "18",
    name: "Sukku Malli Coffee",
    description: "Herbal dry ginger and coriander seed brew served warm",
    price: 50,
    image: "assets/generated/tn-idli.dim_1600x900.png",
    category: "Beverages"
  },
  {
    id: "19",
    name: "Fresh Lime Soda",
    description: "Chilled lime soda with a touch of rock salt",
    price: 55,
    image: "assets/generated/tn-pongal.dim_1600x900.png",
    category: "Beverages"
  },
  {
    id: "8",
    name: "Mango Pickle",
    description: "Homemade spicy mango pickle to pair with any meal",
    price: 50,
    image: "assets/generated/tn-pickles.dim_1600x900.png",
    category: "Pickles"
  },
  {
    id: "12",
    name: "Lemon Pickle",
    description: "Tangy homemade lemon pickle with balanced heat",
    price: 55,
    image: "assets/generated/tn-pickles.dim_1600x900.png",
    category: "Pickles"
  },
  {
    id: "20",
    name: "Garlic Pickle",
    description: "Bold and spicy garlic pickle made in small batches",
    price: 60,
    image: "assets/generated/tn-pickles.dim_1600x900.png",
    category: "Pickles"
  }
];

export const CATEGORIES = [
  'Starters',
  'Main Course',
  'Desserts',
  'Beverages',
  'Pickles'
] as const;
