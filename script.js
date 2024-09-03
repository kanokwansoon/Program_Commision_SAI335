// script.js
let totalLocks = 0;
let totalStocks = 0;
let totalBarrels = 0;

const lockPrice = 45.0;
const stockPrice = 30.0;
const barrelPrice = 25.0;

function addSales() {
    let locks = parseInt(document.getElementById('locks').value);
    let stocks = parseInt(document.getElementById('stocks').value);
    let barrels = parseInt(document.getElementById('barrels').value);

    // ตรวจสอบค่าที่ป้อนเข้ามาว่าเป็นตัวเลขหรือไม่
    if (isNaN(locks) || locks < 0) locks = 0;
    if (isNaN(stocks) || stocks < 0) stocks = 0;
    if (isNaN(barrels) || barrels < 0) barrels = 0;
    
    totalLocks += locks;
    totalStocks += stocks;
    totalBarrels += barrels;
    
    document.getElementById('totalLocks').innerText = totalLocks;
    document.getElementById('totalStocks').innerText = totalStocks;
    document.getElementById('totalBarrels').innerText = totalBarrels;
    
    document.getElementById('locks').value = '';
    document.getElementById('stocks').value = '';
    document.getElementById('barrels').value = '';
}

function calculateCommission() {
    let totalSales = (lockPrice * totalLocks) + (stockPrice * totalStocks) + (barrelPrice * totalBarrels);
    let commission = 0.0;

    // คำนวณค่าคอมมิชชั่นตามยอดขาย
    if (totalSales > 1800.0) {
        commission = 0.10 * 1000.0;
        commission += 0.15 * 800.0;
        commission += 0.20 * (totalSales - 1800.0);
    } else if (totalSales > 1000.0) {
        commission = 0.10 * 1000.0;
        commission += 0.15 * (totalSales - 1000.0);
    } else {
        commission = 0.10 * totalSales;
    }

    document.getElementById('totalSales').innerText = totalSales.toFixed(2);
    document.getElementById('commission').innerText = commission.toFixed(2);
}

function reset() {
    totalLocks = 0;
    totalStocks = 0;
    totalBarrels = 0;
    
    document.getElementById('totalLocks').innerText = '0';
    document.getElementById('totalStocks').innerText = '0';
    document.getElementById('totalBarrels').innerText = '0';
    document.getElementById('totalSales').innerText = '0.00';
    document.getElementById('commission').innerText = '0.00';
    
    document.getElementById('locks').value = '';
    document.getElementById('stocks').value = '';
    document.getElementById('barrels').value = '';
}
