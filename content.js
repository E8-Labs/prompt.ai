var is_premium = false;
var user_request_count = 0;
var user_prompt_history;
var prompt_no_count = 1;
var prompt_to_edit = [];
var gpt_mode;
var response_no = 0;
var mode;
var dataset_name;
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

  

  
  $(document).on('click','ol > li >a',function(){
    let check_for_chat=setInterval(()=>{
     if($(request_selector).length){
      
       appending_side_menu();
       document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background = 'black';
 
       $("textarea").eq(0).parent().css("margin-left", "42%").addClass('text_area_to_center');
       $("textarea").eq(0).parent().css("color", "#FFF");


       $('nav').eq(0).addClass('custom_nav');
       document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';
 
       $('form').parent().css('z-index', '1000');
       $('form').parent().css('background', 'black');
       $('form').parent().css('position', 'sticky');
       $(gpt_submit_selector).css('visibility', 'hidden');
       $("textarea").eq(0).parent().append(our_submit_button)
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


  $(document).on('DOMNodeInserted', '.relative.flex.flex-col.items-stretch.justify-center.gap-2:eq(0)', function () {
    //Checking to see if the text which appears if GPT4 mode is
    if (document.querySelectorAll('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600')[0]) {
      gpt_mode = 'GPT4'

      
    }
    else{
      gpt_mode='GPT3'
    }

   
  })

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
    chrome.runtime.sendMessage({ type: 'fetching_template_content', id: prompt_to_edit[0]._id }, function (response) {
      all_template_content=response.data.template;
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
  })


  $(document).on('click','#profile_icon',function(){
     $('#logout_div').toggle();
    $('#promptbtn').toggle();
    
  })


  $(document).on('click', '#Advance_filters', function () {
    $('#menu-tabs').toggle();
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


  //SubmitButton
  const submit1 = () => {
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



  
  
       $(gpt_submit_selector).click();
     
    






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

              $(response_selector).eq(prompt_no).after(`
              
              
              <div id='rating_div' style="display: flex;
                                          justify-content: flex-end;
                                          gap: 10px;
                                          align-items: center;
                                          width: 100%;
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
            $(".flex .py-2").eq(0).css("margin-left", "42%");
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
                template_content = all_template_content[choosing_template_content];
                choosing_template_content++;
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
            <p style="color:white;font-size:12px"> &nbsp @  ${prompt_selected[0].user.username}  </p>
            </div>`)


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
                                      margin-left:10px" >  </div>

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
      
      
      let check_for_chat = setInterval(() => {
        if ($('#upper_side_menu_content').length === 0) {
          if ($(request_selector).length) {

            appending_side_menu();
            document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background = 'black';

            $("textarea").eq(0).parent().css("margin-left", "42%").addClass('text_area_to_center');
            $("textarea").eq(0).parent().css("color", "#FFF");

            document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';

            $('form').parent().css('z-index', '1000');
            $('form').parent().css('background', 'black');
            $('form').parent().css('position', 'sticky');
            $(gpt_submit_selector).css('visibility', 'hidden');
            $("textarea").eq(0).parent().append(our_submit_button)
            $('nav').eq(0).addClass('custom_nav');
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
    document.querySelectorAll('nav >div')[0].firstChild.click();

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

        extra_prompts = response.data.public_prompts;
        extra_parent_prompts = extra_prompts.filter((item) => (item.cID && !item.pID) || (!item.cID && !item.pID))


        $('#loading_gif_2').hide();
        $('#publicbutton').click();

      });




    });

  })

  // const fetch_additional_public_prompts=()=>{

  // }


  $(document).on('click', '#next_page', async function () {


    $('#loading_gif_2').show();
    page++;

    // global_api_response=extra_prompts;
    chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page: page }, function (response) {

      if (response.data.public_prompts.length === 0) {
        alert('no more data exists');
        $('#loading_gif_2').hide();
      }
      else {

        extra_prompts = response.data.public_prompts;
        extra_parent_prompts = extra_prompts.filter((item) => (item.cID && !item.pID) || (!item.cID && !item.pID));

        all_prompts = ([...all_prompts, ...extra_prompts]);

        $('#loading_gif_2').hide();
        fetchExtraPublicPrompts();


      }





    });


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

    chrome.runtime.sendMessage({ type: "inserting_category_and_subcategory", topic_name, subtopic_name }, function (response) {
      if (response.data.message == 'This subcategory already exists in this category!') {
        alert('This Subcategory is already registered for this category, please try a different one!');
      }
      else {

        $('#loading_gif_3').show();
        chrome.runtime.sendMessage({ type: "fetching_topics" }, function (response) {

          categories = response.data;
          $('#loading_gif_3').hide();
          $('#go_back_to_screen_3').click();

        });
      }





    });
  })




  const fetchPersonalPrompts = () => {

    // console.log(user_prompts);

    $("#promptbtn").show();
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



    if (parentPrompts.length <= 2) {
      for (let i = 0; i < parentPrompts.length; i++) {

        let data = parentPrompts[i];


        $("#main_div").append(`<div class='col-lg-5 main_personal_prompt_div' style="display:flex;width:100%;height: 280px;max-width:500px"  >

      <div class=" hidediv" id='${data._id}'  style="border-radius:8px;border:1;background-color:#000;width:100%;box-shadow:1px 0px 3px 3px #28a47a77;">
     
      <div style="display:flex;width: 100%;" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <p style="color:#FFFFFF;width: 100%;">  &nbsp <span style="text-decoration:underline;color:#FFFFFF"> ${data.author} </span>  </p>
          <div style="display:flex;gap:30px">
          <svg class='edit_prompt' id='${data._id}' style="color:#00C28C;visibility:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
          <button class='buybtn' id='${data._id}' style="width:60px; visibility:hidden; border-radius:10px;color:white;background-color:#00C28C;border:2px solid #00C28C;height:30px"> Buy </button>
          <button class='heart' id=${data._id} type='button'> <svg  style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> </button>
      </div>
      </div>
     

  <div class="promptcard" id=${data._id}  >
      <h2 style="color: #00c08b; height:60px;overflow:hidden;"> ${data.title} </h2>
      
      

      <div style="margin-top:5px">
          <p style="color:	#FFFFFF;height: 65px;overflow: hidden;">  ${data.teaser} </p>
      </div>
  </div>

  <div class="my-3" style="display:flex;justify-content:space-between;align-items:center;position:relative;top:35px;color:#FFFFFF">
      

    <div class="d-flex mx-2" style="gap:10px">
          <div style="display:flex"><button id=${data._id}  type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${Math.ceil(data.likes)}  </p>
          </div>
          
      </div>



       <div class='d-flex mx-2'  >  <button type='button' class='views' id=${data._id} >  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>  </button>  <p> &nbsp  ${data.views} </p>  </div>

      <div class='d-flex mx-2'> <img src="${comment}" alt="vCiKz.png" border="0" /> <p> &nbsp ${data.comments} </p>  </div>

       
     


     

      
  </div>
      </div>`)


      }
    }


    else {
      for (let i = 0; i < parentPrompts.length; i++) {

        let data = parentPrompts[i];


        $("#main_div").append(`<div class='col-lg-4 main_personal_prompt_div' style="display:flex;width:100%;height: 280px;max-width:500px"  >

      <div class=" hidediv" id='${data._id}'  style="border-radius:8px;border:1;background-color:#000;width:100%;box-shadow:1px 0px 3px 3px #28a47a77;">
     
      <div style="display:flex;width: 100%;" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <p style="color:#FFFFFF;width: 100%;">  &nbsp <span style="text-decoration:underline;color:#FFFFFF"> ${data.author} </span>  </p>
          <div style="display:flex;gap:30px">
          <svg class='edit_prompt' id='${data._id}' style="color:#00C28C;visibility:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
          <button class='buybtn' id='${data._id}' style="width:60px; visibility:hidden; border-radius:10px;color:white;background-color:#00C28C;border:2px solid #00C28C;height:30px"> Buy </button>
          <button class='heart' id=${data._id} type='button'> <svg  style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> </button>
      </div>
      </div>
     

  <div class="promptcard" id=${data._id}  >
      <h2 style="color: #00c08b; height:60px;overflow:hidden;"> ${data.title} </h2>
      
      

      <div style="margin-top:5px">
          <p style="color:	#FFFFFF;height: 65px;overflow: hidden;">  ${data.teaser} </p>
      </div>
  </div>

  <div class="my-3" style="display:flex;justify-content:space-between;align-items:center;position:relative;top:35px;color:#FFFFFF">
      

    <div class="d-flex mx-2" style="gap:10px">
          <div style="display:flex"><button id=${data._id}  type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${Math.ceil(data.likes)}  </p>
          </div>
          
      </div>



       <div class='d-flex mx-2'  >  <button type='button' class='views' id=${data._id} >  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>  </button>  <p> &nbsp  ${data.views} </p>  </div>

      <div class='d-flex mx-2'> <img src="${comment}" alt="vCiKz.png" border="0" /> <p> &nbsp ${data.comments} </p>  </div>

       
     



      
  </div>
      </div>`


        )




      }

      var target = $('a[href="#"]');
      var offset = $(target).offset().top;
      $('.flex-1.overflow-hidden >div >div').eq(1).animate({ scrollTop: offset }, 500);
    }


    if ($('#adding_padding').length) {
      $('#adding_padding').remove();
    }
    $('#main_div').eq(0).after(`<div id='adding_padding' style="padding-bottom:15%"> </div>
    
    `)


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
      alert("Your Prompt Successfully Removed from your favourites list");
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
    document.querySelectorAll('nav >div')[0].firstChild.click();


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

      if (user_favourite_prompts.length <= 2) {

        for (let i = 0; i < user_favourite_prompts.length; i++) {
          let data = user_favourite_prompts[i];


          $("#main_div").append(`<div class='col-lg-5 favourite_public_prompt_div' style="display:flex;width:100%;height: 280px;max-width:500px;"  >

      <div class=" hidediv" id='${data._id}'  style="border-radius:8px;border:1;background-color:#000;width:100%;box-shadow:1px 0px 3px 3px #28a47a77;">
     
      <div style="display:flex;width: 100%;" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <p style="color:#FFFFFF;width: 100%;">  &nbsp <span style="text-decoration:underline;color:#FFFFFF"> ${data.author} </span>  </p>
          <div style="display:flex;gap:30px">
          <button class='buybtn' id='${data._id}' style="width:60px; visibility:hidden; border-radius:10px;color:white;background-color:#00C28C;border:2px solid #00C28C;height:30px"> Buy </button>
          <button class='disheart' id=${data._id} type='button'> <svg  style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> </button>
      </div>
      </div>
     

  <div class="promptcard" id=${data._id}  >
      <h2 style="color: #00c08b; height:60px;overflow:hidden;"> ${data.title} </h2>
      
      

      <div style="margin-top:5px">
          <p style="color:	#FFFFFF;height: 65px;overflow: hidden;">  ${data.teaser} </p>
      </div>
  </div>

  <div class="my-3" style="display:flex;justify-content:space-between;align-items:center;position:relative;top:35px;color:#FFFFFF">
      

    <div class="d-flex mx-2" style="gap:10px">
          <div style="display:flex"><button id=${data._id}  type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${Math.ceil(data.views)}  </p>
          </div>
          
      </div>



       <div class='d-flex mx-2'  >  <button type='button' class='views' id=${data._id} >  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>  </button>  <p> &nbsp  ${data.views} </p>  </div>

      <div class='d-flex mx-2'> <img src="${comment}" alt="vCiKz.png" border="0" /> <p> &nbsp ${data.comments} </p>  </div>

       
     


     

      
  </div>
      </div>`)


        }


      }

      else {
        for (let i = 0; i < user_favourite_prompts.length; i++) {
          let data = user_favourite_prompts[i];


          $("#main_div").append(`<div class='col-lg-4 favourite_public_prompt_div' style="display:flex;width:100%;height: 280px;max-width:500px"  >

      <div class=" hidediv" id='${data._id}'  style="border-radius:8px;border:1;background-color:#000;width:100%;box-shadow:1px 0px 3px 3px #28a47a77;">
     
      <div style="display:flex;width: 100%;" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <p style="color:#FFFFFF;width: 100%;">  &nbsp <span style="text-decoration:underline;color:#FFFFFF"> ${data.author} </span>  </p>
          <div style="display:flex;gap:30px">
          <button class='buybtn' id='${data._id}' style="width:60px; visibility:hidden; border-radius:10px;color:white;background-color:#00C28C;border:2px solid #00C28C;height:30px"> Buy </button>
          <button class='disheart' id=${data._id} type='button'> <svg  style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> </button>
      </div>
      </div>
     

  <div class="promptcard" id=${data._id}  >
      <h2 style="color: #00c08b; height:60px;overflow:hidden;"> ${data.title} </h2>
      
      

      <div style="margin-top:5px">
          <p style="color:	#FFFFFF;height: 65px;overflow: hidden;">  ${data.teaser} </p>
      </div>
  </div>

  <div class="my-3" style="display:flex;justify-content:space-between;align-items:center;position:relative;top:35px;color:#FFFFFF">
      

    <div class="d-flex mx-2" style="gap:10px">
          <div style="display:flex"><button id=${data._id} class='publicupvote' type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${Math.ceil(data.views)}  </p>
          </div>
          
      </div>



       <div class='d-flex mx-2'  >  <button type='button' class='views' id=${data._id} >  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>  </button>  <p> &nbsp  ${data.views} </p>  </div>

      <div class='d-flex mx-2'> <img src="${comment}" alt="vCiKz.png" border="0" /> <p> &nbsp ${data.comments} </p>  </div>

       
     


     

      
  </div>
      </div>`)


        }
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
          alert('Prompt successfully added to your favourite list');
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
      $('#new_prompt_template').val(all_template_content[edit_child_prompt_template]);
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
    isExtensionActive = true;
     extension_enabled();

  })

  $(document).on('click','#toggle_extension_state_active',function(){
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
    if (e.keyCode == 13) {
      e.preventDefault();
      submit1();
    }
  });


 

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
  $(document).on('mouseenter', '.hidediv', function () {
    $(this).css({
      'border': '4px solid #003627',
      'box-shadow': ''


    });

    $('.hidediv').css('background', '');
    $(this).css('background', '#FFFFFF1A');

    if (prompt_selected.length>0) {
      $(`#${prompt_selected[0]._id}`).eq(0).closest('.hidediv').css('background', '#FFFFFF1A')
    }



    let id = $(this)[0].id
    //  let prompt_hovered=global_api_response.filter((item)=> item._id === id );

    //  if(prompt_hovered.length===0){
    //   prompt_hovered=user_prompts.filter((item)=>item._id === id);
    //  }

    let prompt_hovered = all_prompts.filter((item) => item._id === id);

    //  if(prompt_hovered.length===0){
    //     prompt_hovered=extra_prompts.filter((item)=>item._id === id );
    //   }


    if (prompt_hovered[0].price > 0) {
      $(this).closest('.hidediv').find('.buybtn').css('visibility', 'visible');
      //  console.log(checking);

    }

    $(this).closest('.hidediv').find('.edit_prompt').css('visibility', 'visible');



  })

  $(document).on('mouseenter', '#new_chat_div', function () {
    $(this).css('cursor', 'pointer');
  })

  $(document).on('mouseleave', '.hidediv', function () {
    $(this).css({
      'border': '',
      'box-shadow': '1px 0px 3px 3px #28a47a77',
      "background": ""
    });

    if (prompt_selected.length>0) {
      $(`#${prompt_selected[0]._id}`).eq(0).closest('.hidediv').css('background', '#FFFFFF1A')
    }

    let id = $(this)[0].id

    // let prompt_hovered=all_prompts.filter((item)=> item._id === id );

    let prompt_hovered = all_prompts.filter((item) => item._id === id);

    //  if(prompt_hovered.length===0){
    //   prompt_hovered=user_prompts.filter((item)=>item._id === id);
    //  }







    if (prompt_hovered[0].price > 0) {
      $(this).closest('.hidediv').find('.buybtn').css('visibility', 'hidden');


    }

    $(this).closest('.hidediv').find('.edit_prompt').css('visibility', 'hidden');


  })

  //Updating View value of a prompt and appending prompt info in textarea
  $(document).on("click", ".promptcard", function () {
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
    $(this).closest('.hidediv').css('background', '#FFFFFF1A');


    $('textarea').prop('disabled',true);



    prompt_selected = all_prompts.filter(
      (item) => item._id === $(this)[0].id
    );
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
    chrome.runtime.sendMessage({ type:'fetching_template_content',id:prompt_selected[0]._id},function(response){
     
     all_template_content=response.data.template;
     
      $("#loading_gif_2").hide();
      $('textarea').prop('disabled', false);
      let prompt_stacking_info = []
      if (prompt_selected[0].cID > 0) {

        prompt_stacking_info = ([...prompt_selected]);
        child_prompt_1 = all_prompts.filter((item) => item.pID === prompt_selected[0].cID);
        prompt_stacking_info = ([...prompt_selected, ...child_prompt_1])

        if (child_prompt_1.length) {

          if (child_prompt_1[0].cID > 0) {
            child_prompt_2 = all_prompts.filter((item) => item.pID === child_prompt_1[0].cID);
            prompt_stacking_info = ([...prompt_selected, ...child_prompt_1, ...child_prompt_2]);


          }



        }

      }




      if (prompt_stacking_info.length) {
        if ($(".prompt_stacking_div").length > 0) {
          $(".prompt_stacking_div").remove();
        }

        if ($("#authordiv").length > 0) {
          $("#authordiv").remove();
        }

        $("textarea").prop("placeholder", prompt_selected[0].hint);
        template_content = response.data.template[0];
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
            left: 30px; display:flex;" > 
            <p style="color:white;font-size:12px"> &nbsp @  ${prompt_selected[0].user.username}  </p>
            </div>`)


        $('.prompt_stacking_div').append(` <div  id="prompt_stacking_div_1" style="height: 50px;
                         width: 180px;
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         
                         background: #111e1a;
                         ">  
                          <p style="color:white;margin-left:10px"> ${prompt_selected[0].title.length >= 19 ? prompt_selected[0].title.substr(0, 19).concat('...') : prompt_selected[0].title}  </p> </div>
                         <div id='stacking_div_1' style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 2px;
                                      width: 30px;
                                      display: flex;
                                      align-items: center;
                                      margin-top: 25px;" >  </div>

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
        template_content = response.data.template[0];
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
            left: 30px; display:flex;" > 
            <p style="color:white;font-size:12px"> &nbsp @  ${prompt_selected[0].user.username}  </p>
            </div>`)

        $('.prompt_stacking_div').append(`<div  id="prompt_stacking_div_1" style="height: 50px;
                         width: 180px;
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         margin-bottom:5px;
                         background: #111e1a;
                         ">  
                          <p style="color:white;margin-left:10px"> ${prompt_selected[0].title.length >= 19 ? prompt_selected[0].title.substr(0, 19).concat('...') : prompt_selected[0].title}  </p> </div>
                         `)
      }



    })
    



    



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
    
      $('#gpt_3').css('background','#00C28C');
      $('#gpt_4').css('background','black');
    }
    else if (check_gpt_mode == 'GPT4') {
      document.querySelectorAll(gpt_mode_selector)[1].click()
      gpt_mode='GPT4'
     
      $('#gpt_3').css('background', 'black');
      $('#gpt_4').css('background', '#00C28C');
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


  $(document).on("click", "#crossbtn", function () {
    $('#upper_side_menu_content').removeClass('blur-effect');
    $(blur_selector).removeClass("blur-effect");
    $("nav").removeClass("blur-effect");
    $('#main_screen_div').removeClass('blur-effect');
    clearInputs();
    prompt_to_edit = [];
    count = 0;
    $("#openPopUp").remove();
    
    if(btn_click =='Public'){
      $('#publicbutton').click();

    }
    else if(btn_click=='Private'){
      $('#ownbutton').click();

    }

    $('#promptbtn').prop('disabled', false);

    $("textarea").show();
  });

  $(document).on('click', '#public_btn', function () {
    $("#public_btn").css("background", "#474646");
    $("#private_btn").css("background", "black");
    user = false;
  })


  $(document).on('click', '#private_btn', function () {
    $("#private_btn").css("background", "#474646");
    user = true;
    $('#public_btn').css("background", "black");
  })

  $(document).on("click", "#continue_to_prompt_screen_2", function () {


    $('#openPopUp').remove();
    $('body').append(popUp2);
    if (template) {
      $('#new_prompt_template').val(template);
    }

    if (prompt_to_edit.length) {
      $('#title_heading >h5').text('Edit your prompt');
      $('#new_prompt_template').val(all_template_content[edit_child_prompt_template]);
      template = all_template_content[edit_child_prompt_template];

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
      for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
        $("#select_topic").append(`<option  value="${data.name}" > ${data.name} </option> `);
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
  
    if($(gpt_mode_selector).length){
      // $('#custom_gpt_mode_div').toggle();
     
    }
    $('#searchbar').toggle();
    $('#search_button').toggle();
  })

  $(document).on('change', '#select_topic', function () {
    topic = $("#select_topic").find(":selected").val();
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

    // if (!method) {
    //   alert('Please choose a method first!');
    // }

    // else if (method == 'Paid') {
    //   $('#openPopUp').remove();
    //   $('body').append(pricePopup);
    //   if (prompt_to_edit.length) {
    //     $('#title_heading >h5').text('Edit your prompt');
    //     if (prompt_to_edit[0].price > 0) {
    //       $('#new_prompt_price').val(prompt_to_edit[0].price);
    //       price = $('#new_prompt_price').val();

    //     }
    //   }
      
    // }

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



    for (let i = 0; i < extra_parent_prompts.length; i++) {
      let data = extra_parent_prompts[i];


      $("#main_div").append(`<div class='col-lg-4 main_public_prompt_div' style="display:flex;width:100%;height: 280px;max-width:500px"  >

      <div class=" hidediv" id='${data._id}'  style="border-radius:8px;border:1;background-color:#000;width:100%;box-shadow:1px 0px 3px 3px #28a47a77;">
     
      <div style="display:flex;width: 100%;" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <p style="color:#FFFFFF;width: 100%;">  &nbsp <span style="text-decoration:underline;color:#FFFFFF"> ${data.author} </span>  </p>
          <div style="display:flex;gap:30px">
          <button class='buybtn' id='${data._id}' style="width:60px; visibility:hidden; border-radius:10px;color:white;background-color:#00C28C;border:2px solid #00C28C;height:30px"> Buy </button>
          <button class='heart' id=${data._id} type='button'> <svg  style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg> </button>
      </div>
      </div>
     

  <div class="promptcard" id=${data._id}  >
      <h2 style="color: #00c08b; height:60px;overflow:hidden;"> ${data.title} </h2>
      
      

      <div style="margin-top:5px">
          <p style="color:	#FFFFFF;height: 65px;overflow: hidden;">  ${data.teaser} </p>
      </div>
  </div>

  <div class="my-3" style="display:flex;justify-content:space-between;align-items:center;position:relative;top:35px;color:#FFFFFF">
      

    <div class="d-flex mx-2" style="gap:10px">
          <div style="display:flex"><button id=${data._id} class='publicupvote' type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${Math.ceil(data.likes)}  </p>
          </div>
          
      </div>



       <div class='d-flex mx-2'  >  <button type='button' class='views' id=${data._id} >  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>  </button>  <p> &nbsp  ${data.views} </p>  </div>

      <div class='d-flex mx-2'> <img src="${comment}" alt="vCiKz.png" border="0" /> <p> &nbsp ${data.comments} </p>  </div>

       
     


     

      
  </div>
      </div>`)








    }


  }





  $(document).on('click','#log_in',function(){
chrome.runtime.sendMessage({type:'logging_in', email:email },function(response){
  window.location.reload();
})
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

    $('body').append(popUp7)

    $('#new_prompt_author').val(author);
    $('#description')[0].innerHTML = teaser;
    $('#category')[0].innerHTML = topic + '.' + subtopic;
    // console.log(teaser);

    $('#btn_stack_prompt').before(`<div id='prompt_details' style="width: 300px;
        height: 130px;
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
         <h5 style="color: #02a577; margin-left: 8px;">    Free Plan </h5>  </div> 
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
                     <button type="button"> <img id='clear_prompt' src="${trashbin}" alt="vCiKz.png" border="0" /> </button>  </div>
                     </div>
      

       <div style="margin-left:20px;
                  display: flex;
                  justify-content: space-between;">
       <div> <h4 style="color:#02a577;margin-left:4px"> ${title.length >= 10 ? title.substr(0, 25).concat('....') : title} </h4> </div>
      </div>

      <div style="margin-left:20px;margin-top:5px"> <p style="color:white;margin-left:4px;font-size:12px"> ${topic} <span> . </span> ${subtopic}  </p> </div>

       
      

        
        </div>
       
        
        `)


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
         <h5 style="color: #02a577; margin-left: 8px;">    Free Plan </h5>  </div> 
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
    document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:#00C28C !important';
    document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:black !important';
    $('#writingStyleSelect').empty();
    $('#writingStyleSelect').append(`<option value='GPT3'> ChatGPT-3.5 </option>
    <option value='GPT4'> ChatGPT4 </option>  `)
    
  })

  $(document).on('click', '.relative.flex.w-full.items-center.justify-center.gap-1.rounded-lg.border.py-3:eq(1)', function () {
    gpt_mode = 'GPT4';
    document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:black !important';
    document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:#00C28C !important';
    $('#writingStyleSelect').empty();
    $('#writingStyleSelect').append(`<option value='GPT4'> ChatGPT4 </option>
    <option value='GPT3'> ChatGPT3.5 </option>  `)

  })



  $(document).on('mouseenter','#custom_gpt_mode_div',function(){
     
   
      // $('#custom_gpt_mode_div').hide()
      // $(`${gpt_mode_selector_div} >div  `).eq(0).css('z-index', '10000');

      // if (gpt_mode == 'GPT3') {
      //   document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:#00C28C !important'

      //   document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:black !important'
      // }
      // else if (gpt_mode == 'GPT4') {
      //   document.querySelectorAll(gpt_mode_selector)[1].style.cssText += 'background:#00C28C !important'
      //   document.querySelectorAll(gpt_mode_selector)[0].style.cssText += 'background:black !important'
      // }
         
    

  })

  $(document).on('mouseenter','#main_screen_div',function(e){
   
// console.log(gpt_mode);
//     $(`${gpt_mode_selector_div} >div` ).eq(0).css('z-index', '0');
//     $('#custom_gpt_mode_div').show();
//     if (gpt_mode == 'GPT3') {
//       $('#gpt_3').css('background','#00C28C');
//       $('#gpt_4').css('background', 'black');
      
    
//     }
//     else if (gpt_mode == 'GPT4') {
//       $('#gpt_4').css('background', '#00C28C');
//       $('#gpt_3').css('background','black');
     
//     }

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
    if ($('.hidediv').length) {
      $('.hidediv').hide();
    }
    $('#promptbtn').prop('disabled', true);

    $("body").append(popUp);
  });

  $(document).on("click", "a", function () {
   

    if (this.className == gpt_new_chat || this.children[0].className == 'flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0') {
      setTimeout(()=>{

        gpt_mode='3.5';
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
          $("textarea").eq(0).parent().css("margin-left", "42%");
          $('textarea').eq(0).parent().addClass('text_area_to_center');
          $("textarea").eq(0).parent().css("color", "#FFF");

          document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';

          $('form').parent().css('z-index', '1000');
          $('form').parent().css('background', 'black');
          // $('form').parent().css('position','sticky');



          $('form').parent().css('z-index', '1000');
          $('form').parent().css('background', 'black');
          // $('form').parent().css('position', 'sticky');


          var styleEl = document.createElement("style");
          styleEl.innerHTML = css_inline;
          document.head.appendChild(styleEl);
          document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background='black';


          clearInterval(start);



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
            $('#gpt_4').css('background', '#00C28C');
            $('#gpt_3').css('background', 'black');
          }
          else if (gpt_mode == 'GPT3') {
            $(gpt_mode_selector).eq(0).click();
            $('#gpt_4').css('background', 'black');
            $('#gpt_3').css('background', '#00C28C');
          }


          $("textarea").keydown(function (e) {
            if (e.keyCode == 13) {
              e.preventDefault();
              submit1();
            }
          });


      },2000)})
     

         
         
          
          

      

       


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










  $('textarea').eq(0).parent().css("margin-left", "42%").addClass('text_area_to_center');
  $('textarea').eq(0).parent().css("color", "#FFF");
  document.querySelectorAll('textarea')[0].parentNode.style.cssText += 'background:black !important';
 

  var styleEl = document.createElement("style");
  styleEl.innerHTML = css_inline;
  document.head.appendChild(styleEl);
  document.querySelectorAll('.overflow-hidden.w-full.h-full.relative')[0].firstChild.style.background = 'black';

  
    
    setTimeout(()=>{
      Intialize_mainscreen_elements();
    },2000)
      

  
    




 
  function Intialize_mainscreen_elements() {

    chrome.runtime.sendMessage({ type:'fetching_selectors'},function(response){
    
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

    

$('nav').eq(0).addClass('custom_nav');



      chrome.runtime.sendMessage({ type: "checking_user", user_email: email }, function (response) {
        if (Object.keys(response.data).length === 0) {
          $(gpt_submit_selector).css("visibility", "hidden");
          isUserLoggedIn=false;
          
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
            $('body').append(` ${feature_popup}
                
           <div id='connect_with_openai_div' style="width: 428px;
                                                     height: 464px;
                                                     position: fixed;
                                                     left: 58%;
                                                     top: 20%;
                                                     background: black;
                                                     box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px;"
  >
    <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='connect' style="display: flex;
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
            `)
          })
          $(document).on('click','#ownbutton',function(){
            if($('#feature_div').length){
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length){
              $('#connect_with_openai_div').remove()
            }
            blur_background();
            $('body').append(` ${feature_popup}
                
            <div id='connect_with_openai_div' style="width: 428px;
                                                     height: 464px;
                                                     position: fixed;
                                                     left: 58%;
                                                     top: 20%;
                                                     background: black;
                                                     box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px;"
  >
    <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='connect' style="display: flex;
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
            `)

          })

          $(document).on('click','#Purchase',function(){
            blur_background();
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }
            $('body').append(` ${feature_popup}
                
           <div id='connect_with_openai_div' style="width: 428px;
                                                     height: 464px;
                                                     position: fixed;
                                                     left: 58%;
                                                     top: 20%;
                                                     background: black;
                                                     box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px;"
  >
    <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='connect' style="display: flex;
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
            `)
          })

          $(document).on('click','#Favourite',function(){
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }
            blur_background();
            $('body').append(` ${feature_popup}
                
            <div id='connect_with_openai_div' style="width: 428px;
                                                     height: 464px;
                                                     position: fixed;
                                                     left: 58%;
                                                     top: 20%;
                                                     background: black;
                                                     box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px;"
  >
    <div style="display:flex;justify-content:flex-end" >  <img id='crossbtn' src='${cross}' style="padding-top: 4.25%;
            cursor:pointer;
            padding-right: 4.25%;"  alt='cross_btn' />  </div>
    <div style="margin-top:30px;display:flex;justify-content:center" > <img src='${prompt_ai_logo}' alt='prompt_ai_logo' /> </div>
    <div style="display:flex;justify-content:center;margin-top:17px"> <h3 style="color:white"> Sign In with </h3>  </div>
    <div style="display:flex;justify-content:center" > <h3 style="color:#00C28C"> OpenAi </h3>  </div>

    <div id='connect' style="display: flex;
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
            `)
          })


          $(document).on('click','#crossbtn',closing_connect_open_ai_popup)


          


        }
       
        else if (response.data.status ==='logged_out'){
          isRegistered=true;
          $(gpt_submit_selector).css("visibility", "hidden");
           isUserLoggedIn=false;
          if ($(gpt_mode_selector).length) {
            is_premium = true
          }
          $("textarea").eq(0).parent().append(our_submit_button);
          appending_side_menu()
          main_screen_for_user_not_logged_in();

          $(document).off('mouseenter', '.promptcard');
          $(document).off('mouseenter', '.hidediv');
          $(document).off('mouseleave', '.hidediv');
          $(document).off('mouseleave', '.promptcard');

          $(document).on('click','.hidediv',function(){
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }
            
            blur_background();
            $('body').append(` ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 428px;
                                                      height: 464px;
                                                      position: fixed;
                                                      left: 58%;
                                                      top: 20%;
                                                      background: black;
                                                      box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px">
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
            
            
           `)
            
          })

          $(document).on('click', '#ownbutton', function () {
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }

            blur_background();
            $('body').append(` ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 428px;
                                                      height: 464px;
                                                      position: fixed;
                                                      left: 58%;
                                                      top: 20%;
                                                      background: black;
                                                      box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px">
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
            
            
           `)

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
            $('body').append(` ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 428px;
                                                      height: 464px;
                                                      position: fixed;
                                                      left: 58%;
                                                      top: 20%;
                                                      background: black;
                                                      box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px">
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
            
            
           `)
          })

          
          $('#Favourite').click(function(){
            if ($('#feature_div').length) {
              $('#feature_div').remove()
            }
            if ($('#connect_with_openai_div').length) {
              $('#connect_with_openai_div').remove()
            }

            blur_background();
            $('body').append(` ${feature_popup}
             
             <div id='connect_with_openai_div' style="width: 428px;
                                                      height: 464px;
                                                      position: fixed;
                                                      left: 58%;
                                                      top: 20%;
                                                      background: black;
                                                      box-shadow:rgba(40, 164, 122, 0.467) 5px 0px 3px 3px">
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
            
            
           `)
          
          })
            






          $(document).on('click', '#crossbtn', closing_connect_open_ai_popup)

          
      

        }

        

        else {

          if ($(gpt_mode_selector_div).length) {
            is_premium = true;
          }

          
         
          userId = response.data._id;
          userInfo = response.data;
          if ($('#main_screen_div').length) {
            $('#main_screen_div').remove();
          }
          $('main').eq(0).prepend(`<div style="position:absolute;width:100%;height:100%;z-index:999;background-color:black;overflow-y:auto" id='main_screen_div' >  </div> `)
            
          // if(is_premium===true){
          //   $('.relative.flex.flex-col.items-stretch.justify-center.gap-2 >div ').eq(0).css({
          //     'z-index':'100000',
          //     'background':'black'
          //   });
          // }

          $('#main_screen_div').eq(0).append(
            `<div id='top_bar' style="width:100%;margin-left: 0%;"><div id='menu'  style="width:100%;display:flex;align-items:start;margin-top:15px; justify-content:space-between;padding-inline:1%" >  <div class="input-group" style="display:flex;justify-content:center;width:700px"> <input type='text' id='searchbar' style="      border-color: #39b291;
            border-radius: 15px;
            width: 700px;
           display:none;
            background-color: black;
            color: white;
            height: 60px;" placeholder='Search Prompt' /> <div class="input-group-append" style="    position: absolute;
            margin-left: 650px;
            margin-top: 22px;" > <button id='search_button'  type="button" style="display:none"   >  <svg id='searchbtn' style="color:#28a47a;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> </button> </div> </div> 
              <div style="display: flex;
                          position: relative;
                          right: 45px;
                          top: 10px;">
                           <div style="padding-top:10px;margin-left: 40px;">  <img id='search_icon' src='${search_icon}' style="cursor:pointer" />  </div>
              <div style="    margin-right: 60px;padding-top:10px;margin-left: 40px;"> <b> <svg style="border-color:#39b291;color:#39b291" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg> </b>  </div> <div style="position: relative;" >  <img id='profile_icon' style="border-radius:50%" src=${image} height='50px' width='40px' alt='Image to be shown' /> </div></div> 
               </div>
          </div>
          <div id="loading_gif_2" style="display:none; z-index: 10000000">
                <img style="height: 60px;
                            position: fixed;
                            top: 45%;
                            left: 47%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>
          `
          );

          if(is_premium===true){
            // $(`${gpt_mode_selector_div} >div `).eq(0).css('background', 'black');
           
            // $('#top_bar').prepend(`<div id='custom_gpt_mode_div' style="display: flex;
                                               
            //                                    position: absolute;
            //                                    left: 41%;
            //                                    width: 296px;
            //                                    background: black;
            //                                    height: 54px;border-radius:0.5rem" > <button id='gpt_3' style="color:white;width:50%;background:${gpt_mode == 'GPT3' ? '#00c08b':'black'};color:white;border-radius:10px;margin:1%" >  GPT-3.5 </button> 
            //                                    <button id='gpt_4' style="color:white;width:50%;background:${gpt_mode == 'GPT4' ? '#00c08b' : 'black'};color:white;border-radius:8px;margin:1%" >  GPT-4 </button>
            //                                    </div>`)
                                        
          }

          $('#top_bar').before(`<a style="color:white;display:none" id='navigating_to_top' href='#'> Navigate to me </a>`)

          $('#main_screen_div').append(`<div id="logout_div" style="position: absolute;
          z-index: 10;
          top: 66px;
          cursor: pointer;
          float: right;
          width: max-content;
          box-shadow: 1px 0px 4px 2px #39b291;
          font-size: 15px;
          padding: 10px;
          background-color: rgb(251, 251, 251);
          right: 10.2px;
          background: black;">
          <span id="account" style="color:white" >Account</span><br>
          <span id="btn_logout" style="color:white">Logout</span><br>
          <span id="btn_payment_plan" style="display: none;">Payment Plan</span>
        <span id="btn_manage" style="color:white">Manage Subscription</span></div>`)

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
              appending_side_menu();




            }
            );

          }



          let is_user_favourite_prompts = JSON.parse(sessionStorage.getItem('user_favourite_prompts'));
          if (is_user_favourite_prompts) {
            global_api_response = JSON.parse(sessionStorage.getItem('global_api_response'));
            user_prompts = JSON.parse(sessionStorage.getItem('user_prompts'));
            all_prompts = JSON.parse(sessionStorage.getItem('all_prompts'));
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

              all_prompts = response.data.all_prompts;
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

                  }
                );

              });
            });

          }





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
        chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page }, function (response) {
          
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
  $('#connect_with_openai_div').remove();
  $('#feature_div').remove();
  $('#publicbutton').click()
 

}