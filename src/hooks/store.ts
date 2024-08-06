import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/store-types/store-type';
import { useMemo } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions)=>{
  const dispatch = useAppDispatch();
  return useMemo(()=> bindActionCreators(actions, dispatch), []);
};

export { useAppDispatch, useAppSelector, useActionCreators };
