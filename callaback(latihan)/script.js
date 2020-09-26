$.ajax({
  url: "http://www.omdbapi.com/?apikey=2480ceb5&s=avengers",
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
                     <div class="card-body">
                       <h5 class="card-title">${result.Title}</h5>
                       <h6 class="card-subtitle mb-2 text-muted">${result.Year}</h6>
                       <center>
                       <a href="#" class="btn btn-primary">Watch</a>
                       <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#movieDetailModal">Show Details</a>
                       </center>
                     </div>
                   </div>
             </div>`
    })
    $(".movie-list").html(cards)
  },
  error: e => console.log(e.responseText)
});