//This file contains function responsible for creating a prompt
// *note* It also contains info regarding prompt stacking.


const create_a_prompt=()=>{


    $("#loading_gif").show()

    if (user === true && isSequential === true) {
        if (count >= 1) {
            chrome.runtime.sendMessage({ type: "sort" }, function (response) {
                if (response.data) {
                    pID = response.data.pID;
                    chrome.runtime.sendMessage({ type: "changing_pID", id: PD }, function (response) {
                        if (response.message) {
                            chrome.runtime.sendMessage({
                                type: "creating_prompt", template, teaser, price, hint, title, author: author ? author : undefined, url, topic, tone, subtopic, checkUser: 'true', file_content,
                                user: userId, sequential: 'true', pID: pID !== null ? pID + 1 : "",
                            }, function (response) {

                                if (response.data) {
                                    isSequential = false;
                                    pID = null;
                                    template = "";
                                    hint = "";

                                    url = "";
                                    teaser = "";
                                    title = "";
                                    PD = response.data.pID;
                                    count++;

                                    alert("Your Prompt was successfully Added");
                                    setTimeout(() => {
                                        $("#openPopUp").remove();
                                    }, 500);

                                    setTimeout(() => {
                                        $("body").append(popUp);
                                    }, 550);
                                }

                            });
                        }




                    });
                }
            });
        }
        else {
            chrome.runtime.sendMessage({
                type: "creating_prompt", template, teaser, price, hint, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: 'true', file_content,
                user: userId, sequential: 'true', teaser
            }, function (response) {
                console.log(response);

                isSequential = false;
                pID = null;
                template = "";
                hint = "";


                url = "";
                teaser = "";
                title = "";
                PD = response.data.pID;
                count++;

                alert("Your Prompt was successfully Added");
                setTimeout(() => {
                    $("#openPopUp").remove();
                }, 500);

                setTimeout(() => {
                    $("body").append(popUp);
                }, 550);

            });

        }



    }

    else if (user === true && isSequential === false) {

        if (count >= 1) {


            chrome.runtime.sendMessage({ type: "sort" }, function (response) {
                if (response.data) {



                    pID = response.data.pID;

                    chrome.runtime.sendMessage({ type: "changing_pID", id: PD }, function (response) {

                        if (response.message) {
                            chrome.runtime.sendMessage({
                                type: "creating_prompt", template, price, teaser, hint, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: 'true', file_content,
                                user: userId, sequential: 'true', pID: pID !== null ? pID + 1 : "",
                            }, function (response) {

                                if (response.data) {
                                    isSequential = false;
                                    pID = null;
                                    template = "";
                                    hint = "";

                                    url = "";
                                    teaser = "";
                                    title = "";
                                    PD = response.data.pID;
                                    count++;

                                    window.location.reload();
                                    alert("Your Prompt was successfully Added");



                                }

                            });
                        }




                    });
                }
            });




        }
        else if (count === 0) {


            chrome.runtime.sendMessage({
                type: "creating_prompt", template, teaser, price, hint, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: true.toString(), file_content,
                user: userId, sequential: false.toString(), teaser
            }, function (response) {
                console.log(response);
                if (response) {

                    alert('Prompt Successfully added');
                    $("#loading_gif").hide()
                    window.location.reload();

                }


            });




        }



    }

    else if (!user && isSequential === true) {
        if (count >= 1) {

            chrome.runtime.sendMessage({ type: "sort" }, function (response) {
                if (response.data) {



                    pID = response.data.pID;

                    chrome.runtime.sendMessage({ type: "changing_pID", id: PD }, function (response) {

                        if (response.message) {
                            chrome.runtime.sendMessage({
                                type: "creating_prompt", template, teaser, price, hint, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: 'false', file_content, public,
                                user: userId, sequential: 'true', pID: pID !== null ? pID + 1 : "",
                            }, function (response) {

                                if (response.data) {
                                    isSequential = false;
                                    pID = null;
                                    template = "";
                                    hint = "";

                                    url = "";
                                    teaser = "";
                                    title = "";
                                    PD = response.data.pID;
                                    count++;

                                    alert("Your Prompt was successfully Added");
                                    setTimeout(() => {
                                        $("#openPopUp").remove();
                                    }, 500);

                                    setTimeout(() => {
                                        $("body").append(popUp);
                                    }, 550);



                                }

                            });
                        }




                    });
                }
            });







        }

        else if (count === 0) {
            chrome.runtime.sendMessage({
                type: "creating_prompt", template, teaser, price, hint, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: 'false', file_content,
                user: userId, sequential: 'true', teaser,
            }, function (response) {
                console.log(response);
                if (response) {

                    isSequential = false;
                    pID = null;
                    template = "";
                    hint = "";

                    url = "";
                    teaser = "";
                    title = "";
                    PD = response.data.pID;
                    count++;

                    alert("Your Prompt was successfully Added");
                    setTimeout(() => {
                        $("#openPopUp").remove();
                    }, 500);

                    setTimeout(() => {
                        $("body").append(popUp);
                    }, 550);

                }


            });

        }





    }
    else if (!user && isSequential === false) {
        if (count >= 1) {

            chrome.runtime.sendMessage({ type: "sort" }, function (response) {
                if (response.data) {



                    pID = response.data.pID;

                    chrome.runtime.sendMessage({ type: "changing_pID", id: PD }, function (response) {

                        if (response.message) {
                            chrome.runtime.sendMessage({
                                type: "creating_prompt", template, teaser, price, hint, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: 'false', file_content, public,
                                user: userId, sequential: 'true', pID: pID !== null ? pID + 1 : "",
                            }, function (response) {

                                if (response.data) {
                                    isSequential = false;
                                    alert('Prompt Successfully Added');
                                    window.location.reload();



                                }

                            });
                        }




                    });
                }
            });



        }
        else if (count === 0) {

            chrome.runtime.sendMessage({
                type: "creating_prompt", template, teaser, hint, price, title, author: author ? author : undefined, url, topic, subtopic, tone, checkUser: 'false', file_content,
                user: userId, sequential: 'false', teaser,
            }, function (response) {
                console.log(response);
                if (response) {

                    alert('Prompt Successfully added');
                    $("#loading_gif").hide()
                    window.location.reload();

                }


            });
        }
    }


}