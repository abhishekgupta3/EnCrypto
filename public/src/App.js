const button = document.getElementById('upload_encyrpt');
const inputPassword = document.getElementById('inputPassword');

const file = document.getElementById('myfile');
const password = "123345";

file.addEventListener('change',function (e) {
    const file_name = file.files[0].name;
	const reader = new FileReader();

    reader.onload = function (ee) {
        const encrypted = CryptoJS.AES.encrypt(ee.target.result, password);
        const link = document.createElement('a');
        link.href = 'data:application/octet-stream,' + encrypted;
        link.setAttribute('download', file_name + '.encrypted');
        document.body.appendChild(link);
        link.click();
    };
    if(file)reader.readAsDataURL(file.files[0]);

}, false);


button.addEventListener('click',function (e) {
	e.preventDefault();
	console.log("pass " ,inputPassword.value);
	// if(inputPassword.length<16){
	// 	alert('Password lenght must be atleast 16');
	// }
	// else {
		var reader = new FileReader();
            reader.onload = function (ee) {
            	console.log('file opened');
                // var encrypted = CryptoJS.AES.encrypt(ee.target.result, password);
                // const link = document.createElement('a');
                // link.href = 'data:application/octet-stream,' + encrypted;
                // link.setAttribute('download', file.name + '.encrypted');
                // document.body.appendChild(link);
                // link.click();
            };
            reader.readAsDataURL(file);
	// }
	console.log('clicked');
});	