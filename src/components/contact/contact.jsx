import {
  faGlobe,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  Text,  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", phone: "", email: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <>
      <div className=" flex flex-col contact md:flex-row justify-between md:mt-20 md:px-32 py-5 md: py-20 md:mb-40 md:h-[500px]">
        <div className="c1">
          <div className="c2">
            <h1 className="c3">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: 30, color: "#2F80ED" }}
              />{" "}
              Call Us
            </h1>
            <p>+91 12345 12345</p>
          </div>
          <div className="c2">
            <h1 className="c3">
              <FontAwesomeIcon
                icon={faMapMarker}
                style={{ fontSize: 30, color: "#2F80ED" }}
              />{" "}
              Location
            </h1>
            <p>Ghaziabad, Uttar Pradesh</p>
          </div>
          <div className="c2">
            <h1 className="c3">
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ fontSize: 30, color: "#2F80ED" }}
              />{" "}
              Mail Us
            </h1>
            <p>info@markall.in</p>
          </div>
        </div>
        <div className="c4 ">
          <h1 className="c5 ">Contact Now</h1>
          <Container>
            {error && (
              <Text color="red.300" my={4} fontSize="xl">
                {error}
              </Text>
            )}
          </Container>
          <p className="c6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            inventore libero eaque aliquid obcaecati repudiandae magnam corrupti
            illo perspiciatis porro consequatur
          </p>
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <Input
              type="text"
              name="name"
              variant="flushed"
              placeholder="Name *"
              className="c7 "
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <Input
              type="email"
              name="email"
              variant="flushed"
              placeholder="Email *"className="c7 "
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
        mb={5}
        isRequired
        isInvalid={touched.number && !values.number}
      >
        <Input
          type="text"
          name="number"
          variant="flushed"
          placeholder="Phone *" className="c7 "
          errorBorderColor="red.300"
          value={values.number}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <Input
              type="message"
              name="message"
              variant="flushed"
              placeholder="Message" className="c8 "
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            variant="solid"
            colorScheme='blue'
            className="c9 submit-btn"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.number ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit Form
          </Button>
      
        </div>
      </div>
    </>
  );
};
export default Contact;
