import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddTouristSpot from './../Pages/AddTouristSpot/AddTouristSpot';
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";
import MyList from "../Pages/MyList/MyList";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
        element:<Home/>,
        loader:()=>(fetch('http://localhost:5000/spots'))
        },
        {
          path:"/addTouristSpot",
        element:<AddTouristSpot/>,
        },{
          path:'allTouristSpots',
          element:<AllTouristSpots/>,
          loader:()=>(fetch('http://localhost:5000/spots'))

        },{
          path:'/myList',
          element:<MyList/>
        },
        {
         path:''
        }
      ]
    },
  ]);
  export default router;