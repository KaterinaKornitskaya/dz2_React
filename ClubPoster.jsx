class ClubPoster extends React.Component{
    constructor(props){
        super(props);
        this.state = {clubsList: this.props.data}
    }
    render(){
        return(
            <div>
                <img src={this.props.data.info.crest} height={'200px'}/>
            </div>
        )
    }
}