import TableRow from './TableRow';
import TableHeadItem from './TableHead';

type Props = {
  tbodyData: any;
  theadData: any[];
  customClass: any;
};

const CustomTable = ({ theadData, tbodyData, customClass }: Props) => {
  return (
    <div className="table-wrapper">
      <table className={customClass?.root}>
        <thead>
          <tr>
            {theadData.map((h) => {
              return <TableHeadItem key={h.title} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((item: any) => {
            return <TableRow key={item.id} data={item} theadData={theadData} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
