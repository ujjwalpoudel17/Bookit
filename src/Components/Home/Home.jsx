import React from 'react'
import { NavLink,Link } from 'react-router-dom';

function Home() {
  return (
    <>
<div className="bg-[url('https://th.bing.com/th/id/R.979beb749a45ccc532a005e065d1f273?rik=WPGIfV3ClXqFlg&pid=ImgRaw&r=0')] bg-cover bg-center w-full h-96 shadow-2xl">
    <div className="relative h-full bg-black bg-opacity-25 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 w-full md:w-auto">
            <div className="text-center md:text-left">
                <label className="text-white text-xl md:text-2xl font-medium">Check-in Date</label>
                <input type="date" className="w-full p-2 mt-2 rounded-2xl" />
            </div>
            <div className="text-center md:text-left">
                <label className="text-white text-xl md:text-2xl font-medium">Check-out Date</label>
                <input type="date" className="w-full p-2 mt-2 rounded-2xl" />
            </div>
            <div className="text-center md:text-left">
                <label className="text-white text-xl md:text-2xl font-medium">Room Type</label>
                <input type="text" className="w-full p-2 mt-2 rounded-2xl" />
            </div>
        </div>
        <div className="mt-8">
            <a href="" className="font-medium border-2 text-white bg-fuchsia-800 p-2 rounded-2xl hover:text-white hover:bg-blue-600">Submit</a>
        </div>
    </div>
</div>


<div>
      <h1 className="font-bold text-xl md:text-2xl mx-4 md:mx-20 mt-10 md:mt-20">
        Get up to 10% discount on these Hotels
      </h1>

      <div className="mx-4 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 rounded-2xl mt-4 mb-10 md:mb-28">
        <div className="shadow border-2 rounded-2xl">
          <img src="https://th.bing.com/th/id/OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded-t-2xl w-full h-52 object-cover" alt="Hotel Moonlight and Bar" />
          <p className="mx-4 mt-4 font-bold">Hotel Moonlight and Bar</p>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-medium"><i className="fa-solid fa-water-ladder text-blue-600"></i> Pool</p>
            <p className="font-medium"><i className="fa-solid fa-water text-blue-600"></i> Lakeview</p>
            <p className="font-medium"><i className="fa-solid fa-spa text-blue-600"></i> Spa</p>
          </div>
          <p className="text-right mt-8 mx-4 mb-4"><span className="font-medium">Starting Price:</span> Rs.2,500</p>
        </div>

        {/* Repeat the above block for other hotels */}
        <div className="shadow border-2 rounded-2xl">
          <img src="https://th.bing.com/th/id/OIP.-wcXcPg9mUaWmMJuoWXgHgAAAA?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded-t-2xl w-full h-52 object-cover" alt="Hotel Moonlight and Bar" />
          <p className="mx-4 mt-4 font-bold">Hotel Moonlight and Bar</p>
          <div className="flex justify-between items-center mx-4 mt-4">
            <p className="font-medium"><i className="fa-solid fa-water-ladder text-blue-600"></i> Pool</p>
            <p className="font-medium"><i className="fa-solid fa-water text-blue-600"></i> Lakeview</p>
            <p className="font-medium"><i className="fa-solid fa-spa text-blue-600"></i> Spa</p>
          </div>
          <p className="text-right mt-8 mx-4 mb-4"><span className="font-medium">Starting Price:</span> Rs.2,500</p>
        </div>

        {/* Add more hotel blocks as needed */}
      </div>
    </div>



    <div>
      <h1 className="font-bold text-xl md:text-2xl mx-4 md:mx-20 mt-10 md:mt-20">
        Trending Destinations
      </h1>
      <p className="font-medium mx-4 md:mx-20 mt-2">
        Most popular choice for travelers of Nepal
      </p>

      <div className="mx-4 md:mx-20 mb-10 md:mb-28 mt-4 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-2xl">
          <div>
            <img
              src="https://www.rhinolandchitwan.com/images/2nights/1.jpg"
              className="w-full h-64 md:h-96 rounded-2xl object-cover"
              alt="Trending Destination 1"
            />
          </div>
          <div>
            <img
              src="https://english.onlinekhabar.com/wp-content/uploads/2016/08/Chitwan-Sauraha-22.jpg"
              className="w-full h-64 md:h-96 rounded-2xl object-cover"
              alt="Trending Destination 2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div>
            <img
              src="https://th.bing.com/th/id/R.64df6e813479b16bf59c68e36371e724?rik=9vaO43E9Zj383w&pid=ImgRaw&r=0"
              className="w-full h-64 md:h-96 rounded-2xl object-cover"
              alt="Trending Destination 3"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2012/02/17/15/27/new-14606_1280.jpg"
              className="w-full h-64 md:h-96 rounded-2xl object-cover"
              alt="Trending Destination 4"
            />
          </div>
          <div>
            <img
              src="https://lp-cms-production.imgix.net/2019-06/53693064.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
              className="w-full h-64 md:h-96 rounded-2xl object-cover"
              alt="Trending Destination 5"
            />
          </div>
        </div>
      </div>
    </div>


    <div>
  <h1 className="font-bold text-xl md:text-2xl mx-4 md:mx-20 mt-10 md:mt-20">
    Take a dip at these top-rated hotels
  </h1>
  <div className="mx-4 md:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 rounded-2xl mt-4 mb-10 md:mb-28">
    <div className="shadow border-2 rounded-2xl">
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/c8/24/84/main-pool-area-which.jpg?w=900&h=-1&s=1"
        className="rounded-2xl w-full h-60 sm:h-72 md:h-80 object-cover"
        alt="Annapurna Hotel And Spa"
      />
      <p className="mx-4 text-xl md:text-2xl font-bold">Annapurna Hotel And Spa</p>
      <div className="flex justify-between items-center mx-4 mt-4">
        <p className="font-medium">
          <i className="fa-solid fa-water-ladder text-blue-600"></i> Pool
        </p>
        <p className="font-medium">
          <i className="fa-solid fa-water text-blue-600"></i> Lakeview
        </p>
        <p className="font-medium">
          <i className="fa-solid fa-spa text-blue-600"></i> Spa
        </p>
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-full text-center p-2 text-white mt-4"
      >
        View Price
      </button>
    </div>

    <div className="shadow border-2 rounded-2xl">
      <img
        src="https://images.huffingtonpost.com/2017-04-28-1493369250-7939453-EveningPool2150941.jpg"
        className="rounded-2xl w-full h-60 sm:h-72 md:h-80 object-cover"
        alt="Hotel Moonlight and Bar"
      />
      <p className="mx-4 text-xl md:text-2xl font-bold">Hotel Moonlight and Bar</p>
      <div className="flex justify-between items-center mx-4 mt-4">
        <p>jacuzzi</p>
        <p>Bar</p>
        <p>Spa</p>
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-full text-center p-2 text-white mt-4"
      >
        View Price
      </button>
    </div>

    <div className="shadow border-2 rounded-2xl">
      <img
        src="https://th.bing.com/th/id/OIP.xlrVyoDnqYJOol9NxHa4nwHaE7?rs=1&pid=ImgDetMain"
        className="rounded-2xl w-full h-60 sm:h-72 md:h-80 object-cover"
        alt="Fewa Hotel And Lodge"
      />
      <p className="mx-4 text-xl md:text-2xl font-bold">Fewa Hotel And Lodge</p>
      <div className="flex justify-between items-center mx-4 mt-4">
        <p>Pool</p>
        <p>Lakeview</p>
        <p>Spa</p>
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-full text-center p-2 text-white mt-4"
      >
        View Price
      </button>
    </div>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-20 lg:mx-32 gap-10 md:gap-20 lg:gap-40 rounded-2xl items-center bg-indigo-200 bg-opacity-50 mb-10 md:mb-16">
  <div className="rounded-2xl">
    <p className="text-xl md:text-2xl mx-4 md:mx-10 lg:mx-20 font-bold">
      We're partnered with the industry leaders in online travel booking, enabling us to provide an extensive range of offers
    </p>
  </div>
  <div className="rounded-2xl mx-4 md:mx-10 lg:mx-20">
    <img
      src="https://static.vecteezy.com/ti/vecteur-libre/p3/15694771-interieur-de-la-reception-de-l-hotel-avec-des-receptionnistes-et-des-voyageurs-pour-la-reservation-en-illustration-de-modele-dessine-a-la-main-de-dessin-anime-plat-vectoriel.jpg"
      className="h-40 md:h-48 lg:h-52 rounded-2xl mt-4 mb-4 object-cover"
      alt="Partnered Travel Booking"
    />
  </div>
</div>



</>
   
  )
}

export default Home
