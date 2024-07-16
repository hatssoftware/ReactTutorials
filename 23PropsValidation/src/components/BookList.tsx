import Book from "./Book";
import books from "../data/data";

const BookList = () => {
    return (
        <div>
            {books.map((book) => {
                return <Book key={book.id} {...book} />
            })}
        </div>
    )
}

export default BookList;
