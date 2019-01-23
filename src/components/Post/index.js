import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';

const backgroundColor = '#FFF';
const borderBottomColor = '#d5d5d5';
const headerSubtitleColor = '#888';
const descriptionColor = '#888';

const styles = StyleSheet.create({
  author: {
    color: headerSubtitleColor,
    fontSize: 12,
    marginBottom: 5,
  },
  container: {
    backgroundColor,
    borderRadius: 4,
    height: 200,
    marginTop: 45,
    padding: 10,
  },
  description: {
    color: descriptionColor,
    fontSize: 11,
  },
  header: {
    borderBottomColor,
    borderBottomWidth: 0.5,
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
});

const Post = ({ post }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
    </View>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
