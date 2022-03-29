package com.reactnativestarterkit;

import com.facebook.react.ReactActivity;

// React-native-splash-screen package
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreenReactPackage;

public class MainActivity extends ReactActivity {

  /**
   * Required for the usage of react-native-splash-screen package
   */
  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   SplashScreen.show(this);
  //   super.onCreate(savedInstanceState);
  // }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactNativeStarterKit";
  }
}
