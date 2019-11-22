import React, {useEffect} from "react"
import {connect} from "react-redux"
import Header from "./layout/Header"
import Summary from "./layout/Summary"
import Body from "./layout/Body"
import {fetchData} from "Action/userActions/fetchData"
import styled from "styled-components"
import {State} from "Type/store"

const StyledDashboard = styled.div`
    width: 960px;
    padding: 0 16px;
`

interface Props {
    fetchData: (uid: string) => void
    uid: string
}

const Dashboard: React.FC<Props> = ({fetchData, uid}) => {
    useEffect(() => {
        fetchData(uid)
    })

    return (
        <StyledDashboard className="m-auto">
            <Header/>
            <Summary/>
            <Body/>
        </StyledDashboard>
    )
}

const mapStateToProps = (state: State) => ({uid: state.user.uid})

export default connect(mapStateToProps, {fetchData})(Dashboard)
