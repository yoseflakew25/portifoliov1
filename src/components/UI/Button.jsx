const Button = ({text}) => {
    return (
      <button className="rounded-lg border-2 border-solid border-[#64FFDA] bg-transparent text-sm px-6 py-2 font-semibold uppercase text-[#64FFDA] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#64FFDA] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        {text}
      </button>
    );
  };
  
  export default Button;
  