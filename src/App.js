import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Router>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contact} />
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
