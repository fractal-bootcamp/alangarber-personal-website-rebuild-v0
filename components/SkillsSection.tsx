import {
    Html5,
    Css3,
    Javascript,
    ReactLogo,
    Angular,
    Golang,
    NodeJs,
    Git,
    Python,
    Sass,
  } from "@/components/icons/TechIcons"
  
  const skills = [
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLogo },
    { name: "Angular", icon: Angular },
    { name: "Golang", icon: Golang },
    { name: "Node.js", icon: NodeJs },
    { name: "Git", icon: Git },
    { name: "Python", icon: Python },
    { name: "Sass", icon: Sass },
  ]
  
  export default function SkillsSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="skill-content flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
              <figure key={skill.name} className="flex flex-col items-center w-16 h-20">
                <skill.icon className="w-12 h-12 text-gray-700" />
                <figcaption className="mt-2 text-gray-700 text-center">{skill.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  