import './index.scss'
import Header from "./header/header";
import Content from "./content/content";
export default function Index(){
   return(
       <>
         <div className="index">
            <div className="header">
               <Header />
            </div>
            <div className="content">
               <Content />
            </div>
         </div>
       </>
   )
}