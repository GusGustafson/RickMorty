import * as React from "react";
import Stack from "@mui/joy/Stack";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";

export default function Password() {
  const [value, setValue] = React.useState("");
  const minLength = 12;
  return (
    <form onSubmit={""} id="password">
      <FormControl>
        <Stack
          spacing={0.5}
          sx={{
            "--hue": Math.min(value.length * 10, 120),
          }}
        >
          <FormLabel
            sx={(theme) => ({
              "--FormLabel-color": theme.vars.palette.primary.plainColor,
            })}
          >
            Contraseña
          </FormLabel>
          <Input
            sx={{ "--Input-decoratorChildHeight": "45px" }}
            placeholder="password"
            type="password"
            value={value}
            required
            onChange={(event) => setValue(event.target.value)}
          />

          <LinearProgress
            determinate
            size="sm"
            value={Math.min((value.length * 100) / minLength, 100)}
            sx={{
              bgcolor: "background.level3",
              color: "hsl(var(--hue) 80% 40%)",
            }}
          />

          <Typography
            level="body3"
            sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}
          >
            {value.length < 3 && "Very weak"}
            {value.length >= 3 && value.length < 6 && "Weak"}
            {value.length >= 6 && value.length < 10 && "Strong"}
            {value.length >= 10 && "Very strong"}
          </Typography>
        </Stack>
      </FormControl>
    </form>
  );
}
