import React from 'react';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Box, Button,TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToTabel } from '../../store/tabelSlice';

const BasicForm = () => {
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required").matches(/^'?\p{L}+(?:[' ]\p{L}+)*'?$/u,'Special Characters and Numbers are not allowed').min(3,'Please Enter Min 3 letters')
  });
  return (
    <Box>
      <Formik
        initialValues={{
          name: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addToTabel(values))
          resetForm()
        }}
      >
        {(props) => {
          return (
            <Form>
              <Field as={TextField} id="name" name="name" label='Add Task' placeholder="Add Task" autoComplete='off' sx={{ my: 3 }} error={props.errors.name ? true : false} fullWidth
                helperText={<ErrorMessage name="name" />}
              />
              <Button variant='outlined' type="submit" >Submit</Button>
            </Form>
          )
        }
        }
      </Formik>
    </Box>
  )

}

export default BasicForm
