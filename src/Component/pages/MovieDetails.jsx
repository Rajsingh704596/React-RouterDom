// import { useParams } from "react-router-dom"

import { NavLink, useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  //^ old way - we don't need
  // const params = useParams();              //^here we use useParams hook which get dynamic value by router path of MovieDetails component and return into in object , here we get imdbID
  //    console.log(params);                      //^o/p- {movieID:'tt012038'}

  const movieData = useLoaderData();
  console.log(movieData); //o/p- {Title:'Titanic'.......}  object data get

  const {
    Actors,
    Country,
    Poster,
    Title,
    Type,
    Year,
    Plot,
    BoxOffice,
    Runtime,
    Released,
    Awards,
    Genre,
    imdbRating,
    Language,
    Writer,
  } = movieData;

  //Runtime m data minute m ho to is se hour m show kar-ege
  const totalMinutes = Runtime.replace("min", "");
  const hours = Math.floor(totalMinutes / 60); //Calculate the number of hour
  const minutes = totalMinutes % 60; //Calculate the remaining minutes
  //console.log(hours,minutes);

  const formattedTime = `${hours}hr ${minutes}min`;
  //console.log(formattedTime);

  return (
    <>
      <h3>Title:{Title}</h3>
      <figure>
        <img src={Poster} alt={Title} />
      </figure>
      <p>Plot: {Plot}</p>
      <p>Actor: {Actors}</p>
      <p>Country: {Country}</p>
      <p>Awards: {Awards}</p>
      <p>Box Office: {BoxOffice}</p>
      <p>Genre: {Genre}</p>
      <p>Writer:{Writer}</p>
      <p>Language:{Language}</p>
      <p>Awards: {Awards}</p>
      <p>Type: {`#${Type}`}</p>
      <p>Time: {formattedTime}</p>
      <p>Year: {Year}</p>
      <p>Released Date: {Released}</p>
      <p>imdbRating: {imdbRating}</p>

      <NavLink to="/movie">Go Back</NavLink>
    </>
  );
};
