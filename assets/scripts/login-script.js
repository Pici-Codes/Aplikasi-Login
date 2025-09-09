/** @module Login-Script */
/** 
*Membuat variabel loginFormElement untuk tampilan Form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/** 
*Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/** 
*Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/** 
*Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/** 
*Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/** 
*Membuat variabel email untuk menyimpan nilai email yang didapatkan setelah klik tombol button.
* @constant {string}
*/
  const email = inputEmailElement.value;

/** 
*Membuat variabel password untuk menyimpan nilai password yang didapatkan setelah klik tombol button.
* @constant {string}
*/
  const password = inputPasswordElement.value;

/* comment : Memastikan bahwal email dan password yang diinput sudah sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* comment : Jika sesuai maka program berpindah ke halaman home */
    goToHome();
  } else {

    /* comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah */
    showPopUp();
  }
});
