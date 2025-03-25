import React from 'react'

function Leetcode() {
  return (
    <>
      <div className='bg-zinc-800'>
        <nav className='flex gap-6 justify-between text-white items-center p-4 shadow-md'>
        <div className="flex items-center gap-2">
             <img src='' alt='logo' className='w-8 h-8'/>
          </div>
          <div>
            <ul className='flex gap-9 hover:dark text-lg'>
              <li className='hover:text-gray-300 cursor-pointer'>UpComing Contests</li>
              <li className='hover:text-gray-300 cursor-pointer'>Past Contests</li>
              <li className='hover:text-gray-300 cursor-pointer'>LeaderBoard</li>
            </ul>
          </div>
        </nav>

        <h1 className="text-2xl font-semibold mb-4 text-white m-8">Upcoming Contests</h1>
      <div className=" flex gap-9 p-6 m-10">
          <div className=" bg-gray-700 p-4 hover:-translate-y-4 rounded-lg shadow-md text-black w-80 h-80">
            <p className="text-lg text-black">Contest Name: Leetcode Round #XYZ</p>
            <p className="text-black">Time: 18:30 UTC, March 25, 2025</p>
          </div>

          <div className=" bg-gray-700 p-4 rounded-lg shadow-md text-black w-80 h-80 hover:-translate-y-4">
            <p className="text-lg text-black">Contest Name: Leetcode Round #XYZ</p>
            <p className="text-black">Time: 18:30 UTC, March 25, 2025</p>
          </div>

          <div className=" bg-gray-700 p-4 rounded-lg shadow-md text-black w-80 h-80 hover:-translate-y-4">
            <p className="text-lg text-black">Contest Name: Leetcode Round #XYZ</p>
            <p className="text-black">Time: 18:30 UTC, March 25, 2025</p>
          </div>

          <div className=" bg-gray-700 p-4 rounded-lg shadow-md text-black w-80 h-80 hover:-translate-y-4">
            <p className="text-lg text-black">Contest Name: Leetcode Round #XYZ</p>
            <p className="text-black">Time: 18:30 UTC, March 25, 2025</p>
          </div>
        </div>

        <h1 className="text-2xl font-semibold mt-6 mb-4 text-white m-8">Past Contests</h1>
        <div className="flex gap-11 p-6 m-10">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md w-80 h-80 hover:-translate-y-4">
            <p className="text-lg">Contest Name: Leetcode Round #ABC</p>
            <p className="text-black">Time: 18:30 UTC, March 10, 2025</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg shadow-md w-80 h-80 hover:-translate-y-4">
            <p className="text-lg">Contest Name: Leetcode Round #ABC</p>
            <p className="text-black">Time: 18:30 UTC, March 10, 2025</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg shadow-md w-80 h-80 hover:-translate-y-4">
            <p className="text-lg">Contest Name: Leeetcode Round #ABC</p>
            <p className="text-black">Time: 18:30 UTC, March 10, 2025</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg shadow-md w-80 h-80 hover:-translate-y-4">
            <p className="text-lg">Contest Name: Leetcode Round #ABC</p>
            <p className="text-black">Time: 18:30 UTC, March 10, 2025</p>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Leetcode