import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class New extends Component {
    static defaultProps = {
        country : "in",
        pagesize : 8,
        category : "general"
    }

    static propTypes = {
        country : PropTypes.string,
        pagesize : PropTypes.number,
        category : PropTypes.string
    }
    
   
//   
  constructor(props){
    super(props);
    this.state = {
        articles: [],
        loading : false,
        totaldata : 0,
        curpage: 1

    }
    document.title = `${this.props.category} - NewsMonkey`;
}


    async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0212c9f6b92d47959db59dee168bf10b&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseddata = await data.json();
    
    this.setState({articles: parseddata.articles,totaldata: parseddata.totalResults,loading:false});
    
    
}
// async UpdateDidMount(){
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0212c9f6b92d47959db59dee168bf10b&pagesize=${this.props.pagesize}&page=${this.state.curpage}}`;
//     this.setState({loading:true});
//     let data = await fetch(url);
//     let parseddata = await data.json();
    
//     console.log(data)
//     console.log(this.state.curpage)
//     //console.log(url)
//     this.setState({articles: parseddata.articles,loading:false});
// }

    fetchMoreData = async() => {
        this.setState({
            curpage:this.state.curpage+1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0212c9f6b92d47959db59dee168bf10b&pagesize=${this.props.pagesize}&page=${this.state.curpage}`;
        // this.setState({loading:true});
        let data = await fetch(url);
        let parseddata = await data.json();
        
        this.setState({articles:this.state.articles.concat(parseddata.articles),totaldata: parseddata.totalResults});

    };
    prevclick=async()=>{
        
        let i = this.state.curpage;
        i--;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0212c9f6b92d47959db59dee168bf10b&pagesize=${this.props.pagesize}&page=${i}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles: parseddata.articles,curpage:i,loading:false});
        // this.setState({curpage:i});
        // this.UpdateDidMount();
    }
    nextclick=async()=>{
        let i = this.state.curpage;
        i++;
        this.setState({loading:true});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0212c9f6b92d47959db59dee168bf10b&pagesize=${this.props.pagesize}&page=${i}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({articles: parseddata.articles,curpage:i,loading:false,});
        // this.setState({curpage:i});
        // this.UpdateDidMount();
    }
    
  
  render()
  {
    
    
    return (
        
        <div className="my-4 text-center">
        <h2>Monkey News : Top {this.props.category} Headlines</h2>
        
        {this.state.loading && <Loading/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totaldata}
          loader={<Loading/>}
        >
        <div className="container">
        <div className="row my-3">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
                    <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} newsurl = {element.url} imageurl = {element.urlToImage?element.urlToImage:"https://cdn.sanity.io/images/0vv8moc6/ophtalmology/8f5bddb4c37f3b91cb9260487f51da714ff9c092-1200x800.jpg?fit=crop&auto=format"}
                    author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                   </div>
        

        })}
        
          
        </div>
        </div>  
        </InfiniteScroll>
        {/* <div className='button-container d-flex justify-content-between'>
        <button type="button" disabled={this.state.curpage-1<1} className="btn btn-dark " onClick={this.prevclick}>&#8592; Previous</button>
        <button type="button" disabled={this.state.curpage+1>Math.ceil(this.state.totaldata/this.props.pagesize)} className="btn btn-dark " onClick={this.nextclick}>Next &#8594;</button>
        </div> */}
        
      </div>
    )
  }
}

export default New
