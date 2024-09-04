import Statistics from './js_statistic_class.js';

let stst = new Statistics();

document.querySelector('.button').addEventListener('click', () => {

    const input = document.getElementById('input').value.trim();

    let sample = input.split(" ");
    sample = sample.map(Number);
    let sampleSize = sample.length;

    let mean = stst.mean(sample);
    let mode = stst.mode(sample);
    let median = stst.median(sample.sort());
    let standardDeviationValues = stst.calculateStandardDeviationValues(sample, mean);
    let standardDeviation = stst.calculateStandardDeviation(standardDeviationValues, sampleSize);
    let coefficientVariation = stst.coefficientVariation(standardDeviation, mean);
    let coefficientSkewnessValues = stst.calculateCoefficientSkewnessValues(sample, mean, standardDeviation);
    let coefficientSkewness = stst.calculateCoefficientSkewness(coefficientSkewnessValues, sampleSize);
    let kurtosisValues = stst.calculateKurtosisValues(sample, mean, standardDeviation);
    let kurtosis = stst.calculateKurtosis(kurtosisValues, sampleSize);

    stst.printHTML('.mean', `Média: ${mean}`);
    stst.printHTML('.median', `Mediana: ${median}`);
    stst.printHTML('.stdDeviation', `Desvio Padrão: ${standardDeviation}`);
    stst.printHTML('.coefficientVariation', `Coeficiente de Variação: ${coefficientVariation}%`);
    stst.printHTML('.mode', `Moda: `);
    stst.printHTML('.coefficientSkewness', `Assímetria: ${coefficientSkewness}`);
    stst.printHTML('.kurtosis', `Curtose: ${kurtosis}`);

    stst.printArray(mode, '.mode');

    if (mode.length == sampleSize) {
        stst.concatPrintHTML('.mode', '(Amodal)');
    } else if (mode.length == 1) {
        stst.concatPrintHTML('.mode', '(Unimodal)');
    } else if (mode.length == 2) {
        stst.concatPrintHTML('.mode', '(Bimodal)');
    } else if (mode.length > 2) {
        stst.concatPrintHTML('.mode', '(Multimodal)');
    }
});