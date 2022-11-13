import List from "../list/list"

function Listval(){

    const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] 
let listVal = list.map((val,index)=>{

  return  <List key={index} tittle={val} />
})
return(
    <div>
        {listVal}
    </div>
)

}

export default Listval;