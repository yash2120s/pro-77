import React, { Component } from 'react';
import { Text, View , StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
              <View style={styles.container}>
               <SafeAreaView style = {styles.droidSafeArea}   />
               <ImageBackground source = {require("../assets/space.gif")} style = {styles.backgroundImage}>
         <View style = {styles.titleBar}>
          <Image source = {require("../assets/main-icon.png") } style = {styles.mainImage} /> 
          <Text style = {styles.titleText}> Stellar App </Text>
                        </View> 
                        
<TouchableOpacity style ={styles.routeCard}  onPress ={()=>this.props.navigation.navigate("ISSLocation")}>
 <Text style = {styles.routeText} >Space Craft </Text> 
 <Text style = {styles.knowMore} > {"Know More ---->"} </Text>
 <Text style = {styles.bgDigit}> 1 </Text>
 <Image source = {require("../assets/space_crafts.png") } style = {styles.iconImage} /> 
 </TouchableOpacity>

<TouchableOpacity style ={styles.routeCard}  onPress ={()=>this.props.navigation.navigate("Metors")} > 
<Text style = {styles.routeText}> Star Map </Text>
<Text style = {styles.knowMore} > {"Know More ---->"} </Text>
 <Text style = {styles.bgDigit}> 2 </Text>
 <Image source = {require("../assets/star_map.png") } style = {styles.iconImage} /> 
 </TouchableOpacity>

<TouchableOpacity style ={styles.routeCard}  onPress ={()=>this.props.navigation.navigate("Updates")} > 
<Text style = {styles.routeText}>Daily Pictures </Text>
<Text style = {styles.knowMore} > {"Know More ---->"} </Text>
 <Text style = {styles.bgDigit}> 3 </Text>
<Image source = {require("../assets/daily_pictures.png") } style = {styles.iconImage} /> 
 </TouchableOpacity>
</ImageBackground>
            </View>
        )
    }
}const styles = StyleSheet.create({
  container:{flex: 1,},

  titleText:{
  fontSize:30,
fontWeight:"bold"
,color:"white",
marginTop:120
  },
  droidSafeArea:{
    marginTop : Platform.OS === "android" ? StatusBar.currentHeight:0 
  },
  titleBar:{
flex : 0.15,
  justifyContent: "center",
    alignItems: "center",
 
  },
  routeCard:{
   flex:0.25,
   marginLeft:50,
   marginTop:50,
   marginRight:50,
  borderRadius : 30,
backgroundColor:"white",

  },
  routeText:{
fontSize:35,
fontWeight:"bold",color:"#0000000",
marginTop:25,

  },
  backgroundImage:{
    flex:1,
    resizeMode:"cover"
  },
  iconImage:{
position:"absolute"
,height:80,width:80 ,resizeMode:"contain" ,right:10,top:-35},
mainImage:{
position:"absolute",
marginTop:30
,height:80,width:80 },

knowMore:{
paddingLeft:30,color:'red',fontSize:15
},
bgDigit:{
position:"absolute",
color:"rgba(183,183,183,0.5)",
fontSize:90,right:5,bottom:-15,zIndex :-1
},
})
