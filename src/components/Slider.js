import React from 'react';
import SliderArrow from './SliderArrow';
import SliderDots from './SliderDots';
import $ from 'jquery';
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nowLocal:0
        }
    }
    go(n){
        var len=this.props.items.length;
        var _n=this.state.nowLocal+n;
        if(_n==len+1){
            this.$sliderList.css({
                left:0
            });
            _n=1;
        }
        if(_n<0){
            this.$sliderList.css({
                left:-parseInt(this.props.width)*len
            });
            _n=len-1;
        }
        this.$sliderList.animate({
            left:-parseInt(this.props.width)*_n
        },500);
        this.setState({nowLocal:_n});
    }
    handleMouseOver(){
        clearInterval(this.autoplayFlay);
    }
    handleMouseOut(){
        this.autoPlay();
    }
    autoPlay(){
        clearInterval(this.autoplayFlay);
        this.autoplayFlay=window.setInterval(()=>{
            this.go(1)
        },this.props.interval||1000)
    }
    componentDidMount(){
        this.$sliderList=$(".slider-list");
        this.autoPlay();
    }
    render(){
        var count=this.props.items.length;
        var width=parseInt(this.props.width);
        return(
            <div className="slider-wrap" onMouseOver={this.handleMouseOver.bind(this)}  onMouseOut={this.handleMouseOut.bind(this)}>
                <ul className="slider-list" style={{width:(count+1)*width+'px'}}>
                    {
                        this.props.items.map((item,index)=>{
                            return <li key={index} style={{width:width+'px'}}>
                                <a href={item.href}><img src={item.src} alt={item.alt}/>
                                    {item.title?<h3>{item.title}</h3>:null};
                                </a>

                            </li>
                        })
                    }
                    <li key={count+1} style={{width:width+'px'}}><a href={this.props.items[0].href}><img src={this.props.items[0].src} alt={this.props.items[0].alt}/>{this.props.items[0].title?<h3>{this.props.items[0].title}</h3>:null};</a></li>
                </ul>
                {
                    this.props.arrow?<SliderArrow go={this.go.bind(this)} />:null
                }
                {
                    this.props.dots?<SliderDots count={count}  go={this.go.bind(this)} nowLocal={this.state.nowLocal} />:null
                }

            </div>
        )
    }
}