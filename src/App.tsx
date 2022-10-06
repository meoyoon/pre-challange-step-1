import '@/App.css';
import About from '@/components/About';
import Root from '@/components/Root';
import Route from './components/core/Route';
import Router from './components/core/Router';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
      </Router>
    </div>
  );
}

export default App;
