import React from 'react';
import {Link} from "react-router-dom"


const Navbar = () => {
  return ( 
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books" >
              کتاب ها
            </Link>
          </li>
          <li>
            <Link to="/about" >
              درباره ما
            </Link>
          </li>
        </ul>
      </nav>
    </>
   );
}
 
export default Navbar;