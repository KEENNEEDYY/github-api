import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import SearchGitApi from "pages/searchGitApi";


const Routes = () => (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/searchGitApi">
                    <SearchGitApi />
                </Route>
            </Switch>
        </BrowserRouter>
);

export default Routes;