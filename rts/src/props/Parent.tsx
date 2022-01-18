import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='Purple' onClick={() => console.log('clicked')}>
      tesasdfsadfas
    </ChildAsFC>
  );
};

export default Parent;
