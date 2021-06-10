import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../constants/colors';
import {Text, TouchableOpacity} from 'react-native';

type Props = {};

export const TestScreen = memo(() => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const selectProduct = useCallback((index: number) => {
    setSelectedProduct(index);
  }, []);
  return (
    <Container>
      <HeaderRow>
        <TouchableOpacity>
          <Circle>
            <Text>X</Text>
          </Circle>
        </TouchableOpacity>

        <TouchableOpacity>
          <Restore>Restore</Restore>
        </TouchableOpacity>
      </HeaderRow>
      <TopCol>
        <Text>ICON</Text>
        <Title>unlock everything</Title>
      </TopCol>
      <FeatureWrapper>
        <Row>
          <CircleIcon />
          <FeatureText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FeatureText>
        </Row>
        <Row>
          <CircleIcon />
          <FeatureText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FeatureText>
        </Row>
        <Row>
          <CircleIcon />
          <FeatureText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </FeatureText>
        </Row>
      </FeatureWrapper>
      <Row>
        <TouchableOpacity onPress={() => selectProduct(0)}>
          <PriceBlock isSelected={selectedProduct === 0}>
            <PriceBlockTitle isSelected={selectedProduct === 0}>
              Weekly
            </PriceBlockTitle>
            <Trial>3 days trial, then</Trial>
            <PriceText isSelected={selectedProduct === 0}>$4.99/wk</PriceText>
          </PriceBlock>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectProduct(1)}>
          <PriceBlock isSelected={selectedProduct === 1}>
            <PriceBlockTitle isSelected={selectedProduct === 1}>
              Annual
            </PriceBlockTitle>
            <PriceText isSelected={selectedProduct === 1}>$39.99</PriceText>
          </PriceBlock>
        </TouchableOpacity>
      </Row>
      <Button>
        <ButtonText>Try for free & subscribe</ButtonText>
      </Button>

      <InfoText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        <UnderlinedText>Privacy Policy</UnderlinedText>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum."
      </InfoText>
      <StyledText>Hello world!</StyledText>
    </Container>
  );
});

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 24,
    paddingHorizontal: 20,
    flexGrow: 1,
    paddingBottom: 24,
    borderWidth: 1,
    backgroundColor: '#041d4e',
  },
})`
  background-color: ${COLORS.white};
  border-width: 1px;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
`;

const Circle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #575757;

  justify-content: center;
  align-items: center;
`;

const Restore = styled.Text`
  font-size: 16px;
  color: white;
`;

const TopCol = styled.View`
  align-items: center;
  height: 60px;
  justify-content: space-between;

  margin-top: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
`;

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

const FeatureWrapper = styled.View`
  margin-top: 50px;
`;

const CircleIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #ffffff;

  margin-right: 20px;
`;

const FeatureText = styled.Text`
  color: #bababa;
  flex: 1;
`;

interface IPriceBlock {
  isSelected: boolean;
}
const PriceBlock = styled.View<IPriceBlock>`
  width: 160px;
  border-radius: 16px;
  border-color: ${({isSelected}) => (isSelected ? 'orange' : 'white')};

  align-items: center;
  height: 120px;
  border-width: 1px;

  padding: 8px 6px;
`;

const PriceBlockTitle = styled.Text<IPriceBlock>`
  color: ${({isSelected}) => (isSelected ? 'orange' : 'white')};
  font-size: 16px;
`;

const Trial = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 16px;
`;

const PriceText = styled.Text<IPriceBlock>`
  color: ${({isSelected}) => (isSelected ? 'orange' : 'white')};
  font-size: 16px;
  text-transform: uppercase;

  margin-top: auto;
`;

const Button = styled.TouchableOpacity`
  background-color: #d2760e;
  padding: 16px;

  border-radius: 8px;

  margin-top: 24px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;

  margin: auto;
`;

const InfoText = styled.Text`
  color: gray;
  text-align: justify;
`;

const UnderlinedText = styled.Text`
  text-decoration: underline;
  text-decoration-color: gray;
`;

const StyledText = styled.Text`
  margin: auto;
`;
