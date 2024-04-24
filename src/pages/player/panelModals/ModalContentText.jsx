import { RiIndeterminateCircleFill, RiFontSize2, RiAddCircleFill } from "@remixicon/react"

const ModalContentText = ({handleSubtract, handleAdd}) => {
    return (
      <div className="flex justify-center items-center gap-3 text-basic-200">
        <RiIndeterminateCircleFill className="size-12 cursor-pointer" onClick={handleSubtract}/>
        <RiFontSize2 className="size-16"/>
        <RiAddCircleFill className="size-12 cursor-pointer" onClick={handleAdd}/>
      </div>
    )
}
export default ModalContentText