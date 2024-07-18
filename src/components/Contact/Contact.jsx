import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Contact = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-[#0F172A] px-4 -mb-56   text-gray-200 z-0 "
      id="contact"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block text-[#64FFDA]   px-3 py-1.5 text-md">
        What's next?
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-5xl md:leading-tight">
        Get in touch
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-md md:leading-relaxed">
        I’m looking for great new opportunities so my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a href='mailto:yoseflakewdev@gmail.com' rel='noreferrer'>

      
        <button className="rounded-lg border-2 border-solid border-[#64FFDA] bg-transparent text-sm px-16 py-2 mt-4 font-semibold uppercase text-[#64FFDA] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#64FFDA] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Say Hello!
      </button>
        </a>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};


export default Contact;