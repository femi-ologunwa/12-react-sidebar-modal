import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {
   const data = useContext(AppContext);
   console.log(data); //renders 'Hello' from context.js

   return (
      <main>
         <button className='sidebar-toggle'>
            <FaBars />
         </button>
         <button className='btn'>show modal</button>
      </main>
   );
};

export default Home;
