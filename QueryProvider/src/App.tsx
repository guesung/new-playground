import "./App.css";
import { useQuery } from "./modules";

function App() {
  return (
    <>
      <A />
      <B />
    </>
  );
}

export default App;

function getDataA(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toLocaleString());
    }, 1000);
  });
}

function getDataB(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toLocaleString());
    }, 1000);
  });
}

function A() {
  const { data, refetch, status } = useQuery<string>({
    queryFn: getDataA,
    queryKey: "data",
  });

  console.log(status);

  return (
    <div>
      A: {data}
      <button
        onClick={() => {
          refetch();
        }}
      >
        refetch
      </button>
    </div>
  );
}

function B() {
  const { data, refetch } = useQuery<string>({
    queryFn: getDataB,
    queryKey: "dataB",
  });

  return (
    <div>
      B: {data}
      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
}
