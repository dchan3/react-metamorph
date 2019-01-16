import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

class Metamorph extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords:
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    image: PropTypes.string
  }

  static defaultProps = {
    image: undefined,
    keywords: undefined
  }

  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta property="og:title" content={this.props.title} />
        <meta name='twitter:title' content={this.props.title} />

        <meta property="description" content={this.props.description} />
        <meta property="og:description" content={this.props.description} />
        <meta name='twitter:description' content={this.props.description} />

        {this.props.image ? [
          <meta property="og:image" content={this.props.image} />,
          <meta name="twitter:image" content={this.props.image} />
        ] : null}

        {this.props.keywords ?
          <meta name='keywords' content={
            (typeof this.props.keywords === 'object') ?
              this.props.keywords.join(',') : this.props.keywords} /> : null}
      </Helmet>
    );
  }
}

export default Metamorph;
