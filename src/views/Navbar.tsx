/**
 * @Author: TrentonLi
 * @Date: 2024/6/27
 * @LastEditors: TrentonLi
 * @Description: dec
 */
import React,{Component} from "react";

export default class Navbar extends Component{
   render() {
      return(
          <nav className="navbar">
             <div className="list">
                <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/contact">Contact</a></li>
                   <li><a href="/about">About</a></li>
                   <li><a href="/login">Login</a></li>
                </ul>
             </div>
          </nav>
      )
   }
}