//This file contains popup raw data.


var popUp = `<div id="openPopUp" style="  height: 500px;
              background-color: black;
              width: 400px;
              position: fixed;
              top: 5%;
              left: 45%;
              margin-top: 34px;
              z-index: 100000;
              padding: 25px 14px;
              border: 0px solid #28a47a;
              box-shadow: 0px 2px 30px 3px #28a47a77;
              overflow: auto;
              border-radius: 20px;
              color: white;">

            <div id='crossbtn' class='my-2'  >
            <span style="
              right: 17px;
              font-size: 13px;
              position: absolute;
              top: 31px;
              cursor:pointer;
              color: #28a47a;"  >
            &#10006;
            </span>
            </div>

            <div id="create_prompt_screen_1">
            <div id="title_heading" style="margin-left: 30%;">
            <h5>CREATE PROMPT</h5>

            </div>
            <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
            <div class="line-1 step_bar_single_completed" style="width:5%" ></div>
            
            </div>
            <div id="pubpvt_tab" style="margin-left: 29%;padding-top: 20px;">
            <button id='public_btn' style="background: #474646;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;">Public</button>
            <button id='private_btn' style="background: black;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;">Private</button>
            </div>
            <div id="new_prompt_title_div" style="display: grid;border: 2px solid #28a47a;margin-top: 30px;border-radius: 15px;">
            <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Title</span>
            <input id='new_prompt_title'  type='text' maxlength='150'   style="background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 30px;box-shadow: none;" placeholder='Create Powerful Youtube Script in...'  />
            </div>
            <div style="display:flex;justify-content:flex-end"> <p id='max_title_char_length' style="color: white;
            font-size: 12px;
            margin-right: 20px;"> ${max_char_title}  characters  </p>    </div>
            <div style="border: 2px solid #28a47a;margin-top: 30px;border-radius: 15px;">
            <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Description</span>
            <textarea  maxlength="250" id='new_prompt_teaser' style="color:white;margin-left: 8px;background-color: transparent;border-radius:5px;font-size: 12px;width: 98%;height: 142px;border: none;font-size: 12px;box-shadow: none;" placeholder='Use this space to create an enticing description that draws users in understanding what your prompt does' ></textarea>
            </div>
            <div style="display:flex;justify-content:flex-end"> <p id='max_char_teaser_length' style="color: white;
            font-size: 12px;
            margin-right: 20px;"> ${max_char_teaser} characters </p>  </div>
            <button id='continue_to_prompt_screen_2' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left: 35%;position:absolute;bottom:20px;">Continue</button>

            </div>
            </div>`


var popUp2 = ` <div id="openPopUp" style="  height: 500px;
                background-color: black;
                width: 400px;
                position: fixed;
                top: 5%;
                left: 45%;
                margin-top: 34px;
                z-index: 100000;
                padding: 25px 14px;
                border: 0px solid #28a47a;
                box-shadow: 0px 2px 30px 3px #28a47a77;
                overflow: auto;
                border-radius: 20px;
                color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                cursor:pointer;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

              <div>  <button id='go_back_to_screen_1' style="color:#28a47a" > Back </button>  </div>

              <div id="create_prompt_screen_2">
              <div id="title_heading" style="margin-left: 30%;">
              <h5>CREATE PROMPT</h5>

              </div>
              
              

              <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
              <div class="line-1 step_bar_single_completed" style="width:40px" ></div>
              
              </div>

              
             <div style="border: 2px solid #28a47a;margin-top: 30px;border-radius: 15px;">
             <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Template</span>
            <textarea placeholder='This is where the magic happens, Ensure your variables are in [Brackets] Eg:[Prompt],[Topic],[Subject] You can have more than one variable Eg: [Language], [Tone],[Age],[Height] Be detailed and specific; the more context you provide the better the result. For more help, click the link below.' id='new_prompt_template' style="color:white;margin-left: 8px;background-color: transparent;border-radius:5px;font-size: 12px;width: 98%;height: 175px;border: none;font-size: 12px;box-shadow: none;"></textarea>
           
            
              </div> 

              <div style="display:flex;gap:10px;
                          margin-top: 10px;
                          margin-left: 40px;">
              <div> <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> </div>
              <div> <h4 style="color:white;text-decoration:underline"> Learn how to create  prompts </h4> </div>
              </div>

              
              
              <button id='continue_to_prompt_screen_3' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left: 35%;position:absolute;bottom:20px;">Continue</button>

              </div>
              </div>
              </div>`;











