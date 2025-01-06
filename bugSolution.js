The most effective solution is to avoid using Expo Go for testing apps that rely on native modules.  Use EAS Build instead.  EAS Build will correctly handle the native module dependencies and allow the app to function correctly.   Here's how to set up EAS Build:

1.  Make sure you have an Expo account and are logged in.
2.  Initialize an EAS Build project using `eas build --platform ios --profile preview` (or `android`) 
3.  Follow the EAS Build prompts and build your app. 
4.  Test your app on a device or emulator.