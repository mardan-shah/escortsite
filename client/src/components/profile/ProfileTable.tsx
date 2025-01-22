import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

interface Attribute {
  gender: string;
  age: string;
  eyes: string;
  hairColor: string;
  pubicHair: string;
  bustSize: string;
  bustType: string;
  travel: string;
  weight: string;
  height: string;
  ethnicity: string;
  orientation: string;
  smoker: string;
  tattoo: string;
  piercing: string;
  nationality: string;
  availableFor: string;
  languages: string;
  meetingWith: string;
}

interface Value {
  [key: string]: string | number | string[];
}

const info: { attribute: Attribute; value: Value } = {
  attribute: {
    gender: "Gender",
    age: "Age",
    eyes: "Eye Color",
    hairColor: "Hair Color",
    pubicHair: "Pubic Hair",
    bustSize: "Bust Size",
    bustType: "Bust Type",
    travel: "Travel",
    weight: "Weight",
    height: "Height",
    ethnicity: "Ethnicity",
    orientation: "Orientation",
    smoker: "Smoker",
    tattoo: "Tattoo",
    piercing: "Piercing",
    nationality: "Nationality",
    availableFor: "Available For",
    languages: "Languages",
    meetingWith: "Meeting With",
  },
  value: {
    gender: "Female",
    age: 28,
    eyes: "Brown",
    hairColor: "Blonde",
    pubicHair: "Shaved",
    bustSize: "D",
    bustType: "Natural",
    travel: "Countrywide",
    weight: "53 kg / 117 lbs",
    height: "165 cm / 5'5\"",
    ethnicity: "Caucasian (white)",
    orientation: "Straight",
    smoker: "No",
    tattoo: "No",
    piercing: "No",
    nationality: "Dutch",
    availableFor: "Outcall",
    languages: ["English"],
    meetingWith: "Man",
  },
};

const availability = {
  Monday: "15:00-03:00",
  Tuesday: "Not available",
  Wednesday: "15:00-03:00",
  Thursday: "13:00-01:00",
  Friday: "Not available",
  Saturday: "13:00-01:00",
  Sunday: "15:00-03:00",
};

const services = [
  { name: "69 position", included: true },
  { name: "Anal", included: true },
  { name: "BDSM", included: true },
  { name: "Bondage", included: true },
  { name: "Casual photos", included: true },
  { name: "Classic sex", included: true },
  { name: "Couples", included: true },
  { name: "Cum on face", included: true },
  { name: "Cum in mouth", included: true },
  { name: "Cunnilingus", included: true },
  { name: "Deepthroat", included: true },
  { name: "Dirty talk", included: true },
  { name: "Duo with girl", included: true },
  { name: "Erotic massage", included: true },
  { name: "Findom", included: true },
  { name: "Fingering", included: true },
  { name: "Foot fetish", included: true },
  { name: "Kissing", included: true },
  { name: "GFE", included: true },
  { name: "Give golden shower", included: true },
  { name: "Group sex", included: true },
  { name: "Handjob", included: true },
  { name: "Kamasutra", included: true },
  { name: "Masturbation", included: true },
  { name: "Oral without condom", included: true },
  { name: "Pornstar experience", included: true },
  { name: "Prostate massage", included: true },
  { name: "Receive golden shower", included: true },
  { name: "Rimming active", included: true },
  { name: "Rimming passive", included: true },
  { name: "Role play", included: true },
  { name: "Sex between breasts", included: true },
  { name: "Sex toys", included: true },
  { name: "Squirting", included: true },
  { name: "Strapon service", included: false, price: "45€" },
  { name: "Striptease", included: false, price: "65€" },
  { name: "Submissive", included: false, price: "85€" },
  { name: "Swallowing", included: false, price: "100€" },
  { name: "Uniforms", included: false, price: "140€" },
  { name: "With 2 men", included: false, price: "150€" },
];

const paymentMethods = [
  { method: "Visa", available: true },
  { method: "American Express", available: true },
  { method: "PayPal", available: true },
  { method: "Dollar Cash", available: false },
  { method: "Euro Cash", available: false },
];

const InfoTable = () => (
  <Table className="border border-gray-300 my-4 text-gray-500 ">
    <TableHeader className="">
      <TableRow className="bg-primarypink text-white hover:bg-primarypink/90 ">
        <TableHead colSpan={2} className="text-white ">
          Information
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Object.entries(info.attribute).map(([key, label], index) => (
        <TableRow
          key={key}
          className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50 rounded-md" : "rounded-md"}`}
        >
          <TableCell className=""> {label}</TableCell>
          <TableCell className="">
            {Array.isArray(info.value[key])
              ? info.value[key].join(", ")
              : info.value[key] || "N/A"}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const AvailabilityTable = () => (
  <Table className="border border-gray-300 my-4 text-gray-500 ">
    <TableHeader>
      <TableRow className="bg-primarypink text-white hover:bg-primarypink/90 ">
        <TableHead className="text-white">Day</TableHead>
        <TableHead className="text-white">Hours</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {Object.entries(availability).map(([day, hours], index) => (
        <TableRow
          key={day}
          className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50 rounded-md" : "rounded-md"}`}
        >
          <TableCell className="font-medium">{day}</TableCell>
          <TableCell>{hours}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ServicesTable = () => (
  <Table className="border border-gray-300 my-4 text-gray-500 ">
    <TableHeader>
      <TableRow className="bg-primarypink text-white hover:bg-primarypink/90 ">
        <TableHead className="text-white">Service</TableHead>
        <TableHead className="text-white">Included</TableHead>
        <TableHead className="text-white">Price (if extra)</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {services.map(({ name, included, price }, index) => (
        <TableRow
          key={name}
          className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50 rounded-md" : "rounded-md"}`}
        >
          <TableCell className="font-medium">{name}</TableCell>
          <TableCell>
            {included ? <Check className="text-green-500" /> : <X className="text-red-500" />}
          </TableCell>
          <TableCell>{price || " "}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const PaymentMethodsTable = () => (
  <Table className="border border-gray-300 my-4 text-gray-500 ">
    <TableHeader>
      <TableRow className="bg-primarypink text-white hover:bg-primarypink/90 ">
        <TableHead className="text-white">Payment Method</TableHead>
        <TableHead className="text-white">Available</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {paymentMethods.map(({ method, available }, index) => (
        <TableRow
          key={method}
          className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50 rounded-md" : "rounded-md"}`}
        >
          <TableCell className="font-medium">{method}</TableCell>
          <TableCell>
            {available ? <Check className="text-green-500" /> : <X className="text-red-500" />}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const ProfileTable = () => (
  <div className="p-4">
    <InfoTable />
    <AvailabilityTable />
    <ServicesTable />
    <PaymentMethodsTable />
  </div>
);

export default ProfileTable;
