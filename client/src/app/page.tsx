import LowerNav from "@/components/lowerNav/LowerNav";
import VerificationBar from "@/components/lowerNav/VerificationBar";
import Cards from "@/components/cards/Card";

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
      {/* Full width div with background image */}
      <div className="w-full h-[60vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center text-center py-2" style={{ backgroundImage: "url('/young.png')" }}>
        <div className="w-3/4 px-6 py-8  ">
          <h1 className="text-lg font-bold mb-4 sm:text-2xl md:text-3xl">Advertise with us!</h1>
          <p className="text-sm mb-6 sm:text-md md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempore architecto aliquam illum corporis adipisci. Amet quibusdam magnam enim, dolore asperiores dolorem maxime aperiam ipsam cumque nulla, ullam quis odio? Excepturi explicabo quasi consequuntur non numquam facere autem corrupti expedita quia totam obcaecati sapiente eligendi reiciendis doloribus id, temporibus atque labore sint, fugiat sunt modi cumque nostrum. Id, dolore recusandae?</p>
          <Link href='/advertise'>
            <Button className="bg-primarypink px-6 py-3 text-lg  sm:px-5 sm:py-2 sm:text-md md:px-6 md:py-3 md:text-lg">Advertise now!</Button>
          </Link>
        </div>
      </div>

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
            <Button variant="outline" className="mt-4 w-32 hover:bg-primarypink hover:text-white shadow-lg">
              Learn more
            </Button>
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