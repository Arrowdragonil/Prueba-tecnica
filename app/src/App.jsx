/* import { useState } from 'react'
import reactLogo from './assets/react.svg' */
import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <>
      <nav className="barra">
        <label className="logo">DEMO Streaming</label>
        <ul>
          <li><a href="#">log in</a></li>
          <li><button className="login"><a href="#" >Start yout free trial</a></button></li>
        </ul>
      </nav>
        <header className="header"><h1 className="popular">Popular Titles</h1></header>
        
        <Nav />
        {/* <h3 className="popusemo">popular series</h3>
        <h3 className="popusemo">popular movies</h3> */}
        <main>
          <Outlet />
        </main>
        <footer><div className="home">
    <h2><NavLink to="home"><h3>home</h3></NavLink></h2>
    </div></footer>
      </>
    </div>
  );
}

export default App;