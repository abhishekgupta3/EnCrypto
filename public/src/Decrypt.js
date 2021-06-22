const Decrypt_button = document.getElementById('Decrypt_btn');
const inputPassword = document.getElementById('inputPassword');
const file = document.getElementById('myfile');

// decrypt the uploaded file
function fileDecryptHandler(password) {
	
    const file_name = file.files[0].name;
    const reader = new FileReader();
 
    reader.onload = function (ee) {
        const decrypted = CryptoJS.AES.decrypt(ee.target.result, password).toString(CryptoJS.enc.Latin1);
        
        if (!/^data:/.test(decrypted)) {
            alert("Invalid key or file! Please try again.");
            return;
        }
    
        const link = document.createElement('a');
        link.href = decrypted;
        link.setAttribute('download', file_name.replace('.encrypted', ''));

        document.body.appendChild(link);
        link.click();
    };

    if(file)reader.readAsText(file.files[0]);

    return;
}

Decrypt_button.addEventListener('click',function (e) {
    e.preventDefault();
    if(inputPassword.value.length == 0 ){
        alert("Enter a key of length atleast 3.");
        return;
    }
    fileDecryptHandler(inputPassword.value);
}); 