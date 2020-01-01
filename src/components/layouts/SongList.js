import React, { useState } from 'react'

export const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "joro", id: Math.random() },
        { title: "Africa Giant", id: Math.random() },
        { title: "Risky", id: Math.random() },
        { title: "Vibration", id: Math.random() },

    ])
    return (
        <div className="song-list">
            <ul>
                {
                    songs && songs.map(song => {
                        return (<li key={song.id}>{song.title}</li>)
                    })
                }
            </ul>
        </div>
    )
}
