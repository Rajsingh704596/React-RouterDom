/* eslint-disable react/prop-types */
//! useLoaderData hook- this hook provide the value returned from your route loader.

import { NavLink, useLoaderData } from "react-router-dom"

function Movie() {
  const getData=useLoaderData();          //useLoaderData hook use to getData from loader function
  
  // console.log(getData);  //o/p- {Search:Array(10), totalResults:'257', Response:'True'}
 // so here getData k ander Search hai jo ki array hai or usme 10 object hai to usse print karne k liye ..map method use karege (getData.Search)
  return (
    <ul>
        {
          getData && getData.Search.map((curMovie)=>{
                return <Card key={curMovie.imdbID} data={curMovie}/>
          })
        }   
    </ul>
  )
}
export default Movie


//Create The Card Ui layout

 const Card=({data})=>{ 
   const{Title,Poster,imdbID}=data;
     return(
      <li>
          <figure>
            <img src={Poster} alt={Title} />
          </figure>
          <NavLink to={`/movie/${imdbID}`}>Show Details</NavLink>          {/* NavLink k through show Details pr click karne pr diye gaye path pr jayega sath hi imdbID bhi pass ho rha hai dynamically */}
        
          
      </li>
     )

 }
