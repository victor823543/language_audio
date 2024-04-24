import cn from "../utils/cn"

const Divider = ({vertical, className}) => {
    const styles = 'border-main-500'
    if (vertical) {
        return (
            <div className={cn('border-t w-5/6', styles, className)}>
            </div>
        )
    } else {
        return (
            <div className={cn('border-t w-5/6', styles, className)}>
            </div>
        ) 
    }
}

export default Divider