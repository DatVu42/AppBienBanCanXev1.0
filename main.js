let trucCaELE = '';
let trucCaText = '';
let thuMuaVjc = 'Lê Công Tùng';
let thuMuaVnf = 'Lê Thanh Long';
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
let giayCanVao = '';
let canRa = '';
let ngayCanRa = '';
let thangCanRa = '';
let namCanRa = '';
let gioCanRa = '';
let phutCanRa = '';
let giayCanRa = '';
let tLFull = 0;
let tLXe = 0;
let chungLoaiELE = '';
let chungLoaiText = '';
let lyDoELE = '';
let lyDoText = '';

let chucVuELE = '';
let thuMuaVjcLI = '';
let thuMuaVnfLI = '';

let maChungLoai = '';
let khuVuc = '';

let maLyDo = '';
let chiTietLyDo = '';

var cars = ['15C 24567', '36C 01609', '37H 02526', '37H 03577', '43C 00513', '43C 01117', '43C 01365', '43C 01367', '43C 01953', '43C 02298', '43C 02513', '43C 03108', '43C 03109', '43C 03254', '43C 04564', '43c 04659', '43C 05593', '43C 10013', '43C 10199', '43C 11216', '43C 13041', '43C 13852', '43C 18340', '43C 19137', '43C 23010', '43C 23220', '43C 24920', '43C 26311', '60C 16560', '60S 0487', '74C 01189', '74C 03767', '74C 03938', '74C 04299', '74C 04731', '74C 07399', '74C 09929', '75H 00557', '75K 3392', '76C 02709', '76C 06257', '76C 06543', '76C 06766', '76C 07236', '76K 8790', '76M 1443', '76M 2052', '81C 02495', '82C 01775', '92C 00066', '92C 00146', '92C 00150', '92C 00163', '92C 00180', '92C 00238', '92C 00242', '92C 00270', '92C 00343', '92C 00594', '92C 00729', '92C 00745', '92C 00780', '92C 00878', '92C 00988', '92C 01050', '92C 01086', '92C 01096', '92C 01126', '92C 01198', '92C 01216', '92C 01224', '92C 01266', '92C 01273', '92C 01391', '92C 01484', '92C 01518', '92C 01647', '92C 01674', '92C 01694', '92C 01700', '92C 01721', '92C 01747', '92C 01864', '92C 01920', '92C 02038', '92c 02042', '92C 02087', '92C 02091', '92C 02248', '92C 03067', '92C 03241', '92C 03273', '92C 03351', '92C 03381', '92C 03552', '92C 03599', '92C 04226', '92C 04232', '92C 04361', '92C 04362', '92C 04376', '92C 05510', '92C 05927', '92C 06100', '92C 06451', '92C 06557', '92C 06576', '92C 06987', '92C 07152', '92C 07284', '92C 07317', '92C 07490', '92C 07588', '92C 07855', '92C 07955', '92C 08139', '92C 08267', '92C 08290', '92C 08304', '92C 08387', '92C 08436', '92C 08559', '92C 08660', '92C 08661', '92C 08997', '92C 09557', '92C 09855', '92C 09944', '92C 10063', '92C 10122', '92C 10171', '92C 10332', '92C 10431', '92C 10485', '92C 10504', '92C 10513', '92C 10857', '92C 11076', '92C 11117', '92C 11123', '92C 11175', '92C 11235', '92C 11317', '92C 11323', '92C 11569', '92C 11831', '92C 11864', '92C 11880', '92C 11918', '92C 12253', '92C 12424', '92C 12441', '92C 12477', '92C 12554', '92C 12615', '92C 12633', '92C 12806', '92C 12816', '92C 12892', '92C 12924', '92C 13540', '92C 13568', '92C 13727', '92C 13972', '92C 14153', '92C 14404', '92C 14534', '92C 14600', '92C 14619', '92C 14658', '92C 15133', '92C 15397', '92C 15408', '92C 15526', '92c 15533', '92C 15844', '92C 15865', '92C 15943', '92C 15979', '92C 16123', '92C 16162', '92C 17222', '92C 17640', '92C 17652', '92C 18095', '92C 18469', '92C 18630', '92C 18649', '92C 18889', '92C 19319', '92C 19833', '92C 198469', '92C 19847', '92C 19847', '92C 19983', '92C 20014', '92C 21029', '92H 00868', '92H 01108', '92H 0833', '92H 1067', '92H 1433', '92H 1615', '92H 1785', '92H 1848', '92H 1962', '92H 1983', '92H 1994'];

