class Utility {

    printArray(array, id) {
        array.forEach(element => {
            document.querySelector(`${id}`).innerHTML += `${element} `;
        });
    }

    concatPrintHTML (identifier, text) {
        document.querySelector(`${identifier}`).innerHTML += ` ${text}`;
    }

    printHTML (identifier, text) {
        document.querySelector(`${identifier}`).innerHTML = ` ${text}`;
    }
}

export default Utility;