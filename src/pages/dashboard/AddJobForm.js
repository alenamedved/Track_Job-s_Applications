import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, TextField, Grid, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextInput from '../../components/addJobForm/TextInput';
import SelectField from '../../components/addJobForm/SelectField';
import { useAuth } from '../../components/context/authUserContext';
// import { ref, set, get, query, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const status = ['pending', 'applied', 'phone-call', 'interview', 'heard-back'];

const jobType = ['remote', 'hybrid', 'full-time', 'part-time', 'intership'];

const initialJobFormState = {
  jobTitle: '',
  company: '',
  date: new Date(),
  status: '',
  response: '',
  jobType: '',
  notes: '',
};

const AddJobForm = () => {
  const [data, setData] = useState(initialJobFormState);
  const [disabled, setDisabled] = useState(false);
  const { authUser } = useAuth();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const docId = searchParams.get('id');
    if (docId) {
      console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
      const applicatioRef = collection(db, authUser.uid);
      const docRef = doc(db, authUser.uid, docId);
      try {
        const docSnap = getDoc(docRef).then((doc) =>
          setData({ ...doc.data(), id: doc.id, date: new Date(doc.data().date.seconds * 1000) }),
        );
      } catch (error) {
        console.log(error);
        toast.error('Sorry, didn&apstt find the application data');
      }
    }
  }, []);
  console.log(data, '******************************');
  // console.log(data.date.toDate());
  const onChange = (e) => {
    const tempObj = { ...data };
    if (e.target) {
      const { name, value } = e.target;
      setData({ ...tempObj, [name]: value });
    } else {
      setData({ ...tempObj, date: e });
    }
  };
  const writeApplicationData = async () => {
    if (!data.jobTitle || !data.company) {
      toast.error('Fill out required fields');
      return;
    }
    try {
      setDisabled(true);
      await addDoc(collection(db, authUser.uid), {
        ...data,
      }).then(() => {
        setDisabled(false);
        setData(initialJobFormState);
        toast.success('The application was saved');
      });
    } catch (error) {
      console.log(error);
      toast.error(error.massage ? error.massage : 'Sorry, something is wrong');
    }
  };

  return (
    <Box px={4} my={6} component="form">
      <ToastContainer />
      <Typography mb={2} component="h2" variant="h6" textAlign="center">
        Create a Job Application
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={5} sm={12} sx={{ width: '100%' }}>
          <Stack spacing={4}>
            <TextInput
              value={data.jobTitle}
              label="Job Title"
              name="jobTitle"
              onChange={onChange}
              required
            />
            <SelectField
              items={status}
              value={data.status}
              label="Status"
              name="status"
              onChange={onChange}
              disabled={disabled}
            />
          </Stack>
        </Grid>
        <Grid item md={5} sm={12} sx={{ width: '100%' }}>
          <Stack spacing={4}>
            <TextInput value={data.company} label="Company" name="company" onChange={onChange} />
            <SelectField
              items={jobType}
              value={data.jobType}
              label="Job Type"
              name="jobType"
              onChange={onChange}
              disabled={disabled}
            />
          </Stack>
        </Grid>
        <Grid item md={2} sm={12} sx={{ width: '100%' }}>
          <Stack spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Application Date"
                inputFormat="dd/MM/yyyy"
                // value={new Date(data.date)}
                value={data.date}
                onChange={onChange}
                disabled={disabled}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <TextInput value={data.response} label="Response" name="response" onChange={onChange} />
          </Stack>
        </Grid>
        <Grid item md={10} sm={12} sx={{ width: '100%' }}>
          <TextInput value={data.notes} label="Notes" name="notes" onChange={onChange} />
        </Grid>
        <Grid item md={2} sm={12}>
          <Button
            onClick={writeApplicationData}
            sx={{ width: '100%', height: '100%' }}
            disabled={disabled}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddJobForm;
