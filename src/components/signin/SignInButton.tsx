import React from "react"
import {connect} from "react-redux"
import {signInWithGoogle} from "Action/userActions/signIn"
import Button from 'Atom/Button'
import styled from "styled-components"

interface Props {
    isSigningIn: boolean
    handleSignInClick: () => void
    signInWithGoogle: () => void
}

const StyledButton = styled(p => <Button {...p} />)`
    width: 100%;
`

const SignInButton: React.FC<Props> = ({isSigningIn, handleSignInClick, signInWithGoogle}) => {
    const handleClick = () => {
        handleSignInClick()
        signInWithGoogle()
    }

    return (
        <StyledButton onClick={handleClick}>
            {!isSigningIn ? "Sign in with Google" : "Signing in..."}
        </StyledButton>
    )
}

export default connect(null, {signInWithGoogle})(SignInButton)
