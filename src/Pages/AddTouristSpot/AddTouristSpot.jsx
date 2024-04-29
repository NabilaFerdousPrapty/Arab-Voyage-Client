import Swal from "sweetalert2";
import img from "../../assets/photography-cartoon.png";
const AddTouristSpot = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const image = data.get("image");
    const spotName = data.get("spotName");
    const countryName = data.get("countryName");
    const locationName = data.get("locationName");
    const shortDescription = data.get("shortDescription");
    const average_cost = data.get("average_cost");
    const season = data.get("season");
    const travelTime = data.get("travelTime");
    const totalVisitorsPerYear = data.get("totalVisitorsPerYear");
    const username = data.get("username");
    const email = data.get("email");
    const touristSpot = {
      image,
      spotName,
      countryName,
      locationName,
      shortDescription,
      average_cost,
      season,
      travelTime,
      totalVisitorsPerYear,
      username,
      email,
    };
    console.log(touristSpot);
    fetch("http://localhost:5000/addSpot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Your tourist spot has been added successfully!",
            icon: "success",
            confirmButtonText: "Cool",

          })
          form.reset();
        }else{
          Swal.fire({
            title: "OOPS!",
            text: "Your tourist spot has not been added",
            icon: "Error",
            confirmButtonText: "Cool",

          })
          form.reset();
        }
      });
  };

  return (
    <div>
      <div>
      <h1 className=" text-center font-bold my-5">Add Tourist Spot</h1>
      <section className="p-6">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <h1 className="font-medium text-center text-xl ">Welcome </h1>
              <p className="text-xs">
                Please fill in the form to add a new tourist spot ! Your
                contribution is highly appreciated
              </p>
              <img src={img} alt="" className="" />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label htmlFor="image" className="text-sm">
                  Tourist Spot image
                </label>
                <input
                  name="image"
                  id="image"
                  type="url"
                  placeholder="Add your spot image"
                  className="h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="spot name" className="text-sm">
                  Tourist Spot name
                </label>
                <input
                  name="spotName"
                  id="spotName"
                  type="text"
                  placeholder="Add your spot name"
                  className="h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Country name
                </label>
                <input
                  name="countryName"
                  id="countryName"
                  type="text"
                  placeholder="Country name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 h-10 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Location
                </label>
                <input
                  name="locationName"
                  id="locationName"
                  type="text"
                  placeholder="Location name"
                  className="h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="short description" className="text-sm">
                  short description
                </label>
                <input
                  name="shortDescription"
                  id="shortDescription"
                  type="text"
                  placeholder="Enter a short description"
                  className="h-20 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  {" "}
                  Average Cost
                </label>
                <input
                  name="average_cost"
                  id=" average_cost"
                  type="text"
                  placeholder=" average_cost"
                  className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Seasonality
                </label>
                <input
                  name="season"
                  id="season"
                  type="text"
                  placeholder="season"
                  className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  {" "}
                  Travel Time
                </label>
                <input
                  name="travelTime"
                  id=" average_cost"
                  type="text"
                  placeholder=" average_cost"
                  className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  name="totalVisitorsPerYear"
                  id="totalVisitorsPerYear"
                  type="text"
                  placeholder=" total Visitors Per Year"
                  className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  First name
                </label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring h-10 focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  className=" h-10 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300"
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center">
            <button type="submit" className="btn w-full">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
    </div>
  );
};

export default AddTouristSpot;
