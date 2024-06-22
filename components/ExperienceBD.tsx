import Image from "next/image"
import Video from "next-video"
import { FaCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Link from "next/link";
import SlideUp from "./SlideUp"

const ExperienceBD = ({ currExp }: any) => {

  if (currExp.name === "Cistern") {
    return (
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
          <div>
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
              {currExp.position}
              <br />
              <span className={`tracking-wide ${currExp.position !== "" ? "text-sky-400 font-bold hover:underline" : "text-base text-xl hover:underline"}`}>
                {/* <Link href={currExp.link} target="_blank"> */}
                {currExp.position !== "" ? " @" + currExp.name : "" + currExp.name}
                {/* </Link> */}
              </span>
              {"- Notion backup service"}
            </h3>
            <p className="text-sm mt-1 font-medium text-gray">
              {currExp.duration}
            </p>
            <ul className="mt-6 flex flex-col gap-3 mb-4">
              {currExp.description.map((desc: string, indx: number) => (
                <div key={indx}>
                  <li
                    className={"text-base flex gap-2"}
                  >
                    <span className="mt-1">
                    <FaCircle className="bullet-icon" />
                    </span>
                    {desc}
                  </li>
                </div>
              ))}
            </ul>
            <div className="md:w-full mb-4">
              <Video
                src={currExp.video_1}
                width={1000}
                height={1000}
                className="rounded-xl shadow-xl hover:opacity-70"
              />
            </div>
            <div className=" md:w-full mb-4">   
              <Link href={currExp.image_1} passHref target="_blank">
                  <Image
                    src={currExp.image_1}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
              </Link>
            </div>
            <div className=" md:w-full mb-4">   
              <Link href={currExp.image_2} passHref target="_blank">
                  <Image
                    src={currExp.image_2}
                    alt=""
                    width={1000}
                    height={2000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
              </Link>
            </div>
          </div>
        </div>
      </SlideUp>
    );
  } 
return (
  <SlideUp offset="-300px 0px -300px 0px">
    <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
      <div>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
          {currExp.position}
          <br />
          <span className={`tracking-wide ${currExp.position !== "" ? "text-sky-400 font-bold hover:underline" : "text-base text-xl hover:underline"}`}>
            {/* <Link href={currExp.link} target="_blank"> */}
            {currExp.position !== "" ? " @" + currExp.name : "" + currExp.name}
            {/* </Link> */}
          </span>
          {"(Seattle Office)"}
        </h3>
        <p className="text-sm mt-1 font-medium text-gray">
          {currExp.duration}
        </p>
        <ul className="mt-6 flex flex-col gap-3 mb-4">
          {currExp.description.map((desc: string, indx: number) => (
            <div key={indx}>
              <li
                className={"text-base flex gap-2"}
              >
                <span className="mt-1">
                <FaCircle className="bullet-icon" />
                </span>
                {desc}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </SlideUp>
);
};

export default ExperienceBD;
