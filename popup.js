var css_inline=`
body {font-family: Arial;}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
`

var styleEl = document.createElement('style');
styleEl.innerHTML = css_inline;
document.head.appendChild(styleEl);

$(function(){

  chrome.storage.local.get(["token_id"], function (result) {
    console.log(result);
    if (result.token_id) {
      $("#hidden_div").show();
      $("#google-sign-in").hide();
      $("#email_id").hide();
    } else {
      $("#google-sign-in").show();
      $("#email_id").show();
    }
  });





$("#google-sign-in").on("click", function (res) {
 
  chrome.identity.getAuthToken({ interactive: true }, function (token) {

   

    if (token) {
     
      console.log("asdf");
      chrome.storage.local.set({ token_id: token }, function () {});
      chrome.identity.getProfileUserInfo({accountStatus: 'ANY'},function(userinfo){
      // chrome.identity.getAccounts({accountStatus: 'ANY'},function(userinfo){
          console.log("userinfo",userinfo);
        email=userinfo.email;
        uniqueId=userinfo.id;
        // chrome.storage.local.set({ "useremail": email }, function () {
        // });

        $.ajax({
          method: "POST",
          url: "http://localhost:3000/api/users",
          data:{email},
          success:function(){
            window.location.reload();
          }
        });

        $('#hidden_div').show();
        $('#google-sign-in').hide();
        $('#email_id').hide();
      });
    }
  });
});



$("#logout-ext").on("click", function () {
 

  chrome.storage.local.get(["token_id"], function (result) {
    if (result.token_id) {
      var url =
        "https://accounts.google.com/o/oauth2/revoke?token=" + result.token_id;
      window.fetch(url);

      chrome.identity.removeCachedAuthToken(
        { token: result.token_id },
        function () {
          chrome.identity.clearAllCachedAuthTokens(function () {});
          alert("Logout  Account");
          chrome.storage.local.set({ token_id: "" }, function () {});
          $("#hidden_div").hide();
          $("#google-sign-in").show();
        }
      );
    } else {
    }
  });
});




})






