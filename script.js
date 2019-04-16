const callbackBtn = document.querySelector(".fixed-btn");
const submitForm = document.querySelector(".callback-form");
document.body.appendChild(submitForm);
callbackBtn.addEventListener('click', () => {
    document
    submitForm.style.cssText = "display: block; \
                                z-index: 4;\
                                width: 150px; \
                                height: 150px; \
                                top: 5%; \
                                left: 10%;\
    ";
}, false);

const userName = document.querySelector('.user-name');
const sendUserName = userName.value;
console.log(userName.value);

const userPhone = document.querySelector('.user-phone');
const sendUserPhone = userPhone.value;
console.log(sendUserPhone);

function sendMail() {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': '2Bo-BAr49Kira_NUv_nbyw',
            'message': {
                'from_email': 'nemascha@gmail.com',
                'to': [
                    {
                        'email': 'mouse_sl@mail.ru',
                        'name': sendUserName,
                        'phone': sendUserPhone,
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'html': '<input class="user-phone" type="text" placeholder="введите номер телефона" value="" name="tel">'
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
}
