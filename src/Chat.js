import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';



function Chat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    

    useEffect(() => {
        setSeed(Math.random())
    }, [])

    function sendMessage(e) {
        e.preventDefault()
        console.log(input)
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/asd${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen</p>
                </div>

                <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message  ${true && 'chat__reciever'}`}>
                <span className="chat__name">Mertkan Şen</span>
                Hey Girlz!
                <span className="chat__timestamp">3:52pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />

                <form onSubmit={sendMessage}>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Type a message" 
                        type="text" 
                    />
                </form>

                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
