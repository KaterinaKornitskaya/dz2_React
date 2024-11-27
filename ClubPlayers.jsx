class ClubPlayers extends React.Component{
    constructor(props){
        super(props);
        this.state = {clubsList: this.props.data}
    }

    render(){
        console.log(this.props.data);
        return(
            <div>
                <h3>Игроки</h3>
                {this.props.data.roster.map(pl=>(
                    <p>{pl}</p>
                ))}
            </div>
        )
       
    }
}