import {css} from "styled-components"

interface Sizes {
    desktop: number
    tablet: number
    phone: number
    [key: string]: number
}

const sizes: Sizes = {
    desktop: 992,
    tablet: 767,
    phone: 480
}

export const media: any = Object.keys(sizes).reduce((acc: {[key: string]: () => void}, label: string) => {
    acc[label] = (...args: any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
    // @ts-ignore
        ${css(...args)}
    }`
    return acc;
}, {})
