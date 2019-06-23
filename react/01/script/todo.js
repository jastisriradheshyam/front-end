var TodoItem = function (props) {
    let completeStyle = {
        textDecoration: "line-through",
        fontStyle: "italic"
    };
    return React.createElement('div', { className: "todo-item dsd" },
        React.createElement('input', {
            type: 'checkbox',
            checked: props.item.completed,
            onChange: () => props.handleChange(props.item.id)
        }, null),
        React.createElement('p', {
            style: props.item.completed ? completeStyle : null
        }, `${props.item.text}`)
    );
};

export { TodoItem };