import { Link } from "wouter";

interface InitiativeCard {
  icon: string;
  title: string;
  description: string;
  color: string;
  link: {
    text: string;
    href: string;
    textColor: string;
  };
}

const initiatives: InitiativeCard[] = [
  {
    icon: "fas fa-hand-holding-heart",
    title: "Organ Donation",
    description: "We spread awareness about organ donation, debunk myths, and facilitate pledges to help save lives through this noble act.",
    color: "bg-blue-500",
    link: {
      text: "Pledge to donate",
      href: "/contact#organ-donation",
      textColor: "text-blue-600 hover:text-blue-700",
    },
  },
  {
    icon: "fas fa-tint",
    title: "Blood Donation",
    description: "Our regular blood donation camps help maintain blood bank supplies and connect donors with recipients in need.",
    color: "bg-primary",
    link: {
      text: "Become a donor",
      href: "/contact#blood-donation",
      textColor: "text-primary hover:text-sky-500",
    },
  },
  {
    icon: "fas fa-child",
    title: "Anganwadi Support",
    description: "We provide resources and volunteer support to Anganwadis to improve early childhood nutrition and education.",
    color: "bg-sky-500",
    link: {
      text: "Support a center",
      href: "/contact#anganwadi",
      textColor: "text-sky-600 hover:text-primary",
    },
  },
  {
    icon: "fas fa-users",
    title: "Elderly Care",
    description: "Our companionship programs and caregiver training help improve the quality of life for the elderly in our communities.",
    color: "bg-blue-600",
    link: {
      text: "Volunteer your time",
      href: "/contact#elderly-care",
      textColor: "text-blue-600 hover:text-blue-800",
    },
  },
  {
    icon: "fas fa-hands-helping",
    title: "Palliative Care",
    description: "We raise awareness about dignified end-of-life care and provide emotional support to families dealing with terminal illness.",
    color: "bg-primary",
    link: {
      text: "Learn more",
      href: "/contact#palliative-care",
      textColor: "text-primary hover:text-sky-500",
    },
  },
];

const SoulsSection = () => {
  return (
    <section id="souls" className="py-16 bg-gradient-to-br from-sky-100/20 via-blue-100/10 to-sky-200/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-sm uppercase font-semibold px-3 py-1 rounded-full font-heading">
            Social Responsibility
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-4 mb-4 text-neutral-800">
            Souls: Giving with Compassion
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Our "Souls" initiatives reflect the heart of our social mission — to uplift lives and give back to society with genuine compassion and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className={`h-48 ${initiative.color} flex items-center justify-center`}>
                <i className={`${initiative.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3">{initiative.title}</h3>
                <p className="text-neutral-700 mb-4">
                  {initiative.description}
                </p>
                <Link
                  href={initiative.link.href}
                  className={`inline-block font-heading font-semibold ${initiative.link.textColor}`}
                >
                  {initiative.link.text} <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}

          <div className="bg-cover bg-center rounded-lg overflow-hidden shadow-md" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-b53e58fd5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
            <div className="h-full w-full bg-black bg-opacity-40 p-6 flex flex-col justify-end">
              <h3 className="font-heading font-bold text-2xl mb-3 text-white">Your Compassion Matters</h3>
              <p className="text-white mb-4">
                Every act of giving, no matter how small, creates a ripple effect of positive change in our communities.
              </p>
              <Link
                href="/contact#volunteer"
                className="inline-block font-heading font-semibold text-white bg-primary hover:bg-sky-500 py-2 px-4 rounded-full transition"
              >
                Volunteer Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoulsSection;
