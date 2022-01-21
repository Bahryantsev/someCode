import { useDispatch } from "react-redux"




const Button = ({ ...props }) => {
    const dispatch = useDispatch()
    return (
            <div 
            className={`text-xl  mb-1 mr-1 h-14 bg-grey text-red-700 flex items-center justify-center button
            ${props.wide ?`w-28`:`w-16`}  ${props.clickable == false && (props.index === 3 || props.index === 2) ? `text-slate-700`:(props.red ?`text-red-700`:`text-blue-700`)}`} 
            onClick={() => dispatch(props.action(props.value))}>
                {props.value}
            </div>
    )
}
export default Button