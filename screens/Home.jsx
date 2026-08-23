import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';

const pythonsvg = require('../assets/Python.png')
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeMessage}>
                <Text style={styles.headcolor}>Good Morning {"\n"}
                    alex</Text>
                <Text style={styles.title}>Lets build somethinGreat</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statsConleft}>
                    <View style={styles.progresscard}>
                        <Text style={styles.fire}>🔥</Text>
                        <Text style={styles.progressday}>12</Text>
                        <View style={styles.line} />
                    </View>
                    <View >

                    </View>
                    <Text style={styles.Dactive}>Days Active</Text>


                </View>
                <View style={styles.rightCon}>
                    <View>
                        <Text style={styles.dailygoal}>Daily Goal</Text>
                        <Text style={styles.dayprogress}>45/50</Text>
                    </View>
                    <View style={styles.progressBarPer}>
                        <View><Progress.Bar progress={0.3} width={100} style={styles.progressbar} /></View>
                        <View style={styles.dayprogressprecent}>
                            <Text style={styles.presenttext}>10%</Text>

                        </View>

                    </View>


                </View>



            </View>

            <View >
                <View style={styles.courseInfo}>
                    <View style={styles.coursetitleCon}>
                        <Text style={styles.coursetitle}>Your Course</Text>
                        <View style={styles.line2} />
                    </View>
                    <View style={styles.courseprgress}>
                        <View style={styles.courseImageCon}>
                            <Image source={pythonsvg} style={{ width: 80, height: 80, marginLeft: 5 }} />
                        </View>
                        <View style={styles.coursenamecon}>
                            <Text style={styles.coursenamecon}>Python</Text>
                            <View style={styles.porbar}>
                                <View><Progress.Bar progress={0.3} width={100} style={styles.progressbar} /></View>
                            <View style={styles.dayprogressprecent}>
                                <Text style={styles.presenttext}>10%</Text>

                            </View>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.RankCard}></View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020F18',
    },
    welcomeMessage: {
        height: 200,
        marginTop: 40,
        paddingTop: 20,
        paddingLeft: 30

    },
    headcolor: {
        color: 'white',
        fontSize: 32,
        lineHeight: 40,
        fontWeight: 700,
        marginTop: 30
    },
    title: {
        color: 'white',
        fontSize: 16,
        lineHeight: 36,
        fontWeight: '400',
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(252, 252, 255, 0.10)',
        height: 120,
        marginTop: 0,
        margin: 30,
        borderRadius: 15


    },
    courseInfo: {
        backgroundColor: 'rgba(252, 252, 255, 0.10)',
        height: 120,
        marginTop: 0,
        margin: 30,
        borderRadius: 15,
        // flex:1,
        // flexDirection:'row'


    },
    RankCard: {
        backgroundColor: 'rgba(252, 252, 255, 0.10)',
        height: 200,
        marginTop: 0,
        margin: 30,
        borderRadius: 15


    },
    statsConleft: {
        width: 130,
        height: 120,
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    progresscard: {
        flex: 1,
        flexDirection: 'row',
        width: 400,
        marginTop: 20

    },
    fire: {
        fontSize: 40
    },
    progressday: {

        fontSize: 36,
        color: 'white',
        fontWeight: '900',
        alignItems: 'center',
        lineHeight: 65
    },
    line: {
        height: 1,                 // Thickness of the line
        width: 90,             // Full width of parent container
        backgroundColor: 'rgba(244, 245, 247, 0.16)', // Line color
        marginVertical: 10,        // Space above and below the line
        transform: [{ rotate: '90deg' }],
        marginTop: 39
    },
    Dactive: {
        color: 'white',
        // paddingBottom:30
        position: 'relitive',
        top: 60,
        left: -40

    },
    rightCon: {
        width: 100,
        height: 180,
        flex: 1,
        // backgroundColor:'red',
        paddingLeft: 0,
        // position:'relative',
        // right:30,
        alignContent: 'center',
        justifyContent: 'center',


    },
    dailygoal: {
        color: "white",
        fontSize: 18,
        fontWeight: '700',
        // alignItems:"center",
        paddingLeft: 30,
        marginTop: 10,
        marginBottom: 10
    },
    dayprogress: {
        marginBottom: 10,

        color: 'white',
        paddingLeft: 60
    },
    progressbar: {
        marginBottom: 10,
        color: '#42E0FF',
        backgroundColor: 'white'


    },
    progressBarPer: {

        flexDirection: 'row',
        gap: 10
    },
    dayprogressprecent: {



    },
    presenttext: {
        color: 'white',
        position: 'relative',
        top: -5

    },
    line2: {
        height: 1,                 // Thickness of the line
        width: 330,
        marginTop: 3,           // Full width of parent container
        backgroundColor: 'rgba(244, 245, 247, 0.16)', // Line color
        // marginVertical: 10,        // Space above and below the line
        // transform: [{ rotate: '90deg' }],
        // marginTop: 39
    },
    coursetitle: {
        color: 'white',
        fontSize: 24,
        marginTop: 5,
        marginLeft: 10
    },
    courseprgress: {
        flex: 1,
        flexDirection: 'row',
        gap: 60
    },
    coursenamecon: {
        color: 'white',
        marginTop: 6,
        fontSize: 24,
        marginBottom: 7
    },
    courseImageCon: {
        marginLeft: 10
    },
    porbar:{
        flexDirection:'row',
        gap:10,
    }



})

export default Home
