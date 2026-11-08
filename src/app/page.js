
import Hero from "./components/Hero";
import LibrarySection from "./components/LibrarySection";
import { getAllWorkouts } from "./utils/api";


const Home = async () => {
  const data = await getAllWorkouts();
  const Workout = data;

  return (
    <div>
      <div className="bg-black p-17"><Hero/></div>
      <div>
        <LibrarySection Workout={Workout}/></div>
      
  
    </div>
  );
};

export default Home;
