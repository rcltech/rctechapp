import { Icon } from 'native-base';
import { Linking, Text, TouchableOpacity, View} from 'react-native';
import { WebBrowser } from 'expo';
import React from 'react';
import theme from '../../native-base-theme/variables/commonColor';


const styles = {
    footer: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      padding: 5
    },
    iconContainer:{
      color: theme.brandPrimary
    },
    footerText: {
      fontSize: 10,
      color: 'grey',
      textAlign: 'center'
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 5
    },
    footerTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 5,
      paddingTop: 10
    },
}

const openLink = (link) => Linking.openURL(link).catch((err) => console.log(err));

const SidebarFooter = () => (
  <View style={styles.footer}>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openLink('mailto:chisuncollege@hku.hk')}>
          <Icon style={styles.iconContainer} type="MaterialIcons" name="email"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/chisuncollege/')}>
          <Icon style={styles.iconContainer} type="Entypo" name="facebook-with-circle"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com/chisuncollege/?hl=en')}>
          <Icon style={styles.iconContainer} type="Entypo" name="instagram-with-circle"/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.footerTextContainer} onPress={() => openLink('mailto:contact@rctech.club')}>
        <Text style={{...styles.footerText, flex: 6}}>Developed by RC Tech in collaboration with Chi Sun Turing Club</Text>
        <Text style={{...styles.footerText, flex: 1}}> | </Text>
        <Text style={{...styles.footerText, flex: 2, textDecorationLine:'underline'}}>
          Give Feedback
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerTextContainer} onPress={() => WebBrowser.openBrowserAsync('https://hkuturingclub.github.io/ChiSunApp/privacy-policy/app')}>
        <Text style={{...styles.footerText, textDecorationLine:'underline'}}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  )

  export default SidebarFooter
