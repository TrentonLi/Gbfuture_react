import React from "react";
import './index.scss'
import '../../mock/mock'
import axios from "axios";
import {FloatButton, message,Button, Checkbox, Form, Input} from 'antd';
import {useHistory} from "react-router";

const onFinishFailed = (errorInfo: any) => {
   console.log('Failed:', errorInfo);
};

type FieldType = {
   username?: string;
   password?: string;
   remember?: string;
};

const Login: React.FC = () => {
   const history = useHistory()
   const [messageApi, contextHolder] = message.useMessage();
   const warning = () => {
      messageApi.open({
         type: 'warning',
         content: '等待后续开发!',
      }).then(r => {});
   };
   const onFinish = (values: any) => {
      axios({
         url:'/api/login/account',
         data:{
            username:values.username,
            password:values.password,
         },
         method:'post'
      }).then((res)=>{
         if(res.data.status===200){
            localStorage.setItem('user',values.username)
            setTimeout(() =>{
               history.replace('/index')
            },1000)
            messageApi.open({
               type:'success',
               content:'登陆成功'
            }).then(() =>{})
         }else if(res.data.status==='error'){
            messageApi.open({
               type:'warning',
               content:'用户名密码错误'
            }).then(() =>{})
         }
      })
   };
   return (
       <>
          {contextHolder}
          <div className="loginBox">
             <FloatButton onClick={() => warning()}/>
             <div className="form-container">
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 19 }}
                    style={{ maxWidth: 600,textAlign:"start" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                   <Form.Item<FieldType>
                       label="Username"
                       name="username"
                       className="custom-label"
                       rules={[{ required: true, message: 'Please input your username!' }]}
                   >
                      <Input />
                   </Form.Item>

                   <Form.Item<FieldType>
                       label="Password"
                       name="password"
                       className="custom-label"
                       rules={[{ required: true, message: 'Please input your password!' }]}
                   >
                      <Input.Password />
                   </Form.Item>

                   <Form.Item<FieldType>
                       name="remember"
                       valuePropName="checked"
                       wrapperCol={{ offset: 5, span: 19 }}
                   >
                      <Checkbox>Remember me</Checkbox>
                   </Form.Item>

                   <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
                      <Button type="primary" htmlType="submit">
                         Submit
                      </Button>
                   </Form.Item>
                </Form>
             </div>
          </div>
       </>
   );
};
export default Login
