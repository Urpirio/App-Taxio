import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleLogin } from "../../style/StyleLoginPrt1";
import { useRouter } from "expo-router";

export default function Login() {

    const urlimg = 'https://static.vecteezy.com/system/resources/previews/021/457/335/non_2x/cute-girls-showing-something-3d-cartoon-illustration-png.png';

    const UrlIconFacebook = 'https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png';

    const UrlIconGoogle = 'https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png';

    const UrlApple = 'https://static.vecteezy.com/system/resources/previews/001/199/813/non_2x/apple-png.png';

    const router = useRouter();

  return (
    <SafeAreaProvider>
        <View style={StyleLogin.MainContainer}>
            <View style={StyleLogin.Section1}>
                <Image source={{uri: urlimg}} style={StyleLogin.ImgSection1}/>
            </View>
            <View style={StyleLogin.Section2}>
                <Text style={StyleLogin.TextSection2}>Let's you in</Text>
            </View>
            <View style={StyleLogin.Section3}>
                <TouchableOpacity style={StyleLogin.BtnsSection3}>
                    <Image source={{uri: UrlIconFacebook}} style={StyleLogin.BtnIconSection3} />
                    <Text style={StyleLogin.BtnTextSection3}> continue with facebook</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={StyleLogin.BtnsSection3}>
                    <Image source={{uri: UrlIconGoogle}} style={StyleLogin.BtnIconSection3}/>
                    <Text style={StyleLogin.BtnTextSection3}> continue with Google</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={StyleLogin.BtnsSection3}>
                    <Image source={{uri: UrlApple}} style={StyleLogin.BtnIconSection3}/>
                    <Text style={StyleLogin.BtnTextSection3}> continue with Apple</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleLogin.Section4}>
                <Text>or</Text>
                <TouchableOpacity style={StyleLogin.BtnSection4} onPress={()=>{
                    router.navigate('../LoginForm');
                }}>
                    <Text style={StyleLogin.BtnTextSection4}>Sign in with password</Text>
                </TouchableOpacity>
                <View style={StyleLogin.SubSection4}>
                    <Text style={StyleLogin.TextSubSection4}>Don't have a account?</Text>
                    <TouchableOpacity>
                        <Text style={StyleLogin.BtnTextSection4}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaProvider>
  )
}
