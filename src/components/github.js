import React, { Component } from 'react';
import { Row, Card, Col, Spin } from 'antd';

export default class github extends Component {
    constructor(props){
        super (props);
        this.state={
            repos: null,
            lengs: null,
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/stevenaraujo98/repos?type=owner')
        .then( resp => {
            return resp.json()
        }).then( data => {
            this.setState({repos: data})
            
            var lenguajes = {};
            data.map( e => {
                fetch(e.languages_url)
                .then( resp => {
                    return resp.json()
                }).then( d => {
                    lenguajes[e.name] = d
                }).catch(e => console.log('Error: ' + e.message));
            })
            this.setState({lengs: lenguajes})
            console.log(this.state.repos);
        }).catch(e => console.log('Error: ' + e.message));
    };

    render() {
        
        return (this.state.repos
        ?
            <Row>
                {this.state.repos && this.state.repos.map((obj, key) => 
                    <Col xs={24} sm={12} md={8}>
                        <Card title={`${obj.id}: ${obj.full_name}`} className="cardRepoU">
                            <p>
                            {obj.language}
                            <br/>
                            {obj.languages_url}
                            </p>
                        </Card>
                    </Col>
                )}
            </Row>
        :
            <div style={{textAlign: 'center'}}>
                <Spin size="large" />
            </div>
        )
    }
}
