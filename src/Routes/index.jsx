import { Route, Switch, useHistory } from "react-router";
import Login from "../Pages/Login";
import { useEffect, useState } from "react";
import Profile from "../Pages/Profile";
import Cadastro from "../Pages/Cadastro";
function Routes() {
  const [data, setData] = useState([]);
  const [isLogged, setLogged] = useState(false);
  const [user, setUser] = useState([]);

  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      setLogged(false);
      history.push("/");
    }

    if (token) {
      history.push("/profile");
    }
  }, [history, isLogged]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          setData={setData}
          setLogged={setLogged}
          setUser={setUser}
          history={history}
        />
      </Route>
      <Route path="/profile">
        <Profile
          data={data}
          setData={setData}
          history={history}
          user={user}
          setUser={setUser}
        />
      </Route>
      <Route path="/register">
        <Cadastro history={history} />
      </Route>
    </Switch>
  );
}

export default Routes;
