$("#userForm").validate({
    rules:{
        name:{
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        },
        addres:{
            required: true,
            addres: true
        },
        ZipCode:{
            required: true,
            minlength:4
        },
        date:{
            required: true,
            date: true
        },
        phone:{
            required: true,
            minlength:12
        },
        password:{
            required: true,
            minlength: 5
        },
        confirm_password:{
            required: true,
            equalTo: '#password'
        },
    },
    messages:{
        name:{
            required: 'The Name field is required',
            minlength: 'You must enter at least 3 characters'
        },
        email: {
            required: 'The Email field is required',
            email: 'You must enter a valid email address'
        },
        addres: {
            required: 'The Addres field is required',
            adrres: 'You must enter youre addres'
        },
        ZipCode: {
            required: 'The Zip Code field is required',
            minlength: 'You must enter at least 4 digit'
        },
        date: {
            required: 'The Date field is required',
        },
        phone: {
            required: 'The Phone field is required',
            minlength: 'You must enter at least 12 digit'
        },
        password:{
            required: 'The Password field is required',
            minlength: 'You must enter at least 12 characters'
        },
        confirm_password:{
            required: 'The Confirm password field is required',
            equalTo: 'The Confirm password field must match with Password'
        },
    },
    
    submitHandler: function(form){
        alert("Submitted");
        form.submit();
    }
})
var cd;
var IsAllowed = false;
$(document).ready(function() {
    CreateCaptcha();
});

function CreateCaptcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');               
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $('#CaptchaImageCode').empty().append('<canvas id="CapCode" class="capcode" width="300" height="80"></canvas>')
        var c = document.getElementById("CapCode"),
        ctx=c.getContext("2d"),
        x = c.width / 2,
        img = new Image();
    img.src = "https://images.unsplash.com/photo-1656870679469-156e3c955489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    img.onload = function () {
        var pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.font="46px Roboto Slab";
        ctx.fillStyle = '#212121';
        ctx.textAlign = 'center';
        ctx.setTransform (1, -0.12, 0, 1, 0, 15);
        ctx.fillText(cd,x,55);
    };
}
// Validate Captcha
function ValidateCaptcha() {
    var string1 = removeSpaces(cd);
    var string2 = removeSpaces($('#UserCaptchaCode').val());
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}
// Remove Spaces
function removeSpaces(string) {
    return string.split(' ').join('');
}
    
    // Check Captcha
    function CheckCaptcha() {
    let result = ValidateCaptcha();
    if( $("#UserCaptchaCode").val() == "" || $("#UserCaptchaCode").val() == null || $("#UserCaptchaCode").val() == "undefined") {
        $('#WrongCaptchaError').text('Enter The Code Below.').show();
        $('#UserCaptchaCode').focus();
    } else {
        if(result == false) { 
        IsAllowed = false;
        $('#WrongCaptchaError').text('Captcha Wrong! .').show();
        CreateCaptcha();
        $('#UserCaptchaCode').focus().select();
        }
        else { 
        IsAllowed = true;
        $('#UserCaptchaCode').val('').attr('place-holder','Enter Captcha - Case Sensitive');
        CreateCaptcha();
        $('#WrongCaptchaError').fadeOut(100);
        $('#SuccessMessage').fadeIn(500).css('display','block').delay(5000).fadeOut(250);
        }
    }  
}
