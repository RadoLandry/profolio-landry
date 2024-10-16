import React from 'react';
import CardFormation from './CardFormation';
import CardProject from './CardProject';
import CardTechno from './CardTechno';
function Formations() {
  return (
    <div className='flex justify-center gap-5 -mt-52 pb-10 mx-10 flex-wrap md:flex-nowrap'>
      <CardFormation/>
      <CardProject/>
      <CardTechno/>
    </div>
  );
}

export default Formations;