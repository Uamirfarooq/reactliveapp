
import './App.css';
import  Navbar  from "./compent/navbar";
import  TextForm  from "./compent/TextForm";


function App() {

  return (
    
    <>
    <Navbar name="My Todo List" searchbar={true}/>
    <TextForm heading="there are some changes" />
    </>
    
  );
  
}


export default App;
