import * as motion from "motion/react-client"
import PrimaryButton from "./button/PrimaryButton";

const Hero = () => {
  return (
    <section className="px-16  pt-28 lg:pt-48  min-h-screen">
      <motion.div
      initial={{
        x: -150,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 100
      }}
      transition={{
        duration: 1
      }}
      className="flex flex-col  justify-center  w-1/2 gap-y-8 font-family-gilroy">
        <h1 className=" leading-14 font-family-gilroy-Bold text-5xl font-extrabold tracking-wide text-tertiary">
          <span className="">
          Revolutionizing
          </span>
          <span className="text-secondary"> Vegetable Supply </span>
          <span>Chains with </span>
         <span className="text-secondary">
         AI/ML Integration
         </span>
        </h1>

        <motion.p
        initial={{
          x: -200,
          opacity: 0
        }}
        animate={{x:0,
          opacity: 100
        }}
        transition={{duration: 1}}
        className="font-family-gilroy-medium text-primary ">
          Our startup is pioneering a transformation in the vegetable supply
          chain through the strategic and deep integration of Artificial
          Intelligence (AI) and Machine Learning (ML). By leveraging these
          technologies, we address critical inefficiencies and pain points at
          every level of the supply chain while promoting sustainability and
          superior stakeholder experiences.
        </motion.p>
        <div className="flex gap-x-3">
        <PrimaryButton classes={" bg-fourth w-64"} text="Discover our products"/>
        <PrimaryButton classes={" bg-secondary w-32"} text="Contact Us"/>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
