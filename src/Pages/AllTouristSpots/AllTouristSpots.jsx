import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";

const AllTouristSpots = () => {
  const allTouristSpots = useLoaderData();

  return (
    <div>
    <section className="p-6 bg-gray-100 text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-50">
			<span className="block mb-2 text-indigo-600">Mamba design system</span>
			<h1 className="text-5xl font-extrabold text-gray-900">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			<form noValidate="" action="" className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-indigo-600 border-gray-300" />
				</div>
				<div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-indigo-600 border-gray-300" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded bg-indigo-600 text-gray-50">Join the waitlist</button>
			</form>
		</div>
		<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
	</div>
</section>
 <div>
      <h1 className="text-5xl font-bold text-center my-4 font-raleway">All Tourist Spots</h1>
 </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-1">
       {
        allTouristSpots.map(spot =><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard> )
       }
      </div>
    </div>
  );
};

export default AllTouristSpots;
