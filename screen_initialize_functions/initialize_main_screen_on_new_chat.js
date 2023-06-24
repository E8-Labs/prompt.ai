const initialize_main_screen_on_new_chat=()=>{
    if ($('#main_screen_div').length) {
        $('#main_screen_div').remove();
    }
    
    $('main').eq(0).prepend(`<div style="position:absolute;width:100%;height:100%;z-index:999;background-color:black;overflow-y:auto" id='main_screen_div' >  </div> `)

    $('#main_screen_div').eq(0).append(
        `<div id='top_bar' style="width:100%;margin-left: 0%;"><div id='menu'  style="width:100%;display:flex;align-items:start;margin-top:15px; justify-content:space-between;padding-inline:1%" >  <div class="input-group" style="display:flex;justify-content:center;width:700px"> <input type='text' id='searchbar' style="      border-color: #39b291;
            border-radius: 15px;
            width: 700px;
            display:none;
            background-color: black;
            color: white;
            height: 60px;" placeholder='Search Prompt' /> <div class="input-group-append" style="    position: absolute;
            margin-left: 650px;
            margin-top: 22px;" > <button type="button" id='search_button'  style="display:none" >  <svg id='searchbtn' style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> </button> </div> </div> 
              <div style="display: flex;
                          position: relative;
                          right: 45px;
                          top: 10px;;">
                          <div style="padding-top:10px;margin-left: 40px;">  <img id='search_icon' src='${search_icon}' style="cursor:pointer" />  </div>
              <div style="    margin-right: 60px;padding-top:10px;margin-left: 40px;"> <b> <svg style="border-color:#39b291;color:#39b291" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg> </b>  </div> <div style="position: relative;" >  <img  id='profile_icon' style="border-radius:50%" src=${image} height='50px' width='40px' alt='Image to be shown' /> </div></div> 
               </div>
          </div>
          <div id="loading_gif_2" style="display:none; z-index: 10000000">
                <img style="height: 60px;position: fixed;top: 45%;left: 60%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>
          `
    );

    if (is_premium === true) {
        $('#top_bar').append(`     <div class="switches-container" style=" position: absolute;
                                                              left: 47%;
                                                              top: 4%;" >
                                    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked">
                                    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly">
                                    <label id='gpt_3_button' for="switchMonthly">GPT-3.5</label>
                                    <label id='gpt_4_button' for="switchYearly" class="gtp_4">GPT-4
                                        <div class="version_info">
                                            <p>Our most capable model, great for tasks that require creative and advanced reasoning</p>
                                            <span>Available exclusively to plus users</span>
                                            <ul>
                                                <li id='default_mode'  style="" ><a href="#" style="text-decoration:none;cursor:pointer" ><img src="${star}" alt=""> Default</a></li>
                                                <li id='browser_mode' ><a href="#" style="text-decoration:none;cursor:pointer"><img src="${browse}" alt=""> Browse with Bing</a></li>
                                                <li id='plugins_mode' ><a href="#" style="text-decoration:none;cursor:pointer"><img src="${plugins}" alt=""> Plugins</a></li>
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

    // if (is_premium === true) {
    //     $(`${gpt_mode_selector_div} >div `).eq(0).css('background', 'black');

    //     $('#top_bar').prepend(`<div id='custom_gpt_mode_div' style="display: flex;
                                               
    //                                            position: absolute;
    //                                            left: 41%;
    //                                            width: 296px;
    //                                            background: black;
    //                                            height: 54px;border-radius:0.5rem" > <button id='gpt_3' style="color:white;width:50%;background:#00C28C;color:white;border-radius:10px;margin:1%" >  GPT-3.5 </button> 
    //                                            <button id='gpt_4' style="color:white;width:50%;background:black;color:white;border-radius:8px;margin:1%" >  GPT-4 </button>
    //                                            </div>`)
    // }



    $('#main_screen_div').append(`<div id="logout_div" style="    position: absolute;z-index: 10;top: 66px;cursor: pointer;float: right;width: max-content;box-shadow: rgba(, 99, 99, 0.2) 0px 2px 8px 0px;font-size: 15px;padding: 10px;background-color: rgb(0 0 0);right: 10.2px;color: white;border-radius: 25px;/* width: 100%; */box-shadow: rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
        ">
          <span id="account">Account</span><br>
          <span id="btn_logout">Logout</span><br>
          <span id="btn_payment_plan" style="display: none;">Payment Plan</span>
        <span id="btn_manage">Manage Subscription</span></div>`)

    $('#logout_div').css('display', 'none');
    $('#top_bar').before(`<a style="color:white;display:none" id='navigating_to_top' href='#'> Navigate to me </a>`)
    appending_side_menu();
    menu_items();

}