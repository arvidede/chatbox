import React, { useState } from 'react'
import { Input, MessageView } from './'
import '../styles/ChatView.css'

export const ChatView = ({ messages, onSendMessage }) => {
    return (
        <div className="chat">
            <MessageView messages={messages} />
            <Input onSendMessage={onSendMessage} />
        </div>
    )
}
