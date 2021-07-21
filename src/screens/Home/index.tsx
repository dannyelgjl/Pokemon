import React from 'react';
import { Card } from '../../components';
import { STRINGS } from './strings';
import { Container, Title, SubTitle, Search } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>{STRINGS.TITLE}</Title>
      <SubTitle>
        {STRINGS.SUB_TITLE}
      </SubTitle>

      <Search />

      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default Home;