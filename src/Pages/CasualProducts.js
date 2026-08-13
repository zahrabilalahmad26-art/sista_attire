// Demo data: each product has 4 colors, each pointing at a DIFFERENT image so
// clicking a swatch visibly swaps the photo. These currently reuse your
// existing occasion thumbnails as stand-ins — replace with real per-color
// product photography for "Casual" when you have it.
import Dress11 from "../assets/ShirtSkirt/Dress1(1).png"
import Dress12 from "../assets/ShirtSkirt/Dress1(2).png"
import Dress13 from "../assets/ShirtSkirt/Dress1(3).png"
import Dress14 from "../assets/ShirtSkirt/Dress1(4).png"
import Dress21 from "../assets/Shirts/Dress1(1).jpeg"
import Dress22 from "../assets/Shirts/Dress1(2).png"
import Dress23 from "../assets/Shirts/Dress1(3).jpeg"
import Dress24 from "../assets/Shirts/Dress1(4).png"
import Dress31 from "../assets/Shirts/Dress2(1).jpeg"
import Dress32 from "../assets/Shirts/Dress2(2).jpeg"
import Dress33 from "../assets/Shirts/Dress2(3).jpeg"
import Dress34 from "../assets/Shirts/Dress2(4).jpeg"
import Dress41 from "../assets/ShirtSkirt/Dress2(1).jpeg"
import Dress42 from "../assets/ShirtSkirt/Dress2(2).png"
import Dress43 from "../assets/ShirtSkirt/Dress2(3).jpeg"
import Dress44 from "../assets/ShirtSkirt/Dress2(4).png"

export const CASUAL_PRODUCTS = [
  {
    id: 1,
    name: "Casual Style One",
    price: "Rs 21,990",
    colors: [
         { color: '#EDE08A', image: Dress13 },
                  { color: '#B5482E', image: Dress14 },
                  { color: '#1c1c1c', image: Dress11 },
                  { color: '#800000', image: Dress12 },
    ],
  },
  {
    id: 2,
    name: "Casual Style Two",
    price: "Rs 24,500",
    colors: [
      { color: '#F0C4CB', image: Dress21 },
                { color: '#1c1c1c', image: Dress22 },
                { color: '#5f6f52', image: Dress23 },
                { color: '#800000', image: Dress24 },
    ],
  },
  {
    id: 3,
    name: "Casual Style Three",
    price: "Rs 19,990",
    colors: [
     { color: '#800020', image: Dress31 },
               { color: '#ffffff', image: Dress32 },
               {color: '#EDE08A',  image: Dress33 },
               { color: '#111111', image: Dress34 },
    ],
  },
  {
    id: 4,
    name: "Casual Style Four",
    price: "Rs 27,000",
    colors: [
   { color: '#8A9A4E', image: Dress41 },
             { color: '#111111', image: Dress42 },
             { color: '#800020', image: Dress43 },
             { color: '#3b2f2f', image: Dress44 },
    ],
  },
]