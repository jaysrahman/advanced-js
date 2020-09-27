function searchMovie() {
  $(".btn-search").click(e => { 
    let keyword = $(".keyword").val()
  
    $.ajax({
      url: `http://www.omdbapi.com/?apikey=2480ceb5&s=${keyword}`,
      success: results => {
        const movies = results.Search
        let cards = ''
        movies.forEach(result => {
          //         $( ".movie-list" ).append(`<div class="col-md-2 mt-3">
          //     <div class="card">
          //         <img src="${result.Poster}" alt="...">
          //         <div class="card-body">
          //           <h5 class="card-title">${result.Title}</h5>
          //           <h6 class="card-subtitle mb-2 text-muted">${result.Year}</h6>
          //           <a href="#" class="btn btn-primary">Show Details</a>
          //         </div>
          //       </div>
          // </div>`)
          cards += `<div class="col-md-3 mt-3">
                     <div class="card">
                         <img src="${result.Poster}" alt="...">
                         <div class="card-body text-center">
                           <h5 class="card-title">${result.Title.substr(0, 15)}...</h5>
                           <h6 class="card-subtitle mb-2 text-muted">${result.Year}</h6>
                           <center>
                           <a href="#" class="btn btn-primary">Watch</a>
                           <a href="#" class="btn btn-dark btn-show" data-toggle="modal" data-target="#movieDetailModal" imdbID="${result.imdbID}">Show Details</a>
                           </center>
                         </div>
                       </div>
                 </div>`
        })
        $(".movie-list").html(cards)
    
        // Call Modal
        $(".btn-show").click(e => {
          const imdbId = e.target.attributes.imdbID.value
    
          $.ajax({
            url: `http://www.omdbapi.com/?apikey=2480ceb5&i=${imdbId}`,
            success: results => {
              let detailMovie = ''
              detailMovie += `<div class="row">
                <div class="col text-center">
                  <img src="${results.Poster}" class="img-fluid img-thumbnail rounded mx-auto d-block" alt="">
                  <h5 class="card-title mt-4">${results.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${results.Year}</h6>
                </div>
                <div class="col">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span>Released : </span>${results.Released}</li>
                    <li class="list-group-item"><span>Runtime : </span>${results.Runtime}</li>
                    <li class="list-group-item"><span>Genre : </span>${results.Genre}</li>
                    <li class="list-group-item"><span>Director : </span>${results.Director}</li>
                    <li class="list-group-item"><span>Writer : </span>${results.Writer}</li>
                    <li class="list-group-item"><span>Actors : </span>${results.Actors}</li>
                    <li class="list-group-item"><span>Plot : </span>${results.Plot}</li>
                  </ul>
                </div>
              </div>`
              $(".modal-body").html(detailMovie)
            },
            error: e => console.log(e.responseText)
          })
        })
      },
      error: e => console.log(e.responseText)
    })
  
    e.preventDefault()
  })
}

searchMovie()