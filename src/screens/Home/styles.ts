import styled from 'styled-components/native';
import { mvs } from 'react-native-size-matters'; 
import { STRINGS } from './strings';

export const Container = styled.View`
  flex: 1;
  padding: ${mvs(30)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${mvs(32)}px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${mvs(14)}px;
  margin-top: ${mvs(10)}px;
  color: ${({ theme }) => theme.colors.font}
`;

export const Search = styled.TextInput.attrs({
  placeholder: `${STRINGS.PLACE_HOLDER}`
})`
  width: 100%;
  height: ${mvs(50)}px;
  padding: ${mvs(10)}px;
  margin-vertical: ${mvs(30)}px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${mvs(8)}px;

  font-size: ${mvs(14)}px;
`;
