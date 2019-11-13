import React from 'react'
import styled from 'styled-components'

const BaseHeading = styled.h2`
	color: ${p => p.theme['N1000']};
	margin: 0;
`

const HeadingLarge = styled(BaseHeading)`
    font-size: 30px;
	line-height: 30px;
`

const HeadingMedium = styled(BaseHeading)`
    font-size: 24px;
	line-height: 24px;
`
const HeadingSmall = styled(BaseHeading)`
    font-size: 14px;
	line-height: 20px;
`

const HeadingTiny = styled.h4`
	font-size: 14px;
	line-height: 16px;
	color: ${p => p.theme['N600']};
	font-weight: bold;
	text-transform: uppercase;
	margin: 0;
`

interface Props {
    variant?: 'large' | 'medium' | 'small' | 'tiny'
    children?: React.ReactNode
}

const Heading: React.FC<Props> = ({variant, children, ...rest}) => {
    switch (variant) {
        case 'large':
            return (<HeadingLarge {...rest}>{children}</HeadingLarge>)
        case 'small':
            return (<HeadingSmall {...rest}>{children}</HeadingSmall>)
        case 'tiny':
            return (<HeadingTiny {...rest}>{children}</HeadingTiny>)
        case 'medium':
        default:
            return (<HeadingMedium {...rest}>{children}</HeadingMedium>)
    }
}

export default Heading