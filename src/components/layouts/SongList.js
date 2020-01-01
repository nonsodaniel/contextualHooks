import React, { useState, useEffect } from 'react'
import { NewSongForm } from './NewSongForm'

export const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "joro", id: Math.random() },
        { title: "Africa Giant", id: Math.random() },
        { title: "Risky", id: Math.random() },
        { title: "Vibration", id: Math.random() },

    ])
    const [age, setAge] = useState(20)
    const addSong = (title) => {
        setSongs([...songs, { title, id: Math.random() }])
    }
    const increaseAge = () => {
        setAge(age + 1)
        if (age > 28) {
            alert("Age cannot exceed", age)
            return
        }
    }
    useEffect(() => {
        console.log("This acts like component life cycle")
    }, [songs]) ///only watches and rerenders when song data changes and not when age changes

    useEffect(() => {
        console.log("Changes in age")
    }, [age]) ///only watches and rerenders when age data changes and not when song changes
    return (
        <div className="song-list">
            <ul>
                {
                    songs && songs.map(song => {
                        return (<li key={song.id}>{song.title}</li>)
                    })
                }
            </ul>
            <button className="btn-danger" onClick={increaseAge}>Increase age {age}</button>
            <NewSongForm addSong={addSong} />
        </div>
    )
}
