const menu_items=()=>{

    $("#menu").after(`<div id='menu-items' style="display:flex; margin-top:7px;justify-content:space-between;align-items:center;width:100%;margin-left:20px">
                                      <div style="
                                      display: flex;
                                      left: 3%;
                                    
                                      justify-content: space-between;
                                      align-content: flex-start;
                                      align-items: center;
                                      margin-top: 20px;
                                      width:100%;
                                      position: relative;
                                      ">
                                    <div style="display: flex;width: 700px;">
                                    <div style="    display: flex;
                                                    align-items: center;
                                                    cursor: pointer;
                                                    background: rgba(255, 200, 5, 0.1);
                                                    width: 68px;
                                                    height: 31px;
                                                    padding-left: 1%;
                                                    border-radius: 10px;" id='publicbutton' > <div> <img src="${star_2}" alt="vCZC4.png" border="0" /> </div>  <div >  &nbsp <span style="color:white;margin-left:5px">   All </span> </div> </div>
                            
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id='Favourite' > <div><img src="${saved}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Saved </span> </div> </div>
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id="Purchase" > <div > <img src="${purchased}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Purchased </span> </div> </div>
                            
                            
                                    <div style="margin-left: 75px;display:flex;align-items:center" id='ownbutton' > <div><img src="${created}" alt="vCZC4.png" border="0" /> </div>  <div>  &nbsp <span style="color:white;margin-left:5px">   Created </span> </div></div>
                                    </div>
                                    <div style="    position: relative;
                                                    margin-top:1%;
                                                    right: 5%;">
                                        <button id='promptbtn' class='create_new_prompt_btn' style="background-color: #00c08b;height: 54px;width: 153px;border-radius: 20px;padding-left: 10px;color: white;padding: 5px;">
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

    if (is_premium === true) {
        $('#menu-items').css({
            "justify-content": 'flex-end',
            "padding-right": "3%",
            "width": "",

        })
        $('#menu-items >div').eq(0).css({
            "width": "100%",

        })

        $('#menu-items >div >div ').eq(1).css({
            "position": "absolute",
            "right": "45px"
        })

    }



    var Filter_Selection = `<div id="menu-tabs"  style="    display: flex;
                                                            align-items: center;
                                                            width: 70%;
                                                            margin-top: 35px;
                                                            padding-left: 1%;" >
                                      <div style="display:flex; gap:15px;margin-left:0px">
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
                                              <select id='Subcategories_filter' style="border-color: #28a47a;
                                                                                  width: 250px;
                                                                                  height: 100%;
                                                                                  background-color:black;
                                                                                  color:white;
                                                                                  border-radius:6%;"   >
                                  
                                                  <option value="none">Sub category</option>
                                              </select>
                                          </div>
                                          <div>
                                          </div>
                                          <div style="height:55px">
                                              <select id='Model' style="          border-color: #28a47a;
                                                                                  height: 100%;
                                                                                  background-color:black;
                                                                                  color:white;
                                                                                  border-radius: 15%;"   >
                                  
                                                  
                                                  <option value="All_filter_button"> All </option>
                                                  <option value="Free_filter_button"> Free </option>
                                                  <option value="Paid_filter_button" > Paid  </option>
                                              </select>
                                          </div>
                                         
                                      </div>
                                  </div> `

    $('#menu-items').after(`<div  style="
                        // width: 100%;
                        // margin-left: 20px;
                        // margin-top: 16px;
                        // margin-bottom: 7px;
                        // margin-left: 2%;
                        // padding-left: 1%;
                        // align-items:center;
                        // display: flex;
                        // border-radius: 15px;
                            width: 90%;
    margin-top: 16px;
    margin-bottom: 7px;
    margin-left: 2%;
    padding-left: 1%;
    align-items: baseline;
    display: flex;
    /* border-radius: 15px; */
    flex-direction: column;
    flex-wrap: wrap;
                        "> 
                       <div id='Advance_filters' style="display:flex;align-items:center;width:auto"> <p style="color: #00C28C;
    text-decoration: underline;
    font-size: 1.0rem;"> Advance Filters  </p> 
                        <img style="height:7px;width:10px;margin-left:5px" style="margin-left:8px" src="${downarrow}" alt="vCZC4.png" border="0" />
                       </div>
     
    </div>
    `)

    $("#Advance_filters").after(Filter_Selection);

    $('#menu-tabs').toggle(false);



    for (let i = 0; i < categories.length; i++) {
        let data = categories[i];
        $('#Category_filter').append(`<option value='${data.name}' > ${data.name} </option>`)
    }




    $(gpt_submit_selector).css("visibility", "hidden");


    $("textarea").eq(0).parent().append(our_submit_button);



    $("form > div > div").eq(0).prepend(lang_wrapper);
    if (is_premium == false) {
        $('#writingStyleSelect').prop('disabled', true);
    }

    if (gpt_mode == 'GPT4') {
        $('#writingStyleSelect').empty();
        $('#writingStyleSelect').append(`<option value='GPT4'> GPT-4 </option>
             <option value='GPT3' >  ChatGPT-3.5 </option>
            `

        )
    }
    else{
        $('#writingStyleSelect').empty();
        $('#writingStyleSelect').append(`<option value='GPT3'> ChatGPT-3.5 </option>
             <option value='GPT4' >  GPT-4 </option>
            `

        )

    }

    if ($('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).length) {
        $('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).css('display', 'none');
    }

    // if(is_premium===false){
    //   document.querySelectorAll('.relative.flex.w-full.items-center.justify-center.gap-1.rounded-lg.border.py-3 ')[0].click()
    //   $('#writingStyleSelect').prop('disabled',true);
    // }


    var main_div = `<div id='main_div' class='row container' style="width: 100%;
                                                    margin-top: 15px;
                                                    margin-left: 35px;" ></div>`;

    // if(!$("h1").parent().length)
    // if ($(".text-gray-800 >h1 ").length && $(".text-gray-800 >div").length) {
 //Removing text that appears if gptmode4 is selected
        // if ($('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).length) {
        //     $('.stretch.mx-2.mb-2.text-center.text-xs.text-gray-600').eq(0).css('display', 'none');
        // }
        // $(main_screen_selector).eq(0).css('background', 'black');
      
        $('#top_bar').after(main_div);
        if(prompt_to_load.length){
            $('#ownbutton').click();
            // $(`#${prompt_to_load[0]._id}`).click();
            document.getElementById(`${prompt_to_load[0]._id}`).children[1].click()
            // console.log(`#${prompt_to_load[0]._id}`.eq(0));   

        
        }
        else{
            render_public_prompts();
        }
       




    //}

    // else {
    //      //Removing text that appears if gptmode4 is selected
       

    //     main_div = `<div id='main_div' class='row'  style="margin-top:15px;"></div>`
    //     // $(main_screen_selector).eq(0).css('background', 'black');
    //     $('#top_bar').after(main_div);
    //     render_public_prompts();


    // }

}