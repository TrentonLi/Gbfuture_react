import {Button,Row,Col} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useHistory} from "react-router";
import './index.scss'
import {useState} from "react";
export default function User() {
   const his = useHistory()
   const Back = (() =>{
      his.goBack()
   })
   const [isShow,setIsShow] = useState(false)
   const changeShow = () =>{
      setIsShow(!isShow)
   }
   return(
       <>
          <div onClick={Back} className="back">
             <Button type={"primary"}> <ArrowLeftOutlined /></Button>
          </div>
          <h1>用户信息</h1>
          <h2>等待后续开发....</h2>
          <div className="userContent">
             <Row>
                <Col className="contentCol" span={6}>名称</Col>
                <Col className="contentCol" span={18}>内容</Col>
             </Row>
             <Row>
                <Col className="contentCol" span={6}>账号</Col>
                <Col className="contentCol" span={18}>admin</Col>
             </Row>
             <Row>
                <Col className="contentCol" span={6}>密码</Col>
                <Col className="contentCol" span={18}>
                   {isShow ? <span className="cipher" onClick={changeShow}>admin123</span> : null}
                   {!isShow ? <span className="cipher" onClick={changeShow}>******</span> : null}
                </Col>
             </Row>
          </div>

       </>
   )
}