

export const NewsItem = ({title,description,src,url}) => {
  const defaultImage = "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src || defaultImage} style ={{height:"200px",width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News not available"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
