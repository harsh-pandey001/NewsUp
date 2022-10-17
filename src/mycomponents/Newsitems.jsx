import React, { Component } from 'react'

export class Newsitems extends Component {


  render() {
    let {title, description, imageUrl,newsUrl } = this.props;
    return (
      <>
        <div className="card" style = {{width: "18rem"}} >
        <img src={!imageUrl?"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/810410db81677c53668efd14c3cf18a4.jpg":imageUrl} className="card-img-top" alt="..."/>
       <div className="card-body">
       <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target= '_blank' className="btn btn-sm btn-primary">Read More</a>
       </div>
      </div>
      </>
    )
  }
}

export default Newsitems