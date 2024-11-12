import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/header'
import PropTypes from 'prop-types'
import Bookmarks from './Component/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [marksastime, setmarksastime] = useState(0)

  const handleBookmark = (blog) => {
    console.log("Bookmark added");
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  }
  const handlereadas = time => {
    const newmarkstime = (marksastime + time);
    setmarksastime(newmarkstime);
    console.log("marks as read: " + marksastime, time)

  }

  return (
    <div className='Container w-full mx-auto'>
      <Header />
      <div className='flex gap-4 m-auto justify-center'>
        <Blogs
          handleBookmark={handleBookmark}
          handlereadas={handlereadas}

        />
        <Bookmarks
          bookmarks={bookmarks}
          marksastime={marksastime}

        ></Bookmarks>

      </div>
    </div>
  );
}

App.propTypes = {
  bookmark: PropTypes.array

}


export default App;
