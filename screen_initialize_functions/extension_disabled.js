const extension_disabled=()=>{
  
  // $(`${gpt_mode_selector_div} >div `).eq(0).css('background', '#d9d9e3');
  // document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background: #d9d9e3  !important';
  // document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background: #d9d9e3 !important';
    
    clearInputs();
    $('#main_screen_div').hide();
    $('#language-select-wrapper').remove();

    template_content = '';
    $('#mybutton').remove();
    $('#toggle_extension_state_active').empty();
    $('#toggle_extension_state_active').attr('id', 'toggle_extension_state_inactive');
    $('#toggle_extension_state_inactive').append(`<svg style="color:grey;cursor:pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16">
      <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>
      </svg>`)


    document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:white !important';
    $('textarea').css('color', 'black');
    $(gpt_submit_selector).css('visibility', 'visible');
}