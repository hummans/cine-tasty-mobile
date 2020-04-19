import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components';

import { dark } from '../../../styles/themes';
import TabNavigatorItem from './TabNavigatorItem';

const item = {
  title: 'Home',
  activeIcon: 'home-variant',
  inactiveIcon: 'home-variant-outline',
};

const renderTabNavigatorItem = (isSelected: boolean, onPress = jest.fn()) => (
  <ThemeProvider
    theme={dark}
  >
    <TabNavigatorItem
      inactiveIcon={item.inactiveIcon}
      activeIcon={item.activeIcon}
      isSelected={isSelected}
      onPress={onPress}
      title="ItemTitle"
      width={12}
    />
  </ThemeProvider>
);

describe('Testing <TabNavigatorItem />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Testing the render', () => {
    it('should renders correctly', () => {
      const { queryByTestId } = render(renderTabNavigatorItem(true));

      expect(queryByTestId('button-wrapper')).not.toBeNull();

      expect(queryByTestId('item-title')).not.toBeNull();

      expect(queryByTestId('icon').props.name).toBe(item.activeIcon);
    });
  });

  describe('Testing the render with the selection-state', () => {
    it('should renders correctly when the item is selected', () => {
      const { queryByTestId } = render(renderTabNavigatorItem(true));

      expect(queryByTestId('button-wrapper')).not.toBeNull();

      expect(queryByTestId('icon').props.name).toEqual(item.activeIcon);

      expect(queryByTestId('icon').props.color).toEqual(dark.colors.primary);

      expect(queryByTestId('item-title').props.color).toEqual(dark.colors.primary);
    });

    it("should renders correctly when the item isn't selected", () => {
      const { queryByTestId } = render(renderTabNavigatorItem(false));

      expect(queryByTestId('button-wrapper')).not.toBeNull();

      expect(queryByTestId('icon').props.name).toEqual(item.inactiveIcon);

      expect(queryByTestId('icon').props.color).toEqual(dark.colors.inactiveWhite);

      expect(queryByTestId('item-title').props.color).toEqual(dark.colors.inactiveWhite);
    });
  });

  describe('Testing the press action', () => {
    it('should call the onPress() action when is pressed', () => {
      const onPress = jest.fn();

      const { queryByTestId } = render(renderTabNavigatorItem(true, onPress));

      fireEvent.press(queryByTestId('button-wrapper'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
