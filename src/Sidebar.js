import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import db from './firebase'

import { useStateValue } from './StateProvider';

import { useParams } from 'react-router-dom';

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';


function Sidebar() {
    const [rooms, setRooms] = useState([])
    const { roomId } = useParams()
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {  // Gets snapshot from rooms collection from db
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
        )})

        return () => {
            unsubscribe() // With this, we cleaned it up when we finished using db
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
