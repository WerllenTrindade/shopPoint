import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import noImage from '../assets/no_img.png';
import books1 from '../assets/books1.png';
import books2 from '../assets/books2.png';
import clothing1 from '../assets/clothing1.png';
import clothing2 from '../assets/clothing2.png';
import toys1 from '../assets/toys1.png';
import toys2 from '../assets/toys2.png';
import eletronics1 from '../assets/eletroniccs1.png';
import eletronics2 from '../assets/eletronics2.png';


interface PlatformProps {
    ios: number;
    android: number;
} 

export const platformSpecificValue = ({ios, android}: PlatformProps) => Platform.OS == 'ios' ? RFValue(ios) : RFValue(android)

export const imgProduct = (id: number) => {
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
