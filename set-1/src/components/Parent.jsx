import Child from "./Child";

export default function Parent() {
  const name = "Aprajita Mishra";
  const age = 17
  ;

  return (
    <div>
      <h2>Parent Component</h2>
      <Child name={name} age={age} />
    </div>
  );
}