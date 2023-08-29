chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  console.log("in Background")
  if (request.type === "increasing_views") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "increasing_views", id: request.id },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }
  if (request.type === "upvoting") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "upvoting",
            id: request.id,
            IncrementBy: request.IncrementBy,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "downvoting") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({ body: { type: "downvoting", id: request.id } }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "flag") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "flag_a_prompt", id: request.id },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "deleting_favourite_prompt") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "deleting_favourite_prompt",
            uId: request.uId,
            pId: request.pId,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }
  if (request.type === "fetching_topics") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({ body: { type: "fetching_topics" } }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }
  if (request.type === "sort") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({ body: { type: "sort" } }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }
  if (request.type === "fetch_prompts") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "fetch_prompts", id: request.id, page: request.page },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }
  if (request.type === "checking_user") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "checking_user", user_email: request.user_email },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "inserting_user") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "inserting_user",
            username: request.username,
            email: request.email,
            image: request.image,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "fetching_user_prompts") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "fetching_user_prompts",
            uId: request.uId,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "changing_pID") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "changing_pID",
            id: request.id,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp, message: "successfully done" })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "creating_prompt") {
    console.log(request)

    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "creating_prompt",
            childPrompt: request.childPrompt,
            dataset_name: request.dataset_name,
            template: request.template,
            teaser: request.teaser,
            hint: request.hint,
            title: request.title,
            author: request.author,
            url: request.url,
            categories_selected: request.categories_selected,
            subcategories_selected: request.subcategories_selected,
            price: request.price,
            tone: request.tone,
            checkUser: request.checkUser,
            file_content: request.file_content,
            user: request.user,
            sequential: request.sequential,
            pID: request.pID,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        console.log(resp)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "checking_favourite_prompt_existence") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "checking_favourite_prompt_existence",
            uId: request.uId,
            pId: request.pId,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "adding_favourite_prompt") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "adding_favourite_prompt",
            uId: request.uId,
            pId: request.pId,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "search_prompts") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "search_prompts",
            id: request.id,
            string: request.string,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "suggesting_category_and_subcategory") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "suggesting_category_and_subcategory",
            category_name: request.topic_name,
            subcategory_name: request.subtopic_name,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "filter_prompts") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "filter_prompts",
            category_selected: request.category_selected,
            id: request.id,
            price_filter: request.price_filter,
            free_filter: request.free_filter,
            subcategory_selected: request.subcategory_selected,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "file_handling") {
    // const req = new Request(
    //   "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       body: { type: "file_handling", data:request.data,
    //       file_content:request.csv_file_content},
    //     }),
    //     headers: {
    //       "Content-Type": "application/json;",
    //     },
    //   }
    // );
    const req12 = new Request(
      "https://gw4esvbumd4ru2twe2jnd2p5na0tbspd.lambda-url.us-east-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          text: request.csv_file_content,
          question: request.data,
        }),
        mode: "cors",
        redirect: "follow",
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req12)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log("Response with Success. Please check status...")
        console.log(obj)
        sendResponse({ status: 200, data: obj })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "inserting_user_prompt_history") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "inserting_user_prompt_history",
            user: request.user,
            prompt_id: request.prompt_id,
            prompt_ai_response: request.prompt_ai_response,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "fetching_user_prompt_history") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "fetching_user_prompt_history",
            user: request.user,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )
    fetch(req)
      .then((response) =>
        // debugger;
        response.json()
      )
      .then((jsonData) => {
        const obj = jsonData
        console.log(obj)
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "editing_prompt") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "editing_prompt",
            id: request.id,
            template: request.template,
            teaser: request.teaser,
            price: request.price,
            hint: request.hint,
            title: request.title,
            url: request.url,
            categories_selected: request.categories_selected,
            subcategories_selected: request.subcategories_selected,
            file_content: request.file_content,
            dataset_name: request.dataset_name,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }
  if (request.type === "delete_prompt") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "delete_prompt", id: request.id },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "fetching_selectors") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({ body: { type: "fetching_selectors" } }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "logging_out") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({ body: { type: "logging_out", id: request.id } }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "logging_in") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "logging_in", email: request.email },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "fetching_template_content") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "fetching_template_content", id: request.id },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "checking_username") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "checking_username",
            new_username: request.new_username,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "inserting_username") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "inserting_username",
            insta_link: request.insta_link,
            yt_link: request.yt_link,
            web_url: request.web_url,
            email: request.email,
            new_username: request.new_username,
            user_photo: request.user_photo,
            password: request.password,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "inserting_a_subscriber") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "inserting_a_subscriber",
            uId: request.userId,
            sId: request.sId,
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  if (request.type === "join_waitlist") {
    const req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: { type: "adding_user_to_wishlist", email: request.email },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    )

    fetch(req)
      .then((response) => response.json())
      .then((jsonData) => {
        const obj = jsonData
        const resp = JSON.parse(obj.body)
        sendResponse({ status: 200, data: resp })
      })
      .catch((err) => {
        console.log("Opps, Something went wrong!", err)
        sendResponse({ status: 400 })
      })
  }

  return true
})
