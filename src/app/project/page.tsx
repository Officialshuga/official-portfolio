import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Movie Website",
    description:
      "A modern and responsive portfolio website to showcase my projects, skills, and experience.",
    image: "/assets/movie.png",
    tech: ["React ", " Vanilla CSS"],
    live: "https://movie-app-ten-weld-35.vercel.app/",
    github: "https://github.com/Officialshuga/movie-app",
  },
  {
    title: "Blog Platform with Firebase",
    description:
      "A full-featured blog application with authentication and real-time content management.",
    image: "/assets/blog.png",
    tech: ["React ", " Firebase ", " Tailwind CSS"],
    live: "https://blog-application-theta-flame.vercel.app/",
    github: "https://github.com/Officialshuga/fullstack-blogapplication",
  },
  {
    title: "E-Commerce Website",
    description:
      "An e-commerce application designed to improve product visibility and user experience.",
    image: "/assets/restaurant.png",
    tech: ["React ", " JavaScript", " CSS"],
    live: "https://food-order-blue-five.vercel.app/",
    github: "https://github.com/Officialshuga/food-ordering-app-clean",
  },
  {
    title: "AI Chat Application",
    description:
      "A ChatGPT-inspired web app that enables real-time user interactions and AI-powered responses through a clean, responsive interface.",
    image: "/assets/ai.png",
    tech: ["React", "OpenAi", "CSS"],
    live: "https://artificial-psi-ashy.vercel.app/",
    github: "https://github.com/Officialshuga/artificial-Intelligence",
  },
];

export default function Projects() {
  return(
    <section id="projects" className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900">
        My <span className="text-orange-500">Projects</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        A selection of projects I’ve worked on, showcasing my skills in web development,
        problem-solving, and user-focused design.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* Project Card */}
      {/* {[1, 2, 3].map((project) => ( */}
      {projects.map((project, id) => (
        <div
          key={id}
          className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition">
              {project.title}
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
                <span
                  className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600"
                >
                  {project.tech}
                </span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={project.live}
                className="text-sm font-medium text-white bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="text-sm font-medium text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
              >
                GitHub
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
