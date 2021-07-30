# puzzle_todo
Challenge for Puzzle: To-Do App in React Native

Requests where
As I user:
- I want to add a new task
- I want to change status between Completed or Pending by pressing on it
- I want to see my current tasks when I restart the app

Libraries used:
- styled-components // to create styles
- @react-native-picker/picker // for the Repeat and Remind pickers
- react-native-datepicker // for the calendar (Android) and spinner calendar (ios)
- react-hook-form // to handle form data and send it to context and storage
- @react-native-async-storage/async-storage // for storing the information and requiring it when restaring the app
- react-native-elements // for a better way of working with icons
- prop-types // to handle props

TO START THE APP IN IOS:
- npm install
- npx pod install
- npx react-native run-ios

TO START THE APP IN ANDROID:
- npm install
- npx react-native run-android
