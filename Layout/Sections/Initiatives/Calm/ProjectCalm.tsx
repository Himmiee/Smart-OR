"use client";

import InformationCard from "@/Layout/cards/InfoCard";
import SectionWrapper from "@/Layout/cards/SectionWrapper";
import ImgOne from "@/public/calm/img-one.jpg";
import ImgTwo from "@/public/calm/img-two.png";

export const ProjectCalmComponent = () => {
  return (
    <SectionWrapper backgroundColor="bg-white" showCorners={true}>
      <InformationCard
        title="What is Project C.A.L.M.?"
        description={`To address rising energy and transportation costs, the Ministry of Finance Incorporated (MOFI), the Nigerian Consumer Credit Corporation (CREDICORP), and the Presidential Initiative on Compressed Natural Gas (Pi-CNG) have launched the N10 billion Credit Access for Light and Mobility (CALM) Fund.\n\nThis initiative aims to provide affordable credit for Nigerians converting vehicles to Compressed Natural Gas (CNG) and adopting solar energy systems.`}
        imageSrc={ImgOne}
        reverse
      />

      <InformationCard
        title="A partnership between MoFI, CREDICORP and Pi-CNG"
        description="The CALM Fund is brought to you as a partnership between The Ministry of Finance Incorporated (MoFI), the Nigerian Consumer Credit Corporation (CREDICORP), and the Presidential Initiative on Compressed Natural Gas (Pi-CNG)"
        imageSrc={ImgTwo}
      />
    </SectionWrapper>
  );
};
