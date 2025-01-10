//! Form component in React Router- (benefit for use - easily handle multiple input field)
//# The Form component is a wrapper around a plain HTML. It provide 2 props - method="POST" and action="/path" form submit pr uss path pr redirect kar ne k li ye.

import { Form } from "react-router-dom"

//@ Is function ko khi bhi Form component m call nhi ki ya hai basically createBrowserRouter m contact router m action property add kar-ege ja ha fun call as a value pass kar-ege 
//*function ko yhi define kr di ya hai jo ki Form submit pr data get kar le ga  
//@ Note - async function create kar-ege kyu ki jo data mil-ega wo promise return kar-ega {either async await or normal .then.catch}
//* hme request object mil ta hai ji se destructure kar li ya hai , sa_th hi is me(request) ek formData() method mil ta hai jo ki promise return kar ta hai 

export const contactData=async({request})=>{
  try {
    const response=await request.formData();     //^here formData method m form ka sara data aa chu_ka hai 
    //console.log(response);                //o/p- FormData{}

    //^ FormData ko proper Object m convert kar na pad-ega aa-ge backend m data bhe-jne k li ye  , ye method use kar_ege 
    const data= Object.fromEntries(response);         //Object method
    console.log(data);       //o/p-{name: 'Rock', email: 'abc@gmail.com', comments: 'Hello'}

    //^ action function m return m ya to value or ya to null dena must hai 
    return null;
  } catch (error) {
    console.log(error)
  }
  
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <hr />
      <p>Get in touch with us. We are always here to help you</p>
      <br />

     <Form method="POST" action="/contact">   {/* here method jo bhi form data hai post ho ja ye or action pr url de-ge basically redirect kar ne k li ye but here data submit k ba_ad is_si page pr rh-ne k li ye /contact lik-ha hai*/}
     
     {/* //^ name property must hai ,kyu ki is-si property k base pr value milne wa-li hai backend m  */}
      <label htmlFor="name">
       User Name:<input type="text" name="name" required autoComplete="off" id="name" placeholder="enter your name" />
      </label>
      <br />
      <label htmlFor="email">
       Enter email address :<input type="email" name="email" required autoComplete="off" id="email" placeholder="abc@gmail.com" />
      </label>
      <br />
      <label htmlFor="comments">
       Comments:<textarea name="comments" id="comments" rows="5" cols="20"></textarea>
      </label>
      <br />
      <button type="submit">Send message</button>

     </Form>
    </div>
  )
}

export default Contact
