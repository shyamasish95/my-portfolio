import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import Projects from './components/Projects';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about'/>
      <Route component={SinglePost} path='/post/:slug'/>
      <Route component={Post} path='/post'/>
      <Route component={Projects} path='/projects'/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
