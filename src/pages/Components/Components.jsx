
import './Components.css'
import Counter from './counter/Counter.jsx'
import Timer from './timer/Timer.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap-icons/font/bootstrap-icons.css'
import Add from './Add/Add.jsx';
import Temperatures from './temper/temper.jsx';
function Components() {
  

  return (
    <div className='Components-container'>
        <div className='App-container'> 
     <div> <h1  className='name'>React Components</h1></div>
   <div className='content'>
   <div className='item1'>
   <Counter value={0}  />
   <Timer /> 
   </div>
   <div  className='item2' > <Add aValue={0} bValue={0} /></div>
    <div className='item3'>  <Temperatures /></div>
   </div>
    <div><h2 className='name'>66016519 นาย พบพร จิตโสภา</h2></div>
    </div>
    </div>
  )
}

export default Components;