var popUp3 = `<div id="openPopUp" style="  position: fixed;
              height:500px;
              background-color:black;
              top: 5%;
              left: 45%;
              margin-top: 34px;
              z-index: 100000;
              padding: 25px 14px;
              border: 0px solid #28a47a;
              box-shadow: 0px 2px 30px 3px #28a47a77;
              border-radius: 20px;
              color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                cursor:pointer;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

              <div>  <button id='go_back_to_screen_2' style="color:#28a47a" > Back </button>  </div>

              <div id="create_prompt_screen_3">
              <div id="title_heading" style="margin-left: 30%;">
              <h5>CREATE PROMPT</h5>

              </div>
              <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
              <div class="line-1 step_bar_single_completed" style="width:25%" ></div>
            
              </div>

              <div id="new_prompt_Hint_div" style="display: grid;border: 2px solid #28a47a;margin-top: 30px;border-radius: 15px;">
              <div> <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Hint</span> </div>
              <div> <input id='new_prompt_Hint' type='text' placeholder='Ex: Makeup tutorial, Amazon FBA, etc'  style=" width:100%; background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 30px;box-shadow: none;" /> </div>
              </div>
              <div style="height: 70px;
              border: 2px solid #28a47a;
              margin-top: 30px;
              border-radius: 15px;">
              <div style="height:27px">  <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Category</span> </div>
              <div> <select style="width: 360px;
                        border-radius: 15px;
                        background-color: black;
                        border: none;
                        font-size: 13px;
                        box-shadow:none;
                        margin-top: -9px;" name="select_topic" id="select_topic">
              <option style="border:none" value='none'>Select </option>
              </select>
              </div>



              <div style="height: 70px;
                border: 2px solid #28a47a;
                margin-top: 30px;
                border-radius: 15px;">
               <div>  <span style="font-size: 10px;margin-left: 10px;color: #28a47a;padding-top: 4px;">Topic</span> </div>
              <div> <select style="width: 100%;
                            box-shadow:none;
                            border-radius: 15px;
                            background-color: black;
                            border: none;
                            font-size: 13px;" name="select_subtopic" id="select_subtopic">
              <option style="border:none" value='none'>Select </option>
             
              </select>
              </div>

              </div>

              <div style="
                        display:flex;
                        justify-content:center;
                        margin-top:10px">
              <h5 id='new_topic_suggestion' style="color:#28a47a;
                        text-decoration:underline"> Suggest a new Topic </h5>
              </div>


             

              <button id='continue_to_prompt_screen_6' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left: 35%;position:absolute;bottom:20px;">Continue</button>

              </div>
              </div>
              </div>`



