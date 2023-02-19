import { formatAreaField } from '../../src/utils/form';

test('Format area object', () => {
  expect(formatAreaField({})).toBe('');
  expect(formatAreaField({ mainText: 'main' })).toBe('main');
  expect(formatAreaField({ mainText: 'main', secondaryText: '' })).toBe('main');
  expect(formatAreaField({ mainText: 'main', secondaryText: 'secondary' })).toBe(
    'main - secondary'
  );
});
