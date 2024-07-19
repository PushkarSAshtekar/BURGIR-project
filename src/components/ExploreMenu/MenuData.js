import aloo from "../../assets/Alootiki.jpeg";
import paneer from "../../assets/Paneertika.jpeg";
import masala from "../../assets/Masala.jpeg";
import spicy from "../../assets/Spicy.jpeg";
import cheeseburger from "../../assets/Cheeseburger.jpeg";
import cripsy from "../../assets/crispy.jpeg";
import tandoor from "../../assets/tandoor.jpeg";
import falafal from "../../assets/Mushroom.jpg";
import soya from "../../assets/soya.jpeg";
import veg from "../../assets/veg.jpg";
import McChicken from "../../assets/McChicken.jpg";
import CrispyChicken from "../../assets/CrispyChicken.jpg";
import Peri from "../../assets/PeriPeri.jpg";
import Tandoori from "../../assets/Tandoori.jpg";
import Double from "../../assets/Double.jpg";
import SpicyChicken from "../../assets/SpicyChicken.jpg";
import Chai from "../../assets/Chai.jpg";
import Coffee from "../../assets/Coffee.jpg";
import Lassi from "../../assets/Lassi.jpg";
import Nimbu from "../../assets/Nimbu.jpg";
import Sugarcane from "../../assets/Sugarcane.jpg";
import Cktika from "../../assets/Chickentika.jpeg";
import Mraja from "../../assets/Mac.jpeg";
import Grilled from "../../assets/Grilled Chicken Burger.jpeg";
import Classic from "../../assets/Classic.jpg";

