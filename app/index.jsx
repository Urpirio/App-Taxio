import { Image,Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleFirtsScreen } from "../style/StyleFirtsScreen";
import { useRouter } from "expo-router";
import { useState } from "react";
import { DataFirstScreen } from "../Data/DataFirstScreen";

export default function index() {

    const router = useRouter();
    const [Loading,setLoading] = useState(false);
    const [LocationScreen,setLocationScreen] = useState(0);


    const NextScreen = () =>{
        if(LocationScreen < 2){
            setLocationScreen(LocationScreen + 1)
        }else{
            router.navigate('/Login');
        }
    }

    return (
    <SafeAreaProvider>
        <View style={StyleFirtsScreen.MainContainer}>
            <View style={StyleFirtsScreen.Section1}>
                <Image source={{uri:DataFirstScreen[LocationScreen].Img}} style={StyleFirtsScreen.ImgSection1}/>
                <Text style={StyleFirtsScreen.TextSection1}>
                    {DataFirstScreen[LocationScreen].Description}
                </Text>
            </View>
            <View style={StyleFirtsScreen.Section2}>
                <View style={DataFirstScreen[LocationScreen].Style.Point1}></View>
                <View style={DataFirstScreen[LocationScreen].Style.Point2}></View>
                <View style={DataFirstScreen[LocationScreen].Style.Point3}></View>
            </View>
            <View style={StyleFirtsScreen.Section3}>
                <TouchableOpacity style={StyleFirtsScreen.BtnNext} onPress={()=>{
                    NextScreen();
                }}>
                    <Text style={StyleFirtsScreen.TextBtnNext}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaProvider>
  )
}
