import React, { Component} from 'react';
import { FacebookProvider, Share } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="330944807970336">
        <Share href="http://www.facebook.com">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Partager</button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}