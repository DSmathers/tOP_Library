import React from 'react'

const BookCard = () => {
    let bookList = JSON.parse(localStorage.getItem("bookList"))
    if(null === bookList){
        bookList = []
    }

    const handleDelete = (e) => {
        let tempArr = [];
        bookList.map((book => {
            if(book.key != e.target.value)  {
               tempArr.push(book)
            }
        }))
        localStorage.setItem('bookList', JSON.stringify(tempArr));
        window.location.reload()
    }

    const handleStatusChange = (e) => {
        let val = e.target.value
        let tempArr = [];
        bookList.map((book => {
            if(book.key == val) {
                if(book.status == 'Unread'){
                    book.status = 'Read'
                }
                else{book.status = 'Unread'}
                tempArr.push(book)
            }
            else{tempArr.push(book)}
        }))
        localStorage.setItem('bookList', JSON.stringify(tempArr));
        window.location.reload()
        console.log(tempArr);
    }
    return (
        <>
            {bookList.map((book) =>    {
                let key = book.key ;
                let title = book.title;
                let author = book.author;
                let status = book.status;
                let notStatus = (status) => {
                    if(status === "Unread"){return "Read"}
                    else return "Unread"
                }
                return (
                    <div className="book_card" key={key} id={key}>
                        <p className="book_card_title">{title}</p>
                        <p className="book_card_author">By: {author}</p>
                        <p className="book_card_status">{status}</p>
                        <div className="book_card_btns">
                        <button onClick={handleStatusChange} value={key} className="change_status_btn">Mark {notStatus(status)}</button>
                        <button onClick={handleDelete} value={key} className="remove_book_btn">Remove</button>
                        </div> 
                    </div>
                )
            })}
        </>
    )
}

export default BookCard
