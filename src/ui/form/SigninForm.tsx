import Input from "./Input";
import "./form.css"
import Button from "./Button";

const SigninForm = () => {
  return (
    <div>
    <form>
      <Input type="text" placeholder="name" />
      <Input type="email" placeholder="email" />
      <Button text="submit"/>
    </form>
    </div>
  );
};

export default SigninForm;