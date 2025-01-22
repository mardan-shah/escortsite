import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from 'lucide-react';
import Image from "next/image";

interface PlanFeatures {
  name: string;
  price: string;
  label?: string;
  features: string[];
  deactivatedFeatures?: string[];
}

interface SubscriptionPlanProps {
  setActiveComponent: (value: number) => void;
}

export default function SubscriptionPlan({ setActiveComponent }: SubscriptionPlanProps) {
  const submitForm = () => {
    setActiveComponent(1);
  };

  const plans: PlanFeatures[] = [
    {
      name: "Basic",
      price: "130€",
      features: [
        "Add up to 10 photos",
        "Add up to 5 video stories",
        "Booster tokens can be bought",
      ],
      deactivatedFeatures: [
        "Deactivate your ads anytime",
        "Post link to your socials",
        "Ads won't be displayed on basic page (unless using a booster token)",
        "Ad is displayed randomly on below Hot subscription ads"
      ],
    },
    {
      name: "Hot",
      price: "180€",
      label: "Most Popular",
      features: [
        "Add up to 20 photos",
        "Add up to 10 video stories",
        "Booster tokens can be bought",
        "Your ad will get a HOT label",
        "Deactivate your ads anytime",
        "Post link to your socials"
      ],
      deactivatedFeatures: [
        "Ad is displayed randomly on top of Basic subscription ads"
      ],
    },
    {
      name: "VIP",
      price: "200€",
      features: [
        "Booster tokens can be bought",
        "Add up to 35 photos",
        "Add up to 15 video stories",
        "Your ad will get a verified VIP label",
        "Post link to your socials",
        "Deactivate your ads anytime",
        "Ad is displayed in the VIP section",
      ]
    }
  ];

  return (
    <div className="w-full py-6">
      <div className="flex flex-col gap-4 items-center">
        {plans.map((plan) => (
          <Card key={plan.name} className="w-full md:w-2/4 lg:w-2/3">
            <CardHeader className="flex w-full items-start py-0">
              <CardTitle className="text-2xl w-full text-primarypink flex justify-between px-4">
                <div>
                  <h1 className="text-3xl">{plan.name}</h1>
                  <h1 className="text-sm text-red-500">{plan.label}</h1>
                </div>
                <Image
                  src='/Subtract.svg'
                  alt="banner"
                  width={50}
                  height={50}
                  className="-mr-6"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[80%] px-10">
              <div className="text-lg font-bold mb-6">{plan.price}</div>
              <div className="grid grid-cols-2 gap-1 text-sm">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.deactivatedFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-400">
                    <XCircle className="h-3 w-3 text-red-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full mt-6 bg-primarypink hover:bg-primarypink/90"
                onClick={submitForm}
              >
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}