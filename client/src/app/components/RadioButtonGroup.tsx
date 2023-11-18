import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

interface Props {
  options: any;
  onChange: (event: any) => void;
  selectedValue: string;
}

export default function RadioButtonGroup({
  options,
  onChange,
  selectedValue,
}: Readonly<Props>) {
  return (
    <FormControl component='fieldset'>
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ id, value, label }) => (
          <FormControlLabel
            key={id}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
