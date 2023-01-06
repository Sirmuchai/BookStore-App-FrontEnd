import React, { Component } from 'react';

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state here
    };
  }

  render() {
    return (
      <div>
        <footer className='footer'>
            <span className='text-muted'>All Rights Reserved 2023 @SityComm</span>
        </footer>
        
      </div>
    );
  }
}

export default FooterComponent;
