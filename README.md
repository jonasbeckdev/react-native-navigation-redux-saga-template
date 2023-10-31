npx react-native init react_native_template

yarn add react-native-safe-area-context @reduxjs/toolkit redux-saga redux @react-native-async-storage/async-storage redux-persist redux-saga react-i18next react-native-toast-message moment @react-navigation/native react-redux @react-navigation/stack i18next react-native-safe-area-context react-native-gesture-handler @react-navigation/native-stack react-native-screens axios @react-navigation/bottom-tabs @rneui/base@edge @rneui/themed@edge react-native-vector-icons

yarn add --dev pod-install react-native-rename patch-package postinstall-postinstall babel-plugin-module-resolver

npx react-native-rename "React Native Template" -b com.rn.template

"postinstall": "pod-install && patch-package",
"release": "cd android && ./gradlew assembleRelease",
"aab": "cd android && ./gradlew bundleRelease"

setProperty("archivesBaseName", "app-v" + versionName + "(" + versionCode + ")")

npx react-native-asset