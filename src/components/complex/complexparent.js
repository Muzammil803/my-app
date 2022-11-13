
import Complex from "./complex";
function Complexval() {

    const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] },
     { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
let  complexValue = complex.map((val,index)=>{
return <Complex key = {index} tittle={val}/>
})

return(
    <div>
        {complexValue}
    </div>
)
}

export default Complexval;