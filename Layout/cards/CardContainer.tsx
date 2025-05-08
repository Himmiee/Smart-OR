import React, { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  bgImage: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, bgImage }) => {
  return (
    <div
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

export default CardContainer;
