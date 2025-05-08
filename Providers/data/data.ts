import HomeImgOne from "@/public/hero/hero-img-one.png";
import HomeImgTwo from "@/public/hero/hero-img-two.png";
import HomeImgThree from "@/public/hero/hero-img-three.png";
import HomeImgFour from "@/public/hero/hero-img-four.png";
import HomeImgFive from "@/public/hero/hero-image-five.png";
import imgOne from "@/public/sub/credit-card-svgrepo-com.png";
import imgTwo from "@/public/sub/file-3-svgrepo-com 1.png";
import imgThree from "@/public/sub/light-bulb-svgrepo-com 1.png";
import imgFour from "@/public/sub/Group.png";
import personImg from "@/public/slide-img/img-one.png";
import personImgTwo from "@/public/slide-img/img-two.png";
import personImgThree from "@/public/slide-img/img-three.png";
import personImgFour from "@/public/slide-img/img-four.png";
import personImgFive from "@/public/slide-img/img-five.png";
import slideImg from "@/public/sub/benefits/one-img.png";
import slideImgTwo from "@/public/sub/benefits/two-img.png";
import slideImgThree from "@/public/sub/benefits/three-img.png";
import slideImgFour from "@/public/sub/benefits/four-img.png";
import consumerImg from "@/public/sub/consumers.png";
import vendorImg from "@/public/sub/vendors.png";
import financialImg from "@/public/sub/financial.png";
import FidelityBankImg from "@/public/banks/fidelity.png";
import FewtureBankImg from "@/public/banks/fewchore.png";
import RenMoneyBankImg from "@/public/banks/renmoney.png";
import OptimusBankImg from "@/public/banks/optimus.png";
import AlternativeBankImg from "@/public/banks/alernative.png";
// import WemaBankImg from "@/public/banks/wema.png";
import StanbicBankImg from "@/public/banks/stanbix.png";
import LetsBankImg from "@/public/banks/letshego.png";

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

export const PeopleData = [
  { name: "Obinna Chuckwu", role: "Canteen Owner at Unilag", img: personImg },
  { name: "Adaeze Nwosu", role: "Shop Owner", img: personImgTwo },
  { name: "Ify Uche", role: "Graphic Designer", img: personImgThree },
  {
    name: "Chinonso Okafor",
    role: "Trader at Lagos Market",
    img: personImgFour,
  },
  { name: "Emeka Rbe", role: "Store Manager", img: personImgFive },
  { name: "Ify Uche", role: "Graphic Designer", img: personImgThree },
  {
    name: "Chinonso Okafor",
    role: "Trader at Lagos Market",
    img: personImgFour,
  },
];

export const BenefitsHeroSlideShowItems = [
  {
    img: slideImg,
    heroText: "Your First Car with Credit",
    btnText: "Get Started",
    description:
      "We’ve partnered with Autochek to make your first car purchase as easy as it should be. Own a car for as little as ₦100,000, spread conveniently over 3 years.",
  },
  {
    img: slideImgTwo,
    heroText: "Power Up with Solar",
    btnText: "Get Started",
    description:
      "Say goodbye to blackouts! Through our partnership with top solar providers, you can install reliable solar systems for your home or business with flexible payment plans starting from ₦20,000/month.",
  },
  {
    img: slideImgThree,
    heroText: "Upgrade Your Gadgets",
    btnText: "Get Started",
    description:
      "Need a new phone, laptop, or work device? Get access to the latest gadgets and spread payments over 6–12 months—powered by verified tech retailers.",
  },
  {
    img: slideImgFour,
    heroText: "Move into Your Dream Home",
    btnText: "Get Started",
    description:
      "We’re making home ownership possible. Credicorp partners with real estate developers to offer flexible credit plans, so you can buy or finish your home with ease.",
  },
];

export const BenefitData = [
  {
    img: consumerImg,
    text: "Consumers",
    btnText: "Access Your Credit",
    description:
      "Take control of your financial future with easy, transparent access to credit. ",
  },
  {
    img: financialImg,
    text: "Financial Institutions",
    btnText: "Become a Partner",
    description:
      "Access capital or credit guarantees to expand consumer credit.  ",
  },
  {
    img: vendorImg,
    text: "Vendors & Manufacturers",
    btnText: "Grow with CREDICORP",
    description: "Grow your revenue with accelerated credit backed consumers.",
  },
];

export const HIWData = [
  {
    id: "01",
    text: "Check Your Eligibility",
    description: "Answer a few quick questions. ",
  },
  {
    id: "02",
    text: "Choose a Financial Institution",
    description: "Receive a decision in record time.",
  },
  {
    id: "03",
    text: "Apply & Get Approved",
    description: "Receive a decision in record time.",
  },
  {
    id: "04",
    text: "Receive Your Credit",
    description: "Ready to fuel your goals.",
  },
];

export const BankImg = [
  FidelityBankImg,
  OptimusBankImg,
  FewtureBankImg,
  RenMoneyBankImg,
  StanbicBankImg,
  AlternativeBankImg,
  LetsBankImg,
];
