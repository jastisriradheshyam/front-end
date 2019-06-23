class TestClass extends React.Component {
    render() {
        return React.createElement('ul',null,
        React.createElement('li',null,`test1`),
        React.createElement('li',null,`test2`),
        React.createElement('li',null,`test3`)
        );
    };
};

export {TestClass};