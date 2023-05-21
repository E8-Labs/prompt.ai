
    const fetchCategories = () => {
        chrome.runtime.sendMessage({ type: "fetching_topics" }, function (response) {
            console.log(response);
            categories = response.data;
        });
    };

