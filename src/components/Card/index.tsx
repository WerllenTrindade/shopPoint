import { memo } from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { s } from './styles';
import { productType } from '../../types/dto/productType';
import { Plus } from 'lucide-react-native';
import Button from '../Button';
import { theme } from '../../theme';
import { formatNumber } from '../../utils/formatNumber';

import noImage from '../../assets/no_img.png';
import books1 from '../../assets/books1.png';
import books2 from '../../assets/books2.png';
import clothing1 from '../../assets/clothing1.png';
import clothing2 from '../../assets/clothing2.png';
import toys1 from '../../assets/toys1.png';
import toys2 from '../../assets/toys2.png';
import eletronics1 from '../../assets/eletroniccs1.png';
import eletronics2 from '../../assets/eletronics2.png';

interface CardProps extends TouchableOpacityProps {
    data: productType;
}

const Card = ({ data, ...rest }: CardProps) => {

    const imgProduct = (id: number) => {
        const idNumber = Number(id);
        switch (idNumber) {
            case 1: 
                return eletronics1;
            case 1: 
                return eletronics2;
            case 2: 
                return books1;
            case 3: 
                return books2;
            case 4: 
                return clothing1;
            case 5: 
                return clothing2;
            case 6: 
                return toys1;
            case 7: 
                return toys2;
            default:
                return noImage;
        }
    };

    return (
        <View {...rest} style={s.card}>
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
                <Button.Root style={{ backgroundColor: theme.PRIMARY }}>
                    <Button.Icon icon={<Plus color='#fff' />} />
                </Button.Root>
            </View>
        </View>
    );
};

export default memo(Card);
