import React from "react"
import styled from "styled-components"
import Credit from "./footer/Credit"
import ColorPalette from "./footer/ColorPalette"

const StyledFooter = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
`

const Footer: React.FC<{}> = () => (
    <StyledFooter>
        <Credit/>
        <ColorPalette/>
    </StyledFooter>
)

export default Footer
