import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  Container,
  StyledButton,
  StyledCarousel,
} from './ShoutCreationScreen.styles';
import {
  bones,
  defaultShout,
  frame,
  love,
  movie,
  music,
  sport,
  submitShoutButton,
  vitrage,
} from '../../assets';
import {Shout} from '../../components/Shout/Shout';
import {SCREEN_WIDTH} from '../../constants/layout';
import {KeyboardAvoidingView} from 'react-native';

const SHOUTS = [
  {
    name: 'frame',
    image: frame,
  },
  {
    name: 'movie',
    image: movie,
  },
  {
    name: 'music',
    image: music,
  },
  {
    name: 'sport',
    image: sport,
  },
  {
    name: 'love',
    image: love,
  },
  {
    name: 'frame',
    image: defaultShout,
  },
  {
    name: 'movie',
    image: vitrage,
  },
  {
    name: 'music',
    image: bones,
  },
  {
    name: 'sport',
    image: sport,
  },
  {
    name: 'love',
    image: love,
  },
];

export const ShoutCreationScreen = observer(() => {
  const [shoutText, setShoutText] = useState('');
  const [isChanged, setIsChanged] = useState(false);

  const onChane = useCallback((value: string) => {
    setIsChanged(true);
    setShoutText(value);
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <Shout
        image={item.image}
        value={isChanged ? shoutText : item.name}
        onChange={onChane}
      />
    );
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <Container>
        <StyledCarousel
          data={SHOUTS}
          itemWidth={320}
          renderItem={renderItem}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          windowSize={1}
          removeClippedSubviews
          horizontal
          sliderWidth={SCREEN_WIDTH}
          inactiveSlideScale={0.85}
        />

        <StyledButton onPress={() => {}} image={submitShoutButton} />
      </Container>
    </KeyboardAvoidingView>
  );
});
