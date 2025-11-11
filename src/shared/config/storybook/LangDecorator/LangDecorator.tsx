import { Story } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTest';

export const LangDecorator = (story: () => Story) => <I18nextProvider i18n={i18nForTests}>{story()}</I18nextProvider>;
