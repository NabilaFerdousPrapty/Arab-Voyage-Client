import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddTouristSpot from './../Pages/AddTouristSpot/AddTouristSpot';
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";
import MyList from "../Pages/MyList/MyList";
import Login from "../Pages/Login/Login";
import SignUp from './../Pages/SignUp';
import Error from "../Pages/Error/Error";
import TouristSpotDetails from "../components/TouristSpotDetails/TouristSpotDetails";
import PrivateRoute from "../components/Private/PrivateRoute";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import UpdateTouristSpot from "../components/Update/UpdateTouristSpot";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
        element:<Home/>,
        loader:()=>(fetch('https://arab-voyage-server.vercel.app/spots'))
        },
        {
          path:"/addTouristSpot",
        element:<PrivateRoute>
          <AddTouristSpot/>
        </PrivateRoute>,
        },{
          path:'allTouristSpots',
          element:<AllTouristSpots/>,
          loader:()=>(fetch('https://arab-voyage-server.vercel.app/spots'))

        },{
          path:'/myList',
          element:<PrivateRoute>
            <MyList/>
          </PrivateRoute>
        },
        {
         path:'/login',
          element:<Login/>
        },{
          path:'/signUp',
          element:<SignUp/>
        },{
         path:'/updateProfile',
         element:<PrivateRoute>
          <UpdateProfile/>
         </PrivateRoute>
        },
        {
          path:'/touristSpotDetails/:id',
          element:<PrivateRoute>
            <TouristSpotDetails/>
          </PrivateRoute>

        },{
          path:'/updateTouristSpot/:id',
          element:<PrivateRoute>
            <UpdateTouristSpot></UpdateTouristSpot>
          </PrivateRoute>
            
        }


      ]
    },
  ]);
  export default router;