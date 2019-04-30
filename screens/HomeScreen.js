import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, Text, Avatar } from 'react-native-elements';
import Touchable from 'react-native-platform-touchable';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={{uri: 'https://media.wkyc.com/assets/WKYC/images/511414673/511414673_750x422.jpg'}} style={{width: '100%', height: '100%'}}>
        <View style={{marginTop: 250}}>
          <Text h2 style={{color: 'dodgerblue', textAlign: 'center', textShadowColor: 'rgba(0,0,0,0.75)', textShadowOffset: {width: 3, height: 3}, textShadowRadius: 10}}>EDSIGCON</Text>
          <Text h2 style={{color: 'dodgerblue', textAlign: 'center', textShadowColor: 'rgba(0,0,0,0.75)', textShadowOffset: {width: 4, height: 4}, textShadowRadius: 10}}>CONISAR 2019</Text>
          <Text h5 style={{color: 'white', textAlign: 'center', textShadowColor: 'rgba(0,0,0,1)', textShadowOffset: {width: 3, height: 3}, textShadowRadius: 10}}>Wednesday, Nov. 6 - Saturday, Nov. 9</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', marginTop: 10}}>
          <Touchable onPress={this._handleTwitter}>
            <Image
                  source={{uri: 'https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B_400x400.png'}}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 35, height: 35, borderRadius: 100, marginRight: 5 }}
                />
          </Touchable>
          <Touchable onPress={this._handleFacebook}>
            <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png'}}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={{ width: 35, height: 35, borderRadius: 100, marginRight: 5 }}
                  />
          </Touchable>
          <Touchable onPress={this._handleLinkedIn}>
            <Image
                    source={{uri: 'https://www.qtoptometry.com/wp-content/uploads/2018/11/LinkedIn-Logo.jpg'}}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={{ width: 35, height: 35, borderRadius: 100 }}
                  />
          </Touchable>
        </View>
      </ImageBackground>
    );
  }

  _handleTwitter = () => {
    WebBrowser.openBrowserAsync('https://twitter.com/edsigcon');
  };

  _handleFacebook = () => {
    WebBrowser.openBrowserAsync('https://www.facebook.com/groups/edsig/');
  };

  _handleLinkedIn = () => {
    WebBrowser.openBrowserAsync('https://www.linkedin.com/groups/8655139');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
