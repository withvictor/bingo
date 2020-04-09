import React from 'react';
import './output.css';


const Demo = () => (
    <div className="text-blue-900 font-sans font-light">
      <nav className="py-4">
        <div
            className="container mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-baseline"
        >
          <div className="rounded bg-gray-300" style={{height:"50px" ,width:'100px'}}></div>

          <ul className="flex text-xl font-medium">
            <li className="mr-4">Home</li>
            <li className="mr-4">About</li>
            <li>Contact</li>
          </ul>

        </div>
      </nav>

      <header className="bg-gray-400 flex justify-center items-center" style={{height:`400px`}}>
        <h1 className="p-6 text-white text-4xl bg-gray-800">Bango</h1>
      </header>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-2">
          <h2 className="text-3xl text-center">About</h2>
          <p className="leading-loose text-center "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur dolorum, exercitationem fugit maiores minima nemo obcaecati perferendis porro quas repudiandae rerum ut veritatis vero vitae. Iste laboriosam nobis similique.</p>
        </div>
      </section>

      <section className="py-10 bg-blue-100">
        <div className="container mx-auto max-w-3xl">
          <div className="px-2">
            <div className="flex flex-wrap -mx-2">

              <div className="w-full sm:w-5/12 px-2 flex justify-center">
                <div className="rounded bg-gray-300 w-4/5 sm:w-full" style={{height:"250px"}}>

                </div>
              </div>

              <div className="w-full sm:w-7/12 px-2 sm:mt-0">
                <h3 className="text-2xl font-medium mb-6">who is danny</h3>
                <p className="leading-normal text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dolorem eum odio quisquam rem sequi voluptatum? Architecto, deleniti eius facere illo molestias natus nesciunt officiis quo ratione suscipit veritatis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl text-center mb-6 font-medium"> 4 things</h2>

          <div className="px-2">
            <div className="flex flex-wrap -mx-2 ">


              <div className="w-full sm:w-3/12 px-2 flex flex-col items-center mt-4 sm:mt-0">
                <div className="rounded bg-gray-300 w-2/3 sm:w-full" style={{height:"150px"}}></div>
                <h3 className="text-center text-xl uppercase font-medium mt-2">Quality</h3>
              </div>

              <div className="w-full sm:w-3/12 px-2 flex flex-col items-center mt-4 sm:mt-0">
                <div className="rounded bg-gray-300 w-2/3 sm:w-full" style={{height:"150px"}}></div>
                <h3 className="text-center text-xl uppercase font-medium mt-2">Quality</h3>
              </div>

              <div className="w-full sm:w-3/12 px-2 flex flex-col items-center mt-4 sm:mt-0">
                <div className="rounded bg-gray-300 w-2/3 sm:w-full" style={{height:"150px"}}></div>
                <h3 className="text-center text-xl uppercase font-medium mt-2">Quality</h3>
              </div>

              <div className="w-full sm:w-3/12 px-2 flex flex-col items-center mt-4 sm:mt-0">
                <div className="rounded bg-gray-300 w-2/3 sm:w-full" style={{height:"150px"}}></div>
                <h3 className="text-center text-xl uppercase font-medium mt-2">Quality</h3>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-purple-700 text-center text-xl text-white font-medium">Design by victor</footer>

    </div>
);

export default Demo;

