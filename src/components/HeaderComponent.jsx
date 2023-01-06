import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state here
    };
  }

  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='http://sitycomm.co.ke' className='navbar-brand'>Book Store Management System</a>
                </div>
            </nav>
        </header>
        
      </div>
    );
  }
}

export default HeaderComponent;
