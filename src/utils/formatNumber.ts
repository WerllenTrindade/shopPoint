export const formatNumber = (value: number) => {
     if(isNaN(value)){
        return;
     }

    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        value,
    )
};

export const calculatePercentageChange = (oldNumber: number, newNumber: number): string => {
    if (isNaN(oldNumber) || isNaN(newNumber)) {
        return '';
    }

    if (oldNumber === 0) {
        return '';
    }

    const percentageChange = ((newNumber - oldNumber) / oldNumber) * 100;

    return `${percentageChange}%`;
};