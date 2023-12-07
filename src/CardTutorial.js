import React, { useEffect, useState } from "react";

import axios from "axios";
import ResponseComponent from "./responseComponent";
// function CardTutorial() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const response = 
//     axios.get("https://jsonplaceholder.typicode.com/todos/1")
//       .then(async (res) => {
//         await res.data;
        
//       });
      
//         console.log(response);
    
//   },[]);
//   console.log(data);
//   return (
//     <>
//     <div>
//       {data}</div></>
//   )
// }
// export default CardTutorial;
const CardTutorial = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        // Handle the successful response here
        console.log('Data:', response.data);
        const AllData = (response.data);
      const userId = AllData.title
        setData(userId);
      } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once (on mount)

  return (
    <div>
Ttile:{data}
    </div>
  );
};

export default CardTutorial;
