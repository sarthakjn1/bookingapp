import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

function Single() {
    return(
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/29835052/pexels-photo-29835052/free-photo-of-catholic-priest-in-vatican-city-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+65 12345678</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Singapore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect = {3 /1} title="User Spending (Last 6 months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>          
        </div>
    )
}

export default Single;