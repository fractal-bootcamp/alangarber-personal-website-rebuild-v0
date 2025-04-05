import Image from "next/image"

export default function TarotProject() {
  return (
    <section id="TarotProject" className="py-16 bg-[#8a8a8a] text-white">
      <div className="container mx-auto px-4">
        <h1 className="home-header text-4xl md:text-5xl font-bold mb-8 text-center uppercase font-fanwood tracking-wider text-black text-shadow">
          Tarot Card Reader
        </h1>

        <div className="cards-container flex justify-center gap-8 mb-8">
          <div className="relative w-36 h-56 md:w-40 md:h-64">
            <Image
              src="/placeholder.svg?height=256&width=150"
              alt="Tarot Card 1"
              width={150}
              height={256}
              className="tarot-card border-2 border-white rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="relative w-36 h-56 md:w-40 md:h-64">
            <Image
              src="/placeholder.svg?height=256&width=150"
              alt="Tarot Card 2"
              width={150}
              height={256}
              className="tarot-card border-2 border-white rounded-md shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="button-container flex flex-wrap justify-center gap-4 md:gap-10">
          <a href="https://alansarcana.com" target="_blank" rel="noreferrer">
            <button className="spooky-button bg-[#333] text-white border border-[#555] px-4 py-2 font-medium font-garamond hover:bg-[#444] transition-colors">
              <strong>SEE PROJECT</strong>
            </button>
          </a>
          <a href="https://github.com/OldEphraim/tarot-project" target="_blank" rel="noreferrer">
            <button className="spooky-button bg-[#333] text-white border border-[#555] px-4 py-2 font-medium font-garamond hover:bg-[#444] transition-colors">
              <strong>SEE GITHUB</strong>
            </button>
          </a>
          <a
            href="https://oldephraimlearnstocode.wordpress.com/2024/11/24/tarot-project-links/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="spooky-button bg-[#333] text-white border border-[#555] px-4 py-2 font-medium font-garamond hover:bg-[#444] transition-colors">
              <strong>SEE BLOGPOST</strong>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

