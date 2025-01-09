import Link from "next/link";
import { Button } from "@/components/ui/button";

const Advertise = () => {
  return (
    <div className="w-full h-[60vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center text-center py-2" style={{ backgroundImage: "url('/young.png')" }}>
      <div className="w-3/4 px-6 py-8  ">
        <h1 className="text-lg font-bold mb-4 sm:text-2xl md:text-3xl">Advertise with us!</h1>
        <p className="text-sm mb-6 sm:text-md md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempore architecto aliquam illum corporis adipisci. Amet quibusdam magnam enim, dolore asperiores dolorem maxime aperiam ipsam cumque nulla, ullam quis odio? Excepturi explicabo quasi consequuntur non numquam facere autem corrupti expedita quia totam obcaecati sapiente eligendi reiciendis doloribus id, temporibus atque labore sint, fugiat sunt modi cumque nostrum. Id, dolore recusandae?</p>
        <Link href='/advertise'>
          <Button className="bg-primarypink px-6 py-3 text-lg  sm:px-5 sm:py-2 sm:text-md md:px-6 md:py-3 md:text-lg">Advertise now!</Button>
        </Link>
      </div>
    </div>
  );
}
 
export default Advertise;