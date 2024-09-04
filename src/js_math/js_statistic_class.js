import Utility from './js_mathfy_class.js';

class Statistics extends Utility {

    mean (sample) {   
        let sum = 0;
        
        sample.forEach(element => {
            sum += element;
        });
        
        return (sum / sample.length).toFixed(2);
    }

    median (sample) {
        let median = 0;
        const half = parseInt(sample.length / 2);       

        (sample.length % 2 == 0) ? median = (sample[half] + sample[half - 1]) / 2 : median = sample[half];

        return median;
    }

    mode (sample) {
        const count = {};
        let mode = [];
        let maxCount = 0;
        
        sample.forEach(num => {
            if (count[num]) {
                count[num]++;
            } else {
                count[num] = 1;
            }
        });

        for(const num in count) {
            if(count[num] > maxCount) {
                maxCount = count[num];
                mode = [num];
            }else if (count[num] === maxCount) {
                mode.push(num);
            }
        }
        return (mode.length != sample.length) ? mode.map(Number) : 0;
    }

    calculateStandardDeviationValues (sample, mean) {
        let calcDeviation = [];

        sample.forEach(value => {
            calcDeviation.push((value - parseFloat(mean)) ** 2.0);
        });
        return calcDeviation;
    }

    calculateStandardDeviation (standardDeviationValues, sampleSize) {
        return Math.sqrt(standardDeviationValues.reduce((acc, value) => acc + value, 0) / (sampleSize -1)).toFixed(3);
    }

    coefficientVariation (stdDeviation, mean) {
        return ((stdDeviation / mean) * 100).toFixed(2);
    }

    calculateCoefficientSkewnessValues (sample, mean, standardDeviation) {
        let calcSkewness = [];
        
        sample.forEach(element => {
            calcSkewness.push((((element - mean) / standardDeviation) ** 3.0).toFixed(8));
        })
        return calcSkewness;
    }

    calculateCoefficientSkewness (coefficientSkewnessValues, sampleSize) {
        let sum = coefficientSkewnessValues.reduce((acc, value) => acc + parseFloat(value), 0);
        
        return (sampleSize / ((sampleSize - 1) * (sampleSize - 2)) * sum).toFixed(3);
    }

    calculateKurtosisValues (sample, mean, standardDeviation) {
        let calcKurtosis = [];

        sample.forEach(element => {
            calcKurtosis.push(((element - mean) / standardDeviation) ** 4.0).toFixed(3);
        });
        return calcKurtosis;
    }

    calculateKurtosis (kurtosisValues, sampleSize) {
        let sum = kurtosisValues.reduce((acc, value) => acc + parseFloat(value), 0);

        let firstTerm = (sampleSize * (sampleSize + 1) / ((sampleSize - 1) * (sampleSize - 2) * (sampleSize - 3)) * sum);
        let secondTerm = (3.0 * ((sampleSize -1) ** 2.0)) / ((sampleSize - 2) * (sampleSize - 3));

        return (firstTerm - secondTerm).toFixed(2);
    }
}

export default Statistics;