import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8 ) {
        return 'bg-success'
    } else if (vote >= 6 ) {
        return 'bg-warning'
    } else {
        return 'bg-danger';
    }
}




const Movie = ({ title, poster_path, overview, vote_average }) => (
    








<div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ 
  backgroundImage: `url(${poster_path ? IMG_API + poster_path : "https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg" })` 
}}>
        
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          {/* <ing className="img-fluid" src={IMG_API + poster_path} alt={title}/> */}
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
              </li>
              
              <li className="d-flex align-items-center">
              <span class={`badge rounded-pill ${setVoteClass(vote_average)}`}>{vote_average} </span>
  
 
                {/* <small className={`badge rounded-pill ${setVoteClass(vote_average)}`}>{vote_average}</small> */}
              </li>
            </ul>
            <button type="button" class="btn btn-warning">Add to Cart</button>
          </div>
        </div>
      </div>



  
);

export default Movie;