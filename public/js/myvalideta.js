$( document ).ready(function() {
    $('#form').validetta({
        realTime: true,
        onValid : function( event ) {
            event.preventDefault(); // Will prevent the submission of the form
            // alert( 'Nice, Form is valid.' );

            

        // e.preventDefault();

        var nom = $('#name').val();
        var mail = $('#mail').val();
        var message = $('#message').val();



    $.ajax({
        // 1) on définit le fichier vers lequel on envoye la requête POST
    url : '/php/info.php',
   
    // 2/ on spécifie la méthode  
    type : 'POST', // Le type de la requête HTTP, ici  POST
   
    // 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
    data : { 
            nom: nom, 
            mail: mail, 
            message: message
            }, // On fait passer nos variables au script coucou.php
    
    // 4) format de retour du fichier php dans "data"
    dataType : 'html',
    
    // 5) fonction à effectuer en cas de succès
    success : function(data){ //  contient le HTML renvoyé

        $('.contenue').js(data);

        }

    });



          },
          onError : function( event ){
            event.preventDefault();
            // alert( 'Stop bro !! There are some errors.');
          }
      }
      );

//       $("#btn").click(function(e){



    

// });


});

