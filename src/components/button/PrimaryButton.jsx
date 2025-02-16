/* eslint-disable react/prop-types */

import * as motion from "motion/react-client"
const PrimaryButton = ({ classes, text}) => {
  return (
    <motion.div
  //  initial={{scale:1}}
    whileHover={{
    
      scale: [null, 1.06],
      // transform: "translateY(-20)",
      transition:{
        duration: 0.3,
        ease: ["easeOut"]
      }
    }}
    // animate={{y:-200}}
    className={" rounded-md border font-family-gilroy-medium text-lg text-tertiary text-center border-gray-600 py-2 px-4 hover:shadow-lg shadow-neutral-400 cursor-pointer" + classes }>{text}</motion.div>
  )
}

export default PrimaryButton