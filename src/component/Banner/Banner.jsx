import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
            <div className="hero bg-base-200 min-h-screen rounded-xl">
              <div className="hero-content flex-col lg:flex-row">
                <div>
                  <h1 className="text-5xl font-bold w-[500px] py-8">Books to freshen up your bookshelf</h1>
                  <button className="btn btn-primary">View The List</button>
                </div>
                  <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
              </div>
            </div>
    );
};

export default Banner;