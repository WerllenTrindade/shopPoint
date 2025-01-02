import { memo } from 'react';
import { Image, StyleSheet, View} from 'react-native';
import avatar from '../../assets/avatar.png'
import { theme } from '../../theme';

const Avatar = () => {
    return (
       <View style={s.container}>
        <Image style={s.img} source={avatar} />
       </View>
    );
};


 const s = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 8,
    }
});

export default memo(Avatar)