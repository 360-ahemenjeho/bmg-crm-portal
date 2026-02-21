import { radius } from "@/constants/theme";
import { FormControl, FormHelperText, FormLabel, FilledInput, OutlinedInput } from "@mui/material";

/**
 * @param {object} props
 * @param {string} [props.label]
 * @param {(name: string) => any} [props.error]
 * @param {boolean} [props.disabled]
 * @param {keyof typeof radius} [props.round="4"]
 * @param {(name: string, value: any) => void} [props.onChange]
 * @param {(name: string, value: any) => void} [props.onBlur]
 * @param {string} props.name
 * @param {(name: string) => any} props.value
 * @param {boolean} [props.fullWidth=true]
 * @param {"filled" | "outlined"} [props.variant="filled"]
 * @param {import("@mui/material").FilledInputProps | import("@mui/material").OutlinedInputProps} [props.rest]
 */
export default function TextField({
  label,
  error,
  round = 4,
  name,
  onBlur,
  onChange,
  value,
  fullWidth = true,
  variant = "outlined",
}) {
  const _error = error ? error(name) : null;
  const RootInput = variant === "outlined" ? OutlinedInput : FilledInput;

  return (
    <FormControl error={!!_error} fullWidth={fullWidth}>
      {label && <FormLabel>{label}</FormLabel>}
      <RootInput
        name={name}
        value={value(name)}
        onChange={onChange ? (e) => onChange(name, e.target.value) : undefined}
        onBlur={onBlur ? (e) => onBlur(name, e.target.value) : undefined}
        sx={{
          borderRadius: radius[round],
        }}
      />
      {_error && <FormHelperText>{_error}</FormHelperText>}
    </FormControl>
  );
}
