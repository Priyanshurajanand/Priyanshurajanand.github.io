import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-10 px-3 text-white " >
      <div className=" flex flex-row justify-center text-center mt-8">
        <div className="text-4xl mr-5 text-cyan-600"><ion-icon name="school-outline"></ion-icon></div>
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Education</span>
        </h3>
        
      </div>
      <div className="mt-10 mb-20 w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
          {/* <!-- Stack 1 --> */}
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gray-800 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Bachelor's Degree in Computer Science
              </h1>
              <p className="text-white">
                Indian Institute of Information Technology Manipur
              </p>
              <p className="text-white">(2020 - 2024)</p>
              <p className="text-white"> Overall CPI : 8.07 </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* <!-- Stack 2 --> */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            
            <div className="w-full h-full bg-gray-800 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Intermediate in Science(PCM)
              </h1>
              <p className="text-white">Millia Convent English School, Purnea</p>
              <p className="text-white">(2017 - 2019)</p>
              <p className="text-white">Percentage : 80 %</p>
            </div>
          </div>

          {/* <!-- Stack 3 --> */}
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gray-800 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">Matriculation </h1>
              <p className="text-white">Govind Bhavishya Bharti Shiksha Seva Sadan , Lakhisarai</p>
              <p className="text-white">(2015-2017)</p>
              <p className="text-white">
                CGPA :  10/10
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
