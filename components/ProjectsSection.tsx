import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Calendy",
    description:
      `Schedule and task management application for Android equipped with AI Manager. 
      Capable of intelligently managing/retrieving/summarizing schedules through voice/text commands. 
      Prompt engineered GPT-4 to generate SQL queries for vast scope of natural language commands with consistency and
      minimized latency.`,
    tech: "Kotlin, Android SDK, GPT-4, Express + Node.js, AWS, SQLite, Retrofit",
    image: "/calendy.png",
    github: "https://github.com/snuhcs-course/SNU-swpp-team-10/wiki/Manager-Implementation-Details",
    link: "none",
  },
  {
    name: "NAVER Cafe Clone Coding",
    description:
      `Cloned NAVER Cafe service. Developed backend server with Spring Boot &
      architected API and database schema to handle users, articles, comments and article boards.`,
    tech: "Kotlin, Java, Spring Boot, H2 Database",
    image: "/cafe.png",
    github: "https://github.com/wafflestudio21-5/team7-server",
    link: "none",
  },
  {
    name: "Simplified RDBMS in Python",
    description:
      `Parsed queries into SQL and implemented support of relations while storing data as key-value pairs through metadata schema.`,
    tech: "Python, Lark, OracleDB",
    image: "/rdbms.png",
    github: "https://github.com/darwinj07/simplified-RDBMS-in-python",
    link: "none",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link == "none" ? project.github : project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    <span className="font-bold">Tech: </span> 
                      {project.tech}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link != "none" ?
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> : <></>}

                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
