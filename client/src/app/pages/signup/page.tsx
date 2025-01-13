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
    <section className="w-full py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-primarypink mb-8">
        Create new account
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {accountTypes.map((account, index) => (
            <SignupCard key={index} {...account} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signup;
