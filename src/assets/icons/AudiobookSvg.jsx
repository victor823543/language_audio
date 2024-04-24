import { motion } from "framer-motion"

const AudiobookSvg = ({color, className}) => {
  return (
    <motion.svg 
        className={className}
    fill={color ? color : "#ffffff"} height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 205.951 205.951" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M200.951,30.335h-4.546v-4.667c0-2.762-2.239-5-5-5H14.546c-2.761,0-5,2.238-5,5v4.667H5c-2.761,0-5,2.238-5,5v138.417 c0,2.762,2.239,5,5,5h78.976v1.53c0,2.762,2.239,5,5,5h28c2.761,0,5-2.238,5-5v-1.53h78.975c2.761,0,5-2.238,5-5V35.335 C205.951,32.573,203.712,30.335,200.951,30.335z M19.546,159.085V30.668h78.429v12.799C70.713,45.76,51.406,67.134,51.406,95.99 v5.015c-6.138,2.171-10.555,8.017-10.555,14.889v14.378c0,8.715,7.09,15.806,15.805,15.806h5.768c3.237,0,5.871-2.634,5.871-5.871 v-34.246c0-3.237-2.634-5.871-5.871-5.871h-1.018v-4.1c0-23.442,14.804-40.29,36.569-42.487v105.582H19.546z M186.404,159.085 h-78.429V53.526c21.658,2.279,36.373,19.093,36.373,42.464v4.1h-1.584c-3.237,0-5.871,2.634-5.871,5.871v34.246 c0,3.237,2.633,5.871,5.871,5.871h5.768c8.715,0,15.805-7.091,15.805-15.806v-14.378c0-6.66-4.147-12.359-9.989-14.682V95.99 c0-28.787-19.213-50.131-46.373-52.51V30.668h78.429V159.085z"></path> </g></motion.svg>
  )
}

export default AudiobookSvg