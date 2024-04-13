"use client";

import Navbar from "@/components/organism/Navbar";

export default function Home() {
  return (
    <>
      <main>
        

        <div className="relative">
          <div className="w-11/12 max-h-[700px] h-screen mx-auto pt-32 pb-14 flex flex-col justify-between">
            <div>
              <h1 className="heading-1 text-center tracking-[0.25em] leading-tight text-on-surface">Explore my Projects</h1>
              <h5 className="mt-10 display-5 text-center text-on-surface">
                A full stack developer specialized in <br />
                <span className="text-tertiary abril-fatface italic">Front-End</span> and <span className="text-tertiary abril-fatface italic">Motion</span>
              </h5>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-10 w-[1px] bg-on-surface" />
              <p className="body text-on-surface">Scroll</p>
            </div>
          </div>

          <div className="absolute top-36 -z-10 w-full h-[800px] flex justify-center">
            <div className="absolute w-[800px] h-[800px] rounded-full">
              <div className="absolute -inset-6 rounded-full bg-primary/30 blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary to-black to-70%" />
            </div>
          </div>
        </div>

        <Navbar active="work"/>
        
      </main>
    </>
  );
};
