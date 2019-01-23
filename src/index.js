import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, View, Text, Platform,
} from 'react-native';

import Post from '~/components/Post';

const primary = '#333';
const white = '#fff';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    color: white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: white,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 30,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Breno França',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo ut nisl tincidunt luctus auctor non orci. Nullam varius justo vel velit bibendum sollicitudin. Pellentesque pharetra, sem vel dignissim hendrerit, metus lorem consequat justo, quis facilisis erat erat sit amet nulla. Etiam luctus eu justo fringilla mattis. ',
      },
      {
        id: 2,
        title: 'Aplicando React Native',
        author: 'Breno França',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo ut nisl tincidunt luctus auctor non orci. Nullam varius justo vel velit bibendum sollicitudin. Pellentesque pharetra, sem vel dignissim hendrerit, metus lorem consequat justo, quis facilisis erat erat sit amet nulla. Etiam luctus eu justo fringilla mattis. ',
      },
      {
        id: 3,
        title: 'Desenrolando React Native',
        author: 'Breno França',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo ut nisl tincidunt luctus auctor non orci. Nullam varius justo vel velit bibendum sollicitudin. Pellentesque pharetra, sem vel dignissim hendrerit, metus lorem consequat justo, quis facilisis erat erat sit amet nulla. Etiam luctus eu justo fringilla mattis. ',
      },
      {
        id: 4,
        title: 'Ganhando Grana com React Native',
        subTitle: 'Breno França',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo ut nisl tincidunt luctus auctor non orci. Nullam varius justo vel velit bibendum sollicitudin. Pellentesque pharetra, sem vel dignissim hendrerit, metus lorem consequat justo, quis facilisis erat erat sit amet nulla. Etiam luctus eu justo fringilla mattis. ',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>GoNative APP 1</Text>
        </View>
        <View style={styles.content}>
          <ScrollView>
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default App;
