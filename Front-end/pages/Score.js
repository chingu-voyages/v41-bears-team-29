import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native'
import bgImage from '../assets/img/bg40.jpg'
import { globalStyles } from '../styles/global'
import ProfileCard from '../components/profileCard'
import React, { useState, useContext } from 'react'
import ScoreCard from '../components/scoreCard'
import GoBackBtn from '../components/goBackbtn'
import { AuthContext } from '../context/auth'

export default function Score({ navigation }) {
  const { users, setUser, setCurrentUser, currentUser } =
    useContext(AuthContext)

  const [score, setScore] = useState([
    {
      answer: 'sofa',
      photo: require('../assets/img/sofa.jpg'),
      id: 1
    },
    {
      answer: 'table',
      photo: require('../assets/img/table.jpg'),
      id: 2
    },
    {
      answer: 'chair',
      photo: require('../assets/img/chair.jpg'),
      id: 3
    },
    {
      answer: 'cup',
      photo: require('../assets/img/cup.jpg'),
      id: 4
    }
  ])

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Capture')}>
            <GoBackBtn />
          </TouchableOpacity>
          <View style={globalStyles.profileIcon}>
            <ProfileCard user={currentUser} />
          </View>
          <Text style={globalStyles.headerTitle}>Score</Text>
          <Text style={globalStyles.headerTitle}>25</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            keyExtractor={(item) => item.id}
            horizontal={true}
            data={score}
            renderItem={({ item }) => <ScoreCard item={item} />}
          />
        </View>
        <Button
          title='go to Capture'
          onPress={() => navigation.navigate('Capture')}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  }
})
