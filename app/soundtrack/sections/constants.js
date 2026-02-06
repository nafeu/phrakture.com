import IntroLeftContent from './Intro/LeftContent';
import IntroRightContent from './Intro/RightContent';
import WhatIveWrittenForGamesLeftContent from './WhatIveWrittenForGames/LeftContent';
import WhatIveWrittenForGamesRightContent from './WhatIveWrittenForGames/RightContent';
import HowIWorkLeftContent from './HowIWork/LeftContent';
import HowIWorkRightContent from './HowIWork/RightContent';
import PricingPackagesLeftContent from './PricingPackages/LeftContent';
import PricingPackagesRightContent from './PricingPackages/RightContent';
import GetInTouchLeftContent from './GetInTouch/LeftContent';
import GetInTouchRightContent from './GetInTouch/RightContent';

export const SECTIONS = [
  {
    id: 'intro',
    LeftContent: IntroLeftContent,
    RightContent: IntroRightContent,
  },
  {
    id: 'what-ive-written',
    LeftContent: WhatIveWrittenForGamesLeftContent,
    RightContent: WhatIveWrittenForGamesRightContent,
  },
  {
    id: 'how-i-work',
    LeftContent: HowIWorkLeftContent,
    RightContent: HowIWorkRightContent,
  },
  {
    id: 'pricing',
    LeftContent: PricingPackagesLeftContent,
    RightContent: PricingPackagesRightContent,
  },
  {
    id: 'get-in-touch',
    LeftContent: GetInTouchLeftContent,
    RightContent: GetInTouchRightContent,
  },
];
