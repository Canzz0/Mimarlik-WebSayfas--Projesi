import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import ProjectPage from './pages/project';

function AppComponent (){
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' >  Burada navbar için aşağıdaki route elementlerini layout componentinde kullanılması için iç içe yazdık 
        <Route index element={<HomePage/>}></Route>
        <Route  path='home' element={<HomePage/>}></Route>
        <Route  path='contact' element={<ContactPage/>}></Route>
        <Route  path='projects' element={<ProjectPage/>}></Route>
      </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppComponent />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
