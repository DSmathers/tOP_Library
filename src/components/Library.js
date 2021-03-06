import React from 'react'
import AddBookModal from './AddBookModal'
import BookCard from './BookCard'

const Library = () => {
    const addNewBook = (e) => {
        const newBookForm = document.getElementById('add_book_modal');
        newBookForm.style.display = 'block'
    } 
    return (
        <div id="library_page">
            <div id="library_controls">
                <button id="add_book_button" onClick={addNewBook}>Add a Book</button>
            </div>
            <div id="books_grid">
                <BookCard/>
            </div>      
            <AddBookModal />
        </div>
    )
}

export default Library
