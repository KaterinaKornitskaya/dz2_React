class Film extends React.Component{
    constructor(props){
        super(props);
        this.state = {myFilm: this.props.data} 
    }

    render(){
        console.log(this.props.data);
        return(
        <div className="sectmain">
            <div className="sectPoster">
                <img src={this.props.data.posterPath}/>
            </div>
            <div className="sectInfo">
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.year}</p>
                <p>{this.props.data.director}</p>
                <p>{this.props.data.actors}</p>
                <p>{this.props.data.description}</p>
            </div>         
        </div>
        )
    }


    // render(){
    //     console.log(this.props.title);
    //     return(
    //     <li>
    //         <ul>
    //             <li>{this.props.title}</li>               
    //             <li>{this.props.year}</li>
    //         </ul>          
    //     </li>
    //     )
    // }
}