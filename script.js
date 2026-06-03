function validarFase1() {

    const valor =
        document.getElementById("resposta1").value;

    if (valor == 32) {

        document
            .getElementById("fase1")
            .classList.add("oculto");

        document
            .getElementById("fase2")
            .classList.remove("oculto");

    } else {

        alert("Resposta incorreta. Tente novamente.");

    }
}

function validarFase2() {

    const valor =
        document.getElementById("resposta2")
        .value
        .trim()
        .toLowerCase();

    if (valor === "pai") {

        document
            .getElementById("fase2")
            .classList.add("oculto");

        document
            .getElementById("fase3")
            .classList.remove("oculto");

    } else {

        alert("Resposta incorreta.");

    }
}

function validarFase3() {

    const valor =
        document.getElementById("resposta3")
        .value
        .trim()
        .toLowerCase();

    if (valor === "mapa") {

        document
            .getElementById("fase3")
            .classList.add("oculto");

        document
            .getElementById("final")
            .classList.remove("oculto");

    } else {

        alert("Resposta incorreta.");

    }
}
