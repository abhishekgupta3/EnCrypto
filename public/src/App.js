const Encrypt_button = document.getElementById('Encrypt_btn');
const inputPassword = document.getElementById('inputPassword');
const file = document.getElementById('myfile');

function fileEncryptHandler(password) {
    const file_name = file.files[0].name;
	const reader = new FileReader(); // reads the file

    reader.onload = function (ee) {
        // encrypting the password with crypto AES
        const encrypted = CryptoJS.AES.encrypt(ee.target.result, password);
        const link = document.createElement('a');
        link.href = 'data:application/octet-stream,' + encrypted;
        link.setAttribute('download', file_name + '.encrypted');
        document.body.appendChild(link);
        link.click();
    };

    if(file)reader.readAsDataURL(file.files[0]);
    else console.log("Error Occured... No file uploaded");

    return;
}

Encrypt_button.addEventListener('click',function (e) {
	e.preventDefault();
    fileEncryptHandler(inputPassword.value);
});	