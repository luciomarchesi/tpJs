let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

let ticketsQuantity = document.querySelector(".ticketsQuantity");
ticketsQuantity.addEventListener("click", clearInput);

function ticketsPrice(evento) {
    evento.preventDefault();
    let ticketsQuantity = document.querySelector(".ticketsQuantity");

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector(".ticketsCategory");
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                break;
            }
        }

        document.querySelector(".ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;

    } else {
        document.querySelector(".ticketsQuantity").style.border = "2px solid red";
        ticketsQuantity.value = "";
        ticketsQuantity.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }

    ticketsSubmit();
}

function borrarOutput() {

    document.querySelector(".ticketsOutput").textContent = "Total a pagar:";

    let form = document.querySelector("#form");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
    }
}

function ticketsSubmit() {

    let form = document.querySelector("#form");
    inputCheck(form);
}

function inputCheck(form) {
    let arrayCheck = [];
    for (i = 0; i < 3; i++) {
        arrayCheck[i] = form[i].value;
        if (form[i].value == "") {
            document.querySelector("#" + form[i].id).style.border = "2px solid red";
            
        } else {
            document.querySelector("#" + form[i].id).style.border = "1px solid var(--gray-300)";
        }
    }

    if (arrayCheck.every(element => element !== "")) {
        if (form[2].value.includes('@') && form[2].value.includes('.')) {
            document.querySelector("#" + form[2].id).style.border = "1px solid var(--gray-300)";
            alert("Formulario enviado");
            form.submit();
        } else {
            document.querySelector("#" + form[2].id).style.border = "2px solid red"
            alert("Debe ingresar un correo válido");
        }
    } else {
        alert("Completar los campos en rojo");
    }
}

function clearInput(evento) {
    document.querySelector("#" + evento.target.id).style.border = "1px solid var(--gray-300)";
}