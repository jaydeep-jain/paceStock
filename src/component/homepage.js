

import React, { Component } from 'react'
import Card from './Card'

export class Homepage extends Component {
    constructor() {
        super()
        console.log("this is constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
        document.body.style.background='#5661a1'

    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1e5ffccdc8304f4ca5d6b6e444bb12b5&page=${this.state.page}&pageSize=9`
        let data = await fetch(url)
        data = await data.json()
        this.setState({
            articles: data.articles,
           total:data.totalResults

        })
    }
   pre= async () =>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1e5ffccdc8304f4ca5d6b6e444bb12b5&page=${this.state.page-1}&pageSize=9`
        let data = await fetch(url)
        data = await data.json()      
        this.setState({
            articles: data.articles,
            page:this.state.page-1
        })
    }
    next= async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1e5ffccdc8304f4ca5d6b6e444bb12b5&page=${this.state.page+1}&pageSize=9`
        let data = await fetch(url)
        data = await data.json()
     
        this.setState({
            articles: data.articles,
            page:this.state.page+1
        })
    }

    render() {
        console.log("render")
        return (
            <div className='container'>
                <h1>This news From my-News</h1>
                <hr />
                <form action=""></form>
                <div className='row my-4'>
                    {this.state.articles && this.state.articles.map((e) => {
                        return <div className="col-md-4 my-2" key={e.url}>
                            <Card title={e.title ? e.title.slice(0, 30) : ""} imgUrl={e.urlToImage ? e.urlToImage : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"} url={e.url} dis={e.description ? e.description.slice(0, 50) : ""}></Card>
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type="button" onClick={this.pre} className="btn  btn-dark"> &larr;Previves</button>
                    <button disabled={this.state.page>=Math.ceil(this.state.total/9)} type="button" className="btn btn-dark" onClick={this.next}>Next &rarr;</button>
                </div>
            </div >
        )
    }
}
export default Homepage()
