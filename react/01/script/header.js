class Header extends React.Component {
    constructor() {
        super();
    };
    render() {
        return React.createElement("header", null,
            React.createElement("img", {
                src: "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",
                alt: "Problem?"
            }, null),
            React.createElement("p",null,`Meme Generator`)
        );
    };
};

export { Header };