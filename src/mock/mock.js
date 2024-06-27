/**
 * @Author: TrentonLi
 * @Date: 2024/6/27
 * @LastEditors: TrentonLi
 * @Description: dec
 */
// import axios from "axios";
import Mock from 'mockjs'

let data_success =
    {
        status:200,//表示账号密码正确，登录成功
        message:'success'
    };

let data_error =
    {
        status:'error',//表示账号密码错误，登录失败
        message: 'error'
    };
export default Mock.mock(
    '/api/login/account','post',
    (req)=>{
        // console.log(req)
        let req_data=JSON.parse(req.body)
        if(req_data.username==="admin" && req_data.password==='admin123'){
            return data_success;
        }
        return data_error;
    }
)