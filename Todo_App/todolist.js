$(document).ready(function() {

    $(form).on("submit", function() {

        var item = $('form input');
        var todo = { data: item.val() };

        $.ajax({

            type = 'POST',
            url = '/todo',
            data = todo,

            success: function(data) {
                //do  somithing for fronted..
                // console.log(data);

                location.reload();
            }

        });

        return false;


    });

    //Delete item..

    $('li').on('click', function() {
        var item = $(this).text().replace(/ /g, "-");

        $.ajax({

            type: "DELETE",
            url: "/todo/" + item,

            success: function() {

                location.reload();

            }


        })

    })

});