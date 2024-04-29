import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = UseAuth() || {};
  const [items, setItems] = useState([]);
  const [control,setControl]=useState(false)
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }, [user,control]);
  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: 'Are you sure you want to delete this tourist spot?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6', // Customize confirmation button color (optional)
      cancelButtonColor: '#d33', // Customize cancel button color (optional)
      confirmButtonText: 'Yes, delete it!'
    });
  
    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/deleteSpot/${id}`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete tourist spot');
        }
  
        const data = await response.json();
  
        if (data.deletedCount > 0) {
          setControl(!control)
          console.log('Tourist spot deleted successfully:', data);
          Swal.fire({
            title: 'Congratulations!',
            text: 'Your tourist spot has been deleted successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          
        } else {
          Swal.fire({
            title: 'OOPS!',
            text: 'Your tourist spot has not been deleted',
            icon: 'Error',
            confirmButtonText: 'Cool'
          });
        }
      } 
      catch (error) {
        console.error('Error deleting tourist spot:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while deleting the tourist spot. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    }
  };

  return (
    <div>
      <section className="border-2  rounded-2xl my-7">
        <div className="bg-blue-700 rounded-2xl ">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900  ">
            <h1 className="lg:text-5xl text-2xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              Discover the Enchantment of the Middle East with Arab Voyage
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Embark on unforgettable journeys through vibrant cultures,
              breathtaking landscapes, and ancient wonders. Arab Voyage curates
              authentic travel experiences across the Middle East !
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded border-gray-300 text-gray-900 border-2"
              >
                Explore Destinations
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
              >
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/rMLdcjL/iran-travel-shazdeh-garden-kerman.jpg"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40 "
        />
      </section>
   {
    items.length === 0 ? (
      <p className="text-center text-gray-500">
        You haven't added any tourist spots to your list yet. Start exploring and create your travel wishlist!
      </p>
    ) : (
      <div className="container p-2 mx-auto sm:p-4 ">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-blue-500">
          Contacts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="">
                <th className="p-3">serial</th>
                <th className="p-3">Tourist Spot Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Location</th>
                <th className="p-3">Total Visitor Per Year</th>
                <th className="p-3">Edit</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>

            {items.map((item, index) => (
              <tbody
                key={item._id}
                item={item}
                className="border-b  border-gray-300"
              >
                <tr>
                  <td className="px-3 text-2xl font-medium ">{index + 1}</td>
                  <td className="px-3 py-2">
                    <p>{item.spotName}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p className="">{item.countryName}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{item.locationName}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{item.totalVisitorsPerYear}</p>
                  </td>
                  <td className="">
                    <Link
                      to={`/touristSpotDetails/${item._id}`}
                      className="rounded-lg btn bg-sky-400 text-white"
                    >
                      Update
                    </Link>
                  </td>
                  <td className="">
                    <div onClick={()=>handleDelete(item._id)} className="rounded-lg btn bg-blue-400 text-white">
                      Delete
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    )
   }
      
    </div>
  );
};

export default MyList;
