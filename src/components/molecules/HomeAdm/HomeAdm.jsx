import Nav from "../../atoms/Navbar/Navbar";
import Cards from "../../atoms/Card/Card";
import './HomeAdm.css';

function HomeAdm() {
    return ( 
        <>
       

       <Nav/>
       
        <div className="Container-cards">
            <Cards />
        </div>
       
        </>
     );
}

export default HomeAdm;