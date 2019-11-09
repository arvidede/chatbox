import React from 'react'
import { Message } from './'
import '../styles/MessageView.css'

export const MessageView = ({ messages }) => {
    return (
        <div className='message-view'>
            {messages.map((message, index) => (
                <Message key={'message-' + index} message={message} />
            ))}
        </div>
    )
}
