import { TestClass } from './test.js';
import { TodoItem } from './todo.js';
import { contactCard } from './contact_card.js';
import { joke } from './joke.js';
import { stateTest } from './state.js';
import { testState2 } from './state2.js';
import { changeState } from './stateChange.js';

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, { toWhat: 'World' }, null),
    document.getElementById('root')
);

class Bullets extends React.Component {
    render() {
        return React.createElement('ul', null,
            React.createElement('li', null, `1`),
            React.createElement('li', null, `2`),
            React.createElement('li', null, `3`)
        );
    }
}

ReactDOM.render(
    React.createElement(Bullets, null, null),
    document.getElementById('bullets')
);

class MyInfo extends React.Component {
    render() {
        return React.createElement('div', null,
            React.createElement('h1', null, `Jasti Sri Radhe Shyam`),
            React.createElement('p', { style: { color: "brown" } }, `Blockchain developer`),
            React.createElement('input', { type: 'checkbox' }, null),
            React.createElement(Bullets, null, null)
        );
    }
}

ReactDOM.render(
    React.createElement(MyInfo, null, null),
    document.getElementById('myInfo')
)
class ToDo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                todos: updatedTodos
            };
        });
    };
    componentDidMount() {
        fetch('./data/todosData.json')
            .then(response => response.json())
            .then(todosData => {
                this.setState({
                    todos: todosData
                });
            });
    }

    // may be depricated (16.3)
    // ComponentWillReceiveProps(nextProps) {
    // 
    // this can receive props from parent component
    // and every time this component recieve props
    // it will run this function.
    // 
    //  example:
    //  if(nextProps.whatever !== this.props.whatever) {
    //   
    //  }
    // }
    // Renamed to UNSAFE_componentWillReceiveProps untill 17

    // Deprecated
    // componentWillMount() {
    // 
    // }

    // static getDerivedStateFromProps(props, state) {
    //     return the new, updated state based upon the props
    // };

    // getSnapshotBeforeUpdate() {
    //     can be used to create a backup of the current way things are
    // };

    // Deprecated
    // componentWillUpdate() {
    // 
    // }

    // componentWillUnmount() {

    // }

    // shouldComponentUpdate(nextProps,nextState) {
    //     this will give developer the power to decide
    //     whether to rerender or not based on nextprops 
    //     or next state or both.
    //     used to make the component more performent.     
    //
    //     return true if want it to update
    //     return false if not
    // };

    render() {
        const todoItems = this.state.todos.map(item => {
            return TodoItem({
                key: item.id,
                item: item,
                handleChange: this.handleChange
            });
        });
        // console.log(todoItems);
        return React.createElement.apply(null, ['div', { className: ["todo-list"] }].concat(todoItems));
    };
}
ReactDOM.render(
    React.createElement(ToDo, null, null),
    document.getElementById('toDo')
)

ReactDOM.render(
    React.createElement('div', null,
        contactCard({
            contact: {
                name: "Mr. Whiskerson",
                imgUrl: "http://placekitten.com/300/200",
                phone: "(212) 555-1234",
                email: "mr.whiskaz@catnap.meow"
            }
        }),
        contactCard({
            contact: {
                name: "Fluffykins",
                imgUrl: "http://placekitten.com/400/200",
                phone: "(212) 555-2345",
                email: "fluff@me.com"
            }
        }),
        contactCard({
            contact: {
                name: "Destroyer",
                imgUrl: "http://placekitten.com/400/300",
                phone: "(212) 555-3456",
                email: "ofworlds@yahoo.com"
            }
        }),
        contactCard({
            contact: {
                name: "Felix",
                imgUrl: "http://placekitten.com/200/100",
                phone: "(212) 555-4567",
                email: "thecat@hotmail.com"
            }
        })
    ),
    document.getElementById('contacts')
);
var jokes = function () {
    fetch('./data/jokes_data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            let jokesData = jsonData.jokes;
            let jokes = jokesData.map(jokeData => joke({ question: jokeData.question, punchLine: jokeData.punchLine }));
            ReactDOM.render(
                React.createElement.apply(null, ['div', null].concat(jokes)),
                document.getElementById('question_answer')
            );
        }).catch((err) => {
            console.log(err);
        });
};

