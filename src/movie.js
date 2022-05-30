

const Movie = ({movie}) => {
    return (
        <>
        <div className="container my-3">
            <div className='row'>
        
            {
                movie.map((value,index) => {
                    return (
                        <>
                        
                        <div className="col-3">
                        <div className="card" style={{width: "18rem"}} key={index}>
                            
                            <img src={value.Poster} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">{value.Title}</h3>
                                <h4 className="card-text">{value.Year}</h4>
                            </div>
                        </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
        </>
    )
}
export default Movie