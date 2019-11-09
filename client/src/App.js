import React from 'react'
import Socket from './assets/js/api.js'
import { ChatView } from './components/'
import './styles/App.css'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            messages: []
        }

        this.socket = new Socket(msg => this.handleNewMessage(msg, 'other'))
    }

    handleSendMessage = msg => {
        this.socket.sendMessage(msg)
        this.handleNewMessage(msg, 'me')
    }

    handleNewMessage = (msg, from) => {
        const { messages } = this.state
        messages.push({ text: msg, sender: from })
        this.setState({ messages })
    }

    render() {
        return (
            <div className="App">
                <ChatView
                    messages={this.state.messages}
                    onSendMessage={this.handleSendMessage}
                />
            </div>
        )
    }
}

export default App
