class changeState extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        // this.setState({ count: this.state.count + 1 }); this also works
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    };

    render() {
        return React.createElement("div", null,
            React.createElement("h1", null, `${this.state.count}`),
            React.createElement("button", { onClick: this.handleClick }, `Change!`)
        );
    };
};

export { changeState };