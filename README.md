# CompassPlus

An all-in-one native mobile application for Translink's Compass Card system. This application uses an Expo / React Native, PHP and MySQL stack. It also utilizes Firebase for user email and google authentication. The server side source code can be found here -> [CompassPlus Serverside](https://github.com/wilyyy/CompassPlus-Serverside)

## Previews
Tap to Scan            |  Trip Planner
:-------------------------:|:-------------------------:
<img src="https://im3.ezgif.com/tmp/ezgif-3-f070a17c6e.gif" width="300" height="650" />  |  <img src="https://im3.ezgif.com/tmp/ezgif-3-ef8cc3a83d.gif" width="300" height="650" />

## Features 
- Create Account / Log In
- Input in compass card information and tap card to pay (Mockup)
- Load fund onto compass card and store temporary bus tickets, available for tap
- Trip Planner : Put in a starting & ending location and see the closes transit direction from point a to b
- Add and save address locations
- User profile

## Key React Dependencies Used
- Google API Services (Maps, Directions, Places)
- Reanimated 2 Animation API
- Expo Haptics (for vibration when tapping card)
- React Native Elements UI Framework

## Possible Implementations
- Use translink API to store legitimate compass card credentials
- E transfer funds between two users
- Leaderboard system
