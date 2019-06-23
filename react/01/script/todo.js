var TodoItem = function (props) {
    return React.createElement('div', { className: "todo-item dsd" },
        React.createElement('input', {
            type: 'checkbox',
            checked: props.item.completed,
            onChange: () => props.handleChange(props.item.id)
        }, null),
        React.createElement('p', null, `${props.item.text}`)
    );
};

export { TodoItem };