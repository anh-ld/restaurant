import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import {changeTheme} from "../../actions/themeActions/changeTheme"
import palette from "../../utils/theme"
import ColorButton from "./ColorButton"
import {State} from "../../types/store"

const StyledColor = styled.div`
    height: 20px;
    text-align: center;
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
        if (currentTheme !== color) {
            changeTheme(color)
        }
    }

    return (
        <StyledColor>
            {buttonColorArray.map((item: ColorObj, index: number) => {
                return (
                    <ColorButton
                        color={item.color}
                        value={item.value}
                        key={index}
                        isActive={item.value === currentTheme}
                        handleChangeTheme={handleChangeTheme}
                    />
                )
            })}
        </StyledColor>
    )
}

const mapStateToProps = (state: State) => ({currentTheme: state.theme.color})

export default connect(mapStateToProps, {changeTheme})(ColorPalette)
