import React, { Component } from 'react';
import Category  from './Category';

class CategoriesInDb extends Component {

    constructor(){
        super()
        this.state = {
            categoriesList: [],
        }
    }

    componentDidMount() {
       /* fetch('https://undergames.herokuapp.com/api/products/list') */
    fetch('http://localhost:3005/api/products/list')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(categories => {
            this.setState({categoriesList: (Object.entries(categories.data.countByCategory))})
            
            })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Game Categories in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                            {   
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category category = {category}  key={index} />
                                    })
                                }
								
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}


export default CategoriesInDb;