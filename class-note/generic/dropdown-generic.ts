// ❗ 기존의 union 방법으로 할 경우 value의 타입에 따라
//   interface를 만들어야 하므로 코드가 늘어남
// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

/**
 * 👍 interface에 generic을 적용하면
 *     타입코드도 줄이고 재사용성을 높일 수 있다.
 */
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'google.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(email => {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(product => {
  const item = createDropdownItem<number>(product);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
});