let reg = {
    phone: 
    ykhm: '/045-d{3}-d{4}',
    tko: '/030-d{4}-d{4}',
}

let form = document.getElementById('form');
form.onsubmit = () => {
    let val = form.hoge.value;
    console.log(val);
    return false;
}
let judge = (val) => {
    let region;
    if (val.match(reg.ykhm))
        region = 'Yokohama';
    else if (val.match(reg.tko))
        region = 'Tokyo';
}
