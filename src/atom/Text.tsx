import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    text-decoration: none;
    color: ${p => p.theme['N700']}
`

export default Text