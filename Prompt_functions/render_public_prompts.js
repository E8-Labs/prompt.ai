const render_public_prompts=()=>{

    $('#publicbutton').css('background','rgba(255, 200, 5, 0.1)');
    $('#ownbutton').css('background','');
    $('#Favourite').css('background','');

    page=1;
    btn_click = 'Public';
    

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
  let public_prompts = global_api_response.filter(
        (item) => item.isPublic === true
    );

    let parentPrompts = public_prompts.filter(
        (item) => (item.cID && !item.pID) || (!item.cID && !item.pID)
    );
    $(".text-gray-800").css("max-width", "85%")



        for (let i = 0; i < parentPrompts.length; i++) {
            let data = parentPrompts[i];
    // main_public_prompt_div
            $("#main_div").append(` <div class='col-xxl-3 col-xl-4 col-lg-4 col-md-6 main_public_prompt_div  '   >

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
                                                    <button style="display:flex;align-items:center;justify-content:center"  id='${data._id}' class=${userInfo.favourite_prompts.includes(data._id) ? 'save_btn_active heart' : ' save_btn heart'  }><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <a href=""><img class="colorized-image" src="${uparrow}" alt="">${Math.ceil(data.likes)}</a>
                                <a href="">  <svg id='eye' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg> &nbsp ${data.views}</a>
                                <a href=""><img src="${comment}" alt="" class='colorized-image'  />${data.comments}</a>
                            </div>
                        </div>

                </div>`)

           
        }

        var target = $('a[href="#"]');
        var offset = $(target).offset().top;
        

      
        // $('.flex-1.overflow-hidden >div >div').eq(1).animate({ scrollTop: offset }, 500);

    
   


    
        $('#main_div').eq(0).after(`<div id='Pagination_div' class="container" style="display:flex;justify-content:center;gap:20px;margin-top:10px;width:95%;padding-bottom:28%">
          
          <div id='Forward_button_div'  >  <h4 style="color:#28a47a"  id='next_page'> Show More </h4>   </div>
          </div>
    
    `)


    
    

    
    if (category_selected) {
        if ($('#Pagination_div').length) {
            $('#Pagination_div').remove();
        }

    }

    if (($('.relative.flex.flex-col.items-stretch.justify-center.gap-2').eq(0).length || is_premium)){
        if($('#Pagination_div').length){
            $('#Pagination_div').remove();
        }

        
            $('#main_div').eq(0).after(`<div id='Pagination_div' class="container" style="display:flex;justify-content:center;gap:20px;margin-top:10px;width:95%">
          
          <div id='Forward_button_div'  >  <h4 style="color:#28a47a"  id='next_page'> Show More </h4>   </div>
          </div>
    
    `)
    

        
        // $('#Pagination_div').css('padding-bottom','100px');
        $('#Pagination_div').css('padding-bottom','25%');


        
    }

    if (no_more_public_prompts===true){
        $('#Pagination_div').empty();
    }

    if(extra_parent_prompts.length){
        extra_parent_prompts = extra_prompts.filter((item) => (item.cID && !item.pID) || (!item.cID && !item.pID));


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
                                        <button style="display:flex;align-items:center;justify-content:center"  id='${data._id}' class=${userInfo.favourite_prompts.includes(data._id) ? 'save_btn_active heart' : ' save_btn heart'} ><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    // if(no_more_public_prompts===true){
    //     $('#Pagination_div').empty();
    // }

}