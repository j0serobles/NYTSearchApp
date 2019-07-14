$("#submit_button").on("click", doSearch);

function doSearch(event) {

    event.preventDefault();

    var searchTerm = $("#search_terms").val();
    console.log("Search Term is " + searchTerm); 
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + 
                   "&api-key=OGGCu4KK299AIm4DmXGmn05elIEL8gfa";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var results = response.response.docs;

        console.log(results); 

        for (var i = 0; i < results.length; i++) {

            console.log("<<"+(i+1)+">>");
            console.log("Abstract: " + results[i].headline.main); 
            
            var articleDiv = $("<div>");

            var divHeadline = results[i].headline.main;
            var divByline   = results[i].byline;

            
            articleDiv.append(divHeadline);
            articleDiv.append(divByline);
            
            $("#article_list").prepend(articleDiv);

    }
    });
  };