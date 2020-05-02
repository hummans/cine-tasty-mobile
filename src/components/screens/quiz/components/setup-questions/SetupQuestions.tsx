import React from 'react';
import {
  SafeAreaView, FlatList, Text, View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';

import CustomModal from 'components/common/custom-modal/CustomModal';
import RoundedButton from 'components/common/RoundedButton';

import { QuizStackParams } from '../../routes/route-params-types';
import NumberOfQuestions from './NumberOfQuestionts';
import useSetupQuestions from './useSetupQuestions';
import DropdownOption from './DropdownOption';
import OptionListItem from './OptionListItem';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
  padding-bottom: ${({ theme }) => theme.metrics.getWidthFromDP('10%')}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RoundedButtonWrapper = styled(View)`
  align-items: center;
`;

const LineDivider = styled(View)`
  width: 100%;
  height: 1.8px;
  background-color: #f2f2f2;
`;

const Label = styled(Text)`
  margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('6.5%')}px;
  margin-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
  font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
  font-family: CircularStd-Bold;
  color: ${({ theme }) => theme.colors.text};
`;

type QuizScreenNavigationProp = StackNavigationProp<QuizStackParams, 'SETUP_QUESTIONS'>;

type Props = {
  navigation: QuizScreenNavigationProp;
};

const SetupQuestions = ({ navigation }: Props) => {
  const {
    indexLastOptionSelected,
    onPressOptionDropdown,
    setNumberOfQuestions,
    questionDifficulty,
    numberOfQuestions,
    questionCategory,
    onSelectOption,
    onPressSelect,
    modalMessage,
    onCloseModal,
    questionType,
    isModalOpen,
    options,
    t,
  } = useSetupQuestions();

  const onPressStartQuiz = () => {
    navigation.navigate('QUESTIONS', {
      difficulty: questionDifficulty,
      category: questionCategory,
      type: questionType,
      numberOfQuestions,
    });
  };

  return (
    <Wrapper>
      <View>
        <Label>{t('translations:quiz:difficulty')}</Label>
        <DropdownOption
          onPress={() => onPressOptionDropdown('DIFFICULTY')}
          selectedOption={questionDifficulty}
        />
        <Label>{t('translations:quiz:category')}</Label>
        <DropdownOption
          onPress={() => onPressOptionDropdown('CATEGORY')}
          selectedOption={questionCategory}
        />
        <Label>{t('translations:quiz:type')}</Label>
        <DropdownOption
          onPress={() => onPressOptionDropdown('TYPE')}
          selectedOption={questionType}
        />
        <Label>{t('translations:quiz:numberOfQuestions')}</Label>
        <NumberOfQuestions
          onSetNumberQuestions={setNumberOfQuestions}
          numberOfQuestions={numberOfQuestions}
        />
      </View>
      <SafeAreaView>
        <RoundedButtonWrapper>
          <RoundedButton
            text={t('translations:quiz:startButton')}
            onPress={onPressStartQuiz}
          />
        </RoundedButtonWrapper>
      </SafeAreaView>
      {isModalOpen && (
        <CustomModal
          footerText={t('translations:quiz:modalSelectText')}
          onPressSelect={onPressSelect}
          headerText={modalMessage}
          onClose={onCloseModal}
        >
          <FlatList
            renderItem={({ item, index }) => (
              <OptionListItem
                isSelected={indexLastOptionSelected === index}
                onPress={() => onSelectOption(index)}
                title={item}
              />
            )}
            ItemSeparatorComponent={() => <LineDivider />}
            keyExtractor={(item) => item}
            testID="options-list"
            data={options}
          />
        </CustomModal>
      )}
    </Wrapper>
  );
};

export default SetupQuestions;
