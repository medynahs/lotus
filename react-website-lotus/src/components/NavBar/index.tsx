import {
    Title
  } from './styles';

export interface NavBarProps {
  title?: string
}

function NavBar({ title}: NavBarProps) {
  return (
    <>
       <Title>{title}</Title>
    </>
  );
}

export default NavBar;

