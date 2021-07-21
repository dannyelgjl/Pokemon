import React from 'react';
import pikachuImage from '../../assets/images/pikachu.png';

import { Container, ContentPoke, IDPoke, PokeName, ContainerTypePoke, TypePoke, Icon, Pokemon } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <ContentPoke>
        <IDPoke>#014</IDPoke>
        <PokeName>Pikachu</PokeName>

        <ContainerTypePoke>
          <Icon color="#FFF" size={20} name="lightning-bolt" />
          <TypePoke>Eletric</TypePoke>
        </ContainerTypePoke>

      </ContentPoke>

      <Pokemon source={pikachuImage} />
    </Container>
  );
}

export default Card;