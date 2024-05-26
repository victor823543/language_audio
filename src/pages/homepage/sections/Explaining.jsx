import ExplanationStep from "../../../components/ExplanationStep"
import Header from "../../../components/Header"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import ExplanationImages from "../../../components/ExplanationImages"
import ImageA from '../../../assets/images/technology.jpg'
import ImageB from '../../../assets/images/text_splitting.jpeg'
import ImageC from '../../../assets/images/coding.jpg'
import ImageD from '../../../assets/images/audiomixing.jpg'
import ImageE from '../../../assets/images/audiobook.jpg' 


const data = [
    {
        title: 'Transcribed with AI',
        content: 'Using advanced Large Language Models, audiobooks in different languages is transcribed, returning timestamps for each words.',
        image: ImageA
    },
    {
        title: 'Splitting text',
        content: 'The text to each audiobook is split into sentences based of a vast number of criteria specific for each language.',
        image: ImageB
    },
    {
        title: 'Aligning sentences',
        content: 'The sentences are translated into the same language, before they are compared using various methods for measuring string similarity. Using complex algorithms the sentences of each language are then aligned.',
        image: ImageC
    },
    {
        title: 'Aligning audio',
        content: 'Each audiotranscription is compared to the now completely matching text sentences and a list of timestamps for each sentence corresponding the text sentences is created.',
        image: ImageD
    },
    {
        title: 'Mixing audiofiles',
        content: 'Based of the timestamps, the audiofiles are automatically split into parts, before they are put together with the same sentence in both languages.',
        image: ImageE
    }
]

const Explaining = () => {
    const ref = useRef(null)
    const topRef = useRef(null)
    const bottomRef = useRef(null)
    const headerRef = useRef(null)
    const [activePart, setActivePart] = useState(0)
    const { scrollYProgress } = useScroll({target: ref})
    const color = useTransform(scrollYProgress, [0, 1], ['#f59e0b', '#38bdf8'])
    const background = useTransform(scrollYProgress, [0, 0.5, 1], [
        "linear-gradient(180deg, #000000 0%, #0f172a 100%)",
        "linear-gradient(180deg, #78350f 0%, #0c4a6e 100%)",
        "linear-gradient(180deg, #082f49 0%, #020617 100%)"
    ]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const activeIndex = Math.ceil(latest * 5) - 1
        setActivePart(activeIndex)
       
    })

    useEffect(() => {
        const htmlElement = document.documentElement;
        
        const handleIntersection = (entries) => {
            let topElementInView = false;
            let bottomElementInView = false;  
            entries.forEach((entry) => {
                if (entry.target === topRef.current) {
                topElementInView = entry.isIntersecting;
                console.log('top')
                }
                if (entry.target === bottomRef.current) {
                bottomElementInView = entry.isIntersecting;
                console.log('bottom')
                }
            });

            // Check if the header is at the top: 0
            const headerAtTop = headerRef.current && headerRef.current.getBoundingClientRect().top === 0;

            if (!topElementInView && !bottomElementInView && headerAtTop) {
                htmlElement.style.scrollSnapType = 'y mandatory';
            } else {
                htmlElement.style.scrollSnapType = '';
                if (headerRef.current) {
                    console.log(headerRef.current.getBoundingClientRect().top)
                }
                
            }
            };
    
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: [0],
        });
    
        if (topRef.current) {
          observer.observe(topRef.current);
        }
    
        if (bottomRef.current) {
          observer.observe(bottomRef.current);
        }
    
        // Cleanup function to unobserve elements when the component unmounts
        return () => {
          if (topRef.current) {
            observer.unobserve(topRef.current);
          }
          if (bottomRef.current) {
            observer.unobserve(bottomRef.current);
          }
        };
      }, []);

    return (
        <div ref={ref} className={`relative w-full`}>
            <motion.div style={{backgroundImage: background, opacity: backgroundOpacity}} className="fixed inset-0 h-screen w-screen"></motion.div>
            <div ref={headerRef} className="sticky top-0 pt-6 backdrop-blur-md z-10 bg-transparent w-full">
                <Header
                    size='lg'
                    textShadow='md'
                >
                    FULLY AUTOMATED PRODUCTION
                </Header>
            </div>
            <div ref={topRef} className="h-5 w-full"></div>
            {data.map((object, index) => 
                <ExplanationStep 
                    step={index + 1}
                    title={object.title}
                    content={object.content}
                    image={object.image}
                    active={index === activePart ? true : false}
                />
            )} 
            
                
            <div ref={bottomRef} className="h-20 w-full"></div>
        </div>
    )
}

export default Explaining