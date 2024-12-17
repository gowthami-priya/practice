import React, { useState } from "react";

const IPLTable =() =>{
    const [value,setValue] = useState();
    const [users,setUsers] = useState([]);
    const handleClick = (e) =>{
        setUsers([...users,value]);
        setValue("");
    }

    const handleRemove = (user) =>{
        console.log(user);
        setUsers(users.filter(id=>id!==user));
    }
    return(
        <div>
            <span>Add Team</span>
            <input onKeyDown={(e) => {if (e.key === "Enter")handleClick();}} onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Enter the team name"/>
            <button onClick={(e)=>{e.preventDefault(); handleClick()}}>Submit</button>
            {users && users.map(user=>(
                <span>
                    {user}
                    <button onClick={()=>handleRemove(user)}>x</button>
                </span>
            ))}
        </div>
    )
}

export default IPLTable;