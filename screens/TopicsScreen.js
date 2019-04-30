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

export default class TopicsScreen extends React.Component {
  static navigationOptions = {
    title: 'Topics',
  };

  render() {
    return (
        <ScrollView>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>PEDAGOGY</Text>
            <Text>teaching cases, testing, performance monitoring, eBooks, simulations, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>CURRICULA</Text>
            <Text>model guidelines, learning objectives, assessment, major, minor, dual degree, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>DATA ANALYTICS</Text>
            <Text>education is big data, data science, machine learning, predictive analytics, ..</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>SECURITY</Text>
            <Text>education in mobile security, cybercrime, information privacy, policy issues,...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>TEACHING/LEARNING ENVIRONMENTS</Text>
            <Text>MOOCs, flipped, distance, synchronous, asynchronous, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>STUDENT RECRUITMENT</Text>
            <Text>marketing, enrollment management, retention, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>ACADEMIC QUALITY</Text>
            <Text>outcome assessment, accreditation, academic integrity, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>CROSS-DISCIPLINARY COMPUTING PEDAGOGY</Text>
            <Text>computing minors in business, science, engineering, medicine, arts, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>CLOUD COMPUTING</Text>
            <Text>education in virtualization, enterprise cloud system, management, SaaS, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>DEGREE PROGRAMS</Text>
            <Text>secondary, associate, UG, BS, BA, masters, Ph.D., ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>GRADUATE PLACEMENT</Text>
            <Text>industry relations, advisory groups, internships, apprenticeships, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>COMPUTING HARDWARE</Text>
            <Text>eduction in sustainability, nanotechnology, architecture, organization, networking, clouds, mobile, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>PROBLEM SOLVING FRAMEWORKS</Text>
            <Text>education in modeling, relational, object, aspect, numerical, analogical, SWOT, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>PROJECT ORGANIZATION AND METHODOLOGIES</Text>
            <Text>education in life cycles, team structure, RAD, Agile, Lean, XP, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>SOCIETY</Text>
            <Text>E-government, social media, privacy, cybercrime, cyber-medicine, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>FACULTY DEVELOPMENT</Text>
            <Text>Ph.D. research, mentoring, scholarship, publication, professional service, ...</Text>
          </Card>
          <Card>
            <Text h5 style={{fontWeight:'bold'}}>STUDENT PAPERS WITH FACULTY</Text>
            <Text></Text>
          </Card>
        </ScrollView>
    )
  }
}
