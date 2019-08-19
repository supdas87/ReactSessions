import React from "react";


class ProjectNameCompo extends React.Component{

    render(){
        return (
            <div>
                    <li>
                       Hello {this.props.value}
                    </li>
            </div>
        );}
}

export default ProjectNameCompo;