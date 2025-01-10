//! React Router-
//^  It is a standard routing library for React applications, which helps in managing navigation and rendering components based on the URL. It provides features like declarative routing, nested routes, and route matching.
//^ React Router is a popular javascript framework used for handling routing in React application.

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//import {createRoutesFromElements,Route } from 'react-router-dom'
import './App.css'
import { AppLayout } from './Component/layout/AppLayout'
import Home from './Component/pages/Home'
import Contact, { contactData } from './Component/pages/Contact'
import About from './Component/pages/About'
import ErrorPage from './Component/pages/ErrorPage'
import { getApiData } from './Component/API/GetApiData'
import Movie from './Component/pages/Movie'
import { MovieDetails } from './Component/pages/MovieDetails'
import {getMovieDetails} from './Component/API/GetMovieDetails'

function App() {

  // //# create browser router (in version 6.4 and above)-
  const router=createBrowserRouter([
        {
          path:"/",               //here Forward slash '/' is default path(in url)
          element: <AppLayout/>,
          errorElement:<ErrorPage/>,            //handling error page , trigger when user put wrong path
          children:[
            {
              path:"/",
              element:<Home/>
            }, 
            {
              path:"/about",
              element:<About/>
            }, 
            {
              path:"/contact",         //koi bhi iss path pr aa-ye ga
              element:<Contact/>,      //to ye component show ho ga 
              action:contactData,      //for get data from Form component so use action property and as a value fun. pass
            }, 
            {
              path:"/movie",               //url m add path
              element:<Movie/>,
              loader:getApiData,           //fun(where fetch Api data return) pass as a value in loader property 
             },
            {                              //Dynamic Routing in React: Get Params Value and Fetch API Data for a single
              path:`/movie/:movieID`,       // colon : is compulsory , it make sure here we put any thing it is dynamic value
              element:<MovieDetails/>,             // new component create which is now UI when this path use
              loader:getMovieDetails,           //fun(where fetch Api data return) pass as a value in loader property 
             },
          
          ],
        },
  ]);

  
   //# 2 way - createRoutesFromElements (Helper function) with createBrowserRouter in React Router-
   
  //  const router =createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path={"/"} element={<AppLayout/>}>          {/*components k and_er components pass kar_ne k li ye again curly braces use kar na pd-ta hai */}
  //         <Route path={"/"} element={<Home/>}/>
  //         <Route path={"/about"} element={<About/>}/>
  //         <Route path={"/contact"} element={<Contact/>}/>
  //         <Route path={"/section"} element={<Section/>}/>
  //         <Route path="*" element={<ErrorPage/>}          // for simple basic architecture we use * =any other path
  //     </Route>
  //   )
  //  );


  return (
    <>
     {/*//# RouterProvider component react application m jit-ne links hai, user kb kis page pr request kar rha hai jane k li-ye , ya re-direct ho rha , ya back button press kar rha hai , wo sb-hi data ko manage kar-ta hai */}

      <RouterProvider router={router} />         {/*here router ko as a props pass kar na must hai*/}

    </>
  )
}

export default App


//! errorElement-
//# when exception are thrown in "loaders(loader using for fetching data from API instead of useEffect), actions(actions props to get data in form instead of useState ), or component rendering," instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route errorElement>) and the error made available with useRouteError.

//! loader-
//# Each route can define a "loader" function to provide data to the route element before it renders. means fetch data phl-e load ho ga ba-ad m header or footer render hon-ge , so ye useEffect se fast work kar-ta hai 

  //$ loader vs useEffect()-
  //^ loader k use se ye fayda hai jb bhi api data jo mil rha hai wo page ek sath load ho  ,bhale hi header and footer thoda late ho but fetch data phle load ho chuka hota hai ,, but useEffect k case m phle page render hota phir useEffect call hoke render hota 
