import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const[mode, setMode] = useState("light"); // whether dark mode is enabled or not || currently by default the mode is light, which we have set inside useState
  const[toggleText, setToggleText] = useState("dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setToggleText("light mode")
      document.body.style.backgroundColor ='#152248bf'
      showAlert("Dark mode is enabled", "success");
      document.title ="TextUtils - Dark Mode"
    }
    else{
      setMode("light");
      setToggleText("dark mode") 
      document.body.style.backgroundColor ='white'
      showAlert("Light mode is enabled", "success");
      document.title ="TextUtils - Light Mode"
    }
  } 

  const router = createBrowserRouter([
    {
      path:"/textUtils-react",
      element:  <>
      		<Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} toggleText={toggleText}/>  
                <Alert alert={alert}/>
                <div className="container my-3" >
                <TextForm showAlert={showAlert} heading="Write your text below to analyze..." mode={mode}/> 
                </div>  
                </> 
    },
    
    {
      path:"/about",
      element:  <>
      		<Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} toggleText={toggleText}/> 
                <Alert alert={alert}/>
                <div className="container my-3" >
                <About mode={mode}/>   
                </div> 
                </> 
                
    },
  ])
  
  return ( 
   <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" />  */}
    {/* <Navbar/>  */}
     
    <RouterProvider router={router} />
    
  </>
  );
}
export default App;
 
