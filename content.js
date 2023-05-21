var is_premium=false;
var user_request_count=0;
var user_prompt_history;
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



  $(document).on('click','#Advance_filters',function(){
    $('#menu-tabs').toggle();
  })


  
//Filters calling
  $(document).on('keyup', '#searchbar', searchbar_filter );

  $(document).on('change', '#Subcategories_filter', sub_categories_filter);
  
  $(document).on('change', '#Category_filter', function () {
    price_filter = false;
    free_filter = false;
   categories_filter();
  })




//SubmitButton
  const submit1 = () => {
    data = $("textarea").val();
    let text_data=$('textarea').val();
    if (!data) {
      return alert("Please Enter some data in the textfield");
    }
    else {

      currentLang = $("#languageSelect").find(":selected").val();
      if (template_content) {
        data = template_content.replace("[Prompt]", data).replace('[Language]', currentLang);
      }

      $("textarea").val(data);
      $('#top_bar').hide();
      template_content = '';
        
      

     

      $(".flex-1 .overflow-hidden >div >div >div").eq(0).css("background-color", "#FFFFFF");


      $(".absolute.p-1").click();



      let check_user_request = setInterval(() => {
        if ((document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')[1]?.textContent == 'Stop generating')) {
          $('.flex.flex-col.items-start.gap-4.whitespace-pre-wrap.break-words').eq(user_request_count).text(text_data);
          user_request_count=user_request_count+2;
          clearInterval(check_user_request);
        }


      }, 300)

      if (csv_file_content) {
        chrome.runtime.sendMessage({ type: "file_handling", data, csv_file_content }, function (response) {
          chat_bot_response = response.data;
        });
      }


      let regenerate_button = setInterval(() => {

        if (csv_file_content != '' && chat_bot_response != '' && (document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')[1].textContent == 'Stop generating' || document.querySelectorAll('.btn.relative.btn-neutral.border-0')[0].textContent == 'Stop generating')) {
          if (document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')[1]
            || document.querySelectorAll('.btn.relative.btn-neutral.border-0')[0]) {

            try {
              document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')[1].click();
            }
            catch (err) { }
            try {
              document.querySelectorAll('.btn.relative.btn-neutral.border-0')[0].click();
            }
            catch (err) { }

            $('.markdown.prose.w-full.break-words').text(chat_bot_response);

          }
        }


        if (document.querySelectorAll('.flex.w-full.gap-2.items-center.justify-center')[1]?.textContent == 'Regenerate response') {



          $('.markdown.prose.w-full.break-words').eq(prompt_no).after(`
              
              
              <div id='rating_div' style="display: flex;
                                          justify-content: flex-end;
                                          gap: 10px;
                                          align-items: center;
                                          width: 100%;
                                          margin-left: 200px;" >  
              <div> <p style="color:black"> How would you rate this prompt?  </div>
              <div  style="height: 40px;
                          border: 1px solid #202d29;
                          border-radius: 30px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          margin-top: 15px;
              ">  <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                  </svg>   </div>
                 


                   <div  style="height: 40px;
                          border: 1px solid #661d28;
                          border-radius: 30px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          margin-top: 15px;
              ">      <svg xmlns="http://www.w3.org/2000/svg" style="color:#e3364f" width="40" height="30" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                      </svg>   </div>




                   <div style="height: 40px;
                          border: 1px solid grey;
                          border-radius: 30px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          margin-top: 15px;
                          background: #grey;
              ">  <svg style="color:lightgrey" xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                  </svg>   </div>
              </div>`)
          prompt_no++;
          clearInterval(regenerate_button);

          $(".flex-1 .overflow-hidden >div >div >div").eq(0).css("background-color", "#FFFFFF");
          $(".absolute.p-1").css("visibility", "hidden");
          if ($("#language-select-wrapper").length > 0) {
            $("#language-select-wrapper").remove();
          }
          $("form > div > div").eq(1)
            .prepend(lang_wrapper);
          $(".flex .py-2   ").eq(0).css("margin-left", "150px");
          if ($("#mybutton").length > 0) {
            $("#mybutton").remove();
          }
          $("form >div>div").eq(1)
            .append(our_submit_button);
          if (prompt_selected) {

            if ((prompt_selected[0].cID && !prompt_selected[0].pID) ||  (!prompt_selected[0].cID && !prompt_selected[0].pID )){
              $('.prompt_ai_logo').prop('disabled',true);
              chrome.runtime.sendMessage({ type: "inserting_user_prompt_history", prompt_id:prompt_selected[0]._id, user:userId }, function (response) {
                
                chrome.runtime.sendMessage({ type: "fetching_user_prompt_history", user: userId }, function (response) {
                  user_prompt_history = response.data.user_prompt_history;
                  $('#Prompt_history_div').empty();

                  for (let i = 0; i < user_prompt_history.length; i++) {
                    let data = user_prompt_history[i];
                    $('#Prompt_history_div').append(` 
               <div style="display:flex;align-items:center;margin-left:15px;margin-top:15px"> 
               <img src="${prompt_history}" alt="vCiKz.png" border="0" />
               <p style="color:white;margin-left:5px"> ${data.prompt_id.title.length >= 15 ? data.prompt_id.title.substr(0, 19).concat('...') : data.prompt_id.title}   </p>
                </div>
               `)
                  }

                  $('.prompt_ai_logo').prop('disabled', false);

                })
              });
            }


            if (prompt_selected[0].cID > 0) {
              childPrompt = global_api_response.filter(
                (item) => item.pID === prompt_selected[0].cID
              );
              if (childPrompt.length === 0) {
                childPrompt = user_prompts.filter((item) => item.pID === prompt_selected[0].cID);
              }

              if (childPrompt[0].file_content !== undefined) {

                csv_file_content = childPrompt[0].file_content;

              }

              if (childPrompt[0].hint) {
                $("textarea").prop("placeholder", childPrompt[0].hint);
              }
              template_content = childPrompt[0].template;
              if ($("#authordiv").length > 0) {
                $("#authordiv").remove();
              }
              $(".AIPRM__flex .AIPRM__w-full").prepend(`
                                      <div >
                                          <div id="authordiv" style="display:flex;">
                                              <div>
                                                  <p style="color:white;background-color:#565869"> ${childPrompt[0].title}  </p>
                                              </div>
                                              <div> <p> &nbsp by </p> </div>
                                              <div> <p > &nbsp <span style="text-decoration:underline" > ${childPrompt[0].author} </span> </p> </div>
                                          </div>
                                      </div>`);
              prompt_selected = childPrompt;
            }
            else {
              $("textarea").prop("placeholder", "Send a message");
              prompt_selected='';
            }
          }
        }
      }, 1000)
      // }, 2000);

    }
  };
    



  $(document).on('mouseenter', '.prompt_ai_logo', function () {
    $(this).css('cursor', 'pointer');
  })

  // Public Prompts being appended

  



  const fetchPublicPrompts = (e) => {

    

  };

  $(document).on('click', '.prompt_ai_logo', function () {
    document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0')[0].click()

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
    //  if ($(".main_public_prompt_div").length > 0) {
    //   $(".main_public_prompt_div").remove();
    // }
    // if($('#Pagination_div').length){
    //   $('#Pagination_div').remove();
    // }

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
  }

  $(document).on('click', '#clear_prompt', function () {
    $('#prompt_details').remove();
    clearInputs();
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

  const check_extra_prompts_in_database = () => {

    $('#loading_gif_2').show();
    chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page }, function (response) {

      extra_prompts = response.data.public_prompts;
      user_prompts = response.data.user_prompts;
      $('#loading_gif_2').hide();


    });

  }


  const fetchPersonalPrompts = () => {
    
    $("#promptbtn").show();
    btn_click = 'Private';
    page = 1;
    let personal_prompts = user_prompts.filter((item) => item.user === userId);
    let parentPrompts = personal_prompts.filter(
      (item) => (item.cID && !item.pID) || (!item.cID && !item.pID)
    );
    console.log(parentPrompts);
    if ($(".main_personal_prompt_div").length > 0) {
      $(".main_personal_prompt_div").remove();
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
          <div style="display:flex"><button id=${data._id} class='personalupvote' type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${data.likes}  </p>
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
          <div style="display:flex"><button id=${data._id} class='personalupvote' type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${data.likes}  </p>
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


  

  $(document).on("click", ".publicupvote",function(){

    chrome.runtime.sendMessage({
      type: "upvoting",
      id: $(this)[0].id
    }, function (response) {
      chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId }, function (response) {
        console.log(response);
        global_api_response = response.data.public_prompts;
        user_prompts = response.data.user_prompts;
        render_public_prompts();
      });
    });

  });

  $(document).on('click','#new_chat_div',function(){
    document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0')[0].click();

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

 $(document).on("click", ".personalupvote",  function(){
   chrome.runtime.sendMessage({
     type: "upvoting",
     id: $(this)[0].id

   }, function (response) {

     chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId }, function (response) {

       global_api_response = response.data.public_prompts;
       user_prompts = response.data.user_prompts;
       fetchPersonalPrompts();
     });

   });
 });

  // Favourite Prompts being appended here
  $(document).on("click", "#Favourite", function () {
    if ($(".main_public_prompt_div").length > 0) {
      $(".main_public_prompt_div").remove();
    }
    if ($(".main_personal_prompt_div").length > 0) {
      $(".main_personal_prompt_div").remove();
    }

    if ($(".favourite_public_prompt_div").length > 0) {
      $(".favourite_public_prompt_div").remove();
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
          <div style="display:flex"><button id=${data._id} class='publicupvote' type='button' > <img src="${uparrow}" alt="vCZC4.png" border="0" /> </button>
              <p>  &nbsp ${data.likes}  </p>
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
              <p>  &nbsp ${data.likes}  </p>
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

  $(document).on("click", ".personaldownvote", function () {


    let id = $(this)[0].id

    chrome.runtime.sendMessage({

      type: "downvoting",
      id: id
    }, function (response) {

      chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId }, function (response) {

        global_api_response = response.data.public_prompts;
        user_prompts = response.data.user_prompts;
        fetchPersonalPrompts();
      });

    });


  });

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


  //Increasing no of public down vote count.
  $(document).on("click", ".publicdownvote", function () {
    let id = $(this)[0].id

    chrome.runtime.sendMessage({

      type: "downvoting",
      id: id
    }, function (response) {

      chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId }, function (response) {
        console.log(response);
        global_api_response = response.data.public_prompts;
        user_prompts = response.data.user_prompts;
        render_public_prompts();
      });

    });

  });


  $(document).on('click', '#go_back_to_screen_1', function () {
    $('#openPopUp').remove();
    $('body').append(popUp)
    $('#new_prompt_title').val(title);
    $('#new_prompt_teaser').val(teaser);
  })

  $(document).on('click', '#go_back_to_screen_2', function () {
    $('#openPopUp').remove();
    $('body').append(popUp2);
    $('#new_prompt_template').val(template);

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
  })

  $(document).on('click', '#go_back_to_screen_5', function () {
    $('#openPopUp').remove();
    $('body').append(popUp6);
    if (url) {
      $('#new_prompt_file_url').val(url);
    }

  })

  $(document).on('change', '#new_prompt_file_url', function () {
    url = $(this).val();
  })

  $(document).on("click", "#Category", function () {
    $(this).addClass("focussed");
  });


  $(document).on("click", "#connect", function () {
    chrome.runtime.sendMessage({ type: "inserting_user", username, email, image }, function (response) {
      if (response) {
        window.location.reload();
      }
    });
  });

  $("textarea").keydown(function (e) {
    if (e.keyCode === 13) {
      submit1();
    }
  });

  $(document).on('mouseenter', '#next_page', function () {
    $(this).css('color', '#562c90');
  })

  $(document).on('mouseleave', '#next_page', function () {
    $(this).css('color', ' #28a47a');
  })


  $(document).on('mouseenter', '#back_page', function () {
    $(this).css('color', '#562c90');
  })

  $(document).on('mouseleave', '#back_page', function () {
    $(this).css('color', ' #28a47a');
  })
  $(document).on('mouseenter', '.hidediv', function () {
    $(this).css({
      'border': '4px solid #562c90',
      'box-shadow': ''


    });



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



  })

  $(document).on('mouseleave', '.hidediv', function () {
    $(this).css({
      'border': '',
      'box-shadow': '1px 0px 3px 3px #28a47a77'
    });

    let id = $(this)[0].id

    // let prompt_hovered=all_prompts.filter((item)=> item._id === id );

    let prompt_hovered = all_prompts.filter((item) => item._id === id);

    //  if(prompt_hovered.length===0){
    //   prompt_hovered=user_prompts.filter((item)=>item._id === id);
    //  }







    if (prompt_hovered[0].price > 0) {
      $(this).closest('.hidediv').find('.buybtn').css('visibility', 'hidden');


    }


  })

  //Updating View value of a prompt and appending prompt info in textarea
  $(document).on("click", ".promptcard", function () {

  

child_prompt_1=[];
child_prompt_2=[];
    chrome.runtime.sendMessage({ type: "increasing_views", id: $(this)[0].id }, function (response) {
      if (response) {

      }
    });

    // $('#hidediv').addClass('active');
    $('.hidediv').css('background-color', '');
    $(this).closest('.hidediv').css('background-color', '#003627');








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

  

    let prompt_stacking_info = []
    if (prompt_selected[0].cID > 0) {

      prompt_stacking_info = ([...prompt_selected]);
      child_prompt_1 = all_prompts.filter((item) => item.pID === prompt_selected[0].cID);
      prompt_stacking_info = ([...prompt_selected, ...child_prompt_1])
      
      if (child_prompt_1.length) {

        if (child_prompt_1[0].cID > 0){
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
      template_content = prompt_selected[0].template;
      $(".AIPRM__flex .AIPRM__w-full").prepend(`
                <div id="authordiv" class="prompt_stacking_div" style="display: flex;
              margin-bottom: 5px;
              padding-top: 30px;"" >
                
                </div>`);

              
      if ($('#user_image_div').length) {
        $('#user_image_div').remove();
      }

      $('#language-select-wrapper').append(`<div id='user_image_div' style="position: absolute;
            top: 10px;
            left: 30px; display:flex;" > <image src='${prompt_selected[0].user.image}' height='20px' width='20px' style="border-radius:50px"  />  
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
                         <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 2px;
                                      width: 30px;
                                      display: flex;
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

                         if(child_prompt_1.length){
                          if (child_prompt_2.length===0){

                            $('.prompt_stacking_div').append(`
                         <div  id="prompt_stacking_div_2" style="height: 50px;
                         
                        
                         display: flex;
                         align-items: center;
                         border-radius: 15px;
                         
                         margin-left:10px">
                          <p style="color:white;margin-left:10px"> ${child_prompt_1[0].title.length >= 19 ? child_prompt_1[0].title.substr(0, 19).concat('...') : child_prompt_1[0].title}  </p> </div>
                         
                          

                          
                          
                          `)


                          }
                          else{

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
                if($('#user_image_div').length){
                  $('#user_image_div').remove();
                }

      $('#language-select-wrapper').append(`<div id='user_image_div' style="position: absolute;
            top: 10px;
            left: 30px; display:flex;" > <image src='${prompt_selected[0].user.image}' height='20px' width='20px' style="border-radius:50px"  />  
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



  });








  $(document).on("click", "#ownbutton", fetchPersonalPrompts);
  // Public prompts being appended
  $(document).on("click", "#publicbutton", render_public_prompts);
  $(document).on("click", "#mybutton", submit1);



  var doc_reader= function greet() {
    console.log("hello");
  }

  $(document).on('click', '#file_upload_button', function(){
    $('#file_select_input').click();
  });


 $(document).on("change", "#file_select_input", function (evt) {
    var files = evt.target.files;
    let filename=files[0].name;
    
    // Check if file is CSV
    if (files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      
      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function () {
        file_content = reader.result;
        
      };
      $("#openPopUp").remove();
      $('body').append(popUp6);
      $('#file_text_name').text('');
      $('#file_text_name').text(filename);
    }

    else if (files[0].type === "text/csv"
      || files[0].type === "application/msword"
      || files[0].type === "text/plain") {
      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function () {
        file_content = reader.result;
      };
      $("#openPopUp").remove();
      $('body').append(popUp6);
        $('#file_text_name').text('');
      $('#file_text_name').text(filename);
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

  $(document).on('change', '#new_prompt_teaser', function () {
    teaser = $(this).val();
    console.log(teaser);
  })
  $(document).on("keyup", "#new_prompt_title", function () {

    title = $(this).val();
    let data = console.log($('#max_title_char_length').text());
    data--;
    console.log(max_char_title);
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

  $(document).on("click", "#crossbtn", function () {
    $(".flex-1 .overflow-hidden").removeClass("blur-effect");
    $("nav").removeClass("blur-effect");
    clearInputs();
    count = 0;
    $("#openPopUp").remove();
    if ($('.hidediv').length) {
      $('.hidediv').show();
    }

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

    if (!title) {
      alert('Please enter inputs in the required area');

    } else {
      $('#openPopUp').remove();
      $('body').append(popUp2);
      if (template) {
        $('#new_prompt_template').val(template);
      }
      // for (let i = 0; i < categories.length; i++) {
      //   let data = categories[i];
      //   $("#select_topic").append(`<option  value="${data.name}" > ${data.name} </option> `);
      // }

    }
  });



  $(document).on('click', '#continue_to_prompt_screen_3', function () {

    // topic = $("#select_topic").find(":selected").val();
    // subtopic = $("#select_subtopic").find(":selected").val();
    // if (!hint || !topic || !subtopic) {
    //   alert('Please Enter the data in appropriate places');

    // }
    if (!template) {
      alert('Template cannot be left empty!');
    }
    else {
      $('#openPopUp').remove();
      $('body').append(popUp3)
      if (hint) {
        $('#new_prompt_Hint').val(hint);
      }

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


      else {
        $('#select_topic').prop('disabled', false);
        $('#select_subtopic').prop('disabled', false);
        for (let i = 0; i < categories.length; i++) {
          let data = categories[i];
          $("#select_topic").append(`<option  value="${data.name}" > ${data.name} </option> `);
        }
      }


    }
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






  $(document).on("click", "#formal_tone_select", function () {
    tone = 'Formal';
    $("#formal_tone_div").css("background", "#474646");
    $('#informal_tone_div').css('background', 'black');
    $('#appologetic_tone_div').css('background', 'black');
    $('#formal_tone_select').css('background-color', 'green');
    $('#informal_tone_select').css('background-color', '');
    $('#appologetic_tone_select').css('background-color', '');
  });

  $(document).on("click", "#informal_tone_select", function () {
    tone = "Informal";
    $("#informal_tone_div").css("background", "#474646");
    $('#formal_tone_div').css('background', 'black');
    $("#appologetic_tone_div").css("background", "black");
    $('#appologetic_tone_select').css('background-color', '');
    $('#formal_tone_select').css('background-color', '');
    $("#informal_tone_select").css("background-color", "green");
  });


  $(document).on("click", "#informal_tone_select", function () {
    tone = "Informal";
    $("#informal_tone_div").css("background", "#474646");
    $('#formal_tone_div').css('background', 'black');
    $("#appologetic_tone_div").css("background", "black");
    $('#informal_tone_select').css('background-color', '');
    $('#formal_tone_select').css('background-color', '');
    $('#appologetic_tone_select').css('background-color', '');
    $("#informal_tone_select").css("background-color", "green");
  });

  $(document).on("click", "#appologetic_tone_select", function () {
    tone = "Appologetic";
    $("#appologetic_tone_div").css("background", "#474646");
    $("#formal_tone_div").css("background", "black");
    $("#informal_tone_div").css("background", "black");
    $('#informal_tone_select').css('background-color', '');
    $("#appologetic_tone_select").css("background-color", "green");
  });

  $(document).on('click', '#continue_to_prompt_screen_4', function () {
    topic = $("#select_topic").find(":selected").val();
    subtopic = $("#select_subtopic").find(":selected").val();
    if (!hint || !topic || !subtopic) {
      alert('Please Enter the data in appropriate places');

    }



    else {
      console.log(topic, subtopic);
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
    }
  })

  $(document).on('click', '#continue_to_prompt_screen_5', function () {
    $('#openPopUp').remove();
    $('body').append(popUp6);

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

    if (!method) {
      alert('Please choose a method first!');
    }

    else if (method == 'Paid') {
      $('#openPopUp').remove();
      $('body').append(pricePopup);
    }

    else {
      $('#openPopUp').remove();
      $('body').append(popUp6)
      if (url) {
        $('#new_prompt_file_url').val(url);
      }
      // $('#new_prompt_author').val(author);
    }
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
              <p>  &nbsp ${data.likes}  </p>
          </div>
          
      </div>



       <div class='d-flex mx-2'  >  <button type='button' class='views' id=${data._id} >  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>  </button>  <p> &nbsp  ${data.views} </p>  </div>

      <div class='d-flex mx-2'> <img src="${comment}" alt="vCiKz.png" border="0" /> <p> &nbsp ${data.comments} </p>  </div>

       
     


     

      
  </div>
      </div>`)






      // $('.flex-1.overflow-hidden >div >div').eq(1).animate({ scrollTop: 400 }, 0);

    }


  }







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
        <div style="width:100%;display:flex;justify-content:center">
           <div style="
                          width: 8px;
                          height: 8px;
                          border: 0;
                          background: #28a47a;
                          border-radius: 3px;"
                          
                          ">
                          </div>
             </div>
             <div style="width:100%;display:flex;justify-content:center" >
            <div style=" border: 0;
                                      background: #28a47a;
                                      border-radius: 3px;
                                      height: 50px;
                                      width: 4px;
                                      display: flex;
                                      justify-content: center;
                                      " >  </div>
            </div>
        
        `)

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
    $(".flex-1 .overflow-hidden").addClass("blur-effect");
    $("nav").addClass("blur-effect");
    $("textarea").hide();
    if ($('.hidediv').length) {
      $('.hidediv').hide();
    }
    $("body").append(popUp);
  });

  $(document).on("click", "a", function () {
    if (this.className == 'flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0' || this.children[0].className == 'flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0') {
user_request_count=0;

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
      fetchCategories();

      let start = setInterval(() => {
        $("form>div>div").eq(1).css("margin-left", "42%");
        $("form>div>div").eq(1).css("color", "#FFF");
        document.querySelectorAll('form>div>div')[1].style.cssText += 'background:black !important';
            

        var styleEl = document.createElement("style");
        styleEl.innerHTML = css_inline;
        document.head.appendChild(styleEl);
        //Black border to entire screen
        $(".flex-1 .overflow-hidden >div >div >div").eq(0).css("background-color", "#050908");
        if ($(".text-gray-800 >h1 ").length && $(".text-gray-800 >div").length) {
          document.querySelectorAll(".text-gray-800 > h1")[0].style.display =
            "none";
          document.querySelectorAll(".text-gray-800 > div")[0].style.display =
            "none";
      


          Intialize_mainscreen_elements();

          // $(".flex-1 .overflow-hidden >div >div >div >div").eq(0).css("background-color", "#050908");

          clearInterval(start);






        }

        else if ($('.relative.flex.flex-col.items-stretch.justify-center.gap-2').eq(0).length) {
          console.log('yeah i am inside it');
          $('.relative.flex.flex-col.items-stretch.justify-center.gap-2').eq(0).remove();
          $('.text-4xl.font-semibold.text-center.mr-auto.flex.gap-2.items-center.justify-center.flex-grow').eq(0).remove();
          Intialize_mainscreen_elements();

          clearInterval(start);

        }

        $("textarea").keydown(function (e) {
          if (e.keyCode === 13) {
            submit1();
          }
        });


      }, 1000);
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

  console.log(email);
  fetchCategories();



  //Black border to entire screen
  $(".flex-1 .overflow-hidden >div >div >div").eq(0).css("background-color", "#050908");
  // $(".flex-1 .overflow-hidden >div >div >div >div").eq(0).css("background-color", "#050908");



  $("form>div>div").eq(1).css("margin-left", "42%");
  $("form>div>div").eq(1).css("color", "#FFF");
  document.querySelectorAll('form>div>div')[1].style.cssText += 'background:black !important';

  var styleEl = document.createElement("style");
  styleEl.innerHTML = css_inline;
  document.head.appendChild(styleEl);

  let start = setInterval(() => {
    if ($(".text-gray-800 >h1 ").length && $(".text-gray-800 >div").length) {
      document.querySelectorAll(".text-gray-800 > h1")[0].style.display =
        "none";
      document.querySelectorAll(".text-gray-800 > div")[0].style.display =
        "none";


      Intialize_mainscreen_elements();

      clearInterval(start);
    }

    else if ($('.relative.flex.flex-col.items-stretch.justify-center.gap-2').eq(0).length) {
      is_premium=true;
      
      $('.relative.flex.flex-col.items-stretch.justify-center.gap-2').eq(0).remove();
      $('.text-4xl.font-semibold.text-center.mr-auto.flex.gap-2.items-center.justify-center.flex-grow').eq(0).remove();
      Intialize_mainscreen_elements();

      clearInterval(start);

    }

  }, 1500);



  function Intialize_mainscreen_elements() {
    chrome.runtime.sendMessage({ type: "checking_user", user_email: email }, function (response) {
      if (Object.keys(response.data).length === 0) {

        


        $(".flex-1 .overflow-hidden >div >div >div").eq(1).prepend(`<div id='top_bar' style="max-width: 900px;margin-left: 0%;"><div id='menu' class='container' style="width:100%;display:flex;align-items:start;margin-top:15px;" >
                                                                        <div class="input-group" style="display:flex;justify-content:center">
                                                                            <input type='text' id='searchbar' style="border-color: #39b291;
                                                                                                                    border-radius: 15px;
                                                                                                                    width: 700px;
                                                                                                                    background-color: black;
                                                                                                                    color: white;
                                                                                                                    height: 60px;" placeholder='Search Prompt' /> <div class="input-group-append" style="position: absolute;
                                                                                                                                                                                                          margin-left: 650px;
                                                                                                                                                                                                          margin-top: 22px;" >
                                                                                <button type="button" id='searchbtn'  >  <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                                                </svg>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                         <div style=""> <button class="btn btn-info" style="    height: 30px;
                                                                                              margin-top: 30px;
                                                                                              background-color: #00c08b;
                                                                                              margin-top: -5px;
                                                                                              position: relative;
                                                                                              left: 50px;
                                                                                              top: 20px;" id="connect" type="button" class=""  > Connect with Openai  </button>  </div>
                                                                        `);



        $("#menu").after(`<div id='menu-items' style=" display:flex;justify-content:space-between;align-items:center;width:100%;margin-left:20px">
                          
                          </div>`);
        $("#menu-items").after(`<div  class="container" style="display:flex;align-items:start;width:100%;margin-top:35px" >
                                    <div style="display:flex; gap:15px">
                                        <div style="height:55px">
                                            <select id='Category' style="border-color:#28a47a;
                                                                        width: 250px;
                                                                        height: 100%;
                                                                        background-color:black;
                                                                        color:white;
                                                                        border-radius: 6%;"  id="Category">
                                                <option value="volvo" style="color:white">Category Content</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        <div>
                                
                                        </div>
                                
                                
                                        <div style="height:55px">
                                            <select id='sub-categories' style="border:2px solid #565a59;
                                                                                width: 250px;
                                                                                height: 100%;
                                                                                background-color:black;
                                                                                color:#565a59;
                                                                                border-radius:6%;"   >
                                
                                                <option value="audi">Sub category</option>
                                            </select>
                                        </div>
                                        <div>
                                        </div>
                                        <div style="height:55px">
                                            <select id='sub-categories' style="border:2px solid #565a59;
                                  
                                                                                height: 100%;
                                                                                background-color:black;
                                                                                color:#565a59;
                                                                                border-radius: 15%;"   >
                                
                                                <option value="audi">All Model</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> `);
        var main_div = `<div id='main_div' class="row" style="width: 100%;
                                                    margin-top: 15px;
                                                    margin-left: 40px;" ></div>`;
        $("h1").parent().append(main_div);


        chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId }, function (response) {
          console.log(response);
          global_api_response = response.data.public_prompts;



        
          $("#ownbutton").prop("disabled", true);
          $(document).off("click", ".promptcard");
          $(document).off("click", ".upvote");
          $(document).off("click", ".downvote");
          $(document).off("click", ".heart");
          $(document).off("click", "#Favourite");
          $("#ownbutton").prop("disabled", true);
          render_public_prompts();



        });

        $('#searchbar').prop('disabled', true);
        $('#searchbtn').prop('disabled', true);




      }
      else {
        console.log(response);
        userId = response.data._id;
        userInfo = response.data;

        // let className=$('.flex-1.overflow-hidden >div >div').eq(1).attr('class');
        //             $('.flex-1.overflow-hidden >div >div').eq(1).removeClass(className);
        //              $('.flex-1.overflow-hidden >div >div').eq(1).addClass('scroll_div');
        //              $('.scroll_div').css('height','100%');


        //              $('.flex-1.overflow-hidden >div >div').eq(0).css('overflow-y','auto');

        chrome.runtime.sendMessage({ type: "fetching_user_prompt_history", user: userId }, function (response) {
         user_prompt_history=response.data.user_prompt_history;

          


          if (document.querySelectorAll('.flex.h-full.w-full.flex-col.p-2')[0]) {
            $('.flex.h-full.w-full.flex-col.p-2').eq(0).css('background', '#050a08')
          }
          if (document.querySelectorAll('.flex.flex-col.gap-2.pb-2.text-gray-100.text-sm')[0]) {
            document.querySelectorAll('.flex.flex-col.gap-2.pb-2.text-gray-100.text-sm')[0].remove()
          }
          //This one is for new chat button
          if (document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0')[0]) {
            $('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0').eq(0).css('visibility', 'hidden')
          }
          if ($('.prompt_ai_logo').length) {
            $('.prompt_ai_logo').remove();
          }
          $('.flex.py-3.px-3.items-center.gap-3.text-white.cursor-pointer.text-sm.rounded-md.border.flex-shrink-0').eq(0).after(`<div class='prompt_ai_logo' style="position: absolute;
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
          $('.prompt_ai_logo').after(`<div class='sidebar_top_links' id='Dashboard_side_menu' > 
             <div style="margin-left:15px"> <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
             <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
             </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Dashboard </h5> </div>  
             </div>

             <div class='sidebar_top_links' id='Prompts_side_menu' > 
             <div style="margin-left:15px"> <img src="${chatgpt}" alt="vCZC4.png" border="0"  />  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Chat GPT </h5> </div>
             </div>
    
             `)

          if ($('#new_chat_div').length){
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

          if($('#Prompt_history_div').length){
            $('#Prompt_history_div').remove();
          }
                

          $('#new_chat_div').after(`<div id='Prompt_history_div' style="margin-left:49px;overflow-y:auto;margin-top: 10px;" > 
          
          </div>`)

         


              for(let i=0;i<user_prompt_history.length;i++){
                let data=user_prompt_history[i];
               $('#Prompt_history_div').append(` 
               <div style="display:flex;align-items:center;margin-left:15px;margin-top:15px"> 
               <img src="${prompt_history}" alt="vCiKz.png" border="0" />
               <p style="color:white;margin-left:5px"> ${data.prompt_id.title.length >=15 ? data.prompt_id.title.substr(0,19).concat('...') : data.prompt_id.title }   </p>
                </div>
               `)
              }

              
          $('#Prompt_history_div').after(`
           <div style="bottom:0;" id='spacing'>
               
             
             <div class='sidebar_bottom_links' id='Customers_request_side_menu'> 
             <div style="margin-left:15px"> <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                   <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                   </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Customers Request </h5> </div>
             </div>


             
             <div class='sidebar_bottom_links' id='Community_prompt_side_menu'> 
             <div style="margin-left:15px"> <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                   <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                   </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Community Prompt </h5> </div>
             </div>



             <div class='sidebar_bottom_links' id='Privacy_policy_side_menu'> 
             <div style="margin-left:15px"> <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                   <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                   <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                   </svg>  </div>  <div style="margin-left:5px"> <h5 style="color:white"> Privacy Policy </h5> </div>
             </div>



             <div class='sidebar_bottom_links' id='Terms_conditions_side_menu'> 
             <div style="margin-left:15px" > <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                   <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                   </svg> </div>  <div style="margin-left:5px"> <h5 style="color:white"> Terms and Conditions </h5> </div>
             </div>




             </div>
             
             </div>
             `)




             


          if (document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm')[1]) {
            document.querySelectorAll('.flex.py-3.px-3.items-center.gap-3.transition-colors.duration-200.text-white.cursor-pointer.text-sm')[1].remove();
          }
          if (document.querySelectorAll('.group.relative')[0]) {
            document.querySelectorAll('.group.relative')[0].remove()
          }


        }
        );



        $(".flex-1 .overflow-hidden >div >div >div").eq(1).prepend(
          `<div id='top_bar' style="max-width: 900px;margin-left: 0%;"><div id='menu' class='container' style="width:100%;display:flex;align-items:start;margin-top:15px;" >  <div class="input-group" style="display:flex;justify-content:center;width:700px"> <input type='text' id='searchbar' style="      border-color: #39b291;
            border-radius: 15px;
            width: 700px;
            background-color: black;
            color: white;
            height: 60px;" placeholder='Search Prompt' /> <div class="input-group-append" style="    position: absolute;
            margin-left: 650px;
            margin-top: 22px;" > <button type="button"  >  <svg id='searchbtn' style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg> </button> </div> </div> 
              <div style="display: flex;
                          position: relative;
                          right: 45px;
                          top: 10px;;">
              <div style="    margin-right: 60px;padding-top:10px;margin-left: 40px;"> <b> <svg style="border-color:#39b291;color:#39b291" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg> </b>  </div> <div style="position: relative;" >  <img style="border-radius:50%" src=${image} height='50px' width='40px' alt='Image to be shown' /> </div></div> 
               </div>
          </div>
          <div id="loading_gif_2" style="display:none; z-index: 10000000">
                <img style="height: 60px;position: absolute;top: 45%;left: 40%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>
          `
        );

        if(is_premium===true){
          $('#top_bar').css({
            "max-width":'',
            "width":"100%",


          })
          $('#menu').removeClass('container');


          $('#menu').css({
            "width":"100%",
            
            "padding-right":"5%"
          })

          $('#menu >div').eq(1).css({
            "position":"absolute",
            "right":"45px"
          })

         
        }



        $("#loading_gif_2").show();
        chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page }, function (response) {
          console.log(response);
          all_prompts = response.data.all_prompts;
          global_api_response = response.data.public_prompts;
          user_prompts = response.data.user_prompts;
          console.log(all_prompts);




          chrome.runtime.sendMessage(
            { type: "fetching_user_prompts", uId: userId },
            function (response) {
              user_favourite_prompts = response.data.favourite_prompts;


              chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page: page + 1 }, function (response) {

                extra_prompts = response.data.public_prompts;
                extra_parent_prompts = extra_prompts.filter((item) => (item.cID && !item.pID) || (!item.cID && !item.pID));
                all_prompts = ([...all_prompts, ...extra_prompts,]);




                user_prompts = response.data.user_prompts;
                $("#loading_gif_2").hide();

                $("#menu").after(`<div id='menu-items' style="display:flex;justify-content:space-between;align-items:center;width:100%;margin-left:20px">
                                      <div style="display: flex;
                                      justify-content: space-between;   
                                      align-content: flex-start;
                                      align-items: center;
                                      margin-top: 20px;
                                      position: relative;">
                                    <div style="display: flex;width: 700px;">
                                    <div style="display:flex;align-items:center" id='publicbutton' > <div> <img src="${star}" alt="vCZC4.png" border="0" /> </div>  <div >  &nbsp <span style="color:white;margin-left:5px">   All </span> </div> </div>
                            
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id='Favourite' > <div><img src="${saved}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Saved </span> </div> </div>
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id="Purchase" > <div > <img src="${purchased}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Purchased </span> </div> </div>
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id='ownbutton' > <div><img src="${created}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Created </span> </div></div>
                                    </div>
                                    <div style="    position: relative;
                                                    right: 25px;">
                                        <button id='promptbtn' class='create_new_prompt_btn' style="background-color: #00c08b;height: 40px;width: 150px;border-radius: 11px;padding-left: 10px;color: white;padding: 5px;">
                                            <div id='prompt' style="padding-right:20px">
                                                <svg id='mysvg' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="float: left;
            margin-left: 10px;
            margin-top: 4px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                New prompt
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            
                            
                            </div>`);

if(is_premium===true){
  $('#menu-items').css({
    "justify-content": 'flex-end',
    
    "width":"",
   
  })
  $('#menu-items >div').eq(0).css({
    "width":"100%",
    
  })

  $('#menu-items >div >div ').eq(1).css({
    "position": "absolute",
    "right": "25px"
  })

}
              


                var Filter_Selection = `<div id="menu-tabs" class="container" style="display:flex;justify-content:center;align-items:center;width:100%;margin-top:35px;" >
                                      <div style="display:flex; gap:15px;margin-left:35px">
                                          <div style="height:55px">
                                              <select id='Category_filter' style="border-color:#28a47a;
                                                                          width: 250px;
                                                                          height: 100%;
                                                                          background-color:black;
                                                                          color:white;
                                                                          border-radius: 6%;" >
                                                  <option value="none" style="color:white">Category Content</option>
                                                  
                                              </select>
                                          </div>
                                          <div>
                                  
                                          </div>
                                  
                                  
                                          <div style="height:55px">
                                              <select id='Subcategories_filter' style="border:2px solid #565a59;
                                                                                  width: 250px;
                                                                                  height: 100%;
                                                                                  background-color:black;
                                                                                  color:#565a59;
                                                                                  border-radius:6%;"   >
                                  
                                                  <option value="none">Sub category</option>
                                              </select>
                                          </div>
                                          <div>
                                          </div>
                                          <div style="height:55px">
                                              <select id='Model' style="border:2px solid #565a59;
                                    
                                                                                  height: 100%;
                                                                                  background-color:black;
                                                                                  color:#565a59;
                                                                                  border-radius: 15%;"   >
                                  
                                                  <option value="none">All Model</option>
                                              </select>
                                          </div>
                                          <div style="height:55px;display:flex;align-items:center">
                                              <div style="width: 50px;
                                                              height: 40px;
                                                              display: flex;
                                                              margin-left:25px;
                                                              
                                                          justify-content:center" >
                                                  <button id='All_filter_button' type="button" style="color:white;width:100%;
                                                          background-color:#595d5c;
                                                          border-radius:35%;">  All </button>
                                              </div>
                                              <div style="width: 50px;
                                                              height: 40px;
                                                              display: flex;
                                                              margin-left:15px;
                                                              
                                                          border-radius:35%;
                                                          justify-content:center">
                                                  <button id='Free_filter_button' type="button" style="color:white;width:100%;border-radius:15px">  Free </button>
                                              </div>
                                              <div style="width: 50px;
                                                              height: 40px;
                                                              display: flex;
                                                             margin-left:10px
                                                              
                                                          border-radius:35%;
                                                          justify-content:center">
                                                  <button id='Paid_filter_button' type="button" style="color:white;width:100%;border-radius:15px">  Paid </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div> `
                  
                $('#menu-items').after(`<div id='Advance_filters' style="margin-left: 20px;margin-top: 16px;margin-bottom: 7px;"> <p style="color:green"> Advance Filters  </p>  </div>`)

                $("#Advance_filters").after(Filter_Selection);

                $('#menu-tabs').toggle(false);

                if(is_premium===true){
                  $('#Advance_filters').css('width','10%');
                }

              

                for (let i = 0; i < categories.length; i++) {
                  let data = categories[i];
                  $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
                }




                $(".absolute .p-1").css("visibility", "hidden");
                
           
                $("form >div>div").eq(1).append(our_submit_button);



                $("form > div > div").eq(1).prepend(lang_wrapper);


                var main_div = `<div id='main_div' class='row container' style="width: 100%;
                                                    margin-top: 15px;
                                                    margin-left: 35px;" ></div>`;

                // if(!$("h1").parent().length)
                if ($(".text-gray-800 >h1 ").length && $(".text-gray-800 >div").length) {

                  $("h1").parent().append(main_div);
                  render_public_prompts();

                }
                else {

                  main_div = `<div id='main_div' class='row'  style="margin-top:15px;"></div>`

                 $('#top_bar').after(main_div);
                  render_public_prompts();

                }





              });








            }
          );






        });











        $("#ownbutton").prop("disabled", false);








      }
    });
  }





  // personal prompts being appended






  // _________________
});

