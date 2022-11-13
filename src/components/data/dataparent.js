import Data from './data'

function Dataval(){
    const data = ['We', 'are', 'United']
    let dataVal= data.map((val , index)=>{
    return <Data key = {'no-'+ index} tittle = {val}  />
    
    })

    return (
        <div>
            {dataVal}
        </div>
    )

}

export default Dataval
