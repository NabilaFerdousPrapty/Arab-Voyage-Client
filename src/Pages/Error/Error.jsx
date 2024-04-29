import { Link } from 'react-router-dom';
import img from '../../assets/404.jpg';

const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <section className="flex items-center h-full p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl ">
				<span className="sr-only">Error</span>
			</h2>
  <img src={img} alt="" />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to='/' className="px-8 py-3 font-semibold  bg-slate-800 text-white rounded-2xl">Back to homepage</Link>
		</div>
	</div>
</section>
        </div>
    );
};

export default Error;