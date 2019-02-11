var $newQuote = $("#newQuote"),
    $quote = $("#quote"),
    $author = $("#author"),
    $twitter = $("#twitter"),
    $twitterA = $("#twitter a");

// clicking on new quote button -> get quote from forismatic through json
$newQuote.on("click", function() {
  $.getJSON(
    "https://api.forismatic.com/api/1.0/",
    "method=getQuote&format=jsonp&lang=en&jsonp=?",
    function(response) {
      // replace content with new quote
      $quote.html(response.quoteText);
      $author.html(response.quoteAuthor);
      // enable tweet button
      $twitter.removeClass("disabled");
      $twitterA.attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(response.quoteText + "\n - " + response.quoteAuthor + "\n #RandomQuote"));
    }
  )
});