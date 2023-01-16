import { useState,createElement, useEffect } from 'react'
import { GrMail } from "react-icons/gr";


function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const launchDate = new Date("Jan 1, 2024 00:00:00").getTime();

  useEffect(() => {
    let intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      if (distance < 0) {
        clearInterval(intervalId);
      } else {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [launchDate]);

 return (
  <>
  {/* <Navbar /> */}
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center justify-center">
      <div className="pt-10 relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">

        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
        <h1 className="name  text-dark_primary mb-24">
            Coming Soon
          </h1>
          
          
        <div className="text-center">
          <h6 className="text-lg text-orange-700">We're working hard to bring you something amazing.</h6>
          <div className="mt-8">
            <p id="countdown"></p>
            <form>
              <h4 className="block text-bg_light_primary font-medium mb-2">
                Notify me when it's ready:
              </h4>
              <div className="align-middle justify-center flex w-full  text-center">
                <div className="relative flex items-center">
                  <input id="5" type="text" placeholder='Email' className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-10 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-slate-100 focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg" />
                  <span className="material-symbols-outlined absolute right-2 text-3xl transition-all duration-200 ease-in-out group-focus-within:text-blue-400">{createElement(GrMail)}</span>
                  
                </div>
                <button type="submit" className="bg-yellow-300 hover:bg-blue-600 font-medium py-2 px-4 rounded-lg mt-0 text-xl mx-2 text-black">Notify Me</button>
              </div>

              
            </form>
          </div>
      </div>
          
        </div>

        <div className="">
        <div className='my-20 md:mx-24 items-center justify-center'>
          <div className='md:text-6xl text-xl text-center text-bg_light_primary'>
          <div className='flex flex-wrap'>
          <div className='w-auto rounded-lg bg-gradient-to-r from-green-500 to-blue-400  text-black p-2 mx-2'>
              {countdown.days}D
          </div>
          <div className='w-auto  rounded-lg bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white p-2 mx-2'>
          {countdown.hours}H
          </div>
          <div className='w-auto rounded-lg bg-gradient-to-r from-green-500 to-blue-400 text-black p-2 mx-2'>
          {countdown.minutes}M
          </div>
          <div className='w-auto rounded-lg bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white p-2 mx-2'>
              {countdown.seconds}S
          </div>
          </div>
          </div>
        </div>
        
        </div>

      </div>    
  </div>
  </>
 )
}

export default App
