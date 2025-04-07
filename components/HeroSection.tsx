"use client"

import Image from "next/image"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default function HeroSection() {
  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="Main" className="py-16 md:py-24 gradient-bg min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="content flex-1 space-y-6">
            <div className="text">
              <p className="text-lg mb-2 uppercase">Hey there!</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">I am Alan Garber</h1>
              <div className="p">
                <TypewriterEffect
                  words={[
                    { text: "Fullstack Developer" },
                    { text: "React and Angular" },
                    { text: "Typescript, Python, and Golang" },
                    { text: "Check out my projects!" },
                  ]}
                  cursorClassName="bg-black"
                  loop={true}
                  typeSpeed={45}
                  deleteSpeed={25}
                  delayBetweenWords={1500}
                  className="text-xl md:text-2xl font-medium uppercase"
                />
              </div>
            </div>
            <div className="buttons flex flex-wrap gap-6">
              <button onClick={scrollToWorks} className="gradient-button font-normal">
                See My Work
              </button>
              <button onClick={scrollToContact} className="gradient-button font-normal">
                Hire Me
              </button>
            </div>
          </div>
          <div className="main-image flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/me-may-2022.jpg"
                alt="Alan Garber"
                width={350}
                height={350}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

