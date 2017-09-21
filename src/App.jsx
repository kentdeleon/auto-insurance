import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import './App.css';


export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            queryCarMaker: ''
        }
    }
    listCarModel(carMaker){
        const BASE_URL ='https://autosure.mybluemix.net/api/models?filter[where][car_make]=';
        const FETCH_URL = `${BASE_URL}${carMaker}`;
      
        fetch(FETCH_URL,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            const carModel = [];
            for(let value of json){
                carModel.push(value.car_model);
            }

            this.setState({carModel})
            
        });

       
    }

    render(){
       
        return (
            <section className="container">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-6">
                    <h1 className="display-3">Be Insured</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                </div>
                <div className="col-md-6">
                    <FormGroup>         
                                <div className="form-group">
                                        <label >Car Maker</label>
                                        <select 
                                            className="form-control" 
                                            id="exampleFormControlSelect1" 
                                            onChange={
                                                (event) => {
                                                    this.setState({queryCarMaker: event.target.value})
                                                    this.listCarModel(event.target.value);
                                                }
                                            }
                                        >
                                          <option value='' defaultValue>Select Car Maker</option>
                                          <option value='Honda'>Honda</option>
                                          <option value='Huyndai'>Hyundai</option>
                                          <option value='Mitsubishi'>Mitsubishi</option>
                                          <option value='Toyota'>Toyota</option>
                                        </select>
                                </div>
                    </FormGroup>

                             
                        
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                      <button className="btn btn-primary btn-lg">Get Quote</button>
                    </p>
                  </div>
                </div>
                </div>
    </section>  
        )    
    }
}