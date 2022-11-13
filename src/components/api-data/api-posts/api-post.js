function ApiPost(props){

return (
//     console.log(tittle)

<div>

<h4> ID : {props.tittle.id}</h4>
<p> userId : {props.tittle.userId}</p>
<p> Tittle :  {props.tittle.title}</p>
<p> Body : {props.tittle.body}</p>
    </div>
)


}

export default ApiPost;