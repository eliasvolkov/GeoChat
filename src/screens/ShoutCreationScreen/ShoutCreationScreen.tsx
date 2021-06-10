import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  Container,
  StyledButton,
  StyledCarousel,
} from './ShoutCreationScreen.styles';
import {submitShoutButton} from '../../assets';
import {Shout} from '../../components/Shout/Shout';
import {SCREEN_WIDTH} from '../../constants/layout';
import {KeyboardAvoidingView} from 'react-native';
import {useMst} from '../../stores/RootStore';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/screens';
import {SHOUTS} from '../../constants/shoutsModule';

const data = Object.keys(SHOUTS);

export const ShoutCreationScreen = observer(() => {
  const navigation = useNavigation();
  const [shoutText, setShoutText] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const {shoutsStore} = useMst();

  const onSubmit = useCallback(() => {
    shoutsStore.submitCast(
      {
        imageName: data[activeIndex],
        text: shoutText || data[activeIndex],
      },
      () => navigation.navigate(SCREENS.MAIN),
    );
  }, [shoutText, activeIndex]);

  const onChane = useCallback((value: string) => {
    setIsChanged(true);
    setShoutText(value);
  }, []);

  const onSnapToItem = useCallback((slideIndex: number) => {
    setActiveIndex(slideIndex);
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <Shout
        image={SHOUTS[item]}
        value={isChanged ? shoutText : item}
        onChange={onChane}
      />
    );
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <Container keyboardShouldPersistTaps="always">
        <StyledCarousel
          data={data}
          itemWidth={320}
          renderItem={renderItem}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          windowSize={1}
          removeClippedSubviews
          horizontal
          sliderWidth={SCREEN_WIDTH}
          inactiveSlideScale={0.85}
          onSnapToItem={onSnapToItem}
        />

        <StyledButton onPress={onSubmit} image={submitShoutButton} />
      </Container>
    </KeyboardAvoidingView>
  );
});
