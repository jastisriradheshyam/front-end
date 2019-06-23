class stateTest extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Jasti Sri Radhe Shyam",
            age: 22
        };
    }
    render() {
        return React.createElement("div", null,
            React.createElement("h1", null, `${this.state.name}`),
            React.createElement("h3", null, `${this.state.age} years old`)
        );
    };
}

export { stateTest };