import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Articles from './Articles.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
        <Route path='/articles'>
          <Articles />
        </Route>
        <Articles />
        <Footer />
      </Switch>
    </Router>
  )
}

export default App
