import { ContactFormComponent } from "@/Layout/forms/ContactForm";
import { ContactData } from "@/Providers/data/scaledata";

export const ContactPage = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-12 py-32 lg:py-16 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
        {/* Left Column: Text + Contact Info */}
        <div className="flex flex-col justify-start space-y-6">
          <div className="lg:pt-12">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Contact Us
            </h1>
            <p className="text-base sm:text-[17px] text-[#667085] mt-4 leading-relaxed">
              At CREDICORP, we value your questions, feedback, and ideas.
              Whether you’re seeking more information about our initiatives,
              need assistance with your account, or simply want to share your
              thoughts, our dedicated team is here to help.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="divide-y divide-gray-300">
            {ContactData.map((item, idx) => (
              <div
                key={idx}
                className={`py-4 ${
                  idx === 0 ? "border-t-0" : "border-t border-gray-200"
                } ${
                  idx !== ContactData.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-sm text-[#4E515E] font-light mt-1">
                  {item.content}
                </p>
                <p className="text-sm font-medium mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full bg-white px-0 sm:px-4 md:px-0 lg:px-8">
          <ContactFormComponent />
        </div>
      </div>
    </div>
  );
};
