//login
let logindata = document.querySelector('#login-data')
console.log(logindata);
if (logindata != null) {
    logindata.addEventListener('click',function () {
        let uname = document.getElementById('name').value;
        let pass = document.getElementById('pwd').value;
        console.log(uname, pass);
        fetch('http://localhost/api/login_get_method?username=' + uname + '&password='+pass).then((res) => res.json()).then((Res) => {
            console.log(Res);
            if(Res.Code == 1)
            {
                alert("Login Success")
            }
            else{
                alert("Register Yourself First")
            }
        })
    })
}





function RegApi() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;

    let data = { username: name, email: email, password: pwd, mobile: mobile }
    console.log(data);
    fetch('http://localhost/api/registration_api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({ allData: data })
    }).then((res) => res.json())
        .then((Response) => {
            console.log(Response);
        });
}