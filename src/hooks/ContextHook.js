import { useContext } from 'react';
import { appContext } from '../context/Context';

function ContextHook() {
  const result = useContext(appContext);
  return result;
}

export default ContextHook;