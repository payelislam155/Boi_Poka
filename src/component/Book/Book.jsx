import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    image,
    bookId,
    bookName,
    author,
    tags,
    category,
    rating,
    totalPages,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-400 py-8 rounded-2xl">
          <img className="h-[166px]" src={image} alt="bookName" />
        </figure>
        <div className="card-body">
          <div className="flex justify-start gap-4 mb-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-gray-200 text-green-600"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed mb-2 mt-2"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div className="badge badge-outline">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
