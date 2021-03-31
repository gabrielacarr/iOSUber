<b>My Task's on the fly + References:</b>

- [x] Customize Maps
- [x] Customize Google Places Autocomplete - User location (Realtime)
- [x] Nearby places suggestions
- [x] Basic Navigation
- [x] Drawer Navigation (Hamburger menu)
- [x] AWS Setup
- [ ] Cognito Authentication
- [ ] Implement DynamoDB
- [ ] Post confirmation Lambda Trigger
- [ ] AppSync
- [ ] Connect API + database (GraphQL)
- [ ] Deploy API
- [ ] Connect fronted

#### Addt'l:

- [ ] Update ReadMe with new styles
- [ ] Attach case study
- [ ] Driver App
- [ ] Connect Driver + User

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
- Update the dark mode as reusable component

<details>
  <summary>Click to expand for Resources + installation steps</summary>
<b>iOS Resources:</b>

([React Native Navigation](https://reactnavigation.org/docs/getting-started))

```

npm install @react-navigation/native
// Library installation

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
// Install dependencies

// app + cd ios/
npx pod-install
// Once library and API are enabled, install pods

// cd..
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
<details>
  <summary>Click to expand for Resources + installation steps</summary>
<b>iOS Resources:</b>

([React Native Drawer Navigation](https://reactnavigation.org/docs/drawer-based-navigation/))

```

npm install @react-navigation/drawer

import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
// Then insert in app.js to initialize (or corresponding file)
```

</details>

<hr>
<b> AWS Amplify Setup </b>

- Install and configure the Amplify CLI
- Setup fullstack project
- Connect to AWS
<details>
  <summary>Click to expand for Resources + installation steps</summary>
<b>iOS Resources:</b>

([Documentation for installation](https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native))

<details><summary>Prerequisites for CLI</summary>

```

npm install -g @aws-amplify/cli
// sudo since it is installed globally

npx amplify configure
// sign into AWS console

// Amazon IAM creation will display:
Specify the AWS Region
? region:  # Your preferred region
Specify the username of the new IAM user:
? user name:  # User name for Amplify IAM user
Complete the user creation using the AWS console



// provide 'accessKeyId` + `secretAccessKey`
// prompts that display:
Enter the access key of the newly created user:
? accessKeyId:  # YOUR_ACCESS_KEY_ID
? secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
? Profile Name:  # (default)

Successfully set up the new user.

```

</details>
<details>
<summary>Initialize Amplify</summary>

```
cd Uber // cd into project name

npx amplify init


// Install Amplify libraries
npm install aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo

npx pod-install // cd iOS


cd Uber // return to project
// import
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
```

</details>

</details>

<hr>
<b> Authentication </b>

- Install
- Setup
- Connect
<details>
  <summary>Click to expand for Resources + installation steps</summary>
<b>iOS Resources:</b>

```
npx amplify add auth
```

- [ ] Manual configuration
- [x] Lambda Triggers: Post confirmation // locally
- [ ] Create module
- [ ] Configure App.js

</details>
