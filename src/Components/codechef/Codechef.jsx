import React from 'react'
import {useState, useEffect} from 'react';

function Codechef() {

   const[loading, setLoading] = useState(true);
  const[loadingpast, setLoadingPast]=useState(true);
  const[contest, setContest] = useState([]);
  const[pastcontest, setPastContest] = useState([]);

  useEffect (()=>{
       const fetchApi = async ()=>{
          try{
            // fetch the API  and convert to json format
            const data= await axios.get("https://kontests.net/api/v1/code_chef")

            console.log(data);
           
            // filter the upcoming and past contest from data 
//             if(data.data.status === 'OK'){
//                 const upcoming = data.data.result.filter((res) => res.phase==='BEFORE')

//               console.log(upcoming);

//               const up_coming=upcoming.map((contest) =>({
//                 id: contest.id,
//                 name:contest.name,
//                 time: new Date(contest.startTimeSeconds * 1000).toUTCString(),
//                 duration: contest.durationSeconds/3600,
//               }));

//               console.log(up_coming)

//               setContest((up_coming).reverse());
//             }
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

// useEffect(()  =>{

//       const fet= async() =>{
//      try{
//           const data= await axios.get("https://kontests.net/api/v1/code_chef");
//           if(data.data.status==='OK'){
//             const pastcontest= data.data.result.filter((contest) => contest.phase==='FINISHED')
//             const past_contest= pastcontest.map((contest) =>({
//               id: contest.id,
//               name:contest.name,
//               time: new Date(contest.startTimeSeconds * 1000).toUTCString(),
//               duration: contest.durationSeconds/3600,
//             }) )
//             setPastContest(past_contest);
//           }

//      }
//      catch(error){
//         console.log("Error in fetChing the API")
//      }
//      finally{
//        setLoadingPast(false)
//      }
    
// }
//     fet();
//  },[])


  return (
    <div>codechef</div>
  )
}

export default Codechef