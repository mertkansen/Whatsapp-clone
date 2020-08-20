import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.random())
    }, [])

    const createChat = () => { 
        const roomName = prompt("Please enter name for chat")

        if (roomName) {
            // Do some dt stuff
        } 
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/asd${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
