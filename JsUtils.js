var JsUtils = (typeof module !== 'undefined' && module.exports) || {};

(function (exports) {
    exports.isObject = isObject;
    exports.isNotEmptyString = isNotEmptyString;
    exports.isNotNullObject = isNotNullObject;
    exports.cloneObject = cloneObject;

    function isObject(val) {
        if (typeof val === 'object') {
            return true;
        }

        return false;
    }

    function isNotEmptyString(value) {
        if (value && typeof value === 'string') {
            return true;
        }

        return false;
    }

    function isNotNullObject(value) {
        if (value && typeof value === 'object') {
            return true;
        }

        return false;
    }

    function cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
})(JsUtils);