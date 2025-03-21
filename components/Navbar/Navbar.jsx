"use client";
import Link from "next/link";
import { links } from "./data";
import styles from "./Navbar.module.css"
import Button from "../Button/Button";
import '../../app/css/bootstrap.min.css';
import '../../app/js/bootstrap.bundle.js';

import { useEffect } from "react";

export function Navbar(){

  return (
    //   <nav>
    //   <ul>
    //     <li>About</li>
    //     <li>Blog</li>
    //     <li>Portfolio</li>
    //     <li>Contact</li>
    //   </ul>
    // </nav>

    // <div className={styles.container}>

    //   <Link href={"/"} className={styles.logo}> HEXASHOP </Link>

    
    //   // <div className={styles.links}>
    //   //   {links.map(link=>   
    //   //     <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
    //   //   )}

    //    
    //       <Button/>
    //     
        
      

    //   //</div> 

    // </div>

  <div>hhh</div>

  );
}

export default function Navbars(){

  useEffect(()=>{
  //  require("../../app/js/bootstrap.bundle.js");
      const script = document.createElement("script");
      script.src= "../../app/js/bootstrap.bundle.js";
      script.async =true;
      document.body.appendChild(script);
      return ()=>{
        document.body.removeChild(script);
      };
  },[]);

  return (

      
  <nav className="navbar navbar-dark bg-dark">
  <Link className="navbar-brand" href="#">Navbarrr</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Link</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" href="#">Action</Link>
          <Link className="dropdown-item" href="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" href="#">Disabled</Link>
      </li>
    </ul>
      {/* // <form className="form-inline my-2 my-lg-0">
      //   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      //   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      // </form> */}
  </div>
</nav>

  );

}