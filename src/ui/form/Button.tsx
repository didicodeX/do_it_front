import "./button.css"

const Button = ({text}: {text: string}) => {
  return (
    <button>
      {text}
    </button>
  );
};

export default Button;