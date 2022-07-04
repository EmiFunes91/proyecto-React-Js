// React and react router imports
import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// MUI imports
import { AppBar, Box, Toolbar, Container } from '@mui/material'
// Site components imports
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import DesktopNavButton from '../DesktopNavButton/DesktopNavButton';
import Logo from '../Logo/Logo';
import Brand from '../Brand/Brand';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
  const {prodsInCart} = useContext(CartContext)
  return (
    <AppBar className='NavBar' position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Brand />
            <HamburgerMenu />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <DesktopNavButton link={'/categorias/hombre'}>
              Hombre
            </DesktopNavButton>
            <DesktopNavButton link={'/categorias/mujer'}>
              Mujer
            </DesktopNavButton>
            <DesktopNavButton link={'/categorias/accesorios'}>
              Accesorios
            </DesktopNavButton>
            <DesktopNavButton link={'/ordenes'}>
              Mis Órdenes
            </DesktopNavButton>
          </Box>
          {(prodsInCart > 0) && (<Link to='/cart'><CartWidget /></Link>)}
        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default NavBar;





