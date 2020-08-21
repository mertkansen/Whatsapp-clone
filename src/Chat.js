import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import db from './firebase';
import { useParams } from 'react-router-dom';
import './Chat.css'

import { Avatar, IconButton } from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useStateValue } from './StateProvider';

function Chat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomId } = useParams()
    const [roomName, setRoomName] = useState('')
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
        if (roomId) {
            setSeed(Math.random() * 5000)
            
            db
                .collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => setRoomName(snapshot.data().name))

            db
                .collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => 
                    setMessages(
                        snapshot
                            .docs
                            .map( doc => doc.data()
                        )
                    ))
        }
        
    }, [roomId])

    // Here, We send message
    function sendMessage(e) {
        e.preventDefault()

        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                message: input,

                // this comes from google authentication
                name: user.displayName,

                // This will get the servers timestamp
                timestamp: new Date()
            })

        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/asd${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>
                        Last seen{' '}  
                        { new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()
                         }
                        </p>
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
                {messages.map(message => (
                    <p 
                        className={
                            `chat__message  ${
                                message.name === user.displayName && 'chat__reciever'}`}
                    >

                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        { new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString() }
                    </span>
                    </p>
                )) }
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
