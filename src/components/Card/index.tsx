import { memo } from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { s } from './styles';
import { productType } from '../../types/dto/productType';
import { Plus } from 'lucide-react-native';
import Button from '../Button';
import { theme } from '../../theme';
import { formatNumber } from '../../utils/formatNumber';
import { imgProduct } from '../../utils';


interface CardProps extends TouchableOpacityProps {
    data: productType;
}

const Card = ({ data, ...rest }: CardProps) => {
    return (
        <View style={s.card}>
            <Image style={s.img} source={imgProduct(data.id)} />
            <Text style={s.nome}>{data.name}</Text>
            <Text style={s.estoque}>Estoque: {data.stock} UN</Text>
            <View style={s.footer}>
                <View>
                    <Text style={[data.promotion_price ? s.price_old : s.price]}>
                        {formatNumber(data.price)}
                    </Text>
                    {data.promotion_price > 0 && (
                        <Text style={s.price_new}>{formatNumber(data.promotion_price)}</Text>
                    )}
                </View>
                <Button.Root  {...rest} style={{ backgroundColor: theme.PRIMARY }}>
                    <Button.Icon icon={<Plus color='#fff' />} />
                </Button.Root>
            </View>
        </View>
    );
};

export default memo(Card);
