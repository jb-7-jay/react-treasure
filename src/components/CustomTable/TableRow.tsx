type Props = {
  data: any;
  theadData: any[];
};

const TableRow = ({ data, theadData }: Props) => {
  return (
    <tr>
      {theadData.map((item) => {
        const element = item.render ? item.render(data[item.keyIndex]) : data[item.keyIndex];
        return <td key={item.keyIndex}>{element}</td>;
      })}
    </tr>
  );
};

export default TableRow;
