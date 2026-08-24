import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

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

                  <View style={styles.icon}>
                    <Image
                      source={iconMap[icon]}
                      style={styles.iconImage}
                      resizeMode="contain"
                    />
                  </View>
                  {/* {here is    name} */}
                  <View style={styles.lesson}>
                    <Text>{lesson}</Text>
                  </View>

                </View>
                {/* {here is progpersentage} */}
                <View style={styles.progresper}>

                  <Text>{progpersentage}</Text>
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
    flexDirection:'column',
    backgroundColor: '#020F18',
  },
  cardcontainer: {
    backgroundColor: 'rgba(252, 252, 255, 0.10)',
    marginBottom: 10,
    paddingTop: 15,
    paddingLeft: 20,
    height: 120,
    borderRadius: 16
  },
  content: {

  },
  icon: {

  },
  progresper: {

  },
  iconImage: {
    height: 100
  }


})

export default Corepath