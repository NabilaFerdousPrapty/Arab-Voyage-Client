import UseAuth from "../../hooks/UseAuth";
import img from "../../assets/user.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";


const UpdateProfile = () => {
  const [hide, setHidden] = useState(true);
  const { user, updateUserProfile } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { UserName, photoURL } = data;
    updateUserProfile(UserName, photoURL);
    toast.success(
      "Profile updated successfully refresh the page to see changes"
    );
  };

  const toggleFormVisibility = () => {
    setHidden(!hide);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100 my-8">
      
      <div className="flex flex-col max-w-lg p-6 bg-gray-50 text-gray-800 text-center justify-center items-center">
        <img
          src={user?.photoURL || img}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square rounded-xl"
        />
        <div>
          <form>
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="username">Username:</label>
              <input

                type="text"
                id="username"
                className="my-2 w-full px-3 py-2 rounded-md  bg-gray-50 text-gray-800 focus:border-indigo-600 border-2 border-gray-300"
                value={user?.displayName || "You have not added any UserName"}
                readOnly
              />
            </div>
            <div className="flex justify-between items-center md:gap-2 gap-0">
              <label htmlFor="email">Email:</label>
              <input
              className="w-full px-3 py-2 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600 md:text-base text-sm"
                type="email"
                id="email"
                value={user?.email || "You have not added any email"}
                readOnly
              />
            </div>
          </form>

          <div
            onClick={toggleFormVisibility}
            className="btn bg-gray-800 px-2 py-1 rounded-md text-white my-3 hover:bg-gray-500"
          >
            Update Profile
          </div>
        </div>
      </div>
      {!hide && (
        <div className={`mt-10`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  defaultValue={user?.displayName || ""}
                  placeholder="Username"
                  {...register("UserName", { required: true })}
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
                {errors.UserName && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="photo" className="block text-gray-600">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  id="photoURL"
                    defaultValue={user?.photoURL || ""}
                  placeholder="Photo URL"
                  {...register("photoURL")}
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="btn w-full text-white bg-slate-600  px-2 py-1 rounded-md   text-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
