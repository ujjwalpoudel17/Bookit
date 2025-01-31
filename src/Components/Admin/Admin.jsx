import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-52 min-h-screen bg-blue-400 shadow-lg">
        {/* Logo or Image */}
        <img
          src=""
          alt="HomeRent"
          className="h-32 px-4 py-2 mt-5 mx-auto rounded-l-lg"
        />
        
        {/* Sidebar Links */}
        <div className="mt-5 hover:bg-gray-300">
          <Link to="/dashboard" className="text-lg font-bold my-4 mx-4">
            Dashboard
          </Link>
        </div>
        <div className="mt-5 hover:bg-gray-300">
          <Link to="/category" className="text-lg font-bold mx-4">
            Category
          </Link>
        </div>
        <div className="mt-5 hover:bg-gray-300">
          <Link to="/properties" className="text-lg font-bold mx-4 rounded-lg">
            Properties
          </Link>
        </div>
        <div className="mt-5 hover:bg-gray-300">
          <Link to="/users" className="text-lg font-bold mx-4 rounded-lg">
            Users
          </Link>
        </div>
        <div className="mt-5 hover:bg-gray-300">
          <Link to="/logout" className="text-lg font-bold mx-4">
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
    
    </div>
  
  )
}

export default Admin
