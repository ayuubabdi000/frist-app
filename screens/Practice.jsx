import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
const Practice = () => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} color="white" />
                <Text style={styles.preview}>Preview</Text>
            </View>
            <View style={styles.progresscard}>
                <Text style={styles.progressTitle}>Proplem 7/50</Text>
                <View><Progress.Bar progress={0.3} width={200} style={styles.progressbar} /></View>
                <View style={styles.practiceprogressprecent}>
                    <Text style={styles.presentnumber}>10%</Text>

                </View>


            </View>
            <View style={styles.quationcard}>
                <Text style={styles.quation}>Problem: Create a program that takes a number
                    from the user and prints its multiplication
                    table from 1 to 10 using a loop</Text>
            </View>
            <View style={styles.codecon}>
                <View style={styles.codecard}>

                </View>

            </View>




        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020F18',
        // paddingLeft:20

        paddingLeft: 20
    },
    header: {

        height: 80,

        flexDirection: 'row',
        gap: 16


    },
    preview: {
        color: '#fff',
        fontSize: 18

    },
    progresscard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        width: 300,
        // backgroundColor:'#ffffff41',
        height: 40,
        alignItems: 'center',


        borderRadius: 10,





    },
    progressTitle: {
        color: 'white',
        fontWeight: '700'
    },
    progressbar: {
        backgroundColor: 'white',
        marginTop: 2
    },
    practiceprogressprecent: {

    },
    presentnumber: {
        color: 'white',

    },



    quationcard: {
        backgroundColor: '#ffffff3f',
        width: 360,

        padding: 10,
        borderRadius: 8,
        marginTop: 15,

    },
    quation: {
        color: '#fff',
        fontSize: 16
    },
    codecon: {
        borderWidth: 0.2,
        borderColor: '#ffffff4f',
        backgroundColor: '#ffffff09',

        height: 450,
        marginTop: 30,
        borderRadius: 16,
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,




    },
    codecard: {
        borderWidth: 0.2,
        borderColor: '#ffffff4f',
        backgroundColor: '#ffffff09',
        backgroundColor: '#020F18',
        height: 430,
        borderRadius: 2,
        width: 340,
        // alignItems:'center',
        // justifyContent:'center'

    },
    exercisenavcard: {}


})

export default Practice
