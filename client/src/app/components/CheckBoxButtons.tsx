import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface Props {
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
}

export default function CheckBoxButtons({
  items,
  checked,
  onChange,
}: Readonly<Props>) {
  const [checkedItems, setCheckedItems] = useState(checked ?? []);

  const handleChecked = (value: string) => {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked: string[] = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked);
  };

  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.indexOf(item) !== -1}
              onClick={() => handleChecked(item)}
            />
          }
          key={item}
          label={item}
        />
      ))}
    </FormGroup>
  );
}
