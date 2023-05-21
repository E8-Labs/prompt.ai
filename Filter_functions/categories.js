
//contains both categories aswell as subcategories filters.
   const sub_categories_filter=()=>{
       subcategory_selected = $("#Subcategories_filter").find(":selected").val();

       if (subcategory_selected !== 'none') {
           filter_prompts();
       }
       else if (subcategory_selected == 'none') {
           subcategory_selected = '';
           filter_prompts();
       }
   }

   const categories_filter=()=>{
       category_selected = $("#Category_filter").find(":selected").val();
       if (category_selected !== 'none') {
           let subcategories_selected = categories.filter((item) => item.name == category_selected);

           $('#Subcategories_filter').empty();
           $('#Subcategories_filter').append(`<option value='none'>  Sub category </option>`)
           for (let i = 0; i < subcategories_selected[0].subcategories.length; i++) {
               let data = subcategories_selected[0].subcategories[i];
               $('#Subcategories_filter').append(`<option value='${data.name}'>  ${data.name} </option>`)
           }

           $('#All_filter_button').css('background-color', '');
           $('#Paid_filter_button').css('background-color', '');
           $('#Free_filter_button').css('background-color', '');


           filter_prompts();




       }

       else {

           $('#Subcategories_filter').empty();
           $('#Subcategories_filter').append(`<option value='none'>  Sub category </option>`)
           $('#All_filter_button').css('background-color', '#595d5c');
           $('#Paid_filter_button').css('background-color', '');
           category_selected = '';
           subcategory_selected = '';

           fetchPrompts();

       }
   }