import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";
import Login from "../views/Login";
import homeView from "../views/home/index";
import User from "../views/User/index";
import {RouteConfig} from "react-router-config";

const routes: RouteConfig = [
   {
      path: '/',
      exact: true,
      component: Home
   },
   {
      path: '/contact',
      exact: true,
      component: Contact
   },
   {
      path: '/about',
      exact: true,
      component: About
   }, {
      path: '/login',
      exact: true,
      component: Login
   }, {
      path: '/index',
      exact: true,
      component: homeView
   }, {
      path: '/user',
      exact: true,
      component: User
   }
]

export default routes