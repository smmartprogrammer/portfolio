import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
// import partabraj from "../images/partab.jpg"

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hello, I'm, Partab Raj", "developer", "loves to code", "Next.Js"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-hidden z-0 ">
      <BackgroundCircle />
      <img
        src="partablahore.jpg"
        className="relative rounded-full h-32 w-32 mx-auto"
        alt="partab"
      />

      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
    </div>
  );
}
