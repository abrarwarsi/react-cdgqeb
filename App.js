import React from "react";
import productsData from "vschoolProducts";
import Product from "./Product";

function App() {
  const employeeInfo = productsData.map(info => < Product firstName={info.first_name} lastName={info.last_name} email={info.email} gender={info.gender} ip={info.ip_address} />)
  return (
    <div>
      <h2>Employee Info</h2>
      {employeeInfo}
    </div>
  )
}

export default App;