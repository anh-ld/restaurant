import React from "react"
import {connect} from "react-redux"
import {signInWithGoogle} from "../../actions/userActions/signIn"
import Button  from '../atom/Button'

interface Props {
    isSigningIn: boolean
    handleSignInClick: () => void
    signInWithGoogle: () => void
}

const SignInButton: React.FC<Props> = ({isSigningIn, handleSignInClick, signInWithGoogle}) => {
    const handleClick = () => {
        handleSignInClick()
        signInWithGoogle()
    }

    return (
        <Button onClick={handleClick}>
            {!isSigningIn ? "Sign in with Google" : "Signing in..."}
        </Button>
    )
}

export default connect(null, {signInWithGoogle})(SignInButton)