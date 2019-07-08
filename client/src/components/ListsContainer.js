import React, { Component } from 'react';
import axios from 'axios';
import List from './List'
import NewListForm from './NewListForm';

class ListContainer extends Component{
 constructor(props){
   super(props);
   this.state={lists: []}
   this.addNewList = this.addNewList.bind(this);
  //  this.onRemovalList = this.onRemovalList.bind(this);
 }

 componentDidMount(){
   axios.get("/api/v1/lists.json")
   .then(response =>{
     console.log(response.data);
     this.setState({lists: response.data})
   })
   .catch(error => console.log(error));
 }

 addNewList(title, excerpt) {
   axios.post("/api/v1/lists", {list: {title, excerpt}})
   .then(response => {
     console.log(response);
     const lists = [...this.state.lists, response.data]
     this.setState({lists})
   })
   .catch(error => {
     console.log(error)
   })

 }

  onRemovalList(id){
   axios.delete("/api/v1/lists/" + id)
   .then(response => {
     const lists = this.state.lists.filter(list => list.id !== id)
     this.setState({lists})
     console.log(lists);
   })
   .catch(error =>  console.log(error))
 }

 onEditList(id){
   axios.put('/api/v1/lists', + id, {

   })
 }

 render(){
   return(
     <div className="lists-container">
       {this.state.lists.map(list => {
        return(
          <List list={list} key={list.id} onRemovalList={() => this.onRemovalList(list.id)} />
        )
       }
       )}
       <NewListForm onNewList={this.addNewList}/>
       
     </div>
   )
 }
}

export default ListContainer