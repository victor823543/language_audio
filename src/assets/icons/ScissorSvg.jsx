import { motion } from "framer-motion"

const ScissorSvg = ({color, className}) => {
  return (
    <motion.svg className={className} fill={color ? color : '#ffffff'} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 97.529 97.529" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M92.358,62.188c-6.326-6.28-16.271-6.722-23.109-1.327l-6.527-6.431l21.753-21.638c7.641-7.6,7.68-19.953,0.087-27.601 l-35.73,35.557L13.743,6.187c-3.641,3.667-5.672,8.634-5.645,13.801s2.11,10.112,5.79,13.741l21.09,20.807l-6.699,6.666 c-6.837-5.396-16.784-4.953-23.109,1.328c-6.837,6.784-6.909,17.836-0.123,24.672c6.787,6.836,17.837,6.844,24.672,0.057 l19.136-19.035l18.954,18.695c6.835,6.787,17.886,6.781,24.673-0.057C99.269,80.025,99.195,68.976,92.358,62.188z M22.122,79.604 c-2.578,2.558-6.754,2.542-9.313-0.034c-2.558-2.576-2.542-6.755,0.035-9.312c2.577-2.557,6.754-2.543,9.312,0.033 C24.714,72.869,24.699,77.045,22.122,79.604z M48.993,61.193c-3.656,0-6.621-2.964-6.621-6.621c0-3.656,2.964-6.621,6.621-6.621 s6.621,2.964,6.621,6.621C55.614,58.229,52.649,61.193,48.993,61.193z M84.72,79.231c-2.56,2.576-6.735,2.593-9.313,0.033 c-2.576-2.56-2.592-6.735-0.033-9.313c2.559-2.576,6.735-2.59,9.312-0.033C87.262,72.478,87.277,76.656,84.72,79.231z"></path> </g> </g></motion.svg>
  )
}

export default ScissorSvg