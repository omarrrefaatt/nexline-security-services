function Button({ variant = "primary", children, href = "#", ...props }) {
  return (
    <a href={href} className={`btn btn--${variant}`} {...props}>
      {children}
    </a>
  );
}

export default Button;
