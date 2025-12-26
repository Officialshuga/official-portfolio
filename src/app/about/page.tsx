import React from "react";
import css from "../../../public/assets/css.png"
import Image from "next/image";
const About = () => {
  return (
    <main className=" px-6 py-12 max-w-7xl mx-auto">
      {/* ABOUT SECTION */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase">
          About <span className="text-crimson">me</span>
        </h1>

        <div className="flex flex-wrap gap-8 items-center">
          {/* PERSONAL INFO */}
          <div className="flex-1 min-w-75">
            <h2 className="text-3xl uppercase mb-6">Personal info</h2>

            <div className="flex flex-wrap gap-8 mb-6">
              <div className="flex-1 min-w-55 space-y-3">
                <p>
                  <span className="text-gray-400">Name:</span>{" "}
                  Amanfoh Ehimare Hanks
                </p>
                <p>
                  <span className="text-gray-400">Email:</span>{" "}
                  amanfohehimare@gmail.com
                </p>
                <p>
                  <span className="text-gray-400">Address:</span> Lagos State,
                  Nigeria
                </p>
              </div>

              <div className="flex-1  min-w-55 space-y-3">
                <p>
                  <span className="text-gray-400">Freelance:</span> available
                </p>
                <p>
                  <span className="text-gray-400">Skill:</span> Full Stack
                </p>
                <p >
                  <span className="text-gray-400">Experience:</span> 3 years
                </p>
                <p>
                  <span className="text-gray-400">language:</span> Yoruba,
                  English
                </p>
              </div>
            </div>

            <a
              href="/Boluwatife cv.pdf"
              download
              className="bg-[#FF6B00] font-bold inline-flex items-center gap-2 bg-crimson px-6 py-3 rounded hover:bg-red-700 transition"
            >
              Download CV <i className="fas fa-download" />
            </a>
          </div>

          {/* COUNTS */}
          <div className="flex-1 text-white min-w-75 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { value: "3+", label: "years of experience" },
              { value: "5+", label: "projects completed" },
              { value: "None", label: "awards won" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#FF6B00] p-8 rounded shadow-lg"
              >
                <h3 className="text-5xl text-crimson font-bold">
                  {item.value}
                </h3>
                <p className="text-gray-400 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-12 uppercase">
          <span className="text-crimson">my</span> skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: "css", img: "/assets/css.png" },
            { name: "html", img: "/assets/html.png" },
            { name: "firebase", img: "/assets/firebase.png" },
            { name: "react", img: "/assets/git.png" },
            { name: "github", img: "/assets/github.png" },
            { name: "wordpress", img: "/assets/wordpress.png" },
            { name: "js", img: "/assets/js.png" },
            { name: "mongo", img: "/assets/mongo.png" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="bg-[#FF6B00] p-6 rounded shadow-lg text-center hover:bg-white hover:text-black transition"
            >
              <Image
                priority
                src={skill.img}
                alt={skill.name}
                width={80}
                height={80}
                className="h-20 mx-auto mb-4"
              />
              <h3 className="uppercase text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
