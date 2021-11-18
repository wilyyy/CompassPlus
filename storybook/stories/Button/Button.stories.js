import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

//IMPORT COMPS FIRST
import NavBar from '../../../comps/NavBar';
import LinkCompassCard from '../../../comps/Home/linkCompassCard';
import SignUpTransitCard from '../../../comps/SignUp/signUpTransitCard';
import TripPlannerTab from '../../../comps/TripPlanner/tripPlannerTab';

import MobileCard from '../../../comps/CompassCardParent/cardManager';
import AddFundsTab from '../../../comps/CompassCardParent/addFunds';
import TransferBalanceTab from '../../../comps/CompassCardParent/transferFunds';
import AutoReloadTab from '../../../comps/CompassCardParent/autoReload';
import MergeTab from '../../../comps/CompassCardParent/mergeCards';
import DeleteCard from '../../../comps/CompassCardParent/deleteCard';
import AddCardManager from '../../../comps/CompassCardParent/addCardManager';

import NotificationCard from '../../../comps/Profile/NotificationCard';
import SupportCard from '../../../comps/Profile/supportCard';
import ProfileCard from '../../../comps/Profile/profileCard';
import ProfileCardUpdate from '../../../comps/Profile/ProfileCardUpdate';
import NotificationPreferences from '../../../comps/Profile/NotificationPreferences';
import BalanceHistoryCard from '../../../comps/BalanceHistory/BalanceHistoryCard';
import TicketTab from '../../../comps/CompassCardParent/ticketSelTab';
import AmountTab from '../../../comps/CompassCardParent/amountSelTab';
import PaymentTab from '../../../comps/CompassCardParent/paymentSelTab';
import HomeCompassCard from '../../../comps/Home/homeCompassCard';
import SavedRidesIcon from '../../../comps/Home/savedRidesIcon';
import SavedRidesScroll from '../../../comps/Home/savedRidesScroll';
import SavedTripsCard from '../../../comps/TripPlanner/savedTripsCard';

//SCREENS
import PickDestinations from '../../../screens/Authentication/pickDestinations';
import PasswordChange from '../../../comps/Profile/PasswordChange';
import CompassCardScreen from '../../../screens/CompassCardScreen/mobileCard';
import SignUpTransitCardScroll from '../../../comps/SignUp/signUpTransitCardScroll';
import WhiteButton from '../../../comps/Global/whiteButton';
import HomeCard from '../../../comps/Home/homeCard';
import BalanceContainer from '../../../comps/Home/balanceContainer';
import MapHomeScreen from '../../../screens/TripPlanner/mapHome';
import HomeScreen from '../../../screens/Home/home';
import CardSwipeTest from '../../../screens/testSwipe';
import LoginPage from '../../../screens/Authentication/loginScreen';
import ProfileScreenNew from '../../../screens/Profile/ProfileScreenNew';
import CreateAccount from '../../../screens/Authentication/createAccount';


storiesOf('Comps', module)
  .add('NavBar', () => <NavBar />)
  .add('Add Compass Card', () => <LinkCompassCard />)
  .add('Mobile Card', () => <MobileCard />)
  .add('Add Funds Tab', () => <AddFundsTab />)
  .add('Transfer Balance Tab', () => <TransferBalanceTab />)
  .add('AutoReload Tab', () => <AutoReloadTab />)
  .add('Merge Cards Tab', () => <MergeTab />)
  .add('Delete Card', () => <DeleteCard />)
  .add('Add Card Manager', () => <AddCardManager />)
  .add('Notification Card', () => <NotificationCard />)
  .add('Support Card', () => <SupportCard />)
  .add('Profile Card', () => <ProfileCard />)
  .add('Notification Preferences', () => <NotificationPreferences />)
  .add('Balance History Card', () => <BalanceHistoryCard />)
  .add('Ticket Tabs', () => <TicketTab />)
  .add('Amount Tabs', () => <AmountTab />)
  .add('Payment Tabs', () => <PaymentTab />)
  .add('Pick Destinations', () => <PickDestinations />)
  .add('Change Password', () => <PasswordChange />)
  .add('Sign Up - Transit Card Scroll', () => <SignUpTransitCardScroll />)
  .add('Transit Sign Up Card', () => <SignUpTransitCard />)
  .add('Trip Planner Tab', () => <TripPlannerTab />)
  .add('White Button', () => <WhiteButton />)
  .add('Home Card', () => <HomeCard />)
  .add('Button Container', () => <BalanceContainer />)
  .add('Home Compass Card Container', () => <HomeCompassCard />)
  .add('Home - Saved Rides Icon', () => <SavedRidesIcon />)
  .add('Home - Saved Rides Scroll', () => <SavedRidesScroll />)
  .add('Saved Trips Card', () => <SavedTripsCard />)


  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)

storiesOf('Screens', module)
  .add('Profile Card Update', () => <ProfileCardUpdate />)
  .add('Profile Screen', () => <ProfileScreenNew />)
  .add('Pick Destinations', () => <PickDestinations />)
  .add('Compass Card Screen', () => <CompassCardScreen />)
  .add('TripPlanner - Map Home', () => <MapHomeScreen />)
  .add('Home Screen', () => <HomeScreen />)
  .add('Test Card Swipe', () => <CardSwipeTest />)
  .add('Login Screen', () => <LoginPage />)
  .add('Create Account', () => <CreateAccount />)



  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)