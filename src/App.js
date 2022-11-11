import './App.css';
import Main from './components/Main';
import Update from './components/Update';
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from 'react-router-dom'
import { TaskContextProvider } from './context/taskContext';
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
import { ToolContextProvider } from './context/tools';
function App() {
  return (
 <div>

  <Router>   
    <ToolContextProvider>
    <div className="grid">
     
      <div className="grid-left">
  
 <Toolbar />
 </div>
 <div className="grid-aside">


     <TaskContextProvider>
   <Routes>
    <Route path='/' element={<Main />}/>
    <Route path='/edit' element={<Update />} />
    
   </Routes>
  </TaskContextProvider>
   </div>  
  </div> 
<Footer />
</ToolContextProvider>
  </Router>
 
 </div>
  );
}

export default App;
