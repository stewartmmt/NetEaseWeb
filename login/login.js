const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const submitbtn = document.getElementById('sub');
submitbtn.addEventListener('click', login);
const whcheck = document.getElementById('deal')

async function login() {
    const phone = phoneInput.value;
    const password = passwordInput.value;
    const res = fetch('http://redrock.udday.cn:2022/login/cellphone',
        {
            method: 'post',
            body: JSON.stringify({ phone, password })
        })
    const data = await (await res).text;
    if (data.code === '502') { alert: ('invalid  password') }
    else if (data.code === '501') {
        alert: ('账号不存在')

    } else {
        localStorage.setItem('token', data);
    } console.log(data)
}