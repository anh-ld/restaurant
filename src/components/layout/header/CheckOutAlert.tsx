import React from "react"
import styled from "styled-components"
import Heading from '../../atom/Heading'

const StyledCheckOutAlert = styled(p => <Heading variant='large' {...p} />)`
    margin: 8px 0;
`

const CheckOutAlert: React.FC<{}> = () => <StyledCheckOutAlert>Please checkout before signing out!</StyledCheckOutAlert>

export default CheckOutAlert
