import React from 'react'
import '../styles/Message.scss'

export const Message = ({ message }) => {
    const isFromMe = message.sender === 'me'
    console.log(message)
    return (
        <p className={isFromMe ? 'message-from' : 'message-to'}>
            {message.text}
        </p>
    )
}
