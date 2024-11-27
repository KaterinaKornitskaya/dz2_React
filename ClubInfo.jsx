class ClubInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {clubsList: this.props.data}
    }

    render(){
        console.log(this.props.data);
        return(
            <div>
                <h2>{this.props.data.info.name}</h2>
                <span>Город: </span>
                <span>{this.props.data.info.city}</span>
                <p></p>
                <span>Год основания: </span>
                <span>{this.props.data.info.founded}</span>
            </div>
        )      
    }
}