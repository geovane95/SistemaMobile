import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
export const ProdutoHeader = function(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeProduto}>{`@${props.nomeProduto}`}</Text>
      <Text style={styles.tamanho}>{`@${props.tamanho}`}</Text>
      <Text style={styles.valor}>{`@${props.valor}`}</Text>
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
ProdutoHeader.propTypes = {
  nomeProduto: PropTypes.string.isRequired,
  tamanho: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
};
