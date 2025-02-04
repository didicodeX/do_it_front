import "./form.css"

const input = ({type, placeholder}: {type: string, placeholder: string}) => {
  return (
      <input type={type} placeholder={placeholder}/>
  );
};

export default input;