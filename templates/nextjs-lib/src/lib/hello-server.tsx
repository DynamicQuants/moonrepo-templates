// React server components are async so you make database or API calls.
export async function HelloServer() {
  return (
    <div>
      <h1>Hello from Server!</h1>
    </div>
  );
}
