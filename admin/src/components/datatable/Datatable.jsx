import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource.js";
import { Link } from "react-router-dom";
import { useState } from "react";


const paginationModel = { page: 0, pageSize: 5 }

const Datatable = () => {
    const [data,setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200,
        renderCell: (params) => {
            return(
                <div className="cellAction">
                    <Link to="/users/12" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=> handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }]



    return(
        <div className="datatable">
            <div className="datatableTitle">Add New User
                <Link to="/users/new" style={{textDecoration: "none"}} className="link">
                        <div className="viewButton">Add User</div>
                </Link>
            </div>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5]}
                checkboxSelection />
        </div>
    )

}

export default Datatable;