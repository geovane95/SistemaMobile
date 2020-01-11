import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {AreaDeslogado} from './src/modules/AreaDeslogado';
import {AuthScreen} from './src/modules/Autenticacao';
import {LoginScreen} from './src/modules/Login';
import {ProdutoScreen} from './Produto.js';

const PerfilScreen = props => (
  <View>
    <Text>Perfil</Text>
    <Button
      title="Editar Perfil"
      onPress={() => props.navigation.navigate('PerfilStack')}
    />
  </View>
);

const CardapioScreen = props => (
  <View>
    <Text>Cardápio</Text>
    <Button
      title="Cardápio"
      onPress={() => props.navigation.navigate('HomeStackCardapio')}
    />
  </View>
);

const HomeStack = createStackNavigator({
  HomeStackCardapio: {
    screen: CardapioScreen,
  },
  HomeStackPizza: {
    screen: ProdutoScreen,
  },
});

const PerfilStack = createStackNavigator({
  PerfilStackHome: {
    screen: PerfilScreen,
  },
});

const AreaLogado = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
  },
  Perfil: {
    screen: PerfilStack,
  },
  // logout
});

const SistemaDeNavegacao = createSwitchNavigator(
  {
    Auth: AuthScreen,
    Deslogado: AreaDeslogado,
    Logado: AreaLogado,
  },
  {initialRouteName: 'Auth'},
);

export default createAppContainer(SistemaDeNavegacao);
