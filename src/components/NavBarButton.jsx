import { motion, MotionConfig } from "framer-motion";
import cn from "../utils/cn";
import { useState } from "react";

const NavBarButton = ({active, setActive, className, inverted, invertedHover}) => {
    const [invert, setInvert] = useState(inverted ? true : false)
    const handleMouseEnter = () => {
        if (invertedHover) {
            setInvert(true)
        }
    }
    const handleMouseLeave = () => {
        if (invertedHover) {
            setInvert(false)
        }
    }
    return (
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive((pv) => !pv)}
          className={cn('relative h-20 w-20 rounded-xl bg-white/0 transition-colors hover:bg-white/20 max-xs:scale-75', className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.span
            variants={VARIANTS.top}
            className={`absolute h-1 w-10`}
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%", backgroundColor: invert ? '#000000' : '#ffffff' }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className={`absolute h-1 w-10`}
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%", backgroundColor: invert ? '#000000' : '#ffffff' }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className={`absolute h-1 w-5`}
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
              backgroundColor: invert ? '#000000' : '#ffffff'
            }}
          />
        </motion.button>
      </MotionConfig>
    );
};
  
  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

export default NavBarButton