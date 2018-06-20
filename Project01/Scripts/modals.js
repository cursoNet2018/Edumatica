function popupEmployeeEdit(employeeid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Employees/Edit/',
        data: {
            'id': employeeid
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};

function popupEmployeeDetails(employeeid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Employees/Details/',
        data: {
            'id': employeeid
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};

function popupEmployeeDelete(employeeid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Employees/Delete/',
        data: {
            'id': employeeid
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};

function popupEmployeeCreate() {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Employees/Create/',
        data: {
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};



function popupDepartmentsEdit(departmentid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Departments/Edit/',
        data: {
            'id': departmentid
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};

function popupDepartmentsDetails(departmentid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Departments/Details/',
        data: {
            'id': departmentid
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};

function popupDepartmentsDelete(departmentid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Departments/Delete/',
        data: {
            'id': departmentid
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};

function popupDepartmentsCreate() {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/Departments/Create/',
        data: {
        },
        success: function (response) {
            //$("#contenedor").html(response);
            $("#show-modal").modal({ show: true, keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    //$("#contenedor").html("<span style='color:green;'>Texto de Alonso</span>");

};