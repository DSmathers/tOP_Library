import React from 'react'

const AddBookModal = () => {
    let bookList = JSON.parse(localStorage.getItem('bookList'))
    function Book(key, title, author, status){
        this.key = key;
        this.title = title;
        this.author = author;
        this.status = status;
    }

    const handleClose = (e) => {
        let modal = document.getElementById('add_book_modal');
        modal.style.display = 'none'
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        let updatedList = [];
        bookList.map((book => {
            return updatedList.push(book);
        }))
        let key = Math.floor(Math.random() * 1000)
        let title =  document.getElementById('new_title').value;
        let author=  document.getElementById('new_author').value;
        let status = document.getElementById('new_status').value;
        let bookToAdd = new Book(key, title, author, status);
        updatedList.push(bookToAdd);
        localStorage.setItem('bookList', JSON.stringify(updatedList));
        

        
        
    }
    
    return (
        <div id="add_book_modal">
            <div id="modal_content">
                <form>
                    <span id="modal_close_btn" onClick={handleClose}>&times;</span>
                    <h3>New Book Information</h3>
                    <label>Title: </label>
                    <input type="text" id="new_title"></input>
                    <label>Author: </label>
                    <input type="text" id="new_author"></input>
                    <label>Status: </label>
                    <select id="new_status">
                        <option value="0">Not Started</option>
                        <option value="1">Started</option>
                        <option value="2">Finished</option>
                    </select>
                    <div id="modalButtons">
                        <button type="submit" className='modalBtn' id="modalSubmit" onClick={handleSubmit}> Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBookModal
