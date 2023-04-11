/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    title: yup.string().required(),
    author: yup.string().required(),
  });

  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(
      addBook({
        item_id: Date.now(),
        ...data,
        category: 'Fiction',
      }),
    );
    reset();
  };

  return (
    <div>
      <div>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="bookname">
            <input
              type="text"
              name="bookname"
              id="input"
              placeholder="Book title"
              {...register('title')}
            />
          </label>
          <label htmlFor="bookauthor">
            <input
              type="text"
              name="bookauthor"
              id="input"
              placeholder="Author name"
              {...register('author')}
            />
          </label>
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
