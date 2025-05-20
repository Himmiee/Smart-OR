<h1 align="center">Welcome to credicorp-web 👋</h1>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Credicorp – A modern web application built with Next.js, Tailwind CSS, shadcn/ui, and React Hook Form.

---

## ✨ Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📁 Folder Structure

```
├── .gitignore
├── Layout/
│  ├── Footer.tsx
│  ├── Navbar.tsx
│  ├── Sections/
│  │  ├── About/
│  │  │  ├── Hero.tsx
│  │  │  ├── Identification.tsx
│  │  │  ├── Impact.tsx
│  │  │  ├── PartnersandShareholders.tsx
│  │  ├── Animation.tsx
│  │  ├── Contact/
│  │  │  ├── Hero.tsx
│  │  ├── Credit/
│  │  │  ├── CreditCards.tsx
│  │  │  ├── hero.tsx
│  │  ├── Home/
│  │  │  ├── Benefits.tsx
│  │  │  ├── Hero.tsx
│  │  │  ├── HowItWorks.tsx
│  │  │  ├── Loader.tsx
│  │  │  ├── Mission.tsx
│  │  │  ├── News.tsx
│  │  │  ├── Offers.tsx
│  │  │  ├── Partners.tsx
│  │  │  ├── Server.tsx
│  │  │  ├── Story.tsx
│  │  │  ├── Testimonial.tsx
│  │  │  ├── Thematics.tsx
│  │  ├── Impact/
│  │  │  ├── ImpactGrid.tsx
│  │  │  ├── hero.tsx
│  │  ├── Initiatives/
│  │  │  ├── Calm/
│  │  │  │  ├── Beneficiaries.tsx
│  │  │  │  ├── Benefits.tsx
│  │  │  │  ├── Hero.tsx
│  │  │  │  ├── KeyFeatures.tsx
│  │  │  │  ├── ProjectCalm.tsx
│  │  │  ├── scale/
│  │  │  │  ├── Benefits.tsx
│  │  │  │  ├── Hero.tsx
│  │  │  │  ├── ProjectScale.tsx
│  │  │  │  ├── ScaleVendor.tsx
│  ├── cards/
│  │  ├── CardContainer.tsx
│  │  ├── GridSystemCards.tsx
│  │  ├── IdentificationCard.tsx
│  │  ├── InfoCard.tsx
│  │  ├── LoanCard.tsx
│  │  ├── PeopleCard.tsx
│  │  ├── ScaleCard.tsx
│  │  ├── SectionWrapper.tsx
│  │  ├── ServiceCard.tsx
│  │  ├── SinglePersonCard.tsx
│  │  ├── WrapCard.tsx
│  ├── carousel.tsx
│  ├── comp/
│  │  ├── about/
│  │  │  ├── PartnersSubComponent.tsx
│  │  ├── benefit/
│  │  │  ├── benefitSubComp.tsx
│  │  ├── mission/
│  │  │  ├── MissionComponent.tsx
│  ├── forms/
│  │  ├── ContactForm.tsx
│  ├── modal/
│  │  ├── modal.tsx
│  ├── step/
│  │  ├── step.tsx
│  ├── typo/
│  │  ├── aboutSectionHeader.tsx
│  │  ├── formheader.tsx
│  ├── variants/
│  │  ├── LoaderVariant.ts
│  │  ├── MissionVariants.ts
│  │  ├── counter.tsx
├── Providers/
│  ├── Data/
│  │  ├── data.tsx
│  ├── Query/
│  │  ├── QueryProvider.tsx
│  ├── data/
│  │  ├── data.ts
│  │  ├── scaledata.ts
│  ├── query/
│  │  ├── QProvider.tsx
├── README.md
├── app/
│  ├── (pages)/
│  │  ├── (home)/
│  │  │  ├── page.tsx
│  │  ├── about/
│  │  │  ├── page.tsx
│  │  ├── contact/
│  │  │  ├── page.tsx
│  │  ├── credit/
│  │  │  ├── page.tsx
│  │  ├── impact/
│  │  │  ├── page.tsx
│  │  ├── initiatives/
│  │  │  ├── calm-fund/
│  │  │  │  ├── page.tsx
│  │  │  ├── scale/
│  │  │  │  ├── page.tsx
│  │  ├── layout.tsx
│  ├── globals.css
│  ├── layout.tsx
├── components/
│  ├── ui/
│  │  ├── button.tsx
│  │  ├── carousel.tsx
│  │  ├── checkbox.tsx
│  │  ├── input.tsx
│  │  ├── label.tsx
│  │  ├── popover.tsx
│  │  ├── textarea.tsx
├── components.json
├── eslint.config.mjs
├── generate-readme.js
├── inputs/
│  ├── CustomInput.tsx
│  ├── InputContainer.tsx
│  ├── TextAreaContainer.tsx
├── lib/
│  ├── utils.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│  ├── about/
│  │  ├── about-names/
│  │  │  ├── aisha.png
│  │  │  ├── olanike.png
│  │  │  ├── otunba.png
│  │  │  ├── uzoma.png
│  │  ├── gov/
│  │  │  ├── boi.png
│  │  │  ├── coa.png
│  │  │  ├── fccpc.png
│  │  │  ├── firc.png
│  │  │  ├── mofi.png
│  │  │  ├── nic.png
│  │  │  ├── nimc.png
│  │  ├── hero/
│  │  │  ├── about-hero.jpg
│  │  │  ├── bg-left.png
│  │  │  ├── credi.png
│  │  │  ├── mini-logo.png
│  │  │  ├── tbabs.png
│  ├── banks/
│  │  ├── alernative.png
│  │  ├── fewchore.png
│  │  ├── fidelity.png
│  │  ├── letshego.png
│  │  ├── optimus.png
│  │  ├── renmoney.png
│  │  ├── stanbix.png
│  │  ├── wema.png
│  ├── calm/
│  │  ├── calm.jpg
│  │  ├── carr.png
│  │  ├── img-one.jpg
│  │  ├── img-two.png
│  │  ├── key/
│  │  │  ├── access.png
│  │  │  ├── car.png
│  │  │  ├── collab.png
│  │  │  ├── finanace.png
│  │  │  ├── leaf.png
│  │  ├── solar.png
│  ├── credit/
│  │  ├── credit-info/
│  │  │  ├── abbey.png
│  │  │  ├── accion.png
│  │  │  ├── bank.png
│  │  │  ├── credit-direct.png
│  │  │  ├── eco.png
│  │  │  ├── fastcredit.png
│  │  │  ├── fewchoree.png
│  │  │  ├── letshjgo.png
│  │  │  ├── optimus0bank.png
│  │  │  ├── page.png
│  │  │  ├── v.png
│  │  │  ├── wema-b.png
│  │  ├── credit.png
│  ├── ellipse/
│  │  ├── eliipse-four.png
│  │  ├── ellipse-five.png
│  │  ├── ellipse-one.png
│  │  ├── ellipse-three.png
│  │  ├── ellipse-two.png
│  ├── file.svg
│  ├── five-ta/
│  │  ├── t-five.png
│  │  ├── t-four.png
│  │  ├── t-one.png
│  │  ├── t-three.jpg
│  │  ├── t-two.jpg
│  ├── globe.svg
│  ├── hero/
│  │  ├── bottom-lef.png
│  │  ├── hero-image-five.png
│  │  ├── hero-img-four.png
│  │  ├── hero-img-one.png
│  │  ├── hero-img-three.png
│  │  ├── hero-img-two.png
│  │  ├── learning-school_svgrepo.com.png
│  ├── impact/
│  │  ├── bg-grad.png
│  │  ├── people/
│  │  │  ├── afolabi.png
│  │  │  ├── amina.png
│  │  │  ├── bello.png
│  │  │  ├── bola.png
│  │  │  ├── chijiokor.png
│  │  │  ├── emeka.png
│  │  │  ├── ibrahim.png
│  │  │  ├── ify.png
│  │  │  ├── kehinde.png
│  │  │  ├── nneka.png
│  │  │  ├── okofor.png
│  │  │  ├── otunba.png
│  │  │  ├── sade.png
│  │  │  ├── seun.png
│  │  │  ├── tunde.png
│  ├── logo-asset/
│  │  ├── credicorb.png
│  │  ├── credicorp-logo.png
│  │  ├── footer-logo.png
│  │  ├── footer-print-logo.png
│  ├── news/
│  │  ├── accion.png
│  │  ├── mobility.png
│  │  ├── nord.png
│  ├── next.svg
│  ├── offer-slide/
│  │  ├── book-closed-svgrepo-com (1).png
│  │  ├── car-svgrepo-com 1.png
│  │  ├── credit-card-svgrepo-com 1.png
│  │  ├── house-svgrepo-com 1.png
│  │  ├── macbook-pro-svgrepo-com.png
│  │  ├── shop-svgrepo-com 1.png
│  ├── scale/
│  │  ├── .DS_Store
│  │  ├── Call to action.png
│  │  ├── bg.png
│  │  ├── field.png
│  │  ├── grid/
│  │  │  ├── fieldcar.png
│  │  │  ├── fruit.png
│  │  │  ├── home.png
│  │  │  ├── laptop.png
│  │  ├── hero.jpg
│  │  ├── info.png
│  │  ├── scale.png
│  ├── slide-img/
│  │  ├── img-five.png
│  │  ├── img-four.png
│  │  ├── img-one.png
│  │  ├── img-three.png
│  │  ├── img-two.png
│  ├── sub/
│  │  ├── Container.png
│  │  ├── Footer.png
│  │  ├── Group.png
│  │  ├── Item.png
│  │  ├── Notification Container.png
│  │  ├── Notification.png
│  │  ├── benefits/
│  │  │  ├── four-img.png
│  │  │  ├── one-img.png
│  │  │  ├── three-img.png
│  │  │  ├── two-img.png
│  │  ├── consumers.png
│  │  ├── credit-card-svgrepo-com.png
│  │  ├── file-3-svgrepo-com 1.png
│  │  ├── financial.png
│  │  ├── howitworks.png
│  │  ├── light-bulb-svgrepo-com 1.png
│  │  ├── mission.png
│  │  ├── vendors.png
│  ├── testimonial/
│  │  ├── testimonial-one.jpg
│  │  ├── testimonial-two.png
│  ├── vercel.svg
│  ├── window.svg
├── structure/
│  ├── interface/
│  ├── types/
│  │  ├── types.ts
├── tsconfig.json

```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 🧪 Useful Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run lint      # Run ESLint
```

---

