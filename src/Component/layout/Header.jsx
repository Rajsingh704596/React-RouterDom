import { NavLink } from "react-router-dom";

function Header() {

  //^3. 3rd way where fun define here
  const func=({isActive})=>{
  return {  color:isActive?"Green":"black" };
  }

  return (
    <div>
      {/*//# 1. NavLink component prevent to page reload in react application and it provide more feature like link is active ,pending or transition state */}
      {/* so anchor tag ki jag-ah 'NavLink' and href ki jag-ah 'to' attribute(props) ka use kar-ege */}

      {/*//# 2. Active link in React Navigation (NavLink provide isActive property so further we have to destructure then ) - we have 3 ways 
          
          //^ 1. Default way where in className attribute where isActive property destructure as a argument then conditional operation use with classname */}     
      <li>
        <NavLink to="/" className={({isActive})=>isActive?"nav-link active":"nav-link"}> Home </NavLink>
      </li>

       {/*//^2. Inline css use using Style attribute */}
      <li>
        <NavLink to="/about" style={({isActive})=>{
          return{
            color: isActive?"Red":"blue",
          }
        }}> About </NavLink>
      </li>

       {/* //^3. Inline css using Style attribute where fun pass */}
      <li>
        <NavLink to="/contact" style={func}> Contact </NavLink>
      </li>

      <li>
        <NavLink to="/movie" style={({isActive,isPending,isTransitioning})=>{
          return {
            textDecoration:isActive?"underline":"none",
            color:isPending?"yellow":"purple",
            viewTransitionName:isTransitioning?"slide":"",
          }
        }}> Movies </NavLink>
      </li>
    </div>
  );
}

export default Header;
