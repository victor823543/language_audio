import { motion } from "framer-motion"

const TranslationSvg = ({color, className}) => {
  return (
    <motion.svg className={className} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" stroke={color ? color : "#ffffff"} fill={color ? color : "#ffffff"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"> <path d="m16.5 8.5v-6c0-1.1045695-.8954305-2-2-2h-6c-1.1045695 0-2 .8954305-2 2v6c0 1.1045695.8954305 2 2 2h6c1.1045695 0 2-.8954305 2-2z"></path> <path d="m4.5 6.50344846h-2.00001427c-1.1045695 0-2 .8954305-2 2v5.99943324c0 1.1045695.8954305 2 2 2h.00345627l6.00001428-.0103718c1.10321833-.0019065 1.99654372-.8967771 1.99654372-1.999997v-1.9925129"></path> <g transform="translate(2.502 9.5)"> <path d="m2.998 1.003h-3"></path> <path d="m4.49841597 2.5c-.33333333.33333333-.66666667.66666667-1 1s-1.16666667.83333333-2.5 1.5"></path> <path d="m.99841597 1.00316806c.33333333 1.16613866.83333333 1.99894398 1.5 2.49841597s1.5.99894398 2.5 1.49841597"></path> </g> <g transform="translate(8.5 2.5)"> <path d="m3 0-3 6"></path> <path d="m3 0 3 6"></path> <path d="m3 2v4" transform="matrix(0 1 -1 0 7 1)"></path> </g> </g> </g></motion.svg>
  )
}

export default TranslationSvg