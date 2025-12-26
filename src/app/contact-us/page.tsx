import { Button } from "@/components/ui/button";
import React from "react";
import { IoSend } from "react-icons/io5";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";


const Contactus = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Let’s work together
        </h1>
        <p className="text-lg sm:text-2xl text-muted-foreground max-w-3xl">
          Have a project in mind? Fill out the form below or send me an email
          directly. <br className="hidden sm:block" />I usually respond within
          24hrs.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <form className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative flex flex-col gap-1">
              <label className="text-sm font-medium">NAME</label>
              <IoMdPerson className="absolute left-3 top-10 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Your full name"
                className="border-2 h-12 rounded-md bg-transparent pl-10 text-sm focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

            <div className="relative flex flex-col gap-1">
              <label className="text-sm font-medium">EMAIL</label>
              <IoMdPerson className="absolute left-3 top-10 text-gray-500 w-5 h-5" />
              <input
                type="email"
                placeholder="you@example.com"
                className="border-2 h-12 rounded-md bg-transparent pl-10 text-sm focus:outline-none focus:border-[#FF6B00]"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">SUBJECT</label>
            <input
              type="text"
              placeholder="Subject"
              className="border-2 h-12 rounded-md bg-transparent px-4 text-sm focus:outline-none focus:border-[#FF6B00]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">MESSAGE</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project"
              className="border-2 rounded-md bg-transparent px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#FF6B00]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#FF6B00] cursor-pointer text-white rounded-xl h-12 px-8 flex items-center gap-2 font-semibold hover:opacity-90 transition w-fit"
          >
            Send Message <IoSend size={20} />
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <h4 className="text-xl font-semibold">
            Available for freelance projects
          </h4>

          <div className="flex items-start gap-4">
            <MdEmail className="text-[#FF6B00] mt-1" />
            <div>
              <h5 className="font-medium">Email</h5>
              <p className="text-muted-foreground">hanksehimare@outlook.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLocationDot className="text-[#FF6B00] mt-1" />
            <div>
              <h5 className="font-medium">Location</h5>
              <p className="text-muted-foreground">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-medium mb-3">Connect</h5>
            <div className="flex gap-8 cursor-pointer">
              <a target="_blank" href="https://x.com/hanksamanfoh?s=21"> <BsTwitterX size={32} /> </a>
              <a target="_blank" href="https://github.com/Officialshuga"> <FaGithub size={32} /> </a> 
              <a target="_blank" href=""> <FaLinkedin size={32} /> </a> 
              <a target="_blank" href="https://wa.link/hb9r2p"> <IoLogoWhatsapp size={32}/> </a> 

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
