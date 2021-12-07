import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>Wisnu Adi Wardhana</header>
      <body className="bg-green-300 w-50 h-100">
        <nav className="flex items-center justify-between flex-wrap bg-gray-600 p-6" />
        <div className="container flex justify-center">
          <p>Welcome to my portofolio webpage</p>
          <button className="bg-green-700 text-center text-white font-bold py-2 px-10 rounded-md hover:bg-green-500 transition">Start</button>
          <button className="btn btn-blue" >Ask me something</button>
          <div className="bg-gray-100 border-0 text-red-600 px-6 py-5 rounded relative my-5" role="alert" >
            <strong className="font-bold">
              Alert !
              
            </strong>
            <span className="block sm:inline" >Please update your password</span>
            {/* means in sm screen its inline */}
          </div>
        </div>
        <div className="max-w-lg mx-auto flex p-6 bg-white rounded-md shadow-xl ">
        <h4 className="text-xl text-gray-900">iam a junior programmer</h4>
        </div>

        <div>
          
        </div>

      </body>
    </div>
  );
}

export default App;
