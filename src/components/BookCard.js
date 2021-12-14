import React from 'react'

const BookCard = () => {
    let bookList = JSON.parse(localStorage.getItem("bookList"))
    return (
        <>
            {bookList.map((book) =>    {
                let key = book.key ;
                let title = book.title;
                let author = book.author;
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