var popUp4 = `<div id="openPopUp" style="  height: 500px;
                background-color: black;
                width: 400px;
                position: fixed;
                top: 5%;
                left: 45%;
                margin-top: 34px;
                z-index: 100000;
                padding: 25px 14px;
                border: 0px solid #28a47a;
                box-shadow: 0px 2px 30px 3px #28a47a77;
                overflow: auto;
                border-radius: 20px;
                color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

              <div id="create_prompt_screen_4">
              <div id="title_heading" style="margin-left: 30%;">
              <h5>CREATE PROMPT</h5>

              </div>
              <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
              <div class="line-1 step_bar_single_completed"></div>
              <div class="line-2 step_bar_single_completed"></div>
              <div class="line-3 step_bar_single_completed"></div>
              <div class="line-4 step_bar_single_completed"></div>
              <div class="line-5 step_bar_single_uncompleted"></div>
              <div class="line-6 step_bar_single_uncompleted" ></div>
              <div class="line-7 step_bar_single_uncompleted" ></div>
              </div>

              <div style="display:flex;justify-content:center">
              <h5 style="color:white;margin-top: 20px;margin-left: -25px;"> Tone  </h5>
              </div>

              <div id="new_prompt_Tone_div" style="display: grid;margin-top:10px;gap: 35px;height:100px;overflow-y: auto;">


              <div id='formal_tone_div' style="display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    margin-inline: 30px;
                                    height: 35px;">
              <h5>  Formal </h5>
              <svg id='formal_tone_select' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              </div>
              <div id='informal_tone_div' style="display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        margin-inline: 30px;
                                        height: 35px;">
              <h5>  Informal </h5>
              <svg id='informal_tone_select' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              </div>
              <div id='appologetic_tone_div' style="display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            margin-inline: 30px;
                                            height: 35px;">
              <h5>  Appologetic </h5>
              <svg id='appologetic_tone_select' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
              </div>
              </div>
              
              <button id='continue_to_prompt_screen_5' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left: 35%;position:absolute;bottom:20px;">Continue</button>
              </div>
              </div>`;

var popUp5 = `<div id="openPopUp" style="  height: 500px;
                  background-color: black;
                  width: 400px;
                  position: fixed;
                  top: 5%;
                  left: 45%;
                  margin-top: 34px;
                  z-index: 100000;
                  padding: 25px 14px;
                  border: 0px solid #28a47a;
                  box-shadow: 0px 2px 30px 3px #28a47a77;
                  overflow: auto;
                  border-radius: 20px;
                  color: white;">

                <div id='crossbtn' class='my-2'  >
                <span style="
                  right: 17px;
                  font-size: 13px;
                  position: absolute;
                  top: 31px;
                  cursor:pointer;
                  color: #28a47a;"  >
                &#10006;
                </span>
                </div>

                <div>  <button id='go_back_to_screen_3' style="color:#28a47a" > Back </button>  </div>


                <div id="create_prompt_screen_5">
                <div id="title_heading" style="margin-left: 30%;">
                <h5>CREATE PROMPT</h5>

                </div>
                <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
                <div class="line-1 step_bar_single_completed"></div>
                <div class="line-2 step_bar_single_completed"></div>
                <div class="line-3 step_bar_single_completed"></div>
                <div class="line-4 step_bar_single_completed"></div>
                <div class="line-5 step_bar_single_completed"></div>
                <div class="line-6 step_bar_single_uncompleted" ></div>
                <div class="line-7 step_bar_single_uncompleted" ></div>
                </div>

                <div id="pubpvt_tab" style="margin-left: 29%;padding-top: 20px;">
                <!--<button id='public_pay_button' style="background: #474646;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;">Public</button>
                <button id='private_pay_button' style="background: black;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;">Private</button>
                -->
                </div>



                <div id="new_prompt_paid/unpaid_div" style="margin-top:20px;">


                <div style="display:flex;gap:2px;margin-inline:30px;margin-top:30px" >     <div style="margin-left: 15px;"> <h5 style="color: #28a47a;
                                                                                                     margin-left: 10px;"> &nbsp Free </h5> </div>  </div>
                <div id='free_prompt_div' style="display: flex;
                                      
                                      align-items: center;
                                      margin-inline: 30px;
                                      height: 35px;">
                <svg style="    position: relative;
                                bottom: 10px;" id='free_prompt_select' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                <h5 style="margin-left: 15px;">  Great way to share value </h5>
                
                </div>

                <div style="display:flex;margin-inline:30px;margin-top:30px">   <svg style="    position: relative;
    top:                                                    20px;" id='paid_prompt_select' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>   <h5 style="color:#28a47a;margin-left:10px"> &nbsp Paid </h5></div>
                <div id='paid_prompt_div' style="display: flex;
                                      
                                      align-items: center;
                                      margin-inline: 30px;
                                      height: 35px;">
                <h5 style="margin-left:40px">  Sell your prompts </h5>
               
                </div>
                </div>
                <button id='continue_to_prompt_screen_6' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 45px;margin-left: 35%;position:absolute;bottom:20px;">Continue</button>

                </div>
                </div>`;








