class Root extends React.Component {
    render() {
        return (
            <div className="root-container">
                <Hello />
                <World />
            </div>
        );
    }
}
ReactDOM.render( <Root />, document.getElementById('root'));