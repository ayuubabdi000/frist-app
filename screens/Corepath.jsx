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
        <Text>Hello</Text>

        {items.map(
          ({ lesson, progpersentage, icon }, index) => (

            <TouchableOpacity key={index}>
              {/* {here is icon  the card container} */}


              <View style={styles.cardcontainer}>

                {/* {here is icon  and name} */}

                <View style={styles.content}>

                  {/* {here is icon   } */}


                  {/* {here is    name} */}
                  <View style={styles.lesson}>
                    <Text style={styles.lessontitle}>{lesson}</Text>
                  </View>
                  <View style={styles.icon}>
                    <Image
                      source={iconMap[icon]}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
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
  cardcontainer: {
    backgroundColor: 'rgba(252, 252, 255, 0.10)',
    marginBottom: 18,
    paddingTop: 10,
    paddingLeft: 20,
    height: 130,
    borderRadius: 16,
    flexDirection: 'row',
    gap:70,
    
  },
  content: {
    flexDirection: 'column',
    width: 100,
    

  },
  icon: {

  },
  progresper: {

  },
  iconImage: {

    height: 90,
    width: 70

  },
  lessontitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400'
  },
  progresper: {
    flexDirection: 'row',
    gap: 10,
    marginTop:90
  },
  progressbar:{
    backgroundColor:'white'
  },
  progtext:{
    color:'white',
    fontSize:18,
    position:'relitive',
    top:-9
  }




})

export default Corepath