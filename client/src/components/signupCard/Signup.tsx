import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
interface AccountCardProps {
  title: string;
  imageSrc: string;
  features: string[];
  navigateTo: string; // Prop to specify the route to navigate to
}

const SignupCard = ({ title, imageSrc, features, navigateTo }: AccountCardProps) => {
  return (
    <Card className="border-2 flex flex-col">
      <CardHeader>
        <CardTitle className="text-primarypink text-center font-bold text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-[4/5] mb-4">
          <Image
            alt={`${title} profile`}
            className="rounded-lg object-cover w-full h-full"
            src={imageSrc}
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-pink-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Link href={navigateTo} passHref className="w-full mx-auto">
          <Button className="w-full bg-primarypink hover:bg-secondarypink w-full mx-auto">
            Create Account
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
