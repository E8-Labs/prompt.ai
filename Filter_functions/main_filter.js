const filter_prompts = () => {
    $("#loading_gif_2").show();
    chrome.runtime.sendMessage({ type: "filter_prompts", category_selected, id: userId, subcategory_selected, price_filter: price_filter.toString(), free_filter: free_filter.toString() }, function (response) {
        console.log(response);
        all_prompts = ([...all_prompts, ...response.data.public_prompts, ...response.data.user_prompts])
        global_api_response = response.data.public_prompts;
        user_prompts = response.data.user_prompts;
        if ($(".favourite_public_prompt_div").length > 0) {
            $(".favourite_public_prompt_div").remove();
        }
        if (btn_click == 'Public') {
            $('#publicbutton').click();
            if ($('#Pagination_div').length) {
                $('#Pagination_div').remove();
            }
        }
        else if (btn_click == 'Private') {

            $('#ownbutton').click();
        }

        if (response) {
            $("#loading_gif_2").hide();
        }
    });
}