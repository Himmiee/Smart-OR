import HomeImgOne from "@/public/hero/hero-img-one.png";
import HomeImgTwo from "@/public/hero/hero-img-two.png";
import HomeImgThree from "@/public/hero/hero-img-three.png";
import HomeImgFour from "@/public/hero/hero-img-four.png";
import HomeImgFive from "@/public/hero/hero-image-five.png";
import imgOne from "@/public/sub/credit-card-svgrepo-com.png";
import imgTwo from "@/public/sub/file-3-svgrepo-com 1.png";
import imgThree from "@/public/sub/light-bulb-svgrepo-com 1.png";
import imgFour from "@/public/sub/Group.png";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Impact", href: "/impact" },
  { label: "Contact Us", href: "/contact" },
];

export const HomeHeroSlideShowItems = [
  {
    img: HomeImgOne,
    heroText: "Live Better,Now",
    coloredText: "With Credit",
    description:
      "At CREDICORP, we make it easier for every Nigerian to access responsible credit, empowering you to do more, achieve more, and build lasting financial confidence.",
  },
  {
    img: HomeImgTwo,
    heroText: "Reach New Milestones",
    coloredText: "With Credit",
    description:
      "At CREDICORP, we make it easier for every Nigerian to access responsible credit, empowering you to do more, achieve more, and build lasting financial confidence.",
  },
  {
    img: HomeImgThree,
    heroText: "Retire Comfortably",
    coloredText: "With Credit",
    description:
      "At CREDICORP, we make it easier for every Nigerian to access responsible credit, empowering you to do more, achieve more, and build lasting financial confidence.",
  },
  {
    img: HomeImgFour,
    heroText: "Achieve Your Dreams",
    coloredText: "With Credit",
    description:
      "At CREDICORP, we make it easier for every Nigerian to access responsible credit, empowering you to do more, achieve more, and build lasting financial confidence.",
  },
  {
    img: HomeImgFive,
    heroText: "Credit? It's Your Superpower,",
    coloredText: "Not Your Kryptonite.",
    description:
      "Inflation is hitting hard, and waiting for 'someday' isn't an option. Credit can be your shield against rising costs and your start tp achieving your goals. Get the flexibility you need to fund your education, start that business, or access the tech you need to stay ahead. ",
  },
];

export const defaultServiceItems = [
  {
    id: 1,
    title: "Enabling Credit Access",
    description:
      "We link consumers with financial institutions to streamline credit.",
    icon: imgOne,
    bgColor: "bg-white",
  },
  {
    id: 2,
    title: "Expanding Capital Access",
    description:
      "We provide funding and guarantees for responsible credit growth.",
    icon: imgTwo,
    bgColor: "bg-white",
  },
  {
    id: 3,
    title: "Cultural Re-orientation",
    description: "We promote responsible credit use to improve lives.",
    icon: imgThree,
    bgColor: "bg-yellow-50",
  },
  {
    id: 4,
    title: "Driving Policy & Innovation",
    description:
      "We collaborate with governments and businesses to enhance financial inclusion.",
    icon: imgFour,
    bgColor: "bg-yellow-50",
  },
];
