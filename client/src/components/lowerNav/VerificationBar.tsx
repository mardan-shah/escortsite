import { BadgeCheck } from "lucide-react";
const VerificationBar = ()=> {
  return (
    <div className="bg-green-50 py-2 text-center text-sm text-green-700 flex justify-center items-center">
      <span>All girls have been checked and verified.</span> <BadgeCheck color="#25bb11" className="h-5 w-5 " />
    </div>
  )
}

export default VerificationBar;

