var contactCard = function (props) {
    return React.createElement('div', null,
        React.createElement('img', { src: props.contact.imgUrl }, null),
        React.createElement('h3', null, `${props.contact.name}`),
        React.createElement('p', null, `Phone: ${props.contact.phone}`),
        React.createElement('p', null, `Email: ${props.contact.email}`)
    );
};

export { contactCard };