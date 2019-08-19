import React from "react";
import ProjectNameCompo from "./ProjectNameCompo.js"




class ProjectList extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            name : "Supriyo",
            id: 1


        } 
	
    }

    render(){
        return(
            <div>

                <h1>Project Management System</h1>
                <hr/>
                

                <ul>
                   <ProjectNameCompo value = {this.state}/>
                </ul>
            </div>
        );
    }

}
export default ProjectList;
//ReactDOM.render(<ProjectNameCompo />, document.getElementById('root'));