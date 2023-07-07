var is_premium = false;userInfo
var user_request_count = 0;
var user_prompt_history;
var prompt_no_count = 1;
var prompt_to_edit = [];
var gpt_mode;
var response_no = 0;
var mode;
var page_for_public=1;
var page_for_private=1;
var show_category_elements=false
var isAppend_menu_items_in_navbar=false
var showSearchBar=false;
var ischatActive=false;
var no_more_public_prompts=false;
var no_more_private_prompts=false;
var load_count=0;
var not_loggedin=false;
var prompt_to_load=[];
var user_photo;
var dataset_name;
var extra_prompts_for_private=[];
var extra_prompts_for_private_parent=[];
var prompt_ai_response;
var user_prompts = [];
var isFlag=false;
var choosing_template_content=1;
var all_template_content=[];
var rating_text = 0;

var prompt_selected=[];
var currentTone;
var isUserLoggedIn=true;
var isExtensionActive=true;
var edit_child_prompt_template=0;
var isRegistered;
var theme;
var child_prompt_to_delete;
var edit_child_prompt = false
var css_inline = `

.step_bar_single_completed{
  width: 15px;
  float: left;
  height: 3px;
  border: 0;
  background: #28a47a;
  margin-left: 5px;
  border-radius: 3px
}
.step_bar_single_uncompleted{
  width: 15px;
  float: left;
  height: 3px;
  border: 0;
  background: #28a47a77;
  margin-left: 5px;
  border-radius: 3px
}

textarea:focus, input:focus{
  outline: none;
}
`;








