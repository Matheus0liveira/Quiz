import React from 'react';
import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi'



import Text, { StyledA } from './styles';

const Custom404 = () => {

  return (
    <>
      <Text>This page not found  <span>{" :( "}</span> </Text>
      <Link href='/quiz'>
        <StyledA ><FiArrowLeft />Back to Quiz Page</StyledA>
      </Link>


    </>
  );
};


export default Custom404;