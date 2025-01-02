import React from 'react';
import {FlatList,  ImageBackground,  Text,  View} from 'react-native';

import Card from '../../components/Card';
import Group from '../../components/Group';
import { Search } from '../../components/Search';
import { HeaderHome } from './_components/HeaderHome';

import {s} from './styles';
import line from '../../assets/line.png'

import { useHome } from './useHome';


export function Home() {
  const {
    selectGroup,
    groupSelect,
    group,
    product,
    isGroupLoading,
    isProductLoading
  } = useHome();

  if (isGroupLoading || isProductLoading) {
    return <View style={s.container}><Text>Loading...</Text></View>;
  }

  return (
    <View style={s.container}>
      <ImageBackground source={line} style={s.imgBackground}>
        <HeaderHome/>
        <Search/>
      </ImageBackground>

      <View>
        <FlatList
        data={group}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <Group
            select={groupSelect}
            onPress={() => selectGroup(item)}
            data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          marginBottom: 5
        }}
        />
      </View>
      
      <View style={{width: '100%'}}>
        <FlatList
          data={product}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={s.contentFlat}
          renderItem={({item}) => (
            <Card
            onPress={() => null}
              data={item}
            />
          )}
        />
      </View>
    </View>
  );
}
