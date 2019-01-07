import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

class Metamorph extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords:
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string), PropTypes.string])
  }

  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta property="og:title" content={this.props.title} />
        <meta property='twitter:title' content={this.props.title} />

        <meta property="description" content={this.props.description} />
        <meta property="og:description" content={this.props.description} />
        <meta property='twitter:description' content={this.props.description} />

        {this.props.keywords ?
          <meta name='keywords' content={this.props.keywords} /> : null}
      </Helmet>
    );
  }
}

export default Metamorph;
