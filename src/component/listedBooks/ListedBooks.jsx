import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getstoreToReadList } from "../../utility/AddToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList,setReadList] = useState([]);
    const [sort, setSort] = useState([]);
    const allbooks = useLoaderData();
    
    useEffect(() => {
        const storedReadList = getstoreToReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allbooks.filter((book) => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    } ,[])

     const handleSort = (sortType) => {
       setSort(sortType);
       if(sortType === 'No found page'){
           const sortedReadList = [...readList].sort(
             (a, b) => a.totalPages - b.totalPages
           );
           setReadList(sortedReadList);
       }
       if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort(
             (a, b) => b.rating - a.rating
           );
           setReadList(sortedReadList);
     };
     }

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {
              sort ? `sort by : ${sort}` : "sort by"
          }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={() => handleSort('No found page')}>
            <a>No found page</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read: {readList.length}</h2>
          <div className="grid grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Whish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
        
};

export default ListedBooks;
