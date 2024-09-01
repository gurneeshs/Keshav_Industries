import React, { useState } from 'react';
// No need to import a separate CSS file since we're using Tailwind

const MainScreen = () => {
  return (
    <div className="relative">
      <main className="overflow-hidden">
        <ul className="slider flex space-x-4 overflow-x-scroll scrollbar-hide">
          <li
            className="item min-w-[300px] h-[400px] bg-cover bg-center flex items-center justify-center p-6 text-white"
            style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}
          >
            <div className="content text-center">
              <h2 className="title text-2xl font-bold mb-2">"Lossless Youths"</h2>
              <p className="description mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
            </div>
          </li>
          <li
            className="item min-w-[300px] h-[400px] bg-cover bg-center flex items-center justify-center p-6 text-white"
            style={{ backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')" }}
          >
            <div className="content text-center">
              <h2 className="title text-2xl font-bold mb-2">"Estrange Bond"</h2>
              <p className="description mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
            </div>
          </li>
          <li
            className="item min-w-[300px] h-[400px] bg-cover bg-center flex items-center justify-center p-6 text-white"
            style={{ backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')" }}
          >
            <div className="content text-center">
              <h2 className="title text-2xl font-bold mb-2">"The Gate Keeper"</h2>
              <p className="description mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
            </div>
          </li>
          <li
            className="item min-w-[300px] h-[400px] bg-cover bg-center flex items-center justify-center p-6 text-white"
            style={{ backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')" }}
          >
            <div className="content text-center">
              <h2 className="title text-2xl font-bold mb-2">"Last Trace Of Us"</h2>
              <p className="description mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
            </div>
          </li>
          <li
            className="item min-w-[300px] h-[400px] bg-cover bg-center flex items-center justify-center p-6 text-white"
            style={{ backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')" }}
          >
            <div className="content text-center">
              <h2 className="title text-2xl font-bold mb-2">"Urban Decay"</h2>
              <p className="description mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
            </div>
          </li>
          <li
            className="item min-w-[300px] h-[400px] bg-cover bg-center flex items-center justify-center p-6 text-white"
            style={{ backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')" }}
          >
            <div className="content text-center">
              <h2 className="title text-2xl font-bold mb-2">"The Migration"</h2>
              <p className="description mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav flex justify-between mt-4">
          <ion-icon className="btn prev text-4xl cursor-pointer" name="arrow-back-outline"></ion-icon>
          <ion-icon className="btn next text-4xl cursor-pointer" name="arrow-forward-outline"></ion-icon>
        </nav>
      </main>

      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default MainScreen;
