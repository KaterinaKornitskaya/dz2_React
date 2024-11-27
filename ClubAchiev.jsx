class ClubAchiev extends React.Component{
    constructor(props){
        super(props);
        this.state = {clubsList: this.props.data}
    }

    render(){
        console.log(this.props.data);
        return(
            <div>
                <h3>Достижения</h3>
                {this.props.data.achievements.map(achiv=>(
                    <p>{achiv}</p>
                ))}
            </div>
        )
       
    }
}