jokes();


class TestGreetings extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(TestGreetingHeader, { username: "Jasti Sri Radhe Shyam" }, null),
            React.createElement(Greeting, null, null)
        );
    };
};

class TestGreetingHeader extends React.Component {
    render() {
        return React.createElement("header", null,
            React.createElement("p", null, `Welcome, ${this.props.username}!`)
        );
    };
};

class Greeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night";
        }
        return React.createElement("h1", null, `Good ${timeOfDay} to you, sir or madam!`);
    };
};


ReactDOM.render(React.createElement(TestGreetings, null, null),
    document.getElementById("greetings"));

ReactDOM.render(React.createElement(stateTest, null, null),
    document.getElementById("testState")
);

ReactDOM.render(React.createElement(testState2, null, null),
    document.getElementById("testState2")
);

ReactDOM.render(React.createElement(changeState, null, null),
    document.getElementById("changeState")
);

class Conditional extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
        this.handleLoginState = this.handleLoginState.bind(this);
    };
    handleLoginState() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            };
        });
    }
    render() {
        return React.createElement("div", null,
            React.createElement('h1', null, `${this.state.isLoggedIn ? 'Logged in' : 'Logged out'}`),
            React.createElement('button', {
                onClick: this.handleLoginState
            }, `${this.state.isLoggedIn ? 'Log out' : 'Log in'}`)
        );
    };
};

ReactDOM.render(React.createElement(Conditional, null, null),
    document.getElementById("conditional")
);

class fetchExample extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        };
    };

    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            });
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name;
        return React.createElement('div', null,
            React.createElement('p', null, `${text}`)
        );
    };
};

ReactDOM.render(
    React.createElement(fetchExample, null, null),
    document.getElementById('fetchExample')
);

class formExample extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue",
            textBoxData: "Some default value"
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    };

    render() {
        return React.createElement('form', null,
            React.createElement('input', {
                type: "text",
                value: this.state.firstName,
                name: "firstName",
                placeholder: "First Name",
                onChange: this.handleChange
            }, null),
            React.createElement("br", null, null),
            React.createElement("input", {
                type: "text",
                value: this.state.lastName,
                name: "lastName",
                placeholder: "Last Name",
                onChange: this.handleChange
            }, null),
            React.createElement("br", null, null),
            React.createElement("textarea", {
                value: this.state.textBoxData,
                name: "textBoxData",
                onChange: this.handleChange
            }, null),
            React.createElement("br", null, null),
            React.createElement("input", {
                type: "radio",
                name: "gender",
                value: "male",
                checked: this.state.gender === "male",
                onChange: this.handleChange
            }, null),
            React.createElement('label', null, `Male`),
            React.createElement("br", null, null),
            React.createElement("input", {
                type: "radio",
                name: "gender",
                value: "female",
                checked: this.state.gender === "female",
                onChange: this.handleChange
            }, null),
            React.createElement('label', null, `Female`),
            React.createElement("br", null, null),
            React.createElement("input", {
                type: "checkbox",
                name: "isFriendly",
                checked: this.state.isFriendly,
                onChange: this.handleChange
            }, null),
            React.createElement('label', null, `Is friendly?`),
            React.createElement("br", null, null),
            React.createElement('label', null, `Favorite color:`),
            React.createElement('select', {
                value: this.state.favColor,
                onChange: this.handleChange,
                name: "favColor"
            },
                React.createElement('option', { value: "blue" }, `Blue`),
                React.createElement('option', { value: "red" }, `Red`),
                React.createElement('option', { value: "green" }, `Green`)
            ),
            React.createElement("h2", null, `${this.state.firstName} ${this.state.lastName}`)
        );
    }
};

ReactDOM.render(
    React.createElement(formExample, null, null),
    document.getElementById("formExample")
)