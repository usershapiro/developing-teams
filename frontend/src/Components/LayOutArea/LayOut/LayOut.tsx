import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./LayOut.css";

function LayOut(): JSX.Element {
    return (
        <div className="LayOut">
	<header>
    <Header/>
    </header>
    <main>
    <Routing/>  
    </main>
         </div>
    );
}

export default LayOut;
