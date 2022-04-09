import './cell-list.css';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import { Fragment, useEffect } from 'react';
import { useActions } from '../hooks/use-actions';
import { saveCells } from '../state/action-creators';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) =>
    cells?.order.map((id) => cells.data[id])
  );

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells?.map((cell) => {
    return (
      <Fragment key={cell.id}>
        <CellListItem cell={cell} />
        <AddCell previousCellId={cell.id} />
      </Fragment>
    );
  });

  return (
    <div className='cell-list'>
      <AddCell forceVisible={cells?.length === 0} previousCellId={''} />
      {renderedCells}
    </div>
  );
};

export default CellList;
