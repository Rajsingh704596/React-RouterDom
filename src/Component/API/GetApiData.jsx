
// step 1- Function To Fetch API data using Async await
// step 2- pass that function name as the value of the loader property in that page route //^loader - use to call normal function/component ( loader use to fetch data without useEffect) (loader define in CreateBrowserRouter)
// step 3- useLoaderData() hook use to get the data of the API from loader to child component. 

export const getApiData=async()=>{
    try {
        // const response=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1");
        
        const response=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);    //^here using ENV Variable to protect/secure Private Data // string m variable ka use kar rhe hai is_li_ye template literal use ki-ya h and data get using import.meta.data.VITE_variable_Name
        const data=await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
        return <p>{error.message}</p>
    }
}
   