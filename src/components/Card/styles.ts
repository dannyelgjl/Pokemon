import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${mvs(18)}px;
  margin-top: ${mvs(40)}px;
  border-radius: ${mvs(10)}px;

  background-color: ${({ theme }) => theme.colors.card};
`;

export const ContentPoke = styled.View`
  flex-direction: column;
`;

export const IDPoke = styled.Text`
  font-weight: bold;
  font-size: ${mvs(12)}px;

  color: ${({ theme }) => theme.colors.fontCard};
`;

export const PokeName = styled.Text`
  margin-top: ${mvs(2)}px;

  font-size: ${mvs(24)}px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.background}
`;

export const ContainerTypePoke = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.typePokeCard};
  width: ${mvs(70)}px;
  padding: ${mvs(6)}px;
  margin-top: ${mvs(6)}px;
`;

export const TypePoke = styled.Text`
  color: ${({ theme }) => theme.colors.background}
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-right: ${mvs(2)}px;
`;

export const Pokemon = styled.Image`
  width: ${mvs(120)}px;
  height:  ${mvs(120)}px;
 
  position: absolute;
  right: ${mvs(20)}px;
  bottom: ${mvs(30)}px;

  resize-mode: contain;
`;