import cn from "../utils/cn";

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  activate = false,
  ...props
}) => {
  return (
      <div
        className={cn(
          "h-screen w-full transition-bg",
          className
        )}
        {...props}
      >
        {activate && <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--amber-300)_15%,var(--blue-300)_20%,var(--amber-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter 
            blur-[10px] 
            invert-0
            after:content-[""] 
            after:absolute
            after:inset-0 
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora 
            after:[background-attachment:fixed] 
            after:mix-blend-difference
            pointer-events-none
            absolute 
            -inset-[10px] 
            opacity-50 
            will-change-transform`,
            showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_50%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>}
        {children}
      </div>
  );
};

export default AuroraBackground