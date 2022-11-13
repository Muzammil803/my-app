import './App.css';
import Hello from './components/hello/helloworld'
import Obj from './components/object/object'
import Dataval from './components/data/dataparent'
import Listval from './components/list/listparent'
import Complexval from './components/complex/complexparent'
import ApiPostVal from './components/api-data/api-posts/api-post-parent'
import UserDataVal from './components/api-data/api-users/api-user-parent'

function App() {
  return (
   <div>
     <Hello/>
    <Obj/>
    <Dataval/>
    <h2>List value</h2>
    <Listval/>
    <h2>complex const value</h2>
    <Complexval/>
    <h2>API data </h2>
    <h3>POST DATA</h3>
    <ApiPostVal/>
    <h3>USERS DATA</h3>
    <UserDataVal/>



    </div>
  );
}

export default App;
