import React from 'react';

const NewListForm = ({onNewList = f => f}) => {
    let _title, _excerpt
    const submit = e => {
        e.preventDefault()
        onNewList(_title.value, _excerpt.value)
        _title.value = ''
        _excerpt.value = ''
        _title.focus()
    }

    return (
    <form onSubmit={submit}>
        <input type="text" ref={input => _title = input} placeholder="please enter Title.." required></input>
        <input type="text" ref={input => _excerpt = input} placeholder="please enter Excerpt.." required></input>
        <button>Add Lists</button>
    </form>
)
}

export default NewListForm;