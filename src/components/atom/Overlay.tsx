import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Overlay:React.FC<{}> = (props) => {
    const [innerWidth, setInnerWidth] = useState(null)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [])

    return (
        <>
            {innerWidth < 1000 ? (
                <StyledOverlay>
                    Not supported for small screen. Try using larger screen to get the best experience. Thank you.
                </StyledOverlay>
            ) : (
                <>{props.children}</>
            )}
        </>
    )
}

const StyledOverlay = styled.div`
    display: flex;
    text-align: center;
    height: 100vh;
    align-items: center;
    color: ${p => p.theme['700']};
    font-size: 32px;
    padding: 16px;
`

export default Overlay