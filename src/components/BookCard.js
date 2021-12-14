import React from 'react'

const BookCard = ({books}) => {
    return (
        <>
            {books.map((book) =>    {
                const {key, title, author, genre} = book;
                return (
                    <div className="book_card" key={key}>
                        <p>Title: {title}</p>
                        <p>Author: {author}</p>
                        <p>Genre: {genre}</p>
                    </div>
                )
            })}
        </>
    )
}

export default BookCard
