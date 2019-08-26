import React from "react"
import styled from "styled-components"
import {media} from "../../../utils/styling"

const StyledCheckOutAlert = styled.h2`
  ${media.tablet`
    font-size: 1.25rem;
  `}
  ${media.phone`
    font-size: 1rem;
  `}
`

const CheckOutAlert: React.FC<{}> = () => <StyledCheckOutAlert>Please checkout before signing out!</StyledCheckOutAlert>

export default CheckOutAlert
