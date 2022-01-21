import { useAppSelector } from "../app/hooks";
import {
  getCount,
} from '../app/toolkit'


const Screen = () => {
  const count = useAppSelector(getCount)


  return (
    <div
      className="text-3xl h-10 bg-white w-full text-right focus:outline-none  display mb-6"
    >
      {count}
    </div>
  )
}


export default Screen;