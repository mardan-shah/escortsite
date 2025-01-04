import LowerNav from "@/components/lowerNav/LowerNav";
import VerificationBar from "@/components/lowerNav/VerificationBar";
import { Carousel } from "@/components/carousal/Carousal";
import Cards from "@/components/cards/Card";


const HomePage = () => {
  const carouselSlides = [
    { image: "https://unsplash.it/1200/600?image=20", title: "Alexandra", subtitle: "Hello everyone!" },
    { image: "https://unsplash.it/1200/600?image=15", title: "Summer Collection", subtitle: "Check out our new profiles" },
    { image: "https://unsplash.it/1200/600?image=12", title: "VIP Experience", subtitle: "Exclusive offers for members" },
  ];

 
  


  return (
    <div>
      <LowerNav />
      <VerificationBar/>
      <Carousel slides={carouselSlides} />
      <Cards />

    </div>
  );
}
 
export default HomePage;