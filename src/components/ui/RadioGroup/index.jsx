import {
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

/**
 * @typedef {object} RadioGroupProps
 * @property {string} [label]
 * @property {(name: string) => any} [error]
 * @property {boolean} [disabled]
 * @property {string} name
 * @property {(name: string) => any} value
 * @property {(name: string, value: any) => void} [onChange]
 * @property {Array<{ label: string, value: any } | string>} options
 * @property {boolean} [row=true]
 * @property {boolean} [fullWidth=true]
 */

/**
 * @param {RadioGroupProps} props
 */
export default function RadioGroup({
  label,
  error,
  name,
  value,
  onChange,
  options = [],
  row = true,
  fullWidth = true,
  ...rest
}) {
  const _error = error ? error(name) : null;

  return (
    <FormControl error={!!_error} fullWidth={fullWidth}>
      {label && <FormLabel>{label}</FormLabel>}
      <MuiRadioGroup
        {...rest}
        row={row}
        name={name}
        value={value(name) ?? ""}
        onChange={onChange ? (e) => onChange(name, e.target.value) : undefined}
      >
        {options.map((option, i) => {
          const optionLabel = typeof option === "object" ? option.label : option;
          const optionValue = typeof option === "object" ? option.value : option;
          return (
            <FormControlLabel key={i} value={optionValue} label={optionLabel} control={<Radio />} />
          );
        })}
      </MuiRadioGroup>
      {_error && <FormHelperText>{_error}</FormHelperText>}
    </FormControl>
  );
}
