$(function() {
  function createAlbum(album) {
    /* Conditionally apply the class modifier for explicit albums */
    const albumInfoClass =
      album.collectionExplicitness === "explicit"
        ? "album__info album__info--explicit"
        : "album__info";

    /* Create and return nested elements representing a tweet */
    return $(`
      <article class="album">
        <img class="album__thumbnail" src="${
          album.artworkUrl100
        }" alt="Album" />
        <div class="${albumInfoClass}">
          <div class="album__name">${album.collectionName}</div>
          <div class="album__artist">${album.artistName}</div>
        </div>
      </div>
    `);
  }

  function renderAlbums(albums) {
    /* 
        Empty the results container
        Create an album elements for each album object
        Append them all to the results container
    */
    $("section.results")
      .empty()
      .append(albums.map(album => createAlbum(album)));
  }

  $(".search__form").on("submit", function(event) {
    event.preventDefault();

    /* Make request to the API */
    $.get({
      url: `https://itunes.apple.com/search?term=${
        event.target.elements.search.value
      }&country=CA&media=music&entity=album&attribute=artistTerm`,
      dataType: "json"
    }).done(response => {
      /* Call renderAlbums method passing the retrieved album list as an argument */
      renderAlbums(response.results);
    });
  });
});
