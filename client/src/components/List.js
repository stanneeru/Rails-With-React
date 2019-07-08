import React from 'react';
function List({list, onRemovalList=f=>f}){

  return( 
      <div className="single-list">
      <h4>{list.title}</h4>
      <p>{list.excerpt}</p>
      <button onClick={() => onRemovalList(list.id)}></button>
      </div>
    )

}

export default List