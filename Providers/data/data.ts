import HomeImgOne from "@/public/hero/hero-img-one.png";
import HomeImgTwo from "@/public/hero/hero-img-two.png";
import HomeImgThree from "@/public/hero/hero-img-three.png";
import HomeImgFour from "@/public/hero/hero-img-four.png";
import HomeImgFive from "@/public/hero/hero-image-five.png";
// import imgOne from "@/public/sub/credit-card-svgrepo-com.png";
import imgTwo from "@/public/sub/file-3-svgrepo-com 1.png";
import imgThree from "@/public/sub/light-bulb-svgrepo-com 1.png";
import imgFour from "@/public/hero/learning-school_svgrepo.com.png";
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
import WemaBankImg from "@/public/banks/wema.png";
import StanbicBankImg from "@/public/banks/stanbix.png";
import LetsBankImg from "@/public/banks/letshego.png";
import TestimonialImgOne from "@/public/testimonial/testimonial-one.jpg";
import TestimonialImgTwo from "@/public/testimonial/testimonial-two.png";
import NordImg from "@/public/news/nord.png";
import AccionImg from "@/public/news/accion.png";
import MobilityImg from "@/public/news/mobility.png";
import RandEllipseOne from "@/public/ellipse/ellipse-five.png";
import RandEllipseTwo from "@/public/ellipse/ellipse-two.png";
import RandEllipseThree from "@/public/ellipse/ellipse-one.png";
import RandEllipseFour from "@/public/ellipse/eliipse-four.png";
import RandEllipseFive from "@/public/ellipse/ellipse-three.png";
import OfferImgHouse from "@/public/offer-slide/house-svgrepo-com 1.png";
import OfferImgCar from "@/public/offer-slide/car-svgrepo-com 1.png";
import OfferImgcreditCard from "@/public/offer-slide/credit-card-svgrepo-com 1.png";
import OfferImgBook from "@/public/offer-slide/book-closed-svgrepo-com (1).png";
import OfferImgShop from "@/public/offer-slide/shop-svgrepo-com 1.png";
import OfferImgMac from "@/public/offer-slide/macbook-pro-svgrepo-com.png";
import NimcImg from "@/public/about/gov/nimc.png";
import NimImg from "@/public/about/gov/nic.png";
import FircImg from "@/public/about/gov/firc.png";
import COAImg from "@/public/about/gov/coa.png";
import BoiImg from "@/public/about/gov/boi.png";
import FccpcImg from "@/public/about/gov/fccpc.png";
import MofiImg from "@/public/about/gov/mofi.png";
import AboutNameOtunba from "@/public/about/about-names/otunba.png";
import AboutNameAisha from "@/public/about/about-names/aisha.png";
import AboutNameUzoma from "@/public/about/about-names/uzoma.png";
import AboutNameOlanike from "@/public/about/about-names/olanike.png";
import CollabImg from "@/public/calm/key/collab.png";
import LeafImg from "@/public/calm/key/leaf.png";
import AccessImg from "@/public/calm/key/access.png";
import FinanceImg from "@/public/calm/key/finanace.png";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How to Apply", href: "/credit" },
  {
    label: "Our Initiatives",
    href: "/initiatives",
    subItems: [
      { label: "C.A.L.M Fund", href: "/initiatives/calm-fund" },
      { label: "S.C.A.L.E", href: "/initiatives/scale" },
    ],
  },
  // { label: "Impact", href: "/impact" },
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
    heroText: "Upgrade Your Home",
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
    heroText: "Credit? ",
    coloredText: "It's Your Superpower",
    description:
      "Inflation is hitting hard, and waiting for 'someday' isn't an option. Credit can be your shield against rising costs and your start tp achieving your goals. Get the flexibility you need to fund your education, start that business, or access the tech you need to stay ahead. ",
  },
];

export const defaultServiceItems = [
  // {
  //   id: 1,
  //   title: "Enabling Credit Access",
  //   description:
  //     "We link consumers with financial institutions to streamline credit.",
  //   icon: imgOne,
  //   bgColor: "bg-white",
  // },
  {
    id: 2,
    title: "Capital",
    description:
      "Providing wholesale funding and credit guarantees to Financial Institutions committed to expanding consumer credit access today.",
    icon: imgTwo,
  },
  {
    id: 3,
    title: "Infrastructure",
    description:
      "Strengthening Nigeria’s consumer credit infrastructure, also ensuring every economically active citizen has a comprehensive credit score.",
    icon: imgThree,
  },
  {
    id: 4,
    title: "Cultural Re-orientation",
    description:
      "Helping Nigerians see credit as a tool to improve their lives, and guiding institutions on effective consumer credit underwriting as a path to growth.",
    icon: imgFour,
  },
];

export const PeopleData = [
  { name: "Ginika Amadi", role: "Canteen Owner at Unilag", img: personImg },
  { name: "Mustapha Bello", role: "Shop Owner", img: personImgTwo },
  { name: "Mayowa Adeyemi", role: "Graphic Designer", img: personImgThree },
  {
    name: "Aminat Mubarakah",
    role: "Trader at Lagos Market",
    img: personImgFour,
  },
  { name: "Emeka Ibe", role: "Store Manager", img: personImgFive },
  { name: "Ify Uche", role: "Graphic Designer", img: personImgThree },
  {
    name: "Chinaza Okafor",
    role: "Trader at Lagos Market",
    img: personImgFour,
  },
];

