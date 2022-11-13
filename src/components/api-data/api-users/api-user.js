function UserData(props){

    return(
        <div>
<h2>ID {props.tittle.id}</h2>
<div><b>Name : </b>{props.tittle.name}</div>
<div><b>User name : </b>{props.tittle.username}</div>
<div><b>Email : </b>{props.tittle.email}</div>
<div><b>Phone : </b>{props.tittle.phone}</div>
<div><b>Website : </b>{props.tittle.website}</div>
<div><b>Address : </b><br/>
City : {props.tittle.address.city} 
street : {props.tittle.address.street} <br/>
Suite : {props.tittle.address.suite} <br/>
Zipcode : {props.tittle.address.zipcode}</div> 

<div><b>Company : </b><br/>
Name : {props.tittle.company.name} <br/>
Catch Phrase : {props.tittle.company.catchPhrase} <br/>
BS : {props.tittle.company.bs} <br/>
</div> 

        </div>

        
    )

}

export default UserData;



