//! useRouteError Hook-  
//# inside of an errorElement this hook returns anything thrown during an action,loader,or rendering.
//@ Note- this feature only works if using a data router.

import { NavLink, useRouteError } from "react-router-dom"
import PreviousPage from "./PreviousPage";


function ErrorPage() {

  const error=useRouteError();

 // console.log(error);       //*o/p- errorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/f"', error: Error: No route matches URL "/f"at getInternalRouterError (http://localhost:5173/node_modules/…}      

  if(error.status===404){
    return (
      <div>
        <figure>
           <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404 page" />
        </figure>
        <p>The page you are looking for could not be found</p>
        <p>{error.status} {error.statusText}</p>
        <NavLink to="/">Go to Home Page</NavLink>
        <PreviousPage/>
        
      </div>
    )
  } 

  return <h1>The page are you looking does not exist</h1>
}

export default ErrorPage
