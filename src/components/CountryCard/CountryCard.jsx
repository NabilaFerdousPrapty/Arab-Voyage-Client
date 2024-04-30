import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    const {country_Name,image,short_description} = country;
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md ">
	<div className="flex justify-between pb-4 border-bottom">
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 " />
			
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-indigo-600">{country_Name}</h3>
			</a>
			<p className="leading-snug ">{short_description.slice(0,200)}....</p>
		</div>
        <Link to={`/touristSpots/${country_Name}`} className="btn mx-auto bg-blue-500 border-gray-700">View Tourist Spots</Link>

	</div>
</div>
        </div>
    );
};

export default CountryCard;