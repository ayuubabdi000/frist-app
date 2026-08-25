import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import * as Progress from 'react-native-progress';


import { SafeAreaView } from 'react-native-safe-area-context'
const iconMap = {

  python: require('../assets/Python.png')
};
const items = [
  {
    lesson: 'Variable',
    progpersentage: '90',
    icon: 'python'

  },
  {
    lesson: 'Variable',
    progpersentage: '90',
    icon: 'python'

  },
  {
    lesson: 'Variable',
    progpersentage: '90',
    icon: 'python'

  },
  {
    lesson: 'Variable',
    progpersentage: '90',
    icon: 'python'
  },
  {
    lesson: 'Variable',
    progpersentage: '90',
    icon: 'python'
  },



]

const Corepath = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <View style={styles.detail}>
            <Text style={styles.headtitle}>Python fundementals</Text>
            <Text style={styles.completedTopText}>12 of 20 topics completed</Text>
          </View>
          <View style={styles.topicProgress}>
            <View><Progress.Bar progress={0.9} width={190} style={styles.progressbar} /></View>

          </View>



        </View>

        {items.map(
          ({ lesson, progpersentage, icon }, index) => (

            <TouchableOpacity key={index}>
              {/* {here is icon  the card container} */}


              <View style={styles.cardcontainer}>

                {/* {here is icon  and name} */}

                <View style={styles.content}>

                  {/* {here is icon   } */}


                  {/* {here is    name} */}
                  <View style={styles.icon}>
                    <Image
                      source={iconMap[icon]}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.lesson}>
                    <Text style={styles.lessontitle}>{lesson}</Text>
                  </View>
                  <View style={styles.progconditon}>
                    <Text style={styles.progconditontitle}>Almost Mastered</Text>
                  </View>
                  <View style={styles.start}>
                    <Text style={styles.starttitle}>start</Text>
                  </View>


                </View>
                {/* {here is progpersentage} */}
                <View style={styles.progresper}>





                  <View><Progress.Bar progress={0.9} width={100} style={styles.progressbar} /></View>
                  <Text style={styles.progtext}>{progpersentage}</Text>
                </View>


              </View>

            </TouchableOpacity>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#020F18',
  },
  head: {
    height: 180,
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 0,
    // paddingTop:30,
    // paddingLeft:30
  },
  cardcontainer: {
    backgroundColor: 'rgba(252, 252, 255, 0.10)',
    marginBottom: 18,
    paddingTop: 10,
    paddingLeft: 20,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 70,
    height: 170

  },
  content: {
    flexDirection: 'row',
    width: 100,
    gap: 18


  },
  icon: {
    height: 70,
    marginTop: 10,
    alignContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff46',
    borderRadius: 8,
    padding: 3,
  },
  progresper: {

  },
  iconImage: {

    height: 60,
    width: 60,



  },
  lessontitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 18
  },
  progresper: {
    flexDirection: 'row',
    gap: 10,
    position: 'relative',
    right: 80,
    marginTop: 60
  },
  progressbar: {
    backgroundColor: 'white'
  },
  progtext: {
    color: 'white',
    fontSize: 18,
    position: 'relitive',
    top: -9
  },
  progconditon: {
    height: 30,
    width: 120,
    marginTop: 120,
    position: 'relitive',
    right: 190
  },
  progconditontitle: {
    color: '#ffffffb8',
    alignItems: 'center'
  },
  start: {
    height: 40,
    width: 100,
    marginTop: 105,
    position: 'relitive',
    right: 130,



    backgroundColor: '#00b7ff46',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  starttitle: {
    color: '#ffffffb8',

    fontWeight: '900',


    fontSize: 18
  },
 
  headtitle: {
    color:'#fff',
    
    fontSize:28,
    fontWeight:'700'

  },

  completedTopText: {   
    marginTop:10 ,
    color:'#fff'
},
  topicProgress: {
    marginTop:20
  }





})

export default Corepath