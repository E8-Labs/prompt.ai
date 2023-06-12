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
        $('nav').eq(0).before(`<div id='upper_side_menu_content' style="height:30%;padding-top: 9%;"  >  </div>`)

        $('#upper_side_menu_content').parent().addClass('change_background_color_of_all_children');

        $('nav').css('height', '70%');
        $('.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto').eq(0).css('margin-left', '20%');


        if ($('.prompt_ai_logo').length) {
            $('.prompt_ai_logo').remove();
        }
        $('#upper_side_menu_content').append(`<div class='prompt_ai_logo' style="position: absolute;
          top: 30px;
          left: 75px;
          display:flex" > 
          <h4 style="color:white;font-size:15px" > Prompt. </h4> <h4 style="color:#00b985;font-size:15px"> ai  </h4>  </div>`)
        if ($('.sidebar_top_links').length) {
            $('.sidebar_top_links').remove();
        }

        if ($('.sidebar_bottom_links').length) {
            $('.sidebar_bottom_links').remove();
        }
        if ($('#spacing').length) {
            $('#spacing').remove();
        }
        $('#upper_side_menu_content').append(` <div style="padding-top:17%"> <div class='sidebar_top_links' id='Dashboard_side_menu' > 
             <div style="margin-left:15px"> <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
             <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
             </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Dashboard </h5> </div>  
             </div>

             <div class='sidebar_top_links' id='Prompts_side_menu' > 
             <div style="margin-left:15px"> <img src="${chatgpt}" alt="vCZC4.png" border="0"  />  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Chat GPT </h5> </div>
             </div>
    
            </div> `)

        if ($('#new_chat_div').length) {
            $('#new_chat_div').remove();
        }



        $('#Prompts_side_menu').after(`<div id='new_chat_div' style="border: 1px solid white;
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



             <div class='sidebar_bottom_links' id='Privacy_policy_side_menu'  style="height: 25px"> 
             <div style="margin-left:15px"> <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                   <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                   <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                   </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Privacy Policy </h5> </div>
             </div>



             <div class='sidebar_bottom_links' id='Terms_conditions_side_menu'  style="height: 25px"> 
             <div style="margin-left:15px" > <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                   <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                   </svg> </div>  <div style="margin-left:5px"> <h5 style="color:white"> Terms and Conditions </h5> </div>
             </div>

              <div class='sidebar_bottom_links' id='Extension_status'  style="height: 50px"> 
             <div style="margin-left:15px" > <img src='${extension_logo}'  alt='extension_status' /> </div>  <div style="margin-left:5px"> <h5 style="color:white"> Extension Enabled </h5> </div>
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