$(document).ready(function() {
  // For expanding form options when clicked
  $("#headaches").click(function() {    
   $("#headache-collapse").toggle();
  }); 

  $("#shakingHand").click(function() {    
  $("#shaking-hand").toggle();
  });

// form validation
 $("#prenuvo-form").validate({
   rules: {
     "require-one": {
       required: true,
       minlength: 1,
     }
   }
 });
})