import './App.css';
import {apiUrl,filterData} from './data';
import Cards from './components/Cards';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import {useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

const App = () => {
  const [loading,setLoading] = useState(true);
  const [courses,setCourses] = useState("");
  const [category,setcategory] = useState(filterData[0].title);

  const fetchData = async() => {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      // save data in courses
      setCourses(output.data);
      //console.log(output);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[])
  
  console.log(courses);
  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      
      <Navbar></Navbar>

      <Filter filterData = {filterData} category = {category} setcategory = {setcategory}></Filter>
      <div  className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? <Spinner/> : <Cards courses={courses} category={category}></Cards>
        }
      </div>
      
    </div>
  );
}

export default App;
