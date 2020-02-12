import React, {useState} from "react"
import SignInButton from "./signin/SignInButton"
import SignInAnon from "./signin/SignInAnon"
import styled from "styled-components"

const StyledSignIn = styled.div`
    width: 300px;
    padding: calc(50vh - 34px - 26px) 0;
`

const SignIn: React.FC<{}> = () => {
    const [isSigningIn, setIsSigningIn] = useState(false)

    return (
        <StyledSignIn className="m-auto">
            <SignInButton
                isSigningIn={isSigningIn}
                handleSignInClick={() => setIsSigningIn(true)}
            />
            <SignInAnon handleSignInClick={() => setIsSigningIn(true)}/>
        </StyledSignIn>
    )
}

export default SignIn