var popUp6 = `<div id="openPopUp" style="  height: 500px;
                background-color: black;
                width: 400px;
                position: fixed;
                top: 5%;
                left: 45%;
                margin-top: 34px;
                z-index: 100000;
                padding: 25px 14px;
                border: 0px solid #28a47a;
                box-shadow: 0px 2px 30px 3px #28a47a77;
               
                border-radius: 20px;
                color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                cursor:pointer;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

               <div>  <button id='go_back_to_screen_3' style="color:#28a47a" > Back </button>  </div>
              

              <div id="create_prompt_screen_6">
              <div id="title_heading" style="margin-left: 30%;">
              <h5>CREATE PROMPT</h5>

              </div>
              <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
              <div class="line-1 step_bar_single_completed" style="width:40%"></div>
              
              </div>

              <div style="margin-left:149px">
              <h5 style="color:white;margin-top: 20px;margin-left: -25px;"> Enrich with Data  </h5>
              </div>

              <div style="display:flex;justify-content:center">
              <b style="color:white;font-size:11px;margin-left: -25px;"> (Optional)  </b>
              </div>

              <div id="new_prompt_CSV_div" style="display: flex;
                                                  margin-top: 10px;
                                                  align-items: center;
                                                  ">
              <div id="file_upload_button" style="height: 50px;margin-top:10px;
                border-radius: 50%;
                background-color: #28a47a;
                width: 54px;
                margin-left: 60px;
                display: flex;
                justify-content: center;
                align-items: center;">
                <div  style="width: 100%;
                              height: 100%;
                              display: flex;
                              align-items: center;
                              justify-content:center" >
              <svg  style="height:100%;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
              </svg>
              </div>
                 
              
            
              </div>
             
              <div style="display:flex;justify-content:center">
              <input style="width: 100%;
                          margin-top: 10px;
                          margin-left: 20px;;" id='file_select_input' type='file' />
              <span style="
              color: white;
              position: absolute;
              top: 40%;
              left: 43%;
              max-width: 150px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;"
               id='file_text_name'>   </span>
              </div>
             
            </div>

             
            

              <div class='container' style="display:flex;justify-content:center">
              <hr style="color: white;
                        width: 75%;
                        border-color: white;
                        margin-top: 15px;"> 
              <hr>

              </div>

            
            <input id='new_prompt_file_url' placeholder='Enter URL' type='text' style="    background: transparent;
            margin-top: 50px;
            border: 0px;
            border-color: black;
            color: white;
            outline: none;
            height: 35px;
            box-shadow: none;
            border: 2px solid #28a47a;
            border-radius: 15px;
            margin-left: 80px;" />
           
              
             <div style="display:flex;gap:10px;
                          margin-top: 10px;
                          margin-left: 65px;">
              <div> <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> </div>
              <div> <h4 style="color:white;text-decoration:underline"> Learn how to enrich with data </h4> </div>
              </div>


              <button id='continue_to_prompt_screen_7' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left: 35%;position:absolute;bottom:20px;">Continue</button>

              </div>
              </div>`;



