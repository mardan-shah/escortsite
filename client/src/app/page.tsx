import LowerNav from "@/components/lowerNav/LowerNav";
import VerificationBar from "@/components/lowerNav/VerificationBar";
import Cards from "@/components/cards/Card";
import Advertise from "@/components/advertisewithus/Advertise";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousal/Carousal";


const Home = () => {
  return (
    <>
      <LowerNav />
      <VerificationBar />
      <Carousel />
      <Cards />
      <Advertise />

      {/*About us*/}
      <section className="container p-12 md:p-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primarypink">
              About us
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Welcome to HornyNeighbour, the premier platform designed to connect escorts with clients seamlessly and effectively. Our mission is to provide a safe, secure, and user-friendly environment where escorts can advertise their services and reach a broader audience.              </p>
              <p className="leading-relaxed">
                At HornyNeighbour, we understand the importance of visibility and engagement in the escort industry. That’s why we offer comprehensive tools and features to help you stand out. From creating detailed advertisements to tracking performance with advanced statistics, our platform is designed to support your business growth.              </p>
            </div>
            <Link href='/pages/about'>
              <Button variant="outline" className="mt-4 w-32 hover:bg-primarypink hover:text-white shadow-lg">
                Learn more
              </Button>
            </Link>
          </div>
          <div className="flex-1 relative aspect-[4/3] w-full max-w-xl order-1 md:order-2">
            <Image
              src="/image2.png"
              alt="About us illustration"
              className=" object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
    </>
    
  );
}
 
export default Home;