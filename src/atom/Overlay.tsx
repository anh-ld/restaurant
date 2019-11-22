import React, {useLayoutEffect, useState} from 'react'
import styled from 'styled-components'

const Overlay:React.FC<{}> = (props) => {
    const [innerWidth, setInnerWidth] = useState(null)
    const [innerHeight, setInnerHeight] = useState(null)
    const [status, setStatus] = useState(null)

    useLayoutEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
            setInnerHeight(window.innerHeight)
        })
        window.addEventListener('offline', () => {
            setStatus('offline')
        })
        window.addEventListener('online', () => {
            setStatus('online')
        })

        setStatus(navigator.onLine)
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
    }, [])

    if (status === 'offline') {
        return (
            <StyledOverlay>
                Enable your Internet connection to continue. Thank you.
            </StyledOverlay>
        )
    }

    if (innerWidth < 1000 || innerHeight < 750) {
        return (
            <StyledOverlay>
                Not supported for small screen. Try using larger screen to get the best experience. Thank you.
            </StyledOverlay>
        )
    }

    return <>{props.children}</>
}

const StyledOverlay = styled.div`
    display: flex;
    text-align: center;
    height: 100vh;
    align-items: center;
    justify-content: center;
    color: ${p => p.theme['700']};
    font-size: 32px;
    padding: 0 16px;
`

export default Overlay