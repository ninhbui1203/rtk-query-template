/* @format */

import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const formData = {};
const CreatePost = () => {
  const handleSubmit = (formData, formikBag) => {
    console.log(formData);
  };

  const handleResetForm = () => {
    formik.resetForm();
  };

  const validationForm = Yup.object().shape({
    title: Yup.string().label('Title').required(),
    featuredImage: Yup.string().label('Featured Image').required(),
    description: Yup.string().label('Description').required(),
    publishDate: Yup.date().label('Publish Date').required().min(new Date()),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      featuredImage: '',
      description: '',
      publishDate: '',
      publish: false,
    },
    onSubmit: handleSubmit,
    validationSchema: validationForm,
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={handleResetForm}>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Title'
          required
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <span className='text-red-500 text-sm'>{formik.errors.title}</span>
        )}
      </div>
      <div className='mb-6'>
        <label
          htmlFor='featuredImage'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Featured Image
        </label>
        <input
          type='text'
          id='featuredImage'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Url image'
          required
          value={formik.values.featuredImage}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.featuredImage && formik.errors.featuredImage && (
          <span className='text-red-500 text-sm'>{formik.errors.featuredImage}</span>
        )}
      </div>
      <div className='mb-6'>
        <div>
          <label
            htmlFor='description'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Description
          </label>
          <textarea
            id='description'
            rows={3}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
            placeholder='Your description...'
            required
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <span className='text-red-500 text-sm'>{formik.errors.description}</span>
          )}
        </div>
      </div>
      <div className='mb-6'>
        <label
          htmlFor='publishDate'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Publish Date
        </label>
        <input
          type='datetime-local'
          id='publishDate'
          className='block w-56 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Title'
          required
          value={formik.values.publishDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.publishDate && formik.errors.publishDate && (
          <span className='text-red-500 text-sm'>{formik.errors.publishDate}</span>
        )}
      </div>
      <div className='mb-6 flex items-center'>
        <input
          id='publish'
          type='checkbox'
          checked={formik.values.publish}
          className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
          onChange={formik.handleChange}
        />
        <label htmlFor='publish' className='ml-2 text-sm font-medium text-gray-900'>
          Publish
        </label>
      </div>
      <div>
        <Fragment>
          {/* <button
            type='submit'
            className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Update Post
            </span>
          </button> */}
          <button
            type='reset'
            className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Cancel
            </span>
          </button>
          <button
            className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
            disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            type='submit'
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Publish Post
            </span>
          </button>
        </Fragment>
      </div>
    </form>
  );
};

export default CreatePost;
