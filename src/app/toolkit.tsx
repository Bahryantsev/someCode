import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"
import { PayloadAction } from "@reduxjs/toolkit"


interface State {
    count: number | string;
    prev: number;
    operator: string,
    memorized: number,
    clickable?: boolean
}
const initialState: State = {
    count: 0,
    prev: NaN,
    operator: null,
    memorized: NaN,
    clickable: false
}

const toolkit = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        press(state, action: PayloadAction<number>) {
            state.count == 'ERROR' ?
                (
                    state.count = action.payload.toString(),
                    state.count = +state.count
                )
                :
                (state.count.toString().length < 10 ?
                    (state.count === 0 ? state.count = +action.payload : state.count = state.count + action.payload.toString(),
                        state.count = +state.count
                    )
                    :
                    (state.count = 'ERROR'))
        },
        clear(state) {
            state.prev = NaN
            state.count = 0
        },
        operator(state, action: PayloadAction<string>) {
            state.prev = +state.count
            state.operator === null ?
                (
                    state.operator = action.payload,
                    state.count = 0
                )
                :
                (
                    state.prev = eval(state.prev.toString() + state.operator + state.count),
                    state.count = 0
                )
        },
        equal(state) {
            let result  = 0
            let resultArr = []
            isNaN(state.prev) ? 
            state.count = state.count
            :
            result = eval(state.prev.toString() + state.operator + state.count)
            let length = result.toString().length
            result.toString().includes('.') ? result = +result.toFixed(length-2 < 10 ? length-2 : 10): state.count = result
            resultArr = result.toString().split('')
            for (let i = resultArr.length ; i > 0  ; i - 1) {
                resultArr[i] == 0 && resultArr.pop()
                console.log('work')
                if(resultArr[i] == '.'){
                    resultArr.pop()
                    break
                } else if(resultArr[i] != 0){
                    break
                }
            }
            state.count = +resultArr.join('')
            state.operator = null
            state.prev = NaN
        },
        memorize(state) {
            (state.memorized = +state.count)
            state.clickable = true
        },
        memorizeSum(state) {
            !isNaN(state.memorized) ? (state.memorized = state.memorized + +state.count) : (state.memorized = +state.count)
            state.clickable = true
            state.count = 0

        },
        memorizedShow(state) {
            !isNaN(state.memorized) && (state.count = state.memorized)

        },
        memorizedClear(state) {
            state.clickable = false
            state.memorized = NaN
            state.count = 0
        },
        sqare(state) {
            state.count = Math.sqrt(+state.count)
        },
        percent(state) {
            state.count = +state.count / 100
        },
        fraction(state) {
            state.count = 1 / +state.count
        },
        dot(state) {
            state.count = state.count + '.'
        },
        backspace(state) {
            let x = state.count.toString().slice(0, -1)
            state.count = +x
        },
        signChange(state) {
            let arr = state.count.toString().split('')
            arr[0] === '-' ? arr.shift() : arr.unshift('-')
            state.count = +arr.join('')
        },
        clearEnter(state) {
            state.count = 0
        }
    }
})



export default toolkit.reducer
export const { 
    press,
    clear, 
    operator, 
    equal, 
    memorize, 
    memorizeSum, 
    memorizedShow, 
    memorizedClear, 
    sqare, 
    percent, 
    fraction, 
    dot, 
    backspace, 
    signChange, 
    clearEnter 
} = toolkit.actions

export const getCount = (state: AppState) => state.toolkit.count
export const getClickable = (state: AppState) => state.toolkit.clickable
