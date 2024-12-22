// Fungsi klaim slip gaji
function claimSalary() {
    var employeeId = document.getElementById('employee_id').value;
    var employeeName = document.getElementById('employee_name').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    if (employeeId === "" || employeeName === "" || month === "" || year === "") {
        document.getElementById('error').style.display = 'block';
        document.getElementById('result').style.display = 'none';
    } else {
        document.getElementById('error').style.display = 'none';
        document.getElementById('result').style.display = 'block';

        console.log("ID Karyawan: " + employeeId);
        console.log("Nama Karyawan: " + employeeName);
        console.log("Bulan: " + month);
        console.log("Tahun: " + year);
    }
}