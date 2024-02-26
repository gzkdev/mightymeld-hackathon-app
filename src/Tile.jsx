export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="aspect-square flex items-center justify-center bg-indigo-300 rounded-lg text-[0px]"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="flex items-center justify-center p-1 bg-indigo-500 rounded-lg aspect-square text-indigo-50">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="aspect-square flex items-center justify-center p-1 bg-indigo-50 text-indigo-300 rounded-lg">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      ?
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
