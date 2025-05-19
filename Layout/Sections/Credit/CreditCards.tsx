import { LoanProviderCard } from "@/Layout/cards/LoanCard";
import { loanProviders } from "@/Providers/data/scaledata";


const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      <div className=" gap-6">
        {loanProviders.map((provider, index) => (
          <LoanProviderCard key={index} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
