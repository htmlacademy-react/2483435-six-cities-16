import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/store-types/store-type';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { useAppDispatch, useAppSelector };
