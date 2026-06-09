import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify/react";

const Works = () => {
  const text = ` Featuerd projects that have been meticulously 
    crafted with passion to drive 
    results and impact `;
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1
          py-5 cursor-pointer group md:gap-0"
          >
            {/*title */}
            <div
              className="flex justify-between px-10 text-black transition-all duration-500
             md:group-hover:px-12 md:group-hover:text-white"
            >
              <h2
                className="lg:text-[32px]
              text-[26px] leading-none"
              >
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            {/*divider*/}
            <div className="w-full h-0.5 bg-black/80" />

            {/*framework*/}
            <div
              className="flex px-10 text-xs leading-loose uppercase 
            transtion-all duration-500 md:text-sm gap-x-5 
            md:group-hover:px-12"
            >
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors
                duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>

            {/*mobile preview images*/}
            <div
              className="relative flex items-center justify-center px-10
            md:hidden h-400px"
            >
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
