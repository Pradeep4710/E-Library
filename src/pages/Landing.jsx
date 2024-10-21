import { Link } from "react-router-dom";
import Card from "../components/Card";
function Landing() {
  return (
    <div className="flex flex-col">
      <div className=" flex md:flex-row flex-col space-y-5">
        <div className="md:w-1/2 w-full flex flex-col space-y-10 justify-center pl-5">
          <h2 className="text-4xl mx-20 font-serif font-bold">
            <u>Welcome to E-Library</u>
          </h2>
          <p className="text-xl mx-20">
          E-Library :- your go-to platform for discovering, managing, and adding books to your collection. Effortlessly search for books by title or author, and explore a wide selection of literature across multiple languages. Enhance your reading experience with our user-friendly interface, designed for book lovers.
          </p>
          <div className="flex text-xl font-serif font-semibold space-x-5 mx-20">
            <Link to="/browse/english">
              <button className="p-3 bg-orange-600 rounded-lg shadow-lg text-white">
                English
              </button>
            </Link>
            <Link to="/browse/french">
              <button className="p-3 bg-orange-600 rounded-lg shadow-lg text-white">
                French
              </button>
            </Link>
            <Link to="/browse/sanskrit">
              <button className="p-3 bg-orange-600 rounded-lg shadow-lg text-white">
                Sanskrit
              </button>
            </Link>
            <Link to="/browse/italian">
              <button className="p-3 bg-orange-600 rounded-lg shadow-lg text-white">
                Italian
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 w-full h-[80%] mx-40 flex justify-center items-center order-first">
        <img 
        className="h-[80%]"
        src="https://i.imgur.com/m3qDtDK.png" 
        alt="Image Description"/>

        </div>
      </div>
      <div className="flex flex-col m-2">
        <div className="flex justify-center items-center">
          <h4 className="text-3xl text-orange-500 font-semibold font-sans">
            <u>Popular Books</u>
          </h4>
        </div>
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 md:grid-cols-4">
          <Card
            book={{
              "author": "K\u0101lid\u0101sa",
              "country": "India",
              "imageLink": "images/the-recognition-of-shakuntala.jpg",
              "language": "Sanskrit",
              "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
              "pages": 147,
              "title": "The recognition of Shakuntala",
              "year": 150
            }}
          />
          <Card
            book={{
              "author": "Valmiki",
              "country": "India",
              "imageLink": "images/ramayana.jpg",
              "language": "Sanskrit",
              "link": "https://en.wikipedia.org/wiki/Ramayana\n",
              "pages": 152,
              "title": "Ramayana",
              "year": -450
            }}
          />
          <Card
            book={{
              "author": "Jonathan Swift",
              "country": "Ireland",
              "imageLink": "images/gullivers-travels.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
              "pages": 178,
              "title": "Gulliver's Travels",
              "year": 1726
            }}
          />
          <Card
            book={{
              author: "Emily Bront\u00eb",
              country: "United Kingdom",
              imageLink: "images/wuthering-heights.jpg",
              language: "English",
              link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
              pages: 342,
              title: "Wuthering Heights",
              year: 1847,
            }}
          />
          <Card
            book={{
              author: "Geoffrey Chaucer",
              country: "England",
              imageLink: "images/the-canterbury-tales.jpg",
              language: "English",
              link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
              pages: 544,
              title: "The Canterbury Tales",
              year: 1450,
            }}
          />
          <Card
            book={{
              "author": "William Shakespeare",
              "country": "England",
              "imageLink": "images/hamlet.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/Hamlet\n",
              "pages": 432,
              "title": "Hamlet",
              "year": 1603
            }}
          />
          <Card
            book={{
              "author": "William Shakespeare",
              "country": "England",
              "imageLink": "images/king-lear.jpg",
              "language": "English",
              "link": "https://en.wikipedia.org/wiki/King_Lear\n",
              "pages": 384,
              "title": "King Lear",
              "year": 1608
            }}
          />
          <Card
            book={{
              "author": "Leo Tolstoy",
              "country": "Russia",
              "imageLink": "images/war-and-peace.jpg",
              "language": "Russian",
              "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
              "pages": 1296,
              "title": "War and Peace",
              "year": 1867
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;