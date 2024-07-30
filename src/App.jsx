import React from "react";
import { request } from "./config/request";
import { Card } from "./components/card";
import { Form } from "./components/form";

const App = () => {
  const [state, setState] = React.useState([]);
  const Getdata = () => {
    request.get(`/todos`).then((res) => {
      setState(res.data);
    });
  };
  React.useEffect(() => {
    Getdata();
    console.log("pending");
  }, []);
  return (
    <div>
      <h1>CRuD</h1>
      <div>
        <Form refetch={Getdata} />
      </div>
      {state.map((item) => (
        <Card refetch={Getdata} key={item.id} {...item} />
      ))}
    </div>
  );
};

export default App;
