
import data from './data';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

const articles = data.map((element, index) => {
  return (
    <Article  
      key={index}
      {...element} 
      />
    )
})



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {articles}
      <Footer />
    </div>
  );
}

export default App;
