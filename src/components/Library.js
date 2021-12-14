import React, {useState} from 'react'
import Books from './Books'
import BookCard from './BookCard'

const Library = () => {
    const [books] = useState(Books)
    return (
        <div id="library_page">
            <div id="books_grid">
                <BookCard books={books} />
            </div>
            <div id="library_controls">
                <button id="add_book_button">Add a Book</button>
            </div>
        </div>
    )
}

export default Library
