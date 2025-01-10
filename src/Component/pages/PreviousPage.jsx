//! useNavigate hook- 
  //# The useNavigate hook returns a function that lets you navigate programmatically. e.g previous page pr jane k li ye (seamless page redirection)
  //# It's usually better to use redirect in 'loaders' and 'actions' than this hook.

import { useNavigate } from "react-router-dom"
function PreviousPage() {
    const navigate=useNavigate();         //here hook use

    const handlePreviousPage=()=>{
       navigate(-1);             // for getting previous page path
      // navigate("/")                // for getting home page path
    }
  return (
    <div>
      <button onClick={handlePreviousPage}>Back to Previous Page</button>
    </div>
  )
}

export default PreviousPage
