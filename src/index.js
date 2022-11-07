import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import "./style.css";

function Main() {
    return <h2>Main page about Venev</h2>;
}

function ForVisitors() {
    const links = [
        {
            path: '/information/all about Venev',
            value: 'All about Venev'
        },
        {
            path: '/information/famous landmark',
            value: 'Famous landmark'
        },
        {
            path: '/information/other landmarks',
            value: 'Other landmarks'
        },
        {
            path: '/information/photo by Venev',
            value: 'Photo by Venev'
        }
    ];
    
    return (
        <>  
            <h2>Venev's life</h2>
            <Router>
            <NavMenu links={ links } /> 
                <Switch> 
                    <Route path="/information/all about Venev" component={AllAboutVenev}  />
                    <Route path="/information/famous landmark" component={FamousVenevsLandmark}  />
                    <Route path="/information/other landmarks" component={OtherLandmarks}  />
                    <Route path="/information/photo by Venev" component={PhotoByVenev}  />
                </Switch>
            </Router>
        </> 
    ); 
}

function AllAboutVenev() {
    return <h3>All about Venev</h3>;
}

function GovermentDocuments() {
    return <h2>Administration of Venev</h2>;
}

function FamousVenevsLandmark() {
    return <h3>Bell tower of St. Nicholas church Venev</h3>;
}

function OtherLandmarks() {
    return <h3>Other attractions of Venev</h3>;
}

function PhotoByVenev() {
    return <h3>Photo of the Venevsky district</h3>;
}

function NavMenu(props) {
    const links = props.links;
   
    return (
        <nav id="global">  
            { links.map((link, i) =>
                <Link 
                    key={ i } 
                    to={ link.path } 
                    className="link" 
                >
                    { link.value }
                </Link>
            ) }
        </nav>
    );
}

function App() {
    const links = [
        {
            path: '/',
            value: 'Main'
        },
        {
            path: '/goverment-documents',
            value: 'Goverment documents'
        },
        {
            path: '/information/',
            value: 'For visitors'
        }
    ];
    
    return (
        <Router>
            <NavMenu links={ links } />
            <Switch>
                <Route exact path="/" component={ Main } />
                <Route exact path="/goverment-documents" component={ GovermentDocuments} />
                <Route strict path="/information/" component={ ForVisitors } />
                <Route children={ () => <h2>NotFound</h2> } />
            </Switch>
        </Router>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
