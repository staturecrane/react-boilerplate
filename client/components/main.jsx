var React = require('react')

class Main extends React.Component{
    
    render() {
        return (
            <div id="dumb-container">
                {this.props.children}
            </div>
        )
    }
    
}

export default Main