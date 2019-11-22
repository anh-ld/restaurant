import React from "react"
import {connect} from "react-redux"
import {signInAnon} from "Action/userActions/signIn"
import Text from 'Atom/Text'
import Link from 'Atom/Link'

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
        <Text className="tc">
            or click&nbsp;
            <Link onClick={handleClick}>
                here
            </Link>
            &nbsp;to sign in anonymously
        </Text>
    )
}

export default React.memo(connect(null, {signInAnon})(SignInAnon))
