import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Фильтр по имени
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  );
};

Filter.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
