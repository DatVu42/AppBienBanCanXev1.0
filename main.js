let trucCaELE = '';
let trucCaText = '';
let thuMuaELE = '';
let canXeELE = '';
let canXeText = '';
let kcsELE = '';
let kcsText = '';
let bienSoXe = '';
let soPhieu = '';
let canVao = '';
let ngayCanVao = '';
let thangCanVao = '';
let namCanVao = '';
let gioCanVao = '';
let phutCanVao = '';
let canRa = '';
let ngayCanRa = '';
let thangCanRa = '';
let namCanRa = '';
let gioCanRa = '';
let phutCanRa = '';
let tLFull = 0;
let tLXe = 0;
let chungLoaiELE = '';
let chungLoaiText = '';
let lyDoELE = '';
let lyDoText = '';

let chucVuELE = '';
let thuMuaLI = '';

let maChungLoai = '';
let khuVuc = '';

let maLyDo = '';
let chiTietLyDo = '';

let isValid = false;

function getELE(id) {
    return document.getElementById(id);
}

function getFormValues() {
    trucCaELE = document.getElementById('trucCa');
    trucCaText = trucCaELE.options[trucCaELE.selectedIndex].text;
    thuMuaELE = document.getElementById('thuMua');
    canXeELE = document.getElementById('can');
    canXeText = canXeELE.options[canXeELE.selectedIndex].text;
    kcsELE = document.getElementById('kcs');
    kcsText = kcsELE.options[kcsELE.selectedIndex].text;
    bienSoXe = document.getElementById('soXe').value;
    soPhieu = document.getElementById('soPhieu').value;
    canVao = document.getElementById('canVao').value;
    canRa = document.getElementById('canRa').value;
    tLFull = document.getElementById('tLXeVaHang').value;
    tLXe = document.getElementById('tLXe').value;
    chungLoaiELE = document.getElementById('chungLoai');
    chungLoaiText = chungLoaiELE.options[chungLoaiELE.selectedIndex].text;
    lyDoELE = document.getElementById('lyDo');
    lyDoText = lyDoELE.options[lyDoELE.selectedIndex].text;

    var dateVao = new Date(canVao);
    ngayCanVao = dateVao.getDate();
    thangCanVao = dateVao.getMonth() + 1;
    namCanVao = dateVao.getFullYear();
    gioCanVao = dateVao.getHours();
    phutCanVao = dateVao.getMinutes();
    // ngayGioCanVao = new Date(canVao);

    var dateRa = new Date(canRa);
    ngayCanRa = dateRa.getDate();
    thangCanRa = dateRa.getMonth() + 1;
    namCanRa = dateRa.getFullYear();
    gioCanRa = dateRa.getHours();
    phutCanRa = dateRa.getMinutes();

    chucVuELE = document.getElementById('chucVu');
    thuMuaLI = document.getElementById('thuMuaLI');

    maChungLoai = chungLoaiELE.options[chungLoaiELE.selectedIndex].value;
    timKhuVuc(maChungLoai);

    maLyDo = lyDoELE.options[lyDoELE.selectedIndex].value;
    timLyDo(maLyDo, maChungLoai);
}

function validationForm() {
    getELE('xemBienBan').removeAttribute('data-target');

    if (bienSoXe === '') {
        getELE('checkSoXe').classList.remove('hidden');
        getELE('soXe').focus();
        return false;
    } else {
        getELE('checkSoXe').classList.add('hidden');
    }

    if (soPhieu === '') {
        getELE('checkSoPhieu').classList.remove('hidden');
        getELE('soPhieu').focus();
        return false;
    } else {
        getELE('checkSoPhieu').classList.add('hidden');
    }

    if (canVao === '') {
        getELE('checkNgayGioVao').classList.remove('hidden');
        getELE('canVao').focus();
        return false;
    } else {
        getELE('checkNgayGioVao').classList.add('hidden');
    }

    if (canRa === '') {
        getELE('checkNgayGioRa').classList.remove('hidden');
        getELE('canRa').focus();
        return false;
    } else {
        getELE('checkNgayGioRa').classList.add('hidden');
    }

    if (tLFull === '') {
        getELE('checkTLFull').classList.remove('hidden');
        getELE('tLXeVaHang').focus();
        return false;
    } else {
        getELE('checkTLFull').classList.add('hidden');
    }

    if (tLXe === '') {
        getELE('checkTLXe').classList.remove('hidden');
        getELE('tLXe').focus();
        return false;
    } else {
        getELE('checkTLXe').classList.add('hidden');
    }

    getELE('xemBienBan').setAttribute('data-target', '#modalBienBan');
    getELE('xemBienBan').addEventListener('click', bindingData);
}

