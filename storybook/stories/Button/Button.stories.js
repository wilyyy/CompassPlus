import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

//IMPORT COMPS FIRST
import LinkCompassCard from '../../../comps/LinkCompassCard';
import SignUpTransitCard from '../../../comps/SignUpTransitCard';
import TripPlannerTab from '../../../comps/TripPlannerTab';
import MobileCard from '../../../comps/CompassCardParent/CardManager';
import AddFundsTab from '../../../comps/CompassCardParent/CardManager/AddFunds';
import TransferBalanceTab from '../../../comps/CompassCardParent/TransferFunds';
import NotificationCard from '../../../comps/Profile/notificationCard';
import SupportCard from '../../../comps/Profile/supportCard';

//ADD COMPS IN STORYBOOK BELOW LIKE THIS
storiesOf('Button', module)
  //USUALLY GOES .add('label', () => <Comp />)
  .add('Add Compass Card', () => <LinkCompassCard />)
  .add('Transit Sign Up Card', () => <SignUpTransitCard />)
  .add('Trip Planner Tab', () => <TripPlannerTab />)
  .add('Mobile Card', () => <MobileCard />)
  .add('Add Funds Tab', () => <AddFundsTab />)
  .add('Transfer Balance Tab', () => <TransferBalanceTab />)
  .add('Notification Card', () => <NotificationCard />)
  .add('Support Card', () => <SupportCard />)

  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)