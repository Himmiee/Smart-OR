"use client";

import { NewsCard } from "@/Layout/cards/GridSystemCards";
import { FormHeader } from "@/Layout/typo/formheader";
import { NewsData } from "@/Providers/data/data";

export const NewsPage = () => {
  return (
    <section className="py-12 space-y-12  max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center">
        <FormHeader
          pillText=""
          title="New & Newsworthy"
          description=""
          showPill={false}
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-12">
        {NewsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
};
