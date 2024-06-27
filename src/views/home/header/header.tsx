/**
 * @Author: TrentonLi
 * @Date: 2024/6/27
 * @LastEditors: TrentonLi
 * @Description: dec
 */
import home from '../../../assets/image/首页.png'
import {Col, Row, Avatar, Space, Tooltip, Popover} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {useHistory} from "react-router";
import './header.scss'
export default function Header(){
   const history = useHistory()
   const content = (
       <div>
          <div className="cursor" onClick={() =>{
             history.push('/user')
          }}>查看用户信息</div>
          <div className="cursor" onClick={() =>{
             history.replace('/')
          }}>退出</div>
       </div>
   );
   const user = localStorage.getItem('user')
   return(
       <>
         <div className="headerbox" style={{width:'100%',height:'50px'}}>
            <Row>
               <Col span={22}>
                  <div style={{display:"flex"}}>
                     <div className="logo">
                        <img src={home} alt=""/>
                     </div>
                     <div className="tit">我是React</div>
                  </div>
               </Col>
               <Col span={2}>
                  <div className="right">
                     <Space className="mine" wrap size={16}>
                        <Popover content={content} trigger="click">
                           <Tooltip title={user}>
                              <Avatar shape="square" size={50} icon={<UserOutlined />} />
                           </Tooltip>
                        </Popover>
                     </Space>
                  </div>
               </Col>
            </Row>
         </div>
       </>
   )
}