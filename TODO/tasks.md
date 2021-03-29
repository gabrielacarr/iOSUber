<b>My Task's + References:</b>

- Customize Maps
- Customize Google Places Autocomplete - User location (Realtime)
- Nearby places suggestions
- Basic Navigation
- Drawer Navigation (Hamburger menu)

<hr>

<b>Maps: Marker direction</b>

- Rotate the cars in the direction of their movement

<hr>

<b>Places Autocomplete</b>:

- Places Autocomplete styles
- Places Autocomplete Current Location
  -- Install Geo location
  -- Request Permission to use Location
  -- Use the location in Places autocomplete component - Add Predefined Location (HOME, WORK)

<details>
  <summary>Click to expand for Resources + installation steps</summary>
<b>iOS Resources:</b>

([React Native Google Places Library Autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete/blob/master/README.md))

```
npm install @react-native-community/geolocation --save
// Library installation
```

- Enable Google Places API Web Service + [Google Places API keys](https://developers.google.com/places/documentation/)

- Enable Billing for the project to the account

```
npx pod-install
// Once library and API are enabled, install pods
```

then,

```
npx react-native run-ios
// To rebuild
```

</details>

<hr>
<b> Navigation</b>

- Install React-Navigation library and follow the installation guide - Defined all the screens in a Stack Navigator
- Implement the Navigation between screens
- Send data between screens

<details>
  <summary>Click to expand for Resources + installation steps</summary>
<b>iOS Resources:</b>

([React Native Navigation](https://reactnavigation.org/docs/getting-started))

```
cd into ios  &&
npm install @react-navigation/native
// Library installation

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
// Install dependencies

npx pod-install
// Once library and API are enabled, install pods

npx react-native run-ios
// To rebuild


import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
// Then insert in app.js to initialize (or corresponding file)
```

</details>

<hr>
<b> Drawer Navigation </b>

- Install Drawer Navigation package
- Setup Basic Drawer Navigation
- Customize Drawer Navigation
