import styled from 'styled-components/native';
import {Button} from '../../components/Button/Button';
import Carousel from 'react-native-snap-carousel';
import {SCREEN_HEIGHT} from '../../constants/layout';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
  padding-bottom: 20px;
  padding-top: ${SCREEN_HEIGHT * 0.2}px;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledButton = styled(Button)`
  margin-top: auto;
  align-self: center;
`;

export const StyledCarousel = styled(Carousel).attrs({
  slideStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
})``;
