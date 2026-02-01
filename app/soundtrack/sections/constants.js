import IntroLeftContent from './Intro/LeftContent';
import IntroRightContent from './Intro/RightContent';
import AboutLeftContent from './About/LeftContent';
import AboutRightContent from './About/RightContent';
import FeaturesLeftContent from './Features/LeftContent';
import FeaturesRightContent from './Features/RightContent';
import ContactLeftContent from './Contact/LeftContent';
import ContactRightContent from './Contact/RightContent';

export const SECTIONS = [
  { id: 'intro', LeftContent: IntroLeftContent, RightContent: IntroRightContent },
  { id: 'about', LeftContent: AboutLeftContent, RightContent: AboutRightContent },
  { id: 'features', LeftContent: FeaturesLeftContent, RightContent: FeaturesRightContent },
  { id: 'contact', LeftContent: ContactLeftContent, RightContent: ContactRightContent },
];
