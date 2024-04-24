import cn from "../utils/cn";
import { useEffect, useRef, useState } from "react";
import AudiobookDisplay from "./AudiobookDisplay";

const ItemSlider = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  onClick,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const itemId = item.id
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.addEventListener('click', () => onClick(itemId))
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative w-[95vw] z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="max-w-full relative rounded-2xl border flex-shrink-0 border-main-700 px-3 py-2 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
            style={{
              background:
                "linear-gradient(180deg, black, var(--slate-950))",
            }}
            id={item.id}
            key={item.id}
            onClick={() => onClick(item.id)}
          >
           
            <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <AudiobookDisplay 
                item={item}
            />
             
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemSlider;
