import style from "./About.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
function About() {
  return (
    <section className={style.container}>
      <div className={style.form}>
        <Heading>Contactanos</Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Telefono</FormLabel>
          <Input type="number" />
          <FormLabel>Mensaje</FormLabel>
          <Textarea />
        </FormControl>
      </div>
    </section>
  );
}

export default About;
