import React from "react";

import { AboutContents } from "../components/about/AboutContents";

import aboutIcon from "../assets/img/about/img_about01.png";
import aboutImg02 from "../assets/img/about/img_about02.png";
import aboutImg03 from "../assets/img/about/img_about03.png";
import aboutImg04 from "../assets/img/about/img_about04.png";
import aboutImg05 from "../assets/img/about/img_about05.png";

export const About = () => {
  const contents = [
    {
      title: "Sobre o nosso projeto:",
      img01: aboutImg02,
      img02: aboutImg03,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur.",
    },
    {
      title: "Sobre o nosso curso:",
      img01: aboutImg04,
      img02: aboutImg05,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur.",
    },
  ];

  return (
    <main>
      <section className="relative bg-capi_seaGreen_about text-white flex items-center justify-center gap-8 p-8">
        <img
          className="hidden absolute left-28 w-16 md:block"
          src={aboutIcon}
          alt="Ícone de contato."
        />
        <h2 className="font-headline font-semibold text-4xl">Sobre Nós</h2>
      </section>
      <section className="container flex flex-col items-center justify-center mx-auto max-w-5xl p-10 px-4">
        <h3 className="text-center font-headline font-bold text-xl mb-5">
          Criadores:
        </h3>
        <div>{/* IMAGENS */}</div>

        {/* <div className="w-full bg-capi_seaGreen_about py-6 px-8 shadow-gray-300 shadow-lg rounded-xl md:w-4/6">
          <div className="flex items-center justify-around gap-5 bg-capi_seaGreen_about_light p-5 rounded-lg shadow-lg mb-5">
            <img className="w-20" src={aboutImg02} alt="" />
            <img className="w-20" src={aboutImg03} alt="" />
          </div>
          <p className="text-justify font-texts text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div> */}
        {contents.map((content, i) => (
          <React.Fragment key={`content-${i}`}>
            <h3 className="text-center font-headline font-bold text-xl mb-5">
              {content.title}
            </h3>
            <AboutContents
              img01={content.img01}
              img02={content.img02}
              text={content.text}
            />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};