function checkTrucCa() {
    getFormValues();

    if (chungLoaiELE.value === 'kdx') {
        thuMuaELE.value = 'Lê Thanh Long';
        getELE('thuMuaFooterTren').removeAttribute('hidden');
        getELE('thuMuaFooterDuoi').removeAttribute('hidden');
    } else {
        thuMuaELE.value = 'Lê Công Tùng';
        getELE('thuMuaFooterTren').setAttribute('hidden', '');
        getELE('thuMuaFooterDuoi').setAttribute('hidden', '');
    }

    if (trucCaELE.value === 'lct' && chungLoaiELE.value !== 'kdx') {
        chucVuELE.innerHTML = 'Trực ca sản xuất & Phụ trách thu mua';
        thuMuaLI.setAttribute('hidden', '');
        getELE('trucCaFooterTren').innerHTML = 'Trực ca sản xuất & Phụ trách thu mua';
        getELE('thuMuaFooterTren').setAttribute('hidden', '');
        getELE('thuMuaFooterDuoi').setAttribute('hidden', '');
        getELE('trucCaFooterTren').classList.add('w-50');
        getELE('trucCaFooterDuoi').classList.add('w-50');

    } else {
        chucVuELE.innerHTML = 'Trực ca sản xuất';
        thuMuaLI.removeAttribute('hidden');
        getELE('trucCaFooterTren').innerHTML = 'Trực ca sản xuất';
        getELE('thuMuaFooterTren').removeAttribute('hidden');
        getELE('thuMuaFooterDuoi').removeAttribute('hidden');
        getELE('trucCaFooterTren').classList.remove('w-50');
        getELE('trucCaFooterDuoi').classList.remove('w-50');
    }
}
// checkTrucCa();

function timKhuVuc(maChungLoai) {
    switch (maChungLoai) {
        case 'kdl':
            khuVuc = 'Đại Lộc';
            break;
        case 'kdx':
            khuVuc = 'Duy Xuyên';
            break;

        default:
            khuVuc = 'Hà Nha';
            break;
    }
};

function timLyDo(maLyDo, maChungLoai) {
    switch (maLyDo) {
        case 'qch':
            chiTietLyDo = 'Xe này tài xế chạy vội nên quên chụp hình';
            break;
        case 'hcm':
            chiTietLyDo = 'Xe này tài xế chụp hình bị mờ, không rõ biển số';
            break;

        default:
            chiTietLyDo = `Xe này tài xế chạy vội nên qua ${maChungLoai === 'kdl' ? 'Duy Xuyên' : 'Đại Lộc'} mới chụp hình`;
            break;
    }
}

function bindingData() {
    getFormValues();
    validationForm();
    console.log('chạy hàm này');
    const soXeList = document.querySelectorAll('.soXe');
    for (let i = 0; i < soXeList.length; i++) {
        soXeList[i].innerHTML = bienSoXe;
    }

    const loiList = document.querySelectorAll('.loi');
    for (let i = 0; i < loiList.length; i++) {
        loiList[i].innerHTML = lyDoText.toLowerCase();
    }

    const gioVaoList = document.querySelectorAll('.gioVao');
    for (let i = 0; i < gioVaoList.length; i++) {
        gioVaoList[i].innerHTML = gioCanVao;
    }

    // Ngày giờ cân vào
    const phutVaoList = document.querySelectorAll('.phutVao');
    for (let i = 0; i < phutVaoList.length; i++) {
        phutVaoList[i].innerHTML = phutCanVao;
    }

    const ngayVaoList = document.querySelectorAll('.ngayVao');
    for (let i = 0; i < ngayVaoList.length; i++) {
        ngayVaoList[i].innerHTML = ngayCanVao;
    }

    const thangVaoList = document.querySelectorAll('.thangVao');
    for (let i = 0; i < thangVaoList.length; i++) {
        thangVaoList[i].innerHTML = thangCanVao;
    }

    const namVaoList = document.querySelectorAll('.namVao');
    for (let i = 0; i < namVaoList.length; i++) {
        namVaoList[i].innerHTML = namCanVao;
    }

    // Ngày giờ cân ra
    getELE('ngayRa').innerHTML = ngayCanRa;
    getELE('thangRa').innerHTML = thangCanRa;
    getELE('namRa').innerHTML = namCanRa;
    getELE('gioRa').innerHTML = gioCanRa;
    getELE('phutRa').innerHTML = phutCanRa;

    const trucCaList = document.querySelectorAll('.showTrucCa');
    for (let i = 0; i < trucCaList.length; i++) {
        trucCaList[i].innerHTML = trucCaText;
    }

    const thuMuaList = document.querySelectorAll('.showThuMua');
    for (let i = 0; i < thuMuaList.length; i++) {
        thuMuaList[i].innerHTML = thuMuaELE.value;
    }

    const kcsList = document.querySelectorAll('.showKCS');
    for (let i = 0; i < kcsList.length; i++) {
        kcsList[i].innerHTML = kcsText;
    }

    const canXeList = document.querySelectorAll('.showCanxe');
    for (let i = 0; i < canXeList.length; i++) {
        canXeList[i].innerHTML = canXeText;
    }

    document.getElementById('khuVuc').innerHTML = khuVuc;
    document.getElementById('chiTietLyDo').innerHTML = chiTietLyDo;
    document.getElementById('chungLoaiDisplay').innerHTML = chungLoaiText;
    document.getElementById('showSoPhieu').innerHTML = 'Số phiếu: ' + soPhieu;

    getELE('showTLFull').innerHTML = Number(tLFull).toLocaleString();
    getELE('showTLXe').innerHTML = Number(tLXe).toLocaleString();
    getELE('showTLHang').innerHTML = Number(tLFull - tLXe).toLocaleString();
}

function inBienBan() {
    window.print();
}