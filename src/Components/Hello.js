import React from 'react';

class Hello extends React.Component {
    render(props) {
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}
export default Hello;