import React, {useCallback} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import {changeTheme} from "Action/themeActions/changeTheme"
import palette from "Util/theme"
import ColorButton from "./ColorButton"
import {State} from "Type/store"

const StyledColor = styled.div`
    height: 20px;
`

interface ColorObj {
    color?: string
    value?: string
}

interface Props {
    changeTheme: (color: string) => void
    currentTheme: string
}

const buttonColorArray: Array<ColorObj> = Object.entries(palette).map(item => ({color: item[1]['400'], value: item[0]}))

const ColorPalette: React.FC<Props> = ({currentTheme, changeTheme}) => {
    const handleChangeTheme = (color: string) => {
        changeTheme(color)
    }

    const memoizedHandleChangeTheme = useCallback(handleChangeTheme, [])

    return (
        <StyledColor className="tc">
            {buttonColorArray.map((item: ColorObj, index: number) => (
                <ColorButton
                    color={item.color}
                    value={item.value}
                    key={index}
                    isActive={item.value === currentTheme}
                    handleChangeTheme={memoizedHandleChangeTheme}
                />
            ))}
        </StyledColor>
    )
}

const mapStateToProps = (state: State) => ({currentTheme: state.theme.color})

export default connect(mapStateToProps, {changeTheme})(ColorPalette)
