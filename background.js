chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("in Background");
    if(request.type=="increasing_views")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{ type: "increasing_views", id:request.id }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }
    if(request.type=="upvoting")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{ type: "upvoting", id:request.id }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }

    if(request.type=="downvoting")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{ type: "downvoting", id:request.id }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }
    if(request.type=="deleting_favourite_prompt")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{type: "deleting_favourite_prompt",
                  uId: request.uId,
                  pId: request.pId,
                }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }
    if(request.type=="fetching_topics")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{ type: "fetching_topics" }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                console.log(obj);
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }
    if(request.type=="sort")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{ type: "sort" }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });
        fetch(req)
            .then(function(response) {
                // debugger;
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                console.log(obj);
                var resp=JSON.parse(obj.body);
                sendResponse({ status: 200,data: resp});         
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            })

       
        
    }
    if (request.type == "fetch_prompts") {
     
      var req = new Request(
        "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
        {
          method: "POST",
          body: JSON.stringify({ body: { type: "fetch_prompts",id:request.id, page:request.page } }),
          headers: {
            "Content-Type": "application/json;",
          },
        }
      );
      fetch(req)
        .then(function (response) {
          // debugger;
          return response.json();
        })
        .then(function (jsonData) {
          var obj = jsonData;
          console.log(obj);
          var resp = JSON.parse(obj.body);
          sendResponse({ status: 200, data: resp });
        })
        .catch(function (err) {
          console.log("Opps, Something went wrong!", err);
          sendResponse({ status: 400 });
        });
    }
    if (request.type == "checking_user") {
      var req = new Request(
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
      );
      fetch(req)
        .then(function (response) {
          // debugger;
          return response.json();
        })
        .then(function (jsonData) {
          var obj = jsonData;
          console.log(obj);
          var resp = JSON.parse(obj.body);
          sendResponse({ status: 200, data: resp });
        })
        .catch(function (err) {
          console.log("Opps, Something went wrong!", err);
          sendResponse({ status: 400 });
        });
    }

      if (request.type == "inserting_user") {
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: { type: "inserting_user", username:request.username,email:request.email, image:request.image },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            sendResponse({ status: 200, data: resp });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }

      if (request.type == "fetching_user_prompts") {
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: {
                type: "fetching_user_prompts",
                uId:request.uId,
              },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            sendResponse({ status: 200, data: resp });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }


       if (request.type == "changing_pID") {
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: {
                type: "changing_pID",id:request.id
                
              },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            sendResponse({ status: 200, data: resp,message:'successfully done' });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }

      if (request.type == "creating_prompt") {
        console.log(request);
       
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: {
                type: "creating_prompt",
                template:request.template,
                teaser:request.teaser,
                hint:request.hint,
                title:request.title,
                author:request.author,
                url:request.url,
                topic:request.topic,
                subtopic:request.subtopic,
                price:request.price,
                tone:request.tone,
                checkUser:request.checkUser,
                file_content:request.file_content,
                 user:request.user,
                 sequential:request.sequential,
                 pID:request.pID
                 
              },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
           
           return response.json();
            
          })
          .then(function (jsonData) {
           var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            console.log(resp);
            sendResponse({ status: 200, data: resp });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }

       if(request.type=="checking_favourite_prompt_existence")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{type: "checking_favourite_prompt_existence",
                  uId: request.uId,
                  pId: request.pId,
                }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }

       if(request.type=="adding_favourite_prompt")
    {
        var req = new Request('https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/', {
                method: 'POST',
                body:JSON.stringify({"body":{type: "adding_favourite_prompt",
                  uId: request.uId,
                  pId: request.pId,
                }}),
                headers: {
                    "Content-Type": "application/json;"
                }
            });

        fetch(req)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                var obj=jsonData;
                var resp=JSON.parse(obj.body)
                sendResponse({ status: 200,data: resp});
            }).catch(function(err) {
                console.log("Opps, Something went wrong!", err);
                sendResponse({ status: 400});
            });

    }

    if (request.type == "search_prompts") {
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: { type: "search_prompts", id:request.id,string:request.string },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            sendResponse({ status: 200, data: resp });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }


      if (request.type == "inserting_category_and_subcategory") {
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: { type: "inserting_category_and_subcategory", category_name:request.topic_name,subcategory_name:request.subtopic_name },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            sendResponse({ status: 200, data: resp });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }


      if (request.type == "filter_prompts") {
        var req = new Request(
          "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
          {
            method: "POST",
            body: JSON.stringify({
              body: { type: "filter_prompts", category_selected:request.category_selected,
              id:request.id,  
              price_filter:request.price_filter,
              free_filter:request.free_filter,
              subcategory_selected:request.subcategory_selected },
            }),
            headers: {
              "Content-Type": "application/json;",
            },
          }
        );
        fetch(req)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData;
            console.log(obj);
            var resp = JSON.parse(obj.body);
            sendResponse({ status: 200, data: resp });
          })
          .catch(function (err) {
            console.log("Opps, Something went wrong!", err);
            sendResponse({ status: 400 });
          });
      }

      if (request.type == "file_handling") {
        // var req = new Request(
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
        var req12 = new Request(
          "https://gw4esvbumd4ru2twe2jnd2p5na0tbspd.lambda-url.us-east-1.on.aws/",
          {
            method: "POST",
            body: JSON.stringify({
              text:request.csv_file_content,
              question:request.data
              }),
            mode: 'cors',
            redirect: 'follow',
            headers: {
              "Content-Type": "application/json;",
            },
          });

        fetch(req12)
          .then(function (response) {
            // debugger;
            return response.json();
          })
          .then(function (jsonData) {
            var obj = jsonData
            console.log(obj)
            sendResponse({ status: 200, data: obj });
          })
          .catch(function (err) {
            console.log('Opps, Something went wrong!', err)
          });
      }


  if (request.type == "inserting_user_prompt_history") {
    var req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "inserting_user_prompt_history", user: request.user,
            prompt_id:request.prompt_id
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    );
    fetch(req)
      .then(function (response) {
        // debugger;
        return response.json();
      })
      .then(function (jsonData) {
        var obj = jsonData;
        console.log(obj);
        var resp = JSON.parse(obj.body);
        sendResponse({ status: 200, data: resp });
      })
      .catch(function (err) {
        console.log("Opps, Something went wrong!", err);
        sendResponse({ status: 400 });
      });
  }


  if (request.type == "fetching_user_prompt_history") {
    var req = new Request(
      "https://hypgs0jnvl.execute-api.us-east-1.amazonaws.com/dev/ai/",
      {
        method: "POST",
        body: JSON.stringify({
          body: {
            type: "fetching_user_prompt_history", user: request.user,
            
          },
        }),
        headers: {
          "Content-Type": "application/json;",
        },
      }
    );
    fetch(req)
      .then(function (response) {
        // debugger;
        return response.json();
      })
      .then(function (jsonData) {
        var obj = jsonData;
        console.log(obj);
        var resp = JSON.parse(obj.body);
        sendResponse({ status: 200, data: resp });
      })
      .catch(function (err) {
        console.log("Opps, Something went wrong!", err);
        sendResponse({ status: 400 });
      });
  }







    return true;
})