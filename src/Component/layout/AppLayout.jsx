import { Outlet, useNavigation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

//Main parent Element for create static page application where header or footer are same
export const AppLayout=()=>{
   
  const navigation =useNavigation();         //@this hook help to handle loading screen show in globally for every page when data not get.
      //  console.log(navigation);       //{state: 'idle', location: undefined, formMethod: undefined, formAction: undefined, formEncType: undefined,}
    //^ state is basically in 3 state -1.idle 2.loading 2.submitting 

      if(navigation.state==="loading"){
        return <h1>Loading...</h1>     
      }

    return(
        <>
        <Header/>
              <Outlet/>             {/*Outlet component help to render child route element in parent route element which is fix ,,Outlet should be used in parent route element */}
        <Footer/>
        </>
    )
}


//! useNavigation Hook-
// page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:
  // Global loading indicators
  // Disabling forms while a mutation is happening
  // Adding busy indicators to submit buttons
  // Optimistically showing a new record while it's being created on the server
  // Optimistically showing the new state of a record while it's being updated

//^ 1. navigation.state -  (3 state)
  //^ idle - There is no navigation pending.
  //^ submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
  //^ loading - The loaders for the next routes are being called to render the next page