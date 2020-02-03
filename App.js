import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

// Some guidance (Note, these videos are from React Navigation 2 and my robust example below is up to date with React Navigation 3's (React Navigation 4 in this case)'s syntax, installation protocol and behavior, but the logic behind these videos remains intact.)
// https://www.youtube.com/watch?v=w24FE9PZpzk
// https://www.youtube.com/watch?v=kBKRH2zGwts
// https://www.youtube.com/watch?v=MePfTc_PgzQ

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer' // createDrawerNavigator isn't part of the main react-navigation library and needs to be imported from react-navigation-drawer
import { createBottomTabNavigator } from 'react-navigation-tabs' // createBottomTabNavigator isn't part of the main react-navigation library and needs to be imported from react-navigation-stack
import { createStackNavigator } from 'react-navigation-stack' // createStackNavigator isn't part of the main react-navigation library and needs to be imported from react-navigation-stack

// Do: expo install react-navigation react-navigation-drawer react-navigation-tabs react-navigation-stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view


// IN A REAL USE CASE THIS FILE WOULD CONTAIN ONLY THIS APP COMPONENT AND THE NAVIGATION ROUTES AT THE BOTTOM OF THE PAGE. EACH OF THE COMPONENTS AFTER APP WOULD EACH BE IN THEIR OWN FILES IN A COMPONENTS FOLDER.

const App = () => {
  return (
     <LandingScreen/>
  );
}

export default App




/* BEGIN COMPONENTS (IN A REAL USE CASE THESE WOULD EACH BE IN SEPERATE FILES) */

const WelcomeScreen = props => { //Gives you the option to Login or to Sign Up.
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>WelcomeScreen</Text>
            <Button title="Login" onPress={() => props.navigation.navigate('Dashboard')}/>
            <Button title="Sign Up" onPress={() => alert('button pressed')}/>
        </View>
    )
}

const DashboardScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>DashboardScreen</Text>
        </View>
    )
}

const About = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>AboutScreen</Text>
        </View>
    )
}

const FiveA = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You are on 5A</Text>
            <Button title='Go to 5B' onPress={() => {
                props.navigation.navigate('FiveB')
            }}/>
        </View>
    )
}

const FiveB = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 5B</Text>
            <Button title='Go to 5C' onPress={() => {
                props.navigation.navigate('FiveC')
            }}/>
        </View>
    )
}

const FiveC = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 5C</Text>
            <Button title='Go to 5D' onPress={() => {
                props.navigation.navigate('FiveD')
            }}/>
        </View>
    )
}

const FiveD = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 5D</Text>
            <Button title='Go to 5E' onPress={() => {
                props.navigation.navigate('FiveE')
            }}/>
        </View>
    )
}

const FiveE = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 5E, final destination.</Text>
        </View>
    )
}

const FourA = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You are on 4A</Text>
            <Button title='Go to 4B' onPress={() => {
                props.navigation.navigate('FourB')
            }}/>
        </View>
    )
}

const FourB = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 4B</Text>
            <Button title='Go to 4C' onPress={() => {
                props.navigation.navigate('FourC')
            }}/>
        </View>
    )
}

const FourC = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 4C</Text>
            <Button title='Go to 4D' onPress={() => {
                props.navigation.navigate('FourD')
            }}/>
        </View>
    )
}

const FourD = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 4D</Text>
            <Button title='Go to 4E' onPress={() => {
                props.navigation.navigate('FourE')
            }}/>
        </View>
    )
}

const FourE = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 4E, final destination.</Text>
        </View>
    )
}

const ThreeA = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You are on 3A</Text>
            <Button title='Go to 3B' onPress={() => {
                props.navigation.navigate('ThreeB')
            }}/>
        </View>
    )
}

const ThreeB = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 3B</Text>
            <Button title='Go to 3C' onPress={() => {
                props.navigation.navigate('ThreeC')
            }}/>
        </View>
    )
}

const ThreeC = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 3C</Text>
            <Button title='Go to 3D' onPress={() => {
                props.navigation.navigate('ThreeD')
            }}/>
        </View>
    )
}

const ThreeD = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 3D</Text>
            <Button title='Go to 3E' onPress={() => {
                props.navigation.navigate('ThreeE')
            }}/>
        </View>
    )
}

const ThreeE = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 3E, final destination.</Text>
        </View>
    )
}

const TwoA = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You are on 2A</Text>
            <Button title='Go to 2B' onPress={() => {
                props.navigation.navigate('TwoB')
            }}/>
        </View>
    )
}

const TwoB = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 2B</Text>
            <Button title='Go to 2C' onPress={() => {
                props.navigation.navigate('TwoC')
            }}/>
        </View>
    )
}

const TwoC = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 2C</Text>
            <Button title='Go to 2D' onPress={() => {
                props.navigation.navigate('TwoD')
            }}/>
        </View>
    )
}

const TwoD = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 2D</Text>
            <Button title='Go to 2E' onPress={() => {
                props.navigation.navigate('TwoE')
            }}/>
        </View>
    )
}

const TwoE = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 2E, final destination.</Text>
        </View>
    )
}

