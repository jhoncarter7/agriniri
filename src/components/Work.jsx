

{
  /* <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"></svg> */
}










import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import WorkflowCard from "./WorkflowCard"; // Import your WorkflowCard component
import WavyText from "./animation/WavyText";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function Work() {
  const lineRef = useRef(null);
  const carRef = useRef(null);
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        start: "top 30%",
        end: "bottom 10%-=200px",
        rotation: "+=360",
        toggleActions: "play none play reverse",
      },
    });

    // 🚜 Move the car along the path
    tl.to(carRef.current, {
      motionPath: {
        path: lineRef.current,
        align: lineRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "power2.Out",
      duration: 1,
      onUpdate: () => {
        // Get current position of the car
        const carRect = carRef.current?.getBoundingClientRect();
        console.log("carRect", carRect);
        // Get positions of the circles
        const circle1Rect = circle1Ref.current?.getBoundingClientRect();
        const circle2Rect = circle2Ref.current?.getBoundingClientRect();
        const circle3Rect = circle3Ref.current?.getBoundingClientRect();

        // Function to reveal cards when car reaches the circle
        const revealCard = (card, circle) => {
          if (Math.abs(carRect.top - circle.top) < 10) {
            // If car is close to circle
            gsap.to(circle, {
              scale: 1.2,
              duration: 0.1,
              ease: "power1.Out",
            });
            gsap.to(card, {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "power3.inOut",
              duration: 0.6,
            });
          
          }

        };

        // Check for each circle
        revealCard(card1Ref.current, circle1Rect);
        revealCard(card2Ref.current, circle2Rect);
        revealCard(card3Ref.current, circle3Rect);
      },
    });
  }, []);


  // Modified card content matching Agriniri workflow
  const cardContent = [
    {
      type: "farmers",
      title: "Farmers",
      items: ["Collection System", "Advanced Storage", "Pesticide Removal"]
    },
    {
      type: "agriniri",
      title: "Agriniri",
      items: ["Organized Marketplace", "Quality & Hygiene", "Vegetable Variety"]
    },
    {
      type: "retailers",
      title: "Retailers & Consumers",
      items: ["Door-step Delivery", "Healthier Options", "Competitive Pricing"]
    }
  ];

  return (
    <section className="mt-16 px-4 pt-5 bg-secondary w-full relative" ref={sectionRef}>
      {/* ... existing WavyText and SVG remains the same */}
      <WavyText
        text="How Agriniri Work ?"
        classes="justify-center item-center text-center text-5xl text-white font-family-gilroy-Bold"
      />
      {/* Modified Cards Section */}
      <div className="max-w-[1250px] w-full relative mt-16 ">
      <svg
         width="462"
         height="500" 
         viewBox="0 0 462 400" 
         className="w-full h-full overflow-visible"
        >
          {/* 🚜 Motion Path */}
          <path
           ref={lineRef}
           d="M 250 0 L 250 350" 
           stroke="#0000FF"
           strokeWidth="2"
          />

          {/* 🎯 Smaller Circular Points */}
          <circle ref={circle1Ref} cx="250" cy="50" r="3" fill="#FF5733" />
          <circle ref={circle2Ref} cx="250" cy="150" r="3" fill="#FF5733" />
          <circle ref={circle3Ref} cx="250" cy="250" r="3" fill="#FF5733" />

          {/* 🚜 Moving Car */}
          <g ref={carRef} transform="scale(0.5)">
            <path
              d="M45.5126 32.8551L52.6609 27.8605C52.8849 27.7015 53.0143 27.5011 53.0633 27.281L68.7632 27.281C71.7233 27.281 74.1201 25.6064 74.1201 23.5405V10.4414C74.1201 8.37307 71.7233 6.69838 68.7632 6.69838L53.0633 6.69838C53.0143 6.4808 52.8849 6.27788 52.6609 6.11897L45.5126 1.12674C44.8442 0.659786 43.6511 0.740459 42.8393 1.3052C42.0311 1.87239 41.9156 2.70852 42.5804 3.17547L47.6259 6.69838L32.9163 6.69838C29.9596 6.69838 27.5593 8.37307 27.5593 10.4414L27.5593 23.5405C27.5593 25.6064 29.9596 27.281 32.9163 27.281L47.6259 27.281L42.5804 30.8088C41.9156 31.2734 42.0311 32.107 42.8393 32.6742C43.6511 33.239 44.8442 33.3196 45.5126 32.8551Z"
              fill="#E52A2D"
            />
          </g>
        </svg>

        {/* Animated Cards with WorkflowCard */}
        <div
          ref={card1Ref}
          className="absolute left-[320px] top-[260px] opacity-0 scale-0 transform translate-y-6 z-10 w-72"
        >
          <WorkflowCard
            type={cardContent[0].type}
            title={cardContent[0].title}
            items={cardContent[0].items}
          />
        </div>

        <div
          ref={card2Ref}
          className="absolute right-[260px] top-[540px] opacity-0 scale-0 transform translate-y-6 z-10 w-72"
        >
          <WorkflowCard
            type={cardContent[1].type}
            title={cardContent[1].title}
            items={cardContent[1].items}
          />
        </div>

        <div
          ref={card3Ref}
          className="absolute left-[330px] top-[800px] opacity-0 scale-0 transform translate-y-6 z-10 w-72"
        >
          <WorkflowCard
            type={cardContent[2].type}
            title={cardContent[2].title}
            items={cardContent[2].items}
          />
        </div>
      </div>
    </section>
  );
}

export default Work;