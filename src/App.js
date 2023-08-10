import Header from './view/pages/common/header';
import Blog from './view/pages/blog/index';
import Shop from './view/pages/shop';
import Instagram from './view/pages/instagram/index';
import Footer from './view/pages/common/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Blog/>
      <Shop/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;