const render_public_prompts=()=>{

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


    if (parentPrompts.length <= 2) {


        for (let i = 0; i < parentPrompts.length; i++) {
            let data = parentPrompts[i];


            $("#main_div").append(`<div class='col-lg-5 main_public_prompt_div' style="display:flex;width:100%;height: 280px;max-width:500px"  >

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

        var target = $('a[href="#"]');
        var offset = $(target).offset().top;
        

      
        // $('.flex-1.overflow-hidden >div >div').eq(1).animate({ scrollTop: offset }, 500);

    }
   


    
        $('#main_div').eq(0).after(`<div id='Pagination_div' class="container" style="display:flex;justify-content:center;gap:20px;margin-top:10px;width:95%;padding-bottom:15%">
          
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
        $('#Pagination_div').css('padding-bottom','15%');
        
    }

}