const initialize_main_screen_on_new_chat=()=>{
    if ($('#main_screen_div').length) {
        $('#main_screen_div').remove();
    }
    
    $('main').eq(0).prepend(`<div style=" position:absolute; width:100%;height:100%;z-index:999;background-color:black;overflow:scroll" id='main_screen_div' >  </div> `)
    $('#main_screen_div').append(`<button id='searchbtn' style="visibility:hidden;position:absolute;top:0px"  > </button>
    <div id="loading_gif_2" style="display:none; z-index: 10000000">
                <img style="height: 60px;
                            position: fixed;
                            top: 45%;
                            left: 47%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>
    `)
   

    $('#main_screen_div').on('scroll', function () {
        var scrollPosition = $('#main_screen_div').scrollTop();
        if (scrollPosition >= 45) {
            $('#navbar_elements_div').css('visibility', 'visible');
            $('#main_menu_items').hide();
        }
        else if (scrollPosition <= 10) {
            $('#navbar_elements_div').css('visibility', 'hidden');
            setTimeout(() => {
                $('#main_menu_items').show();
            }, 100)
        }
    })

    if ($('#navbar_items').length) {
        $('#navbar_items').remove();
    }


    $('body').prepend(`<div id='navbar_items' style="display: flex;
                                          justify-content:space-between;
                                          margin-right:5%;
                                          margin-top:1%;
                                          height:55px;
                         ">

                         <div id='navbar_elements_div' style="display: flex;width: 700px;margin-left:2%;visibility:hidden;">
                                    <div style="    display: flex;
                                                    align-items: center;
                                                    cursor: pointer;
                                                    background: rgba(255, 200, 5, 0.1);
                                                    width: 68px;
                                                    transition:0.3s;
                                                    height: 40px;
                                                    padding-left: 1%;
                                                    border-radius: 10px;" id="publicbutton"> <div> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgBnVTLTcNAEH0z+VwA4xNnUwGhg1BCFHHgBhWQDggVBCqIb0iEXwe4A0IH6QAUQAoO8TC79pqfQUuetNrVzM7zm9nxAB6QYRia5XOX/iQ6X2mhzgMItfPbkuB1fkB7s8m/CeUsjNDM7vT4qOu0MB/qCpGm27+R1n8jVLIjG8wa3MmD5Tq8QaYfaTR7wKwHX8hotS2Xgcjl2vCH7yKI1fegvv2q2DJluQ6OkGHfqjJLMEYt7Th1H/f0cTJbigimHIIJaoipMz0tCZVsoGQ9iBad9ALonrrTE/yVhVEo1NLTFsg8msTUfTr4lF7Qx5KQUdC3HMrFALet1O60j2VR5yIbVkK2bQHfxq3EDGUsa4HH9hQsBlgCVkjeYqo0jXOjq8HV2i3+CY0bVr6BGnqusN5k7kFHQdnkXHqZ4+LQgje4bbdnF/uZcD6Pcos8wluiTOy+MVtHhcLI7ovaGL5o1BK7vzR2fhJKoYwX0fc4M8Yqa5stchsVSvFtfMlVcKf/pvaUHIPnCbKGBpBpJ9dnk9L3Vo80Kzs89KfYdBxfxxdxB5Jp69AQWdMpT+DmIRnywsfFBzjd+UKBCtj0hCKTCu0+J74+g3dStdXUpfas/wAAAABJRU5ErkJggg==" alt="vCZC4.png" border="0"> </div>  <div>  &nbsp; <span style="color:white;margin-left:5px">   All </span> </div> </div>
                            
                            
                            
                                    <div style="    margin-left: 45px;
                                                    display: flex;
                                                    align-items: center;
                                                    cursor: pointer;
                                                    border-radius: 10px;
                                                    height:40px;
                                                    transition:0.3s;
                                                    width: 94px;" id="Favourite"> <div style="margin-left:11%"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEqSURBVHgB7VPbTcNQDD3XqfoDre4I7QbpBs0G2aDqLyqPDWCDVHwgftkAJoAN6Aa9TECEhBS1IeY4alBUVVD6XUtOfB0f29E9x2HL/JX6ooBv54p7F7brXBOcnGksETLnMMYOU8XLeo1p00Ts0ZtpGnXwyjBUFZLVCsO2W44N37pdLE9nOv6Z2L/UJRQPH7fuBr9Y/0LnfE1EMBSbRpD/C1SvJ6hryhKxcIUB5wbsYfnc5azPxRFIkNcKOfY0/m8wjOBAOwIPARrZzf8FJLWueV/v5hbvqumQ9YFsmDRTKkVGCqYbYg/oWe9c4yjCdMMcX2NMTqYMHh6dICYIVETSyIfNBmz2bHnWLAhMTTHyeecWXyVGrMlNISTyqC1cTgnkZsLwyY62iX3/BoOGhsA8hmO+AAAAAElFTkSuQmCC" alt="vCZC4.png" border="0"> </div>  <div>  &nbsp; <span style="color:white;margin-left:5px">   Saved </span> </div> </div>
                            
                            
                                   
                            
                            
                                    <div style="width: 109px; border-radius: 10px; transition: all 0.3s ease 0s; height: 40px; margin-left: 45px; display: flex; align-items: center; cursor: pointer;" id="ownbutton"> <div style="margin-left:8%"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVTLUcNADNXay5ADJFsB41QAJTgVQAlQAaSCtAAVQAl0kFABdBAnKSA7cAnY8fKef+PZsUMO6JCVlNWT9LSyEk+MW5odDi06kg5xouyJpIlVY9v2qxZAtJfwGY5YjhAnskhlf7dT46QBIkgu4ZwqrjyVp7qHPs0l//AyGyVBDO2a9o/sJzWYnLv1fOjWywEAaQ/d6gG2q+0uYXLc2TK2dhgGIfixdWHZXDggjGEsMYJUJCrduR26zQwtvtNi/38BuartnZyOtBJtCuoknPH0SaScuU2cSZa0fSWQThR/5XusW+5pIPmLP1ZKKA7TDBd4Fr1VNkCczmcHyLGi+/5gOwEqKWoFjxj7DYiNYVlUPvEr1/0ZsgQPdEGdIDgs+YO+6mq/F8iWxBacjFBJDpAvddHLUcDMZdYw6ruEWVpMZ+X74TNVNZYV2cp51Zutg5MqJq62LCkc1YpsD62EL/4G+EtLeQWpb/xcdAGgCk7wEuotu6mX9n8/I17JJi3fjekCyMDHAJX4nP0Ci97cAJTn0NEAAAAASUVORK5CYII=" alt="vCZC4.png" border="0"> </div>  <div>  &nbsp; <span style="color:white;margin-left:5px">   Created </span> </div></div>
                                    </div>

                         
          </div>`)


    $('#navbar_items').append(`<input type='text' id='searchbar' style="   border: 1px solid #FFFFFF;
            border-radius: 44px;
            box-shadow:none;
            visibility:hidden;
            width:0px;
            position:absolute;
            right:15%;
            background-color: black;
            color: white;
            top:1%;
            font-size:13px;
            font-weight:500;

            height: 55px;" placeholder='Search Prompt' />
             `)

    if (is_premium === true) {
        $('#navbar_items').append(`     <div class="switches-container" style="position: absolute;
                                                                                left: 52%;
                                                                                top: 2%;" >
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


    if ($('#logout_div').length){
        $('#logout_div').remove();
    }

    $('#navbar_items').append(`<div id="logout_div" style="    position: absolute;z-index: 10;top: 66px;cursor: pointer;float: right;width: max-content;box-shadow: rgba(, 99, 99, 0.2) 0px 2px 8px 0px;font-size: 15px;padding: 10px;background-color: rgb(0 0 0);right: 20.5px;color: white;border-radius: 25px;/* width: 100%; */box-shadow: rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
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