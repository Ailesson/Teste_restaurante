"use client";

import React from "react";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import GetOrder  from "./components/GetOrder";
import MenuList from "./components/MenuList";
import TableList from "./components/TableList";
import AddTable from "./components/AddTable"



const Home: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-50 p-6 relative">
          <h1 className="text-2xl font-bold text-center mb-6">Gerenciamento de Pedidos</h1>
          
          {/* OrderForm no topo centralizado */}
          <div className="flex justify-center mb-6">
              <OrderForm />
          </div>
          
          {/* OrderList logo abaixo do OrderForm */}
          <div className="flex justify-center">
              <OrderList />
          </div>
          
          {/* GetOrder no topo à direita */}
          <div className="absolute top-0 right-0 p-4">
              <GetOrder />
              <AddTable/>
              <TableList/>
          </div>
          <div className="absolute top-0 left-0 p-4">
              <MenuList />
          </div>
      </div>
  );
};

export default Home;