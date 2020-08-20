import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';
import db from './firebase'

const SidebarChat = ({ id, name, addNewChat }) => {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.random())
    }, [])

    const createChat = () => { 
        const roomName = prompt("Please enter name for chat room")

        if (roomName) {
            // Do some dt stuff
            db.collection('rooms').add({
                name: roomName
            })
        } 
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/asd${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div 
            onClick={createChat} 
            className="sidebarChat"
        >
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
