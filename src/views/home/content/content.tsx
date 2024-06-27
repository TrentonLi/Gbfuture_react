/**
 * @Author: TrentonLi
 * @Date: 2024/6/27
 * @LastEditors: TrentonLi
 * @Description: dec
 */
import {Col, Row,message} from "antd";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";
import {useState} from "react";
export default function Content(){
   const [messageApi,contextHolder] = message.useMessage()
   const fun = () =>{
      console.log(11111)
      messageApi.open({
         type: 'success',
         content: 'button success'
      }).then()
   }
   const [content,setContent] = useState('1')
   const setContentFun = (v:string) =>{
      setContent(v)
   }
   return(
       <>
          {contextHolder}
         <Row className="contentBox">
            <Col className="navigation" span={4}><h1>
               <LeftContent setContent={setContentFun} content={content} />
            </h1></Col>
            <Col className="mainContent" span={20}>
               <RightContent title={content} fun={fun}/>
            </Col>
         </Row>
       </>
   )
}