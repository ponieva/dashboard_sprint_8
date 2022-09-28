import React from 'react';
import CategoriesInDb from './CategoriesInDb';
import ContentRowGames from './ContentRowGames';
import LastGameInDb from './LastGameInDb';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard UnderGames</h1>
					</div>
				
					{/*<!-- Content Row Games-->*/}
					<ContentRowGames />
					{/*<!-- End games in Data Base -->*/}
					
						
					{/*<!-- Content Row Last Game in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Game in DB -->*/}
						<LastGameInDb />	
						{/*<!-- End content row last Game in Data Base -->*/}

						{/*<!-- Categories in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Categories In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;