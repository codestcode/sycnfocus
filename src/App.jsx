import React, { useState } from 'react';
import Sidebar from 'D:/habeba/habeba/new work of DOM/dashbor--/components/NavBar.jsx';
import Items from 'D:/habeba/habeba/new work of DOM/dashbor--/components/items.jsx';
import StudyTracker from 'D:/habeba/habeba/new work of DOM/dashbor--/modules/StudyTracker.jsx';
import HealthTracker from 'D:/habeba/habeba/new work of DOM/dashbor--/modules/HealthTracker.jsx';
import MoodTracker from 'D:/habeba/habeba/new work of DOM/dashbor--/modules/MoodTracker.jsx';
import ExpenseTracker from 'D:/habeba/habeba/new work of DOM/dashbor--/modules/ExpenseTracker.jsx';
import { Routes, Route } from 'react-router-dom';
import book from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/book.svg";
import health from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/health.svg";
import moodd from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/moodd.svg";
import money from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/money.svg";
import { useLocalStorage } from 'usehooks-ts';
import Calender from 'D:/habeba/habeba/new work of DOM/dashbor--/components/calender.jsx';
import PureComponent from 'D:/habeba/habeba/new work of DOM/dashbor--/components/barchart.jsx';
import Dotchart from 'D:/habeba/habeba/new work of DOM/dashbor--/components/dotchart.jsx';
import theimg from 'D:/habeba/habeba/new work of DOM/dashbor--/src/assets/Social Dashboard-amico.svg';
import Fullcal from 'D:/habeba/habeba/new work of DOM/dashbor--/components/fullcalender.jsx';
import Table from 'D:/habeba/habeba/new work of DOM/dashbor--/components/table.jsx';
import Areachart from 'D:/habeba/habeba/new work of DOM/dashbor--/components/areachart.jsx';
import Search from 'D:/habeba/habeba/new work of DOM/dashbor--/components/Searchbutton.jsx';
import bot from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/bot.svg";
import arrow from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/arrow.svg";

function App() {
  const [studyData, setStudyData] = useLocalStorage('studyData', { duration: 0 });
          //* REMEBER TO RENDER THE COMPONENTS INSIDE THEIR OWN ROUTESSSSS  متسيبهاش عايمة بالله عليكي ام قلة التركيز

  return (
    <>
    

      <div className="min-h-screen flex flex-col backcool">
        <Sidebar />
        <div className="mt-[30px] ml-[300px]">

          <Routes>
          
            <Route
              path="/"
              element={
                <div>
                  {/* Dashboard content */}
                  <div className="flex flex-wrap gap-6 ml-5">
                    <Items
                      width="w-[283px]"
                      svg={book}
                      pers="10%"
                      numberoftotal={`${studyData.duration} hrs`}
                      nameofitem="Study Hours"
                    />
                    <Items
                      width="w-[283px]"
                      svg={health}
                      pers="10%"
                      numberoftotal="19 Days Healthy"
                      nameofitem="Healthy Days"
                    />
                    <Items
                      width="w-[283px]"
                      svg={moodd}
                      pers="10%"
                      numberoftotal="Stable Mood"
                      nameofitem="Mood Status"
                    />
                    <Items
                      width="w-[283px]"
                      svg={money}
                      pers="10%"
                      numberoftotal="268.6 $"
                      nameofitem="Spending"
                    />
                  </div>
                  {/* Move all dashboard-specific components here */}
                 
                  <Calender />



                  <div className="translate-y-[-56px] translate-x-[-320px]
                   p-5">
                    <div className="barchart">
                      <PureComponent />
                    </div>
                    <div className="barchart ">
                      <Dotchart />
                    </div>

                    <div className="w-[250px] h-[200px] translate-x-[770px] translate-y-[-1020px]">
                      <img src={theimg} alt="" />
                    </div>

                    <div className="ml-5">
                      <Fullcal />
                    </div>
                    <Table />
                  </div>
                  <div className="chartofA ml-3 w-[1200px] h-[400px] translate-y-[-1700px]">
                    <Areachart />
                  </div> 

                  <div className="flex justify-center items-center gap-4 p-4 translate-x-[10px] translate-y-[-1700px] ">
      
                
  
       {/* Image 2: Bot */}
       <div className="
bg-[radial-gradient(circle_at_center,_rgba(207,48,170,0.4)_0%,_transparent_70%)] 
       w-[300px] h-[400px]">
        <img src={bot} alt="Bot" className="w-full h-full object-contain" />
      </div>
      
{/* Image 1: Arrow */}
      <div className="

      w-[250px] h-[200px] scale-y-[-1] rotate-320 translate-y-[-100px] translate-x-[-30px]">
        <img src={arrow} alt="Arrow" className="w-full h-full object-contain" />
      </div>
      
      {/* Search Component */}
      <div className="flex items-center translate-y-[-100px] ">
        <Search />
      </div>
      
     
     
    </div>
                </div>
              }
            />
            <Route path="/StudyTracker" element={<StudyTracker setStudyData={setStudyData} />} />
            <Route path="/HealthTracker" element={<HealthTracker />} />
            <Route path="/MoodTracker" element={<MoodTracker />} />
            <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;