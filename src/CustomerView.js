import { useDispatch, useSelector } from "react-redux"
import { deleteCustomer } from "./slices/customerSlice"

export const CustomerView = () => {
  const dispatch = useDispatch();
  function deleteHandler(index){
dispatch(deleteCustomer(index));
  }
  const customers = useSelector((state)=>state.customers)
    return (
      <div>
          <h3>Customer List</h3>
          <ul style={{listStyle:"none"}}>
              {
                customers.map((customer,index)=><li>{customer}<button onClick={()=>deleteHandler(index)}>Delete</button></li>)
              }
          </ul>
      </div>
    )
  }
  