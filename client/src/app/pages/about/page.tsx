import Advertise from "@/components/advertisewithus/Advertise";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-12">
      <h1 className="text-primarypink text-7xl text-center">About Us</h1>
      <div className="w-11/12 md:w-3/4 pt-8">
        <p className="py-4">
          Welcome to HornyNeighbour, the premier platform designed to connect escorts with clients seamlessly and effectively. Our mission is to provide a safe, secure, and user-friendly environment where escorts can advertise their services and reach a broader audience.
        </p>
        <p className="py-4">
          At HornyNeighbour, we understand the importance of visibility and engagement in the escort industry. That’s why we offer comprehensive tools and features to help you stand out. From creating detailed advertisements to tracking performance with advanced statistics, our platform is designed to support your business growth.
        </p>
        <Image
          src="/image2.png"
          width={900}
          height={600}
          alt="About HornyNeighbour"
          className="w-full h-[60vh] object-cover rounded-lg"
        />
        <h2 className="text-primarypink text-2xl pt-8">Who We Are</h2>
        <p className="pt-4">
          HornyNeighbour is a leading online escort platform dedicated to providing top-notch services for both clients and escorts. Our mission is to create a safe, respectful, and enjoyable environment where connections are made, experiences are enriched, and fantasies become reality. We pride ourselves on our professionalism, integrity, and commitment to excellence.
        </p>

        <h2 className="text-primarypink text-2xl pt-8">Our Vision</h2>
        <p className="pt-4">
          Our vision is to be the most trusted and preferred escort service platform globally, renowned for our quality, reliability, and unmatched user experience. We aim to revolutionize the industry by setting new standards in customer satisfaction and escort services.
        </p>

        <h2 className="text-primarypink text-2xl pt-8">Our Features</h2>
        <ul className="list-disc pl-5 pt-4 space-y-2">
          <li>User-Friendly Interface: Our website is intuitive and easy to navigate, ensuring clients can quickly find what they need, and escorts can manage their profiles effortlessly.</li>
          <li>Advanced Search and Filters: Clients can find the perfect match based on location, services, availability, and personal preferences.</li>
          <li>Secure and Discreet: We prioritize user privacy. All interactions and transactions are encrypted and confidential.</li>
          <li>Verified Profiles: We thoroughly verify profiles to ensure authenticity, so clients can book with confidence.</li>
          <li>Responsive Support: Our 24/7 support team is ready to assist with any questions or issues, ensuring a smooth experience for everyone.</li>
        </ul>

        <h2 className="text-primarypink text-2xl pt-8">Our Values</h2>
        <ul className="list-disc pl-5 pt-4 space-y-2">
          <li>Privacy and Security: Ensuring all interactions and transactions are safe and secure.</li>
          <li>User-Friendly Experience: Providing an intuitive platform for escorts to manage profiles and clients to find desired services easily.</li>
        </ul>

        <p>
          Whether you’re an experienced escort or new to the industry, HornyNeighbour is here to help you succeed. Join us today and take advantage of our robust platform to enhance your business and connect with clients who appreciate your services.
        </p>
        <p>
          Thank you for choosing HornyNeighbour. We look forward to supporting your journey and helping you achieve your goals.
        </p>
      </div>
      <div className="py-20">
        <Advertise />
      </div>
    </div>
  );
};

export default About;
