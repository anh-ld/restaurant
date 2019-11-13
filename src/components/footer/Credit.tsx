import React from "react"
import styled from "styled-components"
import Link from 'Atom/Link'
import Text from 'Atom/Text'

const StyledText = styled(p => <Text {...p}/>)`
    font-size: 18px;
`

const Credit: React.FC<{}> = () => (
    <StyledText>
        made by&nbsp;
        <Link
            href="https://github.com/culee"
            target="_blank"
            rel="noopener noreferrer"
        >
            @culee
        </Link>
    </StyledText>
)

export default React.memo(Credit)
