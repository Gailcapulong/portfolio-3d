import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Planet } from "../components/Planet";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const aboutText = `i help growing brands and startups
   gain an unfair advantage through
   premuim results driven webs/apps`;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 0.5,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "100",
        duration: 0.5,
        ease: "circ.out",
      },
      "<+0.2",
    );
  }, []);
  return (
    <section id="home" className=" flex flex-col justify-end min-h-screen">
      <div ref={contextRef}></div>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          background: "transparent",
        }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16 translate-y-[10%]"
        >
          <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
            404 No Bugs Found
          </p>
          <div className="px-10">
            <h1 className=" text-black uppercase banner-text-responsive sm:py-16 md:block">
              Gail Capulong
            </h1>
          </div>
        </div>
      </div>

      <div className="relative px-10 text-black">
        <div className="absolute inset-x-0 border-t-3" />
        <div className="py-12 sm:py-5 text-end">
          <AnimatedTextLines
            text={aboutText}
            className="font-light uppercase value-text-responsive"
          ></AnimatedTextLines>
        </div>
      </div>

      <figure
        className="absolute inset-0 -z-10"
        style={{ width: "100vh", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, 10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={1} rotationIntensity={1} floatIntensity={2}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 12]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
