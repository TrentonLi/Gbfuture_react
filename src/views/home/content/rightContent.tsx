/**
 * @Author: TrentonLi
 * @Date: 2024/6/27
 * @LastEditors: TrentonLi
 * @Description: dec
 */
import {Button} from 'antd'
import MyComp from '../../../components/subComponent'
import React from 'react';
import type { Dayjs } from 'dayjs';
import { Calendar,theme } from 'antd';
import type { CalendarProps } from 'antd';
interface Props{
   title:string
   fun:() => void
}
// 第一个函数组件
function SubComponent1(props:any) {
   return <h1>{props.tit}</h1>;
}
// 第二个函数组件
function SubComponent2(props:any) {
   return <h1>{props.tit}</h1>;
}
function SubComponent3(props:any) {
   return <h1>{props.tit}</h1>;
}
const SubComponent4: React.FC = () => {
   const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
      console.log(value.format('YYYY-MM-DD'), mode);
   };
   const { token } = theme.useToken();
   const wrapperStyle: React.CSSProperties = {
      width: 1100,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
   };
   return (
       <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
       </div>
   );
};
export default function RightContent(props: Props){
   let selectedComponent;
   switch (props.title) {
      case '1':
         selectedComponent = <SubComponent1 tit={`我是第一个子组件${props.title}`} />;
         break;
      case '2':
         selectedComponent = <SubComponent2 tit={`我是第二个子组件${props.title}`} />;
         break;
      case '3':
         selectedComponent = <SubComponent3 tit={`我是第三个子组件${props.title}`}/>;
         break;
      case '4':
         selectedComponent = <SubComponent4/>
         break;
      default:
         selectedComponent = <MyComp tit={`我是第${props.title}个不会react的子组件`}/>;
   }
   return(
       <>
          {
             props.title === '4' ?
                 <>
                    <h1>日历</h1>
                 </>
                 :
                 <>
                    <Button onClick={props.fun} type="primary">Button</Button>
                    <h1>内容{props.title}</h1>
                 </>
          }
          {selectedComponent}
       </>
   )
}