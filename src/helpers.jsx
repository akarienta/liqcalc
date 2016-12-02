import React from 'react';
import _ from 'lodash';

const commasToPoints = function (x) {
    if (_.isUndefined(x)) {
        return undefined;
    }
    return x.replace(/,/g, '.');
};

const isNumeric = function (x) {
    x = commasToPoints(x);
    return !(isNaN(x)) && (typeof x !== 'object') &&
        (x !== Number.POSITIVE_INFINITY) && (x !== Number.NEGATIVE_INFINITY);
};

const toFloat = function (x) {
    if (isNumeric(x)) {
        x = commasToPoints(x);
        const float = parseFloat(x);
        return isNaN(float) ? undefined : float;
    } else {
        return undefined;
    }
};

const validate = function (value, label) {
    let error;
    if (_.isEmpty(value)) {
        error = <span>Pole <b>{label}</b> nesmí být prázdné.</span>;
    } else if (!isNumeric(value)) {
        error = <span>Pole <b>{label}</b> musí být kladné číslo.</span>;
    } else if (toFloat(value) === 0) {
        error = <span>Hodnota <b>{label}</b> nesmí být nula.</span>;
    }
    return error;
};

export {toFloat, validate}