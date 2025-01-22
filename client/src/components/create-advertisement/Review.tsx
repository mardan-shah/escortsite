import ProfileCard from "@/components/profile/UserProfileCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewProps {
  show: (value: boolean) => void;
  next: (value: number) => void;
}

const Review = ({ show, next }: ReviewProps) => {
  const handleBack = () => show(false);
  const handleNext = () => next(3);

  return (
    <div className="w-full">
      <div className=" w-1/2 mx-auto p-5 flex justify-between gap-2 bg-white rounded-lg shadow-xl my-5">
        <Button onClick={handleBack}
          className="w-1/2 bg-primarypink text-white hover:bg-primarypink/90"
          >
          <ChevronLeft />
          Edit Advertisement
        </Button>
        <Button onClick={handleNext}
           className="w-1/2 bg-primarypink text-white hover:bg-primarypink/90"
          >
          
          Subscription Plan
          <ChevronRight />
        </Button>
      </div>
      <ProfileCard />
    </div>
  );
};

export default Review;
