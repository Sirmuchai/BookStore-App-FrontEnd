import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8000/api/v1/books";

class  BookService {
    getbooks(){
        return axios.get(BOOK_API_BASE_URL);
    }
}

export default new BookService();

