import React, {Component} from 'react';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            families: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/family/all')
        .then(response => response.json())
        .then(data => {
                console.log(data);
                this.setState({families: data});
            }    
        );
            
        console.log('now');
        console.log(this.state.families);
    }

    render() {
        return(
            <div>
                <h1>Welcome to Your Profile</h1>
                <p>Test them all is a ...
                {
                    this.state.families.map(family => {
                        return <div key={family.familyId}>{family.familyName}</div>
                    })
                }
                </p>
                
            </div>
        )
    }
}

export default Profile;