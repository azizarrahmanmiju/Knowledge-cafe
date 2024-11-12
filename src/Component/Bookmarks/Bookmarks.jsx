import PropTypes from "prop-types";

PropTypes
const Bookmarks = ({ bookmarks, marksastime }) => {
    return (
        <div className="  p-4 rounded-2xl bg-slate-200 shadow-xl">

            <div className="p-4 text-lg font-bold  bg-purple-100 border-purple-300 border-2 rounded-md mb-4" >spend time on reading: {marksastime}</div>
            <h1 className="text-2xl font-bold text-center">Bookmarked: {bookmarks.length}</h1>

            {
                bookmarks.map((bookmark, index) => {
                    console.log(bookmark)
                    return <div key={index} className="p-2 bg-white border-red-50 m-2 rounded-lg text-sm font-semibold">
                        <h3>{bookmark.postTitle}</h3>
                    </div>
                })
            }

        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    marksastime: PropTypes.string
}

export default Bookmarks;