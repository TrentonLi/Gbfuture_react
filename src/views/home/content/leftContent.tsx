import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
   return {
      key,
      icon,
      children,
      label,
      type,
   } as MenuItem;
}

const items: MenuItem[] = [
   getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('日历', '4'),
   ]),

   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
   ]),

   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
   ]),
];
interface Props{
   content:string
   setContent:(v:string) =>void
}
export default function  LeftContent(props:Props){
   const [current, setCurrent] = useState('1');
   const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
      props.setContent(e.key)
   };
   const sty = {
      opacity:0.5
   }

   return (
       <>
          <Menu
              style={sty}
              theme={"dark"}
              onClick={onClick}
              defaultOpenKeys={['sub1']}
              selectedKeys={[current]}
              mode="inline"
              items={items}
          />
       </>
   );
};