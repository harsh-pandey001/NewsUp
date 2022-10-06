import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <>
        <div className="card" style = {{width: "18rem"}} >
        <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/810410db81677c53668efd14c3cf18a4.jpg" className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/" className="btn btn-sm btn-primary">Go somewhere</a>
       </div>
      </div>
      </>
    )
  }
}

export default Newsitems