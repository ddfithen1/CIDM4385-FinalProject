import React from 'react';
import * as firebase from 'firebase';
import "@firebase/firestore";

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA2mMJI8hK3FmeonppPdeih8cXxMP42NhI",
    authDomain: "finalproject-f558f.firebaseapp.com",
    databaseURL: "https://finalproject-f558f.firebaseio.com",
    projectId: "finalproject-f558f",
    storageBucket: "finalproject-f558f.appspot.com"
};

firebase.initializeApp(firebaseConfig);

var cards = [];


// Code based on this: https://stackoverflow.com/questions/52100103/getting-all-documents-from-one-collection-in-firestore
getMembers();
async function getMembers() {
  const mainData = await firebase.firestore().collection("members").get();
  var relData = mainData.docs.map(doc => doc.data());

  for (var i = 0; i < relData.length; i++) {
    //cards.push(<Card><Avatar rounded icon={{name: 'user', type: 'font-awesome'}} /><Text h3 style={{color:'dodgerblue'}}>{relData[i].Name}</Text><Text>{relData[i].School + "\n\n" + relData[i].Role}</Text></Card>)
    cards.push(<Card><Text h3 style={{color:'dodgerblue'}}>{relData[i].Name}</Text><Text style={{fontWeight:'bold'}}>{relData[i].School + "\n"}</Text><Text>{relData[i].Role}</Text></Card>)
  }
}


export default class TeamScreen extends React.Component {
    static navigationOptions = {
      title: 'Team',
    };
  
    render() {
      return(
        <ScrollView>
          {cards}
        </ScrollView>
      )
    }
  }
  