export const BenefitsHeroSlideShowItems = [
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
    img: slideImg,
    heroText: "Your First Car with Credit",
    btnText: "Get Started",
    description:
      "We’ve partnered with Autochek to make your first car purchase as easy as it should be. Own a car for as little as ₦100,000, spread conveniently over 3 years.",
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
    btnText: "Become with the vendor",
    description: "Grow your revenue with accelerated credit backed consumers.",
  },
];

export const HIWData = [
  {
    id: "01",
    text: "Fill our Credit Interest Form",
    description: "Help us understand your needs. ",
  },
  {
    id: "02",
    text: "Choose a Financial Institution (PFI)",
    description: "Select a PFI that's right for you.",
  },
  {
    id: "03",
    text: "Apply for Credit (with preferred PFI)",
    description: "Submit your application and get approved*.",
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
  WemaBankImg,
  RenMoneyBankImg,
  StanbicBankImg,
  AlternativeBankImg,
  LetsBankImg,
];

export const TestimonialData = [
  {
    img: TestimonialImgOne,
    text: "I used to struggle to get small business loans. CREDICORP made it simple, and now my shop is thriving",
    name: "Fatima A. ",
    role: "Entrepreneur",
  },
  {
    img: TestimonialImgTwo,
    text: "In the heart of Nigeria, credit is the lifeblood of entrepreneurship. It fuels ambition and fosters growth in every community.",
    name: "Olanike Kolawole",
    role: "Executive Director (Operations)",
  },
];

export const NewsData = [
  {
    img: MobilityImg,
    text: "Mobility Expansion",
    btnText: "Read more",
    description: "Pre-qualification/expression of interest (EOI)",
    date: "Apr 30 2025",
  },
  {
    img: AccionImg,
    text: "Accion Partnership",
    btnText: "Read more",
    description: "Pre-qualification/expression of interest (EOI)",
    date: "Apr 30 2025",
  },
  {
    img: NordImg,
    text: "Nord Automobile Partnership",
    btnText: "Read more",
    description: "Pre-qualification/expression of interest (EOI)",
    date: "Apr 30 2025",
  },
];
export const footerData = [
  {
    title: "Organization",
    links: ["About Us", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["How To Apply For Credit", "Becoma A Partner"],
  },
  {
    title: "Initiatives & Programs",
    links: ["C.A.L.M Fund", "S.C.A.L.E"],
  },
  // {
  //   title: "Stay Connected",
  //   links: ["Partner With Us", "Support Our Mission", "News & Events"],
  // },
];

export const Ellipse = [
  RandEllipseOne,
  RandEllipseTwo,
  RandEllipseThree,
  RandEllipseFour,
  RandEllipseFive,
];

export const offerData = [
  { text: "Get your first car with Credicorp", img: OfferImgCar },
  {
    text: "24/7 access to credit loans with Credicorp",
    img: OfferImgcreditCard,
  },
  {
    text: "Grow your business today with Credicorp",
    img: OfferImgShop,
  },
  {
    text: "Access school fees credit when you need it",
    img: OfferImgBook,
  },
  {
    text: "Upgrade your tech—get the latest devices with Credicorp",
    img: OfferImgMac,
  },
  {
    text: "Turn your rent into ownership with Credicorp",
    img: OfferImgHouse,
  },
];

export const AboutGovImg = [
  MofiImg,
  NimcImg,
  NimImg,
  FircImg,
  COAImg,
  BoiImg,
  FccpcImg,
];
export const IdentificationData = [
  {
    name: "Otunba Aderemi Abdul",
    title: "Chairman",
    quote:
      "In Nigeria, credit is not just a financial tool; it's a bridge to dreams and aspirations. Trust in the process, and the rewards will follow.",
    imageUrl: AboutNameOtunba,
  },
  {
    name: "Uzoma Nwagba",
    title: "Managing Director/Chief Executive Officer",
    quote:
      "Believing in credit is believing in the future. In Nigeria, every loan is a step towards progress and innovation.",
    imageUrl: AboutNameUzoma,
  },
  {
    name: "Olanike Kolawole",
    title: "Executive Director (Operations)",
    quote:
      "In the heart of Nigeria, credit is the lifeblood of entrepreneurship. It fuels ambition and fosters growth in every community.",
    imageUrl: AboutNameOlanike,
  },
  {
    name: "Aisha Abdullahi",
    title: "Executive Director (Credit & Portfolio Management)",
    quote:
      "Credit in Nigeria is a testament to resilience. It empowers individuals to turn their visions into reality, one investment at a time.",
    imageUrl: AboutNameAisha,
  },
];

export const KeyFeatures = [
  {
    id: 1,
    title: "Affordable Financing",
    description:
      "The CALM Fund provides loans for converting vehicles to CNG and installing solar energy, easing financial burdens.",
    icon: FinanceImg,
    bgColor: "bg-[#FFF441]",
    borderColor: "white",
  },
  {
    id: 2,
    title: "Environmental Benefits",
    description:
      "The CALM Fund aids the shift to CNG and solar energy, promoting sustainability and lowering carbon emissions.",
    icon: LeafImg,
    bgColor: "bg-[#FFF441]",
    borderColor: "white",
  },
  {
    id: 3,
    title: "Collaborative Effort",
    description:
      "This initiative is a collaboration between MOFI, CREDICORP, and Pi-CNG, pooling resources to tackle energy and transport issues.",
    icon: CollabImg,
    bgColor: "bg-[#FFF441]",
    borderColor: "white",
  },
  {
    id: 4,
    title: "Easy Access",
    description:
      "The CALM Fund aims to ensure everyone has access to the funds they need to make their life greener.",
    icon: AccessImg,
    bgColor: "bg-[#FFF441]",
    borderColor: "white",
  },
];
