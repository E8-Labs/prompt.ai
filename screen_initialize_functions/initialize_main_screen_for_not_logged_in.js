const main_screen_for_user_not_logged_in=()=>{
    if ($('#main_screen_div').length) {
        $('#main_screen_div').remove();
    }
    $('main').eq(0).prepend(`<div style="position:absolute;width:100%;height:100%;z-index:999;background-color:black;overflow-y:auto" id='main_screen_div' >  </div> `);
    $('#main_screen_div').eq(0).append(
        `<div id='top_bar' style="width:100%;margin-left: 0%;"><div id='menu'  style="width:100%;display:flex;align-items:start;margin-top:15px; justify-content:space-between;padding-inline:1%" >  <div class="input-group" style="display:flex;justify-content:center;width:700px"> <input type='text' id='searchbar' style="      border-color: #39b291;
            border-radius: 15px;
            width: 700px;
            display:none;
            background-color: black;
            color: white;
            height: 60px;" placeholder='Search Prompt' /> <div class="input-group-append" style="    position: absolute;
            margin-left: 650px;
            margin-top: 22px;" > <button id='search_button' type="button" style="display:none;"  >  <svg id='searchbtn' style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> </button> </div> </div> 
              <div  style="display: flex;
                                   position: relative;
                                   right: 12%;
                                   top: 13px;">
                          
              </div> 
               </div>
          </div>
          <div id="loading_gif_2" style="display:none; z-index: 10000000">
                <img style="height: 60px;
                            position: fixed;
                            top: 59%;
                            left: 47%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>

             
                `
    );

    if (is_premium === true) {
        $('#top_bar').append(`     <div class="switches-container" style=" position: absolute;
                                                              left: 58%;
                                                              top: 4%;" >
                                    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked">
                                    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly">
                                    <label id='gpt_3_button' for="switchMonthly">GPT-3.5</label>
                                    <label id='gpt_4_button'  for="switchYearly" class="gtp_4">GPT-4
                                        <div class="version_info">
                                            <p>Our most capable model, great for tasks that require creative and advanced reasoning</p>
                                            <span>Available exclusively to plus users</span>
                                            <ul>
                                                <li id='default_mode'  style="" ><a href=${window.location.href == 'https://chat.openai.com/?model=gpt-4' ? '#' : 'https://chat.openai.com/?model=gpt-4' } style="text-decoration:none;cursor:pointer" ><img src="${star_2}" alt=""> Default</a></li>
                                                <li id='browser_mode' ><a href="https://chat.openai.com/?model=gpt-4-browsing" style="text-decoration:none;cursor:pointer"><img src="${browse}" alt=""> Browse with Bing</a></li>
                                                <li id='plugins_mode' ><a href="https://chat.openai.com/?model=gpt-4-plugins" style="text-decoration:none;cursor:pointer"><img src="${plugins}" alt=""> Plugins</a></li>
                                            </ul>
                                        </div>
                                    </label>
                                    <div class="switch-wrapper">
                                      <div class="switch">
                                        <div>GPT-3.5</div>
                                        <div>GPT-4</div>
                                      </div>
                                    </div>
                                </div>`)
    }

    $(loading_gif_2).show();

    $('#main_screen_div').append(`    <div  style="         top: 4%;
                                                            right: 1%;
                                                            
                                                            display: flex;
                                                            justify-content: flex-end;
                                                            align-items:center;
                                                            position: absolute;"> <img style="padding-right:1.5%" id='search_icon' src='${search_icon}' style="cursor:pointer" />   <button class="btn btn-info" style="    height: 30px;
                                                                                              
                                                                                              background-color: #00c08b;
                                                                                             top: -5px;
                                                                                            
                                                                                              left: 50px;top: 20px;" id='connect' type="button" class=""  > Connect with Openai  </button>  </div>`)

    $('#top_bar').before(`<a style="color:white;display:none" id='navigating_to_top' href='#'> Navigate to me </a>`)
    $("#menu").after(`<div id='menu-items' style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-left:20px">
                                      <div style="
                                      display: flex;
                                      left: 3%;
                                      justify-content: space-between;
                                      align-content: flex-start;
                                      align-items: center;
                                      margin-top: 20px;
                                      width:100%;
                                      position: relative;
                                      ">
                                    <div style="display: flex;width: 700px;">
                                    <div style="    display: flex;
                                                    align-items: center;
                                                    cursor: pointer;
                                                    background: rgba(255, 200, 5, 0.1);
                                                    width: 68px;
                                                    height: 31px;
                                                    padding-left: 1%;
                                                    border-radius: 10px;" id='publicbutton' > <div> <img src="${star_2}" alt="vCZC4.png" border="0" /> </div>  <div >  &nbsp <span style="color:white;margin-left:5px">   All </span> </div> </div>
                            
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id='Favourite' > <div><img src="${saved}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Saved </span> </div> </div>
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id="Purchase" > <div > <img src="${purchased}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Purchased </span> </div> </div>
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id='ownbutton' > <div><img src="${created}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Created </span> </div></div>
                                    </div>
                               
                                </div>
                            
                            
                            </div>`);

    chrome.runtime.sendMessage({ type: "fetch_prompts", }, function (response) {

        console.log(response);
        global_api_response = response.data.public_prompts;

        $(loading_gif_2).hide();


       
        $(document).off("click", ".promptcard");
        $(document).off("click", ".upvote");
        $(document).off("click", ".downvote");
        $(document).off("click", ".heart");
        
        
        var main_div = `<div id='main_div' class='row container' style="width: 100%;
                                                    margin-top: 15px;
                                                    margin-left: 35px;" ></div>`;


        $('#top_bar').after(main_div);
        render_public_prompts();
     



    //    if(isRegistered===true){
       if(userInfo){
        if(userInfo.username){
            $('#connect').attr('id','sign_in');
        }
            
        
       }else{
           $('#connect').attr('id','logging_in_first_time');
       }
    //    }

        let check = sessionStorage.getItem('isExtensionActive');
        if (check) {
            console.log(typeof (check));
            if (check === 'false') {
                isExtensionActive = false;
                return extension_disabled();
            }
        }

       

    });


}