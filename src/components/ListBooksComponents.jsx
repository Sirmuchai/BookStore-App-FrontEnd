import React, { Component } from 'react';
import BookService from '../services/BookService';

class ListBooksComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state here
      books: []
    };
  }

  componentDidMount(){
    BookService.getbooks().then((res) =>{
      this.setState({books: res.data});

    });
  }

  render() {
    return (
      <div>
        
        <div>
            <h2 className='text-center'> Books List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Book Title</th>
                            <th>ISBN No.</th>
                            <th>Category</th>   
                            <th>Author</th>
                            <th>Publisher</th> 
                            <th>isPublished</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.isbn}</td>   
                                    <td>{book.category}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.author}</td>
                                    <td>{book.published}</td>   
                                                           
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    );
  }
}

export default ListBooksComponent;
