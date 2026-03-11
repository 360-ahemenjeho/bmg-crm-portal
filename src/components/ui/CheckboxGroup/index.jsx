import { FormControl, FormLabel, FormHelperText, FormGroup, FormControlLabel } from "@mui/material";
import { Checkbox } from "@/components/ui";

/**
 * @typedef {object} CheckboxGroupProps
 * @property {string} [label]
 * @property {(name: string) => any} [error]
 * @property {boolean} [disabled]
 * @property {string} name
 * @property {(name: string) => any} value
 * @property {(name: string, value: any) => void} [onChange]
 * @property {any[]} options
 * @property {(option: any) => string } renderOptionLabel
 * @property {(option: any) => any} renderOptionValue
 * @property {boolean} [row=true]
 * @property {boolean} [fullWidth=true]
 */

/**
 * @param {CheckboxGroupProps} props
 */
export default function CheckboxGroup({
  label,
  error,
  name,
  value,
  onChange,
  options = [],
  renderOptionLabel,
  renderOptionValue,
  row = true,
  fullWidth = true,
  ...rest
}) {
  const _error = error ? error(name) : null;
  const currentValue = value(name);
  const selected = Array.isArray(currentValue) ? currentValue : [];

  const handleChange = (/** @type {any} */ optionValue) => {
    if (!onChange) return;
    const updated = selected.includes(optionValue)
      ? selected.filter((v) => v !== optionValue)
      : [...selected, optionValue];
    onChange(name, updated);
  };

  return (
    <FormControl error={!!_error} fullWidth={fullWidth}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormGroup {...rest} row={row}>
        {options.map((option, i) => {
          const optionLabel = renderOptionLabel(option);
          const optionValue = renderOptionLabel(option);
          return (
            <FormControlLabel
              key={i}
              value={optionValue}
              label={optionLabel}
              control={
                <Checkbox
                  checked={selected.includes(optionValue)}
                  onCheck={() => handleChange(optionValue)}
                />
              }
            />
          );
        })}
      </FormGroup>
      {_error && <FormHelperText>{_error}</FormHelperText>}
    </FormControl>
  );
}
