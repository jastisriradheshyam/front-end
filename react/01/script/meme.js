import { MemeGenerator } from './meme_generator.js';
import { Header } from './header.js';

class App extends React.Component {
    constructor() {
        super();
    };

    render() {
        return React.createElement('div', null,
            React.createElement(Header, null, null),
            React.createElement(MemeGenerator, null, null)
        );
    };
};

export { App };