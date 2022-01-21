import { useState, useEffect } from "react"
import Button from "./button"
import { useAppSelector } from "../app/hooks"
import { getClickable,} from "../app/toolkit"
import { actButtons, keyboard, MemoryButtons, ClearButtons } from "../app/actionButtons"




const Keyboard = ()=>{
    const [text, setText] = useState('')
    const clickable = useAppSelector(getClickable)

    useEffect(()=>{
        clickable===true?setText('M'):setText('')
    },[clickable])

    return(
        <div className="grid grid-cols-[73px_208px_136px] grid-rows-[60px_240px]">
        <div className="w-16 h-14 bg-grey flex items-center justify-center text-3xl  mb-5 row-start-1 col-start-1 display ">
            {text}
        </div>
        <div className="flex w-full col-start-2 row-start-1 col-end-4">
            {ClearButtons.map((button, index) => <Button value={button.value} action={button.action} wide={button.wide} red={button.red} key={index}/>)}
        </div>
        <div className="flex flex-wrap-reverse col-start-2 row-start-2 row-end-3">
            {keyboard.map((button, index) => <Button value={button.value} action={button.action} key={index} />)}
        </div>
        <div className="col-start-1 row-start-2 row-end-4">
            {MemoryButtons.map((button, index) => <Button value={button.value} action={button.action} red={button.red} key={index} clickable = {clickable} index = {index}/>)}
        </div>
        <div className="flex flex-wrap-reverse col-start-3 row-start-2 row-end-3">
            {actButtons.map((button, index) => <Button value={button.value} action={button.action} red={button.red} key={index} />)}
        </div>
    </div>

    )
}
export default Keyboard