"use client"
// import '../../app/css/bootstrap.min.css';
import styles from './button.module.css'
export default function Button(){

  return (
    <div>
      {/* it should be sure when we use the onClick with button, to include the use cLient */}
      <button className="btn btn-primary"
      onClick={()=>{console.log("logout")}}>Logout</button>
    </div>
  );
}

