import Image from "next/image";
import { MyComponent } from "@/components/typedJS/typed";
import gosa from "../../public/gosa.jpg";
import pic from "../../public/assets/pic.jpg";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import { AccordionDemo } from "../components/accord/accord";
import css from "../../public/assets/css.png";
import firebase from "../../public/assets/firebase.png";
import git from "../../public/assets/git.png";
import github from "../../public/assets/github.png";
import html from "../../public/assets/html.png";
import js from "../../public/assets/js.png";
import mongo from "../../public/assets/mongo.png";
import next from "../../public/assets/next.png";
import react from "../../public/assets/react.png";
import vercel from "../../public/assets/vercel.png";
import wordpress from "../../public/assets/wordpress.png";
import Link from "next/link";
import nura from "../../public/assets/nura.png";
import bulwark from "../../public/assets/caj.png";
import hotel from "../../public/assets/hotel.png";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10 px-10">
        <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Hi, I am{" "}
            <span className="text-[#FF6B00]">Hanks Ehimare Amanfoh</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold">
            <MyComponent />
          </h2>

          <p className="text-base text-justify sm:text-lg leading-relaxed text-gray-600">
            I’m a Web Developer and Virtual Assistant based in Lagos, Nigeria,
            with a strong focus on building responsive, accessible, and
            high-performing web applications while providing reliable
            administrative and technical support. I specialize in creating
            modern websites that combine clean design, functionality, and
            performance to help brands and individuals grow their online
            presence. As a Web Developer, I work with technologies like HTML,
            CSS, JavaScript, React, and modern web tools to deliver scalable,
            user-friendly digital solutions. Alongside development, my role as a
            Virtual Assistant allows me to support clients with research, data
            management, content handling, scheduling, and project
            coordination—ensuring smooth workflows and timely execution. I
            approach every project with precision, creativity, and a
            results-driven mindset. My goal is not just to build websites or
            complete tasks, but to create meaningful digital experiences and
            provide dependable support that helps clients stay organized,
            productive, and focused on growth.{" "}
          </p>

          <div className="flex flex-col  sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="flex items-center gap-2">
              <Link href={"/project"}>View Projects</Link> <FaArrowRight />
            </Button>

            <Button variant="ghost" asChild>
              <a
                href="/Hanks-Ehimare-Amanfoh-CV.docx"
                download
                className="flex items-center gap-2"
              >
                Download CV <IoMdDownload />
              </a>
            </Button>
            

          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={pic}
            alt="Hanks portrait"
            width={400}
            height={320}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center py-16">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-4">
            <span className="text-orange-500">My </span> Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Comprehensive digital solutions crafted to meet your specific needs
            — from design to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          <div className="group border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 bg-white shadow-sm hover:shadow-lg transition">
            <FaCode
              size={40}
              className="text-blue-600 group-hover:scale-110 transition"
            />
            <h2 className="font-semibold text-xl">Web Development</h2>
            <p className="text-gray-600 leading-relaxed">
              Custom websites and web applications built with modern
              technologies like React, Next.js, and Tailwind CSS — optimized for
              speed, scalability, and performance.
            </p>
          </div>

          <div className="group border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 bg-white shadow-sm hover:shadow-lg transition">
            <RiCustomerService2Fill
              size={40}
              className="text-blue-600 group-hover:scale-110 transition"
            />
            <h2 className="font-semibold text-xl">Virtual Assistance</h2>
            <p className="text-gray-600 leading-relaxed">
              Reliable virtual assistant services including administrative
              support, research, scheduling, data entry, and project
              coordination — helping you stay productive and focused.
            </p>
          </div>

          <div className="group border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 bg-white shadow-sm hover:shadow-lg transition">
            <CgPerformance
              size={40}
              className="text-blue-600 group-hover:scale-110 transition"
            />
            <h2 className="font-semibold text-xl">SEO Management</h2>
            <p className="text-gray-600 leading-relaxed">
              Data-driven SEO strategies including on-page optimization,
              technical SEO, performance tuning, and keyword research to improve
              visibility, traffic, and conversions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl  font-semibold mb-10">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={hotel}
                alt="Blog Application project"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">Hotel Application</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A responsive hotel booking app that lets users view available
                rooms and make reservations easily, with simple tools for
                managing bookings and room details.
              </p>
              <div className="flex gap-3 pt-2">
                <Button className="flex-1">
                  {" "}
                  <a href="https://nextjs-first-hotel.vercel.app/">
                    {" "}
                    Live Demo
                  </a>{" "}
                </Button>
                <Button>
                  <a href="https://github.com/Officialshuga/nextjs-first-hotel">
                    {" "}
                    Github
                  </a>
                </Button>
                {/* <Button href="https://nextjs-first-hotel.vercel.app/" variant="outline" className="flex-1">
                   Github
                </Button> */}
              </div>
            </div>
          </div>

          <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={nura}
                alt="Blog Application project"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">Brand Website</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A modern brand website designed to showcase identity, products,
                and services with a clean layout, strong visuals, and a seamless
                user experience across all devices.
              </p>
              <div className="flex gap-3 pt-2">
                <Button className="flex-1">
                  {" "}
                  <a href="https://obi-new.vercel.app/"> Live Demo</a>{" "}
                </Button>
                <Button variant="outline" className="flex-1">
                  <a href="https://github.com/Officialshuga/obi-new"> Github</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={bulwark}
                alt="Door Manufacturing Company project"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                Door Manufacturing Company Website
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A modern business website showcasing door products, company
                expertise, and services with a clean and user-friendly design.
              </p>
              <div className="flex gap-3 pt-2">
                <Button className="flex-1">
                  {" "}
                  <a href="https://cajbulwark.com"> Live Demo</a>{" "}
                </Button>
                {/* <Button variant="outline" className="flex-1">
                  <a href="https://github.com/Officialshuga/artificial-Intelligence"> Github</a>
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 items-center md:gap-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
          Frequently <span className="text-orange-500">Asked </span> Questions
        </h1>
        <div className="text-2xl">
          <AccordionDemo />
        </div>
      </div>

      <div className="text-black py-12 text-center">
        <h1 className="text-6xl font-bold mb-4">
          {" "}
          <span className="text-orange-500">My </span> Skills
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto pb-15">
          Here are my technical skills and expertise in web development, design,
          and digital solutions.
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 items-center w-max animate-scroll hover:[animation-play-state:paused] overflow-x-auto px-4">
            <Image src={html} alt="HTML" className="h-12 w-auto shrink-0" />
            <Image src={css} alt="CSS" className="h-12 w-auto shrink-0" />
            <Image src={js} alt="JavaScript" className="h-12 w-auto shrink-0" />
            <Image src={react} alt="React" className="h-12 w-auto shrink-0" />
            <Image src={next} alt="Next.js" className="h-12 w-auto shrink-0" />
            <Image
              src={firebase}
              alt="Firebase"
              className="h-12 w-auto shrink-0"
            />
            <Image src={mongo} alt="MongoDB" className="h-12 w-auto shrink-0" />
            <Image src={git} alt="Git" className="h-12 w-auto shrink-0" />
            <Image src={github} alt="GitHub" className="h-12 w-auto shrink-0" />
            <Image src={vercel} alt="Vercel" className="h-12 w-auto shrink-0" />
            <Image
              src={wordpress}
              alt="WordPress"
              className="h-12 w-auto shrink-0"
            />

            <Image
              src={html}
              alt="HTML duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={css}
              alt="CSS duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={js}
              alt="JavaScript duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={react}
              alt="React duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={next}
              alt="Next duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={firebase}
              alt="Firebase duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={mongo}
              alt="MongoDB duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={git}
              alt="Git duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={github}
              alt="GitHub duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={vercel}
              alt="Vercel duplicate"
              className="h-12 w-auto shrink-0"
            />
            <Image
              src={wordpress}
              alt="WordPress duplicate"
              className="h-12 w-auto shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
