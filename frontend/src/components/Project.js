import React, {Component} from 'react';
import './Project.css';

class Project extends Component
 {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
             <div className="container">
                {this.createProjectView()}
            </div>
        </div>
        )
    }

    createProjectView() {
            return (
                <div className="row justify-content-center" key={this.props.project.id}>
                    <div className="card project-holder col-12 col-md-8 col-lg-6">
                        <img className="card-img-top" src={this.props.project.video_url} alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.project.name}</h4>
                            <p className="card-text text-secondary">{this.props.project.long_description}</p>
                        </div>
                    </div>
                </div>
            );
        };
    }


export default Project;