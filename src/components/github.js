import React, { Component } from 'react';
import { Row, Card, Col, Spin, Tag } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class github extends Component {
    constructor(props){
        super (props);
        this.state={
            repos: null,
            lengs: null,
            tags: null,
            isNotLoading: false
        }
    }

    async componentDidMount(){
        try {
        const response = await fetch('https://api.github.com/users/stevenaraujo98/repos?type=owner')
        const repositorios = await response.json()

        const lenguajeResponse = await Promise.all(repositorios.map(link => fetch(link.languages_url)))
        const lenguajesData = await Promise.all(lenguajeResponse.map(resp => resp.json()))

        var etiquetas = new Set();
        var contador = 0;
        for (var i of lenguajesData){
            var lenguajes = ''
            for(var o of Object.keys(i)){
                lenguajes += o+', '
                etiquetas.add(o);
            }
            repositorios[contador]['lenguajes'] = lenguajes.slice(0,-2);//quitar ', ' del final
            contador++;
        }

        //console.log(repositorios);
        //console.log(lenguajesData);
        contador = 0;
        var dicEtiq = []
        for(var j of etiquetas){
            dicEtiq[contador] = j;
            contador++;
        }
        //console.log(dicEtiq);
        //dicEtiq.map((e) => {console.log(e)});
        this.setState({lengs: lenguajesData, repos: repositorios, tags: dicEtiq});
        } catch(e){
            console.log(e);
            this.setState({ isNotLoading: true });
        }
    };

    render() {
        
        return (
        ((this.state.repos && this.state.tags)) ? 
            <>  
                <div style={{marginBottom: '20px'}}>
                    { this.state.tags && this.state.tags.map((todo) => 
                        <Tag icon={
                                <FontAwesomeIcon icon={['fab', todo.toLowerCase() ]} size="lg" />
                            } color="#439BD1">{' '+todo}
                        </Tag>
                    )}
                </div>

                <Row>
                    {this.state.repos && this.state.repos.map((obj, key) => 
                        <Col xs={24} sm={12} md={8}>
                            <Card title={`${obj.name}`} className="cardRepoU">
                                <div className="languagesCardRepoU">
                                    <p>{obj.lenguajes} </p>
                                </div>
                            </Card>
                        </Col>
                    )}
                </Row>
            
            </>
        : 
            <div style={{textAlign: 'center'}}>
                {this.state.isNotLoading ? <p>Error en el api de GitHub</p> : <Spin size="large" />}
            </div>
        )
    }
}