const OneA = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>You are on 1A</Text>
            <Button title='Go to 1B' onPress={() => {
                props.navigation.navigate('OneB')
            }}/>
        </View>
    )
}

const OneB = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 1B</Text>
            <Button title='Go to 1C' onPress={() => {
                props.navigation.navigate('OneC')
            }}/>
        </View>
    )
}

const OneC = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 1C</Text>
            <Button title='Go to 1D' onPress={() => {
                props.navigation.navigate('OneD')
            }}/>
        </View>
    )
}

const OneD = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 1D</Text>
            <Button title='Go to 1E' onPress={() => {
                props.navigation.navigate('OneE')
            }}/>
        </View>
    )
}

const OneE = props => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are on 1E, final destination.</Text>
        </View>
    )
}

/* END COMPONENTS (IN A REAL USE CASE THOSE WOULD HAVE EACH BEEN IN SEPERATE FILES) */









/* END NAVIGATION ROUTES (BEGIN IS FURTHER DOWN) */

const Five = createStackNavigator({ //11) Page Five is set to a stack navigator with 5 pages A - E.
    FiveA: {
        screen: FiveA
    },
    FiveB: {
        screen: FiveB
    },
    FiveC: {
        screen: FiveC
    },
    FiveD: {
        screen: FiveD
    },
    FiveE: {
        screen: FiveE
    }
})

const Four = createStackNavigator({ //10) Page Four is set to a stack navigator with 5 pages A - E.
    FourA: {
        screen: FourA
    },
    FourB: {
        screen: FourB
    },
    FourC: {
        screen: FourC
    },
    FourD: {
        screen: FourD
    },
    FourE: {
        screen: FourE
    }
})

const Three = createStackNavigator({ //9) Page Three is set to a stack navigator with 5 pages A - E.
    ThreeA: {
        screen: ThreeA
    },
    ThreeB: {
        screen: ThreeB
    },
    ThreeC: {
        screen: ThreeC
    },
    ThreeD: {
        screen: ThreeD
    },
    ThreeE: {
        screen: ThreeE
    }
})

const Two = createStackNavigator({ //8) Page Two is set to a stack navigator with 5 pages A - E.
    TwoA: {
        screen: TwoA
    },
    TwoB: {
        screen: TwoB
    },
    TwoC: {
        screen: TwoC
    },
    TwoD: {
        screen: TwoD
    },
    TwoE: {
        screen: TwoE
    }
})

const One = createStackNavigator({ //7) Page One is set to a stack navigator with 5 pages A - E.
    OneA: {
        screen: OneA
    },
    OneB: {
        screen: OneB
    },
    OneC: {
        screen: OneC
    },
    OneD: {
        screen: OneD
    },
    OneE: {
        screen: OneE
    }
})

const DashboardTabNavigator = createBottomTabNavigator({ //6) Inside our DashboardTabNavigator we have 5 tabs, each of which are a stack navigator with 5 pages A - E. The navigation options we set forth dictate that the headerTitle of each tab should be the name of the routes set forth in the DashboardTabNavigator.
    One,
    Two,
    Three,
    Four,
    Five
}, {
    navigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName
        }
    }
})

const DashboardStackNavigator = createStackNavigator({ //5) ...and there's only one screen in that DashboardStackNavigator which is a tab navigator by itself. We configure default navigation options as the second object passed to createStackNavigator which in this case dictate the icon to pull the drawer and that it should be flush right.
    DashboardTabNavigator: DashboardTabNavigator
}, {
    defaultNavigationOptions: ({navigation}) => {
        return {
            headerRight: () => (
                <Icon style={{paddingRight: 10}}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu' size={30}/>
            )
        }
    }
})

const AboutStackNavigator = createStackNavigator({ //4) ...and there's only one screen in that AboutStackNavigator which is the About page. We configure default navigation options as the second object passed to createStackNavigator which in this case dictate the icon to pull the drawer and that it should be flush right.
    About: About
}, {
    defaultNavigationOptions: ({navigation}) => {
        return {
            headerRight: () => (
                <Icon style={{paddingRight: 10}}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu' size={30}/>
            )
        }
    }
})

const AppDrawerNavigator = createDrawerNavigator({ //3) Then we create our AppDrawerNavigator and set it equal to our DashboardStackNavigator, so that we can have a common header from which we can access the drawer, and our AboutStackNavigator so that we can have a common header there too...
    Dashboard: {screen: DashboardStackNavigator},
    About: {screen: AboutStackNavigator}
})

const WelcomeAndDrawer = createSwitchNavigator({ //2) Then we then create a switch navigator called WelcomeAndDrawer and set it equal to our future WelcomeScreen and AppDrawerNavigator
    Welcome: {screen: WelcomeScreen},
    Dashboard: {screen: AppDrawerNavigator}
})

const LandingScreen = createAppContainer(WelcomeAndDrawer) //1) We start from the bottom and create an app container called LandingScreen and set it equal to our soon to exist WelcomeAndDrawer switch navigator.

/* BEGIN NAVIGATION ROUTES (END IS FURTHER UP) */
