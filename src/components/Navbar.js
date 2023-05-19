import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const scrollToExercises = () => {
    scroll.scrollTo(1800, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>
          Home
        </Link>
        <ScrollLink
          to="exercises"
          smooth
          duration={500}
          style={{ textDecoration: 'none', color: '#3A1212', cursor: 'pointer' }}
          onClick={scrollToExercises}
        >
          Exercises
        </ScrollLink>
      </Stack>
    </Stack>
  );
};

export default Navbar;
