import React,{ useState,useEffect } from "react";
import Category from "./Category";

function GameList(){
    
   const [game, setGame] = useState(["Loading.."])
    
    const fetchDataGameList = async () => {
    const response = await fetch('http://localhost:3005/api/products/list');
    const gameData = await response.json();
    setGame(gameData.data.products);
    };

    useEffect(() => {
        fetchDataGameList();
        }, []);
    
   return(
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                   <h1 className="h3 mb-2 text-gray-800">All the Games in the Database</h1>
                        
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Id</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                
                                                
                                            </tr>
                                        </tfoot>
                
                                        <tbody>
                                        {game.map(row => {
                                        return (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td><a href={row.detail}> {row.name} </a></td>
                                            <td>{row.description}</td>
                                            
                                            
                                        </tr>
                                    );
                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>            
            </React.Fragment>
        )
    }

    export default GameList;

