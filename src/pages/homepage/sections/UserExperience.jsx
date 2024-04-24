import Section from "../../../components/Section"
import Divider from "../../../components/Divider"
import GeneratedText from "../../../components/GeneratedText"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { RiSlowDownFill, RiSpeedUpFill } from "@remixicon/react"

const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam. Viverra adipiscing at in tellus integer. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. In hac habitasse platea dictumst vestibulum.'

const loremIpsumSentences = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.', 'Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.', 'Vestibulum quam neque, tincidunt eget elit quis, placerat tempor est.', 'Vestibulum quam neque, tincidunt eget elit quis, placerat tempor est.']

const UserExperience = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => (prevCount < 5 ? prevCount + 1 : 0))
    }, 2000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=' min-h-72 flex flex-col items-center bg-gradient-to-br from-black to-basic-900'>
      <Divider className='mb-12 border-secondary-500'/>
        <div className="w-full flex justify-center py-6 px-10">
            <GeneratedText 
                text='Optimized for learning'
                colorTheme={'secondary'}
                className='mb-10'
            />
        </div>
      <div className="flex w-full font-nunitoSans">
        <div className="px-10 flex-grow w-0">
          <Section
            variant='neonBorder'
            color='transparent'
            className='text-basic-200'
          >
            <h2 className="text-3xl font-nunitoSans text-secondary-400 font-light mb-2">Follow along the text</h2>
            <p className="text-lg text-main-200 font-light">The text is shown in two parallell columns with the current sentence highlighted. Thus you can combine reading and listening to <span className="text-main-500 font-montserrat text-xl text-shadow shadow-main-700 border-b border-secondary-800">maximize your learning.</span>  And don't worry, the text will automatically scroll down for you. And of course you can customize the font after your preference.</p>
          </Section>
        </div>
        <div className="px-10 flex-grow w-0">
          <Section
            variant='neonBorder'
            color='transparent'
            className='text-basic-200'
          >
            <div className="grid grid-cols-2 gap-2">

              {loremIpsumSentences.map((text, index) => 
                <div key={index} className={`${count === index ? 'relative' : 'block'}`}>
                  <div
                    className="p-3 z-10 text-white"
                  >{text}</div>
                  {count === index &&
                  <motion.span
                    layoutId="highlight"
                    className="absolute inset-0 z-0 rounded-md bg-main-300/30"
                  ></motion.span>}
                </div>
              )}

            </div>
          </Section>
        </div>
      </div>
      <div className="flex w-full font-nunitoSans mt-16">
      <div className="px-10 flex-grow w-0">
          <Section
            variant='neonBorder'
            color='transparent'
            className='text-basic-200'
          >
            <div>
              <div className="flex flex-col gap-2 items-center">
                <p className="font-montserrat text-light text-xl">English</p>
                <div className="flex justify-center gap-3">
                  <RiSlowDownFill className="size-10"/>
                    <input type="range" min={5} max={10} value={9} readOnly/>
                  <RiSpeedUpFill className="size-10"/>
                </div>
                <p className="font-montserrat text-light text-xl">Spanish</p>
                <div className="flex justify-center gap-3">
                  <RiSlowDownFill className="size-10"/>
                    <input type="range" min={5} max={10} value={7} readOnly/>
                  <RiSpeedUpFill className="size-10"/>
                </div>
              </div>
            </div>
          </Section>
        </div>
        <div className="px-10 flex-grow w-0">
          <Section
            variant='neonBorder'
            color='transparent'
            className='text-basic-200'
          >
            <h2 className="text-3xl font-nunitoSans text-secondary-400 font-light mb-2">Customizable playback rate</h2>
            <p className="text-lg text-main-200 font-light">We allow you to change the playback rate of <span className="text-main-500 font-montserrat text-xl text-shadow shadow-main-700 border-b border-secondary-800">either language.</span> If you have trouble following along the audio of the language you are learning you can hence slow it down to make sure that you get as much out of every listen. </p>
          </Section>
        </div>
        
      </div>
      <Divider className='my-12 border-secondary-500'/>

    </div>
  )
}

export default UserExperience