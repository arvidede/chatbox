import React from 'react'
import { useText } from 'react-utils/Hooks'
import { RightArrow } from '../assets/img/RightArrow.js'
import '../styles/Input.css'

export const Input = ({ onSendMessage }) => {
    const text = useText('')

    function handleSendMessage() {
        if (text.value.length > 0) {
            onSendMessage(text.value)
            text.setText('')
        }
    }

    return (
        <div className="chat-input">
            <textarea
                placeholder="Meddelande"
                rows={1}
                value={text.value}
                onChange={text.setText}
            />
            <button onClick={handleSendMessage}>
                <RightArrow />
            </button>
        </div>
    )
}
