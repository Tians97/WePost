import React, { useState } from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { SideSheet, Paragraph } from 'evergreen-ui';
import './ReviewIndex.css'

export default function ReviewIndex() {
    const [isShown, setIsShown] = React.useState(false)
    return (
        <>
            <SideSheet
                isShown={isShown}
                onCloseComplete={() => setIsShown(false)}
                preventBodyScrolling
            >
                <Paragraph margin={40}>Basic Example</Paragraph>
            </SideSheet>
            <a onClick={() => setIsShown(true)}><ChatBubbleOutlineOutlinedIcon/></a>
        </>
    )
}
