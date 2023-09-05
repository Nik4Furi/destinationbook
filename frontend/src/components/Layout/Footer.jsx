import React from 'react';

import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          {/* First Column */}
          <div className="mb-4 md:mb-0 w-1/2">
            <h3 className="text-lg font-semibold mb-2 text-red-400">OFFICE LELO</h3>
            <p className="text-sm">A platform to provide the places where you can conduct meet, enjoy vocation, or do many things after reserved a place</p>
          </div>

          {/* Second Column */}
          <div className="mb-4 md:mb-0 w-1/2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-1"><Link to="/about">About</Link></li>
              <li className="mb-1"><Link to="/privacy">Privacy</Link></li>
              <li className="mb-1"><Link to="/links">Important Links</Link></li>
              <li className="mb-1"><Link to="/faq">FAQ</Link></li>
               {/* <li className="text-lg font-semibold mb-2">Links</li>
               <li className="text-lg font-semibold mb-2">Links</li>
               <li className="text-lg font-semibold mb-2">Links</li>
               <li className="text-lg font-semibold mb-2">Links</li> */}
            </ul>
          </div>

          {/* Third Column */}
          <div className="mb-4 md:mb-0 w-1/2">
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="list-none">
              <li className="mb-1"><Link to="/blogs">Blogs</Link></li>
              <li className="mb-1"><Link to="/apis">APIs</Link></li>
              <li className="mb-1"><Link to="/sponsors">Sponsors</Link></li>
              <li className="mb-1"><Link to="/users">Users</Link></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="mb-4 md:mb-0 w-1/2">
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="list-none">
              <li className="mb-1"><Link to="/blogs">Blogs</Link></li>
              <li className="mb-1"><Link to="/apis">APIs</Link></li>
              <li className="mb-1"><Link to="/sponsors">Sponsors</Link></li>
              <li className="mb-1"><Link to="/users">Users</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-md">
         Copyright &copy; <span className="text-red-400">officelelo@{new Date().getFullYear()}</span> | All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
