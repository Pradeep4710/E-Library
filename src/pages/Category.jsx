import { useParams } from "react-router-dom"
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Category() {
    const { category } = useParams();
    const books = useSelector(state => state.books.items);
    const filteredBooks = books.filter((book) => book.language.toLowerCase() === category.toLowerCase());
    if(filteredBooks.length === 0) {
        return <h1 className="text-3xl">No relavent data found...</h1>
    }
  return (
    <div className="flex flex-col items-center">
        <h1 className="capitalize text-3xl font-mono font-semibold">{category} Books</h1>
        <div className="flex flex-wrap">
        {filteredBooks.map((book) => (
            <Card key={book.title} book={book} />
        ))}

        </div>
    </div>
  )
}

export default Category