function getELE(id) {
    return document.getElementById(id);
}

function getFormValues() {
    trucCaELE = getELE('trucCa');
    trucCaText = trucCaELE.options[trucCaELE.selectedIndex].text;
    canXeELE = getELE('can');
    canXeText = canXeELE.options[canXeELE.selectedIndex].text;
    kcsELE = getELE('kcs');
    kcsText = kcsELE.options[kcsELE.selectedIndex].text;
    bienSoXe = getELE('soXe').value;
    soPhieu = getELE('soPhieu').value;
    canVao = getELE('canVao').value;
    canRa = getELE('canRa').value;
    tLFull = getELE('tLXeVaHang').value;
    tLXe = getELE('tLXe').value;
    chungLoaiELE = getELE('chungLoai');
    chungLoaiText = chungLoaiELE.options[chungLoaiELE.selectedIndex].text;
    lyDoELE = getELE('lyDo');
    lyDoText = lyDoELE.options[lyDoELE.selectedIndex].text;

    var dateVao = new Date(canVao);
    ngayCanVao = ('0' + dateVao.getDate()).slice(-2);
    thangCanVao = ('0' + (dateVao.getMonth() + 1)).slice(-2);
    namCanVao = dateVao.getFullYear();
    gioCanVao = ('0' + dateVao.getHours()).slice(-2);
    phutCanVao = ('0' + dateVao.getMinutes()).slice(-2);
    giayCanVao = ('0' + dateVao.getSeconds()).slice(-2);

    var dateRa = new Date(canRa);
    ngayCanRa = ('0' + dateRa.getDate()).slice(-2);
    thangCanRa = ('0' + (dateRa.getMonth() + 1)).slice(-2);
    namCanRa = dateRa.getFullYear();
    gioCanRa = ('0' + dateRa.getHours()).slice(-2);
    phutCanRa = ('0' + dateRa.getMinutes()).slice(-2);
    giayCanRa = ('0' + dateRa.getSeconds()).slice(-2);

    chucVuELE = getELE('chucVu');
    thuMuaVjcLI = getELE('thuMuaVjcLI');
    thuMuaVnfLI = getELE('thuMuaVnfLI');

    maChungLoai = chungLoaiELE.options[chungLoaiELE.selectedIndex].value;
    timKhuVuc(maChungLoai);

    maLyDo = lyDoELE.options[lyDoELE.selectedIndex].value;
    timLyDo(maLyDo, maChungLoai);
}

function validationForm() {
    getELE('xemBienBan').removeAttribute('data-target');

    if (bienSoXe === '') {
        getELE('checkSoXe').removeAttribute('hidden');
        getELE('soXe').focus();
        return false;
    } else {
        getELE('checkSoXe').setAttribute('hidden', '');
    }

    if (soPhieu === '') {
        getELE('checkSoPhieu').removeAttribute('hidden');
        getELE('soPhieu').focus();
        return false;
    } else {
        getELE('checkSoPhieu').setAttribute('hidden', '');
    }

    if (canVao === '') {
        getELE('checkNgayGioVao').removeAttribute('hidden');
        getELE('canVao').focus();
        return false;
    } else {
        getELE('checkNgayGioVao').setAttribute('hidden', '');
    }

    if (canRa === '') {
        getELE('checkNgayGioRa').removeAttribute('hidden');
        getELE('canRa').focus();
        return false;
    } else {
        getELE('checkNgayGioRa').setAttribute('hidden', '');
    }

    if (tLFull === '') {
        getELE('checkTLFull').removeAttribute('hidden');
        getELE('tLXeVaHang').focus();
        return false;
    } else {
        getELE('checkTLFull').setAttribute('hidden', '');
    }

    if (tLXe === '') {
        getELE('checkTLXe').removeAttribute('hidden');
        getELE('tLXe').focus();
        return false;
    } else {
        getELE('checkTLXe').setAttribute('hidden', '');
    }

    getELE('xemBienBan').setAttribute('data-target', '#modalBienBan');
    getELE('xemBienBan').addEventListener('click', bindingData);
}

