import React, { Component } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./styles.js";

export default class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Onboarding
          onDone={() => this.props.navigation.navigate("App")}
          showSkip={false}
          showDone={true}
          bottomBarHeight={20}
          bottomBarHighlight={false}
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../images/bg-img-onboarding-1.png")}
                  >
                    <Image
                      style={styles.popMessageIcon}
                      source={require("../../images/bell.png")}
                    />
                    <View style={styles.popMessageView}>
                      <Text style={styles.popMessage}>
                        Usual Traffic Report in {"\n"} your Route!
                      </Text>
                    </View>

                    <Text style={styles.textStyle_1}>Get to know</Text>
                    <Text style={styles.textStyle_2}>before you</Text>
                    <Text style={styles.textStyle_3}>Go</Text>
                  </ImageBackground>
                </View>
              )
            },
            {
              backgroundColor: "#fff",
              image: (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../images/bg-img-onboarding-2.png")}
                  >
                    <Image
                      style={{ marginTop: "60.5%", left: 75, zIndex: 1000 }}
                      source={require("../../images/time.png")}
                    />
                    <View
                      style={{
                        position: "absolute", // child
                        bottom: "60%", // position where you want
                        left: 70
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingLeft: 50,
                          fontFamily: "Product Sans",
                          borderRadius: 50,
                          backgroundColor: "white",
                          width: 300,
                          padding: 10
                        }}
                      >
                        Your Train : සෙන්කඩගල මැණිකේ {"\n"} ETA 12 min
                      </Text>
                    </View>
                    <Text style={styles.textStyle_1}>Never Miss</Text>
                    <Text style={styles.textStyle_2}>your commute</Text>
                    <Text style={styles.textStyle_3}>Again</Text>
                  </ImageBackground>
                </View>
              )
            },
            {
              backgroundColor: "#fff",
              image: (
                <View style={styles.container}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={require("../../images/bg-img-onboarding-3.png")}
                  >
                    <Text style={styles.textStyle_1}>Track Realtime</Text>
                    <Text style={styles.textStyle_2}>where your</Text>
                    <Text style={styles.textStyle_3}>commute is</Text>
                  </ImageBackground>
                </View>
              )
            }
          ]}
        />
      </View>
    );
  }
}
