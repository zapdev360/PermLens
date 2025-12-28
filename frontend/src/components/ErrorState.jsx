function ErrorState({ message }) {
  return (
    <div className="mt-4 rounded bg-red-500/10 px-4 py-2 text-sm text-red-300">
      {message}
    </div>
  );
}

export default ErrorState;