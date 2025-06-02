import Image from "next/image";
import Link from "next/link";
import Socials from "./components/Socials";
import Music from "./components/Music";
import Projects from "./components/Projects";
import nisi from "@/public/assets/nisi.jpeg";
import dp from "@/public/android-chrome-384x384.png";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-lg font-bold leading-tight sm:text-2xl">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-2/5 flex justify-start items-center">
            <Image
              src={nisi}
              alt="Dhruv's Picture"
              className="rounded-full lg:rounded-md w-[150px] lg:w-[250px] my-3"
            />
          </div>
          <div className="lg:w-3/5">
            <p className="mt-4 text-base">
              Hi there! I&apos;m Dhruv. I&apos;m a fast-learning developer with
              hands-on experience working across two countries, India and
              Sweden, where I&apos;ve built scalable systems in AI, IoT, and data
              engineering. I have a passion for data storytelling — from my
              internship at Stegra visualising factory time-series data to my
              dissertation where I investigated bias in stop-and-frisk data
              using ML. Through these and more data science projects, I&apos;ve gained
              experience in handling various data types and want to pursue a
              career in creating stories with data. I&apos;m also a performing
              musician, having played at the Edinburgh Fringe Festival 2023 and
              2024.
            </p>

            <p className="mt-4 text-base">
              Beyond tech and music, I&apos;m deeply passionate about data
              storytelling. (
              <Link
                href="https://drive.google.com/file/d/1NoruxVbwd5zOi7i4VDR_hDIzU7x4upGM/view?usp=sharing"
                className="text-blue-500 underline hover:text-blue-600 duration-100"
                rel="noopener noreferrer"
                target="_blank"
              >
                resume
              </Link>
              ).
            </p>

            <p className="mt-4 text-base">
              In my free time, you can find me playing a sport or chess. I also
              enjoy music a lot and can play the <i>MIDI keyboard</i> and a bit of
              guitar. My favourite musicians include Peter Cat Recording Co.
              <Image className="inline m-0 ml-1" src={dp} alt="dp" height={25} width={25} />
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4">
        <Projects />
      </section>

      {/* Contact */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Contact</h2>
        <p className="mt-2 text-base">
          The best way to reach me is to send me an email at{" "}
          <Link
            href="mailto:dhruvgupta.31dg@gmail.com"
            className="text-blue-500 underline hover:text-blue-600 duration-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhruvgupta.31dg@gmail.com
          </Link>
          .<br />
          Alternatively, you can connect with me on any of my socials:
        </p>
        <Socials />
      </section>

      {/* Music */}
      <section className="px-4 py-6 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">Music</h2>
        <p className="mt-2 text-base">
          Here&apos;s my listening activity on Spotify in the last month:
        </p>
        <Music />
      </section>
    </>
  );
}
