import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

// Importa um botão
// Adiciona na view
// Aplica a ação
// Ativar a flag para dizer que o tweet foi likeado
export const ProdutoFooter = function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.ingredientes}>{`@${props.ingredientes}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'flex-start',
    padding: 15,
  },
  nomeProduto: {paddingLeft: 15},
  tamanho: {paddingLeft: 15},
  valor: {paddingLeft: 10},
});

// npm install prop-types
ProdutoFooter.propTypes = {
  ingredientes: PropTypes.string.isRequired,
};
