import React,{ useState,useEffect } from "react";
import Category  from './Category';

function CategoriesInDb(){
   
    const [gameCat, setGameCat] = useState(["Loading.."])

        const fetchDataGameCatList = async () => {
        const response = await fetch('http://localhost:3005/api/products/list');
        const gameDataCat = await response.json();
    
        setGameCat(gameDataCat.data.countByCategory);
        };
        useEffect(() => {
            fetchDataGameCatList();
            }, [])

        return (
                    <React.Fragment>
                        {/*<!-- Categories in DB -->*/}
                        <div className="col-lg-6 mb-4">						
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-gray-800">Games Categories in Data Base</h6>
                                </div>
                                <div className="card-body">
                                <div className="row">
                                {
                                Object.keys(gameCat).map((category, index)=> {
                                return <Category category={category + ": " + gameCat[category]} key={index} />
                                    })
                                }
                            </div>
                            </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }

export default CategoriesInDb;