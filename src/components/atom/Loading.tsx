import React from "react"
import styled from "styled-components"
import {media} from "../../utils/styling"

const StyledLoading = styled.h1`
    background-color: ${p => p.theme['0']};
    color: ${p => p.theme['700']};
    text-align: center;
    margin: 0 auto;
    padding: calc(50vh - 1.5rem) 0;
    ${media.tablet`
        font-size: 1.45rem;
    `}
    ${media.phone`
        font-size: 1.15rem;
    `}
`

const Loading: React.FC<{}> = () => <StyledLoading>loading...</StyledLoading>

export default Loading
