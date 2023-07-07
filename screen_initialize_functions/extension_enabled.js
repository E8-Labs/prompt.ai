const extension_enabled=()=>{
   
    clearInputs();
    if(ischatActive===false){
        $('body').eq(0).css({
            "background": "black",

        });
    }
   
    if(not_loggedin===false){
        $('form').parent().css('padding-bottom', '6%');
    }
  

    $('#navbar_items').show();
    $('.prompt_ai_logo_2').remove();
    if(not_loggedin===false){
        $('#upper_side_menu_content').css('padding-top', '');
    }

    if(not_loggedin===false){
        $('.scrollbar-trigger').parent().css('height', '92%');;
    }
    
    $('#extension_status_text').text('Disable Extension');
    // $(`${gpt_mode_selector_div} >div `).eq(0).css('background', 'black');
    $('#main_screen_div').show();
    if (not_loggedin===false){
        $('textarea').eq(0).parent()
            .prepend(lang_wrapper);
    }
  

        if(is_premium===false){
            $('#writingStyleSelect').empty();
            $('#writingStyleSelect').append(`<option value='GPT3'> ChatGPT-3.5 </option>`)
            $('#writingStyleSelect').prop('disabled',true);
    }
    else{
            if (gpt_mode == 'GPT4') {
                $('#writingStyleSelect').empty();
                $('#writingStyleSelect').append(`<option value='GPT4'> GPT-4 </option>
             <option value='GPT3' >  ChatGPT-3.5 </option>
            `

                )
            }
            else {
                $('#writingStyleSelect').empty();
                $('#writingStyleSelect').append(`<option value='GPT3'> ChatGPT-3.5 </option>
             <option value='GPT4' >  GPT-4 </option>
            `
                )
            }
    }
        
    $('#toggle_extension_state_inactive').empty();
    $('#toggle_extension_state_inactive').attr('id', 'toggle_extension_state_active');
    $('#toggle_extension_state_active').append(`<svg style="color:#00C28C;cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
             <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
            </svg>`)
    document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';
    $('textarea').css('color', 'white');
    $(gpt_submit_selector).css('visibility', 'hidden');
    $("textarea").eq(0).parent().append(our_submit_button);
}