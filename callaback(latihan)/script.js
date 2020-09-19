$.ajax({
    url: "http://www.omdbapi.com/?apikey=2480ceb5&s=avengers",
    success: results => {
        const movies = results.Search
        movies.forEach(result => {
            $( ".movie-list" ).append(`<div class="col-md-2 mt-3">
        <div class="card">
            <img src="${result.Poster}" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.Year}</h6>
              <a href="#" class="btn btn-primary">Show Details</a>
            </div>
          </div>
    </div>`)
        })
    },
    error: e => console.log(e.responseText)
});