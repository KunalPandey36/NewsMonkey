
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import New from './components/New';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact  path='/NewsMonkey' element={<div>
            <New key="general" pagesize={8} country="in" category="General"/>
            </div>}/>
        <Route exact  path='/' element={<div>
            <New key="general" pagesize={8} country="in" category="General"/>
            </div>}/>
            
          <Route exact  path='/home' element={<div>
            <New  key="general" pagesize={8} country="in" category="General"/>
            </div>}/>
            
          
          <Route exact  path='/science' element={<div>
            <New key="science" pagesize={8} country="in" category="Science"/>
            </div>}/>
            
          
          <Route exact  path='/buisness' element={<div>
            <New key="buisness" pagesize={8} country="in" category="Business"/>
            </div>}/>
      
          
          <Route exact  path='/sports' element={<div>
            <New key="sports" pagesize={8} country="in" category="Sports"/>
            </div>}/>
            
          
          <Route exact  path='/technology' element={<div>
            <New key="technology" pagesize={8} country="in" category="Technology"/>
            </div>}/>
            
          
          <Route exact  path='/health' element={<div>
            <New key="health" pagesize={8} country="in" category="Health"/>
            </div>}/>
            
          
          <Route exact  path='/entertainment' element={<div>
            <New key="entertainment" pagesize={8} country="in" category="Entertainment"/>
            </div>}/>
            
          
        </Routes>
            
          
        
      </BrowserRouter>
    )
  }
}

