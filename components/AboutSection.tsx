import React from "react"
import Image from "next/image"
import { TiArrowForward } from "react-icons/ti"
import Link from "next/link"

const skills = [
  { skill: "Python" },
  { skill: "Django" },
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "C/C++" },
  { skill: "Kotlin"},
  { skill: "PostgreSQL" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Next.js" },
  { skill: "Android SDK" },
  { skill: "Docker" },
  { skill: "AWS" },
]

/**
 * @param head - head of description
 * @param description - main description
 */

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-24 md:pb-38">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
            I&apos;m a software engineer and CS student at Seoul National University, the top ranked school in Korea. I was born and 
            raised in the U.S. and moved to Korea in high school. 
            I am currently in Las Vegas working on
            {" "}
              <span className="font-bold">{"Deputy"}</span>, a Notion backup service preparing for launch. 
            I have experiences that span from ML/DL, LLMs to building and deploying multiple mobile & web apps from the ground up. 
            I&apos;m a fast learner and love diving into new challenges, always looking for opportunities to learn more. {" "}
            </p>
            <br />
            <p>
              I&apos;m also interested in body building, custom keyboards and League of Legends.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-4">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-sky-400 hover:text-white cursor-pointer"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
