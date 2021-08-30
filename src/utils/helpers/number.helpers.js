import _ from 'lodash';

export const genRandom = (len) =>
  _.random(parseInt(_.padEnd(1, 16, '0')), parseInt(_.padEnd(9, 16, '9')));

export const mapRange = (
  value,
  placeholder,
  rangeLeftBorder = 0,
  rangeRightBorder = value.length
) => {
  const val = String(value);

  return val
    .split('')
    .map((v, i) => {
      if (i >= rangeLeftBorder && i < val.length - rangeRightBorder) {
        return placeholder;
      }

      return v;
    })
    .join('');
};

export const format = (value) => {
  const val = String(value);

  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = val.replace(/[^\d]/g, '');

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(' ')
  );
};
