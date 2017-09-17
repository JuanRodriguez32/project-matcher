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
                    <div className="card-header text-center">{this.props.project.name}</div>
                    <img className="card-img-top" src={this.props.project.video_url} alt="Card cap"/>
                    <div className="card-body">
                        <p className="card-text text-secondary">{this.props.project.long_description}</p>
                    </div>
                    <div className="card-footer">
                    <div className="card-header text-center">Contact Form</div>
                    
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control col-md-3" placeholder="Your Name" name="name"  type="text" />
                            </div>
                            <div className="form-group">
                                <input className="form-control col-md-3" placeholder="Your Email" name="name"  type="text" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" name="comment" rows="3" type="text" ></textarea>
                            </div>
                            <div className="form-group text-center">
                                <input className="btn btn-primary btn-lg" type="submit" value="Send Message"/>
                            </div>
                        </form>      
                    </div>
                </div>
            </div>
            );
        };
    }


export default Project;