
function Complex({tittle}){

return (
<div>
<b>company: {tittle.company}</b>
   <p> <b>Jobs:<br/> {tittle.jobs[0]}
   <br/> {tittle.jobs[1]}</b>
   </p>
</div>
)



}

export default Complex;