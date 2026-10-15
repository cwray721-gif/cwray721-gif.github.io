"use client";

import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin, Mail, Download, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Connor Wray";

  useEffect(() => {
    let typeInterval: NodeJS.Timeout;
    let loopInterval: NodeJS.Timeout;

    const startTyping = () => {
      let index = 0;
      setText(""); 

      typeInterval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        
        if (index === fullText.length) {
          clearInterval(typeInterval);
        }
      }, 100);
    };

    startTyping();

    loopInterval = setInterval(() => {
      clearInterval(typeInterval); 
      startTyping();
    }, 5000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[80vh] animate-slide-up">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px]">
            {text}
            <span className="animate-pulse text-green-800">|</span>
          </h1>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl min-h-[80px]">What story do you want to tell?</h1>
          <p className="text-xl text-gray-800 max-w-lg">
            I am a writer and game designer with a passion for creating immersive experiences. My work spans across various mediums, including interactive fiction, tabletop games, and digital storytelling. I believe in the power of narrative to connect people and evoke emotions, and I strive to craft stories that resonate with audiences on a personal level.
  
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* 1. VIEW MY WORK BUTTON */}
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium
                         text-white bg-green-700 rounded-lg hover:bg-green-700  transition-colors"
            >
              View My Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium
                        text-white bg-brown rounded-lg hover:bg-brown-hover transition-colors"
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* 2. NEW RESUME BUTTON */}
            <a
              href="/Chris_Taylor_SWE.pdf"
              download="Chris_Taylor_SWE.pdf" 
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-900 border-2 border-gray-200 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://www.linkedin.com/in/connor-wray-76a324220/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>

              {/* <a
                href="https://github.com/Chris-Taylor7" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-black transition-colors"
              >
                <Github size={24} />
              </a> */}
              
              <a
                href="mailto:cwray721@gmail.com" target="_blank"
                className="p-3 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+15136809070"
                className="p-3 text-gray-500 hover:text-green-500 transition-colors"
                >
                <Phone size={24}  />
              </a>
              <a 
                href="https://instagram.com/connorwray300" target="_blank"
                className="p-3 text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>

              {/* <a 
                href="https://www.discord.com/users/465965656270045184" target="_blank"
                className="p-3 text-gray-500 hover:text-blue-300 transition-colors"
              >
                <FontAwesomeIcon 
                  icon={faDiscord} 
                  className="text-gray-500 hover:text-blue-300 transition-colors" 
                />
              </a> */}

            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Photo Placeholder */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl bg-gray-100 flex items-center justify-center">
             <img 
              src="/profile.jpg" 
              alt="Connor Wray" 
              className="object-cover w-full h-full"
            /> 
          </div>
        </div>
      </div>

      <br />
      
      <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px] pt-16">About Me</h1>
          <p className="text-xl text-gray-800 max-w-lg">
           Hello, my name is Connor Wray - I'm a writer and game designer. I graduated from the University of Cincinnati
           with a Bachelor'sdegree in Digital Media Collaboration and certificates in Screenwriting and Directing.
            <br /> <br />
            Throughout my scholastic years of high school and college, I have experimented with a wide variety of creative mediums,
            mostly revolving around literature. In my years of experimentation, I've found a passion and an appreciation for all forms of writing,
            and a specialty in writing for Tabletop Roleplaying Games, Film & TV Scripts, and books.
            As of 2026, I have 20 finished scripts (16 short and 4 feature-length), 10 short stories, 3 novellas, and 26 game modules for 
            Dungeons & Dragons 5th Edition, Call of Cthulhu, and more. 
            <br /> <br />
            Throughout my time in college, Ihave had several of my works entered into the Over the Rhine Film Festival, Cindependant, and Winterfilm. 
            I have officially ran to fruition 20/26 of the modules I have written, and have been designing games with their own systems for the past 2 years now.
            I have also submitted many of my written works to various competitions such as the Woodland Writers short story competition and the Writers Digest short story competition.
            <br /> <br />
            My work continues, my education continues, and my passion continues. New works are always in progress and I'm always looking for people to share them with, and people to work with.
            I look forward to sharing all the work to come with you — please peruse and enjoy!
          </p>
      </div>

    </div>
  );
}