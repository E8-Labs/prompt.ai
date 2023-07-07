const fetchPrompts = async () => {

    $("#loading_gif_2").show();
    chrome.runtime.sendMessage({ type: "fetch_prompts", id: userId, page }, function (response) {
        console.log(response);
        global_api_response = response.data.public_prompts;
        user_prompts = response.data.user_prompts;
        $("#loading_gif_2").hide();


        if (btn_click == 'Public') {
            if ($(".main_public_prompt_div").length >= 0) {
                $(".main_public_prompt_div").remove();
                $('#publicbutton').click();
               


            }
        }

        if (btn_click == 'Private') {
            if ($(".main_personal_prompt_div").length >= 0) {
                $(".main_personal_prompt_div").remove();
                $('#ownbutton').click();
            }
        }



    });

};