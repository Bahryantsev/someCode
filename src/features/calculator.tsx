import Screen from "./screen"
import { press, equal, operator, dot, backspace} from "../app/toolkit"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Keyboard from "./keyboard"




const Calculator = ({...props}) => {
    const dispatch = useDispatch()
    const [isHidden, setHidden] = useState('hidden')
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const operators = ['+' , '-', '*', '/']

    useEffect (()=>{
        !props.hidden && setHidden('block')
    },[props.hidden])

    const handleClick = ()=>{
        setHidden('hidden')
    }
    const handleKeyboardEvent = (e) => {
        numbers.map(number => +e.key == number && dispatch(press(e.key)));
        operators.map(key => e.key == key && dispatch(operator(e.key)));
        e.key === '=' && dispatch(equal())|| e.code == 'Enter' && dispatch(equal());
        e.key == '.' && dispatch(dot()) || e.key == ',' && dispatch(dot());
        e.code == 'Backspace' && dispatch(backspace())
    }
    // bcuz of server site rendering we have to use useEffect hook or browser will not detect 'document'
    useEffect(()=>{
        document.addEventListener('keyup',handleKeyboardEvent)
    },[])


    return (
        <div className={`bg-grey p-6 pt-14 button relative ${isHidden}`}>
            <div className="head bg-cover absolute top-0 left-0 h-8 flex items-center justify-end p-2">
                <div className="h-6 w-6"
                onClick={handleClick}
                />
            </div>
            <Screen />
            <Keyboard/>
        </div>
    )
}
export default Calculator