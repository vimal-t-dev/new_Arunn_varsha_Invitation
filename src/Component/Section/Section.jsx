function Section({ children, className = "" }) {
  return (
    <section
      className={`relative w-full overflow-visible ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;