function checkTrucCa() {
    getFormValues();

    if (trucCaELE.value === 'lct') {
        chucVuELE.innerHTML = 'Trực ca sản xuất & Phụ trách thu mua VJC';
        thuMuaVjcLI.setAttribute('hidden', '');

        getELE('trucCaFooterTitle').innerHTML = 'Trực ca SX & PT thu mua VJC';
        getELE('thuMuaVjcFooterTitle').setAttribute('hidden', '');
        getELE('thuMuaVjcFooterName').setAttribute('hidden', '');

        getELE('trucCaFooterTitle').classList.add('w-30');
        getELE('kcsFooterTitle').classList.add('w-30');
        getELE('canFooterTitle').classList.add('w-30');
        getELE('trucCaFooterName').classList.add('w-30');
        getELE('kcsFooterName').classList.add('w-30');
        getELE('canFooterName').classList.add('w-30');

    } else {
        chucVuELE.innerHTML = 'Trực ca sản xuất';
        thuMuaVjcLI.removeAttribute('hidden');
        getELE('trucCaFooterTitle').innerHTML = 'Trực ca sản xuất';
        getELE('thuMuaVjcFooterTitle').removeAttribute('hidden');
        getELE('thuMuaVjcFooterName').removeAttribute('hidden');

        getELE('trucCaFooterTitle').classList.remove('w-30');
        getELE('kcsFooterTitle').classList.remove('w-30');
        getELE('canFooterTitle').classList.remove('w-30');
        getELE('trucCaFooterName').classList.remove('w-30');
        getELE('kcsFooterName').classList.remove('w-30');
        getELE('canFooterName').classList.remove('w-30');
    }
}
checkTrucCa();

function toogleThuMuaVnf() {
    getFormValues();

    if (chungLoaiELE.value !== 'kdx') {
        getELE('thuMuaVnfLI').setAttribute('hidden', '')
        getELE('thuMuaVnfFooterTitle').setAttribute('hidden', '');
        getELE('thuMuaVnfFooterName').setAttribute('hidden', '');
    } else {
        getELE('thuMuaVnfLI').removeAttribute('hidden')
        getELE('thuMuaVnfFooterTitle').removeAttribute('hidden');
        getELE('thuMuaVnfFooterName').removeAttribute('hidden');
    }
}

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
            chiTietLyDo = `Xe này tài xế chạy vội nên qua địa phận ${maChungLoai === 'kdl' ? 'Duy Xuyên' : 'Đại Lộc'} mới chụp hình`;
            break;
    }
}

function bindingData() {
    getFormValues();
    toogleThuMuaVnf();
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

    getELE('giayVao').innerHTML = giayCanVao;

    // Ngày giờ cân ra
    getELE('ngayRa').innerHTML = ngayCanRa;
    getELE('thangRa').innerHTML = thangCanRa;
    getELE('namRa').innerHTML = namCanRa;
    getELE('gioRa').innerHTML = gioCanRa;
    getELE('phutRa').innerHTML = phutCanRa;
    getELE('giayRa').innerHTML = giayCanRa;

    getELE('ngayRa2').innerHTML = ngayCanRa;
    getELE('thangRa2').innerHTML = thangCanRa;
    getELE('namRa2').innerHTML = namCanRa;

    const trucCaList = document.querySelectorAll('.showTrucCa');
    for (let i = 0; i < trucCaList.length; i++) {
        trucCaList[i].innerHTML = trucCaText;
    }

    const thuMuaVjcList = document.querySelectorAll('.showThuMuaVjc');
    for (let i = 0; i < thuMuaVjcList.length; i++) {
        thuMuaVjcList[i].innerHTML = thuMuaVjc;
    }

    const thuMuaVnfList = document.querySelectorAll('.showThuMuaVnf');
    for (let i = 0; i < thuMuaVnfList.length; i++) {
        thuMuaVnfList[i].innerHTML = thuMuaVnf;
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

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;

        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);

        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
autocomplete(document.getElementById("soXe"), cars);

function bindingDefaultDate() {
    var date = new Date();
    var yearNow = date.getFullYear();
    var monthNow = ('0' + (date.getMonth() + 1)).slice(-2);
    var dateNow = ('0' + date.getDate()).slice(-2);
    var hoursNow = ('0' + date.getHours()).slice(-2);
    var minutesNow = ('0' + date.getMinutes()).slice(-2);
    var secondsNow = ('0' + date.getSeconds()).slice(-2);

    var fullDateNow = `${yearNow}-${monthNow}-${dateNow}T${hoursNow}:${minutesNow}:${secondsNow}`;

    getELE('canVao').value = fullDateNow;
    getELE('canRa').value = fullDateNow;
}

bindingDefaultDate()