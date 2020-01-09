import React, { useState, createContext } from 'react'
export const BookContext = createContext();

export const BookContextProvider = (props) => {
    const use
    return (
        <BookContext.Provider>
            {props.children}
        </BookContext.Provider>
    )
}
