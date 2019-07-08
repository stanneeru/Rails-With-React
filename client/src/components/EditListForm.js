import React, { Component } from 'react'

class EditListForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      excerpt: this.props.excerpt
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange =(e) =>{

    this.setState({[e.target.name] : e.target.value})

  }

  handleSubmit =(e) => {
    e.preventDefault();
    const {id, title, excerpt} = this.state 
    this.props.editList(id, title, excerpt)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange} placeholder="Titile.."></input>
        <input name="title" type="text" value={this.state.excerpt} onChange={this.handleChange} placeholder="excerpt.."></input>
        <button>Update List</button>

      </form>
    )
  }

}

export default EditListForm;