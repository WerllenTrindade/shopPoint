import { memo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { s } from './styles';
import { GroupType } from '../../types/dto/groupType';
import { theme } from '../../theme';


interface GroupProps extends TouchableOpacityProps {
    data: GroupType;
    select: number;
}

const Group = ({ data, select, ...rest }: GroupProps) => {
    return (
        <TouchableOpacity {...rest} style={s.card}>
            <Text style={[select == data.id ? 
                {color: theme.SUCCESS, fontWeight: 'bold'
                } : 
                {color: theme.TEXT_GROUP}, s.nome]}>{data.name}</Text>
        </TouchableOpacity>
    );
};


export default memo(Group)