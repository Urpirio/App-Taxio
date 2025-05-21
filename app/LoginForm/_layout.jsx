import { Stack } from "expo-router"
import { Button, Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function _layout() {
    const router = useRouter();
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            header:()=>{
                return(
                    <View style={{borderWidth:0,paddingVertical:10,paddingHorizontal:5}}>
                        <TouchableOpacity onPress={()=>{router.navigate('/Login')}}>
                            <Image source={require('../../assets/IconNavegation/arrow-left-stroke.png')}
                            style={{height:40,width:40,}}/>
                        </TouchableOpacity>
                    </View>
                )
            }
        }}/>
    </Stack>
  )
}
