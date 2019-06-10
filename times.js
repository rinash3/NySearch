//searchTerm, records, start, end , search, clear, result

var key = "Mhbtt0w3YTd8Ivs2tFWFATFOktZuO7IA"
var i = 1;
$("#search").on("click", function() {
    var query = $("#searchTerm").val();
    var begin = "";
    var end = "";
    if ($("#start").val().length > 0)
        begin = "&begin_date" + $("#start").val() + "0101";
    if ($("#end").val().length > 0)
        end = "&end_date" + $("#end").val() + "1231";
    var tUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + key + begin + end;
    console.log(tUrl);
    $.ajax({
        url: tUrl,
        method: "GET"
    }).then(function(data) {
        var k = 0;
        for (r in data.response.docs) {
            if (k == $("#records").val())
                break;
            var temp = $("<div>")
            var tempp = $("<p>")
            tempp.append(i + ". " + data.response.docs[r].headline.main)
            temp.attr("id", "article");
            temp.append(tempp);
            temp.append(data.response.docs[r].byline.original);
            $(".result").append(temp);
            i++;
            k++;
        }
    });
});

$("#clear").on("click", function() {
    $(".result").empty();
    i = 1;
})