import { useLoaderData, useParams } from "react-router-dom";
import { AddstoreToReadList } from "../../utility/AddToDB";


const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    
    const { bookId: currentbookId, image} = book;

    const handleMarkAsRead = (id) => {
         AddstoreToReadList(id);
    }
    return (
      <div>
        <h2>Book Details{bookId}</h2>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex lg:grid-cols-2 gap-6">
            <div>
                <img src={image} alt="" /> 
            </div>
            <div className="my-12">
              <h1 className="text-2xl font-bold mb-4">{book.bookName}</h1>
              <p>By: {book.author}</p>
              <div className="border-t-2 border-dashed mb-2 mt-2"></div>
              <h4>{book.category}</h4>
              <div className="border-t-2 border-dashed mb-2 mt-2"></div>
              <p className="mb-4">{book.review}</p>
              {/* {book.map((tags, index) => (
                <button
                  key={index}
                  className="btn btn-xs bg-gray-200 text-green-600"
                >
                  {tags}
                </button>
              ))} */}

              <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark As Read</button>
              <button className="btn btn-accent">Add To WishList</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;