var popUp7 = `<div id="openPopUp" style="  height: 500px;
                background-color: black;
                width: 400px;
                position: fixed;
                top: 5%;
                left: 45%;
                margin-top: 34px;
                z-index: 100000;
                padding: 25px 14px;
                border: 0px solid #28a47a;
                box-shadow: 0px 2px 30px 3px #28a47a77;
                overflow: auto;
                border-radius: 20px;
                color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                cursor:pointer;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

               <div>  <button id='go_back_to_screen_5' style="color:#28a47a" > Back </button>  </div>

              <div id="create_prompt_screen_7">
              <div id="title_heading" style="margin-left: 30%;">
              <h5>CREATE PROMPT</h5>

              </div>
              <div id="step_bar" style="margin-left: 27%;margin-top: 10px;">
              <div class="line-1 step_bar_single_completed" style="width:52%" ></div>
            
              </div>




              <div id="new_prompt__div" style="display: grid;margin-top:20px;">


              <div id="new_prompt_author_div" style="display: none;border: 2px solid #28a47a;margin-top: 30px;border-radius: 15px;    width: 75%;margin-left: 20px;">
              <input id='new_prompt_author' placeholder='Owner' value='undefined' type='text' style="background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 30px;box-shadow: none;" />
              </div>

              <div style="display:none;width:80%;height:130px; background-color:#132212;border-radius:25px;padding: 15px;margin-top: 20px;
              margin-left: 35px;">
              <span id="description"></span>
              <br>
              <span id="category" style="color:#FFF"></span>
              </div>

              

              <button id="btn_stack_prompt" style="width:140px;height:50px;margin-left:115px;margin-top:1px; background-color:#132212;border-radius:20px;color:#39b291;border:5px dotted #39b291;">Stack a prompt</button>



              <div id="new_prompt_url_div" style="display: none;border: 2px solid #28a47a;margin-top: 30px;border-radius: 15px;    width: 75%;margin-left: 20px;">
              <input id='new_prompt_url' placeholder='website' type='text' style="background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 30px;box-shadow: none;" />
              </div>


              <div class='my-3  d-flex align-items-center' style="display : none;margin-left:24px;font-size: 12px;" >
              <input style="display : none" id='sequentialCheck_box' type="checkbox" />
              <p style="display : none"> &nbsp Sequential Prompt</p>
              </div>

              <div id="loading_gif" style="display:none; z-index: 10000000">
                <img style="height: 60px;position: absolute;top: 50%;left: 40%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>

              </div>
                

              <div style="bottom: 70px;
                          display:flex;
                          gap:10px;
                          margin-left:5px;
                          position: absolute;">
              <div> <svg style="color:#28a47a" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> </div>
              <div> <h4 style="color:white;text-decoration:underline"> Prompt stacking is used to expand on the topic. </h4> </div>
              </div>


              <button id='continue_to_prompt_screen_8' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-left: 35%;position:absolute;bottom:20px;position:absolute;bottom:20px;">Continue</button>

              </div>
              </div>`;



















var pricePopup = `<div id="openPopUp" style="  position: fixed;
              height:500px;
              background-color:black;
              top: 5%;
              left: 45%;
              margin-top: 34px;
              z-index: 100000;
              width:400px;
              padding: 25px 14px;
              border: 0px solid #28a47a;
              box-shadow: 0px 2px 30px 3px #28a47a77;
              border-radius: 20px;
              color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

              <div>  <button id='go_back_to_screen_4' style="color:#28a47a" > Back </button>  </div>

              <div id="create_prompt_screen_Price">
              <div id="title_heading" style="margin-left: 30%;">
              <h5 style="color:white">Enter Prompt Price</h5>

              </div>
              
            <div style="display:flex;align-items:center;">
          
              <div id="new_prompt_Price_div" style="display: flex;
            width: 75%;
            border: 2px solid #565a59;
            margin-top: 30px;
            border-radius: 15px;
            margin-left: 20px;
              ">
              
              <div style="display:flex;"> <input placeholder='Price' id='new_prompt_price' type='text' style="background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 35px;box-shadow: none;width:100%" /> 
              
              </div>
              </div>
              </div>


              <button id='continue_to_prompt_screen_5' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left:35%;position:absolute;bottom:20px;">Continue</button>

              </div>
              </div>
              </div>`






