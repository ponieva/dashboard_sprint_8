import React,{ useState,useEffect } from "react";

function LastGameInDb(){
    // levanto todos los  juegos, para ver el último

    const [product, setProduct] = useState(["Loading.."])
    
    const fetchDataList = async () => {
    const response = await fetch('http://localhost:3005/api/products/list');
    const datos = await response.json();
    setProduct(datos.data.products);
    };

    useEffect(() => {
        fetchDataList();
        }, []);
    
   
    let arrayJuego = product[product.length - 1];
    
    


    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last Game in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <h2>{`${arrayJuego.name}`}</h2>    
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`${arrayJuego.img_1} `} alt={`${arrayJuego.name} `}/>
                    </div>
                    <p>{`${arrayJuego.description}`}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3005/productdetail/${arrayJuego.id}`}>View Detail</a>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}







export default LastGameInDb;