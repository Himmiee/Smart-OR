import Image from "next/image";
import bankImg from "@/public/credit/credit-info/bank.png";

export interface ApplyMethods {
  [key: string]: string;
}

export interface BranchLocations {
  [key: string]: string;
}

export interface LoanProvider {
  name: string;
  tags?: string[];
  applyMethods?: ApplyMethods;
  branchLocations?: BranchLocations;
  subText?: string;
  logo: string;
}

// interface LoanProviderCardProps {
//   provider: LoanProvider;
// }

const methodTitles: Record<string, string> = {
  dial: "Dial:",
  whatsapp: "Whatsapp:",
  call: "Call:",
  visit: "Visit:",
  mobileApp: "Mobile App:",
  googlePlay: "Google Play Store:",
  googlePlayStore: "Google Play Store:",
  appleStore: "Apple Play Store:",
  appStore: "Apple Play Store:",
  webPortal: "Web Portal:",
  onlinePortal: "Online application portal:",
  downloadApp: "Download App:",
  publicSectorLoans: "Public Sector Loans:",
  privateSectorLoans: "Private Sector Loans:",
  lagosStateEmployeeLoans: "Lagos State Employee Loans:",
};

const locationTitles: Record<string, string> = {
  headOffice: "Head Office:",
  ikejaOffice: "Ikeja Office:",
  ibadanOffice: "Ibadan Office:",
  abujaOffice: "Abuja Office:",
  victoriaIsland: "Victoria Island:",
  yaba: "Yaba:",
  allBranches: "All Branches:",
};

const getTitle = (key: string, titleMap: Record<string, string>): string =>
  titleMap[key] ||
  key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1") + ":";

const ApplyMethod: React.FC<{ method: string; value: string }> = ({
  method,
  value,
}) => (
  <div className="flex flex-col py-2">
    <div className="">{getTitle(method, methodTitles)}</div>
    <div className="text-[#108359] w-full  break-words">
      {value.startsWith("http") ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#108359] underline"
        >
          {value}
        </a>
      ) : (
        value
      )}
    </div>
  </div>
);

const BranchLocation: React.FC<{ location: string; address: string }> = ({
  location,
  address,
}) => (
  <div className="flex flex-col md:flex-row gap-1 mb-2">
    <div className="text-gray-700 font-medium">
      {getTitle(location, locationTitles)}
    </div>
    <div className="text-gray-600">{address}</div>
  </div>
);

export const LoanProviderCard = ({ provider }: any) => {
  return (
    <div className="border-[1px] shadow-md bg-white rounded-lg  mb-6 overflow-hidden">
      <div className="p-6">
        {/* Logo and Name Section */}
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {provider.logo && (
              <div className="h-14 w-24  relative">
                <Image
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h2 className="text-2xl font-bold uppercase">{provider.name}</h2>
          </div>

          <Image src={bankImg} alt="img" width={40} height={40} />
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {provider.tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-[#F8F8F8] text-black/80 border-[#0FC583] border-[1px] text-xs px-3 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Apply Section */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">To Apply</h3>

          {provider.applyMethods && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {Object.entries(provider.applyMethods).map(
                ([method, value], index) => (
                  <ApplyMethod
                    key={index}
                    method={method}
                    value={value as any}
                  />
                )
              )}
            </div>
          )}

          {provider.branchLocations && (
            <div className="mt-4">
              <div className="font-medium mb-2">Branch walk-in locations:</div>
              {Object.entries(provider.branchLocations).map(
                ([location, address], index) => (
                  <BranchLocation
                    key={index}
                    location={location}
                    address={address as string}
                  />
                )
              )}
            </div>
          )}

          {provider.subText && (
            <div className="mt-4 max-w-5xl text-gray-600">
              {provider.subText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
