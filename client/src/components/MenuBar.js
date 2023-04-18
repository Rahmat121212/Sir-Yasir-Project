import { Anchor, Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  
  return (
    <>
  <Menu mode="horizontal" items={[
          {
            label: 'part-1',
            href: 'https://www.google.com/',
            title: 'Part 1',
          }]}></Menu>
 
  </>
  )
  
};
export default MenuBar;