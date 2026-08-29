"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const promotions = [
  {
    content: "Get 20% off your first order! Use code FIRST20 at checkout.",
    linkTxt: "Shop Now",
    href: "/clothing",
  },
  {
    content: "FREE U.S. shipping on orders over $75.",
    linkTxt: "Shop Now",
    href: "/clothing",
  },
  {
    content: "New Dark Romance Collection now available.",
    linkTxt: "Shop Now",
    href: "/clothing",
  },
  {
    content: "FREE in-store pickup available.",
    linkTxt: "Shop Now",
    href: "/clothing",
  },
  {
    content: "Up to 40% off accessories and jewelry.",
    linkTxt: "Shop Now",
    href: "/clothing",
  },
];

export default function PromoBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % promotions.length
      );
    }, 5700);

    return () => clearInterval(interval);
  }, []);



  const activePromo = promotions[activeIndex];

  return (
  <div className="border-b border-zinc-800 bg-[#CDCDCD] py-2 text-center text-xs font-semibold text-[#09090B] sm:text-sm">
    <div
      key={activeIndex}
      className="animate-promo-fade whitespace-nowrap"
    >
      <span>{activePromo.content}</span>

      <Link
        href={activePromo.href}
        className="ml-3 font-bold underline underline-offset-4 transition-colors hover:text-pink-400"
      >
        {activePromo.linkTxt}
      </Link>
    </div>
  </div>
);
}