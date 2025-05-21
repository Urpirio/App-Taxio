import { Text, View,TouchableOpacity,Image, TextInput, Pressable} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { StyleLoginForm } from "../../style/StyleLoginForm";

export default function LoginForm() {

  const [isCheck,setIsCheck] = useState(false);
  const [ShowPassword,setShowPassword] = useState(true);
  const [IconEyePassWord,setIconEyePassword] = useState(require('../../assets/IconInputs/eye-slash.png'));

  const [ChangesColorEmail,setChangesColorEmail]= useState({
    InputEmail: StyleLoginForm.InputEmail,
    IconInputEmail: StyleLoginForm.IconInputEmail,
    TextInput_Email: StyleLoginForm.TextInput_Email,
  });

  const [ChangesColorPassword,setChangesColorPassword] = useState({
    InputPassword:StyleLoginForm.InputPassword,
    IconInputPassWord: StyleLoginForm.IconInputPassWord,
    TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
    PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
  })

  const [StatusColorInputs,setStatusColorInputs] = useState(null);

  const ChangeColorInput = () =>{
    //   setChangesColorEmail({
    //     InputEmail: StyleLoginForm.InputEmail,
    //     IconInputEmail: StyleLoginForm.IconInputEmail,
    //     TextInput_Email: StyleLoginForm.TextInput_Email,
    //   });
    //   setChangesColorPassword({
    //     InputPassword:StyleLoginForm.InputPassword,
    //     IconInputPassWord: StyleLoginForm.IconInputPassWord,
    //     TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
    //     PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
    //   })
      setChangesColorEmail({
        InputEmail:StyleLoginForm.InputEmailYellow,
        IconInputEmail: StyleLoginForm.IconInputEmailYellow,
        TextInput_Email: StyleLoginForm.TextInput_EmailYellow,
      });
      setChangesColorPassword({
        InputPassword:StyleLoginForm.InputPassword,
        IconInputPassWord: StyleLoginForm.IconInputPassWord,
        TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
        PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
      });
  };

  const ChangeColorInputP2 = () =>{
      setChangesColorPassword({
        InputPassword:StyleLoginForm.InputPasswordYellow,
        IconInputPassWord: StyleLoginForm.IconInputPassWordYellow,
        TextInput_PassWord: StyleLoginForm.TextInput_PassWordYellow,
        PressablePassWordIcon: StyleLoginForm.PressablePassWordIconYellow,
      });
      setChangesColorEmail({
        InputEmail: StyleLoginForm.InputEmail,
        IconInputEmail: StyleLoginForm.IconInputEmail,
        TextInput_Email: StyleLoginForm.TextInput_Email,
      });
  };

  const ChangeVisibilidyPassword = () =>{
    setShowPassword(!ShowPassword);
    if(ShowPassword){
      setIconEyePassword(require('../../assets/IconInputs/eye-slash.png'))
    }else{
      setIconEyePassword(require('../../assets/IconInputs/eye.png'))
    }
  };

  const UrlIconFacebook = 'https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png';

  const UrlIconGoogle = 'https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png';

  const UrlApple = 'https://static.vecteezy.com/system/resources/previews/001/199/813/non_2x/apple-png.png';


  return (
    <SafeAreaProvider>
        <View>
          <View style={StyleLoginForm.Section1}>
            <Text style={StyleLoginForm.TextSection1}>Create your Account</Text>
          </View>
          <View style={StyleLoginForm.SectionForm}>
            <View style={ChangesColorEmail.InputEmail}> 
              <Image source={require('../../assets/IconInputs/envelope-alt (1).png')}
                style={ChangesColorEmail.IconInputEmail}/>
              <TextInput placeholder="Email" placeholderTextColor={'#ced4da'}  
                style={ChangesColorEmail.TextInput_Email} 
                onPress={ChangeColorInput}/>
            </View>

            <View style={ChangesColorPassword.InputPassword}>
              <Image source={require('../../assets/IconInputs/lock.png')}
                style={ChangesColorPassword.IconInputPassWord}/>
              <TextInput placeholder="Password" placeholderTextColor={'#ced4da'} 
                secureTextEntry={ShowPassword} style={ChangesColorPassword.TextInput_PassWord} 
                onPress={ChangeColorInputP2}/>
                <Pressable onPress={ChangeVisibilidyPassword}>
                 <Image source={IconEyePassWord}
                  style={ChangesColorPassword.PressablePassWordIcon}/>
                </Pressable>
            </View>
            <View style={{alignItems:'center',flexDirection:'row',gap:10,justifyContent:'center'}}>
              <Checkbox value={isCheck} onValueChange={setIsCheck} style={{borderColor:'#ffc300',borderRadius: 5}}/>
              <Text style={{fontWeight:600}}>Remember me</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                padding:12,
                borderRadius: 30,
                backgroundColor:'#ffc300',
                }}>
                <Text style={{fontSize: 18}}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={{justifyContent:'space-between',height:'50%'}}>
                <View style={{alignItems:'center'}}>
                  <Text>or continuous with</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',gap:30}}>
                  <TouchableOpacity  style={{borderWidth:1,padding:5,justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'#ced4da'}}>
                    <Image source={{uri:UrlIconFacebook}} style={{height: 40,width:40,objectFit:'contain'}}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{borderWidth:1,padding:5,justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'#ced4da'}}>
                    <Image source={{uri:UrlIconGoogle}} style={{height: 40,width:40,objectFit:'contain'}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderWidth:1,padding:5,justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'#ced4da'}}>
                    <Image source={{uri:UrlApple}} style={{height: 40,width:40,objectFit:'contain'}}/>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',gap:5,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:16,fontWeight:200}}>Already have on account</Text>
                  <TouchableOpacity>
                    <Text style={{fontSize:16,fontWeight:600,color:'#ffc300'}}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
    </SafeAreaProvider>
  )
};
