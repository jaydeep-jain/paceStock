import React, { Component } from 'react'

export class Card extends Component {
    render() {
        let {title,imgUrl,url,dis}=this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl} className="card-img-top" alt="this is img" height='200px'/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{dis}</p>
                            <a rel="noreferrer" href={url} target='_blank' className="btn  btn-sm btn-dark">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Card