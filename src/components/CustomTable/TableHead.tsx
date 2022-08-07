type Props = {
  item: any;
};

const TableHeadItem = ({ item }: Props) => {
  return <th key={item.keyIndex}>{item.label}</th>;
};

export default TableHeadItem;
