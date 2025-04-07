import Image from "next/image"

const projects = [
  {
    title: "Magic: The Gathering Card Lookup",
    image: "/mtg-banner.jpg",
    description: [
      "Magic: The Gathering card lookup website",
      "Built with Angular and MTG Developers API",
      "Showcases use of routing, state, dependency injection, and pipes in Angular",
    ],
    links: {
      project: "https://alanmgarber.com/Magic-The-Gathering",
      github: "https://github.com/OldEphraim/Magic-The-Gathering",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/06/06/magic-the-gathering-card-lookup-site-code-review/",
    },
  },
  {
    title: "Travel Advisory",
    image: "/google-maps-icon.jpg",
    description: [
      "Travel advisory website",
      "Shows hotels, restaurants, and attractions near you",
      "Built with React, Google Maps API, and Travel Advisor API",
    ],
    links: {
      project: "https://alanmgarber.com/Google-Travel-Advisory",
      github: "https://github.com/OldEphraim/Google-Travel-Advisory",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/05/25/travel-advisory-project-code-review/",
    },
  },
  {
    title: "Swordle",
    image: "/wordle-clone.png",
    description: [
      "Swordle; clone of popular Internet phenomenon Wordle",
      "Built with React and CSS",
      "Showcases knowledge of React hooks",
    ],
    links: {
      project: "https://alanmgarber.com/React-Wordle",
      github: "https://github.com/OldEphraim/React-Wordle",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/05/26/swordle-code-review/",
    },
  },
  {
    title: "Word Quiz",
    image: "/ready-for-a-quiz.jpeg",
    description: ["Word association game", "Built with React and Word Quiz API"],
    links: {
      project: "https://alanmgarber.com/Word-Quiz",
      github: "https://github.com/OldEphraim/Word-Quiz",
      blog: "https://oldephraimlearnstocode.wordpress.com/2022/05/27/word-quiz-code-review/",
    },
  },
]

export default function WorksSection() {
  return (
    <section id="works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto italic">
          Please note that the projects in this section have not been consistently maintained since summer 2022, and
          they reflect the level of quality I produced before gaining professional experience. Some are better than
          others, but the Tarot Project is the best reflection of where my skills are right now.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <ul className="mb-6 space-y-2">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap justify-center gap-2">
                  <a href={project.links.project} target="_blank" rel="noreferrer">
                    <button className="gradient-button font-normal">See Project</button>
                  </a>
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    <button className="gradient-button font-normal">See GitHub</button>
                  </a>
                  <a href={project.links.blog} target="_blank" rel="noreferrer">
                    <button className="gradient-button font-normal">See Blogpost</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

