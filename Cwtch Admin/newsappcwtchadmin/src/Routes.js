import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


// Screens

import Home from './Screen/Home';
import Dashboard from './Screen/Dash/Dashboard';
import AddTheme from './Screen/Dash/AddTheme';
import AddSuggestionTopics from './Screen/Dash/AddSuggestionTopics';
import AddNews from './Screen/Dash/AddNews';
import AddAdvertisment from './Screen/Dash/AddAdvertisment';
import AddVideoNews from './Screen/Dash/AddVideoNews';
import AddQoutes from './Screen/Dash/AddQuotes';
import AddPartnership from './Screen/Partnership/AddPartnership';
import AddHeading from './Screen/Dash/AddHeading';
import AddHoroscope from './Screen/Dash/AddHoroscope';

const Routes = () => {

        return(
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/addt" component={AddTheme}/>
                    <Route exact path="/adds" component={AddSuggestionTopics}/>
                    <Route exact path="/addquotes" component={AddQoutes}/>
                    <Route exact path="/addnews" component={AddNews}/>
                    <Route exact path="/addvnews" component={AddVideoNews}/>
                    <Route exact path="/addheadings" component={AddHeading}/>


                    <Route exact path="/addads" component={AddAdvertisment}/>

                    <Route exact path="/addhoroscope" component={AddHoroscope}/>



                    {/* <Route exact path="/partnership" component={AddAdvertisment}/> */}
                    <Route exact path="/addpartnership" component={AddPartnership}/>








                </Switch>
            </BrowserRouter>
        )
}



export default Routes;