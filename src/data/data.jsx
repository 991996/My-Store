import img1 from "@/assets/images/bg1.png";
import img2 from "@/assets/images/jalwary.png";
import img3 from "@/assets/images/electr2.png";
import woman from "@/assets/images/woman.png";
import man from "@/assets/images/man.png";
import girl from "@/assets/images/girl.png";
import boy from "@/assets/images/boy.png";
import jalwary from "@/assets/images/jalwary2.png";
import electronics from "@/assets/images/electronics.png";
import baby from "@/assets/images/baby.png";
import shoes from "@/assets/images/shoes.png";
import accessories from "@/assets/images/Accessories.png";
import smallBG from "@/assets/images/smallBG.png";

export const sliderImages = [
  {
    src: img1,
    mobileImage: smallBG,
    alt: "Slide 1",
    caption: {
      p: "Upgrade your everyday comfort",
      h1: "casual style",
      price: "19",
    },
    buttonColor: "#3777ff",
  },
  {
    src: img2,
    mobileImage: img2,
    alt: "Slide 2",
    caption: {
      p: "Spark your style",
      h1: "Everyday jewelry",
      price: "149",
    },
    buttonColor: "#ffbe86",
  },
  {
    src: img3,
    mobileImage: img3,
    alt: "Slide 3",
    caption: {
      p: "Upgrade instantly",
      h1: "Smart electronics",
      price: "99",
    },
    buttonColor: "#3777ff",
  },
];

export const categories = [
  {
    id: 1,
    name: "Women",
    JSON: "women's clothing",
    image: woman,
  },
  {
    id: 2,
    name: "Men",
    JSON: "men's clothing",
    image: man,
  },
  {
    id: 3,
    name: "Girls",
    image: girl,
  },
  {
    id: 4,
    name: "Boys",
    image: boy,
  },
  {
    id: 5,
    name: "Baby",
    image: baby,
  },
  {
    id: 6,
    name: "Shoes",
    image: shoes,
  },
  {
    id: 7,
    name: "Jewelery",
    JSON: "jewelery",
    image: jalwary,
  },
  {
    id: 8,
    name: "Accessories",
    image: accessories,
  },
  {
    id: 9,
    name: "Electronics",
    JSON: "electronics",
    image: electronics,
  },
];

export const sizeGuide = [
  {
    id: 1,
    size: "xs",
    chest: "34-36",
    waist: "27-29",
    hips: "34.5-36.5",
  },
  {
    id: 2,
    size: "s",
    chest: "36-38",
    waist: "29-31",
    hips: "36.5-38.5",
  },
  {
    id: 3,
    size: "m",
    chest: "38-40",
    waist: "31-33",
    hips: "38.5-40.5",
  },
  {
    id: 4,
    size: "l",
    chest: "40-42",
    waist: "33-36",
    hips: "40.5-43.5",
  },
  {
    id: 5,
    size: "xl",
    chest: "42-45",
    waist: "36-40",
    hips: "43.5-47.5",
  },
  {
    id: 6,
    size: "xxl",
    chest: "45-48",
    waist: "40-44",
    hips: "47.5-51.5",
  },
];
