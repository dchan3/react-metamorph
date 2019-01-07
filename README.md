# react-metamorph

## Introduction
This package aims to save time dynamically rendering metatags that seem
redundant, such as those by Open Graph and Twitter.

## Installation
`npm i react-metamorph -S`

## Usage
```Javascript
import React, { Component } from 'react';
import { Metamorph } from 'react-metamorph';

class MyPage extends Component {
  render() {
    return <Metamorph title="Hello World!"
      description="Welcome to my page!"
      keywords=["My page", 'Hello World']
      image="hello.jpg" />
  }
}
```
