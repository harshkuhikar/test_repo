import './App.css';
import React,{Suspense,lazy} from 'react';
// import About from './layout/About';
// import Home from './layout/Home';
const Home = lazy(()=>import('./layout/Home'))
const About = lazy(()=>import('./layout/About'))



function App() {
  return (
    <>
     <div className='text-center mt-5'>
            <Home/>
            <Suspense fallback = {<div>LOADING......</div>}>
              <About/>
              
            </Suspense>
      </div>
    </>
  );
}

export default App;
