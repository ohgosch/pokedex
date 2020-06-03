import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';
import { Box } from 'visual/styles/Box';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled(Wrapper)`
  margin-top: 45px;
`;

export const Content = styled(Box)`

`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Staatliches';
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(22)};
  line-height: ${pxToRem(27)};
  color: ${COLORS.black};
  order: 2;
  cursor: default;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  order: 1;
  margin-right: 12px;

  img:nth-child(2) {
    opacity: 0;
  }

  &:hover {
    img:nth-child(1) {
      opacity: 0;
    }

    img:nth-child(2) {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  transition: .5s ease;
`;

export const Details = styled.div`
  display: grid;
  margin-top: 35px;
  grid-gap: ${pxToRem(10)};
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const DetailTitle = styled.h3`
  text-align: right;
  font-family: 'Staatliches';
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(22)};

  &:after {
    content: ':';
  }
`;

export const DetailContent = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(14)};
  color: ${COLORS.red};
  padding-left: 10px;
`;

export const LoaderWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
`;
