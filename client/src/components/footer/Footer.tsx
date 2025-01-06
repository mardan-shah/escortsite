import Link from "next/link";
import Image from "next/image";

const paymentMethods = [
  { src: "/Visa.png", alt: "Visa", label: "VISA" },
  { src: "/AmericanExpress.png", alt: "American Express", label: "AMERICAN EXPRESS" },
  { src: "/Paypal.png", alt: "PayPal", label: "PAYPAL" },
  { src: "/dollar.png", alt: "Dollar", label: "DOLLAR CASH" },
  { src: "/euro.png", alt: "Euro", label: "EURO CASH" },
];

const Footer = () => {
  return (
    <footer className="pt-12 md:py-16 border-t-4 border-primarypink bg-white">
      <div className="w-[90%] mx-auto">
        <div className="container flex flex-col md:flex-row gap-8">
          {/* Left Content Section */}
          <div className="md:w-1/2">
            <div className="flex mx-10 text-2xl text-gray-500 font-medium mb-6">
              <span>Hornyneigbour</span>
              <Image
                src="/logogray.svg"
                alt="logo"
                width={24}
                height={24}
                className="ml-2"
              />
            </div>
            <div className="flex justify-stretch gap-10 items-start">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/plans"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Subscription plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advertise"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Advertisement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Country
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/be"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Belgium
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nl"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Netherlands
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uk"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      United Kingdom
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Cards Section */}
          <div className="hidden md:block md:w-1/2 mt-10">
            <div className="grid gap-4">
              {/* First Row: 3 Items */}
              <div className="grid grid-cols-3 gap-4">
                {paymentMethods.slice(0, 3).map((method, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 text-center w-full p-4"
                  >
                    <Image src={method.src} alt={method.alt} width={40} height={40} />
                    <span className="text-md text-muted-foreground">{method.label}</span>
                  </div>
                ))}
              </div>
              {/* Second Row: 2 Items */}
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.slice(3).map((method, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 text-center w-full p-4"
                  >
                    <Image src={method.src} alt={method.alt} width={40} height={40} />
                    <span className="text-md text-muted-foreground">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <p className="mt-8 text-sm text-muted-foreground">
          This website serves as both a platform for advertising and a source of
          information. It&apos;s important to clarify that we are not affiliated
          with or responsible for any of the websites or individuals mentioned
          here. Our primary focus is on selling advertising space exclusively;
          we are not associated with escort services or engaged in any aspects
          of escorting or prostitution. It&apos;s vital to understand that we do
          not assume any liability for the content or actions of third-party
          websites or individuals that you might encounter by clicking on links
          or using contact information from this portal.
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6">
        <h1 className="text-center text-muted-foreground text-md b-0">
          2024 Copyright by hornyneigbour
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
