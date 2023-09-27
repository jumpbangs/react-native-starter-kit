# REACT-NATIVE-STARTER-KIT

A base starter kit for starting a development for react-native based application. The following application does not have expo package dependency
built alongside the following project. Redux is used as a state management by default.

To keep the overall application as minimal and basic there is no component library used.The overall setup for `linting` and `prettier` has been configured but
feel free to add your own configurations. There will a section to explain on the configuring the configurable aspect of the project.

Furthermore, the overall navigation is being handled using `react-navigation` and has been setup to run the basic navigation actions.
Boot-splash animation has been handled using using `react-native-bootsplash`, and has been setup to run on both android and ios devices.

The following documentation is divided in the following sections:

- Commands
- Packages used
- File Structure
- Setup
- Configurations

## Commands

| Commands     | Action                                                                                        |
| ------------ | --------------------------------------------------------------------------------------------- |
| yarn start   | Starts and runs the metro blunder for React Native                                            |
| yarn android | Requires `yarn start` to be running and runs the application on an android emulator or device |
| yarn ios     | Requires `yarn start` to be running and runs the application on an ios emulator or device     |
| yarn lint    | Runs lint script function                                                                     |

## Packages

These are the packages used in the following project, the following list is listed down as follows: `package-name : (version number)`

- react : (18.2.0)
- react-native : (0.72.1)
- react-native-blob-util : (0.18.3)
- @react-navigation/native : (^6.1.7)
- @react-navigation/native-stack : (^6.9.13)
- @reduxjs/tookit : (^1.9.5)
- react-native-safe-area-context : (^4.7.2)
- react-native-screens : (^3.25.0)
- react-redux : (^8.1.1)
- redux : (^4.2.1)
- redux-persist : (^6.0.0)
- redux-persist-filesystem-storage : (^4.2.0)
