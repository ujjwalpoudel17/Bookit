import React from 'react'

function Recently() {
  return (
   <>
   <div className="bg-gray-100 py-8 ">
        <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-900">Recently Visited</h1>
    <div className=" mx-44 px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Hotel Name</th>
                                <th className="text-left font-semibold">Check-In Date</th>
                                <th className="text-left font-semibold">Check-Out Date</th>
                                <th className="text-left font-semibold">Total Spend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="h-16 w-16 mr-4" src="https://wallpapercave.com/wp/wp3598832.jpg" alt="Product image"/>
                                        <span className="font-semibold">Hotel Name</span>
                                    </div>
                                </td>
                                <td className="py-4">2024-04-04</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                    <td className="py-4">2024-04-06</td>
                                    </div>
                                </td>
                                <td className="py-4">$19.99</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Recently
