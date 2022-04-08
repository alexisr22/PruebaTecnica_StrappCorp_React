import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//import componentes
import Inicio from './components/Inicio';

import ShowT from './components/ShowT';
import ShowS from './components/ShowS';

import CreateT from './components/CreateT';
import CreateS from './components/CreateS';

import EditT from './components/EditT';
import EditS from './components/EditS';




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Inicio/>}/>
         <Route path='/teacher' element={<ShowT/>}/>    
         <Route path='/student' element={<ShowS/>}/>     


         <Route path='/createT' element={<CreateT/>}/>
         <Route path='/createS' element={<CreateS/>}/>

         <Route path='/editT/:id' element={<EditT/>}/>
         <Route path='/editS/:id' element={<EditS/>}/>     




       </Routes> 
      </BrowserRouter>
    </div>

  );
}

export default App;
