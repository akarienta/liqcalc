import numeral from 'numeral';

class ResultItemDTO {
    constructor(label) {
        this.label = label;
    }

    setValue(value, totalValue) {
        this.totalValue = totalValue;
        this.value = Math.round(value * 10) / 10;
    }

    getValue() {
        return numeral(this.value).format('0.0');
    }

    getDrops() {
        return numeral(this.value * 20).format('0');
    }

    getPercentage() {
        return numeral(this.value / this.totalValue * 100).format('0');
    }
}

class ResultDTO {
    nicotineBase = new ResultItemDTO('Nikotinová báze');
    noNicotineBase = new ResultItemDTO('Nulka');
    flavour = new ResultItemDTO('Příchuť');
}

export {ResultItemDTO, ResultDTO};

