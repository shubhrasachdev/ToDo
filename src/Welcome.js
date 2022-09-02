import React from 'react';

// function Welcome(props) {
//   return <div className="welcome">Hello {props.name}!</div>;
// }

class Welcome extends React.Component {
    render() {
        return <div className="welcome">Hello {this.props.name}!</div>;
    }
}

export default Welcome;