const Menuburgerlist = [
  {
    id: 1,
    Category: "Veg",
    Name: "Aloo Tikki Burger",
    Img: aloo,
    Discription:
      "Savory potato patty with Indian spices, served in a soft bun.",
    price: 99,
  },
  {
    id: 2,
    Category: "Veg",
    Name: "Paneer Tikka Burger",
    Img: paneer,
    Discription:
      "Grilled paneer patty infused with spices, nestled in a fluffy bun.",
    price: 119,
  },
  {
    id: 3,
    Category: "Veg",
    Name: "Veggie Masala Burger",
    Img: masala,
    Discription:
      "Zesty veggie patty infused with aromatic Indian spices, served irresistibly.",
    price: 129,
  },
  {
    id: 4,
    Category: "Veg",
    Name: "Spicy Chickpea Burger",
    Img: spicy,
    Discription:
      "Fiery chickpea patty seasoned with bold spices, nestled in a bun.",
    price: 129,
  },
  {
    id: 5,
    Category: "Veg",
    Name: "Veg Cheeseburger",
    Img: cheeseburger,
    Discription:
      "Succulent veggie patty topped with melted cheese, lettuce, tomato, and condiments.",
    price: 149,
  },

  {
    id: 6,
    Category: "Veg",
    Name: "Crispy Veg Burger",
    Img: cripsy,
    Discription:
      "Crunchy veggie patty nestled in a soft bun with fresh toppings.",
    price: 149,
  },
  {
    id: 7,
    Category: "Veg",
    Name: "Veg tandoori burger",
    Img: tandoor,
    Discription:
      "Grilled vegetable patty infused with tandoori spices, served in a bun.",
    price: 159,
  },
  {
    id: 8,
    Category: "Veg",
    Name: "Mushroom Veggie Burger",
    Img: falafal,
    Discription:
      "Mushrooms are the base for this hearty veggie burger that relies on Parmigiano-Reggiano, oregano, and garlic for a burst of flavor.",
    price: 169,
  },
  {
    id: 9,
    Category: "Veg",
    Name: "Soya Kebab Burger",
    Img: soya,
    Discription:
      "Soybean kebab patty, fresh veggies, tangy sauce, nestled in soft bun.",
    price: 169,
  },
  {
    id: 10,
    Category: "Veg",
    Name: "Veg Burgir King",
    Img: veg,
    Discription:
      "Hearty veggie patty, lettuce, tomato, cheese, mayo, in a soft bun.",
    price: 199,
  },
  {
    id: 11,
    Category: "Non-Veg",
    Name: "Chicken Tikka Burger",
    Img: Cktika,
    Discription:
      "Juicy chicken tikka patty with aromatic spices, served in soft bun.",
    price: 119,
  },
  {
    id: 12,
    Category: "Non-Veg",
    Name: "Chicken Maharaja Mac",
    Img: Mraja,
    Discription:
      "Regal chicken patty crowned with special sauce, lettuce, cheese, in bun.",
    price: 129,
  },
  {
    id: 13,
    Category: "Non-Veg",
    Name: "McChicken Burger",
    Img: McChicken,
    Discription: "A classic from BURGIR, featuring a crispy chicken patty..",
    price: 129,
  },
  {
    id: 14,
    Category: "Non-Veg",
    Name: "Crispy Chicken Burger",
    Img: CrispyChicken,
    Discription:
      "A crispy chicken fillet with fresh lettuce, mayo, and a toasted bun for a delicious bite.",
    price: 129,
  },
  {
    id: 15,
    Category: "Non-Veg",
    Name: "Grilled Chicken Burger",
    Img: Grilled,
    Discription:
      "Juicy grilled chicken nestled with lettuce, tomato, and tangy sauce.",
    price: 139,
  },
  {
    id: 16,
    Category: "Non-Veg",
    Name: "Peri Peri Chicken Burger",
    Img: Peri,
    Discription:
      "A spicy Peri Peri chicken fillet with fresh lettuce, mayo, and a toasted bun for flavor.",
    price: 159,
  },
  {
    id: 17,
    Category: "Non-Veg",
    Name: "Tandoori Chicken Burger",
    Img: Tandoori,
    Discription:
      "A juicy chicken patty marinated in tandoori spices, topped with lettuce, onions, and creamy mayo.",
    price: 169,
  },
  {
    id: 18,
    Category: "Non-Veg",
    Name: "Double Decker Chicken Burger",
    Img: Double,
    Discription:
      "Double-layered chicken patties with cheese, lettuce, and special sauce in a toasted bun for a hearty meal.",
    price: 189,
  },
  {
    id: 19,
    Category: "Non-Veg",
    Name: "Spicy Chicken Burger",
    Img: SpicyChicken,
    Discription:
      "A flavorful burger with a spicy chicken patty, fresh veggies, and zesty sauces on a toasted bun.",
    price: 199,
  },
  {
    id: 20,
    Category: "Non-Veg",
    Name: "Classic Chicken Burger",
    Img: Classic,
    Discription:
      "Juicy grilled chicken patty, crisp lettuce, tomatoes, and mayo in a soft toasted bun.",
    price: 209,
  },
  {
    id: 21,
    Category: "Drinks",
    Name: "Masala Chai",
    Img: Chai,
    Discription:
      "A spiced tea brewed with black tea, milk, and a blend of aromatic spices.",
    price: 20,
  },
  {
    id: 22,
    Category: "Drinks",
    Name: "Coffee",
    Img: Coffee,
    Discription: "A strong coffee brewed using a traditional Indian filter.",
    price: 30,
  },
  {
    id: 23,
    Category: "Drinks",
    Name: "Lassi",
    Img: Lassi,
    Discription:
      "A yogurt-based drink, which can be sweet or savory, often flavored with fruits .",
    price: 35,
  },
  {
    id: 24,
    Category: "Drinks",
    Name: "Nimbu Pani",
    Img: Nimbu,
    Discription:
      "A simple and refreshing lemon drink mixed with water, sugar, and salt.",
    price: 30,
  },
  {
    id: 25,
    Category: "Drinks",
    Name: "Sugarcane Juice",
    Img: Sugarcane,
    Discription:
      "Freshly pressed juice from sugarcane, often flavored with a dash of lime ",
    price: 40,
  },
];
export default Menuburgerlist;
