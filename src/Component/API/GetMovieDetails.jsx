//# here again data fetch using Async await ,only show required movies detail as id which is user want

export const getMovieDetails=async({params})=>{          //here params destructure and params value get from path :`/movie/:movieID`  
  
    //console.log(params);                  //^ O/p- {movieID:'tt012038'}
    const id= params.movieID 

    try{
    const res=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
    const data=await res.json();
    return data
  }
   catch(error){
    console.log(error);
    return <p>{error.message}</p>
  }
 
         
}
