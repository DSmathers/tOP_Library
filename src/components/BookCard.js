import React from 'react'

const BookCard = () => {
    let bookList = JSON.parse(localStorage.getItem("bookList"))

    const handleEdit = (e) => {
        let tempArr = [];
        bookList.map((book => {
            if(book.key != e.target.value)  {
               tempArr.push(book)
            }
        }))
        localStorage.setItem('bookList', JSON.stringify(tempArr));
        window.location.reload()
    }

    return (
        <>
            {bookList.map((book) =>    {
                let key = book.key ;
                let title = book.title;
                let author = book.author;
                let status = book.status;
                return (
                    <div className="book_card" key={key} id={key}>
                        <p id="book_card_title">{title}</p>
                        <p id="book_card_author">By: {author}</p> 
                        <button onClick={handleEdit} value={key}>A Button</button>
                    </div>
                )
            })}
        </>
    )
}

export default BookCard
