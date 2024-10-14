import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/views/global/Head'
import Main from './components/pages/Main';
import Stat from './components/pages/Stat';


function App() {

  const [ data, setData ] = useState([]);


  return (
   <Router>
     <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main sendData={setData}/>} />
        <Route path='/stats' element={ <Stat StatData={data}/>} />
      </Routes>
    </React.Fragment>
   </Router>
  );
}

export default App;
