// Components | State
import React, {Component} from 'react';
// import { Component } from "react"; === const Component = React.Component
import {ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import ProdutoPage from './src/components/ProdutoPage';

export class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Instaelum',
  };

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(function(respostaDoServer) {
        return respostaDoServer.json();
      })
      .then(respostaConvertida => {
        this.setState({
          posts: respostaConvertida,
        });
      });
  }

  // JSX === HTML
  render() {
    return (
      <ScrollView style={{marginTop: 30}}>
        {this.state.posts.map(function(post) {
          return (
            <TouchableOpacity
              key={post.id}
              onPress={() => {
                this.props.navigation.navigate('FeedStackPostInterno', {
                  postId: post.id,
                  post: post,
                });
              }}>
              <CardPost post={post} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
