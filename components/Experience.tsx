"use client" // this is a client component

import ExperienceBD from "./ExperienceBD"
import { useState, useEffect } from "react";

/**
 * @param position - name of position of experience
 * @param name - name of the company
 * @param duration - how long I was at the company
 * @param description - nested array where each index is a bullet point
 */
const backgroundInfo = [
    {
        position: "Backend Engineer",
        name: "Cistern",
        duration: "Dec 2023 - Present",
        description: [
            "Architected API, database schema and storage structure to preserve entity relationships and manage versions.",
            "Optimized backup/restore process by modularizing into asynchronous jobs while minimizing external API calls.",
            "Leveraged AWS by using Pulumi for IaC(Infrastructure as Code) to comply with GDPR, deploy across multiple regions and persist job state."
        ],
        image_1: "/cistern_screenshot_1.png",
        image_2: "/cistern_screenshot_2.png",
        video_1: "/cistern_demo.mp4"

        // link:
    },
]


const Experience = () => {

    const [currExp, setCurrExp] = useState(backgroundInfo[0]);

    // /**
    //  * onClick function that handles setting the new current experience
    //  * @param name - name of the company to update description 
    //  */
    // const handleClick = (name: string) => {
    //     for (let index = 0; index < backgroundInfo.length; index++) {
    //         if (name === backgroundInfo[index].name) {
    //             setCurrExp(backgroundInfo[index])
    //         }
            
    //     }
    // }

    return (
        <section id="experience" className="max-w-containerxs mx-auto py-25 lgl:py-24 px-4">

            <h1 className="text-center font-bold text-4xl">
                Experience
            <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
            </h1>
                    <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                    {/* <ul className="md:w-36 flex flex-col">
                    {backgroundInfo.map((exp, indx) => {
                        return (
                            <div key={indx}>

                                <li 
                                onClick={() => handleClick(exp.name)}
                                className="border-l-2 border-l-sky-400 bg-transparent hover:bg-[#112240] hover:text-white py-3 text-sm
                                cursor-pointer duration-200 px-8 font-medium text-base flex gap-2 whitespace-normal">
                                    
                                    {exp.name}
                                </li>
                            </div>

                        )
                    })}
                    </ul> */}
                     <ExperienceBD currExp={currExp}/>
                    </div>

            
                    
        </section>
    )
}

export default Experience
