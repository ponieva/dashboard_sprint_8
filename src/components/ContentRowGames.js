import React,{ useState,useEffect } from "react";
import SmallCard from './SmallCard';

function ContentRowGames(){       
    
    const [products,setProducts] = useState(["Loading..."])
    const [countByCategory,setCategories] = useState(["Loading..."])

        const fetchProducts = async() => {       
        const respuesta = await fetch('http://localhost:3005/api/products/list')        
        const productsArr = await respuesta.json()

        setProducts(productsArr.data.count)
        setCategories(Object.keys(productsArr.data.countByCategory).length)
    };
	useEffect(()=>{
		fetchProducts()
	},[])

    const [users,setUsers] = useState(["Loading..."])
    const fetchUsers = async () =>{       
        const response = await fetch('http://localhost:3005/api/users/list');        
        const usersArray = await response.json()
        setUsers(usersArray.info.total)
    };
	useEffect(()=>{
		fetchUsers()
	},[])



    let productsInDB = {
        color:   "primary",
        titulo: "Total Products",
        valor: products,
        icono: "fas fa-gamepad",
    }
    
    let usersInDB ={
        color:   "success",
        titulo: "Total Users",
        valor: users,
        icono: "fas fa-user",
    }
    
    let categInDB = {
        color:   "warning",
        titulo: "Total Categories",
        valor:  countByCategory,
        icono: "fas fa-layer-group",
    }
    
    let cardProps = [productsInDB,usersInDB,categInDB];
    

    return (
        <React.Fragment>

        <div className="row">
            {
                cardProps.map((elem,index)=>{
                    return <SmallCard  {...elem}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowGames;