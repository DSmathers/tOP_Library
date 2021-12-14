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
        </div>
    )
}

export default Library
