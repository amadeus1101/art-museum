import InputStyles from './styled';
import { useInput } from '../../utils/useInput';

function Input() {
  const value = useInput('');
  return (
    <InputStyles>
      <input {...value} type="text" placeholder="Search Art, Artist, Work..." />
    </InputStyles>
  );
}

export default Input;
