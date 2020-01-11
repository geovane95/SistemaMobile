import React, {Component} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {ProdutoHeader} from './ProdutoHeader';
import {ProdutoFooter} from './ProdutoFooter';
import PropTypes from 'prop-types';

export default class ProdutoPage extends Component {
  render() {
    const screenWidth = Dimensions.get('screen').width;
    const produto = this.props.produto;
    return (
      <View>
        <ProdutoHeader
          nome={produto.nomeProduto}
          valor={produto.valor}
          tamanho={produto.tamanho}
        />
        <Image
          style={{width: screenWidth, height: screenWidth}}
          source={{uri: produto.urlFoto}}
        />
        <ProdutoFooter ingredientes={produto.ingredientes} />
      </View>
    );
  }
}

ProdutoPage.propTypes = {
  produto: PropTypes.shape({
    nomeProduto: PropTypes.string,
    ingredientes: PropTypes.string,
    urlFoto: PropTypes.string,
    valor: PropTypes.string,
    tamanho: PropTypes.string,
  }).isRequired,
};

// 20 minutos, para criar o CardPostHeader o e CardPostFooter
// export const NomeDoComponent = function() { return (...) }
