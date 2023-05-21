

    const searchbar_filter = (e) => {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            $('#searchbtn').click();
        }
        let isEmpty = $('#searchbar').val();
        if (e.keyCode==8 && !isEmpty) {

             fetchPrompts();

        }
    }



