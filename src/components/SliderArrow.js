var React=require('react');
export default class SliderArrow extends React.Component{
    constructor(props){
        super(props);
    }
    handleLeftClick(){
        this.props.go(-1);
    }
    handleRightClick(){
        this.props.go(1);
    }
    render(){
        return(
            <div>
                <span className="slide-arrow arrow-left" onClick={this.handleLeftClick.bind(this)}>左翻</span>
                <span className="slide-arrow arrow-right" onClick={this.handleRightClick.bind(this)}>右翻</span>
            </div>
        )
    }
}