import React from "react";

const Home = () => {
  return (
    <div className="text-base text-purple-10  h-[600px] w-[740px] translate-x-[320px] translate-y-[-1650px]
    
     rounded-xl  
      bg-white/5 backdrop-blur-sm text-white 
       border-white/10 
        
      shadow-lg shadow-indigo-700/10
    ">
      {/* Table Section */}
      <section className=" flex justify-center items-center py-0 px-0">
        <div className="w-full max-w-6xl ">
          <div className="overflow-x-auto  ">
            <table className="h-[400px] min-w-full border-collapse border rounded-md overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <thead className=" text-purple-100 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                <tr>
                  <th className="border px-6 py-3 text-left font-semibold">Catogorey</th>
                  <th className="border  px-6 py-3 text-left font-semibold">Spendings</th>
                </tr>
              </thead>
              <tbody className="  text-purple-100 font-bold font-poppins text-[19px]">
  {[
    "Shopping",
    "Fast Food",
    "Rent",
    "Clothes",
    "Groceries",
    "Transport",
    "Entertainment",
    "Healthcare",
    "Education",
    "Savings",
    
  ].map((item, index) => (
    <tr
      key={index}
      className="border-0 border-purple-800 hover:bg-purple-800 transition-colors"
    >
      <td className="border-0 border-purple-800 px-6 py-3">{item}</td>
      <td className="border-0 border-purple-800 px-6 py-3">60$</td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default Home;
