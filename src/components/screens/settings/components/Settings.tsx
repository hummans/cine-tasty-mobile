import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Text = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: CircularStd-Black;
`;

const Settings = () => (
  <Wrapper>
    <Text>Settings</Text>
  </Wrapper>
);

export default Settings;
