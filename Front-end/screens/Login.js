import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native'
import ProfileCard from '../components/profileCard'
import bgImage from '../assets/img/bg40.jpg'
import { globalStyles } from '../styles/global'
import React, { useState, useContext } from 'react'
import GoBackBtn from '../components/goBackbtn'
import { AuthContext } from '../context/auth'

export default function Login({ navigation }) {
  const { users, setCurrentUser } = useContext(AuthContext);

  const onPressProfileHandler = (profile) => {
    navigation.navigate('Capture')
    setCurrentUser(profile);
  }

  return (
    <ImageBackground source={bgImage} style={globalStyles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <GoBackBtn />
          </TouchableOpacity>
          <Text style={globalStyles.appName}>What's that?!</Text>
        </View>
        <Text style={globalStyles.headerTitle}>Who is ready to play?</Text>
        <View style={styles.profiles}>
          <FlatList
            keyExtractor={(user) => user.id}
            horizontal={true}
            data={users}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.profileContainer}
                onPress={() => onPressProfileHandler(item)}
              >
                <ProfileCard user={item} />
              </TouchableOpacity>
            )}
          />
        </View>

        <Button
          title='go to ProfileAdmin'
          onPress={() => navigation.navigate('ProfileAdmin')}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profiles: {
    flexDirection: "row",
    // width: "100%",
    overflow: "hidden",
  },
  profileContainer: {
    margin: 10,
    height: 200,
    width: 200
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
