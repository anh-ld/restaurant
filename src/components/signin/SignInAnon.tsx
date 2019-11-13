import React from "react"
import {connect} from "react-redux"
import {signInAnon} from "Action/userActions/signIn"
import styled from "styled-components"
import Text from 'Atom/Text'
import Link from 'Atom/Link'

const StyledText = styled(p => <Text {...p} />)`
    text-align: center;
`

interface Props {
    handleSignInClick: () => void
    signInAnon: () => void
}

const SignInAnon: React.FC<Props> = ({handleSignInClick, signInAnon}) => {
    const handleClick = () => {
        handleSignInClick()
        signInAnon()
    }

    return (
        <StyledText>
            or click&nbsp;
            <Link onClick={handleClick}>
                here
            </Link>
            &nbsp;to sign in anonymously
        </StyledText>
    )
}

export default connect(null, {signInAnon})(SignInAnon)
