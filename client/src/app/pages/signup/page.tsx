import SignupCard from "@/components/signupCard/Signup";

const Signup = () => {
  const accountTypes = [
    {
      title: "MEMBER",
      imageSrc: "/signupman.png?height=400&width=300",
      features: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Incididunt ut labore et dolore",
      ],
      navigateTo: "/pages/signup/member-signup", 
    },
    {
      title: "INDEPENDENT ESCORT",
      imageSrc: "/signupgirl.png?height=400&width=300",
      features: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Incididunt ut labore et dolore",
      ],
      navigateTo: "/pages/signup/independent-escort-signup", 
    },
    {
      title: "ESCORT AGENCY",
      imageSrc: "/signupgirls.png?height=400&width=300",
      features: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Incididunt ut labore et dolore",
      ],
      navigateTo: "/pages/signup/escort-agency-signup", 
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container flex justify-center">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold text-center text-primarypink mb-8">Create new account</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {accountTypes.map((account, index) => (
              <SignupCard key={index} {...account} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
