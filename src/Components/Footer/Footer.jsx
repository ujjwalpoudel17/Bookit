import React from 'react'

function Footer() {
  return (
    <>
    <footer className="flex bg-black shadow-2xl justify-between items-center">
    <div className="grid grid-cols-3 gap-20 mt-16 mb-16 border-2 border-double">
        <div className="mx-16 mt-5 mb-5 ">

<h1 className="text-2xl text-white">About the company</h1>
<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut nobis, officia debitis delectus deserunt consequatur adipisci doloribus culpa rerum eum, voluptates ex dolore nemo recusandae quibusdam officiis minima perspiciatis?</p>
        </div>
<div className="mt-5">
<p className="text-white  mt-10">&copy; copyright 2024. All Rights Reserved</p>
<p className="text-white  mx-10 ">Designed By Ujjwal_poudel17</p>
</div>
<div className="mx-10 mt-5">
<div className="flex gap-5 mt-12 mb-10">
<a href="" className=" text-2xl text-white"><i className="bi bi-facebook"></i></a>
<a href="" className=" text-2xl text-white"><i className="bi bi-threads"></i></a>
<a href="" className=" text-2xl text-white"><i className="bi bi-twitter-x"></i></a>
<a href="" className=" text-2xl text-white"><i className="bi bi-github"></i></a>
</div>

</div>
    </div>

</footer>
    </>
  )
}

export default Footer
