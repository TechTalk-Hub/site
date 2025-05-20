import {  motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

// define the navigation list with names and paths
const NAV_LIST = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '博文',
    path: '/blog'
  },
  {
    name: '周报',
    path: '/weekly'
  }
]

// This component renders a navigation list with links to different sections of the website.
export function NavList(props: { pathname?: string }) {
  const { pathname = '/' } = props;
  const [selectedPath, setSelectedPath] = useState(pathname);
  const handlePathChange = (path: string) => {
    setSelectedPath(path);
    console.log('path', path);
  };
  return (
    <nav>
      <ul className='flex space-x-2'>
        {NAV_LIST.map(item => (
          <motion.li
          className='relative text-gray-700 px-2 py-1 hover:text-green-700 transition duration-300' 
          key={item.path} 
          onMouseEnter={() => handlePathChange(item.path)} 
          onMouseLeave={() => handlePathChange(pathname)}>
            <a className='px-1' href={item.path}>
              {item.name}
              
            </a>
            <AnimatePresence>
            {
              selectedPath === item.path && (
                <motion.div
                  className='h-[2px] bg-green-700 rounded-2xl absolute bottom-0 left-0 right-0'
                  initial={{ scaleX: 0.5 }}
                  animate={{ scaleX: 1, transition: { duration: 0.15 } }}
                  exit={{ scaleX: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  layoutId="underline"
                  id="underline"
                />
              )
            }
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}