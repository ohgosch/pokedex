import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const LogoLink = styled(Link)``;

export const Logo = styled.img``;

export const Title = styled.h1`
  font-size: 0;
  position: absolute;
  left: -999pc;
  top: -999pc;
`;
