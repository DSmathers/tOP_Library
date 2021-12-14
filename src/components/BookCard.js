import React from 'react'

const BookCard = ({books}) => {
    return (
        <>
            {books.map((book) =>    {
                const {key, title, author} = book;
                return (
                    <div className="book_card" key={key}>
                        <p id="book_card_title">{title}</p>
                        <p id="book_card_author">By: {author}</p>

                      
                    </div>
                )
            })}
        </>
    )
}

export default BookCard
