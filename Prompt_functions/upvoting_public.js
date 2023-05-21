const public_upvoting=()=>{
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
}