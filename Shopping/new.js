
const form = document.getElementById('form');
const user = document.getElementById('form-username');
const pass = document.getElementById('form-password');

const err=document.getElementById("feedback");

        
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            checkInputs();
        });

        function checkInputs() {
        // trim to remove the whitespaces
        const userValue = user.value.trim();
        const passValue = pass.value.trim();

        //     if(userValue === '') {
        //     setErrorFor(err, 'please provide crt username');
        // } else if(userValue=='Naveen'){
        //     setSuccessFor(err,'correct username');
        // }


        if(userValue==='Naveen' && passValue==='naveen123'){
            setSuccessFor(err,'correct username');
        }else{
            setErrorFor(err,'invalid username');
        }

        function setErrorFor(input,message) {
            err.textContent=message;
            err.classList.remove('text-success');
            err.classList.add('text-danger');
            toasterOptions();
        }

        function setSuccessFor(input,message) {
            err.textContent=message;
            err.classList.remove('text-danger');
            err.classList.add('text-success');
            toasterSuccess();
        }



        }
        function toasterOptions() {
            toastr["error"]("Please fill all the fields in the form", "Registration")
        
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-center",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
        };
        function toasterSuccess(){
         toastr["success"]("Successfully Registered", "Registration")
        
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-top-center",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
        };