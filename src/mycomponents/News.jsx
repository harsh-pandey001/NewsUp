import React, { Component } from 'react'
import Newsitems from './Newsitems'


export class News extends Component {
  render() {
    return (
      <div>
    the is the News --{`>`}
      <Newsitems/>
      <Newsitems/>
      <Newsitems/>
      <Newsitems/>
      </div>
    )
  }
}

export default News
