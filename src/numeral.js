import numeral from 'numeral';

numeral.language('cs', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'tis.',
        million: 'mil.',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function () {
        return '.';
    },
    currency: {
        symbol: 'Kč'
    }
});

numeral.language('cs');