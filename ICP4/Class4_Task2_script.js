function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var target = 'https://api.github.com/users/' + user;

    requestJSON(target,function(json) {
        if (json.message == "Not Found" || username == '') {
            $('#profile').html("<h2>No User Info Found... Please try again</h2>");
        } else {
            // else we have a user and we display their info

            var userName = json.login;
            var userID= json.id;
            var aviurl = json.avatar_url;
            var profileurl = json.html_url;
            var reposnum = json.public_repos;


            $("#user").html("<h2>User Info Found:"+userName+"&nbsp"+userID+"</h2>");
            $("#userPic").attr("src",aviurl);
            $("#info").css({"display":"block"});
            $("#info").attr("href",profileurl);



            // end outputPageContent()
        } // end else statement
        // end requestJSON Ajax call
        // end click event handler
    });}
function requestJSON(url, callback) {
    $.ajax({
        url: url,
        complete: function (xhr) {
            callback.call(null, xhr.responseJSON);
        }
    });
}




function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("username").innerHTML = this.responseText;
        }
    };
    XMLHttpRequest.open(method, url: "https://api.github.com/users/Aditya")
    xhttp.open("GET", "https://api.github.com/users/Aditya", true);
    xhttp.send();
}
*/

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});