var suggestionPopUp = `<div id="openPopUp" style="  position: fixed;
              height:500px;
              background-color:black;
              top: 5%;
              left: 45%;
              margin-top: 34px;
              z-index: 100000;
              width:400px;
              padding: 25px 14px;
              border: 0px solid #28a47a;
              box-shadow: 0px 2px 30px 3px #28a47a77;
              border-radius: 20px;
              color: white;">

              <div id='crossbtn' class='my-2'  >
              <span style="
                right: 17px;
                font-size: 13px;
                position: absolute;
                top: 31px;
                color: #28a47a;"  >
              &#10006;
              </span>
              </div>

              <div>  <button id='go_back_to_screen_3' style="color:#28a47a" > Back </button>  </div>

              <div id="create_prompt_screen_3">
              <div id="title_heading" style="margin-left: 30%;">
              <h5 style="color:white">Suggest Prompt</h5>

              </div>
              
            <div style="display:flex;align-items:center;margin-left:21px">
           
              <div id="new_prompt_suggestion_div" style="display: flex;
            width: 78%;
            border: 2px solid #565a59;
            margin-top: 30px;
            border-radius: 15px;
            margin-left: 20px;
              ">
              
              <div style="display:flex;"> <input placeholder='Category Suggestion' id='new_prompt_topic_suggestion' type='text' style="background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 35px;box-shadow: none;width:100%" /> 
              
              </div>
              </div>
              </div>


               <div id="new_prompt_suggestion_div" style="display: flex;
            width: 75%;
            border: 2px solid #565a59;
            margin-top: 30px;
            border-radius: 15px;
            margin-left: 40px;
              ">
              
              <div style="display:flex;"> <input placeholder='Subcategory Suggestion' id='new_prompt_subtopic_suggestion' type='text' style="background: transparent;border: 0px;border-color: black;color: white;outline: none;height: 35px;box-shadow: none;width:100%" /> 
              
              </div>
              </div>
              </div>

              <div id="loading_gif_3" style="display:none; z-index: 10000000">
                <img style="height: 60px;position: absolute;top: 45%;left: 40%;" id="loading-image" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="Loading..." />
              </div>
    

              <button id='save_suggestion' style="background: #28a47a;border-radius: 9px;color: white;border: 0px;padding: 5px 15px;margin-top: 15px;margin-left: 90px;position:absolute;bottom:20px;">Submit Suggestion</button>

              </div>
              </div>
              </div>`;

var feature_popup = ` <div id='feature_div' style="background: #050A08;
                                                 ;
                                                   width: 62%;" > 

             <div style="padding:5%" > <h3 style="color:white"> Prompt. </h3>  </div>             
              
             <div style="padding: 5%;
                        padding-top: 28%;" >  
              <div> <h3 style="color:white;width:257px"> Reduce your workload with ChatGPT x {Name of App} </h3>  </div>
             </div>

             <div style="padding:5%;display:flex;" > 
             <img src='${white_circle_feature}' alt='white_circle' />
             <img style="margin-left:1.5%" src='${dull_circle_feature}' alt='dull_circle' />
             <img style="margin-left:1.5%" src='${dull_circle_feature}' alt='dull_circle' />
             </div>

            </div>`


var connect_openai_popup_for_not_registered=()=>{
  `
  
`
}

const connect_openai_popup_for_not_logged_in=()=>{
  ` <div id='connect_with_openai_div' style="width: 428px;
                                                      height: 464px;
                                                      position: fixed;
                                                      left: 58%;
                                                      top: 20%;
                                                      background: black;
                                                      box-shadow:rgba(40, 164, 122, 0.467) 1px 0px 3px 3px"> 
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


            </div>`
}