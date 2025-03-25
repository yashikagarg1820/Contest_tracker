import React, { useEffect, useState } from "react";
import axios from "axios";

function Codeforces() {


  const[loading, setLoading] = useState(true);
  const[loadingpast, setLoadingPast]=useState(true);
  const[contest, setContest] = useState([]);
  const[pastcontest, setPastContest] = useState([]);

  useEffect (()=>{
       const fetchApi = async ()=>{
          try{
            // fetch the API  and convert to json format
            const data= await axios.get("https://codeforces.com/api/contest.list")

            console.log(data);
           
            // filter the upcoming and past contest from data 
            if(data.data.status === 'OK'){
                const upcoming = data.data.result.filter((res) => res.phase==='BEFORE')

              console.log(upcoming);

              const up_coming=upcoming.map((contest) =>({
                id: contest.id,
                name:contest.name,
                time: new Date(contest.startTimeSeconds * 1000).toUTCString(),
                duration: contest.durationSeconds/3600,
              }));

              console.log(up_coming)

              setContest((up_coming).reverse());
            }
          }
          catch(error){
              console.log("unable to fetch the API")
          }
          finally{
                setLoading(false)
          }
   }

   fetchApi();
},[]);

useEffect(()  =>{

      const fet= async() =>{
     try{
          const data= await axios.get("https://codeforces.com/api/contest.list");
          if(data.data.status==='OK'){
            const pastcontest= data.data.result.filter((contest) => contest.phase==='FINISHED')
            const past_contest= pastcontest.map((contest) =>({
              id: contest.id,
              name:contest.name,
              time: new Date(contest.startTimeSeconds * 1000).toUTCString(),
              duration: contest.durationSeconds/3600,
            }) )
            setPastContest(past_contest);
          }

     }
     catch(error){
        console.log("Error in fetChing the API")
     }
     finally{
       setLoadingPast(false)
     }
    
}
    fet();
},[])

  return (
    <div className="bg-zinc-900 h-full">
      {/* Navbar */}
      <nav className="dark:bg-zinc-800 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <img src="/codeforces_icon.jpg" alt="Codeforces Logo" className="h-8 w-8" />
          {/* <h1 className="text-xl font-bold">Codeforces</h1> */}
        </div>
        <ul className="flex text-lg gap-6">
          <li className="hover:text-gray-300 cursor-pointer">Past Contest</li>
          <li className="hover:text-gray-300 cursor-pointer">Leaderboard</li>
          <li className="hover:text-gray-300 cursor-pointer">upComing Contest</li>
        </ul>
      </nav>
      
      {/* Contest Information */}
      <h1 className="text-2xl font-semibold mb-4 text-white m-8 font-bold ">Upcoming Contests</h1>
      <div className=" flex flex-wrap gap-9 p-6 m-10">
          {loading ? (<h1 className="text-white font-bold text-[52px]">Fetching the data</h1>) : (contest.length===0) ? (<h2> No Upcoming Contest</h2>) : 
            (
              contest.map((contest) =>(
                <div key={contest.id} className="bg-gray-700 w-80 h-50 p-4 hover:-translate-6 gap-9 rounded-lg text-lg text-white shadow-md">
                  <h2 className="font-bold">{contest.name}</h2>
            
                  <p>📅 Start: {contest.time}</p>
                  <p>⏳ Duration: {contest.duration}</p>
                  <a href={`https://codeforces.com/contest/${contest.id}`}
                    target="_blank"
                    
                    className="text-blue-400 underline mt-2 block">
                     View Contest</a>
               </div>

              
               ))
          )}
        
      </div>
        
        <h1 className="text-2xl mb-5  mt-5 font-semibold text-white m-8">Past Contests</h1>
        <div className=" flex flex-wrap gap-9 p-6 m-10">
          {loadingpast ? (<h1 className="text-white font-bold text-[52px]">Fetching the data</h1>) : (contest.length===0) ? (<h2> No past Contest</h2>) : 
            (
              pastcontest.slice(0,10).map((contest) =>(
                <div key={contest.id} className="bg-gray-700 hover:-translate-6 w-80 h-auto p-4  gap-9 rounded-lg text-lg text-white shadow-md">
                  <h2 className="font-bold">{contest.name}</h2>
            
                  <p>📅 Start: {contest.time}</p>
                  <p>⏳ Duration: {contest.duration}</p>
                  <a href={`https://codeforces.com/contest/${contest.id}`}
                    target="_blank"
                    
                    className="text-blue-400 underline mt-2 block">
                     View Contest</a>
               </div>   
               ))
          )}
        
      </div>
      </div>
    
  );
}

export default Codeforces;
