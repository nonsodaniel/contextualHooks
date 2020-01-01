import React, { useState, useEffect } from 'react'
import { NewSongForm } from './NewSongForm'

export const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "joro", id: Math.random() },
        { title: "Africa Giant", id: Math.random() },
        { title: "Risky", id: Math.random() },
        { title: "Vibration", id: Math.random() },

    ])
    const addSong = (title) => {
        setSongs([...songs, { title, id: Math.random() }])
    }
    useEffect(() => {
        console.log("This acts like component life cycle")
    })
    return (
        <div className="song-list">
            <ul>
                {
                    songs && songs.map(song => {
                        return (<li key={song.id}>{song.title}</li>)
                    })
                }
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    )
}
