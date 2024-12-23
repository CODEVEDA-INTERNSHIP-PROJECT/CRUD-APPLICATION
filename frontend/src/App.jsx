// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CreatePostPage from './pages/CreatePostPage';
// import EditPostPage from './pages/EditPostPage';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './styles/App.css';

// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/header" element={<Header/>}/>
//                     <Route path="/create" element={<CreatePostPage />} />
//                     <Route path="/edit/:id" element={<EditPostPage />} />
//                     <Route path="/footer" element={<Footer/>}/>
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                {/* Header displayed on every page */}
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create" element={<CreatePostPage />} />
                        <Route path="/edit/:id" element={<EditPostPage />} />
                    </Routes>
                </main>
                {/* Footer displayed on every page */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
