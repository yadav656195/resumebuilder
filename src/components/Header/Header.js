import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";
import {useLocation} from "react-router-dom"
const resume=(e)=>{
  window.location.href="/resume"
 }
 const makeResume=(e)=>
 {
window.location.href="/body";
 }

 function Header() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
             A <span>Resume</span> that stands out! 
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>

      <div className={styles.button}>
        <button onClick={resume} className={styles.button1}>Already Have a Resume</button>
        <button onClick={makeResume} className={styles.button2}>Make Your Resume</button>
      </div>
    </div>
  );
}


export default Header;
