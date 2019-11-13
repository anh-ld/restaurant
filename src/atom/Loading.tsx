import React from "react"
import styled from "styled-components"

const StyledLoading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface LoadingProps {
    dimension?: number
    color?: string
}

const Loading: React.FC<LoadingProps> = (props) => {
    const dimension = props.dimension || 45
    const color = props.color || "#fff"

    return (
        <StyledLoading>
            <svg width={dimension} height={dimension} viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" stroke={color}>
                <g fill="none" fillRule="evenodd">
                    <g transform="translate(3 3)" strokeWidth="5">
                        <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="1s"
                                repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>
        </StyledLoading>
    )
}

export default Loading
