**jquery form validation Dan captcha input**

> tugas A3 Di Salt Academy kali ini saya membuat jquery form validaiton dengan captcha input

### pertama kita membuat dulu table pada file hmtl

```
pada clsss card itu akan saya gunakan untuk membaut file di css nya
<div class="card">
        <form action="#" name="userForm" id="userForm" method="post">
            <h3>Jquery Form </h3>
            <div class="form-group">
                <input class="input" type="text" name="name" id="name" placeholder="Enter Name">
            </div>
            <div class="form-group">
                <input class="input" type="text" name="email" id="email" placeholder="Enter Email">
            </div>
            <div class="form-group">
                <input class="input" type="addres" name="addres" id="addres" placeholder="Enter Your addres">
            </div>
            <div class="form-group">
                <input class="input" type="number" name="ZipCode" id="ZipCode" placeholder="Enter Your Zip Code">
            </div>
            <div class="form-group">
                <input class="input" type="date" name="date" id="date" placeholder="Enter Your Birth day">
            </div>
            <div class="form-group">
                <input class="input" type="number" name="phone" id="phone" placeholder="Enter Your Phone">
            </div>
            <div class="form-group">
                <input class="input" type="password" name="password" id="password" placeholder="Enter Youre Password">
            </div>
            <div class="form-group">
                <input class="input" type="password" name="confirm_password" id="confirm_password" placeholder="Enter Confirm Password">
            </div>
### kita menambahkan lib dari ajax jquery

> bisa di download dari library atau bisa juga di melalui link script

```

"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

```
"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js">

```

#### kita membuat file jquery untuk form validasi nya

> kita membuat rules validasi dalam field yang akan kita buat yang akan memunculkan outpur eror jika form tidak sesuai dengan rules yang kita buat

```
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


```

### kedua kita membuat captcha validasi dengan jquery

> kita akan membuat variable captcha untuk validation user pada form yang akan kita buat

```

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

```

```

> lalu kita membuat validasi pada captcha yang kita buat di variable create captcha sebelumnya

```

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
        $('#WrongCaptchaError').text('Masukan Code Yang Berada Di gambar bawah.').show();
        $('#UserCaptchaCode').focus();
    } else {
        if(result == false) {
        IsAllowed = false;
        $('#WrongCaptchaError').text('Captcha Salah! Silahkan Ulangi Lagi.').show();
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

```
#### panduan untuk menginstall pluggin ini

pertama ketikan npm init pada project anda
lalu ketikan npm npm i tugas_jquery_amin_farhan
```
