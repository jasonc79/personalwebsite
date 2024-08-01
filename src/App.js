import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import TodoList from './components/pages/todolist/Todolist';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path ='/' exact component= {Home} />
        <Route path = '/contacts' exact component = {Contact}/>
        <Route path = '/todolist' exact component = {TodoList}/>
      </Switch>
      <Footer/>
    </Router>
    
    </>
      
  );
}

export default App;
