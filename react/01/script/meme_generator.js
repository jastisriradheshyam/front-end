class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    allMemeImgs: response.data.memes
                })
            })
    };

    handleChange(event) {
        let { type, name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        // to stop reload onsubmit
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({
            randomImg: randMemeImg
        })
    };

    render() {
        return React.createElement("div", null,
            React.createElement("form", {
                className: "meme-form",
                onSubmit: this.handleSubmit
            },
                React.createElement("input", {
                    type: "text",
                    name: "topText",
                    placeholder: "topText",
                    value: this.state.topText,
                    onChange: this.handleChange
                }, null),
                React.createElement("input", {
                    type: "text",
                    name: "bottomText",
                    placeholder: "bottomText",
                    value: this.state.bottomText,
                    onChange: this.handleChange
                }, null),
                React.createElement("button", null, `Gen`)
            ),
            React.createElement("div", {
                className: "meme"
            },
                React.createElement("img", {
                    src: this.state.randomImg,
                    alt: ""
                }),
                React.createElement("h2", {
                    className: "top"
                }, `${this.state.topText}`),
                React.createElement("h2", {
                    className: "bottom"
                }, `${this.state.bottomText}`)
            )
        );
    };
};

export { MemeGenerator };