$(function () {

  // $('form').parent().css('display','none');
  
  // $(document).on('click', function (event) {
  //   var parent = $(event.target).parent();
  //   if (!parent.hasClass('hidediv')) {
  //     // Call your function here
  //    $('form').parent().fadeToggle('1200ms');
  //   }
  // });
  

 
 
  $('select').niceSelect();

 $('textarea').eq(0).css('width','85%');
  
  
  $(document).on('click','ol > li >a',function(){
  
    let check_for_chat=setInterval(()=>{
     if($(request_selector).length){
       $('#navbar_items').remove();
      
       appending_side_menu();
       document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background = 'black';
       
       $("textarea").eq(0).parent().addClass('text_area_to_center');
       $("textarea").eq(0).parent().css("color", "#FFF");


       $('nav').eq(0).addClass('custom_nav');
       document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';
 
       $('form').parent().css('z-index', '1000');
       $('form').parent().css('background', 'black');
       $('form').parent().css('position', 'sticky');
       $('textarea').eq(0).css('width', '85%');
       $('form').parent().children().last().remove();

       $('form').parent().css({
         "display": 'flex',
         "justify-content": "center"
       })
       $('form').css('width', '601px');
       $(gpt_submit_selector).css('visibility', 'hidden');

       $("textarea").eq(0).parent().append(our_submit_button)
       $('body').eq(0).css({
         "background": "",

       });

       $('form').parent().css('padding-bottom', '');

       $('#navbar_items').remove();

       if ($('#prompt_ai_logo').length) {
         $('#prompt_ai_logo').remove();
       }

       $('.scrollbar-trigger').parent().css('height', '100%');

       $('#upper_side_menu_content').css('padding-top', '16%');
       $('#upper_side_menu_content').append(`<div class='prompt_ai_logo' style="position: absolute;
          top: 18px;
          height:40px;
          left: 24%;
          display:flex" > 
            <img src='${updated_prompt_savy_logo}'   />     </div>`)
      clearInterval(check_for_chat);

       if (isExtensionActive === false) {
         extension_disabled();
       }
     }
     
 
 
    },200)
   })
   
  $('form').parent().css('z-index','1000');
  $('form').parent().css('background','black');
  
  
  if($('.h-32.flex-shrink-0').length){
    $('.h-32.flex-shrink-0').css('display','none');
  }


  // $(document).on('DOMNodeInserted', '.relative.flex.flex-col.items-stretch.justify-center.gap-2:eq(0)', function () {
  //   //Checking to see if the text which appears if GPT4 mode is
  //   if (document.querySelectorAll('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600')[0]) {
  //     gpt_mode = 'GPT4'

      
  //   }
  //   else{
  //     gpt_mode='GPT3'
  //   }

   
  // })

  if (window.location.href.includes('gpt-4')) {
    gpt_mode='GPT4'
  }
  else{
    gpt_mode='GPT3'
  }




  // $(document).on('DOMNodeInserted', '.h - 32.flex - shrink - 0', function () {
  //   //Checking to see if the text which appears if GPT4 mode is
  //   if (document.querySelectorAll('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600')[0]) {
  //     gpt_mode = 'GPT4'
  //   }
  // })


    


  $(document).on('click', '.edit_prompt', function () {
   
    
   
    let id = $(this)[0].id;
    prompt_to_edit = all_prompts.filter((item) => item._id === id);
    $("#loading_gif_2").show();
    // chrome.runtime.sendMessage({ type: 'fetching_template_content', id: prompt_to_edit[0]._id }, function (response) {
      // all_template_content=response.data.template;
      $("#loading_gif_2").hide();
    $('#upper_side_menu_content').addClass('blur-effect');
    $(blur_selector).addClass("blur-effect");
      $('#main_screen_div').addClass('blur-effect');
    $('.hidediv').hide();
    $("nav").addClass("blur-effect");
    $('#promptbtn').prop('disabled', true);

    $("textarea").hide();
    $('body').append(popUp);
    $('#title_heading >h5').text('Edit your prompt');

    if (prompt_to_edit) {
      $('#new_prompt_title').val(prompt_to_edit[0].title);
      title = $('#new_prompt_title').val();

      $('#new_prompt_teaser').val(prompt_to_edit[0].teaser);
      teaser = $('#new_prompt_teaser').val();
      $('#public_btn').prop('disabled', true);
      $('#public_btn').css('background', '');
      $('#private_btn').prop('disabled', true);
      $('#private_btn').css('background', '');

    }
  })
  // })


  $(document).on('click','#profile_icon',function(){
     $('#logout_div').toggle();
    $('#promptbtn').toggle();
    
  })


  $(document).on('click', '#Advance_filters', function () {
    $('#menu-tabs').toggle();
  })

  $(document).on('click','#unselect_prompt',function(){
    if($('#authordiv').length){
      $('#authordiv').remove();
      
    }
    if ($('#user_image_div').length){
      $('#user_image_div').remove();
    }
    template_content = '';
    $('textarea').val('');
    $('textarea').prop('placeholder','Send a message');
   prompt_selected=[];
  $('.hidediv').css('background','');
   
    
  })



  //Filters calling
  $(document).on('keyup', '#searchbar', searchbar_filter);

  $(document).on('change', '#Subcategories_filter', sub_categories_filter);

  $(document).on('change', '#Category_filter', function () {
    price_filter = false;
    free_filter = false;
    categories_filter();
  })


  $(document).on('change', '#Model', function () {
    let option = $("#Model").find(":selected").val();
    if (option == 'All_filter_button') {
      $('#Category_filter').empty();
      $('#Category_filter').append(`<option value='none'>  Category Content  </option>`)
      for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
        $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
      }

      fetchPrompts();



    }
    else if (option == 'Free_filter_button') {
      price_filter = false;
      free_filter = true;
      $('#Category_filter').empty();
      $('#Category_filter').append(`<option value='none'>  Category Content  </option>`)
      for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
        $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
      }

      filter_prompts();


    }
    else if (option == 'Paid_filter_button') {
      price_filter = true;
      free_filter = false;
      $('#Category_filter').empty();
      $('#Category_filter').append(`<option value='none'>  Category Content  </option>`)
      for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
        $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
      }

      filter_prompts();

    }
  })

  $(document).on('click','#new_prompt_title',function(){
    $('#label_for_title').addClass('focus_title');
    $('#new_prompt_title_div').addClass('focused_border');
    // $('#new_prompt_title').css('height','54px');
    
    
  })

  $(document).on('click','#new_prompt_teaser',function(){
    $('#label_for_title').removeClass('focus_title');
    $('#new_prompt_title').css('height', '40px');
    $('#label_for_description').css({
      "top": "-15px",
      "background": "black"
    });
    $('#new_prompt_teaser_div').addClass('focused_border');
   
  })
  // $(document).on('blur','#language-select-wrapper',function(){
  //   alert('blurred');
  // })

  $(document).on('blur','#new_prompt_title',function(){
    $('#label_for_title').removeClass('focus_title');
    $('#new_prompt_title').css('height', '40px');
    $('#new_prompt_title_div').removeClass('focused_border');

   
  })

  $(document).on('blur', '#new_prompt_teaser', function () {
    $('#label_for_title').removeClass('focus_title');
    $('#label_for_description').removeClass('focus_title');
    $('#label_for_description').css('top', '7px');
    $('#new_prompt_teaser_div').removeClass('focused_border');
  })



  $(document).on('click','#new_prompt_Hint',function(){
    $('#label_for_hint').addClass('focus_title');
    $('#new_prompt_Hint_div').addClass('focused_border');
    
  })

  $(document).on('blur', '#new_prompt_Hint', function () {
    $('#label_for_hint').removeClass('focus_title');
    $('#new_prompt_Hint_div').removeClass('focused_border');

  })

  $(document).on('blur','#category_elements_dropdown',function(){
    $('#new_prompt_category_div').removeClass('focused_border');
    $('#label_for_category').css('top', '7px');
  })

  $(document).on('click', '#select_topic', function () {
    $('#label_for_category').css({
      "top":"-15px",
      "background":"black"
    });
    $('#new_prompt_category_div').addClass('focused_border');
    show_category_elements = !show_category_elements
    if(show_category_elements===true){
      $('#category_elements_dropdown').show();
      $('#category_elements_dropdown').focus();
    }
    else{
      $('#category_elements_dropdown').hide();
      $('#category_elements_dropdown').blur();
    }
   
    

    


  })

  $(document).on('blur', '#select_topic', function () {
    $('#label_for_category').css('top','7px');
    $('#new_prompt_category_div').removeClass('focused_border');
  })


  $(document).on('click', '#new_prompt_template', function () {
    $('#label_for_template').css({
      'top': '-15px',
      "background":"black"
    });
    $('#new_prompt_template_div').addClass('focused_border');
  
  })

  $(document).on('click', '#select_subtopic', function () {
    $('#label_for_subtopic').css({
      "top":"-15px",
      "background":"black"
    });
    $('#new_prompt_subtopic_div').addClass('focused_border');
  })

  $(document).on('click','#new_prompt_subtopic_suggestion',function(){
    $('#new_prompt_subcategory_suggestion_div').addClass('focused_border');
  })
  $(document).on('blur', '#new_prompt_subtopic_suggestion', function () {
    $('#new_prompt_subcategory_suggestion_div').removeClass('focused_border');
  })

  $(document).on('click','#new_prompt_topic_suggestion',function(){
    $('#new_prompt_category_suggestion_div').addClass('focused_border');
  })

  $(document).on('blur', '#new_prompt_topic_suggestion', function () {
    $('#new_prompt_category_suggestion_div').removeClass('focused_border');
  })

  $(document).on('blur', '#select_subtopic', function () {
    $('#label_for_subtopic').css('top','7px');
    $('#new_prompt_subtopic_div').removeClass('focused_border');
  })

  $(document).on('click','#waiting_list_email_address_input',function(){
    $('#waiting_list_email_address_div').addClass('focused_border');
  })

  

  $(document).on('blur', '#waiting_list_email_address_input', function () {
    $('#waiting_list_email_address_div').removeClass('focused_border');
  })


 


  $(document).on('blur','#new_prompt_template',function(){
    $('#label_for_template').css('top','7px');
    $('#new_prompt_template_div').removeClass('focused_border')
  })
  
  // $(document).on('mouseenter','.heart',function(){
    
  //   let id=$(this)[0].id;
  //  let isFavourite_prompt_exist= userInfo.favourite_prompts.findIndex((item)=>item === id );
  //  console.log(isFavourite_prompt_exist);
  //  if(isFavourite_prompt_exist>=0){
  //    $(this).addClass('save_btn ');
  //  }
   
  // })

 
  
  //SubmitButton
  const submit1 = () => {
    ischatActive=true;
    data = $("textarea").val();
    let text_data = data;
    if (!data) {
      return alert("Please Enter some data in the textfield");
    }
    else {

      currentLang = $("#languageSelect").find(":selected").val();
      currentTone = $("#toneSelect").find(":selected").val(); 
      

      
      if (template_content) {

        // data = template_content.replace("[Prompt]", data || "[PROMPT]", data || "[prompt]", data).replace('[Language]', currentLang);
        data = template_content.replace('[Language]', currentLang).replace('[Tone]',currentTone);
        var all_words=data.split(' ');
        var all_kws = text_data.split(',');
        var dynamic_prompt_counter=0; 

        for(var i=0;i<all_words.length;i++)
        {
          if(all_words[i].length>2)
          {
            var tmp_ = all_words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
            if (tmp_[0] == '[' && tmp_.slice(-1) == ']')
            {
              
              all_words[i]=all_kws[dynamic_prompt_counter]
              dynamic_prompt_counter++;
            }

          }
        }
        data = all_words.join(' ');
        // template_content.replace()
      }
     
      $("textarea").val(data);
      $('#top_bar').hide();
      template_content = '';

      

      if ($('#main_screen_div').length){
        $('#main_screen_div').remove();
      }



      if (prompt_selected.length) {
        chrome.runtime.sendMessage({
          type: "upvoting",
          IncrementBy: 'increment_by_0.3',
          id: prompt_selected[0]._id
        }, function (response) {

        });
      }



  
      
      $('body').eq(0).css({
        "background":"",
        
       });

       $('form').parent().css('padding-bottom','');

       $('#navbar_items').remove();

       if($('#prompt_ai_logo').length){
        $('#prompt_ai_logo').remove();
       }

      $('.scrollbar-trigger').parent().css('height','100%');

      $('#upper_side_menu_content').css('padding-top','16%');
      $('#upper_side_menu_content').append(`<div class='prompt_ai_logo' style="position: absolute;
          top: 18px;
          height:40px;
          left: 24%;
          display:flex" > 
            <img src='${updated_prompt_savy_logo}'   />     </div>`)

          $(gpt_submit_selector).click();
        
       
      if ($('#unselect_prompt').length){
        $('#unselect_prompt').parent().remove();
      }

    






      let check_user_request = setInterval(() => {



        if ($(request_selector).eq(user_request_count).length) {


          $(request_selector).eq(user_request_count).text(text_data);


          if ((document.querySelectorAll(cancel_or_stop_button_free_version)[1]?.textContent == 'Stop generating' || document.querySelectorAll(cancel_or_stop_button_paid_version)[0]?.textContent == 'Stop generating')) {
            $(request_selector).eq(user_request_count).text(text_data);
            user_request_count = user_request_count + 2;
            clearInterval(check_user_request);
          }
          else {
            if (document.querySelectorAll(cancel_or_stop_button_free_version)[1]?.textContent == 'Regenerate response' || document.querySelectorAll(cancel_or_stop_button_paid_version)[0]?.textContent == 'Regenerate response') {
              $(request_selector).eq(user_request_count).text(text_data);
              user_request_count = user_request_count + 2;
              clearInterval(check_user_request);
            }
          }


        }

      }, 20)



      if (csv_file_content) {
        chrome.runtime.sendMessage({ type: "file_handling", data, csv_file_content }, function (response) {
          console.log(response);
          if (response.data.status == 200 || typeof(response.data)=='string') {
            chat_bot_response = response.data.replace('Answer:','').trim();
            $(response_selector).eq(response_no).text(chat_bot_response );
            response_no++;
          }

          else if (response.data.status == 400) {

            //changing the text of gpt response with respect to response no.
            $(response_selector).eq(response_no).text('Server is currently busy');
          }


        });

      }

      if (csv_file_content) {

        let bot_response = setInterval(() => {
          if ((document.querySelectorAll(cancel_or_stop_button_free_version)[1]?.textContent == 'Stop generating' || document.querySelectorAll(cancel_or_stop_button_paid_version)[0]?.textContent == 'Stop generating')) {
            if (document.querySelectorAll(cancel_or_stop_button_free_version)[1]
              || document.querySelectorAll(cancel_or_stop_button_paid_version)[0]) {

              try {
                document.querySelectorAll(cancel_or_stop_button_free_version)[1].click();
              }
              catch (err) { }
              try {
                document.querySelectorAll(cancel_or_stop_button_paid_version)[0].click();
              }
              catch (err) { }
              $(response_selector).eq(response_no).text("One second, I’m thinking… ");
              clearInterval(bot_response);

            }
          }
        }, 100)

      }




      let regenerate_button = setInterval(() => {




        if (document.querySelectorAll(chat_gpt_feedback_selector).length
        ) {
          $(chat_gpt_feedback_selector).css('display', 'none');

        }

        let check_for_notification_popup = setInterval(() => {
          if (document.querySelectorAll(side_gpt_response_popup).length) {
            $(side_gpt_response_popup).remove();
            clearInterval(check_for_notification_popup);
          }
        }, 50)



        if (prompt_selected.length) {

          


          if (document.querySelectorAll(cancel_or_stop_button_free_version)[1]?.textContent == 'Regenerate response') {

            if (document.querySelectorAll('.flex.ml-auto.gap-2.p-1')[0])

            if($('#rating_div').length){
              $('#rating_div').remove();
            }
                
            // $(response_selector).eq(prompt_no).parent().css('width','121%');
             $(response_selector).eq(prompt_no).parent().css('width','121%');
              $(response_selector).eq(prompt_no).after(`
              
              
              <div id='rating_div' style="display: flex;
                                          justify-content: flex-end;
                                          gap: 10px;
                                          align-items: center;
                                          width: 71%;
                                          margin-left: 200px;" >  
              <div> <p id='rating_paragraph' style="${theme == 'light' ? 'black' : 'white'}"> How would you rate this prompt?  </div>
              <div  id='${prompt_selected[0]._id}'  class='upvote'  style="height: 40px;
                          
                          border-radius: 30px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          margin-top: 15px;
                          background:#00C28C1A;
                          width:40px;
              ">  <img src="${uparrow}" alt="vCZC4.png" border="0" />  </div>
                 


                   <div  id='${prompt_selected[0]._id}'  class='downvote'  style="height: 40px;
                          
                          border-radius: 30px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          width:40px;
                          margin-top: 15px;
                          background:#FF124B1A;
                        
              ">     <img src="${down_red_arrow}" alt="vCZC4.png" border="0" />   </div>




                   <div style="height: 40px;
                          
                          border-radius: 30px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          margin-top: 15px;
                          width:40px;
                          background: ${theme == 'light' ? 'lightgrey' : '#FFFFFF1A'};
              ">   <img src="${flag}" alt="vCZC4.png" border="0" />   </div>
              </div>`)
            prompt_no++;

            clearInterval(regenerate_button);

            $('.upvote').on('mouseenter', function () {
              $(this).css('cursor', 'pointer');
            })
            $('.downvote').on('mouseenter', function () {
              $(this).css('cursor', 'pointer');
            })




            $(gpt_submit_selector).css("visibility", "hidden");
            if ($("#language-select-wrapper").length > 0) {
              $("#language-select-wrapper").remove();
            }
            $('textarea').eq(0).parent()
              .prepend(lang_wrapper);
            if (is_premium == false) {
              $('#writingStyleSelect').prop('disabled', true);
            }
            if (gpt_mode == 'GPT4') {
              $('#writingStyleSelect').empty();
              $('#writingStyleSelect').append(`<option value='GPT4'> GPT-4 </option> ` )
              $('#writingStyleSelect').prop('disabled',true);
            }
            else {
              $('#writingStyleSelect').empty();
              $('#writingStyleSelect').append(`<option value='GPT3'> ChatGPT-3.5 </option>
          
            `
              )
              $('#writingStyleSelect').prop('disabled', true);
            }
            
            if ($("#mybutton").length > 0) {
              $("#mybutton").remove();
            }
            $("form >div>div").eq(1)
              .append(our_submit_button);
            if (prompt_selected.length) {


         


              if (prompt_selected[0].cID > 0) {
                childPrompt = all_prompts.filter(
                  (item) => item.pID === prompt_selected[0].cID
                );


                if (childPrompt[0].file_content !== undefined) {

                  csv_file_content = childPrompt[0].file_content;

                }

                if (childPrompt[0].hint) {
                  $("textarea").prop("placeholder", childPrompt[0].hint);
                }
                template_content = childPrompt[0].template;
                // choosing_template_content++;
                if ($("#authordiv").length > 0) {
                  $("#authordiv").remove();
                }


                $(".AIPRM__flex .AIPRM__w-full").prepend(`
                <div id="authordiv" class="prompt_stacking_div" style="display: flex;
              margin-bottom: 15px;
              padding-top: 30px;"" >
                
                </div>`);

                if ($('#user_image_div').length) {
                  $('#user_image_div').remove();
                }

                $('#language-select-wrapper').append(`<div  id='user_image_div' style="position: absolute;
            top: 10px;
            left: 30px; display:flex;" > 
            <p  style="color:white;font-size:12px;"> &nbsp @  ${prompt_selected[0].user.username}  </p>
            </div>`)

                $('#unselect_prompt').prop('disabled', true);


                $('.prompt_stacking_div').append(` <div  id="prompt_stacking_div_1" style="height: 50px;
                         
                        
                         display: flex;
                         align-items: center;
                         ">  
                          <p style="color:white;margin-left:10px"> ${prompt_selected[0].title.length >= 19 ? prompt_selected[0].title.substr(0, 19).concat('...') : prompt_selected[0].title}  </p> </div>
                         <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 2px;
                                      width: 30px;
                                      display: flex;
                                      margin-left:5px;
                                      align-items: center;
                                      margin-top: 25px;" >  </div>

                          <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          margin-top: 22px;
                          border-radius: 3px;">
                          
                          
                          </div>



                         

                         `)

                if (child_prompt_1.length) {
                  if (child_prompt_2.length === 0) {

                    $('.prompt_stacking_div').append(`
                         <div  id="prompt_stacking_div_2" style="height: 50px;
                         width: 180px;
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         margin-left:10px;
                         background: #111e1a;">
                          <p style="color:white;margin-left:10px"> ${child_prompt_1[0].title.length >= 19 ? child_prompt_1[0].title.substr(0, 19).concat('...') : child_prompt_1[0].title}  </p> </div>
                         
                          

                          
                          
                          `)

                    
                  }
                  
                  else {

                    $('.prompt_stacking_div').append(`
                         <div  id="prompt_stacking_div_2" style="height: 50px;
                         width: 180px;
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         margin-left:10px;
                         background: #111e1a;">
                          <p style="color:white;margin-left:10px"> ${child_prompt_1[0].title.length >= 19 ? child_prompt_1[0].title.substr(0, 19).concat('...') : child_prompt_1[0].title}  </p> </div>
                         <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 2px;
                                      width: 30px;
                                      display: flex;
                                      align-items: center;
                                      margin-top: 25px;
                                      " >  </div>

                                        <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          margin-top: 22px;
                          border-radius: 3px;">
                          
                          
                          </div>
                          

                          
                          
                          `)

                    $('.prompt_stacking_div').append(`
                        
                          

                          <div  id="prompt_stacking_div_3" style="height: 50px;


                         display: flex;
                         align-items: center;
                         border-radius: 15px;

                         margin-left:10px">
                          <p style="color:white;margin-left:10px"> ${child_prompt_2[0].title.length >= 19 ? child_prompt_2[0].title.substr(0, 19).concat('...') : child_prompt_2[0].title}  </p> </div>
                         

                          
                          

                          
                          `)

                  }



                }


                if (prompt_no_count === 2) {
                  $('#prompt_stacking_div_2').css({
                    "height": "50px",
                    "display": "flex",
                    "align-items": "center",
                    "border-radius": "15px",
                    "background": "",
                    "width": ""

                  })

                  $('#prompt_stacking_div_3').css({
                    "height": "50px",
                    "width": "180px",
                    "border-radius": "15px",
                    "margin-left": "10px",
                    "background": "#111e1a"

                  })

                }





                prompt_selected = childPrompt;
                prompt_no_count++;



              }
              else {
                $("textarea").prop("placeholder", "Send a message");
                prompt_selected = '';
               $('main').css('padding-bottom','12%');
         

              }
            }
          }
        }



      }, 70)


    }
    $(document).on('click', 'ol > li >a', function () {
      $('#navbar_items').remove();
      
      let check_for_chat = setInterval(() => {
        if ($('#upper_side_menu_content').length === 0) {
         
          if ($(request_selector).length) {
            
            appending_side_menu();
            document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background = 'black';
           
            $("textarea").eq(0).parent().addClass('text_area_to_center');
            $("textarea").eq(0).parent().css("color", "#FFF");

            document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';

            $('form').parent().css('z-index', '1000');
            $('form').parent().css('background', 'black');
            $('form').parent().css('position', 'sticky');
            $('textarea').eq(0).css('width', '85%');
            $('form').parent().children().last().remove();

            $('form').parent().css({
              "display": 'flex',
              "justify-content": "center"
            })
            $('form').css('width', '601px');
            $(gpt_submit_selector).css('visibility', 'hidden');
            $("textarea").eq(0).parent().append(our_submit_button)
            $('nav').eq(0).addClass('custom_nav');
            $('body').eq(0).css({
              "background": "",

            });

            $('form').parent().css('padding-bottom', '');

           

            if ($('#prompt_ai_logo').length) {
              $('#prompt_ai_logo').remove();
            }

            $('.scrollbar-trigger').parent().css('height', '100%');

            $('#upper_side_menu_content').css('padding-top', '16%');
            $('#upper_side_menu_content').append(`<div class='prompt_ai_logo' style="position: absolute;
          top: 18px;
          height:40px;
          left: 24%;
          display:flex" > 
            <img src='${updated_prompt_savy_logo}'   />     </div>`)
            clearInterval(check_for_chat);
            if (isExtensionActive === false) {
              extension_disabled();
            }
          }

        }
       



      }, 200)
    })

  };




  $(document).on('mouseenter', '.prompt_ai_logo', function () {
    $(this).css('cursor', 'pointer');
  })

  // Public Prompts being appended





  // const fetchPublicPrompts = (e) => {



  // };

  $(document).on('click', '.prompt_ai_logo', function () {
    document.querySelectorAll('nav >div')[1].firstChild.click();

  })

  $(document).on('click', '#back_page', function () {
    if ($(".main_public_prompt_div").length > 0) {
      $(".main_public_prompt_div").remove();
    }
    if ($('#Pagination_div').length) {
      $('#Pagination_div').remove();
    }
    page--;
    $('#loading_gif_2').show();
    chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page }, function (response) {
      global_api_response = response.data.public_prompts;


      chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page: page + 1 }, function (response) {

       if(response.data.public_prompts.length===0){
        no_more_public_prompts=true;
       }
       if(response.data.user_prompts.length===0){
        no_more_private_prompts=true;
       }


       

      });




    });

  })

  // const fetch_additional_public_prompts=()=>{

  // }


  $(document).on('click', '#next_page', async function () {


    $('#loading_gif_2').show();
    // page++;

    if(btn_click=='Public'){
      page_for_public++;
      chrome.runtime.sendMessage({ type: "fetch_prompts", page: page_for_public }, function (response) {
        console.log(response);

        
          if (response.data.public_prompts.length === 0) {
            $('#Pagination_div').empty();
           no_more_public_prompts=true;
            $('#loading_gif_2').hide();
          }
          else {
            if(response.data.public_prompts.length<12){
              no_more_public_prompts = true;
              $('#Pagination_div').empty();
            }
            extra_prompts = response.data.public_prompts;
            extra_parent_prompts = [...extra_prompts];
            all_prompts = ([...all_prompts, ...extra_prompts]);
            $('#loading_gif_2').hide();
            fetchExtraPublicPrompts();
          }

    
      });
    }
    else if(btn_click=='Private'){
      page_for_private++;

      chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page: page_for_private }, function (response) {
       
          if (response.data.user_prompts.length === 0) {
            $('#Pagination_div').empty();
             no_more_private_prompts=true;
            $('#loading_gif_2').hide();
          }
          else {
            if(response.data.user_prompts.length<12){
              no_more_private_prompts=true;
              $('#Pagination_div').empty();
            }

            extra_prompts_for_private = response.data.user_prompts;
            extra_prompts_for_private_parent = [...extra_prompts_for_private]
            all_prompts = ([...all_prompts, ...extra_prompts_for_private]);
            $('#loading_gif_2').hide();
            fetchExtraPrivatePrompts();

        }





      });

    }



   
   


  })

  const clearInputs = () => {
    teaser = '';
    template = '';
    url = '';
    hint = '';
    title = '';
    method = '';
    topic = '';
    subtopic = '';
    prompt_no = 0
    child_prompt_to_delete='';
    csv_file_content='';
    all_template_content=[];
    choosing_template_content=1;
    edit_child_prompt_template=0;
     
     user_request_count = 0;
     prompt_selected=[];
    
    
     prompt_to_edit = [];
     gpt_mode;
     response_no = 0;
     mode;
     dataset_name;
     prompt_ai_response;
     
     rating_text = 0;
     theme;
     edit_child_prompt = false
  }

  $(document).on('click', '#clear_prompt', function () {
    $('#prompt_details').remove();
    clearInputs();
    prompt_to_edit = [];
    alert('Your prompt has been erased!');
    $('#crossbtn').click();
  })


  $(document).on('click', '#save_suggestion', function () {
     $('#loading_gif_3').show();
    chrome.runtime.sendMessage({ type: "suggesting_category_and_subcategory", topic_name, subtopic_name }, function (response) {
      if (response.data.message == 'This subcategory already exists in this category!') {
        alert('This Subcategory is already registered for this category, please try a different one!');
        $('#loading_gif_3').hide();
      }
      else {

        // chrome.runtime.sendMessage({ type: "fetching_topics" }, function (response) {

          // categories = response.data;
          $('#loading_gif_3').hide();
          $('#go_back_to_screen_3').click();

        // });
      }





    });
  })




  const fetchPersonalPrompts = () => {

    $('#publicbutton').css('background', '');
    $('#ownbutton').css('background', '#0effe21f');
    $('#Favourite').css('background', '');
   

    // console.log(user_prompts);

    // $("#promptbtn").show();
    btn_click = 'Private';
    page = 1;

    let parentPrompts = user_prompts.filter(
      (item) => (item.cID && !item.pID) || (!item.cID && !item.pID)
    );

    if ($(".main_personal_prompt_div").length > 0) {
      $(".main_personal_prompt_div").remove();
    }
    if ($('#purchase_div').length) {
      $('#purchase_div').remove();
    }
    if ($(".main_public_prompt_div").length > 0) {
      $(".main_public_prompt_div").remove();
    }
    if ($(".favourite_public_prompt_div").length > 0) {
      $(".favourite_public_prompt_div").remove();
    }

    if ($('#Pagination_div').length) {
      $('#Pagination_div').remove();
    }


    $(".text-gray-800").css("max-width", "85%")



   

    
      for (let i = 0; i < parentPrompts.length; i++) {

        let data = parentPrompts[i];

        //main_personal_prompt_div
        $("#main_div").append(`<div class='col-xxl-3 col-xl-4 col-lg-4 col-md-6 main_personal_prompt_div'   >

              <div class="prompt-card hidediv" id='${data._id}' >
                            <div class="prompt-top">
                                <div class="prompt-user">
                                    <a href="#">
                                        <img src="${data.user.image}" alt="">
                                        <div class="prompt-user-text">
                                            <a href='#'>@${data.user.username}</a>
                                    
                                        </div>
                                    </a>
                                </div>
                                <div class="card-top-right">
                                    <div class="save_toggle">
                                                        <button style="display:flex;align-items:center;justify-content:center"  id='${data._id}' class=${userInfo.favourite_prompts.includes(data._id) ? 'save_btn_active heart' : ' save_btn heart'  }  ><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.365 0.375014C4.9431 0.37479 4.07542 0.374653 3.35249 0.609548C1.89373 1.08353 0.750034 2.22722 0.276052 3.68599C0.0411572 4.40892 0.0412937 5.2766 0.0415175 6.6985L0.0415314 13.0178C0.0415259 13.7926 0.0415214 14.4118 0.0790819 14.8887C0.116093 15.3585 0.19481 15.8042 0.433356 16.1579C0.91203 16.8675 1.74628 17.2512 2.59659 17.1528C3.02033 17.1038 3.40994 16.8735 3.79077 16.5958C4.17726 16.314 4.64742 15.911 5.23568 15.4068L5.25719 15.3884C5.83284 14.8949 5.99671 14.7682 6.15283 14.713C6.37738 14.6337 6.62235 14.6337 6.8469 14.713C7.00302 14.7682 7.16689 14.8949 7.74254 15.3884L7.76404 15.4068C8.3523 15.911 8.82246 16.314 9.20896 16.5958C9.58979 16.8735 9.9794 17.1038 10.4031 17.1528C11.2534 17.2512 12.0877 16.8675 12.5664 16.1579C12.8049 15.8042 12.8836 15.3586 12.9206 14.8887C12.9582 14.4119 12.9582 13.7926 12.9582 13.0179L12.9582 6.6985C12.9584 5.2766 12.9586 4.40892 12.7237 3.68599C12.2497 2.22722 11.106 1.08353 9.64724 0.609548C8.92431 0.374653 8.05663 0.37479 6.63473 0.375014H6.365ZM3.73876 1.79837C4.24852 1.63274 4.90015 1.62503 6.49987 1.62503C8.09958 1.62503 8.75121 1.63274 9.26097 1.79837C10.3392 2.1487 11.1845 2.99404 11.5349 4.07226C11.7005 4.58202 11.7082 5.23365 11.7082 6.83336V12.9895C11.7082 13.7991 11.7077 14.3688 11.6745 14.7905C11.6403 15.2251 11.5765 15.39 11.5301 15.4588C11.3125 15.7814 10.9333 15.9558 10.5468 15.9111C10.4644 15.9016 10.2976 15.8426 9.94541 15.5858C9.60355 15.3365 9.17071 14.9661 8.55603 14.4393L8.47335 14.3683C8.0216 13.9804 7.6693 13.6779 7.26335 13.5344C6.76933 13.3599 6.2304 13.3599 5.73638 13.5344C5.33043 13.6779 4.97813 13.9804 4.52638 14.3683L4.4437 14.4393C3.82902 14.9661 3.39618 15.3365 3.05432 15.5858C2.70211 15.8426 2.53537 15.9016 2.45292 15.9111C2.06642 15.9558 1.68721 15.7814 1.46963 15.4588C1.42322 15.39 1.35945 15.2251 1.32522 14.7905C1.292 14.3688 1.29153 13.7991 1.29153 12.9895V6.83336C1.29153 5.23365 1.29924 4.58202 1.46487 4.07226C1.81521 2.99404 2.66055 2.1487 3.73876 1.79837Z" fill="white"/>
                </svg> </button>
                                    </div>
                                </div>
                            </div>
                            <div class="prompt-content promptcard " id='${data._id}'>
                                <h3>${data.title}</h3>
                               <div class="prompt--description">
                                    <p>${data.teaser}</p>
                               </div>
                            </div>
                            <div class="prompt-card-bottom">
                                <a href=""><img src="${uparrow}" class="colorized-image"  alt=""/>${Math.ceil(data.likes)}</a>
                                <a href="">  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg> &nbsp ${data.views}</a>
                                <a href=""><img class="colorized-image" src="${comment}" alt="">${data.comments}</a>
                            </div>
                        </div>

                </div>`


        )

      




      }

     
   



     
    
    $('#main_div').eq(0).after(`<div id='Pagination_div' class="container" style="display:flex;justify-content:center;gap:20px;margin-top:10px;width:95%;padding-bottom:28%">
          
          <div id='Forward_button_div'  >  <h4 style="color:#28a47a"  id='next_page'> Show More </h4>   </div>
          </div>
    
    `)






    if (category_selected) {
      if ($('#Pagination_div').length) {
        $('#Pagination_div').remove();
      }

    }

    if (($('.relative.flex.flex-col.items-stretch.justify-center.gap-2').eq(0).length || is_premium)) {
      if ($('#Pagination_div').length) {
        $('#Pagination_div').remove();
      }


      $('#main_div').eq(0).after(`<div id='Pagination_div' class="container" style="display:flex;justify-content:center;gap:20px;margin-top:10px;width:95%">
          
          <div id='Forward_button_div'  >  <h4 style="color:#28a47a"  id='next_page'> Show More </h4>   </div>
          </div>
    
    `)



      // $('#Pagination_div').css('padding-bottom','100px');
      $('#Pagination_div').css('padding-bottom', '25%');

    }


    // if(no_more_private_prompts==true){
    //   $('#Pagination_div').empty();
    // }
  
    if (no_more_private_prompts===true){
      $('#Pagination_div').empty();
    }

    if(extra_prompts_for_private_parent.length){
      fetchExtraPrivatePrompts();
    }


  };



  $(document).on("change", "#Topicss", function () {
    let isNull = $(this).find(":selected").val();
    console.log(isNull);
    if (isNull !== "none") {
    }
  });

  $(document).on("change", "#languageSelect", function () {
    currentLang = $("#languageSelect").find(":selected").val();
  });

  $(document).on("change", "#sequentialCheck_box", function () {
    isSequential = !isSequential;
  });


  $(document).on("click", ".disheart", function () {
    let id = $(this)[0].id
    chrome.runtime.sendMessage({
      type: "deleting_favourite_prompt",
      uId: userId,
      pId: id
    }, function (response) {
      window.location.reload();
    
    });
  });


  $(document).on("click", ".upvote", function () {
    $('.upvote').prop('disabled', true);
    alert('Thank you for your rating');
    chrome.runtime.sendMessage({
      type: "upvoting",
      IncrementBy: 'increment_by_0.5',
      id: $(this)[0].id
    }, function (response) {

    });

  });




  $(document).on('click', '#new_chat_div', function () {
    document.querySelectorAll('nav >div')[1].firstChild.click();


  })

  $(document).on('change', '#new_prompt_topic_suggestion', function () {
    topic_name = $(this).val();

  })
  $(document).on('change', '#new_prompt_subtopic_suggestion', function () {
    subtopic_name = $(this).val();

  })

  $(document).on('change', '#new_prompt_price', function () {
    price = $(this).val();

  })



  // Favourite Prompts being appended here
  $(document).on("click", "#Favourite", function () {
btn_click='Favourite';
    $('#publicbutton').css('background', '');
    $('#ownbutton').css('background', '');
    $('#Favourite').css('background', 'rgba(14, 110, 255, 0.1)');

    console.log(user_favourite_prompts);

    if ($(".main_public_prompt_div").length > 0) {
      $(".main_public_prompt_div").remove();
    }
    if ($(".main_personal_prompt_div").length > 0) {
      $(".main_personal_prompt_div").remove();
    }
    if ($('#purchase_div').length) {
      $('#purchase_div').remove();
    }

    if ($(".favourite_public_prompt_div").length > 0) {
      $(".favourite_public_prompt_div").remove();
    }

    if ($('#Pagination_div').length) {
      $('#Pagination_div').remove();
    }

    $(".text-gray-800").css("max-width", "85%")

    if (user_favourite_prompts.length) {



      
        for (let i = 0; i < user_favourite_prompts.length; i++) {
          let data = user_favourite_prompts[i];

            //favourite_public_prompt_div
          $("#main_div").append(`<div class='col-xxl-3 col-xl-4 col-lg-4 col-md-6 main_public_prompt_div  '   >

              <div class="prompt-card hidediv" id='${data._id}' >
                            <div class="prompt-top">
                                <div class="prompt-user">
                                    <a href="#">
                                        <img src="${data.user.image}" alt="">
                                        <div class="prompt-user-text">
                                            <a href='#'>@${data.user.username}</a>
                                    
                                        </div>
                                    </a>
                                </div>
                                <div class="card-top-right">
                                    <div class="save_toggle">
                                        <button style="display:flex;justify-content:center;align-items:center"  id='${data._id}' class="save_btn_active disheart"><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.365 0.375014C4.9431 0.37479 4.07542 0.374653 3.35249 0.609548C1.89373 1.08353 0.750034 2.22722 0.276052 3.68599C0.0411572 4.40892 0.0412937 5.2766 0.0415175 6.6985L0.0415314 13.0178C0.0415259 13.7926 0.0415214 14.4118 0.0790819 14.8887C0.116093 15.3585 0.19481 15.8042 0.433356 16.1579C0.91203 16.8675 1.74628 17.2512 2.59659 17.1528C3.02033 17.1038 3.40994 16.8735 3.79077 16.5958C4.17726 16.314 4.64742 15.911 5.23568 15.4068L5.25719 15.3884C5.83284 14.8949 5.99671 14.7682 6.15283 14.713C6.37738 14.6337 6.62235 14.6337 6.8469 14.713C7.00302 14.7682 7.16689 14.8949 7.74254 15.3884L7.76404 15.4068C8.3523 15.911 8.82246 16.314 9.20896 16.5958C9.58979 16.8735 9.9794 17.1038 10.4031 17.1528C11.2534 17.2512 12.0877 16.8675 12.5664 16.1579C12.8049 15.8042 12.8836 15.3586 12.9206 14.8887C12.9582 14.4119 12.9582 13.7926 12.9582 13.0179L12.9582 6.6985C12.9584 5.2766 12.9586 4.40892 12.7237 3.68599C12.2497 2.22722 11.106 1.08353 9.64724 0.609548C8.92431 0.374653 8.05663 0.37479 6.63473 0.375014H6.365ZM3.73876 1.79837C4.24852 1.63274 4.90015 1.62503 6.49987 1.62503C8.09958 1.62503 8.75121 1.63274 9.26097 1.79837C10.3392 2.1487 11.1845 2.99404 11.5349 4.07226C11.7005 4.58202 11.7082 5.23365 11.7082 6.83336V12.9895C11.7082 13.7991 11.7077 14.3688 11.6745 14.7905C11.6403 15.2251 11.5765 15.39 11.5301 15.4588C11.3125 15.7814 10.9333 15.9558 10.5468 15.9111C10.4644 15.9016 10.2976 15.8426 9.94541 15.5858C9.60355 15.3365 9.17071 14.9661 8.55603 14.4393L8.47335 14.3683C8.0216 13.9804 7.6693 13.6779 7.26335 13.5344C6.76933 13.3599 6.2304 13.3599 5.73638 13.5344C5.33043 13.6779 4.97813 13.9804 4.52638 14.3683L4.4437 14.4393C3.82902 14.9661 3.39618 15.3365 3.05432 15.5858C2.70211 15.8426 2.53537 15.9016 2.45292 15.9111C2.06642 15.9558 1.68721 15.7814 1.46963 15.4588C1.42322 15.39 1.35945 15.2251 1.32522 14.7905C1.292 14.3688 1.29153 13.7991 1.29153 12.9895V6.83336C1.29153 5.23365 1.29924 4.58202 1.46487 4.07226C1.81521 2.99404 2.66055 2.1487 3.73876 1.79837Z" fill="white"/>
                                                    </svg> </button>
                                    </div>
                                </div>
                            </div>
                            <div class="prompt-content promptcard " id='${data._id}'>
                                <h3>${data.title}</h3>
                               <div class="prompt--description">
                                    <p>${data.teaser}</p>
                               </div>
                            </div>
                            <div class="prompt-card-bottom">
                                <a href=""><img src="${uparrow}" class="colorized-image" alt="">${Math.ceil(data.likes)}</a>
                                <a href="">  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg> &nbsp ${data.views}</a>
                                <a href=""><img src="${comment}" class="colorized-image" alt=""/>${data.comments}</a>
                            </div>
                        </div>

                </div>`)


        }
      



    }






  });


  $(document).on("click", ".heart", function () {
    let id = $(this)[0].id;

    chrome.runtime.sendMessage({
      type: "checking_favourite_prompt_existence",
      uId: userId,
      pId: id,
    }, function (response) {
      if (Object.keys(response.data).length === 0) {
        chrome.runtime.sendMessage({
          type: "adding_favourite_prompt",
          uId: userId,
          pId: id,
        }, function (response) {
          window.location.reload();
          
        });

      }
      else {
        alert('This prompt already exists in your favourite list');
      }
    });



  });

  $(document).on("click", "#searchbtn", function () {
    let string = $('#searchbar').val();
    if (!string) return alert('Please provide with some searching string');

    $("#loading_gif_2").show()
    // $('#menu-tabs').eq(0).css('visibility','hidden');





    chrome.runtime.sendMessage({ type: "search_prompts", id: userId, string }, function (response) {

      global_api_response = response.data.public_prompts;
      user_prompts = response.data.user_prompts;
      $("#loading_gif_2").hide();



      if (btn_click == 'Public') {
        $('#publicbutton').click();
      }
      else if (btn_click == 'Private') {
        $('#ownbutton').click();
      }




    });




  });

  $(document).on('click', '.downvote', function () {
    $('.downvote').prop('disabled', true);
    alert('Thank you for your rating');
    let id = $(this)[0].id

    chrome.runtime.sendMessage({

      type: "downvoting",
      id: id
    }, function (response) {

    });

  })

  // $(document).on("click", ".personaldownvote", function () {


  //   let id = $(this)[0].id

  //   chrome.runtime.sendMessage({

  //     type: "downvoting",
  //     id: id
  //   }, function (response) {

  //     chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId }, function (response) {

  //       global_api_response = response.data.public_prompts;
  //       user_prompts = response.data.user_prompts;
  //       fetchPersonalPrompts();
  //     });

  //   });


  // });

  $(document).on('click', '.sidebar_top_links', function () {
    $('.sidebar_top_links').css('background-color', '');
    $('.sidebar_bottom_links').css('background-color', '');

    $(this).css('background-color', '#041c15');
  })

  $(document).on('click', '.sidebar_bottom_links', function () {
    $('.sidebar_bottom_links').css('background-color', '');
    $('.sidebar_top_links').css('background-color', '');
    $(this).css('background-color', '#474646');
  })






  $(document).on('click', '#go_back_to_screen_1', function () {
    $('#openPopUp').remove();
    $('body').append(popUp)
    $('#new_prompt_title').val(title);
    $('#new_prompt_teaser').val(teaser);

    if(count>=1){
      $('#new_prompt_teaser').val('');
      $('#new_prompt_teaser').prop('placeholder',teaser);
      
      $('#new_prompt_teaser').prop('disabled',true);
    }

    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#new_prompt_title').val(prompt_to_edit[0].title);
      $('#new_prompt_teaser').val(prompt_to_edit[0].teaser);
    }
  })

  $(document).on('click', '#go_back_to_screen_2', function () {
    $('#openPopUp').remove();
    $('body').append(popUp2);
    $('#new_prompt_template').val(template);
    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#new_prompt_template').val(prompt_to_edit[0].template);
    }

  })

  $(document).on('click', '#go_back_to_screen_3', function () {
    $('#openPopUp').remove();
    $('body').append(popUp3);
    $('#new_prompt_Hint').val(hint);


    if (count >= 1) {
      if (topic && subtopic) {
        let category = categories.filter((item) => item.name === topic);
        let subcategory = category[0].subcategories.filter((item) => item.name === subtopic);


        $('#select_topic').empty();
        $("#select_topic").append(`<option  value="${category[0].name}" > ${category[0].name} </option> `);

        $('#select_subtopic').empty();
        $("#select_subtopic").append(`<option  value="${subcategory[0].name}" > ${subcategory[0].name} </option> `);

        $('#select_topic').prop('disabled', true);
        $('#select_subtopic').prop('disabled', true);

      }
    }

    else {
      for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
        $("#select_topic").append(`<option  value="${data.name}" > ${data.name} </option> `);
       
      }
      $('#select_topic').val(topic);

      let subcats = categories.filter((item) => item.name === topic);

      for (let i = 0; i < subcats[0].subcategories.length; i++) {
        let data = subcats[0].subcategories[i];
        $('#select_subtopic').append(`<option value ='${data.name}' >  ${data.name} </option>`)

      }
      $('#select_subtopic').val(subtopic);
     

    }
      

    

    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#new_prompt_Hint').val(prompt_to_edit[0].hint);

      if (count >= 1) {
        if (topic && subtopic) {
          let category = categories.filter((item) => item.name === topic);
          let subcategory = category[0].subcategories.filter((item) => item.name === subtopic);


          $('#select_topic').empty();
          $("#select_topic").append(`<option  value="${category[0].name}" > ${category[0].name} </option> `);

          $('#select_subtopic').empty();
          $("#select_subtopic").append(`<option  value="${subcategory[0].name}" > ${subcategory[0].name} </option> `);

          $('#select_topic').prop('disabled', true);
          $('#select_subtopic').prop('disabled', true);
        }


      }


      else {
        $('#select_topic').val(prompt_to_edit[0].topic);
        topic = $('select_topic').val();
        //  $('#select_subtopic').val(prompt_to_edit[0].subtopic);
        $('#select_subtopic').empty();
        let subcats = categories.filter((item) => item.name === prompt_to_edit[0].topic);

        for (let i = 0; i < subcats[0].subcategories.length; i++) {
          let data = subcats[0].subcategories[i];
          $('#select_subtopic').append(`<option value ='${data.name}' >  ${data.name} </option>`)

        }
        $('#select_subtopic').val(prompt_to_edit[0].subtopic);
        subtopic = $('#select_subtopic').val();

      }




    }
    

  })


  $(document).on('click', '#go_back_to_screen_4', function () {
    $('#openPopUp').remove();
    $('body').append(popUp5);


    if (user === true) {
      $('#private_pay_button').prop('disabled', true);
      $('#private_pay_button').css('background-color', '#474646');
      $('#public_pay_button').css('background-color', '');
      $('#public_pay_button').prop('disabled', 'true');

    }
    if (user === false) {
      $('#private_pay_button').prop('disabled', true);
      $('#private_pay_button').css('background-color', '');
      $('#public_pay_button').css('background-color', '#474646');
      $('#public_pay_button').prop('disabled', 'true');
    }



    if (method) {
      if (method === 'Free') {
        $('#free_prompt_select').css('color', '#28a47a');
        $('#paid_prompt_select').css('color', '');

      }
      else {
        $('#paid_prompt_select').css('color', '#28a47a');
        $('#free_prompt_select').css('color', '');
      }
    }
    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      if (prompt_to_edit[0].price > 0) {
        $('')
        method = 'Paid'
        $('#paid_prompt_select').css('color', '#28a47a');

      }
      else {

      }
    }
  })

  $(document).on('click', '#go_back_to_screen_5', function () {
    $('#openPopUp').remove();
    $('body').append(popUp6);
    if (url) {
      $('#new_prompt_file_url').val(url);
    }
    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      if (prompt_to_edit[0].file_content) {
        $('#file_upload_button').attr('id', 'edit_file_content')
        $('#file_select_input').css('display', 'none');
        $('#edit_file_content').click(function () {
          $('#file_select_input').click();
        })

        if (prompt_to_edit[0].dataset_name) {
         
            $('#file_text_name').text(dataset_name)
          
    
          
         
        }
        else {
          $('#file_text_name').text('file_name.txt');
        }
      }
    }
    $('#new_prompt_CSV_div').empty();
    $('#new_prompt_CSV_div').append('<h4 style="color:#28a47a;margin-top:30px;text-align:center;width:100%"> Coming soon </h4>')


  })

  $(document).on('click','#btn_logout',function(){
    chrome.runtime.sendMessage({ type: 'logging_out', id:userId },function(response){
      window.location.reload();
    })
  })

  $(document).on('change', '#new_prompt_file_url', function () {
    url = $(this).val();
  })

  $(document).on("click", "#Category", function () {
    $(this).addClass("focussed");
  });

  $(document).on('click','#toggle_extension_state_inactive',function(){
   sessionStorage.setItem('isExtensionActive','true');
   isExtensionActive=true;
     extension_enabled();

  })

  $(document).on('click','#toggle_extension_state_active',function(){
    sessionStorage.setItem('isExtensionActive', 'false');
    isExtensionActive=false;
   extension_disabled();

  })

  $(document).on("click", "#connect", function () {
    chrome.runtime.sendMessage({ type: "inserting_user", username, email, image }, function (response) {
      if (response) {
        window.location.reload();
      }
    });
  });

  $("textarea").keydown(function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      submit1();
    }
  });

 
  $(document).on('click','#upload_user_profile_image',function(){
    $('#profile_image_select').click();
  })


  $(document).on('change','#profile_image_select',function(e){
var files=e.target.files[0];

if(files.type =='image/png' || files.type=='image/jpeg' ){
  var reader = new FileReader();
  
 reader.readAsDataURL(files);
  reader.onload = function (e) {
  
   
   
    user_photo=e.target.result
    $('#photo_placeholder').empty();
    $('#photo_placeholder').append(` <img src='${user_photo}' style="width:100%;height:100%;border-radius:50%" /> `)


  };

  


}

else{
alert('Image format is not supported');

}



  })

 

  $(document).on('mouseenter', '#next_page', function () {
    $(this).css('color', '#562c90');
  })

  $(document).on('mouseleave', '#next_page', function () {
    $(this).css('color', ' #28a47a');
  })

  $(document).on('mouseenter','#profile_icon',function(){
    $(this).css('cursor','pointer');
  })


  $(document).on('mouseenter', '#back_page', function () {
    $(this).css('color', '#562c90');
  })

  $(document).on('mouseleave', '#back_page', function () {
    $(this).css('color', ' #28a47a');
  })
  // $(document).on('mouseenter', '.hidediv', function () {
  //   $(this).css({
  //     'border': '4px solid #003627',
  //     'box-shadow': ''


  //   });

  //   $('.hidediv').css('background', '');
  //   $(this).css('background', 'rgba(0, 194, 140, 0.1)');

  //   if (prompt_selected.length>0) {
  //     $(`#${prompt_selected[0]._id}`).eq(0).closest('.hidediv').css('background', 'rgba(0, 194, 140, 0.1)')
  //   }



  //   let id = $(this)[0].id
  //   //  let prompt_hovered=global_api_response.filter((item)=> item._id === id );

  //   //  if(prompt_hovered.length===0){
  //   //   prompt_hovered=user_prompts.filter((item)=>item._id === id);
  //   //  }

  //   let prompt_hovered = all_prompts.filter((item) => item._id === id);

  //   //  if(prompt_hovered.length===0){
  //   //     prompt_hovered=extra_prompts.filter((item)=>item._id === id );
  //   //   }


  //   if (prompt_hovered[0].price > 0) {
  //     $(this).closest('.hidediv').find('.buybtn').css('visibility', 'visible');
  //     //  console.log(checking);

  //   }

  //   $(this).closest('.hidediv').find('.edit_prompt').css('visibility', 'visible');



  // })

  $(document).on('mouseenter', '#new_chat_div', function () {
    $(this).css('cursor', 'pointer');
  })

  // $(document).on('mouseleave', '.hidediv', function () {
  //   $(this).css({
  //     'border': '',
  //     'box-shadow': '1px 0px 3px 3px #28a47a77',
  //     "background": ""
  //   });

  //   if (prompt_selected.length>0) {
  //     $(`#${prompt_selected[0]._id}`).eq(0).closest('.hidediv').css('background', 'rgba(0, 194, 140, 0.1)')
  //   }

  //   let id = $(this)[0].id

  //   // let prompt_hovered=all_prompts.filter((item)=> item._id === id );

  //   let prompt_hovered = all_prompts.filter((item) => item._id === id);

  //   //  if(prompt_hovered.length===0){
  //   //   prompt_hovered=user_prompts.filter((item)=>item._id === id);
  //   //  }







  //   if (prompt_hovered[0].price > 0) {
  //     $(this).closest('.hidediv').find('.buybtn').css('visibility', 'hidden');


  //   }

  //   $(this).closest('.hidediv').find('.edit_prompt').css('visibility', 'hidden');


  // })

  //Updating View value of a prompt and appending prompt info in textarea
  $(document).on("click", ".promptcard", function () {
    load_count++;

  //  let isDisplay= $('form').parent().css('display');
  // if(isDisplay=='none'){
  //   $('form').parent().fadeToggle('1500ms');
  // }
   
    template = '';
    template_content='';
    csv_file_content='';
     all_template_content=[];

    child_prompt_1 = [];
    child_prompt_2 = [];
    chrome.runtime.sendMessage({ type: "increasing_views", id: $(this)[0].id }, function (response) {
      if (response) {

      }
    });

    // $('#hidediv').addClass('active');

    $('.hidediv').css('background', '');
    $(this).closest('.hidediv').css('background', 'rgba(0, 194, 140, 0.1)');


    $('textarea').prop('disabled',true);

if(load_count===1){
  if (prompt_to_load.length) {
    prompt_selected = prompt_to_load;
  }
  else{
    prompt_selected = all_prompts.filter(
      (item) => item._id === $(this)[0].id
    );
  }
  

}



else if(load_count>=2){
  prompt_selected = all_prompts.filter(
    (item) => item._id === $(this)[0].id
  );
}
    



    
    // if (prompt_selected.length === 0) {
    //   prompt_selected = user_prompts.filter(
    //     (item) => item._id === $(this)[0].id
    //   );
    // }
    if (prompt_selected[0].file_content !== '') {
      csv_file_content = prompt_selected[0].file_content;
    }

    
    console.log(prompt_selected);
    
    $("#loading_gif_2").show();
    // chrome.runtime.sendMessage({ type:'fetching_template_content',id:prompt_selected[0]._id},function(response){
     
    //  all_template_content=response.data.template;
     console.log(all_prompts);
      $("#loading_gif_2").hide();
      $('textarea').prop('disabled', false);
      let prompt_stacking_info = []
      if (prompt_selected[0].cID > 0) {

        prompt_stacking_info = ([...prompt_selected]);
        child_prompt_1 = all_prompts.filter((item) => item.pID == prompt_selected[0].cID);
        prompt_stacking_info = ([...prompt_selected, ...child_prompt_1])

        if (child_prompt_1.length) {

          if (child_prompt_1[0].cID > 0) {
            child_prompt_2 = all_prompts.filter((item) => item.pID === child_prompt_1[0].cID);
            prompt_stacking_info = ([...prompt_selected, ...child_prompt_1, ...child_prompt_2]);


          }



        }

      }

      console.log(child_prompt_1);
      console.log(child_prompt_2);



      if (prompt_stacking_info.length) {
        if ($(".prompt_stacking_div").length > 0) {
          $(".prompt_stacking_div").remove();
        }

        if ($("#authordiv").length > 0) {
          $("#authordiv").remove();
        }

        $("textarea").prop("placeholder", prompt_selected[0].hint);
        template_content = prompt_selected[0].template;
        $(".AIPRM__flex .AIPRM__w-full").prepend(`
                <div id="authordiv" class="prompt_stacking_div" style="display: flex;
              margin-bottom: 5px;
              padding-top: 30px;"" >
                
                </div>`);


        if ($('#user_image_div').length) {
          $('#user_image_div').remove();
        }

        $('#language-select-wrapper').append(`<div  id='user_image_div' style="position: absolute;
            top: 10px;
            left: 30px; display:flex;align-items:center" > 
            <p  style="color:white;font-size:12px;cursor:pointer"> &nbsp @  ${prompt_selected[0].user.username}  </p>
            
              
            </div>`)


        $('.prompt_stacking_div').append(` <div  id="prompt_stacking_div_1" style="height: 50px;
                         width: 180px;
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         position:relative;
                         background: #111e1a;
                         ">  
                         <div style=" position: absolute;
                                      
                                      right: 2%;
                                      height: 20px;
                                      width: 20px;
                                      border-radius: 50%;
                                      display: flex;
                                      align-items: center;
                                      background: #FF000D;" > <img style='height:10px;margin-left:5px;cursor:pointer' id='unselect_prompt' src='${cross}' class='filtered_black_color'  /> </div>
                          <p style="color:white;margin-left:10px"> ${prompt_selected[0].title.length >= 19 ? prompt_selected[0].title.substr(0, 19).concat('...') : prompt_selected[0].title}  </p> </div>
                         <div id='stacking_div_1'  style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      
                                      height: 2px;
                                      width: 30px;
                                      display: flex;
                                      align-items: center;
                                      margin-top: 25px;" >
                                     
                                      
                                      
                                      </div>

                          <div id='stacking_div_2' style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          margin-top: 22px;
                          border-radius: 3px;">
                          
                          
                          </div>



                         

                         `)

        if (child_prompt_1.length > 0) {
          if (child_prompt_2.length === 0) {

            $('.prompt_stacking_div').append(`
                         <div  id="prompt_stacking_div_2" style="height: 50px;
                         
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         
                         margin-left:10px">
                          <p style="color:white;margin-left:10px"> ${child_prompt_1[0].title.length >= 19 ? child_prompt_1[0].title.substr(0, 19).concat('...') : child_prompt_1[0].title}  </p> </div>
                         
                          

                          
                          
                          `)



          }
          else {

            $('.prompt_stacking_div').append(`
                         <div  id="prompt_stacking_div_2" style="height: 50px;
                         
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         
                         margin-left:10px">
                          <p style="color:white;margin-left:10px"> ${child_prompt_1[0].title.length >= 19 ? child_prompt_1[0].title.substr(0, 19).concat('...') : child_prompt_1[0].title}  </p> </div>
                         <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 2px;
                                      width: 30px;
                                      display: flex;
                                      align-items: center;
                                      margin-top: 25px;
                                      margin-left:5px" >  </div>

                                        <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          margin-top: 22px;
                          border-radius: 3px;">
                          
                          
                          </div>
                          

                          
                          
                          `)

            $('.prompt_stacking_div').append(`
                        
                          

                          <div  id="prompt_stacking_div_3" style="height: 50px;


                         display: flex;
                         align-items: center;
                         border-radius: 15px;

                         margin-left:10px">
                          <p style="color:white;margin-left:10px"> ${child_prompt_2[0].title.length >= 19 ? child_prompt_2[0].title.substr(0, 19).concat('...') : child_prompt_2[0].title}  </p> </div>
                         

                          
                          

                          
                          `)

          }



        }





        if (child_prompt_1.length === 0) {
          $('#stacking_div_1').remove();
          $('#stacking_div_2').remove();
        }












      }


      else {

        $("textarea").prop("placeholder", prompt_selected[0].hint);
        template_content = prompt_selected[0].template;
        if ($("#authordiv").length > 0) {
          $("#authordiv").remove();
        }
        if ($(".prompt_stacking_div").length > 0) {
          $(".prompt_stacking_div").remove();
        }

        $(".AIPRM__flex .AIPRM__w-full").prepend(`
                <div id="authordiv" class="prompt_stacking_div" style="display: flex;
              margin-bottom: 5px;
              padding-top: 30px;" >
                
                </div>`);
        if ($('#user_image_div').length) {
          $('#user_image_div').remove();
        }

        $('#language-select-wrapper').append(`<div id='user_image_div' style="position: absolute;
            top: 10px;
            left: 30px; display:flex;align-items:center" > 
            <p  style="color:white;font-size:12px;cursor:pointer"> &nbsp @  ${prompt_selected[0].user.username}  </p>
         
            </div>`)

        $('.prompt_stacking_div').append(`<div  id="prompt_stacking_div_1" style="height: 50px;
                         width: 180px;
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         margin-bottom:5px;
                         background: #111e1a;
                         position:relative;
                         ">  
                          <div style=" position: absolute;
                                      
                                      right: 2%;
                                      height: 20px;
                                      width: 20px;
                                      border-radius: 50%;
                                      display: flex;
                                      align-items: center;
                                      background: #FF000D;" > <img style='height:10px;margin-left:5px;cursor:pointer' id='unselect_prompt' src='${cross}' class='filtered_black_color'  /> </div>
                          <p style="color:white;margin-left:10px"> ${prompt_selected[0].title.length >= 19 ? prompt_selected[0].title.substr(0, 19).concat('...') : prompt_selected[0].title}  </p> </div>
                         `)
      }



    // })
    



    



  });

  $(document).on('click','#delete_child_prompt',function(){

    $("#loading_gif").show()
    chrome.runtime.sendMessage({ type: "delete_prompt", id: child_prompt_to_delete[0]._id }, function (response) {

      $("#loading_gif").hide()
      alert('Prompt Successfully deleted');
      window.location.reload();

    });

  })

  $(document).on('click','#delete_prompt',function(){
    
    $("#loading_gif").show()
      chrome.runtime.sendMessage({ type: "delete_prompt", id:prompt_to_edit[0]._id }, function (response) {
        
        $("#loading_gif").hide()
        alert('Prompt Successfully deleted');
        window.location.reload();
        
      });
    
  })


  $(document).on('change', '#writingStyleSelect', function () {
    let check_gpt_mode = $("#writingStyleSelect").find(":selected").val();
    if (check_gpt_mode == 'GPT3') {
      document.querySelectorAll(gpt_mode_selector)[0].click();
      gpt_mode='GPT3';
      $('#switchMonthly').click();
    
      // $('#gpt_3').css('background','#00C28C');
      // $('#gpt_4').css('background','black');
    }
    else if (check_gpt_mode == 'GPT4') {
      document.querySelectorAll(gpt_mode_selector)[1].click()
      gpt_mode='GPT4'
      $('#switchYearly').click();
      // $('#gpt_3').css('background', 'black');
      // $('#gpt_4').css('background', '#00C28C');
      setTimeout(() => {
        $('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).css('display', 'none');
      }, 500)


    }

  })




  $(document).on("click", "#ownbutton", fetchPersonalPrompts);
  // Public prompts being appended
  $(document).on("click", "#publicbutton", render_public_prompts);
  $(document).on("click", "#mybutton", submit1);




  $(document).on('click', '#file_upload_button', function () {
    // alert('asdf');
    // $('#file_select_input').click();
  });


  $(document).on("change", "#file_select_input", function (evt) {
    var files = evt.target.files;
    dataset_name = files[0].name;

    // Check if file is CSV
    if (files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function () {
        file_content = reader.result;
      };

      if (prompt_to_edit.length) {
        $('#file_text_name').text(dataset_name)
      }

    }

    else if (files[0].type === "text/csv"
      || files[0].type === "application/msword"
      || files[0].type === "text/plain") {
      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function () {
        file_content = reader.result;
      };
      if (prompt_to_edit.length) {
        $('#file_text_name').text(dataset_name)
      }
    }
    else {
      alert("Please select a CSV file.");
      $("#file").val(null);
      return;
    }



    // Read CSV file

  });




  $(document).on("change", "#new_prompt_template", function () {

    template = $(this).val();

  });

  // $(document).on("change", "#teaser", function () 
  // {
  //   teaser = $(this).val();
  // });

  $(document).on('keyup', '#new_prompt_teaser', function (e) {
    
    teaser = $(this).val();

    max_char_teaser=250- teaser.length;
    $('#max_char_teaser_length').text(`${max_char_teaser} characters `);

    
  })
   


 


  $(document).on("keyup", "#new_prompt_title", function (e) {

    title = $(this).val();
    max_char_title = 150- title.length;
    $('#max_title_char_length').text(`${max_char_title} characters `);

    
  });

  $(document).on("change", "#new_prompt_author", function () {
    author = $(this).val();
  });

  $(document).on("change", "#new_prompt_url", function () {
    url = $(this).val();
  });

  $(document).on("change", "#new_prompt_Hint", function () {
    hint = $(this).val();
  });

  $(document).on("change", "#check_box", function () {
    public = !public;
    user = !user;
  });

  $(document).on('click','#Purchase',function(){
    if ($(".main_public_prompt_div").length > 0) {
      $(".main_public_prompt_div").remove();
    }
    if ($(".main_personal_prompt_div").length > 0) {
      $(".main_personal_prompt_div").remove();
    }

    if ($(".favourite_public_prompt_div").length > 0) {
      $(".favourite_public_prompt_div").remove();
    }
    if ($('#Pagination_div').length) {
      $('#Pagination_div').remove();
    }
    if ($('#purchase_div').length) {
      $('#purchase_div').remove();
    }

    $('#main_div').append(`<div id='purchase_div'  > <h1 style="color:#00c08b" > Coming soon...   </div>`)
     

  })
  

  $(document).on('click','#save_username',function(){
    $('#loading_gif_for_create_username').show()
    let new_username = $('#username').val();
    let password = $('#password').val();
    if(!new_username || !password ){
      alert('Please Enter username');
      $('#loading_gif_for_create_username').hide();
    }
    else{
      chrome.runtime.sendMessage({ type: 'inserting_username', email: email, new_username, user_photo,password }, function (response) {
        console.log(response);
        if (response.data.message == 'Username is already taken') {

          alert('Username is alreay taken please try a different one')
          return $('#loading_gif_for_create_username').hide()
        }
        chrome.runtime.sendMessage({ type: 'logging_in', email: email }, function (response) {
          window.location.reload();


        })

      })
    }
 
  

  })

  $(document).on('click','#logging_in_first_time',function(){
    blur_background();
    $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;" > ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                    ">
            <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            padding-right: 4.25%;
            cursor:pointer"  alt='cross_btn'  />  </div>
            <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}'  alt='prompt_ai_logo' /> </div>
            <div  style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
            <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>
            
            <div id= 'log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" > 
              <div style="display:flex;padding-left:5%" > <img src="${profile_image}"  />  
              <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
              </div>
            </div>


            <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>  
            <h4 style="color:#00C28C"> Sign up </h4>
            </div>


            </div>
            
            </div>
           `)


  })


  $(document).on('click','#continue_to_create_username',function(){
    $('#main_pop_up').remove();
    $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;" > ${feature_popup}
             
             <div id='create_username_div'style="width: 493px;
                                                    height: 464px;
                                                    background: black;">


                  <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
                                                                                                    cursor:pointer;
                                                                                                    padding-right: 4.25%;"  alt='cross_btn' />  
                      </div> 

                      <div id='profile_pic_div' style="display: flex;
                                                      align-items: center;
                                                      width: 100%;
                                                      height: 20%;
                                                      margin-top: 5%;
                                                      justify-content: center;" > 
                       <img  src='${user_photo}' alt='image_to_be_displayed' style="width: 111px;
                                                                                    height: 110px;
                                                                                    border-radius: 50%;
                                                                                    margin-right: 27%;"  />
                      </div>


                      <div style="display: flex;
                                  justify-content: center;
                                  margin-top: 7%;
                                  margin-right: 27%;" >
                       <h4 style="color:white" > Create a username </h4>
                      </div>

                  
                      <div style="width: 100%;
                                  display: flex;
                                  align-items: center;
                                  margin-top: 3%;
                                  padding-inline: 4%;" >  
                      
                                        <input id='username' placeholder='@username' type='text' style="width: 329px;
                                                                                          padding-inline: 2%;
                                                                                          outline: none;
                                                                                          box-shadow: none;
                                                                                          border-radius: 11px;
                                                                                          background: #050A08;
                                                                                          height: 39px;
                                                                                          color:white"   />

                      </div>



                        <div style="display: flex;
                                  justify-content: center;
                                  margin-top: 7%;
                                  margin-right: 27%;" >
                       <h4 style="color:white" > Create a password </h4>
                      </div>

                  
                      <div style="width: 100%;
                                  display: flex;
                                  align-items: center;
                                  margin-top: 3%;
                                  padding-inline: 4%;" >  
                      
                                        <input id='password' placeholder='@password' type='password' style="width: 329px;
                                                                                          padding-inline: 2%;
                                                                                          outline: none;
                                                                                          box-shadow: none;
                                                                                          border-radius: 11px;
                                                                                          background: #050A08;
                                                                                          height: 39px;
                                                                                          color:white"   />

                      </div>



                        <div style="height:40%;width:100%;margin-top:11%;display:flex;justify-content:center">
             <button  id='save_username' style="height:48px;width:97px;border-radius:20px;background:#00C28C;color:white;margin-right:13%"> Continue   </button>
            </div>
              
            <div id="loading_gif_for_create_username" style="display:none; z-index: 10000000">
                <img style="height: 60px;
                            position: fixed;
                            top: 45%;
                            left: 47%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>
            </div>






            </div>
            
           `)
    
  })


  $(document).on("click", "#crossbtn", function () {
    $('#upper_side_menu_content').removeClass('blur-effect');
    $(blur_selector).removeClass("blur-effect");
    $("nav").removeClass("blur-effect");
    $('#main_screen_div').removeClass('blur-effect');
    $('#navbar_items').removeClass('blur-effect');
    clearInputs();
    prompt_to_edit = [];
    $('form').parent().removeClass('blur-effect');
    count = 0;
    $("#openPopUp").remove();
    
    if(btn_click =='Public'){
      $('#publicbutton').click();

    }
    else if(btn_click=='Private'){
      $('#ownbutton').click();

    }
    else if(btn_click=='Favourite'){
      $('#Favourite').click();
    }

    $('#promptbtn').prop('disabled', false);

    $("textarea").show();
  });

  $(document).on('click', '#public_btn', function () {
    $("#public_btn").css("background", "#474646");
    $("#private_btn").css("background", "black");
    user = false;
  })

  $(document).on('click','#appended_category_items',function(){
    $(this).remove();
    $('#category_elements_list').append(`<li>  ${$(this).text()} </li>`)
  })

  $(document).on('blur', '#category_elements_dropdown', function () {
    $('#category_elements_dropdown').hide();
  })

  $(document).on('click','.hover_category_items',function(){
    $('#placeholder_text').remove();
    let text=$(this).text();
    $(this).hide();
    $('#select_topic').append(`<div id='appended_category_items' style="background: #00C28C;
                                      color: #fff;
                                      padding: 4px 8px;
                                      line-height: 17px;
                                      margin: 5px;
                                      display: inline-block;
                                      font-size: 13px;
                                      border-radius: 30px;
                                      cursor: pointer;
                                      position:relative;
                                      display:flex;
                                      font-weight: 500"> ${text}  <div  style="color: #fff;
                                                                      position: relative;
                                                                      font-size: 11px;
                                                                      font-weight: 500;
                                                                      top: 0px;
                                                                      right: -2px;
                                                                      margin-top: -2px;" > x </div>   </div>`);
  })

  $(document).on('click', '#private_btn', function () {
    $("#private_btn").css("background", "#474646");
    user = true;
    $('#public_btn').css("background", "black");
  })

  $(document).on('click','#gpt_3_button',function(){
    document.querySelectorAll(gpt_mode_selector)[0].click();
    gpt_mode='GPT3'
  })

  $(document).on('click', '#gpt_4_button', function () {
    document.querySelectorAll(gpt_mode_selector)[1].click();
    gpt_mode = 'GPT4'
  })
  $(document).on("click", "#continue_to_prompt_screen_2", function () {


    $('#openPopUp').remove();
    $('body').append(popUp2);
    if (template) {
      $('#new_prompt_template').val(template);
    }

    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#new_prompt_template').val(prompt_to_edit[0].template);
      template = prompt_to_edit[0].template;

    }




  });



  $(document).on('click', '#continue_to_prompt_screen_3', function () {




    $('#openPopUp').remove();
    $('body').append(popUp3)
    if (hint) {
      $('#new_prompt_Hint').val(hint);
    }

    if (topic && subtopic && prompt_to_edit.length == 0) {
      let category = categories.filter((item) => item.name === topic);
      let subcategory = category[0].subcategories.filter((item) => item.name === subtopic);


      $('#select_topic').empty();
      $("#select_topic").append(`<option  value="${category[0].name}" > ${category[0].name} </option> `);

      $('#select_subtopic').empty();
      $("#select_subtopic").append(`<option  value="${subcategory[0].name}" > ${subcategory[0].name} </option> `);

      $('#select_topic').prop('disabled', true);
      $('#select_subtopic').prop('disabled', true);

    }


    else {
      $('#select_topic').prop('disabled', false);
      $('#select_subtopic').prop('disabled', false);
      
      // for (let i = 0; i < categories.length; i++) {
      //   let data = categories[i];
      //   $("#select_topic").append(`<option  value="${data.name}" > ${data.name} </option> `);
      // }
        
    //   $('#new_prompt_category_div').append(`<div id='category_elements_dropdown' tabindex='2' style="    width: 100%;
    //                                                                                         background: black;
    //                                                                                         position: absolute;
    //                                                                                         z-index:100000000000000;
    //                                                                                         top: 69px;
    //                                                                                         display:none;" >  
    // <ul style='background:  rgba(0, 194, 140, 0.3);
    //                         border-radius: 9px;
    //                         padding-left: 2%;' id='category_elements_list'>    </ul>
    // </div>
    
    // `)

      //   for (let i = 0; i < categories.length; i++) {
      //   let data = categories[i];
      //     $("#category_elements_list").append(`<li class='hover_category_items'  value="${data.name}" > ${data.name} </li> `);
      // }

         for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
          $("#select_topic").append(`<option    value="${data.name}" > ${data.name} </option> `);
      }
      




    }


    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#new_prompt_Hint').val(prompt_to_edit[0].hint);
      hint = prompt_to_edit[0].hint;
      if (topic && subtopic) {
        if (count >= 1) {
          let category = categories.filter((item) => item.name === topic);
          let subcategory = category[0].subcategories.filter((item) => item.name === subtopic);


          $('#select_topic').empty();
          $("#select_topic").append(`<option  value="${category[0].name}" > ${category[0].name} </option> `);

          $('#select_subtopic').empty();
          $("#select_subtopic").append(`<option  value="${subcategory[0].name}" > ${subcategory[0].name} </option> `);

          $('#select_topic').prop('disabled', true);
          $('#select_subtopic').prop('disabled', true);
        }


      }
      else {

        $('#select_topic').val(prompt_to_edit[0].topic);
        topic = prompt_to_edit[0].topic;

        //  $('#select_subtopic').val(prompt_to_edit[0].subtopic);
        $('#select_subtopic').empty();
        let subcats = categories.filter((item) => item.name === prompt_to_edit[0].topic);

        for (let i = 0; i < subcats[0].subcategories.length; i++) {
          let data = subcats[0].subcategories[i];
          $('#select_subtopic').append(`<option value ='${data.name}' >  ${data.name} </option>`)

        }
        $('#select_subtopic').val(prompt_to_edit[0].subtopic);
        subtopic = prompt_to_edit[0].subtopic;

      }


    }


  })

  $(document).on('click','#search_icon',function(){
  showSearchBar=!showSearchBar;
  if(showSearchBar===true){
    $('#searchbar').addClass('active_searchbar');
    $('.switches-container').hide();
  }
  else{
    $('#searchbar').removeClass('active_searchbar');
    $('.switches-container').show();
  }
    // $('.switches-container').fadeToggle('slow');
    // $('#searchbar').fadeToggle('slow');
    // $('#search_button').fadeToggle('slow');
  })

  $(document).on('change', '#select_topic', function (e) {
   
    $('#select_topic').append($(this).val());
    
    topic = $("#select_topic").find(":selected").val();
    console.log(topic);
    if (topic !== 'null') {
      let category_selected = categories.filter((item) => item.name === topic)
      if (category_selected.length) {
        if ($('#select_subtopic').length) {
          $('#select_subtopic').empty();

        }
        for (let i = 0; i < category_selected[0].subcategories.length; i++) {
          let data = category_selected[0].subcategories[i];

          $("#select_subtopic").append(`<option   value="${data.name}" > ${data.name} </option> `);
        }
      }


    }
    
    else if(topic=='none'){
      $('#select_subtopic').empty();
      // $('#select_subtopic').append(`<option value='none' > Select </option>`)
    }

  })



  $(document).on('click', '#continue_to_prompt_screen_4', function () {
   
    // if (!hint || !topic || !subtopic) {
    //   alert('Please Enter the data in appropriate places');

    // }





    $('#openPopUp').remove();
    $('body').append(popUp5);
    if (user === true) {
      $('#private_pay_button').prop('disabled', true);
      $('#private_pay_button').css('background-color', '#474646');
      $('#public_pay_button').css('background-color', '');
      $('#public_pay_button').prop('disabled', 'true');

    }
    if (user === false) {
      $('#private_pay_button').prop('disabled', true);
      $('#private_pay_button').css('background-color', '');
      $('#public_pay_button').css('background-color', '#474646');
      $('#public_pay_button').prop('disabled', 'true');
    }
    if (method) {
      if (method === 'Free') {
        $('#free_prompt_select').css('color', '#28a47a');
        $('#paid_prompt_select').css('color', '');

      }
      else {
        $('#paid_prompt_select').css('color', '#28a47a');
        $('#free_prompt_select').css('color', '');
      }
    }




    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#private_pay_button').css('background-color', '');
      $('#public_pay_button').css('background-color', '');
      if (prompt_to_edit[0].price > 0) {
        method = 'Paid'
        $('#free_prompt_select').css('color', '');
        $('#paid_prompt_select').css('color', '#28a47a');

      }
      else {
        method = 'Free';
        $('#free_prompt_select').css('color', '#28a47a');
        $('#paid_prompt_select').css('color', '');
      }
    }

  })

 

  $(document).on('click', '#continue_to_prompt_screen_5', function () {
  
    $('#openPopUp').remove();
    $('body').append(popUp6);
    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');


    }


  })

  $(document).on('click', '#free_prompt_select', function () {
    method = 'Free';
    $('#free_prompt_select').css('color', '#28a47a');
    $('#paid_prompt_select').css('color', '');
  })

  $(document).on('click', '#paid_prompt_select', function () {
    method = 'Paid';
    $('#paid_prompt_select').css('color', '#28a47a');
    $('#free_prompt_select').css('color', '');
  })

  $(document).on('click', '#continue_to_prompt_screen_6', function () {

    

    topic = $("#select_topic").find(":selected").val();
    subtopic = $("#select_subtopic").find(":selected").val();
    
      $('#openPopUp').remove();
      $('body').append(popUp6)
      if (url) {
        $('#new_prompt_file_url').val(url);
      }
      if(prompt_to_edit.length){
        $('#title_heading >h5').text('Edit your prompt');
        if (prompt_to_edit[0].file_content) {

          $('#file_select_input').css('display', 'none');
          $('#new_prompt_CSV_div').append(`<button id='edit_file_content' style="margin-left: 30px;
          border: 1px solid white;
          border-radius: 9px;
          width: 30%;
          background: #28a47a;" > Choose file  </button>`)
          $('#edit_file_content').click(function () {
            $('#file_select_input').click();
          })

          file_content = prompt_to_edit[0].file_content;
          dataset_name = prompt_to_edit[0].dataset_name;
          if (prompt_to_edit[0].dataset_name) {
            $('#file_text_name').text(dataset_name);

          }
          else {
            $('#file_text_name').text('file_name.txt');
          }
         
        }


          
       


        
      }
      
            
    $('#new_prompt_CSV_div').empty();
    $('#new_prompt_CSV_div').append('<h4 style="color:#28a47a;margin-top:30px;text-align:center;width:100%"> Coming soon </h4>')




  })

 

  const fetchExtraPublicPrompts = () => {


     extra_parent_prompts= extra_prompts.filter((item) => (item.cID && !item.pID) || (!item.cID && !item.pID));


    for (let i = 0; i < extra_parent_prompts.length; i++) {
      let data = extra_parent_prompts[i];


      $("#main_div").append(`<div class='col-xxl-3 col-xl-4 col-lg-4 col-md-6 main_public_prompt_div'>

              <div class="prompt-card hidediv" id='${data._id}' >
                            <div class="prompt-top">
                                <div class="prompt-user">
                                    <a href="#">
                                        <img src="${data.user.image}" alt="">
                                        <div class="prompt-user-text">
                                            <a href='#'>@${data.user.username}</a>
                                    
                                        </div>
                                    </a>
                                </div>
                                <div class="card-top-right">
                                    <div class="save_toggle">
                                        <button style="display:flex;align-items:center;justify-content:center"  id='${data._id}' class=${userInfo.favourite_prompts.includes(data._id) ? 'save_btn_active heart' : ' save_btn heart'  } ><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.365 0.375014C4.9431 0.37479 4.07542 0.374653 3.35249 0.609548C1.89373 1.08353 0.750034 2.22722 0.276052 3.68599C0.0411572 4.40892 0.0412937 5.2766 0.0415175 6.6985L0.0415314 13.0178C0.0415259 13.7926 0.0415214 14.4118 0.0790819 14.8887C0.116093 15.3585 0.19481 15.8042 0.433356 16.1579C0.91203 16.8675 1.74628 17.2512 2.59659 17.1528C3.02033 17.1038 3.40994 16.8735 3.79077 16.5958C4.17726 16.314 4.64742 15.911 5.23568 15.4068L5.25719 15.3884C5.83284 14.8949 5.99671 14.7682 6.15283 14.713C6.37738 14.6337 6.62235 14.6337 6.8469 14.713C7.00302 14.7682 7.16689 14.8949 7.74254 15.3884L7.76404 15.4068C8.3523 15.911 8.82246 16.314 9.20896 16.5958C9.58979 16.8735 9.9794 17.1038 10.4031 17.1528C11.2534 17.2512 12.0877 16.8675 12.5664 16.1579C12.8049 15.8042 12.8836 15.3586 12.9206 14.8887C12.9582 14.4119 12.9582 13.7926 12.9582 13.0179L12.9582 6.6985C12.9584 5.2766 12.9586 4.40892 12.7237 3.68599C12.2497 2.22722 11.106 1.08353 9.64724 0.609548C8.92431 0.374653 8.05663 0.37479 6.63473 0.375014H6.365ZM3.73876 1.79837C4.24852 1.63274 4.90015 1.62503 6.49987 1.62503C8.09958 1.62503 8.75121 1.63274 9.26097 1.79837C10.3392 2.1487 11.1845 2.99404 11.5349 4.07226C11.7005 4.58202 11.7082 5.23365 11.7082 6.83336V12.9895C11.7082 13.7991 11.7077 14.3688 11.6745 14.7905C11.6403 15.2251 11.5765 15.39 11.5301 15.4588C11.3125 15.7814 10.9333 15.9558 10.5468 15.9111C10.4644 15.9016 10.2976 15.8426 9.94541 15.5858C9.60355 15.3365 9.17071 14.9661 8.55603 14.4393L8.47335 14.3683C8.0216 13.9804 7.6693 13.6779 7.26335 13.5344C6.76933 13.3599 6.2304 13.3599 5.73638 13.5344C5.33043 13.6779 4.97813 13.9804 4.52638 14.3683L4.4437 14.4393C3.82902 14.9661 3.39618 15.3365 3.05432 15.5858C2.70211 15.8426 2.53537 15.9016 2.45292 15.9111C2.06642 15.9558 1.68721 15.7814 1.46963 15.4588C1.42322 15.39 1.35945 15.2251 1.32522 14.7905C1.292 14.3688 1.29153 13.7991 1.29153 12.9895V6.83336C1.29153 5.23365 1.29924 4.58202 1.46487 4.07226C1.81521 2.99404 2.66055 2.1487 3.73876 1.79837Z" fill="white"/>
                                          </svg> </button>
                                    </div>
                                </div>
                            </div>
                            <div class="prompt-content promptcard " id='${data._id}'>
                                <h3>${data.title}</h3>
                               <div class="prompt--description">
                                    <p>${data.teaser}</p>
                               </div>
                            </div>
                            <div class="prompt-card-bottom">
                                <a href=""><img src="${uparrow}"  class="colorized-image" alt="">${Math.ceil(data.likes)}</a>
                                <a href="">  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg> &nbsp ${data.views}</a>
                                <a href=""><img src="${comment}" class="colorized-image" alt=""/>${data.comments}</a>
                            </div>
                        </div>

                </div>`)








    }


  }

  const fetchExtraPrivatePrompts=()=>{

    
    extra_prompts_for_private_parent= extra_prompts_for_private.filter((item) => (item.cID && !item.pID) || (!item.cID && !item.pID))

    for (let i = 0; i < extra_prompts_for_private_parent.length; i++) {
      let data = extra_prompts_for_private_parent[i];


      $("#main_div").append(`<div class='col-xxl-3 col-xl-4 col-lg-4 col-md-6 main_personal_prompt_div'   >

              <div class="prompt-card hidediv" id='${data._id}' >
                            <div class="prompt-top">
                                <div class="prompt-user">
                                    <a href="#">
                                        <img src="${data.user.image}" alt="">
                                        <div class="prompt-user-text">
                                            <a href='#'>@${data.user.username}</a>
                                    
                                        </div>
                                    </a>
                                </div>
                                <div class="card-top-right">
                                    <div class="save_toggle">
                                              <button  style="display:flex;align-items:center;justify-content:center" id='${data._id}' class=${userInfo.favourite_prompts.includes(data._id) ? 'save_btn_active heart' : ' save_btn heart'  } ><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.365 0.375014C4.9431 0.37479 4.07542 0.374653 3.35249 0.609548C1.89373 1.08353 0.750034 2.22722 0.276052 3.68599C0.0411572 4.40892 0.0412937 5.2766 0.0415175 6.6985L0.0415314 13.0178C0.0415259 13.7926 0.0415214 14.4118 0.0790819 14.8887C0.116093 15.3585 0.19481 15.8042 0.433356 16.1579C0.91203 16.8675 1.74628 17.2512 2.59659 17.1528C3.02033 17.1038 3.40994 16.8735 3.79077 16.5958C4.17726 16.314 4.64742 15.911 5.23568 15.4068L5.25719 15.3884C5.83284 14.8949 5.99671 14.7682 6.15283 14.713C6.37738 14.6337 6.62235 14.6337 6.8469 14.713C7.00302 14.7682 7.16689 14.8949 7.74254 15.3884L7.76404 15.4068C8.3523 15.911 8.82246 16.314 9.20896 16.5958C9.58979 16.8735 9.9794 17.1038 10.4031 17.1528C11.2534 17.2512 12.0877 16.8675 12.5664 16.1579C12.8049 15.8042 12.8836 15.3586 12.9206 14.8887C12.9582 14.4119 12.9582 13.7926 12.9582 13.0179L12.9582 6.6985C12.9584 5.2766 12.9586 4.40892 12.7237 3.68599C12.2497 2.22722 11.106 1.08353 9.64724 0.609548C8.92431 0.374653 8.05663 0.37479 6.63473 0.375014H6.365ZM3.73876 1.79837C4.24852 1.63274 4.90015 1.62503 6.49987 1.62503C8.09958 1.62503 8.75121 1.63274 9.26097 1.79837C10.3392 2.1487 11.1845 2.99404 11.5349 4.07226C11.7005 4.58202 11.7082 5.23365 11.7082 6.83336V12.9895C11.7082 13.7991 11.7077 14.3688 11.6745 14.7905C11.6403 15.2251 11.5765 15.39 11.5301 15.4588C11.3125 15.7814 10.9333 15.9558 10.5468 15.9111C10.4644 15.9016 10.2976 15.8426 9.94541 15.5858C9.60355 15.3365 9.17071 14.9661 8.55603 14.4393L8.47335 14.3683C8.0216 13.9804 7.6693 13.6779 7.26335 13.5344C6.76933 13.3599 6.2304 13.3599 5.73638 13.5344C5.33043 13.6779 4.97813 13.9804 4.52638 14.3683L4.4437 14.4393C3.82902 14.9661 3.39618 15.3365 3.05432 15.5858C2.70211 15.8426 2.53537 15.9016 2.45292 15.9111C2.06642 15.9558 1.68721 15.7814 1.46963 15.4588C1.42322 15.39 1.35945 15.2251 1.32522 14.7905C1.292 14.3688 1.29153 13.7991 1.29153 12.9895V6.83336C1.29153 5.23365 1.29924 4.58202 1.46487 4.07226C1.81521 2.99404 2.66055 2.1487 3.73876 1.79837Z" fill="white"/>
                                  </svg> </button>
                                    </div>
                                </div>
                            </div>
                            <div class="prompt-content promptcard " id='${data._id}'>
                                <h3>${data.title}</h3>
                               <div class="prompt--description">
                                    <p>${data.teaser}</p>
                               </div>
                            </div>
                            <div class="prompt-card-bottom">
                                <a href=""><img src="${uparrow}" class="colorized-image" alt="">${Math.ceil(data.likes)}</a>
                                <a href="">  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg> &nbsp ${data.views}</a>
                                <a href=""><img src="${comment}" class="colorized-image" alt="">${data.comments}</a>
                            </div>
                        </div>

                </div>`)








    }
    
  }



  $(document).on('click','#sign_in',function(){
    chrome.runtime.sendMessage({type:'logging_in', email:email },function(response){
  window.location.reload();

})
  })


  $(document).on('click','#log_in',function(){
// chrome.runtime.sendMessage({type:'logging_in', email:email },function(response){
//   window.location.reload();

// })

    $('#main_pop_up').remove();
    $('#connect_with_openai_div').remove();
    $('#feature_div').remove();
     $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        transition:5s;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;" > ${feature_popup}
             
             <div id='user_image_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                    ">

                  <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
                                                                                                    cursor:pointer;
                                                                                                    padding-right: 4.25%;"  alt='cross_btn' />  
                      </div>   
                      
                      <div style="height: 40%;
                                  width: 100%;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  margin-top: 0%;" >  
                       <div id='photo_placeholder' style="display: flex;
                                  align-items: center;
                                  justify-content: center;
                                  height: 129.27px;
                                  width: 129.27px;
                                  border-radius: 50%;
                                  margin-right: 17%;
                                  background:#1e2221 ;
                                  "> 
                               
                                  <img  src='${default_photo}' alt='default_image'  />

                                  
                                  </div>
                      </div>

                <div style="display: flex;
                            justify-content: center;
                            margin-top: -4%;
                            margin-right: 14%;
                        " > <h5 id='upload_user_profile_image' style="color:#00C28C;text-decoration:underline;cursor:pointer" > Upload Photo </h5>  </div>
                    <input style="display:none" type="file" id='profile_image_select'  />
                 <div style="height:40%;width:100%;margin-top:29%;display:flex;justify-content:center">
             <button id='continue_to_create_username' style="height:48px;width:97px;border-radius:20px;background:#00C28C;color:white;margin-right:13%"> Continue   </button>
            </div>
            
            



            </div>


           
            
            </div>
           `)
           if(user_photo){
            $('#photo_placeholder').empty();
             $('#photo_placeholder').append(` <img src='${user_photo}' style="width:100%;height:100%;border-radius:50%" /> `)
           }


  })


  $(document).on('click', '#new_topic_suggestion', function () {
    $('#openPopUp').remove();
    $('body').append(suggestionPopUp);
  })

  const disableTopicSelection = () => {
    $('#select_topic').prop('disabled', true);
    $('#select_subtopic').prop('disabled', true);

  }

  $(document).on('click', '#continue_to_prompt_screen_8', function () {
    create_a_prompt();
  })

  $(document).on('click', '#btn_stack_prompt', function () {
    $("#sequentialCheck_box").prop("checked", true);
    isSequential = !isSequential;
    $("#continue_to_prompt_screen_8").click()

  })
  $(document).on('click', '#continue_to_prompt_screen_7', function () {

    $('#openPopUp').remove();

    $('body').append(popUp7);
    // console.log(child_prompts_information);

    $('#new_prompt_author').val(author);
    $('#description')[0].innerHTML = teaser;
    $('#category')[0].innerHTML = topic + '.' + subtopic;
    // console.log(teaser);

    $('#btn_stack_prompt').before(`<div id='prompt_details' style="width: 300px;
        min-height: 107px;
        border-radius: 15px;
        border: 1px solid #0c1f1a;
        margin-left: 40px;
        background-color: #0c1f1a;">
        <div id='package_plan'  style="display:flex;justify-content:space-between"> 
        <div style="margin-left: 20px;
                    margin-top: 10px;
                    height: 30px;
                    width: 100px;
                    display: flex;
                    align-items: center;
                    border-radius: 15px;
                    display:flex;
                    "> 
               
                     <img style="border-radius:50%" height='20px' width='30px' src=${userInfo.image ? userInfo.image : image} />
                     <p style="color:rgb(0, 194, 140);font-weight:500;font-size:14px;margin-left:10%"> ${userInfo.username} </p>

             </div> 
         <div id='clear_prompt_div' style="height: 30px;
                     margin-top:10px;
                     border-radius: 100%;
                     border: 1px solid black;
                     background-color: black;
                     width: 30px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     margin-inline: 15px;"> 
                     <button type="button"> <img id='clear_prompt' src="${white_trash_bin}" alt="vCiKz.png" border="0" /> </button>  </div>
                     </div>
      

      
       
        
        `)
    console.log(child_prompts_information);

        if(child_prompts_information.length===0){
          $('#package_plan').after(` <div style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
       <div> <h4 style="color:#02a577;margin-left:4px"> ${title.length >= 25 ? title.substr(0, 40).concat('....') : title} </h4> </div>
      </div>

      <div style="margin-left:20px;margin-top:5px"> <p style="color:white;margin-left:4px;font-size:12px"> ${topic} <span> . </span> ${subtopic}  </p> </div>

       
        
        </div>`)

        }
        else{
          if (child_prompts_information.length) {
            $('#openPopUp').css('height','558px');
            $('#package_plan').after(` <div style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
       <div> <h4 style="color:#02a577;margin-left:4px"> ${child_prompts_information[0].length >= 25 ? child_prompts_information[0].substr(0, 40).concat('....') : child_prompts_information[0]} </h4> </div>
      </div>

      <div style="margin-left:20px;margin-top:5px"> <p style="color:white;margin-left:4px;font-size:12px"> ${topic} <span> . </span> ${subtopic}  </p> </div>

       
        
        </div>`)
            $('#prompt_details').after(`<div id="child_prompt_details" style="width: 300px;
        min-height: 84px;
        border-radius: 15px;
        border: 1px solid #0c1f1a;
        margin-left: 40px;
        margin-top:15px;
        background-color: #0c1f1a;">
        <div id="package_plan" style="display:flex;justify-content:space-between"> 
        <div style="margin-left: 20px;
                    margin-top: 10px;
                    height: 30px;
                    width: 100px;
                    display: flex;
                    align-items: center;
                    border-radius: 15px;
                    display:flex;
                    "> 
               
             

             </div> 
         <div id="clear_prompt_div" style="height: 30px;
                     margin-top:10px;
                     border-radius: 100%;
                     border: 1px solid black;
                     background-color: black;
                     width: 30px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     margin-inline: 15px;"> 
                     <button type="button"> <img id="clear_prompt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAAABmJLR0QA/wD/AP+gvaeTAAACaUlEQVQ4jYWRzU8TURTFz52ZzrQwtYCpLhA/wofGGA1hYdSEoBsXJq505UIWxhj3bvhv3GpiDCs1MSGGyMaFUTF8GBQBIVZKp+2beTPvzbsugFqVtm/57jm/e++5hBaPma8BuAwgBTBDRHMH6egA4+FAx0+qaXzxU1jOEcCj/hGZtewXBdubJKJ6q6YAgIqSr2aDDb0ZC1FOopUdLde+yUC8q20lgY4ftzUz8/haXK39iOuCme/s/ytOHy2E26KspGDm080eh5n7AEwAsAHcmBfbuYmegTqAhJlv7+lWh3K9mTeVdXW1Z+AhM88CUABeU1lFM7+UvCRZMQC8r5e8891FZRFMcyfDsD6KknPBLyYAkLc9Kjjuc4eYnvV7/qgNZKTR4nhfvtZqxZNeHkQEjxxfsYkIPA0AiFIVfo0qdWYebxvSbk63lqNyVFFyEwCs3ZBYbCR1B8BIJ4ABzmzEwk3BQQMQG72mmd3EmMFOgEDJs4bZMgYrDYANWgJANROf6zgB8TAByDvO5wagkMnOE2AINNwJ4JJ9KmNZsWc5iwDg7FGWPMuOuu3MQDszM2c1m0Le9gSAL40JACwX3S6dMlvMXGzDGNxKRHTCy7sAFpsBi/0ZP7cc7igAY20AY99lzfEsmwH8OSMRidDopZIK/UDH91u5A508CFnlQqPfEhH/VdTMdxfC7fCnCkWi9b1/dqcoVVOrMhDrsiaY+fp+jZpEVlUncx/C0ugx11dH3e5UcSoBwCW7azWuUi1NnJFc78uCk735H2APcihI46ea+cqKrFgy1QCALjvDQ7leAGa6YGcniSje9/wGWM5OXP0LMOIAAAAASUVORK5CYII=" alt="vCiKz.png" border="0"> </button>  </div>
                     </div> <div style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
      
      </div>

      <div id='child_prompt_title_details_div' style="margin-top:-21px;height:21px;overflow-y:auto;" >

      </div>

   
        </div>`)
            for (let i = 1; i < child_prompts_information.length; i++) {
              let a = i + 1;
              let data = child_prompts_information[i];
              $('#child_prompt_title_details_div').append(`
              <div  id='parent_prompt_${a}' style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
       <div> <h4 style="color:#02a577;margin-left:4px"> ${data} </h4> </div>
      </div>
      `)
            }
            $('#child_prompt_title_details_div').append(`<div style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
       <div> <h4 style="color:#02a577;margin-left:4px">  ${title.length >= 25 ? title.substr(0, 40).concat('....') : title} </h4> </div>
      </div>



        </div>`)
          }
        }

 

        
        
         
        


    if (prompt_to_edit.length) {


      console.log('checking..');
      $('#title_heading >h5').text('Edit your prompt');
      $('#btn_stack_prompt').text('Edit Child Prompt');
      $('#btn_stack_prompt').attr('id', 'edit_child_prompt')
      $('#clear_prompt').attr('id','delete_prompt');
      if (!prompt_to_edit[0].cID) {
        $('#edit_child_prompt').remove();
        $('#prompt_relationship_div_1').remove();
        $('#prompt_relationship_div_2').remove();
        $('#continue_to_prompt_screen_8').attr('id', 'update_prompt').text('Update');
        

        
      }
      else{
       
        $('#continue_to_prompt_screen_8').attr('id', 'update_prompt').text('Update');
       
        $('#edit_child_prompt').remove();

       
        let child_prompt_details = all_prompts.filter((item) => item.pID === prompt_to_edit[0].cID);
        child_prompt_to_delete=child_prompt_details;
        
        $('#prompt_details').after(`<div id='child_prompt_details' style="width: 300px;
        height: 160px;
        margin-top:15px;
        border-radius: 15px;
        border: 1px solid #0c1f1a;
        margin-left: 40px;
        background-color: #0c1f1a;">
        <div style="display:flex;justify-content:space-between"> 
        <div style="margin-left: 20px;
                    margin-top: 10px;
                    height: 30px;
                    width: 100px;
                    border: 1px solid #02a577;
                    display: flex;
                    align-items: center;
                    border-radius: 15px;
                    display:flex;
                    "> 
                    <img src=${userInfo.image ? userInfo.image : image} />
           </div> 
           <div style="height: 30px;
                     margin-top:10px;
                     border-radius: 100%;
                     border: 1px solid black;
                     background-color: black;
                     width: 30px;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     margin-inline: 15px;">
                     <button type="button"> <img id='delete_child_prompt' src="${trashbin}" alt="vCiKz.png" border="0" /> </button>  </div>
         
                     </div>
      

       <div style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
       <div> <h4 style="color:#02a577;margin-left:4px"> ${child_prompt_details[0].title >= 10 ? child_prompt_details[0].title.substr(0, 25).concat('....') : child_prompt_details[0].title} </h4> </div>
      </div>

      <div style="margin-left:20px;margin-top:5px"> <p style="color:white;margin-left:4px;font-size:12px"> ${child_prompt_details[0].topic} <span> . </span> ${child_prompt_details[0].subtopic}  </p> </div>

         <button id="edit_child_prompt" style="width: 140px;
                height: 50px;
                margin-left: 73px;
                margin-top: 15px;
                background-color: #132212;
                border-radius: 20px;
                color: #39b291;
                border: 5px dotted #39b291;">Edit prompt</button>

        
        </div>
        
          
            
            </div>
           
        
        `)

        $('#child_prompt_details').before(` <div id='prompt_relationship_div_1' style="width:100%;display:flex;justify-content:center">
           <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          border-radius: 3px;"
                          
                          ">
                          </div>
             </div>
             <div id='prompt_relationship_div_2' style="width:100%;display:flex;justify-content:center" >
            <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 50px;
                                      width: 4px;
                                      display: flex;
                                      justify-content: center;
                                      " >  </div>
            </div>`)
        $('#openPopUp').css('height','600px');
        $('#edit_child_prompt').css('cursor','pointer');
        $('#edit_child_prompt').click(function () {
          edit_child_prompt = true;
          $('#update_prompt').click();
        })
      }

     
      $('#update_prompt').click(function () {
        update_prompt();
      })
   

    }
  else{

    if(child_prompts_information.length===0){
      $('#prompt_details').after(`   <div  id='prompt_relationship_div_1' style="width:100%;display:flex;justify-content:center">
           <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          border-radius: 3px;"
                          
                          ">
                          </div>
             </div>
             <div id='prompt_relationship_div_2' style="width:100%;display:flex;justify-content:center" >
            <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 50px;
                                      width: 4px;
                                      display: flex;
                                      justify-content: center;
                                      " >  </div>
            </div>`)

    }
    else{
      if(child_prompts_information.length){
        $('#child_prompt_details').after(`
        <div  id='prompt_relationship_div_1' style="width:100%;display:flex;justify-content:center">
           <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          border-radius: 3px;"
                          
                          ">
                          </div>
             </div>
             <div id='prompt_relationship_div_2' style="width:100%;display:flex;justify-content:center" >
            <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 50px;
                                      width: 4px;
                                      display: flex;
                                      justify-content: center;
                                      " >  </div>
            </div>`)
      }
    }
     
  }

  })




  $(document).on('click', '#All_filter_button', function () {
    $(this).css('background-color', '#595d5c');
    $('#Paid_filter_button').css('background-color', '');
    $('#Free_filter_button').css('background-color', '');
    $('#Category_filter').empty();
    $('#Category_filter').append(`<option value='none'>  Category Content  </option>`)
    for (let i = 0; i < categories.length; i++) {
      let data = categories[i];
      $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
    }

    fetchPrompts();

  })

  $(document).on('click', '.relative.flex.w-full.items-center.justify-center.gap-1.rounded-lg.border.py-3:eq(0)', function () {
    gpt_mode='GPT3';
    if (isExtensionActive === true) {
      // document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:#00C28C !important';
      // document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:black !important';
      $('#writingStyleSelect').empty();
      $('#writingStyleSelect').append(`<option value='GPT3'> ChatGPT-3.5 </option>
    <option value='GPT4'> ChatGPT4 </option>  `)

    }
    else if(isExtensionActive===false){
      // document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:white !important';
      // document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:#d9d9e3 !important';
    }
    
  })

  $(document).on('click', '.relative.flex.w-full.items-center.justify-center.gap-1.rounded-lg.border.py-3:eq(1)', function () {
    gpt_mode = 'GPT4';
    if (isExtensionActive === true) {
      // document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:black !important';
      // document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:#00C28C !important';
      $('#writingStyleSelect').empty();
      $('#writingStyleSelect').append(`<option value='GPT4'> GPT-4 </option>
    <option value='GPT3'> ChatGPT3.5 </option>  `)
setTimeout(()=>{
  $('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).css('display', 'none');
},500)
    }
    else if (isExtensionActive === false) {
      document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:#d9d9e3 !important';
      document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:white !important';
    }


  })







  $(document).on('click', '#Free_filter_button', function () {
    $(this).css('background-color', '#595d5c');
    price_filter = false;
    free_filter = true;
    $('#Paid_filter_button').css('background-color', '');
    $('#All_filter_button').css('background-color', '');

    $('#Category_filter').empty();
    $('#Category_filter').append(`<option value='none'>  Category Content  </option>`)
    for (let i = 0; i < categories.length; i++) {
      let data = categories[i];
      $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
    }

    filter_prompts();
  })



$(document).on('click','#browser_mode',function(){
  window.location.href = 'https://chat.openai.com/?model=gpt-4-browsing';
  window.location.reload();
})

$(document).on('click','#default_mode',function(){
  if (window.location.href =='https://chat.openai.com/?model=gpt-4'){
    return;
  }
  else{
    window.location.href ='https://chat.openai.com/?model=gpt-4';
    window.location.reload();
  }
})

  $(document).on('click', '#plugins_mode', function () {
  
    window.location.href = 'https://chat.openai.com/?model=gpt-4-plugins';
      window.location.reload();
    
  })


 

  $(document).on('click', '#Paid_filter_button', function () {
    free_filter = false;
    $(this).css('background-color', '#595d5c');
    $('#All_filter_button').css('background-color', '');
    $('#Free_filter_button').css('background-color', '');
    $('#Category_filter').empty();
    $('#Category_filter').append(`<option value='none'>  Category Content  </option>`)
    for (let i = 0; i < categories.length; i++) {
      let data = categories[i];
      $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
    }

    $('#Subcategories_filter').empty();
    $('#Subcategories_filter').append(`<option value='none'>  Sub category </option>`)

    category_selected = '';
    subcategory_selected = '';
    price_filter = true;

    filter_prompts();

  })

  $(document).on("click", "#promptbtn", function () {
    $(blur_selector).addClass("blur-effect");
    $('#upper_side_menu_content').addClass('blur-effect');
    $('#main_screen_div').addClass('blur-effect');
    $("nav").addClass("blur-effect");
    $("textarea").hide();
    $('#navbar_items').addClass('blur-effect');
    $('form').parent().addClass('blur-effect');
    if ($('.hidediv').length) {
      $('.hidediv').hide();
    }
    $('#promptbtn').prop('disabled', true);

    $("body").append(popUp);
  });

  $(document).on("click", "a", function () {
   

    if (this.className == gpt_new_chat || this.children[0].className == 'flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0') {
      setTimeout(()=>{
       user_photo=''
       load_count=0;
        gpt_mode='3.5';
        prompt_to_load=[];
        user_request_count = 0;
        prompt_no_count = 1;
        response_no = 0;
        template_content = '';
        clearInputs();
        choosing_template_content=1;
        all_template_content=[];
        
        

        // window.location.reload();

        // Gathering UserInfo from chatgpt service
        username = $.parseJSON($("#__NEXT_DATA__").html());
        email = username.props.pageProps.user.email;
        image = username.props.pageProps.user.image;
        // image = 'https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-11639594348fn8rlcxrqo.png';
        username = username.props.pageProps.user.name;
        username = username.split("@")[0];
        author = username;
        page = 1;
        // console.log(email);


        let start = setInterval(() => {
        
          $('textarea').eq(0).parent().addClass('text_area_to_center');
          $("textarea").eq(0).parent().css("color", "#FFF");
         

          document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';

          $('form').parent().css('z-index', '1000');
          $('form').parent().css('background', 'black');
          // $('form').parent().css('position','sticky');

          $('form').parent().css('z-index', '1000');
          $('form').parent().css('background', 'black');
          $('textarea').eq(0).css('width', '85%');
          $('form').parent().children().last().remove();
        
          $('form').parent().css({
            "display": 'flex',
            "justify-content": "center"
          })
          $('form').css('width','601px');
          // $('form').parent().css('position', 'sticky');


          var styleEl = document.createElement("style");
          styleEl.innerHTML = css_inline;
          document.head.appendChild(styleEl);
          document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background='black';
          // $(entire_screen_black).eq(0).css('background', 'black');

          clearInterval(start);

          $('form').parent().css('padding-bottom', '6%');
          $('.scrollbar-trigger').parent().css('height','92%');
          $('body').css({
            "background":"black",
            "overflow":"hidden"
          });
            
          if (isUserLoggedIn === false) {
            main_screen_for_user_not_logged_in();
            $(gpt_submit_selector).css("visibility", "hidden");
            $("textarea").eq(0).parent().append(our_submit_button);
          }
          else {
            if ($(gpt_mode_selector_div).length) {

              is_premium = true;
            }
            initialize_main_screen_on_new_chat();

            
          }

          $('nav').eq(0).addClass('custom_nav');
          

         
          if(isExtensionActive===false){
            extension_disabled();
          }
          if (gpt_mode == 'GPT4') {
            $(gpt_mode_selector).eq(1).click();
            // $('#gpt_4').css('background', '#00C28C');
            // $('#gpt_3').css('background', 'black');
          }
          else if (gpt_mode == 'GPT3') {
            $(gpt_mode_selector).eq(0).click();
            // $('#gpt_4').css('background', 'black');
            // $('#gpt_3').css('background', '#00C28C');
          }


          $("textarea").keydown(function (e) {
            if (e.keyCode == 13  && !e.shiftKey) {
              e.preventDefault();
              submit1();
            }
          });


      },1500)})
     

         
         
          
          

      

       


      ;
    }
  });























  // Gathering UserInfo from chatgpt service
  username = $.parseJSON($("#__NEXT_DATA__").html());
  email = username.props.pageProps.user.email;
  image = username.props.pageProps.user.image;
  // image = 'https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-11639594348fn8rlcxrqo.png';
  username = username.props.pageProps.user.name;
  username = username.split("@")[0];
  author = username;










  $('textarea').eq(0).parent().addClass('text_area_to_center');
  $('textarea').eq(0).parent().css("color", "#FFF");
  document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';
 

  var styleEl = document.createElement("style");
  styleEl.innerHTML = css_inline;
  document.head.appendChild(styleEl);
  document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background = 'black';

  
    
    setTimeout(()=>{
      Intialize_mainscreen_elements();
    },1000)
      

  
    




 
  function Intialize_mainscreen_elements() {
    
   
    $('.scrollbar-trigger').parent().css('height', '92%');

    chrome.runtime.sendMessage({ type:'fetching_selectors'},function(response){
    
      if(response.data.selectors.length){
          blur_selector=response.data.selectors[0].blur_selector;
      request_selector = response.data.selectors[0].request_selector;
      response_selector = response.data.selectors[0].response_selector;
      cancel_or_stop_button_free_version = response.data.selectors[0].cancel_or_stop_button_free_version;
      cancel_or_stop_button_paid_version = response.data.selectors[0].cancel_or_stop_button_paid_version;
      chat_gpt_feedback_selector = response.data.selectors[0].chat_gpt_feedback_selector;
      side_gpt_response_popup = response.data.selectors[0].side_gpt_response_popup;
      gpt_submit_selector = response.data.selectors[0].gpt_submit_selector;
      gpt_mode_selector = response.data.selectors[0].gpt_mode_selector;
      gpt_mode_selector_div = response.data.selectors[0].gpt_mode_selector_div;
      paid_version_starting_elements_div = response.data.selectors[0].paid_version_starting_elements_div;
      gpt_new_chat = response.data.selectors[0].gpt_new_chat;
      hide_nav_menu_button = response.data.selectors[0].hide_nav_menu_button
      entire_screen_black = response.data.selectors[0].entire_screen_black;

      }
    

    

$('nav').eq(0).addClass('custom_nav');
    

     

    

      chrome.runtime.sendMessage({ type: "checking_user", user_email: email }, function (response) {
        if (Object.keys(response.data).length === 0) {

          chrome.runtime.sendMessage({ type: "fetch_prompts", page: 2 }, function (response) {

            if (response.data.public_prompts.length === 0) {
              no_more_public_prompts = true;
            }
            




         
          $(gpt_submit_selector).css("visibility", "hidden");
          isUserLoggedIn=false;
          not_loggedin=true;
          if($(gpt_mode_selector).length){
            is_premium=true
          }

          $("textarea").eq(0).parent().append(our_submit_button);
          
          main_screen_for_user_not_logged_in();
          appending_side_menu();
          

         
          $(document).off('mouseenter', '.promptcard');
          $(document).off('mouseenter', '.hidediv');
          $(document).off('mouseleave', '.hidediv');
          $(document).off('mouseleave', '.promptcard');
          $(document).on('click', '.hidediv', function () {
            blur_background();

            $('body').append(`
            
            <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        display: flex;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px
                        " >
            
            ${feature_popup}
                
           <div  id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                   "
                                                  >
    <div  style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" >
      <div style="display:flex;padding-left:5%" > <img src="${profile_image}" />
        <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
      </div>
    </div>


    <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>
      <h4 style="color:#00C28C"> Sign up </h4>
    </div>
  </div>
  </div>
            `)
            
              // $('#connect').prop('disabled', true);
            
          })
          $(document).on('click','#ownbutton',function(){
            if($('#feature_div').length){
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length){
              $('#connect_with_openai_div').remove()
            }
            blur_background();
            $('body').append(`
            
            <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        display: flex;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px">
            ${feature_popup}
                
            <div id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                    "
  >
    <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" >
      <div style="display:flex;padding-left:5%" > <img src="${profile_image}" />
        <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
      </div>
    </div>


    <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>
      <h4 style="color:#00C28C"> Sign up </h4>
    </div>
  </div>
  </div>
            `)
            // $('#connect').prop('disabled', true);

          })

          $(document).on('click','#Purchase',function(){
            blur_background();
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }
            $('body').append(` 
             <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        display: flex;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px
                        " >

            ${feature_popup}
                
           <div  id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                   "
                                                  >
    <div  style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" >
      <div style="display:flex;padding-left:5%" > <img src="${profile_image}" />
        <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
      </div>
    </div>


    <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>
      <h4 style="color:#00C28C"> Sign up </h4>
    </div>
  </div>
  </div>
  
            `)
            // $('#connect').prop('disabled', true);
          })

          $('#Favourite').on('click',function(e){
            
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }
            blur_background();
            $('body').append(`  <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        display: flex;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px
                        " >
            
            ${feature_popup}
                
           <div  id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                   "
                                                  >
    <div  style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" >
      <div style="display:flex;padding-left:5%" > <img src="${profile_image}" />
        <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
      </div>
    </div>


    <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>
      <h4 style="color:#00C28C"> Sign up </h4>
    </div>
  </div>
  </div>
            `)
            // $('#connect').prop('disabled', true);
          })


          $(document).on('click','#crossbtn',closing_connect_open_ai_popup)


          

          });
          } 
       
        else if (response.data.status ==='logged_out'){
          userId = response.data._id;
          userInfo = response.data;
          not_loggedin=true;
          isRegistered=true;
          chrome.runtime.sendMessage({ type: "fetch_prompts", page: 2 }, function (response) {
          
            if (response.data.public_prompts.length === 0) {
              no_more_public_prompts = true;
            }
            if (response.data.user_prompts.length === 0) {
              no_more_private_prompts = true;
            }
        
          $(gpt_submit_selector).css("visibility", "hidden");
           isUserLoggedIn=false;
          if ($(gpt_mode_selector).length) {
            is_premium = true
          }
          $("textarea").eq(0).parent().append(our_submit_button);
          
         
          main_screen_for_user_not_logged_in();
          appending_side_menu()

          $(document).off('mouseenter', '.promptcard');
          $(document).off('mouseenter', '.hidediv');
          $(document).off('mouseleave', '.hidediv');
          $(document).off('mouseleave', '.promptcard');

          $(document).on('click','.hidediv',function(){
           
            
            blur_background();
            $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;" > ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                    ">
            <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            padding-right: 4.25%;
            cursor:pointer"  alt='cross_btn'  />  </div>
            <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}'  alt='prompt_ai_logo' /> </div>
            <div  style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
            <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>
            
            <div id=${userInfo.username? 'sign_in':'log_in'} style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" > 
              <div style="display:flex;padding-left:5%" > <img src="${profile_image}"  />  
              <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
              </div>
            </div>


            <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>  
            <h4 style="color:#00C28C"> Sign up </h4>
            </div>


            </div>
            
            </div>
           `)

           
          
            
          }
          
          
          )
          

          $(document).on('click', '#ownbutton', function () {
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }

            blur_background();
            $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;">  ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                   ">
            <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            padding-right: 4.25%;
            cursor:pointer"  alt='cross_btn'  />  </div>
            <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}'  alt='prompt_ai_logo' /> </div>
            <div  style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
            <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>
            
            <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" > 
              <div style="display:flex;padding-left:5%" > <img src="${profile_image}"  />  
              <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
              </div>
            </div>


            <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>  
            <h4 style="color:#00C28C"> Sign up </h4>
            </div>


            </div>
            </div>
            
            
           `)
            if (userInfo.username) {
              $('#log_in').attr('id', 'sign_in');
            }
            else {
              $('#log_in').prop('disabled', false);
            }

          })

          $(document).on('click', '#Purchase', function () {
            blur_background();
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }

            blur_background();
            $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;" > ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                    ">
            <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            padding-right: 4.25%;
            cursor:pointer"  alt='cross_btn'  />  </div>
            <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}'  alt='prompt_ai_logo' /> </div>
            <div  style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
            <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>
            
            <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" > 
              <div style="display:flex;padding-left:5%" > <img src="${profile_image}"  />  
              <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
              </div>
            </div>


            <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>  
            <h4 style="color:#00C28C"> Sign up </h4>
            </div>


            </div>
            </div>
            
           `)
            if (userInfo.username) {
              $('#log_in').attr('id', 'sign_in');
            }
            else {
              $('#log_in').prop('disabled', false);
            }
          })

          
          $('#Favourite').click(function(){
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }

            blur_background();
            $('body').append(` <div id='main_pop_up' style="position: fixed;
                        top: 20%;
                        left: 38%;
                        box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
                        display: flex;" > ${feature_popup}
             
             <div id='connect_with_openai_div'style="width: 493px;
                                                    height: 464px;
                                                    background: black;
                                                    ">
            <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            padding-right: 4.25%;
            cursor:pointer"  alt='cross_btn'  />  </div>
            <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}'  alt='prompt_ai_logo' /> </div>
            <div  style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
            <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>
            
            <div id='log_in' style="display: flex;
              justify-content: center;
              align-items: center;
              height: 54px;
              cursor:pointer;
              width: 208px;
              background: #00C28C;
              margin-left: 27%;
              border-radius: 20px;
              margin-top: 10%;" > 
              <div style="display:flex;padding-left:5%" > <img src="${profile_image}"  />  
              <p style="color:white;margin-left:7px"> Sign in With Open AI   </p>
              </div>
            </div>


            <div style="margin-top:20%;display:flex;justify-content:center;align-items:center" > <h4 style="color:white"> Don't have an account?  </h4>  
            <h4 style="color:#00C28C"> Sign up </h4>
            </div>


            </div>
            </div>
            
           `)
            if (userInfo.username) {
              $('#log_in').attr('id', 'sign_in');
            }
            else {
              $('#log_in').prop('disabled', false);
            }
          
          })
            






          $(document).on('click', '#crossbtn', closing_connect_open_ai_popup)

          
      
          })
          }  

        

        else {

          if ($(gpt_mode_selector_div).length) {
            is_premium = true;
          }

          
         
          userId = response.data._id;
          userInfo = response.data;
          console.log(userInfo);
          if ($('#main_screen_div').length) {
            $('#main_screen_div').remove();
          }
          $('main').eq(0).prepend(`<div style="position:absolute;width:100%;height:100%;z-index:999;background-color:black;overflow:scroll" id='main_screen_div' >  </div> `)
            
          // if(is_premium===true){
          //   $('.relative.flex.flex-col.items-stretch.justify-center.gap-2 >div ').eq(0).css({
          //     'z-index':'100000',
          //     'background':'black'
          //   });
          // }
          chrome.runtime.sendMessage({ type: "fetch_prompts", id:userId,  page: 2 }, function (response) {
            if (response.data.public_prompts.length === 0) {
              no_more_public_prompts = true;
            }
            if (response.data.user_prompts.length === 0) {
              no_more_private_prompts = true;
            }


          $('#main_screen_div').append(`<button id='searchbtn' style="visibility:hidden;position:absolute;top:0px"  > </button>`)
         
          
          $('#main_screen_div').on('scroll',function(){
            var scrollPosition = $('#main_screen_div').scrollTop();
            if(scrollPosition>=45){
              $('#navbar_elements_div').css('visibility','visible');
              $('#main_menu_items').hide();
            }
            else if(scrollPosition<=10){
              $('#navbar_elements_div').css('visibility','hidden');
             setTimeout(()=>{
               $('#main_menu_items').show();
             },100) 
            }
          })
          
         
        $('body').css({
          "background":'black',
          "overflow":"hidden"
        })

          if ($('#navbar_items').length){
            $('#navbar_items').remove();
          }


          $('body').prepend(` <div id='navbar_items' style="display: flex;
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

                         
          </div>`);

           $('#main_screen_div').eq(0).append(
            `
          <div id="loading_gif_2" style="display:none; z-index: 10000000">
                <img style="height: 60px;
                            position: fixed;
                            top: 45%;
                            left: 47%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>

      

          `
          );


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
            height:55px;" placeholder='Search Prompt' />
             `)




          if(is_premium===true){
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
                                                <li id='default_mode'  style="" ><a href=${window.location.href == 'https://chat.openai.com/?model=gpt-4' ? '#' :'https://chat.openai.com/?model=gpt-4' } style="text-decoration:none;cursor:pointer" ><img src="${star}" alt=""> Default</a></li>
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
                                if(gpt_mode=='GPT4'){
                                  $('#switchYearly').click();
                                }
          }

        

          $('#top_bar').before(`<a style="color:white;display:none" id='navigating_to_top' href='#'> Navigate to me </a>`)

          $('#navbar_items').append(`<div id="logout_div" style="    position: absolute;z-index: 10;top: 66px;cursor: pointer;float: right;width: max-content;box-shadow: rgba(, 99, 99, 0.2) 0px 2px 8px 0px;font-size: 15px;padding: 10px;background-color: rgb(0 0 0);right: 20.5px;color: white;border-radius: 25px;/* width: 100%; */box-shadow: rgba(40, 164, 122, 0.467) 1px 0px 3px 3px;
        ">
          <span id="account">Account</span><br>
          <span id="btn_logout">Logout</span><br>
          <span id="btn_payment_plan" style="display: none;">Payment Plan</span>
        <span id="btn_manage">Manage Subscription</span></div>`)
        

    $('#logout_div').css('display','none');
          
          


          let is_user_prompt_history = JSON.parse(sessionStorage.getItem('user_prompt_history'));
          if (is_user_prompt_history) {
            user_prompt_history = is_user_prompt_history;

            appending_side_menu();
          }

          else {



            chrome.runtime.sendMessage({ type: "fetching_user_prompt_history", user: userId }, function (response) {

              user_prompt_history = response.data.user_prompt_history;
              // sessionStorage.setItem('user_prompt_history', JSON.stringify(response.data.user_prompt_history));
             




            }
            );

          }



          let is_user_favourite_prompts = JSON.parse(sessionStorage.getItem('user_favourite_prompts'));
          if (is_user_favourite_prompts) {
            global_api_response = JSON.parse(sessionStorage.getItem('global_api_response'));
            user_prompts = JSON.parse(sessionStorage.getItem('user_prompts'));
            // all_prompts = JSON.parse(sessionStorage.getItem('all_prompts'));
            user_favourite_prompts = JSON.parse(sessionStorage.getItem('user_favourite_prompts'));
            menu_items();
          }
          else {

            $("#loading_gif_2").show();
            chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, }, function (response) {
              console.log(response);
              // sessionStorage.setItem('global_api_response', JSON.stringify(response.data.public_prompts));
              sessionStorage.setItem('user_prompts', JSON.stringify(response.data.user_prompts))
              global_api_response = response.data.public_prompts;
              user_prompts = response.data.user_prompts;

              all_prompts = ([...global_api_response,...user_prompts,...response.data.all_prompts]);
              console.log(all_prompts);
              
              let url = window.location.search;
              if (url) {
                let id=url.split('=')[1];
                prompt_to_load=all_prompts.filter((item)=>item._id === id );
                if(prompt_to_load.length){
                  prompt_selected=prompt_to_load;
                 
                 
                }

              }
              sessionStorage.setItem('all_prompts', JSON.stringify(all_prompts));

              chrome.runtime.sendMessage({ type: "fetching_topics" }, function (response) {
                console.log(response);
                categories = response.data;


                chrome.runtime.sendMessage(
                  { type: "fetching_user_prompts", uId: userId },
                  function (response) {
                    user_favourite_prompts = response.data.favourite_prompts;
                    // sessionStorage.setItem('user_favourite_prompts', JSON.stringify(response.data.favourite_prompts))


                    user_favourite_prompts = response.data.favourite_prompts;
                    $("#loading_gif_2").hide();


                    menu_items();
                    appending_side_menu();
                    let check = sessionStorage.getItem('isExtensionActive');
                    if (check) {
                      console.log(typeof (check));
                      if (check === 'false') {
                        isExtensionActive=false;
                        return extension_disabled();
                      }
                    }

                  }
                );

              });
            });

          }



        })

        }
      });

    })

  
  }


 


  $(document).on('mouseover', '#publicbutton', function () {
    $(this).css('cursor', 'pointer')
  })
  $(document).on('mouseover', '#Purchase', function () {
    $(this).css('cursor', 'pointer')
  })

  $(document).on('mouseover', '#Favourite', function () {
    $(this).css('cursor', 'pointer')
  })
  $(document).on('mouseover', '#ownbutton', function () {
    $(this).css('cursor', 'pointer')
  })

  $(document).on('mouseover', '#Advance_filters', function () {
    $(this).css('cursor', 'pointer');
  })

  // personal prompts being appended






  // _________________
});

$('form').parent().css({
  "padding-bottom":"6%",
  
});
 $('form').parent().css({
  "display": 'flex',
  "justify-content": "center"
})

$('form').css('width','601px');
$('form').parent().children().last().remove();


const update_prompt = () => {
  $("#loading_gif").show()


  if (edit_child_prompt === true) {


    chrome.runtime.sendMessage({
      type: "editing_prompt", template, dataset_name, teaser, price, hint, title, url, topic, subtopic, file_content,
      username,
      id: prompt_to_edit[0]._id
    }, function (response) {
      console.log(response);
      if (response) {
        chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, }, function (response) {
          
          global_api_response = response.data.public_prompts;
          user_prompts = response.data.user_prompts;
          $("#loading_gif_2").hide();
          edit_child_prompt = false;
          prompt_to_edit = all_prompts.filter((item) => item.pID == prompt_to_edit[0].cID);
          edit_child_prompt_template++;


          teaser = '';
          template = '';
          url = '';
          hint = '';
          title = '';
          method = '';
          template_content = '';
          dataset_name = '';
          count++;

          setTimeout(() => {
            $("#openPopUp").remove();
          }, 500);

          setTimeout(() => {
            $("body").append(popUp);
            $('#title_heading >h5').text('Edit your prompt')
            $('#new_prompt_title').val(prompt_to_edit[0].title);
            title = prompt_to_edit[0].title;
            $('#new_prompt_teaser').val(prompt_to_edit[0].teaser);
            teaser = prompt_to_edit[0].teaser;
          }, 550);


         

        



        });
        


      }


    });

  }

  else {
    chrome.runtime.sendMessage({
      type: "editing_prompt", dataset_name, template, teaser, price, hint, title, url, topic, subtopic, file_content,
      username,
      id: prompt_to_edit[0]._id
    }, function (response) {
      console.log(response);
      if (response) {

        
        $("#loading_gif").hide()
        window.location.reload();

      }


    });



  }



}

const blur_background=()=>{
  $('#toggle_extension_state_active').prop('disabled',true);
  $('#upper_side_menu_content').addClass('blur-effect');
  $(blur_selector).addClass("blur-effect");
  $('.hidediv').hide();
  $("nav").addClass("blur-effect");
  $('#promptbtn').prop('disabled', true);
  $('main').addClass("blur_effect");
  $("textarea").prop('disabled', true);
  $('#publicbutton').prop('disabled',true);
  $('#main_screen_div').addClass('blur-effect');
  $('textarea').eq(0).parent().addClass('blur-effect');
  if($('#main_pop_up').length){
    $('#main_pop_up').remove();
  }
  if ($('Pagination_div').length){
    $('#Pagination_div').remove();
  }
}




const closing_connect_open_ai_popup=()=>{
  $('#toggle_extension_state_active').prop('disabled', false);
  $('#upper_side_menu_content').removeClass('blur-effect');
  $(blur_selector).removeClass("blur-effect");
  $('.hidediv').show();
  $("nav").removeClass("blur-effect");
  $('#promptbtn').prop('disabled', false);
  $('main').removeClass("blur_effect");
  $("textarea").prop('disabled', false);
  $('#publicbutton').prop('disabled',false);
  $('#main_screen_div').removeClass('blur-effect');
  $('textarea').eq(0).parent().removeClass('blur-effect');
  $('#main_pop_up').remove();
  $('#publicbutton').click()
 

}