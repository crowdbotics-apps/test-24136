import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList198211Navigator from '../features/NotificationList198211/navigator';
import Settings198210Navigator from '../features/Settings198210/navigator';
import Settings198202Navigator from '../features/Settings198202/navigator';
import UserProfile198200Navigator from '../features/UserProfile198200/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList198211: { screen: NotificationList198211Navigator },
Settings198210: { screen: Settings198210Navigator },
Settings198202: { screen: Settings198202Navigator },
UserProfile198200: { screen: UserProfile198200Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
