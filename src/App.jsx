import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  //outler handles conditional swapping between pages.
  return (
    <div className=' bg-black'>
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
