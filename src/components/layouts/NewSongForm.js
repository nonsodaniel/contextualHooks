import React, { useState } from 'react'


export const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('')
    console.log(title)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("title")
        addSong(title)
        setTitle("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} required placeholder="enter song here" onChange={(e) => setTitle(e.target.value)} />
                <button type="button" onClick={handleSubmit}>Add Song</button>
            </form>
        </div>
    )
}
