"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Boost = () => {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("24:00:00");
  const [isBoostActive, setIsBoostActive] = useState(false);
  const [boostInterval, setBoostInterval] = useState<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!isBoostActive) return;

    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeLeft.split(":").map(Number);
      let totalSeconds = hours * 3600 + minutes * 60 + seconds;

      if (totalSeconds > 0) {
        totalSeconds -= 1;
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        setTimeLeft(
          `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}:${String(
            newSeconds
          ).padStart(2, "0")}`
        );
      } else {
        setIsBoostActive(false);
        setTimeLeft("24:00:00");
        clearInterval(timer);
      }
    }, 1000);

    setBoostInterval(timer);

    return () => clearInterval(timer);
  }, [isBoostActive, timeLeft]);

  const handleBoost = () => {
    if (isBoostActive) {
      // Cancel the boost
      setIsBoostActive(false);
      setTimeLeft("24:00:00");
      if (boostInterval) {
        clearInterval(boostInterval);
      }
      setBoostInterval(undefined);
    } else {
      // Activate the boost
      setIsBoostActive(true);
    }
  };

  return (
    <div>
      <div className="w-full bg-gold text-white uppercase my-4 flex justify-evenly h-20">
        <div className="w-1/2 relative">
          <h1 className="w-full absolute bottom-0 p-5 inset-x-0 text-lg">
            get up to <span className="text-5xl">3x</span> more profile visits!{" "}
          </h1>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-white text-gold w-3/4 shadow-lg hover:bg-white/90"
              >
                {isBoostActive ? timeLeft : "Boost Advertisement"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl p-4">Advertisement Boost</DialogTitle>
                  <div className="flex items-around gap-4 p-2 rounded-full border border-gold bg-gold/30 w-24 text-gold">
                    <Image 
                      src={'/tokens/TokenIcon.svg'}
                      alt="token"
                      width={20}
                      height={20}
                    />
                    <span className="text-lg font-semibold">00</span>
                  </div>
                </div>
              </DialogHeader>
              <div className="flex flex-col gap-6 py-6">
                <div className="text-center text-4xl font-medium tabular-nums">
                  {timeLeft}
                </div>
                <div className="px-4">
                  <Button
                    className="w-full bg-gold hover:bg-gold/90 text-white"
                    onClick={handleBoost}
                  >
                    {isBoostActive ? "Cancel Boost" : "Boost Advertisement"}
                  </Button>
                </div>
                <div className="space-y-4 px-4">
                  <h3 className="font-semibold">How it works</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>1 Booster token = 24 hours advertisement boost</p>
                    <p>
                      With booster tokens you can boost any advertisement for 24
                      hours. When a booster token is activated, your advertisement
                      will be the first one out of all the advertisements in your
                      Service Pages. Every 30 minutes your advertisement will be
                      placed at the top again. When the booster token expires your
                      advertisement will be marked with &quot;Out of the day&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <h1 className="text-md">Get top advertisement spots now</h1>
        </div>
      </div>
    </div>
  );
};

export default Boost;