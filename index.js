import numeral from 'numeral';
import Debug from 'debug';
const debug = Debug('older');
export default unformat;

numeral.register('locale', 'pop-culture', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'K',
        million: 'M',
        billion: 'B',
        trillion: 'T'
    },
    ordinal: function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    },
    currency: {
        symbol: '$'
    }
});

numeral.locale('pop-culture');

function unformat(str) {
  return numeral(str)._value
}
