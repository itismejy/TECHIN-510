import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Typography,
  Stack,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface BirthDateFormProps {
  onResult: (result: any) => void;
}

const BirthDateForm = ({ onResult }: BirthDateFormProps) => {
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to backend
    onResult({
      birthDate,
      location,
      gender,
      // Mock data for now
      bazi: {
        year: '甲子',
        month: '乙丑',
        day: '丙寅',
        hour: '丁卯'
      },
      personality: 'Creative and ambitious',
      compatibility: 'High compatibility with water signs'
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          mb: 4,
          color: 'primary.main',
          textAlign: 'center',
          fontWeight: 600
        }}
      >
        Enter Your Birth Information
      </Typography>

      <Stack spacing={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Birth Date and Time"
            value={birthDate}
            onChange={(newValue) => setBirthDate(newValue)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': {
                  borderColor: 'primary.light',
                },
              },
            }}
          />
        </LocalizationProvider>
        
        <TextField
          fullWidth
          label="Birth Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover fieldset': {
                borderColor: 'primary.light',
              },
            },
          }}
        />
        
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
            sx={{
              borderRadius: 2,
              '&:hover fieldset': {
                borderColor: 'primary.light',
              },
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>

        <Button 
          type="submit" 
          variant="contained" 
          size="large"
          sx={{
            mt: 4,
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
          }}
        >
          Calculate My Fortune
        </Button>
      </Stack>
    </Box>
  );
};

export default BirthDateForm; 