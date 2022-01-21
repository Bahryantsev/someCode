import {
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
    getClickable,
    clearEnter
} from "./toolkit"
import { useAppSelector } from "./hooks"


export const keyboard = [
    {
        value: 0,
        action: press,
    },
    {
        value: '+/-',
        action: signChange,
    },
    {
        value: '•',
        action:dot,
    },
    {
        value: 1,
        action: press,
    },
    {
        value: 2,
        action: press,
    },
    {
        value: 3,
        action: press,
    },
    {
        value: 4,
        action: press,
    },
    {
        value: 5,
        action: press,
    },
    {
        value: 6,
        action: press,
    },
    {
        value: 7,
        action: press,
    },
    {
        value: 8,
        action: press,
    },
    {
        value: 9,
        action: press,
    },
  
]

export const actButtons = [
    {
        value: '+',
        action: operator,
        red: true
    },
    {
        value: '=',
        action: equal,
        red: true
    },
    {
        value: '-',
        action: operator,
        red: true
    },
    {
        value: '1/x',
        action: fraction
    },
    {
        value: '*',
        action: operator,
        red: true
    },
    {
        value: '%',
        action: percent
    },
    {
        value: '/',
        action: operator,
        red: true
    },
    {
        value: `√x`,
        action: sqare
    },

]

export const MemoryButtons = [
    {
        value:'M+',
        action: memorizeSum,
        red: true,
    },
    {
        value:'MS',
        action: memorize,
        red: true,
    },
    {
        value:'MR',
        action: memorizedShow,
        // clickable: clickable,
        red: true,
    },
    {
        value:'MC',
        action: memorizedClear,
        // clickable: clickable,
        red: true,
    },
]

export const ClearButtons = [
    {
        value:'Backspace',
        action: backspace,
        red: true,
        wide: true
    },
    {
        value:'CE',
        action: clearEnter,
        red: true,
        wide: true
    },
    {
        value:'C',
        action: clear,
        red: true,
        wide: true
    }
]
