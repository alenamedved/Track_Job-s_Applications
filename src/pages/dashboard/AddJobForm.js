import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, Grid, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import TextInput from '../../components/addJobForm/TextInput';
import SelectField from '../../components/addJobForm/SelectField';

const status = ['pending', 'phone-call', 'interview'];

const jobType = ['remote', 'full-time', 'part-time', 'intership'];

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
  const onChange = (e) => {
    console.log(e);
    console.log(e);
    const tempObj = { ...data };
    if (e.target) {
      const { name, value } = e.target;
      console.log(name, value);
      setData({ ...tempObj, [name]: value });
    } else {
      console.log(typeof e);
      console.log(Object.keys(e));
      setData({ ...tempObj, date: e });
    }
  };

  const disabled = false;
  const value = '';
  return (
    <Box width="80%" px={4} my={6}>
      <Typography mb={2} component="h2" variant="h6" textAlign="center">
        Create a Job Application
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={5} sm={12}>
          <Stack spacing={4}>
            <TextInput
              value={data.jobTitle}
              label="Job Title"
              name="jobTitle"
              onChange={onChange}
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
        <Grid item md={5} sm={12}>
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
        <Grid item md={2} sm={12}>
          <Stack spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Application Date"
                inputFormat="dd/MM/yyyy"
                value={data.date}
                onChange={onChange}
                disabled={disabled}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextInput value={data.response} label="Response" name="response" onChange={onChange} />
          </Stack>
        </Grid>
        <Grid item md={10} sm={12}>
          <TextInput value={data.notes} label="Notes" name="notes" onChange={onChange} />
        </Grid>
        <Button onClick={() => console.log(data)}>Submit</Button>
      </Grid>
    </Box>
  );
};

export default AddJobForm;
