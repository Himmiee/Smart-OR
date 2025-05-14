"use client";

import InformationCard from "@/Layout/cards/InfoCard";
import SectionWrapper from "@/Layout/cards/SectionWrapper";
import ImgOne from "@/public/scale/scale.png";

export const ProjectScaleComponent = () => {
  return (
    <SectionWrapper backgroundColor="bg-white" showCorners={true}>
      <InformationCard
        title="What is Project S.C.A.L.E.?"
        description={`Project S.C.A.L.E. (Securing Consumer Access for Local Enterprises) is a groundbreaking initiative by CREDICORP aimed at fostering the growth of Nigeria's local industries. By channeling consumer credit towards the purchase of goods and services from local vendors and manufacturers, S.C.A.L.E. accelerates demand, grows local industries, and creates jobs.`}
        imageSrc={ImgOne}
        reverse
      />
    </SectionWrapper>
  );
};
