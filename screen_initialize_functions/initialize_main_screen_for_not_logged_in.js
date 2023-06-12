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
                          <div style="padding-top:10px;margin-left: 40px;">  <img id='search_icon' src='${search_icon}' style="cursor:pointer"  />  </div>
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
        $(`${gpt_mode_selector_div} >div `).eq(0).css('background', 'black');

        // $('#top_bar').prepend(`<div id='custom_gpt_mode_div' style="display: flex;
                                               
        //                                        position: absolute;
        //                                        left: 41%;
        //                                        width: 296px;
        //                                        background: black;
        //                                        height: 54px;border-radius:0.5rem" > <button id='gpt_3' style="color:white;width:50%;background:#00C28C;color:white;border-radius:10px;margin:1%" >  GPT-3.5 </button> 
        //                                        <button id='gpt_4' style="color:white;width:50%;background:black;color:white;border-radius:8px;margin:1%" >  GPT-4 </button>
        //                                        </div>`)
    }

    $(loading_gif_2).show();

    $('#main_screen_div').append(`    <div style="position:absolute;top:1%;right:3%;width:10%"> <button class="btn btn-info" style="    height: 30px;
                                                                                              
                                                                                              background-color: #00c08b;
                                                                                             top: -5px;
                                                                                              position: absolute;
                                                                                              left: 50px;top: 20px;" id="connect" type="button" class=""  > Connect with Openai  </button>  </div>`)

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
                                    <div style="display:flex;align-items:center" id='publicbutton' > <div> <img src="${star}" alt="vCZC4.png" border="0" /> </div>  <div >  &nbsp <span style="color:white;margin-left:5px">   All </span> </div> </div>
                            
                            
                            
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

        // if(!$("h1").parent().length)

        //Removing text that appears if gptmode4 is selected
        // if ($('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).length) {
        //   $('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).css('display', 'none');
        // }
        // $(main_screen_selector).eq(0).css('background', 'black');

        $('#top_bar').after(main_div);
        render_public_prompts();
     
        if(isRegistered===true){
            $('#connect').attr('id','log_in');
        }

    });


}