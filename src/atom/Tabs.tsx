import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from 'Atom/Button'
import Pane from 'Atom/Pane'

interface Tab {
    label: string
    content: React.ReactNode
}

interface TabsProps {
    tabs: Array<Tab>
    onSelect?: (tabIndex: number, tabLabel: string) => void
    contentHeight?: number
}

const Tabs: React.FC<TabsProps> = ({ tabs, onSelect, contentHeight }) => {
    const [activeTab, setActiveTab] = useState(0)

    const handleChangeTab = (tabIndex: number, tabLabel: string) => {
        setActiveTab(tabIndex)
        onSelect && onSelect(tabIndex, tabLabel)
    }

    return (
        <StyledPane>
            <div>
                {tabs.map((item: any, index: number) => (
                    <StyledButton
                        variant="transparent"
                        key={index}
                        onClick={() => handleChangeTab(index, item.label)}
                        active={activeTab === index}
                    >
                        {item.label}
                    </StyledButton>
                ))}
            </div>
            <TabContent contentHeight={contentHeight}>
                {tabs[activeTab].content}
            </TabContent>
        </StyledPane>
    )
}

const ActiveButton = css`
    border-bottom: 3px solid ${p => p.theme['700']};
    color: ${p => p.theme['700']};
`

const StyledButton = styled(p => <Button {...p} />)`
    & ~ & { margin-left: 16px; }
    ${p => p.active && ActiveButton}
`

const StyledPane = styled(p => <Pane {...p} />)`
    margin-top: 20px;
    padding-top: 0;
    > div:first-child {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3px;
            background: rgba(0,0,0,0.05);
            opacity: 1;
        }
    }
`

const TabContent = styled.div<{contentHeight?: number}>`
    padding-top: 16px;
    max-height: ${p => p.contentHeight ? p.contentHeight + 'px' : '100%'};
    overflow-y: auto;

    ::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		background: ${p => p.theme['400']};
	}
	::-webkit-scrollbar-thumb {
		background: ${p => p.theme['400']};
		border-radius: 8px;
	}
	::-webkit-scrollbar-track {
		background: ${p => p.theme.N100};
	}
`

export default Tabs