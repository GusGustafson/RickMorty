import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

export default function Email() {
  return (
    <form onSubmit={""} id="email">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            "--FormLabel-color": theme.vars.palette.primary.plainColor,
          })}
        >
          Correo electrónico
        </FormLabel>
        <Input
          sx={{ "--Input-decoratorChildHeight": "45px" }}
          placeholder="email@.com"
          type="email"
          required
        />
      </FormControl>
    </form>
  );
}
