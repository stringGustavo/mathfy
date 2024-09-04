import Statistics from './js_statistic_class.js';

let stst = new Statistics();

document.querySelector('.button').addEventListener('click', () => {

    const input = document.getElementById('input').value.trim();

    let sample = input.split(" ");
    sample = sample.map(Number);

    const mean = getMeanValue(sample);
    const median = getMedianValue(sample);
    const mode = getModeValue(sample);

    const standardDeviation = getStandardDeviationValue(sample, mean);
    const variation = getVariationValue(standardDeviation, mean);
    const skewness = getSkewnessValue(sample, mean, standardDeviation);
    const kurtosis = getKurtosisValue(sample, mean, standardDeviation);

    stst.printHTML('.mean', `Média: ${ mean }`);
    stst.printHTML('.median', `Mediana: ${ median }`);
    stst.printHTML('.mode', `Moda: `);

    (mode != 0) ? stst.printList(mode, '.mode'): "";

    stst.printHTML('.stdDeviation', `Desvio Padrão: ${ standardDeviation }`);
    stst.printHTML('.coefficientVariation', `Coeficiente de Variação: ${ variation }%`);
    stst.printHTML('.coefficientSkewness', `Assímetria: ${ skewness }`);
    stst.printHTML('.kurtosis', `Curtose: ${ kurtosis }`);

    if (mode == 0) {
        stst.concatPrintHTML('.mode', '(Amodal)');
    } else if (mode.length == 1) {
        stst.concatPrintHTML('.mode', '(Unimodal)');
    } else if (mode.length == 2) {
        stst.concatPrintHTML('.mode', '(Bimodal)');
    } else if (mode.length > 2) {
        stst.concatPrintHTML('.mode', '(Multimodal)');
    }
});

const getMeanValue = (sample) => {
    return stst.mean(sample);
}

const getModeValue = (sample) => {
    return stst.mode(sample);
}

const getMedianValue = (sample) => {
    return stst.median(sample.sort());
}

const getStandardDeviationValue = (sample, mean) => {
    let standardDeviationValues = stst.calculateStandardDeviationValues(sample, mean);
    return stst.calculateStandardDeviation(standardDeviationValues, sample.length);
}

const getVariationValue = (standardDeviation, mean) => {
    return stst.coefficientVariation(standardDeviation, mean);
}

const getSkewnessValue = (sample, mean, standardDeviation) => {
    let coefficientSkewnessValues = stst.calculateCoefficientSkewnessValues(sample, mean, standardDeviation);
    return stst.calculateCoefficientSkewness(coefficientSkewnessValues, sample.length);
}

const getKurtosisValue = (sample, mean, standardDeviation) => {
    let kurtosisValues = stst.calculateKurtosisValues(sample, mean, standardDeviation);
    return stst.calculateKurtosis(kurtosisValues, sample.length);
}
