import React from "react"
import styled from "styled-components"
import Heading from './Heading'

const StyledLoading = styled(p => <Heading variant='large' {...p} />)`
    background-color: ${p => p.theme['0']};
    color: ${p => p.theme['700']};
    text-align: center;
    margin: 0 auto;
    padding: calc(50vh - 15px) 0;
`

const Loading: React.FC<{}> = () => <StyledLoading>loading...</StyledLoading>

export default Loading
