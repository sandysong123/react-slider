var React=require('react');
export default class SliderDots extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(i){
        i=i-this.props.nowLocal;
        this.props.go(i);
    }
    render(){
        var dots=[];
        var step=this.props.nowLocal==this.props.count?0:this.props.nowLocal;
        for(var i=0;i<this.props.count;i++){
            dots.push(<li key={i} className={i==step?"active":""} onClick={this.handleClick.bind(this,i)}>{i}</li>)
        }
        return(
            <ul className="slide-page">
                {dots}
            </ul>
        )
    }
}