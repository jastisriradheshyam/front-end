class testState2 extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        };
    }
    render() {
        let loggedState = "";
        if (this.state.isLoggedIn) {
            loggedState = "in";
        } else {
            loggedState = "out";
        }
        return React.createElement("div", null,
            React.createElement("h1", null, `You are currently logged ${loggedState}`)
        );
    }
};

export { testState2 };