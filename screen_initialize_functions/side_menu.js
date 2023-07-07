const appending_side_menu = () => {
 
    // if(isUserLoggedIn===false){
    //     return;
    // }
    

        if (document.querySelectorAll('.flex.h-full.w-full.flex-col.p-2')[0]) {
            $('.flex.h-full.w-full.flex-col.p-2').eq(0).css('background', '#050a08')
        }
        // if (document.querySelectorAll('.flex.flex-col.gap-2.pb-2.text-gray-100.text-sm')[0]) {
        //     document.querySelectorAll('.flex.flex-col.gap-2.pb-2.text-gray-100.text-sm')[0].remove()
        // }
        //This one is for new chat button
        if (document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0')[0]) {
            $('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0').eq(0).css('display', 'none')
        }

        if (document.querySelectorAll(hide_nav_menu_button)[0]) {

            $(hide_nav_menu_button).eq(0).css('display', 'none');
        }


        if ($('#upper_side_menu_content').length) {
            $('#upper_side_menu_content').remove();
        }
        $('nav').eq(0).prepend(`<div id='upper_side_menu_content' style=""  >  </div>`)

        $('nav').parent().addClass('change_background_color_of_all_children');

        $('nav').css('height', '100%');
        $('.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto').eq(0).css('margin-left', '20%');


        if ($('.prompt_ai_logo').length) {
            $('.prompt_ai_logo').remove();

        }

    



        $('#navbar_items').prepend(`<div class='prompt_ai_logo' style="margin-left:4%;
         
          height:40px;
         
          display:flex" > 
            <img src='${updated_prompt_savy_logo}'   />     </div>`)

            if($('#profile_div').length){
                $('#profile_div').remove();
            }
    $('#navbar_items').append(`<div id='profile_div' style="display:flex" >
                           <div style="padding-top:10px;margin-left: 40px;z-index:100000">  <img id='search_icon' src='${search_icon}' style="cursor:pointer" />  </div>
              <div style="    margin-right: 60px;padding-top:10px;margin-left: 40px;"> <b> <svg style="border-color:#39b291;color:#39b291" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg> </b>  </div> <div style="position: relative;" >  <img id='profile_icon' style="border-radius:50%" src=${userInfo.image ? userInfo.image : image } height='50px' width='40px' alt='Image to be shown' /> </div></div> 
               </div>
               </div>`)
        if ($('.sidebar_top_links').length) {
            $('.sidebar_top_links').remove();
        }

        if ($('.sidebar_bottom_links').length) {
            $('.sidebar_bottom_links').remove();
        }
        if ($('#spacing').length) {
            $('#spacing').remove();
        }
      

        if ($('#new_chat_div').length) {
            $('#new_chat_div').remove();
        }



    $('#upper_side_menu_content').append(`<div id='new_chat_div' style="border: 1px solid white;
                                                                      display: flex;
                                                                      margin-left: 63px;
                                                                      margin-top: 20px;
                                                                      height: 43px;
                                                                      width: 180px;
                                                                      align-items: center;
                                                                      radius:5px;
                                                                      " > 
             <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="margin-top: 4px;
          color: white;
          padding-right: 10p;
          margin-left: 10px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>                                                         
           <p style="color:white;margin-left:20px">  New Chat </p>
          </div>`)

        if ($('#Prompt_history_div').length) {
            $('#Prompt_history_div').remove();
        }


        $('.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto').after(`<div id='Prompt_history_div' style="margin-left:49px;overflow-y:auto;margin-top: 10px;width:200px" > 
          
          </div>`)




        // for (let i = 0; i < user_prompt_history.length; i++) {
        //     let data = user_prompt_history[i];
        //     $('#Prompt_history_div').append(` 
        //            <div style="display:flex;align-items:center;margin-left:15px;margin-top:15px"> 
        //            <img src="${prompt_history}" alt="vCiKz.png" border="0" />
        //            <p style="color:white;margin-left:5px;max-width: 125px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"> ${data.prompt_id.title}   </p>
        //             </div>
        //            `)
        // }


        $('#Prompt_history_div').append(`
           <div id='spacing'>
               
             
             <div class='sidebar_bottom_links' id='Customers_request_side_menu' style="height: 25px"> 
             <div style="margin-left:15px"> <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                   <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                   </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Customers Request </h5> </div>
             </div>


             
             <div class='sidebar_bottom_links' id='Community_prompt_side_menu'  style="height: 25px"> 
             <div style="margin-left:15px"> <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                   <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                   </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Community Prompt </h5> </div>
             </div>



           



          

              <div class='sidebar_bottom_links' id='Extension_status'  style="height: 50px"> 
             <div style="margin-left:15px" > <img src='${extension_logo}'  alt='extension_status' /> </div>  <div style="margin-left:5px"> <h5 id='extension_status_text' style="color:white">Disable Extension</h5> </div>
             <div id='toggle_extension_state_active' style="margin-left:5px" > <svg style="color:#00C28C;cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
             <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
            </svg> </div>
             </div>




             </div>
             
             </div>
             `)
    // if (document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm')[1]) {
    //     document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm')[1].remove();
    // }
    // if (document.querySelectorAll('.group.relative')[0]) {
    //     document.querySelectorAll('.group.relative')[0].remove()
    // }

    
 
}