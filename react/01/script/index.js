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
        // fetch('./data/todosData.json')
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (todosData) {
        //         this.state = {
        //             todos: todosData
        //         }
        //     });
        this.state = {
            todos: [
                {
                    "id": 1,
                    "text": "Take out the trash",
                    "completed": true
                },
                {
                    "id": 2,
                    "text": "Grocery shopping",
                    "completed": false
                },
                {
                    "id": 3,
                    "text": "Mow lawn",
                    "completed": true
                },
                {
                    "id": 4,
                    "text": "Catch up on arrested development",
                    "completed": false
                },
                {
                    "id": 5,
                    "text": "Clean gecko tank",
                    "completed": false
                }
            ]
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
    // componentDidMount() {

    // }

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