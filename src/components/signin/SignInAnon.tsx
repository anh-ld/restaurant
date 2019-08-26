import React from "react"
import {connect} from "react-redux"
import {signInAnon} from "../../actions/userActions/signIn"
import styled from "styled-components"

const StyledAnon = styled.p`
    color: ${p => p.theme['600']};
    margin: 0.25rem 0;
    font-size: 0.9rem;
    text-align: center;
`

const Link = styled.span`
    text-decoration: underline;
    &:hover {
        cursor: pointer;
        color: ${p => p.theme['800']};
    }
    &:active {
        color: ${p => p.theme['800']};
    }
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
        <StyledAnon>
            or click&nbsp;
            <Link onClick={handleClick}>
                here
            </Link>
            &nbsp;to sign in anonymously
        </StyledAnon>
    )
}

export default connect(null, {signInAnon})(SignInAnon)
