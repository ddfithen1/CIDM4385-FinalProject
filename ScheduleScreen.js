import React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

export default class ScheduleScreen extends React.Component {
    static navigationOptions = {
      title: 'Schedule',
    };

    render(){
        return(
            <ScrollView>
          <Card>
            <Text h3 style={{fontWeight:'bold'}}>Wednesday, November 6th</Text>
            <Text h5 style={{fontWeight:'bold'}}>6:00pm</Text>
            <Text> Light Reception</Text>
            <Text h5 style={{fontWeight:'bold'}}>Registration</Text>
          </Card>
          <Card>
            <Text h3 style={{fontWeight:'bold'}}>Thursday, November 7th</Text>
            <Text h5 style={{fontWeight:'bold'}}>7:00am-4:30pm</Text>
            <Text h5 style={{fontWeight:'bold'}}>Registration</Text>
            <Text h5 style={{fontWeight:'bold'}}>7:30pm</Text>
            <Text>Breakfast</Text>
            <Text h5 style={{fontWeight:'bold'}}>8:30am-12:00pm</Text>
            <Text>Sessions and Workshops begin</Text>
            <Text h5 style={{fontWeight:'bold'}}>12:00pm</Text>
            <Text h5 style={{fontWeight:'bold'}}>Industry Keynote Lunch</Text>
            <Text h5 style={{fontWeight:'bold'}}>2:00pm-4:30pm</Text>
            <Text>Sessions</Text>
          </Card>
            <Card>
            <Text h3 style={{fontWeight:'bold'}}>Thursday Dinner and Fun Night</Text>
            <Text h5 style={{fontWeight:'bold'}}>EDSIG Fellow Induction</Text>
            <Text>Downtown Cleveland location to be determined</Text>
          </Card>
          <Card>
            <Text h3 style={{fontWeight:'bold'}}>Friday, November 8th</Text>
            <Text h5 style={{fontWeight:'bold'}}>7:30am</Text>
            <Text>Breakfast</Text>
            <Text h5 style={{fontWeight:'bold'}}>8:30am-12:00pm</Text>
            <Text>Sessions</Text>
            <Text h5 style={{fontWeight:'bold'}}>12:00pm</Text>
            <Text h5 style={{fontWeight:'bold'}}>Distinguished Educator Keynote Lunch</Text>
            <Text h5 style={{fontWeight:'bold'}}>2:00pm-4:30pm</Text>
            <Text>Sessions</Text>
            <Text h5 style={{fontWeight:'bold'}}>5:00pm</Text>
            <Text h5 style={{fontWeight:'bold'}}>EDSIG Members Meeting</Text>
            <Text h5 style={{fontWeight:'bold'}}>6:30pm</Text>
            <Text h5 style={{fontWeight:'bold'}}>Reception</Text>
            <Text>Meat up with colleagues for dinner</Text>
          </Card>
          <Card>
            <Text h3 style={{fontWeight:'bold'}}>Saturday, November 9th</Text>
            <Text h5 style={{fontWeight:'bold'}}>7:30am</Text>
            <Text>Breakfast</Text>
            <Text h5 style={{fontWeight:'bold'}}>8:30-12:00pm</Text>
            <Text>Sessions</Text>
            <Text h5 style={{fontWeight:'bold'}}>12:00pm</Text>
            <Text h5 style={{fontWeight:'bold'}}>Awards Lunch</Text>
          </Card>

            </ScrollView>
        )
    }
}